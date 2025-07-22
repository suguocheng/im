document.addEventListener('DOMContentLoaded', function() {
  protobuf.load('protobuf/bundle.json', function(err, root) {
    if (err) {
      alert('protobuf加载失败: ' + err);
      return;
    }
    window.pbRoot = root;
    // ========== 页面切换 ==========
    const loginPanel = document.getElementById('login-panel');
    const registerPanel = document.getElementById('register-panel');
    const mainPanel = document.getElementById('main-panel');
    const userInfoSpan = document.getElementById('user-info');
    const friendListDiv = document.getElementById('friend-list');
    const chatTitleDiv = document.getElementById('chat-title');
    const chatHistoryDiv = document.getElementById('chat-history');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const groupListDiv = document.getElementById('group-list');
    const tabFriends = document.getElementById('tab-friends');
    const tabGroups = document.getElementById('tab-groups');

    let currentFriend = null;
    let currentGroup = null;
    let ws = null;
    let myUid = null;
    let myUsername = null;
    let token = null;

    document.getElementById('to-register').onclick = e => {
      e.preventDefault();
      loginPanel.style.display = 'none';
      registerPanel.style.display = '';
    };
    document.getElementById('to-login').onclick = e => {
      e.preventDefault();
      registerPanel.style.display = 'none';
      loginPanel.style.display = '';
    };

    // ========== Protobuf 类型 ==========
    const LoginReq = root.lookupType('protocol.LoginReq');
    const RegisterReq = root.lookupType('protocol.RegisterReq');
    const APIResp = root.lookupType('protocol.APIResp');
    const UserInfoReq = root.lookupType('protocol.UserInfoReq');
    const UserInfoResp = root.lookupType('protocol.UserInfoResp');
    const FriendListReq = root.lookupType('protocol.FriendListReq');
    const FriendListResp = root.lookupType('protocol.FriendListResp');
    const IMMessage = root.lookupType('protocol.IMMessage');
    const GroupListReq = root.lookupType('protocol.GroupListReq');
    const GroupListResp = root.lookupType('protocol.GroupListResp');
    const Notification = root.lookupType('protocol.Notification');

    // ========== 登录/注册逻辑 ==========
    const loginBtn = document.getElementById('login-btn');
    const loginError = document.getElementById('login-error');
    loginBtn.onclick = async () => {
      loginError.textContent = '';
      const uid = document.getElementById('login-uid').value.trim();
      const pwd = document.getElementById('login-pwd').value;
      if (!uid || !pwd) {
        loginError.textContent = '请输入UID和密码';
        return;
      }
      try {
        // protobuf编码请求体
        const payload = { uid, password: pwd };
        const body = LoginReq.encode(LoginReq.create(payload)).finish();
        const resp = await fetch('http://localhost:8081/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-protobuf' },
          body
        });
        if (!resp.ok) throw new Error('网络错误');
        const buf = await resp.arrayBuffer();
        const msg = APIResp.decode(new Uint8Array(buf));
        if (msg.code !== 0) throw new Error(msg.msg);
        // token在data字段
        token = new TextDecoder().decode(msg.data);
        window.localStorage.setItem('token', token);
        showMainPanel();
        await fetchUserInfoAndFriends(token);
        connectWebSocket();
      } catch (e) {
        loginError.textContent = e.message || '登录失败';
      }
    };

    const registerBtn = document.getElementById('register-btn');
    const registerError = document.getElementById('register-error');
    registerBtn.onclick = async () => {
      registerError.textContent = '';
      const username = document.getElementById('reg-username').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const pwd = document.getElementById('reg-pwd').value;
      if (!username || !email || !pwd) {
        registerError.textContent = '请填写所有信息';
        return;
      }
      try {
        // protobuf编码请求体
        const payload = { username, email, password: pwd };
        const body = RegisterReq.encode(RegisterReq.create(payload)).finish();
        const resp = await fetch('http://localhost:8081/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-protobuf' },
          body
        });
        if (!resp.ok) throw new Error('网络错误');
        const buf = await resp.arrayBuffer();
        const msg = APIResp.decode(new Uint8Array(buf));
        if (msg.code !== 0) throw new Error(msg.msg);
        showLoginPanel();
      } catch (e) {
        registerError.textContent = e.message || '注册失败';
      }
    };

    async function fetchUserInfoAndFriends(tokenVal) {
      // 获取用户信息
      try {
        const userInfoReq = UserInfoReq.encode(UserInfoReq.create({ token: tokenVal })).finish();
        const resp = await fetch('http://localhost:8081/user_info', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-protobuf' },
          body: userInfoReq
        });
        if (!resp.ok) throw new Error('用户信息获取失败');
        const buf = await resp.arrayBuffer();
        const apiMsg = APIResp.decode(new Uint8Array(buf));
        if (apiMsg.code !== 0) throw new Error(apiMsg.msg);
        const userInfo = UserInfoResp.decode(apiMsg.data);
        userInfoSpan.textContent = `${userInfo.username} (${userInfo.email})`;
        myUid = userInfo.uid;
        myUsername = userInfo.username;
        // 获取好友列表
        await fetchFriendList(userInfo.uid, tokenVal);
      } catch (e) {
        userInfoSpan.textContent = '用户信息获取失败: ' + (e.message || e);
      }
    }

    async function fetchFriendList(uid, tokenVal) {
      try {
        const friendListReq = FriendListReq.encode(FriendListReq.create({ uid, token: tokenVal })).finish();
        const resp = await fetch('http://localhost:8081/friend_list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-protobuf' },
          body: friendListReq
        });
        if (!resp.ok) throw new Error('好友列表获取失败');
        const buf = await resp.arrayBuffer();
        const apiMsg = APIResp.decode(new Uint8Array(buf));
        if (apiMsg.code !== 0) throw new Error(apiMsg.msg);
        const friendList = FriendListResp.decode(apiMsg.data);
        renderFriendList(friendList);
      } catch (e) {
        friendListDiv.innerHTML = '<div class="error">好友列表获取失败: ' + (e.message || e) + '</div>';
      }
    }

    function renderFriendList(friendList) {
      if (!friendList.friendUids || friendList.friendUids.length === 0) {
        friendListDiv.innerHTML = '<div style="color:#888;padding:16px;">暂无好友</div>';
        chatTitleDiv.textContent = '';
        chatHistoryDiv.innerHTML = '';
        currentFriend = null;
        return;
      }
      friendListDiv.innerHTML = '';
      for (let i = 0; i < friendList.friendUids.length; i++) {
        const uid = friendList.friendUids[i];
        const name = friendList.friendUsernames[i] || uid;
        const remark = friendList.remarks && friendList.remarks[i] ? friendList.remarks[i] : '';
        const div = document.createElement('div');
        div.className = 'list-item';
        div.textContent = remark ? `${name}（${remark}）` : name;
        div.onclick = () => {
          selectFriend(uid, name, remark);
        };
        if (currentFriend && currentFriend.uid === uid) {
          div.classList.add('selected');
        }
        friendListDiv.appendChild(div);
      }
    }

    function selectFriend(uid, name, remark) {
      currentFriend = { uid, name, remark };
      currentGroup = null; // 选择好友时清空群组
      // 高亮
      const items = friendListDiv.querySelectorAll('.list-item');
      items.forEach(item => {
        if (item.textContent === (remark ? `${name}（${remark}）` : name)) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
      // 聊天区标题
      chatTitleDiv.textContent = `与 ${remark ? `${name}（${remark}）` : name} 聊天`;
      // 清空历史（后续可加载消息）
      chatHistoryDiv.innerHTML = '<div class="empty-tip" style="color:#888;padding:16px;">暂无消息</div>';
    }

    // 拉取群组列表
    async function fetchGroupList(tokenVal) {
      try {
        const req = GroupListReq.encode(GroupListReq.create({ uid: myUid, token: tokenVal })).finish();
        const resp = await fetch('http://localhost:8081/group_list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-protobuf' },
          body: req
        });
        if (!resp.ok) throw new Error('群组列表获取失败');
        const buf = await resp.arrayBuffer();
        const apiMsg = APIResp.decode(new Uint8Array(buf));
        if (apiMsg.code !== 0) throw new Error(apiMsg.msg);
        const groupList = GroupListResp.decode(apiMsg.data);
        renderGroupList(groupList.groups || []);
      } catch (e) {
        groupListDiv.innerHTML = '<div class="error">群组列表获取失败: ' + (e.message || e) + '</div>';
      }
    }
    function renderGroupList(groups) {
      if (!groups || groups.length === 0) {
        groupListDiv.innerHTML = '<div style="color:#888;padding:16px;">暂无群组</div>';
        return;
      }
      groupListDiv.innerHTML = '';
      groups.forEach(group => {
        const groupName = group.name || group.groupName || group.group_id || group.groupId || '未知群组';
        const groupId = group.groupId || group.group_id || group.id || '';
        const div = document.createElement('div');
        div.className = 'list-item';
        div.textContent = groupName;
        div.style.cursor = 'pointer';
        div.onclick = () => {
          selectGroup(groupId, groupName);
        };
        if (currentGroup && currentGroup.groupId === groupId) {
          div.classList.add('selected');
        }
        groupListDiv.appendChild(div);
      });
    }
    function selectGroup(groupId, name) {
      currentGroup = { groupId, name };
      currentFriend = null; // 选择群组时清空好友
      // 高亮
      const items = groupListDiv.querySelectorAll('.list-item');
      items.forEach(item => {
        if (item.textContent === name) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
      // 聊天区标题
      chatTitleDiv.textContent = `群聊：${name || groupId || '未知群组'}`;
      chatHistoryDiv.innerHTML = '<div class="empty-tip" style="color:#888;padding:16px;">暂无消息</div>';
    }

    // ========== 表情映射 ==========
    const emojiMap = {
      ':smile:': '😊', ':laugh:': '😄', ':cry:': '😢', ':angry:': '😠', ':heart:': '❤️', ':thumbsup:': '👍', ':thumbsdown:': '👎', ':ok:': '👌', ':clap:': '👏', ':wave:': '👋', ':pray:': '🙏', ':fire:': '🔥', ':star:': '⭐', ':moon:': '🌙', ':sun:': '☀️', ':rainbow:': '🌈', ':coffee:': '☕', ':beer:': '🍺', ':pizza:': '🍕', ':cake:': '🎂'
    };
    function replaceEmojis(text) {
      for (const code in emojiMap) {
        text = text.replaceAll(code, emojiMap[code]);
      }
      return text;
    }
    // ========== 表情按钮 ==========
    const emojiBtn = document.getElementById('emoji-btn');
    emojiBtn.onclick = function() {
      let menu = document.getElementById('emoji-menu');
      if (menu) { menu.remove(); return; }
      menu = document.createElement('div');
      menu.id = 'emoji-menu';
      menu.style.position = 'absolute';
      menu.style.bottom = '60px';
      menu.style.left = '20px';
      menu.style.background = '#fff';
      menu.style.border = '1px solid #eee';
      menu.style.borderRadius = '8px';
      menu.style.boxShadow = '0 2px 8px #0002';
      menu.style.padding = '8px';
      menu.style.zIndex = 1000;
      for (const code in emojiMap) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = emojiMap[code];
        btn.title = code;
        btn.style.fontSize = '1.2em';
        btn.style.margin = '2px';
        btn.onclick = () => {
          chatInput.value += code;
          menu.remove();
          chatInput.focus();
        };
        menu.appendChild(btn);
      }
      document.body.appendChild(menu);
      document.addEventListener('click', function hideMenu(e) {
        if (!menu.contains(e.target) && e.target !== emojiBtn) {
          menu.remove();
          document.removeEventListener('click', hideMenu);
        }
      });
    };

    // ========== 图片/文件按钮 ==========
    const imgBtn = document.getElementById('img-btn');
    const fileBtn = document.getElementById('file-btn');
    const fileInput = document.getElementById('file-input');
    imgBtn.onclick = () => { fileInput.accept = 'image/*'; fileInput.click(); };
    fileBtn.onclick = () => { fileInput.accept = '*/*'; fileInput.click(); };
    fileInput.onchange = async function() {
      if (!fileInput.files || !fileInput.files[0]) return;
      const file = fileInput.files[0];
      if (file.type.startsWith('image/')) {
        await sendFileOrImage(file, 'image');
      } else {
        await sendFileOrImage(file, 'file');
      }
      fileInput.value = '';
    };
    async function sendFileOrImage(file, type) {
      if (!(currentFriend || currentGroup)) { alert('请先选择好友或群组'); return; }
      if (!ws || ws.readyState !== 1) { alert('WebSocket未连接'); return; }
      // 上传文件
      const form = new FormData();
      form.append('file', file);
      const resp = await fetch('http://localhost:8081/upload', { method: 'POST', body: form });
      if (!resp.ok) { alert('上传失败'); return; }
      const buf = await resp.arrayBuffer();
      const APIResp = root.lookupType('protocol.APIResp');
      const FileInfo = root.lookupType('protocol.FileInfo');
      const apiMsg = APIResp.decode(new Uint8Array(buf));
      if (apiMsg.code !== 0) { alert('上传失败: ' + apiMsg.msg); return; }
      const fileInfo = FileInfo.decode(apiMsg.data);
      // 发送消息
      const msgObj = {
        from: myUid,
        type: type,
        content: fileInfo.url || fileInfo.Url || '',
        extra: fileInfo.originalName || fileInfo.OriginalName || '',
        filename: fileInfo.filename || fileInfo.Filename || '',
        filesize: fileInfo.size || fileInfo.Size || file.size,
        mimeType: fileInfo.mimeType || fileInfo.MimeType || file.type,
        timestamp: Date.now(),
      };
      if (currentFriend) {
        msgObj.to = currentFriend.uid;
      } else if (currentGroup) {
        msgObj.groupId = currentGroup.groupId;
      }
      const msgBuf = IMMessage.encode(IMMessage.create(msgObj)).finish();
      ws.send(msgBuf);
      // 本地回显
      appendMessage({ from: myUid, content: msgObj.content, self: true, timestamp: msgObj.timestamp, type, extra: msgObj.extra });
    }

    // ========== 消息发送 ==========
    sendBtn.onclick = sendMessage;
    chatInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
      if (!(currentFriend || currentGroup)) {
        alert('请先选择好友或群组');
        return;
      }
      let content = chatInput.value.trim();
      if (!content) return;
      if (!ws || ws.readyState !== 1) {
        alert('WebSocket未连接');
        return;
      }
      // 表情替换
      const displayContent = replaceEmojis(content);
      // 构造IMMessage
      const msgObj = {
        from: myUid,
        type: 'chat',
        content: content,
        timestamp: Date.now(),
      };
      if (currentFriend) {
        msgObj.to = currentFriend.uid;
      } else if (currentGroup) {
        msgObj.groupId = currentGroup.groupId;
      }
      const msgBuf = IMMessage.encode(IMMessage.create(msgObj)).finish();
      ws.send(msgBuf);
      // 本地回显
      appendMessage({ from: myUid, content: displayContent, self: true, timestamp: Date.now(), type: 'chat' });
      chatInput.value = '';
    }

    function appendMessage({ from, content, self, timestamp, type, extra }) {
      // 移除暂无消息提示
      const emptyTip = chatHistoryDiv.querySelector('.empty-tip');
      if (emptyTip) emptyTip.remove();
      const div = document.createElement('div');
      div.style.margin = '8px 0';
      div.style.textAlign = self ? 'right' : 'left';
      let html = '';
      if (type === 'image') {
        const imgUrl = (content && content.startsWith('http')) ? content : (content ? 'http://localhost:8081' + content : '');
        html = imgUrl ? `<img src="${imgUrl}" alt="图片" style="max-width:180px;max-height:120px;border-radius:8px;vertical-align:middle;">` : '';
        if (extra) html += `<div style="font-size:0.9em;color:#888;">${extra}</div>`;
      } else if (type === 'file') {
        const fileUrl = (content && content.startsWith('http')) ? content : (content ? 'http://localhost:8081' + content : '');
        html = fileUrl ? `<a href="${fileUrl}" target="_blank" style="color:#409eff;text-decoration:underline;">${extra || '文件'}</a>` : '';
      } else {
        html = `<span style="display:inline-block;padding:6px 14px;border-radius:16px;background:${self ? '#409eff' : '#eee'};color:${self ? '#fff' : '#222'};max-width:60%;word-break:break-all;">${content}</span>`;
      }
      div.innerHTML = html;
      chatHistoryDiv.appendChild(div);
      chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
    }

    function connectWebSocket() {
      if (ws) ws.close();
      ws = new WebSocket('ws://localhost:8090/ws');
      ws.binaryType = 'arraybuffer';
      ws.onopen = () => {
        // 登录认证
        if (token) {
          const loginMsg = IMMessage.encode(IMMessage.create({ type: 'login', token })).finish();
          ws.send(loginMsg);
        }
      };
      ws.onclose = () => {
      };
      ws.onerror = (e) => {
      };
      ws.onmessage = (event) => {
        console.log('收到ws消息', event.data);
        try {
          const buf = new Uint8Array(event.data);
          // 先尝试decode Notification
          let notif = null;
          try {
            notif = Notification.decode(buf);
          } catch {}
          if (notif && notif.type) {
            console.log('收到通知', notif);
            // 解析通知内容
            let display = '';
            const extra = parseExtra(notif.extra);
            switch (notif.type) {
              case 'friend_request':
                display = `[好友请求] ${notif.fromUsername}(${notif.from}) 请求加你为好友`;
                break;
              case 'private_chat_message':
                display = `[私聊] ${notif.fromUsername}: ${notif.content}`;
                break;
              case 'group_chat_message':
                display = `[群聊][${notif.groupName}] ${notif.fromUsername}: ${notif.content}`;
                break;
              case 'group_application_pending':
                display = `[群申请] ${notif.fromUsername}(${notif.from}) 申请加入群聊 [${notif.groupName}]`;
                break;
              case 'group_invite':
                display = `[群审批] ${notif.fromUsername} 邀请 ${extra.invitee_username || ''} 加入群聊 [${notif.groupName}]，请审批`;
                break;
              case 'group_invite_approved':
                display = `[群通知] 你已成功加入群聊 [${notif.groupName}]`;
                break;
              case 'group_kicked':
                display = `[群通知] 你已被 ${notif.fromUsername} 移出群聊 [${notif.groupName}]`;
                break;
              case 'group_admin_change':
                display = extra.set_admin === 'true'
                  ? `[群通知] 你在群聊 [${notif.groupName}] 被设为管理员`
                  : `[群通知] 你在群聊 [${notif.groupName}] 被取消管理员`;
                break;
              case 'dismissed':
                display = `[群系统][${notif.groupName}] 群已被解散 by ${notif.fromUsername}`;
                break;
              default:
                display = `[通知] ${notif.type}: ${notif.content}`;
            }
            notifyList.unshift(display);
            if (notifyList.length > 30) notifyList.length = 30;
            renderNotifyPopup();
            console.log('setTimeout已设置');
            setTimeout(() => {
              console.log('setTimeout回调执行');
              notifyPopup.style.display = 'block';
              console.log('notifyPopup:', notifyPopup);
            }, 10);
            return;
          }
          // 再decode IMMessage
          let msg = null;
          try {
            msg = IMMessage.decode(buf);
          } catch {}
          if (!msg) return;
          // 私聊消息
          if (msg.type === 'chat' && currentFriend && msg.from === currentFriend.uid && msg.to === myUid) {
            appendMessage({ from: msg.from, content: replaceEmojis(msg.content), self: false, timestamp: msg.timestamp, type: 'chat' });
          } else if (msg.type === 'image' && currentFriend && msg.from === currentFriend.uid && msg.to === myUid) {
            appendMessage({ from: msg.from, content: msg.content, self: false, timestamp: msg.timestamp, type: 'image', extra: msg.extra });
          } else if (msg.type === 'file' && currentFriend && msg.from === currentFriend.uid && msg.to === myUid) {
            appendMessage({ from: msg.from, content: msg.content, self: false, timestamp: msg.timestamp, type: 'file', extra: msg.extra });
          }
          // 群聊消息
          else if (msg.type === 'chat' && currentGroup && msg.groupId === currentGroup.groupId) {
            appendMessage({ from: msg.from, content: replaceEmojis(msg.content), self: msg.from === myUid, timestamp: msg.timestamp, type: 'chat' });
          } else if (msg.type === 'image' && currentGroup && msg.groupId === currentGroup.groupId) {
            appendMessage({ from: msg.from, content: msg.content, self: msg.from === myUid, timestamp: msg.timestamp, type: 'image', extra: msg.extra });
          } else if (msg.type === 'file' && currentGroup && msg.groupId === currentGroup.groupId) {
            appendMessage({ from: msg.from, content: msg.content, self: msg.from === myUid, timestamp: msg.timestamp, type: 'file', extra: msg.extra });
          } else if (msg.type === 'error') {
            alert('消息错误: ' + msg.content);
          }
        } catch (e) {}
      };
    }

    function showMainPanel() {
      loginPanel.style.display = 'none';
      registerPanel.style.display = 'none';
      mainPanel.style.display = '';
    }
    function showLoginPanel() {
      loginPanel.style.display = '';
      registerPanel.style.display = 'none';
      mainPanel.style.display = 'none';
    }

    // ========== 主界面逻辑骨架 ==========
    // TODO: 填充群组列表，聊天窗口，WebSocket消息接收等
    tabGroups.onclick = () => {
      tabGroups.classList.add('active');
      tabFriends.classList.remove('active');
      friendListDiv.style.display = 'none';
      groupListDiv.style.display = '';
      chatTitleDiv.textContent = '';
      chatHistoryDiv.innerHTML = '';
      currentGroup = null;
      currentFriend = null;
      fetchGroupList(token);
    };
    tabFriends.onclick = () => {
      tabFriends.classList.add('active');
      tabGroups.classList.remove('active');
      friendListDiv.style.display = '';
      groupListDiv.style.display = 'none';
      chatTitleDiv.textContent = '';
      chatHistoryDiv.innerHTML = '';
      currentGroup = null;
      currentFriend = null;
      fetchFriendList(myUid, token);
    };

    const notifyBtn = document.getElementById('notify-btn');
    const notifyPopup = document.getElementById('notify-popup');
    let notifyList = [];

    // 通知按钮点击展开/收起
    notifyBtn.onclick = function() {
      if (notifyPopup.style.display === 'none' || !notifyPopup.style.display) {
        renderNotifyPopup();
        notifyPopup.style.display = 'block';
      } else {
        notifyPopup.style.display = 'none';
      }
    };
    function renderNotifyPopup() {
      if (notifyList.length === 0) {
        notifyPopup.innerHTML = '<div style="color:#888;padding:16px;">暂无通知</div>';
        return;
      }
      notifyPopup.innerHTML = notifyList.map(n => `<div style="padding:10px 16px;border-bottom:1px solid #eee;word-break:break-all;">${n}</div>`).join('');
    }
    // 点击弹窗外关闭
    document.addEventListener('click', function(e) {
      if (notifyPopup.style.display === 'block' && !notifyPopup.contains(e.target) && e.target !== notifyBtn) {
        notifyPopup.style.display = 'none';
      }
    });
  });
}); 