/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protocol = (function() {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    var protocol = {};

    protocol.UserInfoResp = (function() {

        /**
         * Properties of a UserInfoResp.
         * @memberof protocol
         * @interface IUserInfoResp
         * @property {string|null} [uid] UserInfoResp uid
         * @property {string|null} [username] UserInfoResp username
         * @property {string|null} [email] UserInfoResp email
         * @property {number|null} [code] UserInfoResp code
         * @property {string|null} [msg] UserInfoResp msg
         */

        /**
         * Constructs a new UserInfoResp.
         * @memberof protocol
         * @classdesc Represents a UserInfoResp.
         * @implements IUserInfoResp
         * @constructor
         * @param {protocol.IUserInfoResp=} [properties] Properties to set
         */
        function UserInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoResp uid.
         * @member {string} uid
         * @memberof protocol.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.uid = "";

        /**
         * UserInfoResp username.
         * @member {string} username
         * @memberof protocol.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.username = "";

        /**
         * UserInfoResp email.
         * @member {string} email
         * @memberof protocol.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.email = "";

        /**
         * UserInfoResp code.
         * @member {number} code
         * @memberof protocol.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.code = 0;

        /**
         * UserInfoResp msg.
         * @member {string} msg
         * @memberof protocol.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.msg = "";

        /**
         * Creates a new UserInfoResp instance using the specified properties.
         * @function create
         * @memberof protocol.UserInfoResp
         * @static
         * @param {protocol.IUserInfoResp=} [properties] Properties to set
         * @returns {protocol.UserInfoResp} UserInfoResp instance
         */
        UserInfoResp.create = function create(properties) {
            return new UserInfoResp(properties);
        };

        /**
         * Encodes the specified UserInfoResp message. Does not implicitly {@link protocol.UserInfoResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.UserInfoResp
         * @static
         * @param {protocol.IUserInfoResp} message UserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified UserInfoResp message, length delimited. Does not implicitly {@link protocol.UserInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UserInfoResp
         * @static
         * @param {protocol.IUserInfoResp} message UserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UserInfoResp} UserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UserInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.username = reader.string();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        message.code = reader.int32();
                        break;
                    }
                case 5: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UserInfoResp} UserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoResp message.
         * @function verify
         * @memberof protocol.UserInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a UserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UserInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UserInfoResp} UserInfoResp
         */
        UserInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UserInfoResp)
                return object;
            var message = new $root.protocol.UserInfoResp();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.username != null)
                message.username = String(object.username);
            if (object.email != null)
                message.email = String(object.email);
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a UserInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UserInfoResp
         * @static
         * @param {protocol.UserInfoResp} message UserInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.username = "";
                object.email = "";
                object.code = 0;
                object.msg = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this UserInfoResp to JSON.
         * @function toJSON
         * @memberof protocol.UserInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserInfoResp
         * @function getTypeUrl
         * @memberof protocol.UserInfoResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UserInfoResp";
        };

        return UserInfoResp;
    })();

    protocol.RegisterReq = (function() {

        /**
         * Properties of a RegisterReq.
         * @memberof protocol
         * @interface IRegisterReq
         * @property {string|null} [username] RegisterReq username
         * @property {string|null} [password] RegisterReq password
         * @property {string|null} [email] RegisterReq email
         */

        /**
         * Constructs a new RegisterReq.
         * @memberof protocol
         * @classdesc Represents a RegisterReq.
         * @implements IRegisterReq
         * @constructor
         * @param {protocol.IRegisterReq=} [properties] Properties to set
         */
        function RegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterReq username.
         * @member {string} username
         * @memberof protocol.RegisterReq
         * @instance
         */
        RegisterReq.prototype.username = "";

        /**
         * RegisterReq password.
         * @member {string} password
         * @memberof protocol.RegisterReq
         * @instance
         */
        RegisterReq.prototype.password = "";

        /**
         * RegisterReq email.
         * @member {string} email
         * @memberof protocol.RegisterReq
         * @instance
         */
        RegisterReq.prototype.email = "";

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @function create
         * @memberof protocol.RegisterReq
         * @static
         * @param {protocol.IRegisterReq=} [properties] Properties to set
         * @returns {protocol.RegisterReq} RegisterReq instance
         */
        RegisterReq.create = function create(properties) {
            return new RegisterReq(properties);
        };

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link protocol.RegisterReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.RegisterReq
         * @static
         * @param {protocol.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link protocol.RegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RegisterReq
         * @static
         * @param {protocol.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterReq message.
         * @function verify
         * @memberof protocol.RegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RegisterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RegisterReq} RegisterReq
         */
        RegisterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RegisterReq)
                return object;
            var message = new $root.protocol.RegisterReq();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RegisterReq
         * @static
         * @param {protocol.RegisterReq} message RegisterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
                object.email = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this RegisterReq to JSON.
         * @function toJSON
         * @memberof protocol.RegisterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterReq
         * @function getTypeUrl
         * @memberof protocol.RegisterReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.RegisterReq";
        };

        return RegisterReq;
    })();

    protocol.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof protocol
         * @interface ILoginReq
         * @property {string|null} [uid] LoginReq uid
         * @property {string|null} [password] LoginReq password
         */

        /**
         * Constructs a new LoginReq.
         * @memberof protocol
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {protocol.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq uid.
         * @member {string} uid
         * @memberof protocol.LoginReq
         * @instance
         */
        LoginReq.prototype.uid = "";

        /**
         * LoginReq password.
         * @member {string} password
         * @memberof protocol.LoginReq
         * @instance
         */
        LoginReq.prototype.password = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof protocol.LoginReq
         * @static
         * @param {protocol.ILoginReq=} [properties] Properties to set
         * @returns {protocol.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link protocol.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.LoginReq
         * @static
         * @param {protocol.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link protocol.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LoginReq
         * @static
         * @param {protocol.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof protocol.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LoginReq)
                return object;
            var message = new $root.protocol.LoginReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LoginReq
         * @static
         * @param {protocol.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.password = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof protocol.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginReq
         * @function getTypeUrl
         * @memberof protocol.LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.LoginReq";
        };

        return LoginReq;
    })();

    protocol.ResetPwdReq = (function() {

        /**
         * Properties of a ResetPwdReq.
         * @memberof protocol
         * @interface IResetPwdReq
         * @property {string|null} [email] ResetPwdReq email
         * @property {string|null} [newPwd] ResetPwdReq newPwd
         * @property {string|null} [code] ResetPwdReq code
         */

        /**
         * Constructs a new ResetPwdReq.
         * @memberof protocol
         * @classdesc Represents a ResetPwdReq.
         * @implements IResetPwdReq
         * @constructor
         * @param {protocol.IResetPwdReq=} [properties] Properties to set
         */
        function ResetPwdReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResetPwdReq email.
         * @member {string} email
         * @memberof protocol.ResetPwdReq
         * @instance
         */
        ResetPwdReq.prototype.email = "";

        /**
         * ResetPwdReq newPwd.
         * @member {string} newPwd
         * @memberof protocol.ResetPwdReq
         * @instance
         */
        ResetPwdReq.prototype.newPwd = "";

        /**
         * ResetPwdReq code.
         * @member {string} code
         * @memberof protocol.ResetPwdReq
         * @instance
         */
        ResetPwdReq.prototype.code = "";

        /**
         * Creates a new ResetPwdReq instance using the specified properties.
         * @function create
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {protocol.IResetPwdReq=} [properties] Properties to set
         * @returns {protocol.ResetPwdReq} ResetPwdReq instance
         */
        ResetPwdReq.create = function create(properties) {
            return new ResetPwdReq(properties);
        };

        /**
         * Encodes the specified ResetPwdReq message. Does not implicitly {@link protocol.ResetPwdReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {protocol.IResetPwdReq} message ResetPwdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetPwdReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.newPwd != null && Object.hasOwnProperty.call(message, "newPwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.newPwd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified ResetPwdReq message, length delimited. Does not implicitly {@link protocol.ResetPwdReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {protocol.IResetPwdReq} message ResetPwdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetPwdReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResetPwdReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ResetPwdReq} ResetPwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetPwdReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ResetPwdReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.email = reader.string();
                        break;
                    }
                case 2: {
                        message.newPwd = reader.string();
                        break;
                    }
                case 3: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResetPwdReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ResetPwdReq} ResetPwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetPwdReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResetPwdReq message.
         * @function verify
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetPwdReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.newPwd != null && message.hasOwnProperty("newPwd"))
                if (!$util.isString(message.newPwd))
                    return "newPwd: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a ResetPwdReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ResetPwdReq} ResetPwdReq
         */
        ResetPwdReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ResetPwdReq)
                return object;
            var message = new $root.protocol.ResetPwdReq();
            if (object.email != null)
                message.email = String(object.email);
            if (object.newPwd != null)
                message.newPwd = String(object.newPwd);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a ResetPwdReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {protocol.ResetPwdReq} message ResetPwdReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetPwdReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.newPwd = "";
                object.code = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.newPwd != null && message.hasOwnProperty("newPwd"))
                object.newPwd = message.newPwd;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this ResetPwdReq to JSON.
         * @function toJSON
         * @memberof protocol.ResetPwdReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetPwdReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResetPwdReq
         * @function getTypeUrl
         * @memberof protocol.ResetPwdReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResetPwdReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.ResetPwdReq";
        };

        return ResetPwdReq;
    })();

    protocol.UpdateUsernameReq = (function() {

        /**
         * Properties of an UpdateUsernameReq.
         * @memberof protocol
         * @interface IUpdateUsernameReq
         * @property {string|null} [uid] UpdateUsernameReq uid
         * @property {string|null} [newUsername] UpdateUsernameReq newUsername
         */

        /**
         * Constructs a new UpdateUsernameReq.
         * @memberof protocol
         * @classdesc Represents an UpdateUsernameReq.
         * @implements IUpdateUsernameReq
         * @constructor
         * @param {protocol.IUpdateUsernameReq=} [properties] Properties to set
         */
        function UpdateUsernameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUsernameReq uid.
         * @member {string} uid
         * @memberof protocol.UpdateUsernameReq
         * @instance
         */
        UpdateUsernameReq.prototype.uid = "";

        /**
         * UpdateUsernameReq newUsername.
         * @member {string} newUsername
         * @memberof protocol.UpdateUsernameReq
         * @instance
         */
        UpdateUsernameReq.prototype.newUsername = "";

        /**
         * Creates a new UpdateUsernameReq instance using the specified properties.
         * @function create
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {protocol.IUpdateUsernameReq=} [properties] Properties to set
         * @returns {protocol.UpdateUsernameReq} UpdateUsernameReq instance
         */
        UpdateUsernameReq.create = function create(properties) {
            return new UpdateUsernameReq(properties);
        };

        /**
         * Encodes the specified UpdateUsernameReq message. Does not implicitly {@link protocol.UpdateUsernameReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {protocol.IUpdateUsernameReq} message UpdateUsernameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUsernameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.newUsername != null && Object.hasOwnProperty.call(message, "newUsername"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.newUsername);
            return writer;
        };

        /**
         * Encodes the specified UpdateUsernameReq message, length delimited. Does not implicitly {@link protocol.UpdateUsernameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {protocol.IUpdateUsernameReq} message UpdateUsernameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUsernameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUsernameReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpdateUsernameReq} UpdateUsernameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUsernameReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpdateUsernameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.newUsername = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateUsernameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpdateUsernameReq} UpdateUsernameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUsernameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUsernameReq message.
         * @function verify
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUsernameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.newUsername != null && message.hasOwnProperty("newUsername"))
                if (!$util.isString(message.newUsername))
                    return "newUsername: string expected";
            return null;
        };

        /**
         * Creates an UpdateUsernameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpdateUsernameReq} UpdateUsernameReq
         */
        UpdateUsernameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpdateUsernameReq)
                return object;
            var message = new $root.protocol.UpdateUsernameReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.newUsername != null)
                message.newUsername = String(object.newUsername);
            return message;
        };

        /**
         * Creates a plain object from an UpdateUsernameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {protocol.UpdateUsernameReq} message UpdateUsernameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUsernameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.newUsername = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.newUsername != null && message.hasOwnProperty("newUsername"))
                object.newUsername = message.newUsername;
            return object;
        };

        /**
         * Converts this UpdateUsernameReq to JSON.
         * @function toJSON
         * @memberof protocol.UpdateUsernameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUsernameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateUsernameReq
         * @function getTypeUrl
         * @memberof protocol.UpdateUsernameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateUsernameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpdateUsernameReq";
        };

        return UpdateUsernameReq;
    })();

    protocol.UpdatePwdReq = (function() {

        /**
         * Properties of an UpdatePwdReq.
         * @memberof protocol
         * @interface IUpdatePwdReq
         * @property {string|null} [uid] UpdatePwdReq uid
         * @property {string|null} [oldPwd] UpdatePwdReq oldPwd
         * @property {string|null} [newPwd] UpdatePwdReq newPwd
         */

        /**
         * Constructs a new UpdatePwdReq.
         * @memberof protocol
         * @classdesc Represents an UpdatePwdReq.
         * @implements IUpdatePwdReq
         * @constructor
         * @param {protocol.IUpdatePwdReq=} [properties] Properties to set
         */
        function UpdatePwdReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdatePwdReq uid.
         * @member {string} uid
         * @memberof protocol.UpdatePwdReq
         * @instance
         */
        UpdatePwdReq.prototype.uid = "";

        /**
         * UpdatePwdReq oldPwd.
         * @member {string} oldPwd
         * @memberof protocol.UpdatePwdReq
         * @instance
         */
        UpdatePwdReq.prototype.oldPwd = "";

        /**
         * UpdatePwdReq newPwd.
         * @member {string} newPwd
         * @memberof protocol.UpdatePwdReq
         * @instance
         */
        UpdatePwdReq.prototype.newPwd = "";

        /**
         * Creates a new UpdatePwdReq instance using the specified properties.
         * @function create
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {protocol.IUpdatePwdReq=} [properties] Properties to set
         * @returns {protocol.UpdatePwdReq} UpdatePwdReq instance
         */
        UpdatePwdReq.create = function create(properties) {
            return new UpdatePwdReq(properties);
        };

        /**
         * Encodes the specified UpdatePwdReq message. Does not implicitly {@link protocol.UpdatePwdReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {protocol.IUpdatePwdReq} message UpdatePwdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePwdReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.oldPwd != null && Object.hasOwnProperty.call(message, "oldPwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.oldPwd);
            if (message.newPwd != null && Object.hasOwnProperty.call(message, "newPwd"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newPwd);
            return writer;
        };

        /**
         * Encodes the specified UpdatePwdReq message, length delimited. Does not implicitly {@link protocol.UpdatePwdReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {protocol.IUpdatePwdReq} message UpdatePwdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePwdReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdatePwdReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpdatePwdReq} UpdatePwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePwdReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpdatePwdReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.oldPwd = reader.string();
                        break;
                    }
                case 3: {
                        message.newPwd = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdatePwdReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpdatePwdReq} UpdatePwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePwdReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdatePwdReq message.
         * @function verify
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdatePwdReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.oldPwd != null && message.hasOwnProperty("oldPwd"))
                if (!$util.isString(message.oldPwd))
                    return "oldPwd: string expected";
            if (message.newPwd != null && message.hasOwnProperty("newPwd"))
                if (!$util.isString(message.newPwd))
                    return "newPwd: string expected";
            return null;
        };

        /**
         * Creates an UpdatePwdReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpdatePwdReq} UpdatePwdReq
         */
        UpdatePwdReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpdatePwdReq)
                return object;
            var message = new $root.protocol.UpdatePwdReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.oldPwd != null)
                message.oldPwd = String(object.oldPwd);
            if (object.newPwd != null)
                message.newPwd = String(object.newPwd);
            return message;
        };

        /**
         * Creates a plain object from an UpdatePwdReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {protocol.UpdatePwdReq} message UpdatePwdReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdatePwdReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.oldPwd = "";
                object.newPwd = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.oldPwd != null && message.hasOwnProperty("oldPwd"))
                object.oldPwd = message.oldPwd;
            if (message.newPwd != null && message.hasOwnProperty("newPwd"))
                object.newPwd = message.newPwd;
            return object;
        };

        /**
         * Converts this UpdatePwdReq to JSON.
         * @function toJSON
         * @memberof protocol.UpdatePwdReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdatePwdReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdatePwdReq
         * @function getTypeUrl
         * @memberof protocol.UpdatePwdReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdatePwdReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpdatePwdReq";
        };

        return UpdatePwdReq;
    })();

    protocol.TokenCheckReq = (function() {

        /**
         * Properties of a TokenCheckReq.
         * @memberof protocol
         * @interface ITokenCheckReq
         * @property {string|null} [token] TokenCheckReq token
         */

        /**
         * Constructs a new TokenCheckReq.
         * @memberof protocol
         * @classdesc Represents a TokenCheckReq.
         * @implements ITokenCheckReq
         * @constructor
         * @param {protocol.ITokenCheckReq=} [properties] Properties to set
         */
        function TokenCheckReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenCheckReq token.
         * @member {string} token
         * @memberof protocol.TokenCheckReq
         * @instance
         */
        TokenCheckReq.prototype.token = "";

        /**
         * Creates a new TokenCheckReq instance using the specified properties.
         * @function create
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {protocol.ITokenCheckReq=} [properties] Properties to set
         * @returns {protocol.TokenCheckReq} TokenCheckReq instance
         */
        TokenCheckReq.create = function create(properties) {
            return new TokenCheckReq(properties);
        };

        /**
         * Encodes the specified TokenCheckReq message. Does not implicitly {@link protocol.TokenCheckReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {protocol.ITokenCheckReq} message TokenCheckReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenCheckReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified TokenCheckReq message, length delimited. Does not implicitly {@link protocol.TokenCheckReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {protocol.ITokenCheckReq} message TokenCheckReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenCheckReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenCheckReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TokenCheckReq} TokenCheckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenCheckReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TokenCheckReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenCheckReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TokenCheckReq} TokenCheckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenCheckReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenCheckReq message.
         * @function verify
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenCheckReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a TokenCheckReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TokenCheckReq} TokenCheckReq
         */
        TokenCheckReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TokenCheckReq)
                return object;
            var message = new $root.protocol.TokenCheckReq();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a TokenCheckReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {protocol.TokenCheckReq} message TokenCheckReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenCheckReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this TokenCheckReq to JSON.
         * @function toJSON
         * @memberof protocol.TokenCheckReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenCheckReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenCheckReq
         * @function getTypeUrl
         * @memberof protocol.TokenCheckReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenCheckReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.TokenCheckReq";
        };

        return TokenCheckReq;
    })();

    protocol.DeleteAccountReq = (function() {

        /**
         * Properties of a DeleteAccountReq.
         * @memberof protocol
         * @interface IDeleteAccountReq
         * @property {string|null} [uid] DeleteAccountReq uid
         */

        /**
         * Constructs a new DeleteAccountReq.
         * @memberof protocol
         * @classdesc Represents a DeleteAccountReq.
         * @implements IDeleteAccountReq
         * @constructor
         * @param {protocol.IDeleteAccountReq=} [properties] Properties to set
         */
        function DeleteAccountReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteAccountReq uid.
         * @member {string} uid
         * @memberof protocol.DeleteAccountReq
         * @instance
         */
        DeleteAccountReq.prototype.uid = "";

        /**
         * Creates a new DeleteAccountReq instance using the specified properties.
         * @function create
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {protocol.IDeleteAccountReq=} [properties] Properties to set
         * @returns {protocol.DeleteAccountReq} DeleteAccountReq instance
         */
        DeleteAccountReq.create = function create(properties) {
            return new DeleteAccountReq(properties);
        };

        /**
         * Encodes the specified DeleteAccountReq message. Does not implicitly {@link protocol.DeleteAccountReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {protocol.IDeleteAccountReq} message DeleteAccountReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAccountReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified DeleteAccountReq message, length delimited. Does not implicitly {@link protocol.DeleteAccountReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {protocol.IDeleteAccountReq} message DeleteAccountReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAccountReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAccountReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DeleteAccountReq} DeleteAccountReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAccountReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DeleteAccountReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteAccountReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DeleteAccountReq} DeleteAccountReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAccountReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAccountReq message.
         * @function verify
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAccountReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a DeleteAccountReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DeleteAccountReq} DeleteAccountReq
         */
        DeleteAccountReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DeleteAccountReq)
                return object;
            var message = new $root.protocol.DeleteAccountReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a DeleteAccountReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {protocol.DeleteAccountReq} message DeleteAccountReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAccountReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uid = "";
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this DeleteAccountReq to JSON.
         * @function toJSON
         * @memberof protocol.DeleteAccountReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAccountReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAccountReq
         * @function getTypeUrl
         * @memberof protocol.DeleteAccountReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAccountReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.DeleteAccountReq";
        };

        return DeleteAccountReq;
    })();

    protocol.UserInfoReq = (function() {

        /**
         * Properties of a UserInfoReq.
         * @memberof protocol
         * @interface IUserInfoReq
         * @property {string|null} [token] UserInfoReq token
         */

        /**
         * Constructs a new UserInfoReq.
         * @memberof protocol
         * @classdesc Represents a UserInfoReq.
         * @implements IUserInfoReq
         * @constructor
         * @param {protocol.IUserInfoReq=} [properties] Properties to set
         */
        function UserInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoReq token.
         * @member {string} token
         * @memberof protocol.UserInfoReq
         * @instance
         */
        UserInfoReq.prototype.token = "";

        /**
         * Creates a new UserInfoReq instance using the specified properties.
         * @function create
         * @memberof protocol.UserInfoReq
         * @static
         * @param {protocol.IUserInfoReq=} [properties] Properties to set
         * @returns {protocol.UserInfoReq} UserInfoReq instance
         */
        UserInfoReq.create = function create(properties) {
            return new UserInfoReq(properties);
        };

        /**
         * Encodes the specified UserInfoReq message. Does not implicitly {@link protocol.UserInfoReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.UserInfoReq
         * @static
         * @param {protocol.IUserInfoReq} message UserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified UserInfoReq message, length delimited. Does not implicitly {@link protocol.UserInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UserInfoReq
         * @static
         * @param {protocol.IUserInfoReq} message UserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UserInfoReq} UserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UserInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UserInfoReq} UserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoReq message.
         * @function verify
         * @memberof protocol.UserInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a UserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UserInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UserInfoReq} UserInfoReq
         */
        UserInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UserInfoReq)
                return object;
            var message = new $root.protocol.UserInfoReq();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a UserInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UserInfoReq
         * @static
         * @param {protocol.UserInfoReq} message UserInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this UserInfoReq to JSON.
         * @function toJSON
         * @memberof protocol.UserInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserInfoReq
         * @function getTypeUrl
         * @memberof protocol.UserInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UserInfoReq";
        };

        return UserInfoReq;
    })();

    protocol.LogoutReq = (function() {

        /**
         * Properties of a LogoutReq.
         * @memberof protocol
         * @interface ILogoutReq
         * @property {string|null} [token] LogoutReq token
         */

        /**
         * Constructs a new LogoutReq.
         * @memberof protocol
         * @classdesc Represents a LogoutReq.
         * @implements ILogoutReq
         * @constructor
         * @param {protocol.ILogoutReq=} [properties] Properties to set
         */
        function LogoutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogoutReq token.
         * @member {string} token
         * @memberof protocol.LogoutReq
         * @instance
         */
        LogoutReq.prototype.token = "";

        /**
         * Creates a new LogoutReq instance using the specified properties.
         * @function create
         * @memberof protocol.LogoutReq
         * @static
         * @param {protocol.ILogoutReq=} [properties] Properties to set
         * @returns {protocol.LogoutReq} LogoutReq instance
         */
        LogoutReq.create = function create(properties) {
            return new LogoutReq(properties);
        };

        /**
         * Encodes the specified LogoutReq message. Does not implicitly {@link protocol.LogoutReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.LogoutReq
         * @static
         * @param {protocol.ILogoutReq} message LogoutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified LogoutReq message, length delimited. Does not implicitly {@link protocol.LogoutReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LogoutReq
         * @static
         * @param {protocol.ILogoutReq} message LogoutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LogoutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LogoutReq} LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LogoutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogoutReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LogoutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LogoutReq} LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutReq message.
         * @function verify
         * @memberof protocol.LogoutReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a LogoutReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LogoutReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LogoutReq} LogoutReq
         */
        LogoutReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LogoutReq)
                return object;
            var message = new $root.protocol.LogoutReq();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LogoutReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LogoutReq
         * @static
         * @param {protocol.LogoutReq} message LogoutReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogoutReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LogoutReq to JSON.
         * @function toJSON
         * @memberof protocol.LogoutReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogoutReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LogoutReq
         * @function getTypeUrl
         * @memberof protocol.LogoutReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogoutReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.LogoutReq";
        };

        return LogoutReq;
    })();

    protocol.SendEmailCodeReq = (function() {

        /**
         * Properties of a SendEmailCodeReq.
         * @memberof protocol
         * @interface ISendEmailCodeReq
         * @property {string|null} [email] SendEmailCodeReq email
         */

        /**
         * Constructs a new SendEmailCodeReq.
         * @memberof protocol
         * @classdesc Represents a SendEmailCodeReq.
         * @implements ISendEmailCodeReq
         * @constructor
         * @param {protocol.ISendEmailCodeReq=} [properties] Properties to set
         */
        function SendEmailCodeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendEmailCodeReq email.
         * @member {string} email
         * @memberof protocol.SendEmailCodeReq
         * @instance
         */
        SendEmailCodeReq.prototype.email = "";

        /**
         * Creates a new SendEmailCodeReq instance using the specified properties.
         * @function create
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {protocol.ISendEmailCodeReq=} [properties] Properties to set
         * @returns {protocol.SendEmailCodeReq} SendEmailCodeReq instance
         */
        SendEmailCodeReq.create = function create(properties) {
            return new SendEmailCodeReq(properties);
        };

        /**
         * Encodes the specified SendEmailCodeReq message. Does not implicitly {@link protocol.SendEmailCodeReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {protocol.ISendEmailCodeReq} message SendEmailCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendEmailCodeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified SendEmailCodeReq message, length delimited. Does not implicitly {@link protocol.SendEmailCodeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {protocol.ISendEmailCodeReq} message SendEmailCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendEmailCodeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendEmailCodeReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SendEmailCodeReq} SendEmailCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendEmailCodeReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SendEmailCodeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.email = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendEmailCodeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SendEmailCodeReq} SendEmailCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendEmailCodeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendEmailCodeReq message.
         * @function verify
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendEmailCodeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a SendEmailCodeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SendEmailCodeReq} SendEmailCodeReq
         */
        SendEmailCodeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SendEmailCodeReq)
                return object;
            var message = new $root.protocol.SendEmailCodeReq();
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a SendEmailCodeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {protocol.SendEmailCodeReq} message SendEmailCodeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendEmailCodeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.email = "";
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this SendEmailCodeReq to JSON.
         * @function toJSON
         * @memberof protocol.SendEmailCodeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendEmailCodeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendEmailCodeReq
         * @function getTypeUrl
         * @memberof protocol.SendEmailCodeReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendEmailCodeReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SendEmailCodeReq";
        };

        return SendEmailCodeReq;
    })();

    protocol.IMMessage = (function() {

        /**
         * Properties of a IMMessage.
         * @memberof protocol
         * @interface IIMMessage
         * @property {string|null} [type] IMMessage type
         * @property {string|null} [from] IMMessage from
         * @property {string|null} [to] IMMessage to
         * @property {string|null} [content] IMMessage content
         * @property {number|Long|null} [timestamp] IMMessage timestamp
         * @property {string|null} [extra] IMMessage extra
         * @property {string|null} [token] IMMessage token
         * @property {Uint8Array|null} [data] IMMessage data
         * @property {string|null} [filename] IMMessage filename
         * @property {number|Long|null} [filesize] IMMessage filesize
         * @property {string|null} [mimeType] IMMessage mimeType
         * @property {string|null} [groupId] IMMessage groupId
         */

        /**
         * Constructs a new IMMessage.
         * @memberof protocol
         * @classdesc Represents a IMMessage.
         * @implements IIMMessage
         * @constructor
         * @param {protocol.IIMMessage=} [properties] Properties to set
         */
        function IMMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IMMessage type.
         * @member {string} type
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.type = "";

        /**
         * IMMessage from.
         * @member {string} from
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.from = "";

        /**
         * IMMessage to.
         * @member {string} to
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.to = "";

        /**
         * IMMessage content.
         * @member {string} content
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.content = "";

        /**
         * IMMessage timestamp.
         * @member {number|Long} timestamp
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IMMessage extra.
         * @member {string} extra
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.extra = "";

        /**
         * IMMessage token.
         * @member {string} token
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.token = "";

        /**
         * IMMessage data.
         * @member {Uint8Array} data
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.data = $util.newBuffer([]);

        /**
         * IMMessage filename.
         * @member {string} filename
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.filename = "";

        /**
         * IMMessage filesize.
         * @member {number|Long} filesize
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.filesize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IMMessage mimeType.
         * @member {string} mimeType
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.mimeType = "";

        /**
         * IMMessage groupId.
         * @member {string} groupId
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.groupId = "";

        /**
         * Creates a new IMMessage instance using the specified properties.
         * @function create
         * @memberof protocol.IMMessage
         * @static
         * @param {protocol.IIMMessage=} [properties] Properties to set
         * @returns {protocol.IMMessage} IMMessage instance
         */
        IMMessage.create = function create(properties) {
            return new IMMessage(properties);
        };

        /**
         * Encodes the specified IMMessage message. Does not implicitly {@link protocol.IMMessage.verify|verify} messages.
         * @function encode
         * @memberof protocol.IMMessage
         * @static
         * @param {protocol.IIMMessage} message IMMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IMMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.to);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.extra);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.token);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.data);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.filename);
            if (message.filesize != null && Object.hasOwnProperty.call(message, "filesize"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.filesize);
            if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.mimeType);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.groupId);
            return writer;
        };

        /**
         * Encodes the specified IMMessage message, length delimited. Does not implicitly {@link protocol.IMMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.IMMessage
         * @static
         * @param {protocol.IIMMessage} message IMMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IMMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a IMMessage message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.IMMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.IMMessage} IMMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IMMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.IMMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.from = reader.string();
                        break;
                    }
                case 3: {
                        message.to = reader.string();
                        break;
                    }
                case 4: {
                        message.content = reader.string();
                        break;
                    }
                case 5: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 6: {
                        message.extra = reader.string();
                        break;
                    }
                case 7: {
                        message.token = reader.string();
                        break;
                    }
                case 8: {
                        message.data = reader.bytes();
                        break;
                    }
                case 9: {
                        message.filename = reader.string();
                        break;
                    }
                case 10: {
                        message.filesize = reader.int64();
                        break;
                    }
                case 11: {
                        message.mimeType = reader.string();
                        break;
                    }
                case 12: {
                        message.groupId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a IMMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.IMMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.IMMessage} IMMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IMMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a IMMessage message.
         * @function verify
         * @memberof protocol.IMMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IMMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.filesize != null && message.hasOwnProperty("filesize"))
                if (!$util.isInteger(message.filesize) && !(message.filesize && $util.isInteger(message.filesize.low) && $util.isInteger(message.filesize.high)))
                    return "filesize: integer|Long expected";
            if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                if (!$util.isString(message.mimeType))
                    return "mimeType: string expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            return null;
        };

        /**
         * Creates a IMMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.IMMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.IMMessage} IMMessage
         */
        IMMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.IMMessage)
                return object;
            var message = new $root.protocol.IMMessage();
            if (object.type != null)
                message.type = String(object.type);
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.content != null)
                message.content = String(object.content);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.extra != null)
                message.extra = String(object.extra);
            if (object.token != null)
                message.token = String(object.token);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.filesize != null)
                if ($util.Long)
                    (message.filesize = $util.Long.fromValue(object.filesize)).unsigned = false;
                else if (typeof object.filesize === "string")
                    message.filesize = parseInt(object.filesize, 10);
                else if (typeof object.filesize === "number")
                    message.filesize = object.filesize;
                else if (typeof object.filesize === "object")
                    message.filesize = new $util.LongBits(object.filesize.low >>> 0, object.filesize.high >>> 0).toNumber();
            if (object.mimeType != null)
                message.mimeType = String(object.mimeType);
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            return message;
        };

        /**
         * Creates a plain object from a IMMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.IMMessage
         * @static
         * @param {protocol.IMMessage} message IMMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IMMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.from = "";
                object.to = "";
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.extra = "";
                object.token = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.filename = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.filesize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.filesize = options.longs === String ? "0" : 0;
                object.mimeType = "";
                object.groupId = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.filesize != null && message.hasOwnProperty("filesize"))
                if (typeof message.filesize === "number")
                    object.filesize = options.longs === String ? String(message.filesize) : message.filesize;
                else
                    object.filesize = options.longs === String ? $util.Long.prototype.toString.call(message.filesize) : options.longs === Number ? new $util.LongBits(message.filesize.low >>> 0, message.filesize.high >>> 0).toNumber() : message.filesize;
            if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                object.mimeType = message.mimeType;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            return object;
        };

        /**
         * Converts this IMMessage to JSON.
         * @function toJSON
         * @memberof protocol.IMMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IMMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IMMessage
         * @function getTypeUrl
         * @memberof protocol.IMMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IMMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.IMMessage";
        };

        return IMMessage;
    })();

    protocol.APIResp = (function() {

        /**
         * Properties of a APIResp.
         * @memberof protocol
         * @interface IAPIResp
         * @property {number|null} [code] APIResp code
         * @property {string|null} [msg] APIResp msg
         * @property {Uint8Array|null} [data] APIResp data
         */

        /**
         * Constructs a new APIResp.
         * @memberof protocol
         * @classdesc Represents a APIResp.
         * @implements IAPIResp
         * @constructor
         * @param {protocol.IAPIResp=} [properties] Properties to set
         */
        function APIResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * APIResp code.
         * @member {number} code
         * @memberof protocol.APIResp
         * @instance
         */
        APIResp.prototype.code = 0;

        /**
         * APIResp msg.
         * @member {string} msg
         * @memberof protocol.APIResp
         * @instance
         */
        APIResp.prototype.msg = "";

        /**
         * APIResp data.
         * @member {Uint8Array} data
         * @memberof protocol.APIResp
         * @instance
         */
        APIResp.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new APIResp instance using the specified properties.
         * @function create
         * @memberof protocol.APIResp
         * @static
         * @param {protocol.IAPIResp=} [properties] Properties to set
         * @returns {protocol.APIResp} APIResp instance
         */
        APIResp.create = function create(properties) {
            return new APIResp(properties);
        };

        /**
         * Encodes the specified APIResp message. Does not implicitly {@link protocol.APIResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.APIResp
         * @static
         * @param {protocol.IAPIResp} message APIResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        APIResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified APIResp message, length delimited. Does not implicitly {@link protocol.APIResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.APIResp
         * @static
         * @param {protocol.IAPIResp} message APIResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        APIResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a APIResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.APIResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.APIResp} APIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        APIResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.APIResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a APIResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.APIResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.APIResp} APIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        APIResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a APIResp message.
         * @function verify
         * @memberof protocol.APIResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        APIResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a APIResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.APIResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.APIResp} APIResp
         */
        APIResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.APIResp)
                return object;
            var message = new $root.protocol.APIResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a APIResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.APIResp
         * @static
         * @param {protocol.APIResp} message APIResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        APIResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this APIResp to JSON.
         * @function toJSON
         * @memberof protocol.APIResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        APIResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for APIResp
         * @function getTypeUrl
         * @memberof protocol.APIResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        APIResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.APIResp";
        };

        return APIResp;
    })();

    protocol.Notification = (function() {

        /**
         * Properties of a Notification.
         * @memberof protocol
         * @interface INotification
         * @property {string|null} [type] Notification type
         * @property {string|null} [from] Notification from
         * @property {string|null} [fromUsername] Notification fromUsername
         * @property {string|null} [to] Notification to
         * @property {string|null} [groupId] Notification groupId
         * @property {string|null} [groupName] Notification groupName
         * @property {string|null} [content] Notification content
         * @property {number|Long|null} [timestamp] Notification timestamp
         * @property {string|null} [extra] Notification extra
         */

        /**
         * Constructs a new Notification.
         * @memberof protocol
         * @classdesc Represents a Notification.
         * @implements INotification
         * @constructor
         * @param {protocol.INotification=} [properties] Properties to set
         */
        function Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Notification type.
         * @member {string} type
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.type = "";

        /**
         * Notification from.
         * @member {string} from
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.from = "";

        /**
         * Notification fromUsername.
         * @member {string} fromUsername
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.fromUsername = "";

        /**
         * Notification to.
         * @member {string} to
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.to = "";

        /**
         * Notification groupId.
         * @member {string} groupId
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.groupId = "";

        /**
         * Notification groupName.
         * @member {string} groupName
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.groupName = "";

        /**
         * Notification content.
         * @member {string} content
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.content = "";

        /**
         * Notification timestamp.
         * @member {number|Long} timestamp
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Notification extra.
         * @member {string} extra
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.extra = "";

        /**
         * Creates a new Notification instance using the specified properties.
         * @function create
         * @memberof protocol.Notification
         * @static
         * @param {protocol.INotification=} [properties] Properties to set
         * @returns {protocol.Notification} Notification instance
         */
        Notification.create = function create(properties) {
            return new Notification(properties);
        };

        /**
         * Encodes the specified Notification message. Does not implicitly {@link protocol.Notification.verify|verify} messages.
         * @function encode
         * @memberof protocol.Notification
         * @static
         * @param {protocol.INotification} message Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.from);
            if (message.fromUsername != null && Object.hasOwnProperty.call(message, "fromUsername"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fromUsername);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.to);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.groupId);
            if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.groupName);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.content);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.timestamp);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified Notification message, length delimited. Does not implicitly {@link protocol.Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Notification
         * @static
         * @param {protocol.INotification} message Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Notification message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Notification} Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notification.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.from = reader.string();
                        break;
                    }
                case 3: {
                        message.fromUsername = reader.string();
                        break;
                    }
                case 4: {
                        message.to = reader.string();
                        break;
                    }
                case 5: {
                        message.groupId = reader.string();
                        break;
                    }
                case 6: {
                        message.groupName = reader.string();
                        break;
                    }
                case 7: {
                        message.content = reader.string();
                        break;
                    }
                case 8: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 9: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Notification} Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Notification message.
         * @function verify
         * @memberof protocol.Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.fromUsername != null && message.hasOwnProperty("fromUsername"))
                if (!$util.isString(message.fromUsername))
                    return "fromUsername: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                if (!$util.isString(message.groupName))
                    return "groupName: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Notification} Notification
         */
        Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Notification)
                return object;
            var message = new $root.protocol.Notification();
            if (object.type != null)
                message.type = String(object.type);
            if (object.from != null)
                message.from = String(object.from);
            if (object.fromUsername != null)
                message.fromUsername = String(object.fromUsername);
            if (object.to != null)
                message.to = String(object.to);
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.groupName != null)
                message.groupName = String(object.groupName);
            if (object.content != null)
                message.content = String(object.content);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Notification
         * @static
         * @param {protocol.Notification} message Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.from = "";
                object.fromUsername = "";
                object.to = "";
                object.groupId = "";
                object.groupName = "";
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.extra = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.fromUsername != null && message.hasOwnProperty("fromUsername"))
                object.fromUsername = message.fromUsername;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                object.groupName = message.groupName;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this Notification to JSON.
         * @function toJSON
         * @memberof protocol.Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Notification
         * @function getTypeUrl
         * @memberof protocol.Notification
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Notification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Notification";
        };

        return Notification;
    })();

    protocol.FileInfo = (function() {

        /**
         * Properties of a FileInfo.
         * @memberof protocol
         * @interface IFileInfo
         * @property {string|null} [filename] FileInfo filename
         * @property {string|null} [originalName] FileInfo originalName
         * @property {number|Long|null} [size] FileInfo size
         * @property {string|null} [type] FileInfo type
         * @property {string|null} [url] FileInfo url
         */

        /**
         * Constructs a new FileInfo.
         * @memberof protocol
         * @classdesc Represents a FileInfo.
         * @implements IFileInfo
         * @constructor
         * @param {protocol.IFileInfo=} [properties] Properties to set
         */
        function FileInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileInfo filename.
         * @member {string} filename
         * @memberof protocol.FileInfo
         * @instance
         */
        FileInfo.prototype.filename = "";

        /**
         * FileInfo originalName.
         * @member {string} originalName
         * @memberof protocol.FileInfo
         * @instance
         */
        FileInfo.prototype.originalName = "";

        /**
         * FileInfo size.
         * @member {number|Long} size
         * @memberof protocol.FileInfo
         * @instance
         */
        FileInfo.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FileInfo type.
         * @member {string} type
         * @memberof protocol.FileInfo
         * @instance
         */
        FileInfo.prototype.type = "";

        /**
         * FileInfo url.
         * @member {string} url
         * @memberof protocol.FileInfo
         * @instance
         */
        FileInfo.prototype.url = "";

        /**
         * Creates a new FileInfo instance using the specified properties.
         * @function create
         * @memberof protocol.FileInfo
         * @static
         * @param {protocol.IFileInfo=} [properties] Properties to set
         * @returns {protocol.FileInfo} FileInfo instance
         */
        FileInfo.create = function create(properties) {
            return new FileInfo(properties);
        };

        /**
         * Encodes the specified FileInfo message. Does not implicitly {@link protocol.FileInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.FileInfo
         * @static
         * @param {protocol.IFileInfo} message FileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
            if (message.originalName != null && Object.hasOwnProperty.call(message, "originalName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.originalName);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.size);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link protocol.FileInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FileInfo
         * @static
         * @param {protocol.IFileInfo} message FileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FileInfo} FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FileInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.filename = reader.string();
                        break;
                    }
                case 2: {
                        message.originalName = reader.string();
                        break;
                    }
                case 3: {
                        message.size = reader.int64();
                        break;
                    }
                case 4: {
                        message.type = reader.string();
                        break;
                    }
                case 5: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FileInfo} FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileInfo message.
         * @function verify
         * @memberof protocol.FileInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.originalName != null && message.hasOwnProperty("originalName"))
                if (!$util.isString(message.originalName))
                    return "originalName: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FileInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FileInfo} FileInfo
         */
        FileInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FileInfo)
                return object;
            var message = new $root.protocol.FileInfo();
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.originalName != null)
                message.originalName = String(object.originalName);
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = false;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
            if (object.type != null)
                message.type = String(object.type);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FileInfo
         * @static
         * @param {protocol.FileInfo} message FileInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.filename = "";
                object.originalName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
                object.type = "";
                object.url = "";
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.originalName != null && message.hasOwnProperty("originalName"))
                object.originalName = message.originalName;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this FileInfo to JSON.
         * @function toJSON
         * @memberof protocol.FileInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileInfo
         * @function getTypeUrl
         * @memberof protocol.FileInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.FileInfo";
        };

        return FileInfo;
    })();

    protocol.AddFriendReq = (function() {

        /**
         * Properties of an AddFriendReq.
         * @memberof protocol
         * @interface IAddFriendReq
         * @property {string|null} [fromUid] AddFriendReq fromUid
         * @property {string|null} [toUid] AddFriendReq toUid
         * @property {string|null} [verifyMsg] AddFriendReq verifyMsg
         * @property {string|null} [token] AddFriendReq token
         */

        /**
         * Constructs a new AddFriendReq.
         * @memberof protocol
         * @classdesc Represents an AddFriendReq.
         * @implements IAddFriendReq
         * @constructor
         * @param {protocol.IAddFriendReq=} [properties] Properties to set
         */
        function AddFriendReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddFriendReq fromUid.
         * @member {string} fromUid
         * @memberof protocol.AddFriendReq
         * @instance
         */
        AddFriendReq.prototype.fromUid = "";

        /**
         * AddFriendReq toUid.
         * @member {string} toUid
         * @memberof protocol.AddFriendReq
         * @instance
         */
        AddFriendReq.prototype.toUid = "";

        /**
         * AddFriendReq verifyMsg.
         * @member {string} verifyMsg
         * @memberof protocol.AddFriendReq
         * @instance
         */
        AddFriendReq.prototype.verifyMsg = "";

        /**
         * AddFriendReq token.
         * @member {string} token
         * @memberof protocol.AddFriendReq
         * @instance
         */
        AddFriendReq.prototype.token = "";

        /**
         * Creates a new AddFriendReq instance using the specified properties.
         * @function create
         * @memberof protocol.AddFriendReq
         * @static
         * @param {protocol.IAddFriendReq=} [properties] Properties to set
         * @returns {protocol.AddFriendReq} AddFriendReq instance
         */
        AddFriendReq.create = function create(properties) {
            return new AddFriendReq(properties);
        };

        /**
         * Encodes the specified AddFriendReq message. Does not implicitly {@link protocol.AddFriendReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.AddFriendReq
         * @static
         * @param {protocol.IAddFriendReq} message AddFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromUid != null && Object.hasOwnProperty.call(message, "fromUid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fromUid);
            if (message.toUid != null && Object.hasOwnProperty.call(message, "toUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.toUid);
            if (message.verifyMsg != null && Object.hasOwnProperty.call(message, "verifyMsg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.verifyMsg);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified AddFriendReq message, length delimited. Does not implicitly {@link protocol.AddFriendReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AddFriendReq
         * @static
         * @param {protocol.IAddFriendReq} message AddFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddFriendReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AddFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AddFriendReq} AddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AddFriendReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fromUid = reader.string();
                        break;
                    }
                case 2: {
                        message.toUid = reader.string();
                        break;
                    }
                case 3: {
                        message.verifyMsg = reader.string();
                        break;
                    }
                case 4: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddFriendReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AddFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AddFriendReq} AddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddFriendReq message.
         * @function verify
         * @memberof protocol.AddFriendReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddFriendReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                if (!$util.isString(message.fromUid))
                    return "fromUid: string expected";
            if (message.toUid != null && message.hasOwnProperty("toUid"))
                if (!$util.isString(message.toUid))
                    return "toUid: string expected";
            if (message.verifyMsg != null && message.hasOwnProperty("verifyMsg"))
                if (!$util.isString(message.verifyMsg))
                    return "verifyMsg: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates an AddFriendReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AddFriendReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AddFriendReq} AddFriendReq
         */
        AddFriendReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AddFriendReq)
                return object;
            var message = new $root.protocol.AddFriendReq();
            if (object.fromUid != null)
                message.fromUid = String(object.fromUid);
            if (object.toUid != null)
                message.toUid = String(object.toUid);
            if (object.verifyMsg != null)
                message.verifyMsg = String(object.verifyMsg);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from an AddFriendReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AddFriendReq
         * @static
         * @param {protocol.AddFriendReq} message AddFriendReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddFriendReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fromUid = "";
                object.toUid = "";
                object.verifyMsg = "";
                object.token = "";
            }
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                object.fromUid = message.fromUid;
            if (message.toUid != null && message.hasOwnProperty("toUid"))
                object.toUid = message.toUid;
            if (message.verifyMsg != null && message.hasOwnProperty("verifyMsg"))
                object.verifyMsg = message.verifyMsg;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this AddFriendReq to JSON.
         * @function toJSON
         * @memberof protocol.AddFriendReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddFriendReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddFriendReq
         * @function getTypeUrl
         * @memberof protocol.AddFriendReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddFriendReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.AddFriendReq";
        };

        return AddFriendReq;
    })();

    protocol.AddFriendResp = (function() {

        /**
         * Properties of an AddFriendResp.
         * @memberof protocol
         * @interface IAddFriendResp
         * @property {number|null} [code] AddFriendResp code
         * @property {string|null} [msg] AddFriendResp msg
         */

        /**
         * Constructs a new AddFriendResp.
         * @memberof protocol
         * @classdesc Represents an AddFriendResp.
         * @implements IAddFriendResp
         * @constructor
         * @param {protocol.IAddFriendResp=} [properties] Properties to set
         */
        function AddFriendResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddFriendResp code.
         * @member {number} code
         * @memberof protocol.AddFriendResp
         * @instance
         */
        AddFriendResp.prototype.code = 0;

        /**
         * AddFriendResp msg.
         * @member {string} msg
         * @memberof protocol.AddFriendResp
         * @instance
         */
        AddFriendResp.prototype.msg = "";

        /**
         * Creates a new AddFriendResp instance using the specified properties.
         * @function create
         * @memberof protocol.AddFriendResp
         * @static
         * @param {protocol.IAddFriendResp=} [properties] Properties to set
         * @returns {protocol.AddFriendResp} AddFriendResp instance
         */
        AddFriendResp.create = function create(properties) {
            return new AddFriendResp(properties);
        };

        /**
         * Encodes the specified AddFriendResp message. Does not implicitly {@link protocol.AddFriendResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.AddFriendResp
         * @static
         * @param {protocol.IAddFriendResp} message AddFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified AddFriendResp message, length delimited. Does not implicitly {@link protocol.AddFriendResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AddFriendResp
         * @static
         * @param {protocol.IAddFriendResp} message AddFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddFriendResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AddFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AddFriendResp} AddFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AddFriendResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddFriendResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AddFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AddFriendResp} AddFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddFriendResp message.
         * @function verify
         * @memberof protocol.AddFriendResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddFriendResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an AddFriendResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AddFriendResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AddFriendResp} AddFriendResp
         */
        AddFriendResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AddFriendResp)
                return object;
            var message = new $root.protocol.AddFriendResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an AddFriendResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AddFriendResp
         * @static
         * @param {protocol.AddFriendResp} message AddFriendResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddFriendResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this AddFriendResp to JSON.
         * @function toJSON
         * @memberof protocol.AddFriendResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddFriendResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddFriendResp
         * @function getTypeUrl
         * @memberof protocol.AddFriendResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddFriendResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.AddFriendResp";
        };

        return AddFriendResp;
    })();

    protocol.HandleFriendReq = (function() {

        /**
         * Properties of a HandleFriendReq.
         * @memberof protocol
         * @interface IHandleFriendReq
         * @property {string|null} [fromUid] HandleFriendReq fromUid
         * @property {string|null} [toUid] HandleFriendReq toUid
         * @property {boolean|null} [accept] HandleFriendReq accept
         * @property {string|null} [token] HandleFriendReq token
         */

        /**
         * Constructs a new HandleFriendReq.
         * @memberof protocol
         * @classdesc Represents a HandleFriendReq.
         * @implements IHandleFriendReq
         * @constructor
         * @param {protocol.IHandleFriendReq=} [properties] Properties to set
         */
        function HandleFriendReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandleFriendReq fromUid.
         * @member {string} fromUid
         * @memberof protocol.HandleFriendReq
         * @instance
         */
        HandleFriendReq.prototype.fromUid = "";

        /**
         * HandleFriendReq toUid.
         * @member {string} toUid
         * @memberof protocol.HandleFriendReq
         * @instance
         */
        HandleFriendReq.prototype.toUid = "";

        /**
         * HandleFriendReq accept.
         * @member {boolean} accept
         * @memberof protocol.HandleFriendReq
         * @instance
         */
        HandleFriendReq.prototype.accept = false;

        /**
         * HandleFriendReq token.
         * @member {string} token
         * @memberof protocol.HandleFriendReq
         * @instance
         */
        HandleFriendReq.prototype.token = "";

        /**
         * Creates a new HandleFriendReq instance using the specified properties.
         * @function create
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {protocol.IHandleFriendReq=} [properties] Properties to set
         * @returns {protocol.HandleFriendReq} HandleFriendReq instance
         */
        HandleFriendReq.create = function create(properties) {
            return new HandleFriendReq(properties);
        };

        /**
         * Encodes the specified HandleFriendReq message. Does not implicitly {@link protocol.HandleFriendReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {protocol.IHandleFriendReq} message HandleFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleFriendReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromUid != null && Object.hasOwnProperty.call(message, "fromUid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fromUid);
            if (message.toUid != null && Object.hasOwnProperty.call(message, "toUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.toUid);
            if (message.accept != null && Object.hasOwnProperty.call(message, "accept"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.accept);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified HandleFriendReq message, length delimited. Does not implicitly {@link protocol.HandleFriendReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {protocol.IHandleFriendReq} message HandleFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleFriendReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandleFriendReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HandleFriendReq} HandleFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleFriendReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HandleFriendReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fromUid = reader.string();
                        break;
                    }
                case 2: {
                        message.toUid = reader.string();
                        break;
                    }
                case 3: {
                        message.accept = reader.bool();
                        break;
                    }
                case 4: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HandleFriendReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HandleFriendReq} HandleFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleFriendReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandleFriendReq message.
         * @function verify
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandleFriendReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                if (!$util.isString(message.fromUid))
                    return "fromUid: string expected";
            if (message.toUid != null && message.hasOwnProperty("toUid"))
                if (!$util.isString(message.toUid))
                    return "toUid: string expected";
            if (message.accept != null && message.hasOwnProperty("accept"))
                if (typeof message.accept !== "boolean")
                    return "accept: boolean expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a HandleFriendReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HandleFriendReq} HandleFriendReq
         */
        HandleFriendReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HandleFriendReq)
                return object;
            var message = new $root.protocol.HandleFriendReq();
            if (object.fromUid != null)
                message.fromUid = String(object.fromUid);
            if (object.toUid != null)
                message.toUid = String(object.toUid);
            if (object.accept != null)
                message.accept = Boolean(object.accept);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a HandleFriendReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {protocol.HandleFriendReq} message HandleFriendReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandleFriendReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fromUid = "";
                object.toUid = "";
                object.accept = false;
                object.token = "";
            }
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                object.fromUid = message.fromUid;
            if (message.toUid != null && message.hasOwnProperty("toUid"))
                object.toUid = message.toUid;
            if (message.accept != null && message.hasOwnProperty("accept"))
                object.accept = message.accept;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this HandleFriendReq to JSON.
         * @function toJSON
         * @memberof protocol.HandleFriendReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandleFriendReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandleFriendReq
         * @function getTypeUrl
         * @memberof protocol.HandleFriendReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandleFriendReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.HandleFriendReq";
        };

        return HandleFriendReq;
    })();

    protocol.HandleFriendResp = (function() {

        /**
         * Properties of a HandleFriendResp.
         * @memberof protocol
         * @interface IHandleFriendResp
         * @property {number|null} [code] HandleFriendResp code
         * @property {string|null} [msg] HandleFriendResp msg
         */

        /**
         * Constructs a new HandleFriendResp.
         * @memberof protocol
         * @classdesc Represents a HandleFriendResp.
         * @implements IHandleFriendResp
         * @constructor
         * @param {protocol.IHandleFriendResp=} [properties] Properties to set
         */
        function HandleFriendResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandleFriendResp code.
         * @member {number} code
         * @memberof protocol.HandleFriendResp
         * @instance
         */
        HandleFriendResp.prototype.code = 0;

        /**
         * HandleFriendResp msg.
         * @member {string} msg
         * @memberof protocol.HandleFriendResp
         * @instance
         */
        HandleFriendResp.prototype.msg = "";

        /**
         * Creates a new HandleFriendResp instance using the specified properties.
         * @function create
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {protocol.IHandleFriendResp=} [properties] Properties to set
         * @returns {protocol.HandleFriendResp} HandleFriendResp instance
         */
        HandleFriendResp.create = function create(properties) {
            return new HandleFriendResp(properties);
        };

        /**
         * Encodes the specified HandleFriendResp message. Does not implicitly {@link protocol.HandleFriendResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {protocol.IHandleFriendResp} message HandleFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleFriendResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified HandleFriendResp message, length delimited. Does not implicitly {@link protocol.HandleFriendResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {protocol.IHandleFriendResp} message HandleFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleFriendResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandleFriendResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HandleFriendResp} HandleFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleFriendResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HandleFriendResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HandleFriendResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HandleFriendResp} HandleFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleFriendResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandleFriendResp message.
         * @function verify
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandleFriendResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a HandleFriendResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HandleFriendResp} HandleFriendResp
         */
        HandleFriendResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HandleFriendResp)
                return object;
            var message = new $root.protocol.HandleFriendResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a HandleFriendResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {protocol.HandleFriendResp} message HandleFriendResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandleFriendResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this HandleFriendResp to JSON.
         * @function toJSON
         * @memberof protocol.HandleFriendResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandleFriendResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandleFriendResp
         * @function getTypeUrl
         * @memberof protocol.HandleFriendResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandleFriendResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.HandleFriendResp";
        };

        return HandleFriendResp;
    })();

    protocol.FriendListReq = (function() {

        /**
         * Properties of a FriendListReq.
         * @memberof protocol
         * @interface IFriendListReq
         * @property {string|null} [uid] FriendListReq uid
         * @property {string|null} [token] FriendListReq token
         */

        /**
         * Constructs a new FriendListReq.
         * @memberof protocol
         * @classdesc Represents a FriendListReq.
         * @implements IFriendListReq
         * @constructor
         * @param {protocol.IFriendListReq=} [properties] Properties to set
         */
        function FriendListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendListReq uid.
         * @member {string} uid
         * @memberof protocol.FriendListReq
         * @instance
         */
        FriendListReq.prototype.uid = "";

        /**
         * FriendListReq token.
         * @member {string} token
         * @memberof protocol.FriendListReq
         * @instance
         */
        FriendListReq.prototype.token = "";

        /**
         * Creates a new FriendListReq instance using the specified properties.
         * @function create
         * @memberof protocol.FriendListReq
         * @static
         * @param {protocol.IFriendListReq=} [properties] Properties to set
         * @returns {protocol.FriendListReq} FriendListReq instance
         */
        FriendListReq.create = function create(properties) {
            return new FriendListReq(properties);
        };

        /**
         * Encodes the specified FriendListReq message. Does not implicitly {@link protocol.FriendListReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendListReq
         * @static
         * @param {protocol.IFriendListReq} message FriendListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified FriendListReq message, length delimited. Does not implicitly {@link protocol.FriendListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendListReq
         * @static
         * @param {protocol.IFriendListReq} message FriendListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendListReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendListReq} FriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendListReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendListReq} FriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendListReq message.
         * @function verify
         * @memberof protocol.FriendListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a FriendListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendListReq} FriendListReq
         */
        FriendListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendListReq)
                return object;
            var message = new $root.protocol.FriendListReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a FriendListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendListReq
         * @static
         * @param {protocol.FriendListReq} message FriendListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.token = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this FriendListReq to JSON.
         * @function toJSON
         * @memberof protocol.FriendListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FriendListReq
         * @function getTypeUrl
         * @memberof protocol.FriendListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FriendListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.FriendListReq";
        };

        return FriendListReq;
    })();

    protocol.FriendListResp = (function() {

        /**
         * Properties of a FriendListResp.
         * @memberof protocol
         * @interface IFriendListResp
         * @property {Array.<string>|null} [friendUids] FriendListResp friendUids
         * @property {Array.<string>|null} [friendUsernames] FriendListResp friendUsernames
         * @property {number|null} [code] FriendListResp code
         * @property {string|null} [msg] FriendListResp msg
         * @property {Array.<string>|null} [remarks] FriendListResp remarks
         */

        /**
         * Constructs a new FriendListResp.
         * @memberof protocol
         * @classdesc Represents a FriendListResp.
         * @implements IFriendListResp
         * @constructor
         * @param {protocol.IFriendListResp=} [properties] Properties to set
         */
        function FriendListResp(properties) {
            this.friendUids = [];
            this.friendUsernames = [];
            this.remarks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendListResp friendUids.
         * @member {Array.<string>} friendUids
         * @memberof protocol.FriendListResp
         * @instance
         */
        FriendListResp.prototype.friendUids = $util.emptyArray;

        /**
         * FriendListResp friendUsernames.
         * @member {Array.<string>} friendUsernames
         * @memberof protocol.FriendListResp
         * @instance
         */
        FriendListResp.prototype.friendUsernames = $util.emptyArray;

        /**
         * FriendListResp code.
         * @member {number} code
         * @memberof protocol.FriendListResp
         * @instance
         */
        FriendListResp.prototype.code = 0;

        /**
         * FriendListResp msg.
         * @member {string} msg
         * @memberof protocol.FriendListResp
         * @instance
         */
        FriendListResp.prototype.msg = "";

        /**
         * FriendListResp remarks.
         * @member {Array.<string>} remarks
         * @memberof protocol.FriendListResp
         * @instance
         */
        FriendListResp.prototype.remarks = $util.emptyArray;

        /**
         * Creates a new FriendListResp instance using the specified properties.
         * @function create
         * @memberof protocol.FriendListResp
         * @static
         * @param {protocol.IFriendListResp=} [properties] Properties to set
         * @returns {protocol.FriendListResp} FriendListResp instance
         */
        FriendListResp.create = function create(properties) {
            return new FriendListResp(properties);
        };

        /**
         * Encodes the specified FriendListResp message. Does not implicitly {@link protocol.FriendListResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendListResp
         * @static
         * @param {protocol.IFriendListResp} message FriendListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendUids != null && message.friendUids.length)
                for (var i = 0; i < message.friendUids.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.friendUids[i]);
            if (message.friendUsernames != null && message.friendUsernames.length)
                for (var i = 0; i < message.friendUsernames.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendUsernames[i]);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.msg);
            if (message.remarks != null && message.remarks.length)
                for (var i = 0; i < message.remarks.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.remarks[i]);
            return writer;
        };

        /**
         * Encodes the specified FriendListResp message, length delimited. Does not implicitly {@link protocol.FriendListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendListResp
         * @static
         * @param {protocol.IFriendListResp} message FriendListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendListResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendListResp} FriendListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendListResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.friendUids && message.friendUids.length))
                            message.friendUids = [];
                        message.friendUids.push(reader.string());
                        break;
                    }
                case 2: {
                        if (!(message.friendUsernames && message.friendUsernames.length))
                            message.friendUsernames = [];
                        message.friendUsernames.push(reader.string());
                        break;
                    }
                case 3: {
                        message.code = reader.int32();
                        break;
                    }
                case 4: {
                        message.msg = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.remarks && message.remarks.length))
                            message.remarks = [];
                        message.remarks.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendListResp} FriendListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendListResp message.
         * @function verify
         * @memberof protocol.FriendListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendUids != null && message.hasOwnProperty("friendUids")) {
                if (!Array.isArray(message.friendUids))
                    return "friendUids: array expected";
                for (var i = 0; i < message.friendUids.length; ++i)
                    if (!$util.isString(message.friendUids[i]))
                        return "friendUids: string[] expected";
            }
            if (message.friendUsernames != null && message.hasOwnProperty("friendUsernames")) {
                if (!Array.isArray(message.friendUsernames))
                    return "friendUsernames: array expected";
                for (var i = 0; i < message.friendUsernames.length; ++i)
                    if (!$util.isString(message.friendUsernames[i]))
                        return "friendUsernames: string[] expected";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.remarks != null && message.hasOwnProperty("remarks")) {
                if (!Array.isArray(message.remarks))
                    return "remarks: array expected";
                for (var i = 0; i < message.remarks.length; ++i)
                    if (!$util.isString(message.remarks[i]))
                        return "remarks: string[] expected";
            }
            return null;
        };

        /**
         * Creates a FriendListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendListResp} FriendListResp
         */
        FriendListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendListResp)
                return object;
            var message = new $root.protocol.FriendListResp();
            if (object.friendUids) {
                if (!Array.isArray(object.friendUids))
                    throw TypeError(".protocol.FriendListResp.friendUids: array expected");
                message.friendUids = [];
                for (var i = 0; i < object.friendUids.length; ++i)
                    message.friendUids[i] = String(object.friendUids[i]);
            }
            if (object.friendUsernames) {
                if (!Array.isArray(object.friendUsernames))
                    throw TypeError(".protocol.FriendListResp.friendUsernames: array expected");
                message.friendUsernames = [];
                for (var i = 0; i < object.friendUsernames.length; ++i)
                    message.friendUsernames[i] = String(object.friendUsernames[i]);
            }
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.remarks) {
                if (!Array.isArray(object.remarks))
                    throw TypeError(".protocol.FriendListResp.remarks: array expected");
                message.remarks = [];
                for (var i = 0; i < object.remarks.length; ++i)
                    message.remarks[i] = String(object.remarks[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendListResp
         * @static
         * @param {protocol.FriendListResp} message FriendListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.friendUids = [];
                object.friendUsernames = [];
                object.remarks = [];
            }
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.friendUids && message.friendUids.length) {
                object.friendUids = [];
                for (var j = 0; j < message.friendUids.length; ++j)
                    object.friendUids[j] = message.friendUids[j];
            }
            if (message.friendUsernames && message.friendUsernames.length) {
                object.friendUsernames = [];
                for (var j = 0; j < message.friendUsernames.length; ++j)
                    object.friendUsernames[j] = message.friendUsernames[j];
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.remarks && message.remarks.length) {
                object.remarks = [];
                for (var j = 0; j < message.remarks.length; ++j)
                    object.remarks[j] = message.remarks[j];
            }
            return object;
        };

        /**
         * Converts this FriendListResp to JSON.
         * @function toJSON
         * @memberof protocol.FriendListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FriendListResp
         * @function getTypeUrl
         * @memberof protocol.FriendListResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FriendListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.FriendListResp";
        };

        return FriendListResp;
    })();

    protocol.DeleteFriendReq = (function() {

        /**
         * Properties of a DeleteFriendReq.
         * @memberof protocol
         * @interface IDeleteFriendReq
         * @property {string|null} [uid] DeleteFriendReq uid
         * @property {string|null} [friendUid] DeleteFriendReq friendUid
         * @property {string|null} [token] DeleteFriendReq token
         */

        /**
         * Constructs a new DeleteFriendReq.
         * @memberof protocol
         * @classdesc Represents a DeleteFriendReq.
         * @implements IDeleteFriendReq
         * @constructor
         * @param {protocol.IDeleteFriendReq=} [properties] Properties to set
         */
        function DeleteFriendReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteFriendReq uid.
         * @member {string} uid
         * @memberof protocol.DeleteFriendReq
         * @instance
         */
        DeleteFriendReq.prototype.uid = "";

        /**
         * DeleteFriendReq friendUid.
         * @member {string} friendUid
         * @memberof protocol.DeleteFriendReq
         * @instance
         */
        DeleteFriendReq.prototype.friendUid = "";

        /**
         * DeleteFriendReq token.
         * @member {string} token
         * @memberof protocol.DeleteFriendReq
         * @instance
         */
        DeleteFriendReq.prototype.token = "";

        /**
         * Creates a new DeleteFriendReq instance using the specified properties.
         * @function create
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {protocol.IDeleteFriendReq=} [properties] Properties to set
         * @returns {protocol.DeleteFriendReq} DeleteFriendReq instance
         */
        DeleteFriendReq.create = function create(properties) {
            return new DeleteFriendReq(properties);
        };

        /**
         * Encodes the specified DeleteFriendReq message. Does not implicitly {@link protocol.DeleteFriendReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {protocol.IDeleteFriendReq} message DeleteFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteFriendReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.friendUid != null && Object.hasOwnProperty.call(message, "friendUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendUid);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified DeleteFriendReq message, length delimited. Does not implicitly {@link protocol.DeleteFriendReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {protocol.IDeleteFriendReq} message DeleteFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteFriendReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteFriendReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DeleteFriendReq} DeleteFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteFriendReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DeleteFriendReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.friendUid = reader.string();
                        break;
                    }
                case 3: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteFriendReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DeleteFriendReq} DeleteFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteFriendReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteFriendReq message.
         * @function verify
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteFriendReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.friendUid != null && message.hasOwnProperty("friendUid"))
                if (!$util.isString(message.friendUid))
                    return "friendUid: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a DeleteFriendReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DeleteFriendReq} DeleteFriendReq
         */
        DeleteFriendReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DeleteFriendReq)
                return object;
            var message = new $root.protocol.DeleteFriendReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.friendUid != null)
                message.friendUid = String(object.friendUid);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a DeleteFriendReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {protocol.DeleteFriendReq} message DeleteFriendReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteFriendReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.friendUid = "";
                object.token = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.friendUid != null && message.hasOwnProperty("friendUid"))
                object.friendUid = message.friendUid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this DeleteFriendReq to JSON.
         * @function toJSON
         * @memberof protocol.DeleteFriendReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteFriendReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteFriendReq
         * @function getTypeUrl
         * @memberof protocol.DeleteFriendReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteFriendReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.DeleteFriendReq";
        };

        return DeleteFriendReq;
    })();

    protocol.DeleteFriendResp = (function() {

        /**
         * Properties of a DeleteFriendResp.
         * @memberof protocol
         * @interface IDeleteFriendResp
         * @property {number|null} [code] DeleteFriendResp code
         * @property {string|null} [msg] DeleteFriendResp msg
         */

        /**
         * Constructs a new DeleteFriendResp.
         * @memberof protocol
         * @classdesc Represents a DeleteFriendResp.
         * @implements IDeleteFriendResp
         * @constructor
         * @param {protocol.IDeleteFriendResp=} [properties] Properties to set
         */
        function DeleteFriendResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteFriendResp code.
         * @member {number} code
         * @memberof protocol.DeleteFriendResp
         * @instance
         */
        DeleteFriendResp.prototype.code = 0;

        /**
         * DeleteFriendResp msg.
         * @member {string} msg
         * @memberof protocol.DeleteFriendResp
         * @instance
         */
        DeleteFriendResp.prototype.msg = "";

        /**
         * Creates a new DeleteFriendResp instance using the specified properties.
         * @function create
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {protocol.IDeleteFriendResp=} [properties] Properties to set
         * @returns {protocol.DeleteFriendResp} DeleteFriendResp instance
         */
        DeleteFriendResp.create = function create(properties) {
            return new DeleteFriendResp(properties);
        };

        /**
         * Encodes the specified DeleteFriendResp message. Does not implicitly {@link protocol.DeleteFriendResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {protocol.IDeleteFriendResp} message DeleteFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteFriendResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified DeleteFriendResp message, length delimited. Does not implicitly {@link protocol.DeleteFriendResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {protocol.IDeleteFriendResp} message DeleteFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteFriendResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteFriendResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DeleteFriendResp} DeleteFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteFriendResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DeleteFriendResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteFriendResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DeleteFriendResp} DeleteFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteFriendResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteFriendResp message.
         * @function verify
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteFriendResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a DeleteFriendResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DeleteFriendResp} DeleteFriendResp
         */
        DeleteFriendResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DeleteFriendResp)
                return object;
            var message = new $root.protocol.DeleteFriendResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a DeleteFriendResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {protocol.DeleteFriendResp} message DeleteFriendResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteFriendResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this DeleteFriendResp to JSON.
         * @function toJSON
         * @memberof protocol.DeleteFriendResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteFriendResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteFriendResp
         * @function getTypeUrl
         * @memberof protocol.DeleteFriendResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteFriendResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.DeleteFriendResp";
        };

        return DeleteFriendResp;
    })();

    protocol.FriendRequestListResp = (function() {

        /**
         * Properties of a FriendRequestListResp.
         * @memberof protocol
         * @interface IFriendRequestListResp
         * @property {Array.<string>|null} [fromUids] FriendRequestListResp fromUids
         * @property {Array.<string>|null} [fromUsernames] FriendRequestListResp fromUsernames
         * @property {Array.<string>|null} [verifyMsgs] FriendRequestListResp verifyMsgs
         * @property {number|null} [code] FriendRequestListResp code
         * @property {string|null} [msg] FriendRequestListResp msg
         */

        /**
         * Constructs a new FriendRequestListResp.
         * @memberof protocol
         * @classdesc Represents a FriendRequestListResp.
         * @implements IFriendRequestListResp
         * @constructor
         * @param {protocol.IFriendRequestListResp=} [properties] Properties to set
         */
        function FriendRequestListResp(properties) {
            this.fromUids = [];
            this.fromUsernames = [];
            this.verifyMsgs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendRequestListResp fromUids.
         * @member {Array.<string>} fromUids
         * @memberof protocol.FriendRequestListResp
         * @instance
         */
        FriendRequestListResp.prototype.fromUids = $util.emptyArray;

        /**
         * FriendRequestListResp fromUsernames.
         * @member {Array.<string>} fromUsernames
         * @memberof protocol.FriendRequestListResp
         * @instance
         */
        FriendRequestListResp.prototype.fromUsernames = $util.emptyArray;

        /**
         * FriendRequestListResp verifyMsgs.
         * @member {Array.<string>} verifyMsgs
         * @memberof protocol.FriendRequestListResp
         * @instance
         */
        FriendRequestListResp.prototype.verifyMsgs = $util.emptyArray;

        /**
         * FriendRequestListResp code.
         * @member {number} code
         * @memberof protocol.FriendRequestListResp
         * @instance
         */
        FriendRequestListResp.prototype.code = 0;

        /**
         * FriendRequestListResp msg.
         * @member {string} msg
         * @memberof protocol.FriendRequestListResp
         * @instance
         */
        FriendRequestListResp.prototype.msg = "";

        /**
         * Creates a new FriendRequestListResp instance using the specified properties.
         * @function create
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {protocol.IFriendRequestListResp=} [properties] Properties to set
         * @returns {protocol.FriendRequestListResp} FriendRequestListResp instance
         */
        FriendRequestListResp.create = function create(properties) {
            return new FriendRequestListResp(properties);
        };

        /**
         * Encodes the specified FriendRequestListResp message. Does not implicitly {@link protocol.FriendRequestListResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {protocol.IFriendRequestListResp} message FriendRequestListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequestListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromUids != null && message.fromUids.length)
                for (var i = 0; i < message.fromUids.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fromUids[i]);
            if (message.fromUsernames != null && message.fromUsernames.length)
                for (var i = 0; i < message.fromUsernames.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromUsernames[i]);
            if (message.verifyMsgs != null && message.verifyMsgs.length)
                for (var i = 0; i < message.verifyMsgs.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.verifyMsgs[i]);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified FriendRequestListResp message, length delimited. Does not implicitly {@link protocol.FriendRequestListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {protocol.IFriendRequestListResp} message FriendRequestListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequestListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendRequestListResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendRequestListResp} FriendRequestListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequestListResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendRequestListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.fromUids && message.fromUids.length))
                            message.fromUids = [];
                        message.fromUids.push(reader.string());
                        break;
                    }
                case 2: {
                        if (!(message.fromUsernames && message.fromUsernames.length))
                            message.fromUsernames = [];
                        message.fromUsernames.push(reader.string());
                        break;
                    }
                case 3: {
                        if (!(message.verifyMsgs && message.verifyMsgs.length))
                            message.verifyMsgs = [];
                        message.verifyMsgs.push(reader.string());
                        break;
                    }
                case 4: {
                        message.code = reader.int32();
                        break;
                    }
                case 5: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendRequestListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendRequestListResp} FriendRequestListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequestListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendRequestListResp message.
         * @function verify
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendRequestListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromUids != null && message.hasOwnProperty("fromUids")) {
                if (!Array.isArray(message.fromUids))
                    return "fromUids: array expected";
                for (var i = 0; i < message.fromUids.length; ++i)
                    if (!$util.isString(message.fromUids[i]))
                        return "fromUids: string[] expected";
            }
            if (message.fromUsernames != null && message.hasOwnProperty("fromUsernames")) {
                if (!Array.isArray(message.fromUsernames))
                    return "fromUsernames: array expected";
                for (var i = 0; i < message.fromUsernames.length; ++i)
                    if (!$util.isString(message.fromUsernames[i]))
                        return "fromUsernames: string[] expected";
            }
            if (message.verifyMsgs != null && message.hasOwnProperty("verifyMsgs")) {
                if (!Array.isArray(message.verifyMsgs))
                    return "verifyMsgs: array expected";
                for (var i = 0; i < message.verifyMsgs.length; ++i)
                    if (!$util.isString(message.verifyMsgs[i]))
                        return "verifyMsgs: string[] expected";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a FriendRequestListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendRequestListResp} FriendRequestListResp
         */
        FriendRequestListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendRequestListResp)
                return object;
            var message = new $root.protocol.FriendRequestListResp();
            if (object.fromUids) {
                if (!Array.isArray(object.fromUids))
                    throw TypeError(".protocol.FriendRequestListResp.fromUids: array expected");
                message.fromUids = [];
                for (var i = 0; i < object.fromUids.length; ++i)
                    message.fromUids[i] = String(object.fromUids[i]);
            }
            if (object.fromUsernames) {
                if (!Array.isArray(object.fromUsernames))
                    throw TypeError(".protocol.FriendRequestListResp.fromUsernames: array expected");
                message.fromUsernames = [];
                for (var i = 0; i < object.fromUsernames.length; ++i)
                    message.fromUsernames[i] = String(object.fromUsernames[i]);
            }
            if (object.verifyMsgs) {
                if (!Array.isArray(object.verifyMsgs))
                    throw TypeError(".protocol.FriendRequestListResp.verifyMsgs: array expected");
                message.verifyMsgs = [];
                for (var i = 0; i < object.verifyMsgs.length; ++i)
                    message.verifyMsgs[i] = String(object.verifyMsgs[i]);
            }
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a FriendRequestListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {protocol.FriendRequestListResp} message FriendRequestListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendRequestListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.fromUids = [];
                object.fromUsernames = [];
                object.verifyMsgs = [];
            }
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.fromUids && message.fromUids.length) {
                object.fromUids = [];
                for (var j = 0; j < message.fromUids.length; ++j)
                    object.fromUids[j] = message.fromUids[j];
            }
            if (message.fromUsernames && message.fromUsernames.length) {
                object.fromUsernames = [];
                for (var j = 0; j < message.fromUsernames.length; ++j)
                    object.fromUsernames[j] = message.fromUsernames[j];
            }
            if (message.verifyMsgs && message.verifyMsgs.length) {
                object.verifyMsgs = [];
                for (var j = 0; j < message.verifyMsgs.length; ++j)
                    object.verifyMsgs[j] = message.verifyMsgs[j];
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this FriendRequestListResp to JSON.
         * @function toJSON
         * @memberof protocol.FriendRequestListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendRequestListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FriendRequestListResp
         * @function getTypeUrl
         * @memberof protocol.FriendRequestListResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FriendRequestListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.FriendRequestListResp";
        };

        return FriendRequestListResp;
    })();

    protocol.UpdateRemarkReq = (function() {

        /**
         * Properties of an UpdateRemarkReq.
         * @memberof protocol
         * @interface IUpdateRemarkReq
         * @property {string|null} [uid] UpdateRemarkReq uid
         * @property {string|null} [friendUid] UpdateRemarkReq friendUid
         * @property {string|null} [remark] UpdateRemarkReq remark
         * @property {string|null} [token] UpdateRemarkReq token
         */

        /**
         * Constructs a new UpdateRemarkReq.
         * @memberof protocol
         * @classdesc Represents an UpdateRemarkReq.
         * @implements IUpdateRemarkReq
         * @constructor
         * @param {protocol.IUpdateRemarkReq=} [properties] Properties to set
         */
        function UpdateRemarkReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRemarkReq uid.
         * @member {string} uid
         * @memberof protocol.UpdateRemarkReq
         * @instance
         */
        UpdateRemarkReq.prototype.uid = "";

        /**
         * UpdateRemarkReq friendUid.
         * @member {string} friendUid
         * @memberof protocol.UpdateRemarkReq
         * @instance
         */
        UpdateRemarkReq.prototype.friendUid = "";

        /**
         * UpdateRemarkReq remark.
         * @member {string} remark
         * @memberof protocol.UpdateRemarkReq
         * @instance
         */
        UpdateRemarkReq.prototype.remark = "";

        /**
         * UpdateRemarkReq token.
         * @member {string} token
         * @memberof protocol.UpdateRemarkReq
         * @instance
         */
        UpdateRemarkReq.prototype.token = "";

        /**
         * Creates a new UpdateRemarkReq instance using the specified properties.
         * @function create
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {protocol.IUpdateRemarkReq=} [properties] Properties to set
         * @returns {protocol.UpdateRemarkReq} UpdateRemarkReq instance
         */
        UpdateRemarkReq.create = function create(properties) {
            return new UpdateRemarkReq(properties);
        };

        /**
         * Encodes the specified UpdateRemarkReq message. Does not implicitly {@link protocol.UpdateRemarkReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {protocol.IUpdateRemarkReq} message UpdateRemarkReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRemarkReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.friendUid != null && Object.hasOwnProperty.call(message, "friendUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendUid);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.remark);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified UpdateRemarkReq message, length delimited. Does not implicitly {@link protocol.UpdateRemarkReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {protocol.IUpdateRemarkReq} message UpdateRemarkReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRemarkReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRemarkReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpdateRemarkReq} UpdateRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRemarkReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpdateRemarkReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.friendUid = reader.string();
                        break;
                    }
                case 3: {
                        message.remark = reader.string();
                        break;
                    }
                case 4: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateRemarkReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpdateRemarkReq} UpdateRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRemarkReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRemarkReq message.
         * @function verify
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRemarkReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.friendUid != null && message.hasOwnProperty("friendUid"))
                if (!$util.isString(message.friendUid))
                    return "friendUid: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates an UpdateRemarkReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpdateRemarkReq} UpdateRemarkReq
         */
        UpdateRemarkReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpdateRemarkReq)
                return object;
            var message = new $root.protocol.UpdateRemarkReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.friendUid != null)
                message.friendUid = String(object.friendUid);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from an UpdateRemarkReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {protocol.UpdateRemarkReq} message UpdateRemarkReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRemarkReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.friendUid = "";
                object.remark = "";
                object.token = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.friendUid != null && message.hasOwnProperty("friendUid"))
                object.friendUid = message.friendUid;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this UpdateRemarkReq to JSON.
         * @function toJSON
         * @memberof protocol.UpdateRemarkReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRemarkReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateRemarkReq
         * @function getTypeUrl
         * @memberof protocol.UpdateRemarkReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateRemarkReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpdateRemarkReq";
        };

        return UpdateRemarkReq;
    })();

    protocol.UpdateRemarkResp = (function() {

        /**
         * Properties of an UpdateRemarkResp.
         * @memberof protocol
         * @interface IUpdateRemarkResp
         * @property {number|null} [code] UpdateRemarkResp code
         * @property {string|null} [msg] UpdateRemarkResp msg
         */

        /**
         * Constructs a new UpdateRemarkResp.
         * @memberof protocol
         * @classdesc Represents an UpdateRemarkResp.
         * @implements IUpdateRemarkResp
         * @constructor
         * @param {protocol.IUpdateRemarkResp=} [properties] Properties to set
         */
        function UpdateRemarkResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRemarkResp code.
         * @member {number} code
         * @memberof protocol.UpdateRemarkResp
         * @instance
         */
        UpdateRemarkResp.prototype.code = 0;

        /**
         * UpdateRemarkResp msg.
         * @member {string} msg
         * @memberof protocol.UpdateRemarkResp
         * @instance
         */
        UpdateRemarkResp.prototype.msg = "";

        /**
         * Creates a new UpdateRemarkResp instance using the specified properties.
         * @function create
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {protocol.IUpdateRemarkResp=} [properties] Properties to set
         * @returns {protocol.UpdateRemarkResp} UpdateRemarkResp instance
         */
        UpdateRemarkResp.create = function create(properties) {
            return new UpdateRemarkResp(properties);
        };

        /**
         * Encodes the specified UpdateRemarkResp message. Does not implicitly {@link protocol.UpdateRemarkResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {protocol.IUpdateRemarkResp} message UpdateRemarkResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRemarkResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified UpdateRemarkResp message, length delimited. Does not implicitly {@link protocol.UpdateRemarkResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {protocol.IUpdateRemarkResp} message UpdateRemarkResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRemarkResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRemarkResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpdateRemarkResp} UpdateRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRemarkResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpdateRemarkResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateRemarkResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpdateRemarkResp} UpdateRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRemarkResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRemarkResp message.
         * @function verify
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRemarkResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an UpdateRemarkResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpdateRemarkResp} UpdateRemarkResp
         */
        UpdateRemarkResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpdateRemarkResp)
                return object;
            var message = new $root.protocol.UpdateRemarkResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateRemarkResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {protocol.UpdateRemarkResp} message UpdateRemarkResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRemarkResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this UpdateRemarkResp to JSON.
         * @function toJSON
         * @memberof protocol.UpdateRemarkResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRemarkResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateRemarkResp
         * @function getTypeUrl
         * @memberof protocol.UpdateRemarkResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateRemarkResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpdateRemarkResp";
        };

        return UpdateRemarkResp;
    })();

    protocol.FriendInfoReq = (function() {

        /**
         * Properties of a FriendInfoReq.
         * @memberof protocol
         * @interface IFriendInfoReq
         * @property {string|null} [uid] FriendInfoReq uid
         * @property {string|null} [friendUid] FriendInfoReq friendUid
         * @property {string|null} [token] FriendInfoReq token
         */

        /**
         * Constructs a new FriendInfoReq.
         * @memberof protocol
         * @classdesc Represents a FriendInfoReq.
         * @implements IFriendInfoReq
         * @constructor
         * @param {protocol.IFriendInfoReq=} [properties] Properties to set
         */
        function FriendInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendInfoReq uid.
         * @member {string} uid
         * @memberof protocol.FriendInfoReq
         * @instance
         */
        FriendInfoReq.prototype.uid = "";

        /**
         * FriendInfoReq friendUid.
         * @member {string} friendUid
         * @memberof protocol.FriendInfoReq
         * @instance
         */
        FriendInfoReq.prototype.friendUid = "";

        /**
         * FriendInfoReq token.
         * @member {string} token
         * @memberof protocol.FriendInfoReq
         * @instance
         */
        FriendInfoReq.prototype.token = "";

        /**
         * Creates a new FriendInfoReq instance using the specified properties.
         * @function create
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {protocol.IFriendInfoReq=} [properties] Properties to set
         * @returns {protocol.FriendInfoReq} FriendInfoReq instance
         */
        FriendInfoReq.create = function create(properties) {
            return new FriendInfoReq(properties);
        };

        /**
         * Encodes the specified FriendInfoReq message. Does not implicitly {@link protocol.FriendInfoReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {protocol.IFriendInfoReq} message FriendInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.friendUid != null && Object.hasOwnProperty.call(message, "friendUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendUid);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified FriendInfoReq message, length delimited. Does not implicitly {@link protocol.FriendInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {protocol.IFriendInfoReq} message FriendInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendInfoReq} FriendInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.friendUid = reader.string();
                        break;
                    }
                case 3: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendInfoReq} FriendInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendInfoReq message.
         * @function verify
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.friendUid != null && message.hasOwnProperty("friendUid"))
                if (!$util.isString(message.friendUid))
                    return "friendUid: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a FriendInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendInfoReq} FriendInfoReq
         */
        FriendInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendInfoReq)
                return object;
            var message = new $root.protocol.FriendInfoReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.friendUid != null)
                message.friendUid = String(object.friendUid);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a FriendInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {protocol.FriendInfoReq} message FriendInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.friendUid = "";
                object.token = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.friendUid != null && message.hasOwnProperty("friendUid"))
                object.friendUid = message.friendUid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this FriendInfoReq to JSON.
         * @function toJSON
         * @memberof protocol.FriendInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FriendInfoReq
         * @function getTypeUrl
         * @memberof protocol.FriendInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FriendInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.FriendInfoReq";
        };

        return FriendInfoReq;
    })();

    protocol.FriendInfoResp = (function() {

        /**
         * Properties of a FriendInfoResp.
         * @memberof protocol
         * @interface IFriendInfoResp
         * @property {string|null} [uid] FriendInfoResp uid
         * @property {string|null} [username] FriendInfoResp username
         * @property {string|null} [email] FriendInfoResp email
         * @property {string|null} [remark] FriendInfoResp remark
         * @property {boolean|null} [dnd] FriendInfoResp dnd
         * @property {number|null} [code] FriendInfoResp code
         * @property {string|null} [msg] FriendInfoResp msg
         */

        /**
         * Constructs a new FriendInfoResp.
         * @memberof protocol
         * @classdesc Represents a FriendInfoResp.
         * @implements IFriendInfoResp
         * @constructor
         * @param {protocol.IFriendInfoResp=} [properties] Properties to set
         */
        function FriendInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendInfoResp uid.
         * @member {string} uid
         * @memberof protocol.FriendInfoResp
         * @instance
         */
        FriendInfoResp.prototype.uid = "";

        /**
         * FriendInfoResp username.
         * @member {string} username
         * @memberof protocol.FriendInfoResp
         * @instance
         */
        FriendInfoResp.prototype.username = "";

        /**
         * FriendInfoResp email.
         * @member {string} email
         * @memberof protocol.FriendInfoResp
         * @instance
         */
        FriendInfoResp.prototype.email = "";

        /**
         * FriendInfoResp remark.
         * @member {string} remark
         * @memberof protocol.FriendInfoResp
         * @instance
         */
        FriendInfoResp.prototype.remark = "";

        /**
         * FriendInfoResp dnd.
         * @member {boolean} dnd
         * @memberof protocol.FriendInfoResp
         * @instance
         */
        FriendInfoResp.prototype.dnd = false;

        /**
         * FriendInfoResp code.
         * @member {number} code
         * @memberof protocol.FriendInfoResp
         * @instance
         */
        FriendInfoResp.prototype.code = 0;

        /**
         * FriendInfoResp msg.
         * @member {string} msg
         * @memberof protocol.FriendInfoResp
         * @instance
         */
        FriendInfoResp.prototype.msg = "";

        /**
         * Creates a new FriendInfoResp instance using the specified properties.
         * @function create
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {protocol.IFriendInfoResp=} [properties] Properties to set
         * @returns {protocol.FriendInfoResp} FriendInfoResp instance
         */
        FriendInfoResp.create = function create(properties) {
            return new FriendInfoResp(properties);
        };

        /**
         * Encodes the specified FriendInfoResp message. Does not implicitly {@link protocol.FriendInfoResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {protocol.IFriendInfoResp} message FriendInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.remark);
            if (message.dnd != null && Object.hasOwnProperty.call(message, "dnd"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.dnd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified FriendInfoResp message, length delimited. Does not implicitly {@link protocol.FriendInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {protocol.IFriendInfoResp} message FriendInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendInfoResp} FriendInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.username = reader.string();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        message.remark = reader.string();
                        break;
                    }
                case 5: {
                        message.dnd = reader.bool();
                        break;
                    }
                case 6: {
                        message.code = reader.int32();
                        break;
                    }
                case 7: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendInfoResp} FriendInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendInfoResp message.
         * @function verify
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.dnd != null && message.hasOwnProperty("dnd"))
                if (typeof message.dnd !== "boolean")
                    return "dnd: boolean expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a FriendInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendInfoResp} FriendInfoResp
         */
        FriendInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendInfoResp)
                return object;
            var message = new $root.protocol.FriendInfoResp();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.username != null)
                message.username = String(object.username);
            if (object.email != null)
                message.email = String(object.email);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.dnd != null)
                message.dnd = Boolean(object.dnd);
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a FriendInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {protocol.FriendInfoResp} message FriendInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.username = "";
                object.email = "";
                object.remark = "";
                object.dnd = false;
                object.code = 0;
                object.msg = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.dnd != null && message.hasOwnProperty("dnd"))
                object.dnd = message.dnd;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this FriendInfoResp to JSON.
         * @function toJSON
         * @memberof protocol.FriendInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FriendInfoResp
         * @function getTypeUrl
         * @memberof protocol.FriendInfoResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FriendInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.FriendInfoResp";
        };

        return FriendInfoResp;
    })();

    protocol.SetDNDReq = (function() {

        /**
         * Properties of a SetDNDReq.
         * @memberof protocol
         * @interface ISetDNDReq
         * @property {string|null} [uid] SetDNDReq uid
         * @property {string|null} [friendUid] SetDNDReq friendUid
         * @property {boolean|null} [dnd] SetDNDReq dnd
         * @property {string|null} [token] SetDNDReq token
         */

        /**
         * Constructs a new SetDNDReq.
         * @memberof protocol
         * @classdesc Represents a SetDNDReq.
         * @implements ISetDNDReq
         * @constructor
         * @param {protocol.ISetDNDReq=} [properties] Properties to set
         */
        function SetDNDReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetDNDReq uid.
         * @member {string} uid
         * @memberof protocol.SetDNDReq
         * @instance
         */
        SetDNDReq.prototype.uid = "";

        /**
         * SetDNDReq friendUid.
         * @member {string} friendUid
         * @memberof protocol.SetDNDReq
         * @instance
         */
        SetDNDReq.prototype.friendUid = "";

        /**
         * SetDNDReq dnd.
         * @member {boolean} dnd
         * @memberof protocol.SetDNDReq
         * @instance
         */
        SetDNDReq.prototype.dnd = false;

        /**
         * SetDNDReq token.
         * @member {string} token
         * @memberof protocol.SetDNDReq
         * @instance
         */
        SetDNDReq.prototype.token = "";

        /**
         * Creates a new SetDNDReq instance using the specified properties.
         * @function create
         * @memberof protocol.SetDNDReq
         * @static
         * @param {protocol.ISetDNDReq=} [properties] Properties to set
         * @returns {protocol.SetDNDReq} SetDNDReq instance
         */
        SetDNDReq.create = function create(properties) {
            return new SetDNDReq(properties);
        };

        /**
         * Encodes the specified SetDNDReq message. Does not implicitly {@link protocol.SetDNDReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetDNDReq
         * @static
         * @param {protocol.ISetDNDReq} message SetDNDReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDNDReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.friendUid != null && Object.hasOwnProperty.call(message, "friendUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendUid);
            if (message.dnd != null && Object.hasOwnProperty.call(message, "dnd"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.dnd);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified SetDNDReq message, length delimited. Does not implicitly {@link protocol.SetDNDReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetDNDReq
         * @static
         * @param {protocol.ISetDNDReq} message SetDNDReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDNDReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetDNDReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetDNDReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetDNDReq} SetDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDNDReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetDNDReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.friendUid = reader.string();
                        break;
                    }
                case 3: {
                        message.dnd = reader.bool();
                        break;
                    }
                case 4: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetDNDReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SetDNDReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetDNDReq} SetDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDNDReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetDNDReq message.
         * @function verify
         * @memberof protocol.SetDNDReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetDNDReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.friendUid != null && message.hasOwnProperty("friendUid"))
                if (!$util.isString(message.friendUid))
                    return "friendUid: string expected";
            if (message.dnd != null && message.hasOwnProperty("dnd"))
                if (typeof message.dnd !== "boolean")
                    return "dnd: boolean expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a SetDNDReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SetDNDReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetDNDReq} SetDNDReq
         */
        SetDNDReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetDNDReq)
                return object;
            var message = new $root.protocol.SetDNDReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.friendUid != null)
                message.friendUid = String(object.friendUid);
            if (object.dnd != null)
                message.dnd = Boolean(object.dnd);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a SetDNDReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetDNDReq
         * @static
         * @param {protocol.SetDNDReq} message SetDNDReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetDNDReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.friendUid = "";
                object.dnd = false;
                object.token = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.friendUid != null && message.hasOwnProperty("friendUid"))
                object.friendUid = message.friendUid;
            if (message.dnd != null && message.hasOwnProperty("dnd"))
                object.dnd = message.dnd;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this SetDNDReq to JSON.
         * @function toJSON
         * @memberof protocol.SetDNDReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetDNDReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetDNDReq
         * @function getTypeUrl
         * @memberof protocol.SetDNDReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetDNDReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetDNDReq";
        };

        return SetDNDReq;
    })();

    protocol.SetDNDResp = (function() {

        /**
         * Properties of a SetDNDResp.
         * @memberof protocol
         * @interface ISetDNDResp
         * @property {number|null} [code] SetDNDResp code
         * @property {string|null} [msg] SetDNDResp msg
         */

        /**
         * Constructs a new SetDNDResp.
         * @memberof protocol
         * @classdesc Represents a SetDNDResp.
         * @implements ISetDNDResp
         * @constructor
         * @param {protocol.ISetDNDResp=} [properties] Properties to set
         */
        function SetDNDResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetDNDResp code.
         * @member {number} code
         * @memberof protocol.SetDNDResp
         * @instance
         */
        SetDNDResp.prototype.code = 0;

        /**
         * SetDNDResp msg.
         * @member {string} msg
         * @memberof protocol.SetDNDResp
         * @instance
         */
        SetDNDResp.prototype.msg = "";

        /**
         * Creates a new SetDNDResp instance using the specified properties.
         * @function create
         * @memberof protocol.SetDNDResp
         * @static
         * @param {protocol.ISetDNDResp=} [properties] Properties to set
         * @returns {protocol.SetDNDResp} SetDNDResp instance
         */
        SetDNDResp.create = function create(properties) {
            return new SetDNDResp(properties);
        };

        /**
         * Encodes the specified SetDNDResp message. Does not implicitly {@link protocol.SetDNDResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetDNDResp
         * @static
         * @param {protocol.ISetDNDResp} message SetDNDResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDNDResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SetDNDResp message, length delimited. Does not implicitly {@link protocol.SetDNDResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetDNDResp
         * @static
         * @param {protocol.ISetDNDResp} message SetDNDResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDNDResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetDNDResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetDNDResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetDNDResp} SetDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDNDResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetDNDResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetDNDResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SetDNDResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetDNDResp} SetDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDNDResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetDNDResp message.
         * @function verify
         * @memberof protocol.SetDNDResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetDNDResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SetDNDResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SetDNDResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetDNDResp} SetDNDResp
         */
        SetDNDResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetDNDResp)
                return object;
            var message = new $root.protocol.SetDNDResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetDNDResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetDNDResp
         * @static
         * @param {protocol.SetDNDResp} message SetDNDResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetDNDResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SetDNDResp to JSON.
         * @function toJSON
         * @memberof protocol.SetDNDResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetDNDResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetDNDResp
         * @function getTypeUrl
         * @memberof protocol.SetDNDResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetDNDResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetDNDResp";
        };

        return SetDNDResp;
    })();

    return protocol;
})();

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.Group = (function() {

        /**
         * Properties of a Group.
         * @memberof pb
         * @interface IGroup
         * @property {string|null} [groupId] Group groupId
         * @property {string|null} [name] Group name
         * @property {string|null} [description] Group description
         * @property {string|null} [ownerUid] Group ownerUid
         * @property {Array.<string>|null} [memberUids] Group memberUids
         * @property {number|Long|null} [createdAt] Group createdAt
         * @property {number|Long|null} [updatedAt] Group updatedAt
         * @property {string|null} [remark] Group remark
         */

        /**
         * Constructs a new Group.
         * @memberof pb
         * @classdesc Represents a Group.
         * @implements IGroup
         * @constructor
         * @param {pb.IGroup=} [properties] Properties to set
         */
        function Group(properties) {
            this.memberUids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Group groupId.
         * @member {string} groupId
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.groupId = "";

        /**
         * Group name.
         * @member {string} name
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.name = "";

        /**
         * Group description.
         * @member {string} description
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.description = "";

        /**
         * Group ownerUid.
         * @member {string} ownerUid
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.ownerUid = "";

        /**
         * Group memberUids.
         * @member {Array.<string>} memberUids
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.memberUids = $util.emptyArray;

        /**
         * Group createdAt.
         * @member {number|Long} createdAt
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Group updatedAt.
         * @member {number|Long} updatedAt
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.updatedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Group remark.
         * @member {string} remark
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.remark = "";

        /**
         * Creates a new Group instance using the specified properties.
         * @function create
         * @memberof pb.Group
         * @static
         * @param {pb.IGroup=} [properties] Properties to set
         * @returns {pb.Group} Group instance
         */
        Group.create = function create(properties) {
            return new Group(properties);
        };

        /**
         * Encodes the specified Group message. Does not implicitly {@link pb.Group.verify|verify} messages.
         * @function encode
         * @memberof pb.Group
         * @static
         * @param {pb.IGroup} message Group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.ownerUid != null && Object.hasOwnProperty.call(message, "ownerUid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ownerUid);
            if (message.memberUids != null && message.memberUids.length)
                for (var i = 0; i < message.memberUids.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.memberUids[i]);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.updatedAt);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified Group message, length delimited. Does not implicitly {@link pb.Group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Group
         * @static
         * @param {pb.IGroup} message Group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Group} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.ownerUid = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.memberUids && message.memberUids.length))
                            message.memberUids = [];
                        message.memberUids.push(reader.string());
                        break;
                    }
                case 6: {
                        message.createdAt = reader.int64();
                        break;
                    }
                case 7: {
                        message.updatedAt = reader.int64();
                        break;
                    }
                case 8: {
                        message.remark = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Group} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Group message.
         * @function verify
         * @memberof pb.Group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.ownerUid != null && message.hasOwnProperty("ownerUid"))
                if (!$util.isString(message.ownerUid))
                    return "ownerUid: string expected";
            if (message.memberUids != null && message.hasOwnProperty("memberUids")) {
                if (!Array.isArray(message.memberUids))
                    return "memberUids: array expected";
                for (var i = 0; i < message.memberUids.length; ++i)
                    if (!$util.isString(message.memberUids[i]))
                        return "memberUids: string[] expected";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isInteger(message.updatedAt) && !(message.updatedAt && $util.isInteger(message.updatedAt.low) && $util.isInteger(message.updatedAt.high)))
                    return "updatedAt: integer|Long expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a Group message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Group
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Group} Group
         */
        Group.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Group)
                return object;
            var message = new $root.pb.Group();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.ownerUid != null)
                message.ownerUid = String(object.ownerUid);
            if (object.memberUids) {
                if (!Array.isArray(object.memberUids))
                    throw TypeError(".pb.Group.memberUids: array expected");
                message.memberUids = [];
                for (var i = 0; i < object.memberUids.length; ++i)
                    message.memberUids[i] = String(object.memberUids[i]);
            }
            if (object.createdAt != null)
                if ($util.Long)
                    (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
            if (object.updatedAt != null)
                if ($util.Long)
                    (message.updatedAt = $util.Long.fromValue(object.updatedAt)).unsigned = false;
                else if (typeof object.updatedAt === "string")
                    message.updatedAt = parseInt(object.updatedAt, 10);
                else if (typeof object.updatedAt === "number")
                    message.updatedAt = object.updatedAt;
                else if (typeof object.updatedAt === "object")
                    message.updatedAt = new $util.LongBits(object.updatedAt.low >>> 0, object.updatedAt.high >>> 0).toNumber();
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a Group message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Group
         * @static
         * @param {pb.Group} message Group
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Group.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.memberUids = [];
            if (options.defaults) {
                object.groupId = "";
                object.name = "";
                object.description = "";
                object.ownerUid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updatedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updatedAt = options.longs === String ? "0" : 0;
                object.remark = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.ownerUid != null && message.hasOwnProperty("ownerUid"))
                object.ownerUid = message.ownerUid;
            if (message.memberUids && message.memberUids.length) {
                object.memberUids = [];
                for (var j = 0; j < message.memberUids.length; ++j)
                    object.memberUids[j] = message.memberUids[j];
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (typeof message.updatedAt === "number")
                    object.updatedAt = options.longs === String ? String(message.updatedAt) : message.updatedAt;
                else
                    object.updatedAt = options.longs === String ? $util.Long.prototype.toString.call(message.updatedAt) : options.longs === Number ? new $util.LongBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0).toNumber() : message.updatedAt;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this Group to JSON.
         * @function toJSON
         * @memberof pb.Group
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Group.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Group
         * @function getTypeUrl
         * @memberof pb.Group
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Group.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Group";
        };

        return Group;
    })();

    pb.GroupMember = (function() {

        /**
         * Properties of a GroupMember.
         * @memberof pb
         * @interface IGroupMember
         * @property {string|null} [uid] GroupMember uid
         * @property {string|null} [username] GroupMember username
         * @property {string|null} [nickname] GroupMember nickname
         * @property {string|null} [role] GroupMember role
         * @property {number|Long|null} [joinTime] GroupMember joinTime
         */

        /**
         * Constructs a new GroupMember.
         * @memberof pb
         * @classdesc Represents a GroupMember.
         * @implements IGroupMember
         * @constructor
         * @param {pb.IGroupMember=} [properties] Properties to set
         */
        function GroupMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMember uid.
         * @member {string} uid
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.uid = "";

        /**
         * GroupMember username.
         * @member {string} username
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.username = "";

        /**
         * GroupMember nickname.
         * @member {string} nickname
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.nickname = "";

        /**
         * GroupMember role.
         * @member {string} role
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.role = "";

        /**
         * GroupMember joinTime.
         * @member {number|Long} joinTime
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.joinTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GroupMember instance using the specified properties.
         * @function create
         * @memberof pb.GroupMember
         * @static
         * @param {pb.IGroupMember=} [properties] Properties to set
         * @returns {pb.GroupMember} GroupMember instance
         */
        GroupMember.create = function create(properties) {
            return new GroupMember(properties);
        };

        /**
         * Encodes the specified GroupMember message. Does not implicitly {@link pb.GroupMember.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMember
         * @static
         * @param {pb.IGroupMember} message GroupMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.role);
            if (message.joinTime != null && Object.hasOwnProperty.call(message, "joinTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.joinTime);
            return writer;
        };

        /**
         * Encodes the specified GroupMember message, length delimited. Does not implicitly {@link pb.GroupMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMember
         * @static
         * @param {pb.IGroupMember} message GroupMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMember message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMember} GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMember.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.username = reader.string();
                        break;
                    }
                case 3: {
                        message.nickname = reader.string();
                        break;
                    }
                case 4: {
                        message.role = reader.string();
                        break;
                    }
                case 5: {
                        message.joinTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMember} GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMember message.
         * @function verify
         * @memberof pb.GroupMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isString(message.role))
                    return "role: string expected";
            if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                if (!$util.isInteger(message.joinTime) && !(message.joinTime && $util.isInteger(message.joinTime.low) && $util.isInteger(message.joinTime.high)))
                    return "joinTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a GroupMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMember} GroupMember
         */
        GroupMember.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMember)
                return object;
            var message = new $root.pb.GroupMember();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.username != null)
                message.username = String(object.username);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.role != null)
                message.role = String(object.role);
            if (object.joinTime != null)
                if ($util.Long)
                    (message.joinTime = $util.Long.fromValue(object.joinTime)).unsigned = false;
                else if (typeof object.joinTime === "string")
                    message.joinTime = parseInt(object.joinTime, 10);
                else if (typeof object.joinTime === "number")
                    message.joinTime = object.joinTime;
                else if (typeof object.joinTime === "object")
                    message.joinTime = new $util.LongBits(object.joinTime.low >>> 0, object.joinTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GroupMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMember
         * @static
         * @param {pb.GroupMember} message GroupMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.username = "";
                object.nickname = "";
                object.role = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.joinTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.joinTime = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                if (typeof message.joinTime === "number")
                    object.joinTime = options.longs === String ? String(message.joinTime) : message.joinTime;
                else
                    object.joinTime = options.longs === String ? $util.Long.prototype.toString.call(message.joinTime) : options.longs === Number ? new $util.LongBits(message.joinTime.low >>> 0, message.joinTime.high >>> 0).toNumber() : message.joinTime;
            return object;
        };

        /**
         * Converts this GroupMember to JSON.
         * @function toJSON
         * @memberof pb.GroupMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMember
         * @function getTypeUrl
         * @memberof pb.GroupMember
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMember.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMember";
        };

        return GroupMember;
    })();

    pb.GroupMessage = (function() {

        /**
         * Properties of a GroupMessage.
         * @memberof pb
         * @interface IGroupMessage
         * @property {string|null} [messageId] GroupMessage messageId
         * @property {string|null} [groupId] GroupMessage groupId
         * @property {string|null} [fromUid] GroupMessage fromUid
         * @property {string|null} [fromUsername] GroupMessage fromUsername
         * @property {string|null} [content] GroupMessage content
         * @property {string|null} [messageType] GroupMessage messageType
         * @property {number|Long|null} [timestamp] GroupMessage timestamp
         */

        /**
         * Constructs a new GroupMessage.
         * @memberof pb
         * @classdesc Represents a GroupMessage.
         * @implements IGroupMessage
         * @constructor
         * @param {pb.IGroupMessage=} [properties] Properties to set
         */
        function GroupMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMessage messageId.
         * @member {string} messageId
         * @memberof pb.GroupMessage
         * @instance
         */
        GroupMessage.prototype.messageId = "";

        /**
         * GroupMessage groupId.
         * @member {string} groupId
         * @memberof pb.GroupMessage
         * @instance
         */
        GroupMessage.prototype.groupId = "";

        /**
         * GroupMessage fromUid.
         * @member {string} fromUid
         * @memberof pb.GroupMessage
         * @instance
         */
        GroupMessage.prototype.fromUid = "";

        /**
         * GroupMessage fromUsername.
         * @member {string} fromUsername
         * @memberof pb.GroupMessage
         * @instance
         */
        GroupMessage.prototype.fromUsername = "";

        /**
         * GroupMessage content.
         * @member {string} content
         * @memberof pb.GroupMessage
         * @instance
         */
        GroupMessage.prototype.content = "";

        /**
         * GroupMessage messageType.
         * @member {string} messageType
         * @memberof pb.GroupMessage
         * @instance
         */
        GroupMessage.prototype.messageType = "";

        /**
         * GroupMessage timestamp.
         * @member {number|Long} timestamp
         * @memberof pb.GroupMessage
         * @instance
         */
        GroupMessage.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GroupMessage instance using the specified properties.
         * @function create
         * @memberof pb.GroupMessage
         * @static
         * @param {pb.IGroupMessage=} [properties] Properties to set
         * @returns {pb.GroupMessage} GroupMessage instance
         */
        GroupMessage.create = function create(properties) {
            return new GroupMessage(properties);
        };

        /**
         * Encodes the specified GroupMessage message. Does not implicitly {@link pb.GroupMessage.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMessage
         * @static
         * @param {pb.IGroupMessage} message GroupMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.groupId);
            if (message.fromUid != null && Object.hasOwnProperty.call(message, "fromUid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fromUid);
            if (message.fromUsername != null && Object.hasOwnProperty.call(message, "fromUsername"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fromUsername);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.messageType);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified GroupMessage message, length delimited. Does not implicitly {@link pb.GroupMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMessage
         * @static
         * @param {pb.IGroupMessage} message GroupMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMessage message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMessage} GroupMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.messageId = reader.string();
                        break;
                    }
                case 2: {
                        message.groupId = reader.string();
                        break;
                    }
                case 3: {
                        message.fromUid = reader.string();
                        break;
                    }
                case 4: {
                        message.fromUsername = reader.string();
                        break;
                    }
                case 5: {
                        message.content = reader.string();
                        break;
                    }
                case 6: {
                        message.messageType = reader.string();
                        break;
                    }
                case 7: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMessage} GroupMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMessage message.
         * @function verify
         * @memberof pb.GroupMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                if (!$util.isString(message.fromUid))
                    return "fromUid: string expected";
            if (message.fromUsername != null && message.hasOwnProperty("fromUsername"))
                if (!$util.isString(message.fromUsername))
                    return "fromUsername: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isString(message.messageType))
                    return "messageType: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a GroupMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMessage} GroupMessage
         */
        GroupMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMessage)
                return object;
            var message = new $root.pb.GroupMessage();
            if (object.messageId != null)
                message.messageId = String(object.messageId);
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.fromUid != null)
                message.fromUid = String(object.fromUid);
            if (object.fromUsername != null)
                message.fromUsername = String(object.fromUsername);
            if (object.content != null)
                message.content = String(object.content);
            if (object.messageType != null)
                message.messageType = String(object.messageType);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GroupMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMessage
         * @static
         * @param {pb.GroupMessage} message GroupMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageId = "";
                object.groupId = "";
                object.fromUid = "";
                object.fromUsername = "";
                object.content = "";
                object.messageType = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                object.fromUid = message.fromUid;
            if (message.fromUsername != null && message.hasOwnProperty("fromUsername"))
                object.fromUsername = message.fromUsername;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this GroupMessage to JSON.
         * @function toJSON
         * @memberof pb.GroupMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMessage
         * @function getTypeUrl
         * @memberof pb.GroupMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMessage";
        };

        return GroupMessage;
    })();

    pb.CreateGroupReq = (function() {

        /**
         * Properties of a CreateGroupReq.
         * @memberof pb
         * @interface ICreateGroupReq
         * @property {string|null} [name] CreateGroupReq name
         * @property {string|null} [description] CreateGroupReq description
         * @property {string|null} [ownerUid] CreateGroupReq ownerUid
         * @property {Array.<string>|null} [memberUids] CreateGroupReq memberUids
         */

        /**
         * Constructs a new CreateGroupReq.
         * @memberof pb
         * @classdesc Represents a CreateGroupReq.
         * @implements ICreateGroupReq
         * @constructor
         * @param {pb.ICreateGroupReq=} [properties] Properties to set
         */
        function CreateGroupReq(properties) {
            this.memberUids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGroupReq name.
         * @member {string} name
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.name = "";

        /**
         * CreateGroupReq description.
         * @member {string} description
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.description = "";

        /**
         * CreateGroupReq ownerUid.
         * @member {string} ownerUid
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.ownerUid = "";

        /**
         * CreateGroupReq memberUids.
         * @member {Array.<string>} memberUids
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.memberUids = $util.emptyArray;

        /**
         * Creates a new CreateGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.CreateGroupReq
         * @static
         * @param {pb.ICreateGroupReq=} [properties] Properties to set
         * @returns {pb.CreateGroupReq} CreateGroupReq instance
         */
        CreateGroupReq.create = function create(properties) {
            return new CreateGroupReq(properties);
        };

        /**
         * Encodes the specified CreateGroupReq message. Does not implicitly {@link pb.CreateGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.CreateGroupReq
         * @static
         * @param {pb.ICreateGroupReq} message CreateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            if (message.ownerUid != null && Object.hasOwnProperty.call(message, "ownerUid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ownerUid);
            if (message.memberUids != null && message.memberUids.length)
                for (var i = 0; i < message.memberUids.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.memberUids[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateGroupReq message, length delimited. Does not implicitly {@link pb.CreateGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CreateGroupReq
         * @static
         * @param {pb.ICreateGroupReq} message CreateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CreateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CreateGroupReq} CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CreateGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.description = reader.string();
                        break;
                    }
                case 3: {
                        message.ownerUid = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.memberUids && message.memberUids.length))
                            message.memberUids = [];
                        message.memberUids.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CreateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CreateGroupReq} CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGroupReq message.
         * @function verify
         * @memberof pb.CreateGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.ownerUid != null && message.hasOwnProperty("ownerUid"))
                if (!$util.isString(message.ownerUid))
                    return "ownerUid: string expected";
            if (message.memberUids != null && message.hasOwnProperty("memberUids")) {
                if (!Array.isArray(message.memberUids))
                    return "memberUids: array expected";
                for (var i = 0; i < message.memberUids.length; ++i)
                    if (!$util.isString(message.memberUids[i]))
                        return "memberUids: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CreateGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CreateGroupReq} CreateGroupReq
         */
        CreateGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CreateGroupReq)
                return object;
            var message = new $root.pb.CreateGroupReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.ownerUid != null)
                message.ownerUid = String(object.ownerUid);
            if (object.memberUids) {
                if (!Array.isArray(object.memberUids))
                    throw TypeError(".pb.CreateGroupReq.memberUids: array expected");
                message.memberUids = [];
                for (var i = 0; i < object.memberUids.length; ++i)
                    message.memberUids[i] = String(object.memberUids[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CreateGroupReq
         * @static
         * @param {pb.CreateGroupReq} message CreateGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.memberUids = [];
            if (options.defaults) {
                object.name = "";
                object.description = "";
                object.ownerUid = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.ownerUid != null && message.hasOwnProperty("ownerUid"))
                object.ownerUid = message.ownerUid;
            if (message.memberUids && message.memberUids.length) {
                object.memberUids = [];
                for (var j = 0; j < message.memberUids.length; ++j)
                    object.memberUids[j] = message.memberUids[j];
            }
            return object;
        };

        /**
         * Converts this CreateGroupReq to JSON.
         * @function toJSON
         * @memberof pb.CreateGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateGroupReq
         * @function getTypeUrl
         * @memberof pb.CreateGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.CreateGroupReq";
        };

        return CreateGroupReq;
    })();

    pb.CreateGroupResp = (function() {

        /**
         * Properties of a CreateGroupResp.
         * @memberof pb
         * @interface ICreateGroupResp
         * @property {number|null} [code] CreateGroupResp code
         * @property {string|null} [msg] CreateGroupResp msg
         * @property {string|null} [groupId] CreateGroupResp groupId
         */

        /**
         * Constructs a new CreateGroupResp.
         * @memberof pb
         * @classdesc Represents a CreateGroupResp.
         * @implements ICreateGroupResp
         * @constructor
         * @param {pb.ICreateGroupResp=} [properties] Properties to set
         */
        function CreateGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGroupResp code.
         * @member {number} code
         * @memberof pb.CreateGroupResp
         * @instance
         */
        CreateGroupResp.prototype.code = 0;

        /**
         * CreateGroupResp msg.
         * @member {string} msg
         * @memberof pb.CreateGroupResp
         * @instance
         */
        CreateGroupResp.prototype.msg = "";

        /**
         * CreateGroupResp groupId.
         * @member {string} groupId
         * @memberof pb.CreateGroupResp
         * @instance
         */
        CreateGroupResp.prototype.groupId = "";

        /**
         * Creates a new CreateGroupResp instance using the specified properties.
         * @function create
         * @memberof pb.CreateGroupResp
         * @static
         * @param {pb.ICreateGroupResp=} [properties] Properties to set
         * @returns {pb.CreateGroupResp} CreateGroupResp instance
         */
        CreateGroupResp.create = function create(properties) {
            return new CreateGroupResp(properties);
        };

        /**
         * Encodes the specified CreateGroupResp message. Does not implicitly {@link pb.CreateGroupResp.verify|verify} messages.
         * @function encode
         * @memberof pb.CreateGroupResp
         * @static
         * @param {pb.ICreateGroupResp} message CreateGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.groupId);
            return writer;
        };

        /**
         * Encodes the specified CreateGroupResp message, length delimited. Does not implicitly {@link pb.CreateGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CreateGroupResp
         * @static
         * @param {pb.ICreateGroupResp} message CreateGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CreateGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CreateGroupResp} CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CreateGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.groupId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CreateGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CreateGroupResp} CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGroupResp message.
         * @function verify
         * @memberof pb.CreateGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            return null;
        };

        /**
         * Creates a CreateGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CreateGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CreateGroupResp} CreateGroupResp
         */
        CreateGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CreateGroupResp)
                return object;
            var message = new $root.pb.CreateGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            return message;
        };

        /**
         * Creates a plain object from a CreateGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CreateGroupResp
         * @static
         * @param {pb.CreateGroupResp} message CreateGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.groupId = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            return object;
        };

        /**
         * Converts this CreateGroupResp to JSON.
         * @function toJSON
         * @memberof pb.CreateGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateGroupResp
         * @function getTypeUrl
         * @memberof pb.CreateGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.CreateGroupResp";
        };

        return CreateGroupResp;
    })();

    pb.JoinGroupReq = (function() {

        /**
         * Properties of a JoinGroupReq.
         * @memberof pb
         * @interface IJoinGroupReq
         * @property {string|null} [groupId] JoinGroupReq groupId
         * @property {string|null} [uid] JoinGroupReq uid
         */

        /**
         * Constructs a new JoinGroupReq.
         * @memberof pb
         * @classdesc Represents a JoinGroupReq.
         * @implements IJoinGroupReq
         * @constructor
         * @param {pb.IJoinGroupReq=} [properties] Properties to set
         */
        function JoinGroupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinGroupReq groupId.
         * @member {string} groupId
         * @memberof pb.JoinGroupReq
         * @instance
         */
        JoinGroupReq.prototype.groupId = "";

        /**
         * JoinGroupReq uid.
         * @member {string} uid
         * @memberof pb.JoinGroupReq
         * @instance
         */
        JoinGroupReq.prototype.uid = "";

        /**
         * Creates a new JoinGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.JoinGroupReq
         * @static
         * @param {pb.IJoinGroupReq=} [properties] Properties to set
         * @returns {pb.JoinGroupReq} JoinGroupReq instance
         */
        JoinGroupReq.create = function create(properties) {
            return new JoinGroupReq(properties);
        };

        /**
         * Encodes the specified JoinGroupReq message. Does not implicitly {@link pb.JoinGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.JoinGroupReq
         * @static
         * @param {pb.IJoinGroupReq} message JoinGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified JoinGroupReq message, length delimited. Does not implicitly {@link pb.JoinGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.JoinGroupReq
         * @static
         * @param {pb.IJoinGroupReq} message JoinGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.JoinGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.JoinGroupReq} JoinGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.JoinGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.JoinGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.JoinGroupReq} JoinGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinGroupReq message.
         * @function verify
         * @memberof pb.JoinGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a JoinGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.JoinGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.JoinGroupReq} JoinGroupReq
         */
        JoinGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.JoinGroupReq)
                return object;
            var message = new $root.pb.JoinGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a JoinGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.JoinGroupReq
         * @static
         * @param {pb.JoinGroupReq} message JoinGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.uid = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this JoinGroupReq to JSON.
         * @function toJSON
         * @memberof pb.JoinGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinGroupReq
         * @function getTypeUrl
         * @memberof pb.JoinGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.JoinGroupReq";
        };

        return JoinGroupReq;
    })();

    pb.JoinGroupResp = (function() {

        /**
         * Properties of a JoinGroupResp.
         * @memberof pb
         * @interface IJoinGroupResp
         * @property {number|null} [code] JoinGroupResp code
         * @property {string|null} [msg] JoinGroupResp msg
         */

        /**
         * Constructs a new JoinGroupResp.
         * @memberof pb
         * @classdesc Represents a JoinGroupResp.
         * @implements IJoinGroupResp
         * @constructor
         * @param {pb.IJoinGroupResp=} [properties] Properties to set
         */
        function JoinGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinGroupResp code.
         * @member {number} code
         * @memberof pb.JoinGroupResp
         * @instance
         */
        JoinGroupResp.prototype.code = 0;

        /**
         * JoinGroupResp msg.
         * @member {string} msg
         * @memberof pb.JoinGroupResp
         * @instance
         */
        JoinGroupResp.prototype.msg = "";

        /**
         * Creates a new JoinGroupResp instance using the specified properties.
         * @function create
         * @memberof pb.JoinGroupResp
         * @static
         * @param {pb.IJoinGroupResp=} [properties] Properties to set
         * @returns {pb.JoinGroupResp} JoinGroupResp instance
         */
        JoinGroupResp.create = function create(properties) {
            return new JoinGroupResp(properties);
        };

        /**
         * Encodes the specified JoinGroupResp message. Does not implicitly {@link pb.JoinGroupResp.verify|verify} messages.
         * @function encode
         * @memberof pb.JoinGroupResp
         * @static
         * @param {pb.IJoinGroupResp} message JoinGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified JoinGroupResp message, length delimited. Does not implicitly {@link pb.JoinGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.JoinGroupResp
         * @static
         * @param {pb.IJoinGroupResp} message JoinGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.JoinGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.JoinGroupResp} JoinGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.JoinGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.JoinGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.JoinGroupResp} JoinGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinGroupResp message.
         * @function verify
         * @memberof pb.JoinGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a JoinGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.JoinGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.JoinGroupResp} JoinGroupResp
         */
        JoinGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.JoinGroupResp)
                return object;
            var message = new $root.pb.JoinGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a JoinGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.JoinGroupResp
         * @static
         * @param {pb.JoinGroupResp} message JoinGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this JoinGroupResp to JSON.
         * @function toJSON
         * @memberof pb.JoinGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinGroupResp
         * @function getTypeUrl
         * @memberof pb.JoinGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.JoinGroupResp";
        };

        return JoinGroupResp;
    })();

    pb.LeaveGroupReq = (function() {

        /**
         * Properties of a LeaveGroupReq.
         * @memberof pb
         * @interface ILeaveGroupReq
         * @property {string|null} [groupId] LeaveGroupReq groupId
         * @property {string|null} [uid] LeaveGroupReq uid
         */

        /**
         * Constructs a new LeaveGroupReq.
         * @memberof pb
         * @classdesc Represents a LeaveGroupReq.
         * @implements ILeaveGroupReq
         * @constructor
         * @param {pb.ILeaveGroupReq=} [properties] Properties to set
         */
        function LeaveGroupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveGroupReq groupId.
         * @member {string} groupId
         * @memberof pb.LeaveGroupReq
         * @instance
         */
        LeaveGroupReq.prototype.groupId = "";

        /**
         * LeaveGroupReq uid.
         * @member {string} uid
         * @memberof pb.LeaveGroupReq
         * @instance
         */
        LeaveGroupReq.prototype.uid = "";

        /**
         * Creates a new LeaveGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {pb.ILeaveGroupReq=} [properties] Properties to set
         * @returns {pb.LeaveGroupReq} LeaveGroupReq instance
         */
        LeaveGroupReq.create = function create(properties) {
            return new LeaveGroupReq(properties);
        };

        /**
         * Encodes the specified LeaveGroupReq message. Does not implicitly {@link pb.LeaveGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {pb.ILeaveGroupReq} message LeaveGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified LeaveGroupReq message, length delimited. Does not implicitly {@link pb.LeaveGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {pb.ILeaveGroupReq} message LeaveGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LeaveGroupReq} LeaveGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LeaveGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaveGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LeaveGroupReq} LeaveGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveGroupReq message.
         * @function verify
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a LeaveGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LeaveGroupReq} LeaveGroupReq
         */
        LeaveGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LeaveGroupReq)
                return object;
            var message = new $root.pb.LeaveGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a LeaveGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {pb.LeaveGroupReq} message LeaveGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.uid = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this LeaveGroupReq to JSON.
         * @function toJSON
         * @memberof pb.LeaveGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LeaveGroupReq
         * @function getTypeUrl
         * @memberof pb.LeaveGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LeaveGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.LeaveGroupReq";
        };

        return LeaveGroupReq;
    })();

    pb.LeaveGroupResp = (function() {

        /**
         * Properties of a LeaveGroupResp.
         * @memberof pb
         * @interface ILeaveGroupResp
         * @property {number|null} [code] LeaveGroupResp code
         * @property {string|null} [msg] LeaveGroupResp msg
         */

        /**
         * Constructs a new LeaveGroupResp.
         * @memberof pb
         * @classdesc Represents a LeaveGroupResp.
         * @implements ILeaveGroupResp
         * @constructor
         * @param {pb.ILeaveGroupResp=} [properties] Properties to set
         */
        function LeaveGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveGroupResp code.
         * @member {number} code
         * @memberof pb.LeaveGroupResp
         * @instance
         */
        LeaveGroupResp.prototype.code = 0;

        /**
         * LeaveGroupResp msg.
         * @member {string} msg
         * @memberof pb.LeaveGroupResp
         * @instance
         */
        LeaveGroupResp.prototype.msg = "";

        /**
         * Creates a new LeaveGroupResp instance using the specified properties.
         * @function create
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {pb.ILeaveGroupResp=} [properties] Properties to set
         * @returns {pb.LeaveGroupResp} LeaveGroupResp instance
         */
        LeaveGroupResp.create = function create(properties) {
            return new LeaveGroupResp(properties);
        };

        /**
         * Encodes the specified LeaveGroupResp message. Does not implicitly {@link pb.LeaveGroupResp.verify|verify} messages.
         * @function encode
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {pb.ILeaveGroupResp} message LeaveGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified LeaveGroupResp message, length delimited. Does not implicitly {@link pb.LeaveGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {pb.ILeaveGroupResp} message LeaveGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LeaveGroupResp} LeaveGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LeaveGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaveGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LeaveGroupResp} LeaveGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveGroupResp message.
         * @function verify
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a LeaveGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LeaveGroupResp} LeaveGroupResp
         */
        LeaveGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LeaveGroupResp)
                return object;
            var message = new $root.pb.LeaveGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a LeaveGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {pb.LeaveGroupResp} message LeaveGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this LeaveGroupResp to JSON.
         * @function toJSON
         * @memberof pb.LeaveGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LeaveGroupResp
         * @function getTypeUrl
         * @memberof pb.LeaveGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LeaveGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.LeaveGroupResp";
        };

        return LeaveGroupResp;
    })();

    pb.GroupListReq = (function() {

        /**
         * Properties of a GroupListReq.
         * @memberof pb
         * @interface IGroupListReq
         * @property {string|null} [uid] GroupListReq uid
         */

        /**
         * Constructs a new GroupListReq.
         * @memberof pb
         * @classdesc Represents a GroupListReq.
         * @implements IGroupListReq
         * @constructor
         * @param {pb.IGroupListReq=} [properties] Properties to set
         */
        function GroupListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupListReq uid.
         * @member {string} uid
         * @memberof pb.GroupListReq
         * @instance
         */
        GroupListReq.prototype.uid = "";

        /**
         * Creates a new GroupListReq instance using the specified properties.
         * @function create
         * @memberof pb.GroupListReq
         * @static
         * @param {pb.IGroupListReq=} [properties] Properties to set
         * @returns {pb.GroupListReq} GroupListReq instance
         */
        GroupListReq.create = function create(properties) {
            return new GroupListReq(properties);
        };

        /**
         * Encodes the specified GroupListReq message. Does not implicitly {@link pb.GroupListReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupListReq
         * @static
         * @param {pb.IGroupListReq} message GroupListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GroupListReq message, length delimited. Does not implicitly {@link pb.GroupListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupListReq
         * @static
         * @param {pb.IGroupListReq} message GroupListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupListReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupListReq} GroupListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupListReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupListReq} GroupListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupListReq message.
         * @function verify
         * @memberof pb.GroupListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a GroupListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupListReq} GroupListReq
         */
        GroupListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupListReq)
                return object;
            var message = new $root.pb.GroupListReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a GroupListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupListReq
         * @static
         * @param {pb.GroupListReq} message GroupListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uid = "";
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this GroupListReq to JSON.
         * @function toJSON
         * @memberof pb.GroupListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupListReq
         * @function getTypeUrl
         * @memberof pb.GroupListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupListReq";
        };

        return GroupListReq;
    })();

    pb.GroupListResp = (function() {

        /**
         * Properties of a GroupListResp.
         * @memberof pb
         * @interface IGroupListResp
         * @property {number|null} [code] GroupListResp code
         * @property {string|null} [msg] GroupListResp msg
         * @property {Array.<pb.IGroup>|null} [groups] GroupListResp groups
         */

        /**
         * Constructs a new GroupListResp.
         * @memberof pb
         * @classdesc Represents a GroupListResp.
         * @implements IGroupListResp
         * @constructor
         * @param {pb.IGroupListResp=} [properties] Properties to set
         */
        function GroupListResp(properties) {
            this.groups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupListResp code.
         * @member {number} code
         * @memberof pb.GroupListResp
         * @instance
         */
        GroupListResp.prototype.code = 0;

        /**
         * GroupListResp msg.
         * @member {string} msg
         * @memberof pb.GroupListResp
         * @instance
         */
        GroupListResp.prototype.msg = "";

        /**
         * GroupListResp groups.
         * @member {Array.<pb.IGroup>} groups
         * @memberof pb.GroupListResp
         * @instance
         */
        GroupListResp.prototype.groups = $util.emptyArray;

        /**
         * Creates a new GroupListResp instance using the specified properties.
         * @function create
         * @memberof pb.GroupListResp
         * @static
         * @param {pb.IGroupListResp=} [properties] Properties to set
         * @returns {pb.GroupListResp} GroupListResp instance
         */
        GroupListResp.create = function create(properties) {
            return new GroupListResp(properties);
        };

        /**
         * Encodes the specified GroupListResp message. Does not implicitly {@link pb.GroupListResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupListResp
         * @static
         * @param {pb.IGroupListResp} message GroupListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.groups != null && message.groups.length)
                for (var i = 0; i < message.groups.length; ++i)
                    $root.pb.Group.encode(message.groups[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupListResp message, length delimited. Does not implicitly {@link pb.GroupListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupListResp
         * @static
         * @param {pb.IGroupListResp} message GroupListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupListResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupListResp} GroupListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupListResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.groups && message.groups.length))
                            message.groups = [];
                        message.groups.push($root.pb.Group.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupListResp} GroupListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupListResp message.
         * @function verify
         * @memberof pb.GroupListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.groups != null && message.hasOwnProperty("groups")) {
                if (!Array.isArray(message.groups))
                    return "groups: array expected";
                for (var i = 0; i < message.groups.length; ++i) {
                    var error = $root.pb.Group.verify(message.groups[i]);
                    if (error)
                        return "groups." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GroupListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupListResp} GroupListResp
         */
        GroupListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupListResp)
                return object;
            var message = new $root.pb.GroupListResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.groups) {
                if (!Array.isArray(object.groups))
                    throw TypeError(".pb.GroupListResp.groups: array expected");
                message.groups = [];
                for (var i = 0; i < object.groups.length; ++i) {
                    if (typeof object.groups[i] !== "object")
                        throw TypeError(".pb.GroupListResp.groups: object expected");
                    message.groups[i] = $root.pb.Group.fromObject(object.groups[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupListResp
         * @static
         * @param {pb.GroupListResp} message GroupListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.groups = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.groups && message.groups.length) {
                object.groups = [];
                for (var j = 0; j < message.groups.length; ++j)
                    object.groups[j] = $root.pb.Group.toObject(message.groups[j], options);
            }
            return object;
        };

        /**
         * Converts this GroupListResp to JSON.
         * @function toJSON
         * @memberof pb.GroupListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupListResp
         * @function getTypeUrl
         * @memberof pb.GroupListResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupListResp";
        };

        return GroupListResp;
    })();

    pb.GroupMembersReq = (function() {

        /**
         * Properties of a GroupMembersReq.
         * @memberof pb
         * @interface IGroupMembersReq
         * @property {string|null} [groupId] GroupMembersReq groupId
         */

        /**
         * Constructs a new GroupMembersReq.
         * @memberof pb
         * @classdesc Represents a GroupMembersReq.
         * @implements IGroupMembersReq
         * @constructor
         * @param {pb.IGroupMembersReq=} [properties] Properties to set
         */
        function GroupMembersReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMembersReq groupId.
         * @member {string} groupId
         * @memberof pb.GroupMembersReq
         * @instance
         */
        GroupMembersReq.prototype.groupId = "";

        /**
         * Creates a new GroupMembersReq instance using the specified properties.
         * @function create
         * @memberof pb.GroupMembersReq
         * @static
         * @param {pb.IGroupMembersReq=} [properties] Properties to set
         * @returns {pb.GroupMembersReq} GroupMembersReq instance
         */
        GroupMembersReq.create = function create(properties) {
            return new GroupMembersReq(properties);
        };

        /**
         * Encodes the specified GroupMembersReq message. Does not implicitly {@link pb.GroupMembersReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMembersReq
         * @static
         * @param {pb.IGroupMembersReq} message GroupMembersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMembersReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            return writer;
        };

        /**
         * Encodes the specified GroupMembersReq message, length delimited. Does not implicitly {@link pb.GroupMembersReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMembersReq
         * @static
         * @param {pb.IGroupMembersReq} message GroupMembersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMembersReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMembersReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMembersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMembersReq} GroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMembersReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMembersReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMembersReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMembersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMembersReq} GroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMembersReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMembersReq message.
         * @function verify
         * @memberof pb.GroupMembersReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMembersReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            return null;
        };

        /**
         * Creates a GroupMembersReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMembersReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMembersReq} GroupMembersReq
         */
        GroupMembersReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMembersReq)
                return object;
            var message = new $root.pb.GroupMembersReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            return message;
        };

        /**
         * Creates a plain object from a GroupMembersReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMembersReq
         * @static
         * @param {pb.GroupMembersReq} message GroupMembersReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMembersReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.groupId = "";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            return object;
        };

        /**
         * Converts this GroupMembersReq to JSON.
         * @function toJSON
         * @memberof pb.GroupMembersReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMembersReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMembersReq
         * @function getTypeUrl
         * @memberof pb.GroupMembersReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMembersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMembersReq";
        };

        return GroupMembersReq;
    })();

    pb.GroupMembersResp = (function() {

        /**
         * Properties of a GroupMembersResp.
         * @memberof pb
         * @interface IGroupMembersResp
         * @property {number|null} [code] GroupMembersResp code
         * @property {string|null} [msg] GroupMembersResp msg
         * @property {Array.<pb.IGroupMember>|null} [members] GroupMembersResp members
         */

        /**
         * Constructs a new GroupMembersResp.
         * @memberof pb
         * @classdesc Represents a GroupMembersResp.
         * @implements IGroupMembersResp
         * @constructor
         * @param {pb.IGroupMembersResp=} [properties] Properties to set
         */
        function GroupMembersResp(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMembersResp code.
         * @member {number} code
         * @memberof pb.GroupMembersResp
         * @instance
         */
        GroupMembersResp.prototype.code = 0;

        /**
         * GroupMembersResp msg.
         * @member {string} msg
         * @memberof pb.GroupMembersResp
         * @instance
         */
        GroupMembersResp.prototype.msg = "";

        /**
         * GroupMembersResp members.
         * @member {Array.<pb.IGroupMember>} members
         * @memberof pb.GroupMembersResp
         * @instance
         */
        GroupMembersResp.prototype.members = $util.emptyArray;

        /**
         * Creates a new GroupMembersResp instance using the specified properties.
         * @function create
         * @memberof pb.GroupMembersResp
         * @static
         * @param {pb.IGroupMembersResp=} [properties] Properties to set
         * @returns {pb.GroupMembersResp} GroupMembersResp instance
         */
        GroupMembersResp.create = function create(properties) {
            return new GroupMembersResp(properties);
        };

        /**
         * Encodes the specified GroupMembersResp message. Does not implicitly {@link pb.GroupMembersResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMembersResp
         * @static
         * @param {pb.IGroupMembersResp} message GroupMembersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMembersResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.pb.GroupMember.encode(message.members[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupMembersResp message, length delimited. Does not implicitly {@link pb.GroupMembersResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMembersResp
         * @static
         * @param {pb.IGroupMembersResp} message GroupMembersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMembersResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMembersResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMembersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMembersResp} GroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMembersResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMembersResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.members && message.members.length))
                            message.members = [];
                        message.members.push($root.pb.GroupMember.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMembersResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMembersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMembersResp} GroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMembersResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMembersResp message.
         * @function verify
         * @memberof pb.GroupMembersResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMembersResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.pb.GroupMember.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GroupMembersResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMembersResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMembersResp} GroupMembersResp
         */
        GroupMembersResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMembersResp)
                return object;
            var message = new $root.pb.GroupMembersResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".pb.GroupMembersResp.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".pb.GroupMembersResp.members: object expected");
                    message.members[i] = $root.pb.GroupMember.fromObject(object.members[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupMembersResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMembersResp
         * @static
         * @param {pb.GroupMembersResp} message GroupMembersResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMembersResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.pb.GroupMember.toObject(message.members[j], options);
            }
            return object;
        };

        /**
         * Converts this GroupMembersResp to JSON.
         * @function toJSON
         * @memberof pb.GroupMembersResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMembersResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMembersResp
         * @function getTypeUrl
         * @memberof pb.GroupMembersResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMembersResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMembersResp";
        };

        return GroupMembersResp;
    })();

    pb.GroupInfoReq = (function() {

        /**
         * Properties of a GroupInfoReq.
         * @memberof pb
         * @interface IGroupInfoReq
         * @property {string|null} [groupId] GroupInfoReq groupId
         */

        /**
         * Constructs a new GroupInfoReq.
         * @memberof pb
         * @classdesc Represents a GroupInfoReq.
         * @implements IGroupInfoReq
         * @constructor
         * @param {pb.IGroupInfoReq=} [properties] Properties to set
         */
        function GroupInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupInfoReq groupId.
         * @member {string} groupId
         * @memberof pb.GroupInfoReq
         * @instance
         */
        GroupInfoReq.prototype.groupId = "";

        /**
         * Creates a new GroupInfoReq instance using the specified properties.
         * @function create
         * @memberof pb.GroupInfoReq
         * @static
         * @param {pb.IGroupInfoReq=} [properties] Properties to set
         * @returns {pb.GroupInfoReq} GroupInfoReq instance
         */
        GroupInfoReq.create = function create(properties) {
            return new GroupInfoReq(properties);
        };

        /**
         * Encodes the specified GroupInfoReq message. Does not implicitly {@link pb.GroupInfoReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupInfoReq
         * @static
         * @param {pb.IGroupInfoReq} message GroupInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            return writer;
        };

        /**
         * Encodes the specified GroupInfoReq message, length delimited. Does not implicitly {@link pb.GroupInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupInfoReq
         * @static
         * @param {pb.IGroupInfoReq} message GroupInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupInfoReq} GroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfoReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupInfoReq} GroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupInfoReq message.
         * @function verify
         * @memberof pb.GroupInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            return null;
        };

        /**
         * Creates a GroupInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupInfoReq} GroupInfoReq
         */
        GroupInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupInfoReq)
                return object;
            var message = new $root.pb.GroupInfoReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            return message;
        };

        /**
         * Creates a plain object from a GroupInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupInfoReq
         * @static
         * @param {pb.GroupInfoReq} message GroupInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.groupId = "";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            return object;
        };

        /**
         * Converts this GroupInfoReq to JSON.
         * @function toJSON
         * @memberof pb.GroupInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupInfoReq
         * @function getTypeUrl
         * @memberof pb.GroupInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupInfoReq";
        };

        return GroupInfoReq;
    })();

    pb.GroupInfoResp = (function() {

        /**
         * Properties of a GroupInfoResp.
         * @memberof pb
         * @interface IGroupInfoResp
         * @property {number|null} [code] GroupInfoResp code
         * @property {string|null} [msg] GroupInfoResp msg
         * @property {pb.IGroup|null} [group] GroupInfoResp group
         */

        /**
         * Constructs a new GroupInfoResp.
         * @memberof pb
         * @classdesc Represents a GroupInfoResp.
         * @implements IGroupInfoResp
         * @constructor
         * @param {pb.IGroupInfoResp=} [properties] Properties to set
         */
        function GroupInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupInfoResp code.
         * @member {number} code
         * @memberof pb.GroupInfoResp
         * @instance
         */
        GroupInfoResp.prototype.code = 0;

        /**
         * GroupInfoResp msg.
         * @member {string} msg
         * @memberof pb.GroupInfoResp
         * @instance
         */
        GroupInfoResp.prototype.msg = "";

        /**
         * GroupInfoResp group.
         * @member {pb.IGroup|null|undefined} group
         * @memberof pb.GroupInfoResp
         * @instance
         */
        GroupInfoResp.prototype.group = null;

        /**
         * Creates a new GroupInfoResp instance using the specified properties.
         * @function create
         * @memberof pb.GroupInfoResp
         * @static
         * @param {pb.IGroupInfoResp=} [properties] Properties to set
         * @returns {pb.GroupInfoResp} GroupInfoResp instance
         */
        GroupInfoResp.create = function create(properties) {
            return new GroupInfoResp(properties);
        };

        /**
         * Encodes the specified GroupInfoResp message. Does not implicitly {@link pb.GroupInfoResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupInfoResp
         * @static
         * @param {pb.IGroupInfoResp} message GroupInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                $root.pb.Group.encode(message.group, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupInfoResp message, length delimited. Does not implicitly {@link pb.GroupInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupInfoResp
         * @static
         * @param {pb.IGroupInfoResp} message GroupInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupInfoResp} GroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfoResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.group = $root.pb.Group.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupInfoResp} GroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupInfoResp message.
         * @function verify
         * @memberof pb.GroupInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.group != null && message.hasOwnProperty("group")) {
                var error = $root.pb.Group.verify(message.group);
                if (error)
                    return "group." + error;
            }
            return null;
        };

        /**
         * Creates a GroupInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupInfoResp} GroupInfoResp
         */
        GroupInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupInfoResp)
                return object;
            var message = new $root.pb.GroupInfoResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.group != null) {
                if (typeof object.group !== "object")
                    throw TypeError(".pb.GroupInfoResp.group: object expected");
                message.group = $root.pb.Group.fromObject(object.group);
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupInfoResp
         * @static
         * @param {pb.GroupInfoResp} message GroupInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.group = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = $root.pb.Group.toObject(message.group, options);
            return object;
        };

        /**
         * Converts this GroupInfoResp to JSON.
         * @function toJSON
         * @memberof pb.GroupInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupInfoResp
         * @function getTypeUrl
         * @memberof pb.GroupInfoResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupInfoResp";
        };

        return GroupInfoResp;
    })();

    pb.SendGroupMessageReq = (function() {

        /**
         * Properties of a SendGroupMessageReq.
         * @memberof pb
         * @interface ISendGroupMessageReq
         * @property {string|null} [groupId] SendGroupMessageReq groupId
         * @property {string|null} [fromUid] SendGroupMessageReq fromUid
         * @property {string|null} [content] SendGroupMessageReq content
         * @property {string|null} [messageType] SendGroupMessageReq messageType
         */

        /**
         * Constructs a new SendGroupMessageReq.
         * @memberof pb
         * @classdesc Represents a SendGroupMessageReq.
         * @implements ISendGroupMessageReq
         * @constructor
         * @param {pb.ISendGroupMessageReq=} [properties] Properties to set
         */
        function SendGroupMessageReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendGroupMessageReq groupId.
         * @member {string} groupId
         * @memberof pb.SendGroupMessageReq
         * @instance
         */
        SendGroupMessageReq.prototype.groupId = "";

        /**
         * SendGroupMessageReq fromUid.
         * @member {string} fromUid
         * @memberof pb.SendGroupMessageReq
         * @instance
         */
        SendGroupMessageReq.prototype.fromUid = "";

        /**
         * SendGroupMessageReq content.
         * @member {string} content
         * @memberof pb.SendGroupMessageReq
         * @instance
         */
        SendGroupMessageReq.prototype.content = "";

        /**
         * SendGroupMessageReq messageType.
         * @member {string} messageType
         * @memberof pb.SendGroupMessageReq
         * @instance
         */
        SendGroupMessageReq.prototype.messageType = "";

        /**
         * Creates a new SendGroupMessageReq instance using the specified properties.
         * @function create
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {pb.ISendGroupMessageReq=} [properties] Properties to set
         * @returns {pb.SendGroupMessageReq} SendGroupMessageReq instance
         */
        SendGroupMessageReq.create = function create(properties) {
            return new SendGroupMessageReq(properties);
        };

        /**
         * Encodes the specified SendGroupMessageReq message. Does not implicitly {@link pb.SendGroupMessageReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {pb.ISendGroupMessageReq} message SendGroupMessageReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGroupMessageReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.fromUid != null && Object.hasOwnProperty.call(message, "fromUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromUid);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.messageType);
            return writer;
        };

        /**
         * Encodes the specified SendGroupMessageReq message, length delimited. Does not implicitly {@link pb.SendGroupMessageReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {pb.ISendGroupMessageReq} message SendGroupMessageReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGroupMessageReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendGroupMessageReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SendGroupMessageReq} SendGroupMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGroupMessageReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SendGroupMessageReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.fromUid = reader.string();
                        break;
                    }
                case 3: {
                        message.content = reader.string();
                        break;
                    }
                case 4: {
                        message.messageType = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendGroupMessageReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SendGroupMessageReq} SendGroupMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGroupMessageReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendGroupMessageReq message.
         * @function verify
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendGroupMessageReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                if (!$util.isString(message.fromUid))
                    return "fromUid: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isString(message.messageType))
                    return "messageType: string expected";
            return null;
        };

        /**
         * Creates a SendGroupMessageReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SendGroupMessageReq} SendGroupMessageReq
         */
        SendGroupMessageReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SendGroupMessageReq)
                return object;
            var message = new $root.pb.SendGroupMessageReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.fromUid != null)
                message.fromUid = String(object.fromUid);
            if (object.content != null)
                message.content = String(object.content);
            if (object.messageType != null)
                message.messageType = String(object.messageType);
            return message;
        };

        /**
         * Creates a plain object from a SendGroupMessageReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {pb.SendGroupMessageReq} message SendGroupMessageReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendGroupMessageReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.fromUid = "";
                object.content = "";
                object.messageType = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.fromUid != null && message.hasOwnProperty("fromUid"))
                object.fromUid = message.fromUid;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            return object;
        };

        /**
         * Converts this SendGroupMessageReq to JSON.
         * @function toJSON
         * @memberof pb.SendGroupMessageReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendGroupMessageReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendGroupMessageReq
         * @function getTypeUrl
         * @memberof pb.SendGroupMessageReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendGroupMessageReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SendGroupMessageReq";
        };

        return SendGroupMessageReq;
    })();

    pb.SendGroupMessageResp = (function() {

        /**
         * Properties of a SendGroupMessageResp.
         * @memberof pb
         * @interface ISendGroupMessageResp
         * @property {number|null} [code] SendGroupMessageResp code
         * @property {string|null} [msg] SendGroupMessageResp msg
         * @property {string|null} [messageId] SendGroupMessageResp messageId
         */

        /**
         * Constructs a new SendGroupMessageResp.
         * @memberof pb
         * @classdesc Represents a SendGroupMessageResp.
         * @implements ISendGroupMessageResp
         * @constructor
         * @param {pb.ISendGroupMessageResp=} [properties] Properties to set
         */
        function SendGroupMessageResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendGroupMessageResp code.
         * @member {number} code
         * @memberof pb.SendGroupMessageResp
         * @instance
         */
        SendGroupMessageResp.prototype.code = 0;

        /**
         * SendGroupMessageResp msg.
         * @member {string} msg
         * @memberof pb.SendGroupMessageResp
         * @instance
         */
        SendGroupMessageResp.prototype.msg = "";

        /**
         * SendGroupMessageResp messageId.
         * @member {string} messageId
         * @memberof pb.SendGroupMessageResp
         * @instance
         */
        SendGroupMessageResp.prototype.messageId = "";

        /**
         * Creates a new SendGroupMessageResp instance using the specified properties.
         * @function create
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {pb.ISendGroupMessageResp=} [properties] Properties to set
         * @returns {pb.SendGroupMessageResp} SendGroupMessageResp instance
         */
        SendGroupMessageResp.create = function create(properties) {
            return new SendGroupMessageResp(properties);
        };

        /**
         * Encodes the specified SendGroupMessageResp message. Does not implicitly {@link pb.SendGroupMessageResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {pb.ISendGroupMessageResp} message SendGroupMessageResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGroupMessageResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.messageId);
            return writer;
        };

        /**
         * Encodes the specified SendGroupMessageResp message, length delimited. Does not implicitly {@link pb.SendGroupMessageResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {pb.ISendGroupMessageResp} message SendGroupMessageResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGroupMessageResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendGroupMessageResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SendGroupMessageResp} SendGroupMessageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGroupMessageResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SendGroupMessageResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.messageId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendGroupMessageResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SendGroupMessageResp} SendGroupMessageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGroupMessageResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendGroupMessageResp message.
         * @function verify
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendGroupMessageResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            return null;
        };

        /**
         * Creates a SendGroupMessageResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SendGroupMessageResp} SendGroupMessageResp
         */
        SendGroupMessageResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SendGroupMessageResp)
                return object;
            var message = new $root.pb.SendGroupMessageResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.messageId != null)
                message.messageId = String(object.messageId);
            return message;
        };

        /**
         * Creates a plain object from a SendGroupMessageResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {pb.SendGroupMessageResp} message SendGroupMessageResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendGroupMessageResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.messageId = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            return object;
        };

        /**
         * Converts this SendGroupMessageResp to JSON.
         * @function toJSON
         * @memberof pb.SendGroupMessageResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendGroupMessageResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendGroupMessageResp
         * @function getTypeUrl
         * @memberof pb.SendGroupMessageResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendGroupMessageResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SendGroupMessageResp";
        };

        return SendGroupMessageResp;
    })();

    pb.GroupMessageHistoryReq = (function() {

        /**
         * Properties of a GroupMessageHistoryReq.
         * @memberof pb
         * @interface IGroupMessageHistoryReq
         * @property {string|null} [groupId] GroupMessageHistoryReq groupId
         * @property {number|null} [limit] GroupMessageHistoryReq limit
         * @property {number|Long|null} [beforeTimestamp] GroupMessageHistoryReq beforeTimestamp
         */

        /**
         * Constructs a new GroupMessageHistoryReq.
         * @memberof pb
         * @classdesc Represents a GroupMessageHistoryReq.
         * @implements IGroupMessageHistoryReq
         * @constructor
         * @param {pb.IGroupMessageHistoryReq=} [properties] Properties to set
         */
        function GroupMessageHistoryReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMessageHistoryReq groupId.
         * @member {string} groupId
         * @memberof pb.GroupMessageHistoryReq
         * @instance
         */
        GroupMessageHistoryReq.prototype.groupId = "";

        /**
         * GroupMessageHistoryReq limit.
         * @member {number} limit
         * @memberof pb.GroupMessageHistoryReq
         * @instance
         */
        GroupMessageHistoryReq.prototype.limit = 0;

        /**
         * GroupMessageHistoryReq beforeTimestamp.
         * @member {number|Long} beforeTimestamp
         * @memberof pb.GroupMessageHistoryReq
         * @instance
         */
        GroupMessageHistoryReq.prototype.beforeTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GroupMessageHistoryReq instance using the specified properties.
         * @function create
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {pb.IGroupMessageHistoryReq=} [properties] Properties to set
         * @returns {pb.GroupMessageHistoryReq} GroupMessageHistoryReq instance
         */
        GroupMessageHistoryReq.create = function create(properties) {
            return new GroupMessageHistoryReq(properties);
        };

        /**
         * Encodes the specified GroupMessageHistoryReq message. Does not implicitly {@link pb.GroupMessageHistoryReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {pb.IGroupMessageHistoryReq} message GroupMessageHistoryReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMessageHistoryReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
            if (message.beforeTimestamp != null && Object.hasOwnProperty.call(message, "beforeTimestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.beforeTimestamp);
            return writer;
        };

        /**
         * Encodes the specified GroupMessageHistoryReq message, length delimited. Does not implicitly {@link pb.GroupMessageHistoryReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {pb.IGroupMessageHistoryReq} message GroupMessageHistoryReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMessageHistoryReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMessageHistoryReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMessageHistoryReq} GroupMessageHistoryReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMessageHistoryReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMessageHistoryReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.limit = reader.int32();
                        break;
                    }
                case 3: {
                        message.beforeTimestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMessageHistoryReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMessageHistoryReq} GroupMessageHistoryReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMessageHistoryReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMessageHistoryReq message.
         * @function verify
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMessageHistoryReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            if (message.beforeTimestamp != null && message.hasOwnProperty("beforeTimestamp"))
                if (!$util.isInteger(message.beforeTimestamp) && !(message.beforeTimestamp && $util.isInteger(message.beforeTimestamp.low) && $util.isInteger(message.beforeTimestamp.high)))
                    return "beforeTimestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a GroupMessageHistoryReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMessageHistoryReq} GroupMessageHistoryReq
         */
        GroupMessageHistoryReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMessageHistoryReq)
                return object;
            var message = new $root.pb.GroupMessageHistoryReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.limit != null)
                message.limit = object.limit | 0;
            if (object.beforeTimestamp != null)
                if ($util.Long)
                    (message.beforeTimestamp = $util.Long.fromValue(object.beforeTimestamp)).unsigned = false;
                else if (typeof object.beforeTimestamp === "string")
                    message.beforeTimestamp = parseInt(object.beforeTimestamp, 10);
                else if (typeof object.beforeTimestamp === "number")
                    message.beforeTimestamp = object.beforeTimestamp;
                else if (typeof object.beforeTimestamp === "object")
                    message.beforeTimestamp = new $util.LongBits(object.beforeTimestamp.low >>> 0, object.beforeTimestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GroupMessageHistoryReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {pb.GroupMessageHistoryReq} message GroupMessageHistoryReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMessageHistoryReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.limit = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.beforeTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.beforeTimestamp = options.longs === String ? "0" : 0;
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.beforeTimestamp != null && message.hasOwnProperty("beforeTimestamp"))
                if (typeof message.beforeTimestamp === "number")
                    object.beforeTimestamp = options.longs === String ? String(message.beforeTimestamp) : message.beforeTimestamp;
                else
                    object.beforeTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.beforeTimestamp) : options.longs === Number ? new $util.LongBits(message.beforeTimestamp.low >>> 0, message.beforeTimestamp.high >>> 0).toNumber() : message.beforeTimestamp;
            return object;
        };

        /**
         * Converts this GroupMessageHistoryReq to JSON.
         * @function toJSON
         * @memberof pb.GroupMessageHistoryReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMessageHistoryReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMessageHistoryReq
         * @function getTypeUrl
         * @memberof pb.GroupMessageHistoryReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMessageHistoryReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMessageHistoryReq";
        };

        return GroupMessageHistoryReq;
    })();

    pb.GroupMessageHistoryResp = (function() {

        /**
         * Properties of a GroupMessageHistoryResp.
         * @memberof pb
         * @interface IGroupMessageHistoryResp
         * @property {number|null} [code] GroupMessageHistoryResp code
         * @property {string|null} [msg] GroupMessageHistoryResp msg
         * @property {Array.<pb.IGroupMessage>|null} [messages] GroupMessageHistoryResp messages
         */

        /**
         * Constructs a new GroupMessageHistoryResp.
         * @memberof pb
         * @classdesc Represents a GroupMessageHistoryResp.
         * @implements IGroupMessageHistoryResp
         * @constructor
         * @param {pb.IGroupMessageHistoryResp=} [properties] Properties to set
         */
        function GroupMessageHistoryResp(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMessageHistoryResp code.
         * @member {number} code
         * @memberof pb.GroupMessageHistoryResp
         * @instance
         */
        GroupMessageHistoryResp.prototype.code = 0;

        /**
         * GroupMessageHistoryResp msg.
         * @member {string} msg
         * @memberof pb.GroupMessageHistoryResp
         * @instance
         */
        GroupMessageHistoryResp.prototype.msg = "";

        /**
         * GroupMessageHistoryResp messages.
         * @member {Array.<pb.IGroupMessage>} messages
         * @memberof pb.GroupMessageHistoryResp
         * @instance
         */
        GroupMessageHistoryResp.prototype.messages = $util.emptyArray;

        /**
         * Creates a new GroupMessageHistoryResp instance using the specified properties.
         * @function create
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {pb.IGroupMessageHistoryResp=} [properties] Properties to set
         * @returns {pb.GroupMessageHistoryResp} GroupMessageHistoryResp instance
         */
        GroupMessageHistoryResp.create = function create(properties) {
            return new GroupMessageHistoryResp(properties);
        };

        /**
         * Encodes the specified GroupMessageHistoryResp message. Does not implicitly {@link pb.GroupMessageHistoryResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {pb.IGroupMessageHistoryResp} message GroupMessageHistoryResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMessageHistoryResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.pb.GroupMessage.encode(message.messages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupMessageHistoryResp message, length delimited. Does not implicitly {@link pb.GroupMessageHistoryResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {pb.IGroupMessageHistoryResp} message GroupMessageHistoryResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMessageHistoryResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMessageHistoryResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMessageHistoryResp} GroupMessageHistoryResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMessageHistoryResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMessageHistoryResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.pb.GroupMessage.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMessageHistoryResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMessageHistoryResp} GroupMessageHistoryResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMessageHistoryResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMessageHistoryResp message.
         * @function verify
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMessageHistoryResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.pb.GroupMessage.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GroupMessageHistoryResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMessageHistoryResp} GroupMessageHistoryResp
         */
        GroupMessageHistoryResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMessageHistoryResp)
                return object;
            var message = new $root.pb.GroupMessageHistoryResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".pb.GroupMessageHistoryResp.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".pb.GroupMessageHistoryResp.messages: object expected");
                    message.messages[i] = $root.pb.GroupMessage.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupMessageHistoryResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {pb.GroupMessageHistoryResp} message GroupMessageHistoryResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMessageHistoryResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.pb.GroupMessage.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this GroupMessageHistoryResp to JSON.
         * @function toJSON
         * @memberof pb.GroupMessageHistoryResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMessageHistoryResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMessageHistoryResp
         * @function getTypeUrl
         * @memberof pb.GroupMessageHistoryResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMessageHistoryResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMessageHistoryResp";
        };

        return GroupMessageHistoryResp;
    })();

    pb.InviteToGroupReq = (function() {

        /**
         * Properties of an InviteToGroupReq.
         * @memberof pb
         * @interface IInviteToGroupReq
         * @property {string|null} [groupId] InviteToGroupReq groupId
         * @property {string|null} [inviterUid] InviteToGroupReq inviterUid
         * @property {Array.<string>|null} [inviteeUids] InviteToGroupReq inviteeUids
         */

        /**
         * Constructs a new InviteToGroupReq.
         * @memberof pb
         * @classdesc Represents an InviteToGroupReq.
         * @implements IInviteToGroupReq
         * @constructor
         * @param {pb.IInviteToGroupReq=} [properties] Properties to set
         */
        function InviteToGroupReq(properties) {
            this.inviteeUids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InviteToGroupReq groupId.
         * @member {string} groupId
         * @memberof pb.InviteToGroupReq
         * @instance
         */
        InviteToGroupReq.prototype.groupId = "";

        /**
         * InviteToGroupReq inviterUid.
         * @member {string} inviterUid
         * @memberof pb.InviteToGroupReq
         * @instance
         */
        InviteToGroupReq.prototype.inviterUid = "";

        /**
         * InviteToGroupReq inviteeUids.
         * @member {Array.<string>} inviteeUids
         * @memberof pb.InviteToGroupReq
         * @instance
         */
        InviteToGroupReq.prototype.inviteeUids = $util.emptyArray;

        /**
         * Creates a new InviteToGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {pb.IInviteToGroupReq=} [properties] Properties to set
         * @returns {pb.InviteToGroupReq} InviteToGroupReq instance
         */
        InviteToGroupReq.create = function create(properties) {
            return new InviteToGroupReq(properties);
        };

        /**
         * Encodes the specified InviteToGroupReq message. Does not implicitly {@link pb.InviteToGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {pb.IInviteToGroupReq} message InviteToGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteToGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.inviterUid != null && Object.hasOwnProperty.call(message, "inviterUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.inviterUid);
            if (message.inviteeUids != null && message.inviteeUids.length)
                for (var i = 0; i < message.inviteeUids.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.inviteeUids[i]);
            return writer;
        };

        /**
         * Encodes the specified InviteToGroupReq message, length delimited. Does not implicitly {@link pb.InviteToGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {pb.IInviteToGroupReq} message InviteToGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteToGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InviteToGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.InviteToGroupReq} InviteToGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteToGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.InviteToGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.inviterUid = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.inviteeUids && message.inviteeUids.length))
                            message.inviteeUids = [];
                        message.inviteeUids.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InviteToGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.InviteToGroupReq} InviteToGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteToGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InviteToGroupReq message.
         * @function verify
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InviteToGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.inviterUid != null && message.hasOwnProperty("inviterUid"))
                if (!$util.isString(message.inviterUid))
                    return "inviterUid: string expected";
            if (message.inviteeUids != null && message.hasOwnProperty("inviteeUids")) {
                if (!Array.isArray(message.inviteeUids))
                    return "inviteeUids: array expected";
                for (var i = 0; i < message.inviteeUids.length; ++i)
                    if (!$util.isString(message.inviteeUids[i]))
                        return "inviteeUids: string[] expected";
            }
            return null;
        };

        /**
         * Creates an InviteToGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.InviteToGroupReq} InviteToGroupReq
         */
        InviteToGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.InviteToGroupReq)
                return object;
            var message = new $root.pb.InviteToGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.inviterUid != null)
                message.inviterUid = String(object.inviterUid);
            if (object.inviteeUids) {
                if (!Array.isArray(object.inviteeUids))
                    throw TypeError(".pb.InviteToGroupReq.inviteeUids: array expected");
                message.inviteeUids = [];
                for (var i = 0; i < object.inviteeUids.length; ++i)
                    message.inviteeUids[i] = String(object.inviteeUids[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an InviteToGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {pb.InviteToGroupReq} message InviteToGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InviteToGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.inviteeUids = [];
            if (options.defaults) {
                object.groupId = "";
                object.inviterUid = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.inviterUid != null && message.hasOwnProperty("inviterUid"))
                object.inviterUid = message.inviterUid;
            if (message.inviteeUids && message.inviteeUids.length) {
                object.inviteeUids = [];
                for (var j = 0; j < message.inviteeUids.length; ++j)
                    object.inviteeUids[j] = message.inviteeUids[j];
            }
            return object;
        };

        /**
         * Converts this InviteToGroupReq to JSON.
         * @function toJSON
         * @memberof pb.InviteToGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InviteToGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InviteToGroupReq
         * @function getTypeUrl
         * @memberof pb.InviteToGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InviteToGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.InviteToGroupReq";
        };

        return InviteToGroupReq;
    })();

    pb.InviteToGroupResp = (function() {

        /**
         * Properties of an InviteToGroupResp.
         * @memberof pb
         * @interface IInviteToGroupResp
         * @property {number|null} [code] InviteToGroupResp code
         * @property {string|null} [msg] InviteToGroupResp msg
         */

        /**
         * Constructs a new InviteToGroupResp.
         * @memberof pb
         * @classdesc Represents an InviteToGroupResp.
         * @implements IInviteToGroupResp
         * @constructor
         * @param {pb.IInviteToGroupResp=} [properties] Properties to set
         */
        function InviteToGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InviteToGroupResp code.
         * @member {number} code
         * @memberof pb.InviteToGroupResp
         * @instance
         */
        InviteToGroupResp.prototype.code = 0;

        /**
         * InviteToGroupResp msg.
         * @member {string} msg
         * @memberof pb.InviteToGroupResp
         * @instance
         */
        InviteToGroupResp.prototype.msg = "";

        /**
         * Creates a new InviteToGroupResp instance using the specified properties.
         * @function create
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {pb.IInviteToGroupResp=} [properties] Properties to set
         * @returns {pb.InviteToGroupResp} InviteToGroupResp instance
         */
        InviteToGroupResp.create = function create(properties) {
            return new InviteToGroupResp(properties);
        };

        /**
         * Encodes the specified InviteToGroupResp message. Does not implicitly {@link pb.InviteToGroupResp.verify|verify} messages.
         * @function encode
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {pb.IInviteToGroupResp} message InviteToGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteToGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified InviteToGroupResp message, length delimited. Does not implicitly {@link pb.InviteToGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {pb.IInviteToGroupResp} message InviteToGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteToGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InviteToGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.InviteToGroupResp} InviteToGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteToGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.InviteToGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InviteToGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.InviteToGroupResp} InviteToGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteToGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InviteToGroupResp message.
         * @function verify
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InviteToGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an InviteToGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.InviteToGroupResp} InviteToGroupResp
         */
        InviteToGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.InviteToGroupResp)
                return object;
            var message = new $root.pb.InviteToGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an InviteToGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {pb.InviteToGroupResp} message InviteToGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InviteToGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this InviteToGroupResp to JSON.
         * @function toJSON
         * @memberof pb.InviteToGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InviteToGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InviteToGroupResp
         * @function getTypeUrl
         * @memberof pb.InviteToGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InviteToGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.InviteToGroupResp";
        };

        return InviteToGroupResp;
    })();

    pb.KickFromGroupReq = (function() {

        /**
         * Properties of a KickFromGroupReq.
         * @memberof pb
         * @interface IKickFromGroupReq
         * @property {string|null} [groupId] KickFromGroupReq groupId
         * @property {string|null} [operatorUid] KickFromGroupReq operatorUid
         * @property {string|null} [targetUid] KickFromGroupReq targetUid
         */

        /**
         * Constructs a new KickFromGroupReq.
         * @memberof pb
         * @classdesc Represents a KickFromGroupReq.
         * @implements IKickFromGroupReq
         * @constructor
         * @param {pb.IKickFromGroupReq=} [properties] Properties to set
         */
        function KickFromGroupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickFromGroupReq groupId.
         * @member {string} groupId
         * @memberof pb.KickFromGroupReq
         * @instance
         */
        KickFromGroupReq.prototype.groupId = "";

        /**
         * KickFromGroupReq operatorUid.
         * @member {string} operatorUid
         * @memberof pb.KickFromGroupReq
         * @instance
         */
        KickFromGroupReq.prototype.operatorUid = "";

        /**
         * KickFromGroupReq targetUid.
         * @member {string} targetUid
         * @memberof pb.KickFromGroupReq
         * @instance
         */
        KickFromGroupReq.prototype.targetUid = "";

        /**
         * Creates a new KickFromGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {pb.IKickFromGroupReq=} [properties] Properties to set
         * @returns {pb.KickFromGroupReq} KickFromGroupReq instance
         */
        KickFromGroupReq.create = function create(properties) {
            return new KickFromGroupReq(properties);
        };

        /**
         * Encodes the specified KickFromGroupReq message. Does not implicitly {@link pb.KickFromGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {pb.IKickFromGroupReq} message KickFromGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickFromGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.operatorUid != null && Object.hasOwnProperty.call(message, "operatorUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.operatorUid);
            if (message.targetUid != null && Object.hasOwnProperty.call(message, "targetUid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUid);
            return writer;
        };

        /**
         * Encodes the specified KickFromGroupReq message, length delimited. Does not implicitly {@link pb.KickFromGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {pb.IKickFromGroupReq} message KickFromGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickFromGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickFromGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.KickFromGroupReq} KickFromGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickFromGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.KickFromGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.operatorUid = reader.string();
                        break;
                    }
                case 3: {
                        message.targetUid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickFromGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.KickFromGroupReq} KickFromGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickFromGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickFromGroupReq message.
         * @function verify
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickFromGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                if (!$util.isString(message.operatorUid))
                    return "operatorUid: string expected";
            if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                if (!$util.isString(message.targetUid))
                    return "targetUid: string expected";
            return null;
        };

        /**
         * Creates a KickFromGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.KickFromGroupReq} KickFromGroupReq
         */
        KickFromGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.KickFromGroupReq)
                return object;
            var message = new $root.pb.KickFromGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.operatorUid != null)
                message.operatorUid = String(object.operatorUid);
            if (object.targetUid != null)
                message.targetUid = String(object.targetUid);
            return message;
        };

        /**
         * Creates a plain object from a KickFromGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {pb.KickFromGroupReq} message KickFromGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickFromGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.operatorUid = "";
                object.targetUid = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                object.operatorUid = message.operatorUid;
            if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                object.targetUid = message.targetUid;
            return object;
        };

        /**
         * Converts this KickFromGroupReq to JSON.
         * @function toJSON
         * @memberof pb.KickFromGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickFromGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KickFromGroupReq
         * @function getTypeUrl
         * @memberof pb.KickFromGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickFromGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.KickFromGroupReq";
        };

        return KickFromGroupReq;
    })();

    pb.KickFromGroupResp = (function() {

        /**
         * Properties of a KickFromGroupResp.
         * @memberof pb
         * @interface IKickFromGroupResp
         * @property {number|null} [code] KickFromGroupResp code
         * @property {string|null} [msg] KickFromGroupResp msg
         */

        /**
         * Constructs a new KickFromGroupResp.
         * @memberof pb
         * @classdesc Represents a KickFromGroupResp.
         * @implements IKickFromGroupResp
         * @constructor
         * @param {pb.IKickFromGroupResp=} [properties] Properties to set
         */
        function KickFromGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickFromGroupResp code.
         * @member {number} code
         * @memberof pb.KickFromGroupResp
         * @instance
         */
        KickFromGroupResp.prototype.code = 0;

        /**
         * KickFromGroupResp msg.
         * @member {string} msg
         * @memberof pb.KickFromGroupResp
         * @instance
         */
        KickFromGroupResp.prototype.msg = "";

        /**
         * Creates a new KickFromGroupResp instance using the specified properties.
         * @function create
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {pb.IKickFromGroupResp=} [properties] Properties to set
         * @returns {pb.KickFromGroupResp} KickFromGroupResp instance
         */
        KickFromGroupResp.create = function create(properties) {
            return new KickFromGroupResp(properties);
        };

        /**
         * Encodes the specified KickFromGroupResp message. Does not implicitly {@link pb.KickFromGroupResp.verify|verify} messages.
         * @function encode
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {pb.IKickFromGroupResp} message KickFromGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickFromGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified KickFromGroupResp message, length delimited. Does not implicitly {@link pb.KickFromGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {pb.IKickFromGroupResp} message KickFromGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickFromGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickFromGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.KickFromGroupResp} KickFromGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickFromGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.KickFromGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickFromGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.KickFromGroupResp} KickFromGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickFromGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickFromGroupResp message.
         * @function verify
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickFromGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a KickFromGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.KickFromGroupResp} KickFromGroupResp
         */
        KickFromGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.KickFromGroupResp)
                return object;
            var message = new $root.pb.KickFromGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a KickFromGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {pb.KickFromGroupResp} message KickFromGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickFromGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this KickFromGroupResp to JSON.
         * @function toJSON
         * @memberof pb.KickFromGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickFromGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KickFromGroupResp
         * @function getTypeUrl
         * @memberof pb.KickFromGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickFromGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.KickFromGroupResp";
        };

        return KickFromGroupResp;
    })();

    pb.SetGroupNicknameReq = (function() {

        /**
         * Properties of a SetGroupNicknameReq.
         * @memberof pb
         * @interface ISetGroupNicknameReq
         * @property {string|null} [groupId] SetGroupNicknameReq groupId
         * @property {string|null} [uid] SetGroupNicknameReq uid
         * @property {string|null} [nickname] SetGroupNicknameReq nickname
         */

        /**
         * Constructs a new SetGroupNicknameReq.
         * @memberof pb
         * @classdesc Represents a SetGroupNicknameReq.
         * @implements ISetGroupNicknameReq
         * @constructor
         * @param {pb.ISetGroupNicknameReq=} [properties] Properties to set
         */
        function SetGroupNicknameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupNicknameReq groupId.
         * @member {string} groupId
         * @memberof pb.SetGroupNicknameReq
         * @instance
         */
        SetGroupNicknameReq.prototype.groupId = "";

        /**
         * SetGroupNicknameReq uid.
         * @member {string} uid
         * @memberof pb.SetGroupNicknameReq
         * @instance
         */
        SetGroupNicknameReq.prototype.uid = "";

        /**
         * SetGroupNicknameReq nickname.
         * @member {string} nickname
         * @memberof pb.SetGroupNicknameReq
         * @instance
         */
        SetGroupNicknameReq.prototype.nickname = "";

        /**
         * Creates a new SetGroupNicknameReq instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {pb.ISetGroupNicknameReq=} [properties] Properties to set
         * @returns {pb.SetGroupNicknameReq} SetGroupNicknameReq instance
         */
        SetGroupNicknameReq.create = function create(properties) {
            return new SetGroupNicknameReq(properties);
        };

        /**
         * Encodes the specified SetGroupNicknameReq message. Does not implicitly {@link pb.SetGroupNicknameReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {pb.ISetGroupNicknameReq} message SetGroupNicknameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupNicknameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified SetGroupNicknameReq message, length delimited. Does not implicitly {@link pb.SetGroupNicknameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {pb.ISetGroupNicknameReq} message SetGroupNicknameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupNicknameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupNicknameReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupNicknameReq} SetGroupNicknameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupNicknameReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupNicknameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                case 3: {
                        message.nickname = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupNicknameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupNicknameReq} SetGroupNicknameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupNicknameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupNicknameReq message.
         * @function verify
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupNicknameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a SetGroupNicknameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupNicknameReq} SetGroupNicknameReq
         */
        SetGroupNicknameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupNicknameReq)
                return object;
            var message = new $root.pb.SetGroupNicknameReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupNicknameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {pb.SetGroupNicknameReq} message SetGroupNicknameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupNicknameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.uid = "";
                object.nickname = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this SetGroupNicknameReq to JSON.
         * @function toJSON
         * @memberof pb.SetGroupNicknameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupNicknameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupNicknameReq
         * @function getTypeUrl
         * @memberof pb.SetGroupNicknameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupNicknameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupNicknameReq";
        };

        return SetGroupNicknameReq;
    })();

    pb.SetGroupNicknameResp = (function() {

        /**
         * Properties of a SetGroupNicknameResp.
         * @memberof pb
         * @interface ISetGroupNicknameResp
         * @property {number|null} [code] SetGroupNicknameResp code
         * @property {string|null} [msg] SetGroupNicknameResp msg
         */

        /**
         * Constructs a new SetGroupNicknameResp.
         * @memberof pb
         * @classdesc Represents a SetGroupNicknameResp.
         * @implements ISetGroupNicknameResp
         * @constructor
         * @param {pb.ISetGroupNicknameResp=} [properties] Properties to set
         */
        function SetGroupNicknameResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupNicknameResp code.
         * @member {number} code
         * @memberof pb.SetGroupNicknameResp
         * @instance
         */
        SetGroupNicknameResp.prototype.code = 0;

        /**
         * SetGroupNicknameResp msg.
         * @member {string} msg
         * @memberof pb.SetGroupNicknameResp
         * @instance
         */
        SetGroupNicknameResp.prototype.msg = "";

        /**
         * Creates a new SetGroupNicknameResp instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {pb.ISetGroupNicknameResp=} [properties] Properties to set
         * @returns {pb.SetGroupNicknameResp} SetGroupNicknameResp instance
         */
        SetGroupNicknameResp.create = function create(properties) {
            return new SetGroupNicknameResp(properties);
        };

        /**
         * Encodes the specified SetGroupNicknameResp message. Does not implicitly {@link pb.SetGroupNicknameResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {pb.ISetGroupNicknameResp} message SetGroupNicknameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupNicknameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SetGroupNicknameResp message, length delimited. Does not implicitly {@link pb.SetGroupNicknameResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {pb.ISetGroupNicknameResp} message SetGroupNicknameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupNicknameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupNicknameResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupNicknameResp} SetGroupNicknameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupNicknameResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupNicknameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupNicknameResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupNicknameResp} SetGroupNicknameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupNicknameResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupNicknameResp message.
         * @function verify
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupNicknameResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SetGroupNicknameResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupNicknameResp} SetGroupNicknameResp
         */
        SetGroupNicknameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupNicknameResp)
                return object;
            var message = new $root.pb.SetGroupNicknameResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupNicknameResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {pb.SetGroupNicknameResp} message SetGroupNicknameResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupNicknameResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SetGroupNicknameResp to JSON.
         * @function toJSON
         * @memberof pb.SetGroupNicknameResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupNicknameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupNicknameResp
         * @function getTypeUrl
         * @memberof pb.SetGroupNicknameResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupNicknameResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupNicknameResp";
        };

        return SetGroupNicknameResp;
    })();

    pb.UpdateGroupNameReq = (function() {

        /**
         * Properties of an UpdateGroupNameReq.
         * @memberof pb
         * @interface IUpdateGroupNameReq
         * @property {string|null} [groupId] UpdateGroupNameReq groupId
         * @property {string|null} [operatorUid] UpdateGroupNameReq operatorUid
         * @property {string|null} [newName] UpdateGroupNameReq newName
         */

        /**
         * Constructs a new UpdateGroupNameReq.
         * @memberof pb
         * @classdesc Represents an UpdateGroupNameReq.
         * @implements IUpdateGroupNameReq
         * @constructor
         * @param {pb.IUpdateGroupNameReq=} [properties] Properties to set
         */
        function UpdateGroupNameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateGroupNameReq groupId.
         * @member {string} groupId
         * @memberof pb.UpdateGroupNameReq
         * @instance
         */
        UpdateGroupNameReq.prototype.groupId = "";

        /**
         * UpdateGroupNameReq operatorUid.
         * @member {string} operatorUid
         * @memberof pb.UpdateGroupNameReq
         * @instance
         */
        UpdateGroupNameReq.prototype.operatorUid = "";

        /**
         * UpdateGroupNameReq newName.
         * @member {string} newName
         * @memberof pb.UpdateGroupNameReq
         * @instance
         */
        UpdateGroupNameReq.prototype.newName = "";

        /**
         * Creates a new UpdateGroupNameReq instance using the specified properties.
         * @function create
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {pb.IUpdateGroupNameReq=} [properties] Properties to set
         * @returns {pb.UpdateGroupNameReq} UpdateGroupNameReq instance
         */
        UpdateGroupNameReq.create = function create(properties) {
            return new UpdateGroupNameReq(properties);
        };

        /**
         * Encodes the specified UpdateGroupNameReq message. Does not implicitly {@link pb.UpdateGroupNameReq.verify|verify} messages.
         * @function encode
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {pb.IUpdateGroupNameReq} message UpdateGroupNameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupNameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.operatorUid != null && Object.hasOwnProperty.call(message, "operatorUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.operatorUid);
            if (message.newName != null && Object.hasOwnProperty.call(message, "newName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newName);
            return writer;
        };

        /**
         * Encodes the specified UpdateGroupNameReq message, length delimited. Does not implicitly {@link pb.UpdateGroupNameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {pb.IUpdateGroupNameReq} message UpdateGroupNameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupNameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGroupNameReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpdateGroupNameReq} UpdateGroupNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupNameReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpdateGroupNameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.operatorUid = reader.string();
                        break;
                    }
                case 3: {
                        message.newName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateGroupNameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpdateGroupNameReq} UpdateGroupNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupNameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateGroupNameReq message.
         * @function verify
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateGroupNameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                if (!$util.isString(message.operatorUid))
                    return "operatorUid: string expected";
            if (message.newName != null && message.hasOwnProperty("newName"))
                if (!$util.isString(message.newName))
                    return "newName: string expected";
            return null;
        };

        /**
         * Creates an UpdateGroupNameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpdateGroupNameReq} UpdateGroupNameReq
         */
        UpdateGroupNameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpdateGroupNameReq)
                return object;
            var message = new $root.pb.UpdateGroupNameReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.operatorUid != null)
                message.operatorUid = String(object.operatorUid);
            if (object.newName != null)
                message.newName = String(object.newName);
            return message;
        };

        /**
         * Creates a plain object from an UpdateGroupNameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {pb.UpdateGroupNameReq} message UpdateGroupNameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateGroupNameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.operatorUid = "";
                object.newName = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                object.operatorUid = message.operatorUid;
            if (message.newName != null && message.hasOwnProperty("newName"))
                object.newName = message.newName;
            return object;
        };

        /**
         * Converts this UpdateGroupNameReq to JSON.
         * @function toJSON
         * @memberof pb.UpdateGroupNameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGroupNameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateGroupNameReq
         * @function getTypeUrl
         * @memberof pb.UpdateGroupNameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateGroupNameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UpdateGroupNameReq";
        };

        return UpdateGroupNameReq;
    })();

    pb.UpdateGroupNameResp = (function() {

        /**
         * Properties of an UpdateGroupNameResp.
         * @memberof pb
         * @interface IUpdateGroupNameResp
         * @property {number|null} [code] UpdateGroupNameResp code
         * @property {string|null} [msg] UpdateGroupNameResp msg
         */

        /**
         * Constructs a new UpdateGroupNameResp.
         * @memberof pb
         * @classdesc Represents an UpdateGroupNameResp.
         * @implements IUpdateGroupNameResp
         * @constructor
         * @param {pb.IUpdateGroupNameResp=} [properties] Properties to set
         */
        function UpdateGroupNameResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateGroupNameResp code.
         * @member {number} code
         * @memberof pb.UpdateGroupNameResp
         * @instance
         */
        UpdateGroupNameResp.prototype.code = 0;

        /**
         * UpdateGroupNameResp msg.
         * @member {string} msg
         * @memberof pb.UpdateGroupNameResp
         * @instance
         */
        UpdateGroupNameResp.prototype.msg = "";

        /**
         * Creates a new UpdateGroupNameResp instance using the specified properties.
         * @function create
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {pb.IUpdateGroupNameResp=} [properties] Properties to set
         * @returns {pb.UpdateGroupNameResp} UpdateGroupNameResp instance
         */
        UpdateGroupNameResp.create = function create(properties) {
            return new UpdateGroupNameResp(properties);
        };

        /**
         * Encodes the specified UpdateGroupNameResp message. Does not implicitly {@link pb.UpdateGroupNameResp.verify|verify} messages.
         * @function encode
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {pb.IUpdateGroupNameResp} message UpdateGroupNameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupNameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified UpdateGroupNameResp message, length delimited. Does not implicitly {@link pb.UpdateGroupNameResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {pb.IUpdateGroupNameResp} message UpdateGroupNameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupNameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGroupNameResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpdateGroupNameResp} UpdateGroupNameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupNameResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpdateGroupNameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateGroupNameResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpdateGroupNameResp} UpdateGroupNameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupNameResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateGroupNameResp message.
         * @function verify
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateGroupNameResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an UpdateGroupNameResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpdateGroupNameResp} UpdateGroupNameResp
         */
        UpdateGroupNameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpdateGroupNameResp)
                return object;
            var message = new $root.pb.UpdateGroupNameResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateGroupNameResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {pb.UpdateGroupNameResp} message UpdateGroupNameResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateGroupNameResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this UpdateGroupNameResp to JSON.
         * @function toJSON
         * @memberof pb.UpdateGroupNameResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGroupNameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateGroupNameResp
         * @function getTypeUrl
         * @memberof pb.UpdateGroupNameResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateGroupNameResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UpdateGroupNameResp";
        };

        return UpdateGroupNameResp;
    })();

    pb.SetGroupRemarkReq = (function() {

        /**
         * Properties of a SetGroupRemarkReq.
         * @memberof pb
         * @interface ISetGroupRemarkReq
         * @property {string|null} [groupId] SetGroupRemarkReq groupId
         * @property {string|null} [uid] SetGroupRemarkReq uid
         * @property {string|null} [remark] SetGroupRemarkReq remark
         */

        /**
         * Constructs a new SetGroupRemarkReq.
         * @memberof pb
         * @classdesc Represents a SetGroupRemarkReq.
         * @implements ISetGroupRemarkReq
         * @constructor
         * @param {pb.ISetGroupRemarkReq=} [properties] Properties to set
         */
        function SetGroupRemarkReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupRemarkReq groupId.
         * @member {string} groupId
         * @memberof pb.SetGroupRemarkReq
         * @instance
         */
        SetGroupRemarkReq.prototype.groupId = "";

        /**
         * SetGroupRemarkReq uid.
         * @member {string} uid
         * @memberof pb.SetGroupRemarkReq
         * @instance
         */
        SetGroupRemarkReq.prototype.uid = "";

        /**
         * SetGroupRemarkReq remark.
         * @member {string} remark
         * @memberof pb.SetGroupRemarkReq
         * @instance
         */
        SetGroupRemarkReq.prototype.remark = "";

        /**
         * Creates a new SetGroupRemarkReq instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {pb.ISetGroupRemarkReq=} [properties] Properties to set
         * @returns {pb.SetGroupRemarkReq} SetGroupRemarkReq instance
         */
        SetGroupRemarkReq.create = function create(properties) {
            return new SetGroupRemarkReq(properties);
        };

        /**
         * Encodes the specified SetGroupRemarkReq message. Does not implicitly {@link pb.SetGroupRemarkReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {pb.ISetGroupRemarkReq} message SetGroupRemarkReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupRemarkReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified SetGroupRemarkReq message, length delimited. Does not implicitly {@link pb.SetGroupRemarkReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {pb.ISetGroupRemarkReq} message SetGroupRemarkReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupRemarkReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupRemarkReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupRemarkReq} SetGroupRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupRemarkReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupRemarkReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                case 3: {
                        message.remark = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupRemarkReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupRemarkReq} SetGroupRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupRemarkReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupRemarkReq message.
         * @function verify
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupRemarkReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a SetGroupRemarkReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupRemarkReq} SetGroupRemarkReq
         */
        SetGroupRemarkReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupRemarkReq)
                return object;
            var message = new $root.pb.SetGroupRemarkReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupRemarkReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {pb.SetGroupRemarkReq} message SetGroupRemarkReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupRemarkReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.uid = "";
                object.remark = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this SetGroupRemarkReq to JSON.
         * @function toJSON
         * @memberof pb.SetGroupRemarkReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupRemarkReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupRemarkReq
         * @function getTypeUrl
         * @memberof pb.SetGroupRemarkReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupRemarkReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupRemarkReq";
        };

        return SetGroupRemarkReq;
    })();

    pb.SetGroupRemarkResp = (function() {

        /**
         * Properties of a SetGroupRemarkResp.
         * @memberof pb
         * @interface ISetGroupRemarkResp
         * @property {number|null} [code] SetGroupRemarkResp code
         * @property {string|null} [msg] SetGroupRemarkResp msg
         */

        /**
         * Constructs a new SetGroupRemarkResp.
         * @memberof pb
         * @classdesc Represents a SetGroupRemarkResp.
         * @implements ISetGroupRemarkResp
         * @constructor
         * @param {pb.ISetGroupRemarkResp=} [properties] Properties to set
         */
        function SetGroupRemarkResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupRemarkResp code.
         * @member {number} code
         * @memberof pb.SetGroupRemarkResp
         * @instance
         */
        SetGroupRemarkResp.prototype.code = 0;

        /**
         * SetGroupRemarkResp msg.
         * @member {string} msg
         * @memberof pb.SetGroupRemarkResp
         * @instance
         */
        SetGroupRemarkResp.prototype.msg = "";

        /**
         * Creates a new SetGroupRemarkResp instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {pb.ISetGroupRemarkResp=} [properties] Properties to set
         * @returns {pb.SetGroupRemarkResp} SetGroupRemarkResp instance
         */
        SetGroupRemarkResp.create = function create(properties) {
            return new SetGroupRemarkResp(properties);
        };

        /**
         * Encodes the specified SetGroupRemarkResp message. Does not implicitly {@link pb.SetGroupRemarkResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {pb.ISetGroupRemarkResp} message SetGroupRemarkResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupRemarkResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SetGroupRemarkResp message, length delimited. Does not implicitly {@link pb.SetGroupRemarkResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {pb.ISetGroupRemarkResp} message SetGroupRemarkResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupRemarkResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupRemarkResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupRemarkResp} SetGroupRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupRemarkResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupRemarkResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupRemarkResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupRemarkResp} SetGroupRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupRemarkResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupRemarkResp message.
         * @function verify
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupRemarkResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SetGroupRemarkResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupRemarkResp} SetGroupRemarkResp
         */
        SetGroupRemarkResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupRemarkResp)
                return object;
            var message = new $root.pb.SetGroupRemarkResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupRemarkResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {pb.SetGroupRemarkResp} message SetGroupRemarkResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupRemarkResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SetGroupRemarkResp to JSON.
         * @function toJSON
         * @memberof pb.SetGroupRemarkResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupRemarkResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupRemarkResp
         * @function getTypeUrl
         * @memberof pb.SetGroupRemarkResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupRemarkResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupRemarkResp";
        };

        return SetGroupRemarkResp;
    })();

    pb.SetGroupDNDReq = (function() {

        /**
         * Properties of a SetGroupDNDReq.
         * @memberof pb
         * @interface ISetGroupDNDReq
         * @property {string|null} [groupId] SetGroupDNDReq groupId
         * @property {string|null} [uid] SetGroupDNDReq uid
         * @property {boolean|null} [dnd] SetGroupDNDReq dnd
         */

        /**
         * Constructs a new SetGroupDNDReq.
         * @memberof pb
         * @classdesc Represents a SetGroupDNDReq.
         * @implements ISetGroupDNDReq
         * @constructor
         * @param {pb.ISetGroupDNDReq=} [properties] Properties to set
         */
        function SetGroupDNDReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupDNDReq groupId.
         * @member {string} groupId
         * @memberof pb.SetGroupDNDReq
         * @instance
         */
        SetGroupDNDReq.prototype.groupId = "";

        /**
         * SetGroupDNDReq uid.
         * @member {string} uid
         * @memberof pb.SetGroupDNDReq
         * @instance
         */
        SetGroupDNDReq.prototype.uid = "";

        /**
         * SetGroupDNDReq dnd.
         * @member {boolean} dnd
         * @memberof pb.SetGroupDNDReq
         * @instance
         */
        SetGroupDNDReq.prototype.dnd = false;

        /**
         * Creates a new SetGroupDNDReq instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {pb.ISetGroupDNDReq=} [properties] Properties to set
         * @returns {pb.SetGroupDNDReq} SetGroupDNDReq instance
         */
        SetGroupDNDReq.create = function create(properties) {
            return new SetGroupDNDReq(properties);
        };

        /**
         * Encodes the specified SetGroupDNDReq message. Does not implicitly {@link pb.SetGroupDNDReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {pb.ISetGroupDNDReq} message SetGroupDNDReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupDNDReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            if (message.dnd != null && Object.hasOwnProperty.call(message, "dnd"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.dnd);
            return writer;
        };

        /**
         * Encodes the specified SetGroupDNDReq message, length delimited. Does not implicitly {@link pb.SetGroupDNDReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {pb.ISetGroupDNDReq} message SetGroupDNDReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupDNDReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupDNDReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupDNDReq} SetGroupDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupDNDReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupDNDReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                case 3: {
                        message.dnd = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupDNDReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupDNDReq} SetGroupDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupDNDReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupDNDReq message.
         * @function verify
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupDNDReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.dnd != null && message.hasOwnProperty("dnd"))
                if (typeof message.dnd !== "boolean")
                    return "dnd: boolean expected";
            return null;
        };

        /**
         * Creates a SetGroupDNDReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupDNDReq} SetGroupDNDReq
         */
        SetGroupDNDReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupDNDReq)
                return object;
            var message = new $root.pb.SetGroupDNDReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.dnd != null)
                message.dnd = Boolean(object.dnd);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupDNDReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {pb.SetGroupDNDReq} message SetGroupDNDReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupDNDReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.uid = "";
                object.dnd = false;
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.dnd != null && message.hasOwnProperty("dnd"))
                object.dnd = message.dnd;
            return object;
        };

        /**
         * Converts this SetGroupDNDReq to JSON.
         * @function toJSON
         * @memberof pb.SetGroupDNDReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupDNDReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupDNDReq
         * @function getTypeUrl
         * @memberof pb.SetGroupDNDReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupDNDReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupDNDReq";
        };

        return SetGroupDNDReq;
    })();

    pb.SetGroupDNDResp = (function() {

        /**
         * Properties of a SetGroupDNDResp.
         * @memberof pb
         * @interface ISetGroupDNDResp
         * @property {number|null} [code] SetGroupDNDResp code
         * @property {string|null} [msg] SetGroupDNDResp msg
         */

        /**
         * Constructs a new SetGroupDNDResp.
         * @memberof pb
         * @classdesc Represents a SetGroupDNDResp.
         * @implements ISetGroupDNDResp
         * @constructor
         * @param {pb.ISetGroupDNDResp=} [properties] Properties to set
         */
        function SetGroupDNDResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupDNDResp code.
         * @member {number} code
         * @memberof pb.SetGroupDNDResp
         * @instance
         */
        SetGroupDNDResp.prototype.code = 0;

        /**
         * SetGroupDNDResp msg.
         * @member {string} msg
         * @memberof pb.SetGroupDNDResp
         * @instance
         */
        SetGroupDNDResp.prototype.msg = "";

        /**
         * Creates a new SetGroupDNDResp instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {pb.ISetGroupDNDResp=} [properties] Properties to set
         * @returns {pb.SetGroupDNDResp} SetGroupDNDResp instance
         */
        SetGroupDNDResp.create = function create(properties) {
            return new SetGroupDNDResp(properties);
        };

        /**
         * Encodes the specified SetGroupDNDResp message. Does not implicitly {@link pb.SetGroupDNDResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {pb.ISetGroupDNDResp} message SetGroupDNDResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupDNDResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SetGroupDNDResp message, length delimited. Does not implicitly {@link pb.SetGroupDNDResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {pb.ISetGroupDNDResp} message SetGroupDNDResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupDNDResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupDNDResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupDNDResp} SetGroupDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupDNDResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupDNDResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupDNDResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupDNDResp} SetGroupDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupDNDResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupDNDResp message.
         * @function verify
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupDNDResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SetGroupDNDResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupDNDResp} SetGroupDNDResp
         */
        SetGroupDNDResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupDNDResp)
                return object;
            var message = new $root.pb.SetGroupDNDResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupDNDResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {pb.SetGroupDNDResp} message SetGroupDNDResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupDNDResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SetGroupDNDResp to JSON.
         * @function toJSON
         * @memberof pb.SetGroupDNDResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupDNDResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupDNDResp
         * @function getTypeUrl
         * @memberof pb.SetGroupDNDResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupDNDResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupDNDResp";
        };

        return SetGroupDNDResp;
    })();

    pb.SetGroupMuteReq = (function() {

        /**
         * Properties of a SetGroupMuteReq.
         * @memberof pb
         * @interface ISetGroupMuteReq
         * @property {string|null} [groupId] SetGroupMuteReq groupId
         * @property {string|null} [operatorUid] SetGroupMuteReq operatorUid
         * @property {string|null} [targetUid] SetGroupMuteReq targetUid
         * @property {boolean|null} [mute] SetGroupMuteReq mute
         */

        /**
         * Constructs a new SetGroupMuteReq.
         * @memberof pb
         * @classdesc Represents a SetGroupMuteReq.
         * @implements ISetGroupMuteReq
         * @constructor
         * @param {pb.ISetGroupMuteReq=} [properties] Properties to set
         */
        function SetGroupMuteReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupMuteReq groupId.
         * @member {string} groupId
         * @memberof pb.SetGroupMuteReq
         * @instance
         */
        SetGroupMuteReq.prototype.groupId = "";

        /**
         * SetGroupMuteReq operatorUid.
         * @member {string} operatorUid
         * @memberof pb.SetGroupMuteReq
         * @instance
         */
        SetGroupMuteReq.prototype.operatorUid = "";

        /**
         * SetGroupMuteReq targetUid.
         * @member {string} targetUid
         * @memberof pb.SetGroupMuteReq
         * @instance
         */
        SetGroupMuteReq.prototype.targetUid = "";

        /**
         * SetGroupMuteReq mute.
         * @member {boolean} mute
         * @memberof pb.SetGroupMuteReq
         * @instance
         */
        SetGroupMuteReq.prototype.mute = false;

        /**
         * Creates a new SetGroupMuteReq instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {pb.ISetGroupMuteReq=} [properties] Properties to set
         * @returns {pb.SetGroupMuteReq} SetGroupMuteReq instance
         */
        SetGroupMuteReq.create = function create(properties) {
            return new SetGroupMuteReq(properties);
        };

        /**
         * Encodes the specified SetGroupMuteReq message. Does not implicitly {@link pb.SetGroupMuteReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {pb.ISetGroupMuteReq} message SetGroupMuteReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupMuteReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.operatorUid != null && Object.hasOwnProperty.call(message, "operatorUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.operatorUid);
            if (message.targetUid != null && Object.hasOwnProperty.call(message, "targetUid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUid);
            if (message.mute != null && Object.hasOwnProperty.call(message, "mute"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.mute);
            return writer;
        };

        /**
         * Encodes the specified SetGroupMuteReq message, length delimited. Does not implicitly {@link pb.SetGroupMuteReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {pb.ISetGroupMuteReq} message SetGroupMuteReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupMuteReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupMuteReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupMuteReq} SetGroupMuteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupMuteReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupMuteReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.operatorUid = reader.string();
                        break;
                    }
                case 3: {
                        message.targetUid = reader.string();
                        break;
                    }
                case 4: {
                        message.mute = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupMuteReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupMuteReq} SetGroupMuteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupMuteReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupMuteReq message.
         * @function verify
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupMuteReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                if (!$util.isString(message.operatorUid))
                    return "operatorUid: string expected";
            if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                if (!$util.isString(message.targetUid))
                    return "targetUid: string expected";
            if (message.mute != null && message.hasOwnProperty("mute"))
                if (typeof message.mute !== "boolean")
                    return "mute: boolean expected";
            return null;
        };

        /**
         * Creates a SetGroupMuteReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupMuteReq} SetGroupMuteReq
         */
        SetGroupMuteReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupMuteReq)
                return object;
            var message = new $root.pb.SetGroupMuteReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.operatorUid != null)
                message.operatorUid = String(object.operatorUid);
            if (object.targetUid != null)
                message.targetUid = String(object.targetUid);
            if (object.mute != null)
                message.mute = Boolean(object.mute);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupMuteReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {pb.SetGroupMuteReq} message SetGroupMuteReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupMuteReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.operatorUid = "";
                object.targetUid = "";
                object.mute = false;
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                object.operatorUid = message.operatorUid;
            if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                object.targetUid = message.targetUid;
            if (message.mute != null && message.hasOwnProperty("mute"))
                object.mute = message.mute;
            return object;
        };

        /**
         * Converts this SetGroupMuteReq to JSON.
         * @function toJSON
         * @memberof pb.SetGroupMuteReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupMuteReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupMuteReq
         * @function getTypeUrl
         * @memberof pb.SetGroupMuteReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupMuteReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupMuteReq";
        };

        return SetGroupMuteReq;
    })();

    pb.SetGroupMuteResp = (function() {

        /**
         * Properties of a SetGroupMuteResp.
         * @memberof pb
         * @interface ISetGroupMuteResp
         * @property {number|null} [code] SetGroupMuteResp code
         * @property {string|null} [msg] SetGroupMuteResp msg
         */

        /**
         * Constructs a new SetGroupMuteResp.
         * @memberof pb
         * @classdesc Represents a SetGroupMuteResp.
         * @implements ISetGroupMuteResp
         * @constructor
         * @param {pb.ISetGroupMuteResp=} [properties] Properties to set
         */
        function SetGroupMuteResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupMuteResp code.
         * @member {number} code
         * @memberof pb.SetGroupMuteResp
         * @instance
         */
        SetGroupMuteResp.prototype.code = 0;

        /**
         * SetGroupMuteResp msg.
         * @member {string} msg
         * @memberof pb.SetGroupMuteResp
         * @instance
         */
        SetGroupMuteResp.prototype.msg = "";

        /**
         * Creates a new SetGroupMuteResp instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {pb.ISetGroupMuteResp=} [properties] Properties to set
         * @returns {pb.SetGroupMuteResp} SetGroupMuteResp instance
         */
        SetGroupMuteResp.create = function create(properties) {
            return new SetGroupMuteResp(properties);
        };

        /**
         * Encodes the specified SetGroupMuteResp message. Does not implicitly {@link pb.SetGroupMuteResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {pb.ISetGroupMuteResp} message SetGroupMuteResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupMuteResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SetGroupMuteResp message, length delimited. Does not implicitly {@link pb.SetGroupMuteResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {pb.ISetGroupMuteResp} message SetGroupMuteResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupMuteResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupMuteResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupMuteResp} SetGroupMuteResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupMuteResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupMuteResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupMuteResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupMuteResp} SetGroupMuteResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupMuteResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupMuteResp message.
         * @function verify
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupMuteResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SetGroupMuteResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupMuteResp} SetGroupMuteResp
         */
        SetGroupMuteResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupMuteResp)
                return object;
            var message = new $root.pb.SetGroupMuteResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupMuteResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {pb.SetGroupMuteResp} message SetGroupMuteResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupMuteResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SetGroupMuteResp to JSON.
         * @function toJSON
         * @memberof pb.SetGroupMuteResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupMuteResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupMuteResp
         * @function getTypeUrl
         * @memberof pb.SetGroupMuteResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupMuteResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupMuteResp";
        };

        return SetGroupMuteResp;
    })();

    pb.SetGroupAdminReq = (function() {

        /**
         * Properties of a SetGroupAdminReq.
         * @memberof pb
         * @interface ISetGroupAdminReq
         * @property {string|null} [groupId] SetGroupAdminReq groupId
         * @property {string|null} [operatorUid] SetGroupAdminReq operatorUid
         * @property {string|null} [targetUid] SetGroupAdminReq targetUid
         * @property {boolean|null} [setAdmin] SetGroupAdminReq setAdmin
         */

        /**
         * Constructs a new SetGroupAdminReq.
         * @memberof pb
         * @classdesc Represents a SetGroupAdminReq.
         * @implements ISetGroupAdminReq
         * @constructor
         * @param {pb.ISetGroupAdminReq=} [properties] Properties to set
         */
        function SetGroupAdminReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupAdminReq groupId.
         * @member {string} groupId
         * @memberof pb.SetGroupAdminReq
         * @instance
         */
        SetGroupAdminReq.prototype.groupId = "";

        /**
         * SetGroupAdminReq operatorUid.
         * @member {string} operatorUid
         * @memberof pb.SetGroupAdminReq
         * @instance
         */
        SetGroupAdminReq.prototype.operatorUid = "";

        /**
         * SetGroupAdminReq targetUid.
         * @member {string} targetUid
         * @memberof pb.SetGroupAdminReq
         * @instance
         */
        SetGroupAdminReq.prototype.targetUid = "";

        /**
         * SetGroupAdminReq setAdmin.
         * @member {boolean} setAdmin
         * @memberof pb.SetGroupAdminReq
         * @instance
         */
        SetGroupAdminReq.prototype.setAdmin = false;

        /**
         * Creates a new SetGroupAdminReq instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {pb.ISetGroupAdminReq=} [properties] Properties to set
         * @returns {pb.SetGroupAdminReq} SetGroupAdminReq instance
         */
        SetGroupAdminReq.create = function create(properties) {
            return new SetGroupAdminReq(properties);
        };

        /**
         * Encodes the specified SetGroupAdminReq message. Does not implicitly {@link pb.SetGroupAdminReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {pb.ISetGroupAdminReq} message SetGroupAdminReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupAdminReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.operatorUid != null && Object.hasOwnProperty.call(message, "operatorUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.operatorUid);
            if (message.targetUid != null && Object.hasOwnProperty.call(message, "targetUid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUid);
            if (message.setAdmin != null && Object.hasOwnProperty.call(message, "setAdmin"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.setAdmin);
            return writer;
        };

        /**
         * Encodes the specified SetGroupAdminReq message, length delimited. Does not implicitly {@link pb.SetGroupAdminReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {pb.ISetGroupAdminReq} message SetGroupAdminReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupAdminReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupAdminReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupAdminReq} SetGroupAdminReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupAdminReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupAdminReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.operatorUid = reader.string();
                        break;
                    }
                case 3: {
                        message.targetUid = reader.string();
                        break;
                    }
                case 4: {
                        message.setAdmin = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupAdminReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupAdminReq} SetGroupAdminReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupAdminReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupAdminReq message.
         * @function verify
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupAdminReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                if (!$util.isString(message.operatorUid))
                    return "operatorUid: string expected";
            if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                if (!$util.isString(message.targetUid))
                    return "targetUid: string expected";
            if (message.setAdmin != null && message.hasOwnProperty("setAdmin"))
                if (typeof message.setAdmin !== "boolean")
                    return "setAdmin: boolean expected";
            return null;
        };

        /**
         * Creates a SetGroupAdminReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupAdminReq} SetGroupAdminReq
         */
        SetGroupAdminReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupAdminReq)
                return object;
            var message = new $root.pb.SetGroupAdminReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.operatorUid != null)
                message.operatorUid = String(object.operatorUid);
            if (object.targetUid != null)
                message.targetUid = String(object.targetUid);
            if (object.setAdmin != null)
                message.setAdmin = Boolean(object.setAdmin);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupAdminReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {pb.SetGroupAdminReq} message SetGroupAdminReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupAdminReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.operatorUid = "";
                object.targetUid = "";
                object.setAdmin = false;
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                object.operatorUid = message.operatorUid;
            if (message.targetUid != null && message.hasOwnProperty("targetUid"))
                object.targetUid = message.targetUid;
            if (message.setAdmin != null && message.hasOwnProperty("setAdmin"))
                object.setAdmin = message.setAdmin;
            return object;
        };

        /**
         * Converts this SetGroupAdminReq to JSON.
         * @function toJSON
         * @memberof pb.SetGroupAdminReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupAdminReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupAdminReq
         * @function getTypeUrl
         * @memberof pb.SetGroupAdminReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupAdminReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupAdminReq";
        };

        return SetGroupAdminReq;
    })();

    pb.SetGroupAdminResp = (function() {

        /**
         * Properties of a SetGroupAdminResp.
         * @memberof pb
         * @interface ISetGroupAdminResp
         * @property {number|null} [code] SetGroupAdminResp code
         * @property {string|null} [msg] SetGroupAdminResp msg
         */

        /**
         * Constructs a new SetGroupAdminResp.
         * @memberof pb
         * @classdesc Represents a SetGroupAdminResp.
         * @implements ISetGroupAdminResp
         * @constructor
         * @param {pb.ISetGroupAdminResp=} [properties] Properties to set
         */
        function SetGroupAdminResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetGroupAdminResp code.
         * @member {number} code
         * @memberof pb.SetGroupAdminResp
         * @instance
         */
        SetGroupAdminResp.prototype.code = 0;

        /**
         * SetGroupAdminResp msg.
         * @member {string} msg
         * @memberof pb.SetGroupAdminResp
         * @instance
         */
        SetGroupAdminResp.prototype.msg = "";

        /**
         * Creates a new SetGroupAdminResp instance using the specified properties.
         * @function create
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {pb.ISetGroupAdminResp=} [properties] Properties to set
         * @returns {pb.SetGroupAdminResp} SetGroupAdminResp instance
         */
        SetGroupAdminResp.create = function create(properties) {
            return new SetGroupAdminResp(properties);
        };

        /**
         * Encodes the specified SetGroupAdminResp message. Does not implicitly {@link pb.SetGroupAdminResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {pb.ISetGroupAdminResp} message SetGroupAdminResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupAdminResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SetGroupAdminResp message, length delimited. Does not implicitly {@link pb.SetGroupAdminResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {pb.ISetGroupAdminResp} message SetGroupAdminResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupAdminResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupAdminResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetGroupAdminResp} SetGroupAdminResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupAdminResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetGroupAdminResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetGroupAdminResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetGroupAdminResp} SetGroupAdminResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupAdminResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetGroupAdminResp message.
         * @function verify
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetGroupAdminResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SetGroupAdminResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetGroupAdminResp} SetGroupAdminResp
         */
        SetGroupAdminResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetGroupAdminResp)
                return object;
            var message = new $root.pb.SetGroupAdminResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupAdminResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {pb.SetGroupAdminResp} message SetGroupAdminResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetGroupAdminResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SetGroupAdminResp to JSON.
         * @function toJSON
         * @memberof pb.SetGroupAdminResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupAdminResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupAdminResp
         * @function getTypeUrl
         * @memberof pb.SetGroupAdminResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupAdminResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetGroupAdminResp";
        };

        return SetGroupAdminResp;
    })();

    pb.DismissGroupReq = (function() {

        /**
         * Properties of a DismissGroupReq.
         * @memberof pb
         * @interface IDismissGroupReq
         * @property {string|null} [groupId] DismissGroupReq groupId
         * @property {string|null} [operatorUid] DismissGroupReq operatorUid
         */

        /**
         * Constructs a new DismissGroupReq.
         * @memberof pb
         * @classdesc Represents a DismissGroupReq.
         * @implements IDismissGroupReq
         * @constructor
         * @param {pb.IDismissGroupReq=} [properties] Properties to set
         */
        function DismissGroupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissGroupReq groupId.
         * @member {string} groupId
         * @memberof pb.DismissGroupReq
         * @instance
         */
        DismissGroupReq.prototype.groupId = "";

        /**
         * DismissGroupReq operatorUid.
         * @member {string} operatorUid
         * @memberof pb.DismissGroupReq
         * @instance
         */
        DismissGroupReq.prototype.operatorUid = "";

        /**
         * Creates a new DismissGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.DismissGroupReq
         * @static
         * @param {pb.IDismissGroupReq=} [properties] Properties to set
         * @returns {pb.DismissGroupReq} DismissGroupReq instance
         */
        DismissGroupReq.create = function create(properties) {
            return new DismissGroupReq(properties);
        };

        /**
         * Encodes the specified DismissGroupReq message. Does not implicitly {@link pb.DismissGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.DismissGroupReq
         * @static
         * @param {pb.IDismissGroupReq} message DismissGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.operatorUid != null && Object.hasOwnProperty.call(message, "operatorUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.operatorUid);
            return writer;
        };

        /**
         * Encodes the specified DismissGroupReq message, length delimited. Does not implicitly {@link pb.DismissGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.DismissGroupReq
         * @static
         * @param {pb.IDismissGroupReq} message DismissGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.DismissGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.DismissGroupReq} DismissGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.DismissGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.operatorUid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DismissGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.DismissGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.DismissGroupReq} DismissGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissGroupReq message.
         * @function verify
         * @memberof pb.DismissGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                if (!$util.isString(message.operatorUid))
                    return "operatorUid: string expected";
            return null;
        };

        /**
         * Creates a DismissGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.DismissGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.DismissGroupReq} DismissGroupReq
         */
        DismissGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.DismissGroupReq)
                return object;
            var message = new $root.pb.DismissGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.operatorUid != null)
                message.operatorUid = String(object.operatorUid);
            return message;
        };

        /**
         * Creates a plain object from a DismissGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.DismissGroupReq
         * @static
         * @param {pb.DismissGroupReq} message DismissGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.operatorUid = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.operatorUid != null && message.hasOwnProperty("operatorUid"))
                object.operatorUid = message.operatorUid;
            return object;
        };

        /**
         * Converts this DismissGroupReq to JSON.
         * @function toJSON
         * @memberof pb.DismissGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DismissGroupReq
         * @function getTypeUrl
         * @memberof pb.DismissGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DismissGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.DismissGroupReq";
        };

        return DismissGroupReq;
    })();

    pb.DismissGroupResp = (function() {

        /**
         * Properties of a DismissGroupResp.
         * @memberof pb
         * @interface IDismissGroupResp
         * @property {number|null} [code] DismissGroupResp code
         * @property {string|null} [msg] DismissGroupResp msg
         */

        /**
         * Constructs a new DismissGroupResp.
         * @memberof pb
         * @classdesc Represents a DismissGroupResp.
         * @implements IDismissGroupResp
         * @constructor
         * @param {pb.IDismissGroupResp=} [properties] Properties to set
         */
        function DismissGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissGroupResp code.
         * @member {number} code
         * @memberof pb.DismissGroupResp
         * @instance
         */
        DismissGroupResp.prototype.code = 0;

        /**
         * DismissGroupResp msg.
         * @member {string} msg
         * @memberof pb.DismissGroupResp
         * @instance
         */
        DismissGroupResp.prototype.msg = "";

        /**
         * Creates a new DismissGroupResp instance using the specified properties.
         * @function create
         * @memberof pb.DismissGroupResp
         * @static
         * @param {pb.IDismissGroupResp=} [properties] Properties to set
         * @returns {pb.DismissGroupResp} DismissGroupResp instance
         */
        DismissGroupResp.create = function create(properties) {
            return new DismissGroupResp(properties);
        };

        /**
         * Encodes the specified DismissGroupResp message. Does not implicitly {@link pb.DismissGroupResp.verify|verify} messages.
         * @function encode
         * @memberof pb.DismissGroupResp
         * @static
         * @param {pb.IDismissGroupResp} message DismissGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified DismissGroupResp message, length delimited. Does not implicitly {@link pb.DismissGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.DismissGroupResp
         * @static
         * @param {pb.IDismissGroupResp} message DismissGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.DismissGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.DismissGroupResp} DismissGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.DismissGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DismissGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.DismissGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.DismissGroupResp} DismissGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissGroupResp message.
         * @function verify
         * @memberof pb.DismissGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a DismissGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.DismissGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.DismissGroupResp} DismissGroupResp
         */
        DismissGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.DismissGroupResp)
                return object;
            var message = new $root.pb.DismissGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a DismissGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.DismissGroupResp
         * @static
         * @param {pb.DismissGroupResp} message DismissGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this DismissGroupResp to JSON.
         * @function toJSON
         * @memberof pb.DismissGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DismissGroupResp
         * @function getTypeUrl
         * @memberof pb.DismissGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DismissGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.DismissGroupResp";
        };

        return DismissGroupResp;
    })();

    pb.GroupMemberRoleReq = (function() {

        /**
         * Properties of a GroupMemberRoleReq.
         * @memberof pb
         * @interface IGroupMemberRoleReq
         * @property {string|null} [groupId] GroupMemberRoleReq groupId
         * @property {string|null} [uid] GroupMemberRoleReq uid
         */

        /**
         * Constructs a new GroupMemberRoleReq.
         * @memberof pb
         * @classdesc Represents a GroupMemberRoleReq.
         * @implements IGroupMemberRoleReq
         * @constructor
         * @param {pb.IGroupMemberRoleReq=} [properties] Properties to set
         */
        function GroupMemberRoleReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMemberRoleReq groupId.
         * @member {string} groupId
         * @memberof pb.GroupMemberRoleReq
         * @instance
         */
        GroupMemberRoleReq.prototype.groupId = "";

        /**
         * GroupMemberRoleReq uid.
         * @member {string} uid
         * @memberof pb.GroupMemberRoleReq
         * @instance
         */
        GroupMemberRoleReq.prototype.uid = "";

        /**
         * Creates a new GroupMemberRoleReq instance using the specified properties.
         * @function create
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {pb.IGroupMemberRoleReq=} [properties] Properties to set
         * @returns {pb.GroupMemberRoleReq} GroupMemberRoleReq instance
         */
        GroupMemberRoleReq.create = function create(properties) {
            return new GroupMemberRoleReq(properties);
        };

        /**
         * Encodes the specified GroupMemberRoleReq message. Does not implicitly {@link pb.GroupMemberRoleReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {pb.IGroupMemberRoleReq} message GroupMemberRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberRoleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GroupMemberRoleReq message, length delimited. Does not implicitly {@link pb.GroupMemberRoleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {pb.IGroupMemberRoleReq} message GroupMemberRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberRoleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMemberRoleReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMemberRoleReq} GroupMemberRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberRoleReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMemberRoleReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMemberRoleReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMemberRoleReq} GroupMemberRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberRoleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMemberRoleReq message.
         * @function verify
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMemberRoleReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a GroupMemberRoleReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMemberRoleReq} GroupMemberRoleReq
         */
        GroupMemberRoleReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMemberRoleReq)
                return object;
            var message = new $root.pb.GroupMemberRoleReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a GroupMemberRoleReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {pb.GroupMemberRoleReq} message GroupMemberRoleReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMemberRoleReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.uid = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this GroupMemberRoleReq to JSON.
         * @function toJSON
         * @memberof pb.GroupMemberRoleReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMemberRoleReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMemberRoleReq
         * @function getTypeUrl
         * @memberof pb.GroupMemberRoleReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMemberRoleReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMemberRoleReq";
        };

        return GroupMemberRoleReq;
    })();

    pb.GroupMemberRoleResp = (function() {

        /**
         * Properties of a GroupMemberRoleResp.
         * @memberof pb
         * @interface IGroupMemberRoleResp
         * @property {number|null} [code] GroupMemberRoleResp code
         * @property {string|null} [msg] GroupMemberRoleResp msg
         * @property {string|null} [role] GroupMemberRoleResp role
         */

        /**
         * Constructs a new GroupMemberRoleResp.
         * @memberof pb
         * @classdesc Represents a GroupMemberRoleResp.
         * @implements IGroupMemberRoleResp
         * @constructor
         * @param {pb.IGroupMemberRoleResp=} [properties] Properties to set
         */
        function GroupMemberRoleResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMemberRoleResp code.
         * @member {number} code
         * @memberof pb.GroupMemberRoleResp
         * @instance
         */
        GroupMemberRoleResp.prototype.code = 0;

        /**
         * GroupMemberRoleResp msg.
         * @member {string} msg
         * @memberof pb.GroupMemberRoleResp
         * @instance
         */
        GroupMemberRoleResp.prototype.msg = "";

        /**
         * GroupMemberRoleResp role.
         * @member {string} role
         * @memberof pb.GroupMemberRoleResp
         * @instance
         */
        GroupMemberRoleResp.prototype.role = "";

        /**
         * Creates a new GroupMemberRoleResp instance using the specified properties.
         * @function create
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {pb.IGroupMemberRoleResp=} [properties] Properties to set
         * @returns {pb.GroupMemberRoleResp} GroupMemberRoleResp instance
         */
        GroupMemberRoleResp.create = function create(properties) {
            return new GroupMemberRoleResp(properties);
        };

        /**
         * Encodes the specified GroupMemberRoleResp message. Does not implicitly {@link pb.GroupMemberRoleResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {pb.IGroupMemberRoleResp} message GroupMemberRoleResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberRoleResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.role);
            return writer;
        };

        /**
         * Encodes the specified GroupMemberRoleResp message, length delimited. Does not implicitly {@link pb.GroupMemberRoleResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {pb.IGroupMemberRoleResp} message GroupMemberRoleResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberRoleResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMemberRoleResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMemberRoleResp} GroupMemberRoleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberRoleResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMemberRoleResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.role = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMemberRoleResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMemberRoleResp} GroupMemberRoleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberRoleResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMemberRoleResp message.
         * @function verify
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMemberRoleResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isString(message.role))
                    return "role: string expected";
            return null;
        };

        /**
         * Creates a GroupMemberRoleResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMemberRoleResp} GroupMemberRoleResp
         */
        GroupMemberRoleResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMemberRoleResp)
                return object;
            var message = new $root.pb.GroupMemberRoleResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.role != null)
                message.role = String(object.role);
            return message;
        };

        /**
         * Creates a plain object from a GroupMemberRoleResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {pb.GroupMemberRoleResp} message GroupMemberRoleResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMemberRoleResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.role = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            return object;
        };

        /**
         * Converts this GroupMemberRoleResp to JSON.
         * @function toJSON
         * @memberof pb.GroupMemberRoleResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMemberRoleResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMemberRoleResp
         * @function getTypeUrl
         * @memberof pb.GroupMemberRoleResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMemberRoleResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMemberRoleResp";
        };

        return GroupMemberRoleResp;
    })();

    pb.GroupMemberInfoReq = (function() {

        /**
         * Properties of a GroupMemberInfoReq.
         * @memberof pb
         * @interface IGroupMemberInfoReq
         * @property {string|null} [groupId] GroupMemberInfoReq groupId
         * @property {string|null} [uid] GroupMemberInfoReq uid
         */

        /**
         * Constructs a new GroupMemberInfoReq.
         * @memberof pb
         * @classdesc Represents a GroupMemberInfoReq.
         * @implements IGroupMemberInfoReq
         * @constructor
         * @param {pb.IGroupMemberInfoReq=} [properties] Properties to set
         */
        function GroupMemberInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMemberInfoReq groupId.
         * @member {string} groupId
         * @memberof pb.GroupMemberInfoReq
         * @instance
         */
        GroupMemberInfoReq.prototype.groupId = "";

        /**
         * GroupMemberInfoReq uid.
         * @member {string} uid
         * @memberof pb.GroupMemberInfoReq
         * @instance
         */
        GroupMemberInfoReq.prototype.uid = "";

        /**
         * Creates a new GroupMemberInfoReq instance using the specified properties.
         * @function create
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {pb.IGroupMemberInfoReq=} [properties] Properties to set
         * @returns {pb.GroupMemberInfoReq} GroupMemberInfoReq instance
         */
        GroupMemberInfoReq.create = function create(properties) {
            return new GroupMemberInfoReq(properties);
        };

        /**
         * Encodes the specified GroupMemberInfoReq message. Does not implicitly {@link pb.GroupMemberInfoReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {pb.IGroupMemberInfoReq} message GroupMemberInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GroupMemberInfoReq message, length delimited. Does not implicitly {@link pb.GroupMemberInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {pb.IGroupMemberInfoReq} message GroupMemberInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMemberInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMemberInfoReq} GroupMemberInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberInfoReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMemberInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMemberInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMemberInfoReq} GroupMemberInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMemberInfoReq message.
         * @function verify
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMemberInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a GroupMemberInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMemberInfoReq} GroupMemberInfoReq
         */
        GroupMemberInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMemberInfoReq)
                return object;
            var message = new $root.pb.GroupMemberInfoReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a GroupMemberInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {pb.GroupMemberInfoReq} message GroupMemberInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMemberInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                object.uid = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this GroupMemberInfoReq to JSON.
         * @function toJSON
         * @memberof pb.GroupMemberInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMemberInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMemberInfoReq
         * @function getTypeUrl
         * @memberof pb.GroupMemberInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMemberInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMemberInfoReq";
        };

        return GroupMemberInfoReq;
    })();

    pb.GroupMemberInfoResp = (function() {

        /**
         * Properties of a GroupMemberInfoResp.
         * @memberof pb
         * @interface IGroupMemberInfoResp
         * @property {number|null} [code] GroupMemberInfoResp code
         * @property {string|null} [msg] GroupMemberInfoResp msg
         * @property {string|null} [uid] GroupMemberInfoResp uid
         * @property {string|null} [username] GroupMemberInfoResp username
         * @property {string|null} [nickname] GroupMemberInfoResp nickname
         * @property {string|null} [role] GroupMemberInfoResp role
         * @property {number|Long|null} [joinTime] GroupMemberInfoResp joinTime
         */

        /**
         * Constructs a new GroupMemberInfoResp.
         * @memberof pb
         * @classdesc Represents a GroupMemberInfoResp.
         * @implements IGroupMemberInfoResp
         * @constructor
         * @param {pb.IGroupMemberInfoResp=} [properties] Properties to set
         */
        function GroupMemberInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMemberInfoResp code.
         * @member {number} code
         * @memberof pb.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.code = 0;

        /**
         * GroupMemberInfoResp msg.
         * @member {string} msg
         * @memberof pb.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.msg = "";

        /**
         * GroupMemberInfoResp uid.
         * @member {string} uid
         * @memberof pb.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.uid = "";

        /**
         * GroupMemberInfoResp username.
         * @member {string} username
         * @memberof pb.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.username = "";

        /**
         * GroupMemberInfoResp nickname.
         * @member {string} nickname
         * @memberof pb.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.nickname = "";

        /**
         * GroupMemberInfoResp role.
         * @member {string} role
         * @memberof pb.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.role = "";

        /**
         * GroupMemberInfoResp joinTime.
         * @member {number|Long} joinTime
         * @memberof pb.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.joinTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GroupMemberInfoResp instance using the specified properties.
         * @function create
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {pb.IGroupMemberInfoResp=} [properties] Properties to set
         * @returns {pb.GroupMemberInfoResp} GroupMemberInfoResp instance
         */
        GroupMemberInfoResp.create = function create(properties) {
            return new GroupMemberInfoResp(properties);
        };

        /**
         * Encodes the specified GroupMemberInfoResp message. Does not implicitly {@link pb.GroupMemberInfoResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {pb.IGroupMemberInfoResp} message GroupMemberInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uid);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.username);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nickname);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.role);
            if (message.joinTime != null && Object.hasOwnProperty.call(message, "joinTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.joinTime);
            return writer;
        };

        /**
         * Encodes the specified GroupMemberInfoResp message, length delimited. Does not implicitly {@link pb.GroupMemberInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {pb.IGroupMemberInfoResp} message GroupMemberInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMemberInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMemberInfoResp} GroupMemberInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberInfoResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMemberInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.uid = reader.string();
                        break;
                    }
                case 4: {
                        message.username = reader.string();
                        break;
                    }
                case 5: {
                        message.nickname = reader.string();
                        break;
                    }
                case 6: {
                        message.role = reader.string();
                        break;
                    }
                case 7: {
                        message.joinTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMemberInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMemberInfoResp} GroupMemberInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMemberInfoResp message.
         * @function verify
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMemberInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isString(message.role))
                    return "role: string expected";
            if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                if (!$util.isInteger(message.joinTime) && !(message.joinTime && $util.isInteger(message.joinTime.low) && $util.isInteger(message.joinTime.high)))
                    return "joinTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a GroupMemberInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMemberInfoResp} GroupMemberInfoResp
         */
        GroupMemberInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMemberInfoResp)
                return object;
            var message = new $root.pb.GroupMemberInfoResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.username != null)
                message.username = String(object.username);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.role != null)
                message.role = String(object.role);
            if (object.joinTime != null)
                if ($util.Long)
                    (message.joinTime = $util.Long.fromValue(object.joinTime)).unsigned = false;
                else if (typeof object.joinTime === "string")
                    message.joinTime = parseInt(object.joinTime, 10);
                else if (typeof object.joinTime === "number")
                    message.joinTime = object.joinTime;
                else if (typeof object.joinTime === "object")
                    message.joinTime = new $util.LongBits(object.joinTime.low >>> 0, object.joinTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GroupMemberInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {pb.GroupMemberInfoResp} message GroupMemberInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMemberInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.uid = "";
                object.username = "";
                object.nickname = "";
                object.role = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.joinTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.joinTime = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                if (typeof message.joinTime === "number")
                    object.joinTime = options.longs === String ? String(message.joinTime) : message.joinTime;
                else
                    object.joinTime = options.longs === String ? $util.Long.prototype.toString.call(message.joinTime) : options.longs === Number ? new $util.LongBits(message.joinTime.low >>> 0, message.joinTime.high >>> 0).toNumber() : message.joinTime;
            return object;
        };

        /**
         * Converts this GroupMemberInfoResp to JSON.
         * @function toJSON
         * @memberof pb.GroupMemberInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMemberInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMemberInfoResp
         * @function getTypeUrl
         * @memberof pb.GroupMemberInfoResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMemberInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMemberInfoResp";
        };

        return GroupMemberInfoResp;
    })();

    pb.GroupInviteItem = (function() {

        /**
         * Properties of a GroupInviteItem.
         * @memberof pb
         * @interface IGroupInviteItem
         * @property {string|null} [id] GroupInviteItem id
         * @property {string|null} [groupId] GroupInviteItem groupId
         * @property {string|null} [groupName] GroupInviteItem groupName
         * @property {string|null} [inviterUid] GroupInviteItem inviterUid
         * @property {string|null} [inviteeUid] GroupInviteItem inviteeUid
         * @property {string|null} [status] GroupInviteItem status
         * @property {string|null} [createdAt] GroupInviteItem createdAt
         * @property {string|null} [inviterUsername] GroupInviteItem inviterUsername
         * @property {string|null} [inviteeUsername] GroupInviteItem inviteeUsername
         */

        /**
         * Constructs a new GroupInviteItem.
         * @memberof pb
         * @classdesc Represents a GroupInviteItem.
         * @implements IGroupInviteItem
         * @constructor
         * @param {pb.IGroupInviteItem=} [properties] Properties to set
         */
        function GroupInviteItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupInviteItem id.
         * @member {string} id
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.id = "";

        /**
         * GroupInviteItem groupId.
         * @member {string} groupId
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.groupId = "";

        /**
         * GroupInviteItem groupName.
         * @member {string} groupName
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.groupName = "";

        /**
         * GroupInviteItem inviterUid.
         * @member {string} inviterUid
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.inviterUid = "";

        /**
         * GroupInviteItem inviteeUid.
         * @member {string} inviteeUid
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.inviteeUid = "";

        /**
         * GroupInviteItem status.
         * @member {string} status
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.status = "";

        /**
         * GroupInviteItem createdAt.
         * @member {string} createdAt
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.createdAt = "";

        /**
         * GroupInviteItem inviterUsername.
         * @member {string} inviterUsername
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.inviterUsername = "";

        /**
         * GroupInviteItem inviteeUsername.
         * @member {string} inviteeUsername
         * @memberof pb.GroupInviteItem
         * @instance
         */
        GroupInviteItem.prototype.inviteeUsername = "";

        /**
         * Creates a new GroupInviteItem instance using the specified properties.
         * @function create
         * @memberof pb.GroupInviteItem
         * @static
         * @param {pb.IGroupInviteItem=} [properties] Properties to set
         * @returns {pb.GroupInviteItem} GroupInviteItem instance
         */
        GroupInviteItem.create = function create(properties) {
            return new GroupInviteItem(properties);
        };

        /**
         * Encodes the specified GroupInviteItem message. Does not implicitly {@link pb.GroupInviteItem.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupInviteItem
         * @static
         * @param {pb.IGroupInviteItem} message GroupInviteItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInviteItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.groupId);
            if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.groupName);
            if (message.inviterUid != null && Object.hasOwnProperty.call(message, "inviterUid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.inviterUid);
            if (message.inviteeUid != null && Object.hasOwnProperty.call(message, "inviteeUid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.inviteeUid);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.status);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.createdAt);
            if (message.inviterUsername != null && Object.hasOwnProperty.call(message, "inviterUsername"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.inviterUsername);
            if (message.inviteeUsername != null && Object.hasOwnProperty.call(message, "inviteeUsername"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.inviteeUsername);
            return writer;
        };

        /**
         * Encodes the specified GroupInviteItem message, length delimited. Does not implicitly {@link pb.GroupInviteItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupInviteItem
         * @static
         * @param {pb.IGroupInviteItem} message GroupInviteItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInviteItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInviteItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupInviteItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupInviteItem} GroupInviteItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInviteItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupInviteItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.groupId = reader.string();
                        break;
                    }
                case 3: {
                        message.groupName = reader.string();
                        break;
                    }
                case 4: {
                        message.inviterUid = reader.string();
                        break;
                    }
                case 5: {
                        message.inviteeUid = reader.string();
                        break;
                    }
                case 6: {
                        message.status = reader.string();
                        break;
                    }
                case 7: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 8: {
                        message.inviterUsername = reader.string();
                        break;
                    }
                case 9: {
                        message.inviteeUsername = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupInviteItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupInviteItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupInviteItem} GroupInviteItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInviteItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupInviteItem message.
         * @function verify
         * @memberof pb.GroupInviteItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupInviteItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                if (!$util.isString(message.groupName))
                    return "groupName: string expected";
            if (message.inviterUid != null && message.hasOwnProperty("inviterUid"))
                if (!$util.isString(message.inviterUid))
                    return "inviterUid: string expected";
            if (message.inviteeUid != null && message.hasOwnProperty("inviteeUid"))
                if (!$util.isString(message.inviteeUid))
                    return "inviteeUid: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.inviterUsername != null && message.hasOwnProperty("inviterUsername"))
                if (!$util.isString(message.inviterUsername))
                    return "inviterUsername: string expected";
            if (message.inviteeUsername != null && message.hasOwnProperty("inviteeUsername"))
                if (!$util.isString(message.inviteeUsername))
                    return "inviteeUsername: string expected";
            return null;
        };

        /**
         * Creates a GroupInviteItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupInviteItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupInviteItem} GroupInviteItem
         */
        GroupInviteItem.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupInviteItem)
                return object;
            var message = new $root.pb.GroupInviteItem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.groupName != null)
                message.groupName = String(object.groupName);
            if (object.inviterUid != null)
                message.inviterUid = String(object.inviterUid);
            if (object.inviteeUid != null)
                message.inviteeUid = String(object.inviteeUid);
            if (object.status != null)
                message.status = String(object.status);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.inviterUsername != null)
                message.inviterUsername = String(object.inviterUsername);
            if (object.inviteeUsername != null)
                message.inviteeUsername = String(object.inviteeUsername);
            return message;
        };

        /**
         * Creates a plain object from a GroupInviteItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupInviteItem
         * @static
         * @param {pb.GroupInviteItem} message GroupInviteItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupInviteItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.groupId = "";
                object.groupName = "";
                object.inviterUid = "";
                object.inviteeUid = "";
                object.status = "";
                object.createdAt = "";
                object.inviterUsername = "";
                object.inviteeUsername = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                object.groupName = message.groupName;
            if (message.inviterUid != null && message.hasOwnProperty("inviterUid"))
                object.inviterUid = message.inviterUid;
            if (message.inviteeUid != null && message.hasOwnProperty("inviteeUid"))
                object.inviteeUid = message.inviteeUid;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.inviterUsername != null && message.hasOwnProperty("inviterUsername"))
                object.inviterUsername = message.inviterUsername;
            if (message.inviteeUsername != null && message.hasOwnProperty("inviteeUsername"))
                object.inviteeUsername = message.inviteeUsername;
            return object;
        };

        /**
         * Converts this GroupInviteItem to JSON.
         * @function toJSON
         * @memberof pb.GroupInviteItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInviteItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupInviteItem
         * @function getTypeUrl
         * @memberof pb.GroupInviteItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupInviteItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupInviteItem";
        };

        return GroupInviteItem;
    })();

    pb.GroupInviteListReq = (function() {

        /**
         * Properties of a GroupInviteListReq.
         * @memberof pb
         * @interface IGroupInviteListReq
         * @property {string|null} [uid] GroupInviteListReq uid
         * @property {string|null} [token] GroupInviteListReq token
         */

        /**
         * Constructs a new GroupInviteListReq.
         * @memberof pb
         * @classdesc Represents a GroupInviteListReq.
         * @implements IGroupInviteListReq
         * @constructor
         * @param {pb.IGroupInviteListReq=} [properties] Properties to set
         */
        function GroupInviteListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupInviteListReq uid.
         * @member {string} uid
         * @memberof pb.GroupInviteListReq
         * @instance
         */
        GroupInviteListReq.prototype.uid = "";

        /**
         * GroupInviteListReq token.
         * @member {string} token
         * @memberof pb.GroupInviteListReq
         * @instance
         */
        GroupInviteListReq.prototype.token = "";

        /**
         * Creates a new GroupInviteListReq instance using the specified properties.
         * @function create
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {pb.IGroupInviteListReq=} [properties] Properties to set
         * @returns {pb.GroupInviteListReq} GroupInviteListReq instance
         */
        GroupInviteListReq.create = function create(properties) {
            return new GroupInviteListReq(properties);
        };

        /**
         * Encodes the specified GroupInviteListReq message. Does not implicitly {@link pb.GroupInviteListReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {pb.IGroupInviteListReq} message GroupInviteListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInviteListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified GroupInviteListReq message, length delimited. Does not implicitly {@link pb.GroupInviteListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {pb.IGroupInviteListReq} message GroupInviteListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInviteListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInviteListReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupInviteListReq} GroupInviteListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInviteListReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupInviteListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupInviteListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupInviteListReq} GroupInviteListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInviteListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupInviteListReq message.
         * @function verify
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupInviteListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a GroupInviteListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupInviteListReq} GroupInviteListReq
         */
        GroupInviteListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupInviteListReq)
                return object;
            var message = new $root.pb.GroupInviteListReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a GroupInviteListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {pb.GroupInviteListReq} message GroupInviteListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupInviteListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.token = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this GroupInviteListReq to JSON.
         * @function toJSON
         * @memberof pb.GroupInviteListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInviteListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupInviteListReq
         * @function getTypeUrl
         * @memberof pb.GroupInviteListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupInviteListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupInviteListReq";
        };

        return GroupInviteListReq;
    })();

    pb.GroupInviteListResp = (function() {

        /**
         * Properties of a GroupInviteListResp.
         * @memberof pb
         * @interface IGroupInviteListResp
         * @property {number|null} [code] GroupInviteListResp code
         * @property {string|null} [msg] GroupInviteListResp msg
         * @property {Array.<pb.IGroupInviteItem>|null} [items] GroupInviteListResp items
         */

        /**
         * Constructs a new GroupInviteListResp.
         * @memberof pb
         * @classdesc Represents a GroupInviteListResp.
         * @implements IGroupInviteListResp
         * @constructor
         * @param {pb.IGroupInviteListResp=} [properties] Properties to set
         */
        function GroupInviteListResp(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupInviteListResp code.
         * @member {number} code
         * @memberof pb.GroupInviteListResp
         * @instance
         */
        GroupInviteListResp.prototype.code = 0;

        /**
         * GroupInviteListResp msg.
         * @member {string} msg
         * @memberof pb.GroupInviteListResp
         * @instance
         */
        GroupInviteListResp.prototype.msg = "";

        /**
         * GroupInviteListResp items.
         * @member {Array.<pb.IGroupInviteItem>} items
         * @memberof pb.GroupInviteListResp
         * @instance
         */
        GroupInviteListResp.prototype.items = $util.emptyArray;

        /**
         * Creates a new GroupInviteListResp instance using the specified properties.
         * @function create
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {pb.IGroupInviteListResp=} [properties] Properties to set
         * @returns {pb.GroupInviteListResp} GroupInviteListResp instance
         */
        GroupInviteListResp.create = function create(properties) {
            return new GroupInviteListResp(properties);
        };

        /**
         * Encodes the specified GroupInviteListResp message. Does not implicitly {@link pb.GroupInviteListResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {pb.IGroupInviteListResp} message GroupInviteListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInviteListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.pb.GroupInviteItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupInviteListResp message, length delimited. Does not implicitly {@link pb.GroupInviteListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {pb.IGroupInviteListResp} message GroupInviteListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInviteListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInviteListResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupInviteListResp} GroupInviteListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInviteListResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupInviteListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.pb.GroupInviteItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupInviteListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupInviteListResp} GroupInviteListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInviteListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupInviteListResp message.
         * @function verify
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupInviteListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.pb.GroupInviteItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GroupInviteListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupInviteListResp} GroupInviteListResp
         */
        GroupInviteListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupInviteListResp)
                return object;
            var message = new $root.pb.GroupInviteListResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".pb.GroupInviteListResp.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".pb.GroupInviteListResp.items: object expected");
                    message.items[i] = $root.pb.GroupInviteItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupInviteListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {pb.GroupInviteListResp} message GroupInviteListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupInviteListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.pb.GroupInviteItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this GroupInviteListResp to JSON.
         * @function toJSON
         * @memberof pb.GroupInviteListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInviteListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupInviteListResp
         * @function getTypeUrl
         * @memberof pb.GroupInviteListResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupInviteListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupInviteListResp";
        };

        return GroupInviteListResp;
    })();

    pb.HandleGroupInviteReq = (function() {

        /**
         * Properties of a HandleGroupInviteReq.
         * @memberof pb
         * @interface IHandleGroupInviteReq
         * @property {string|null} [id] HandleGroupInviteReq id
         * @property {string|null} [token] HandleGroupInviteReq token
         * @property {boolean|null} [approve] HandleGroupInviteReq approve
         * @property {string|null} [groupId] HandleGroupInviteReq groupId
         * @property {string|null} [inviteeUid] HandleGroupInviteReq inviteeUid
         */

        /**
         * Constructs a new HandleGroupInviteReq.
         * @memberof pb
         * @classdesc Represents a HandleGroupInviteReq.
         * @implements IHandleGroupInviteReq
         * @constructor
         * @param {pb.IHandleGroupInviteReq=} [properties] Properties to set
         */
        function HandleGroupInviteReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandleGroupInviteReq id.
         * @member {string} id
         * @memberof pb.HandleGroupInviteReq
         * @instance
         */
        HandleGroupInviteReq.prototype.id = "";

        /**
         * HandleGroupInviteReq token.
         * @member {string} token
         * @memberof pb.HandleGroupInviteReq
         * @instance
         */
        HandleGroupInviteReq.prototype.token = "";

        /**
         * HandleGroupInviteReq approve.
         * @member {boolean} approve
         * @memberof pb.HandleGroupInviteReq
         * @instance
         */
        HandleGroupInviteReq.prototype.approve = false;

        /**
         * HandleGroupInviteReq groupId.
         * @member {string} groupId
         * @memberof pb.HandleGroupInviteReq
         * @instance
         */
        HandleGroupInviteReq.prototype.groupId = "";

        /**
         * HandleGroupInviteReq inviteeUid.
         * @member {string} inviteeUid
         * @memberof pb.HandleGroupInviteReq
         * @instance
         */
        HandleGroupInviteReq.prototype.inviteeUid = "";

        /**
         * Creates a new HandleGroupInviteReq instance using the specified properties.
         * @function create
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {pb.IHandleGroupInviteReq=} [properties] Properties to set
         * @returns {pb.HandleGroupInviteReq} HandleGroupInviteReq instance
         */
        HandleGroupInviteReq.create = function create(properties) {
            return new HandleGroupInviteReq(properties);
        };

        /**
         * Encodes the specified HandleGroupInviteReq message. Does not implicitly {@link pb.HandleGroupInviteReq.verify|verify} messages.
         * @function encode
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {pb.IHandleGroupInviteReq} message HandleGroupInviteReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleGroupInviteReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.approve != null && Object.hasOwnProperty.call(message, "approve"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.approve);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.groupId);
            if (message.inviteeUid != null && Object.hasOwnProperty.call(message, "inviteeUid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.inviteeUid);
            return writer;
        };

        /**
         * Encodes the specified HandleGroupInviteReq message, length delimited. Does not implicitly {@link pb.HandleGroupInviteReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {pb.IHandleGroupInviteReq} message HandleGroupInviteReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleGroupInviteReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandleGroupInviteReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.HandleGroupInviteReq} HandleGroupInviteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleGroupInviteReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.HandleGroupInviteReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.token = reader.string();
                        break;
                    }
                case 3: {
                        message.approve = reader.bool();
                        break;
                    }
                case 4: {
                        message.groupId = reader.string();
                        break;
                    }
                case 5: {
                        message.inviteeUid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HandleGroupInviteReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.HandleGroupInviteReq} HandleGroupInviteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleGroupInviteReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandleGroupInviteReq message.
         * @function verify
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandleGroupInviteReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.approve != null && message.hasOwnProperty("approve"))
                if (typeof message.approve !== "boolean")
                    return "approve: boolean expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.inviteeUid != null && message.hasOwnProperty("inviteeUid"))
                if (!$util.isString(message.inviteeUid))
                    return "inviteeUid: string expected";
            return null;
        };

        /**
         * Creates a HandleGroupInviteReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.HandleGroupInviteReq} HandleGroupInviteReq
         */
        HandleGroupInviteReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.HandleGroupInviteReq)
                return object;
            var message = new $root.pb.HandleGroupInviteReq();
            if (object.id != null)
                message.id = String(object.id);
            if (object.token != null)
                message.token = String(object.token);
            if (object.approve != null)
                message.approve = Boolean(object.approve);
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.inviteeUid != null)
                message.inviteeUid = String(object.inviteeUid);
            return message;
        };

        /**
         * Creates a plain object from a HandleGroupInviteReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {pb.HandleGroupInviteReq} message HandleGroupInviteReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandleGroupInviteReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.token = "";
                object.approve = false;
                object.groupId = "";
                object.inviteeUid = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.approve != null && message.hasOwnProperty("approve"))
                object.approve = message.approve;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.inviteeUid != null && message.hasOwnProperty("inviteeUid"))
                object.inviteeUid = message.inviteeUid;
            return object;
        };

        /**
         * Converts this HandleGroupInviteReq to JSON.
         * @function toJSON
         * @memberof pb.HandleGroupInviteReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandleGroupInviteReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandleGroupInviteReq
         * @function getTypeUrl
         * @memberof pb.HandleGroupInviteReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandleGroupInviteReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.HandleGroupInviteReq";
        };

        return HandleGroupInviteReq;
    })();

    return pb;
})();

module.exports = $root;
window.pbRoot = module.exports;