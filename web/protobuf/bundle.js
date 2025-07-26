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

    protocol.UpdateFriendRemarkReq = (function() {

        /**
         * Properties of an UpdateFriendRemarkReq.
         * @memberof protocol
         * @interface IUpdateFriendRemarkReq
         * @property {string|null} [uid] UpdateFriendRemarkReq uid
         * @property {string|null} [friendUid] UpdateFriendRemarkReq friendUid
         * @property {string|null} [remark] UpdateFriendRemarkReq remark
         * @property {string|null} [token] UpdateFriendRemarkReq token
         */

        /**
         * Constructs a new UpdateFriendRemarkReq.
         * @memberof protocol
         * @classdesc Represents an UpdateFriendRemarkReq.
         * @implements IUpdateFriendRemarkReq
         * @constructor
         * @param {protocol.IUpdateFriendRemarkReq=} [properties] Properties to set
         */
        function UpdateFriendRemarkReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateFriendRemarkReq uid.
         * @member {string} uid
         * @memberof protocol.UpdateFriendRemarkReq
         * @instance
         */
        UpdateFriendRemarkReq.prototype.uid = "";

        /**
         * UpdateFriendRemarkReq friendUid.
         * @member {string} friendUid
         * @memberof protocol.UpdateFriendRemarkReq
         * @instance
         */
        UpdateFriendRemarkReq.prototype.friendUid = "";

        /**
         * UpdateFriendRemarkReq remark.
         * @member {string} remark
         * @memberof protocol.UpdateFriendRemarkReq
         * @instance
         */
        UpdateFriendRemarkReq.prototype.remark = "";

        /**
         * UpdateFriendRemarkReq token.
         * @member {string} token
         * @memberof protocol.UpdateFriendRemarkReq
         * @instance
         */
        UpdateFriendRemarkReq.prototype.token = "";

        /**
         * Creates a new UpdateFriendRemarkReq instance using the specified properties.
         * @function create
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {protocol.IUpdateFriendRemarkReq=} [properties] Properties to set
         * @returns {protocol.UpdateFriendRemarkReq} UpdateFriendRemarkReq instance
         */
        UpdateFriendRemarkReq.create = function create(properties) {
            return new UpdateFriendRemarkReq(properties);
        };

        /**
         * Encodes the specified UpdateFriendRemarkReq message. Does not implicitly {@link protocol.UpdateFriendRemarkReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {protocol.IUpdateFriendRemarkReq} message UpdateFriendRemarkReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateFriendRemarkReq.encode = function encode(message, writer) {
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
         * Encodes the specified UpdateFriendRemarkReq message, length delimited. Does not implicitly {@link protocol.UpdateFriendRemarkReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {protocol.IUpdateFriendRemarkReq} message UpdateFriendRemarkReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateFriendRemarkReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateFriendRemarkReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpdateFriendRemarkReq} UpdateFriendRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateFriendRemarkReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpdateFriendRemarkReq();
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
         * Decodes an UpdateFriendRemarkReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpdateFriendRemarkReq} UpdateFriendRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateFriendRemarkReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateFriendRemarkReq message.
         * @function verify
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateFriendRemarkReq.verify = function verify(message) {
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
         * Creates an UpdateFriendRemarkReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpdateFriendRemarkReq} UpdateFriendRemarkReq
         */
        UpdateFriendRemarkReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpdateFriendRemarkReq)
                return object;
            var message = new $root.protocol.UpdateFriendRemarkReq();
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
         * Creates a plain object from an UpdateFriendRemarkReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {protocol.UpdateFriendRemarkReq} message UpdateFriendRemarkReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateFriendRemarkReq.toObject = function toObject(message, options) {
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
         * Converts this UpdateFriendRemarkReq to JSON.
         * @function toJSON
         * @memberof protocol.UpdateFriendRemarkReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateFriendRemarkReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateFriendRemarkReq
         * @function getTypeUrl
         * @memberof protocol.UpdateFriendRemarkReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateFriendRemarkReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpdateFriendRemarkReq";
        };

        return UpdateFriendRemarkReq;
    })();

    protocol.UpdateFriendRemarkResp = (function() {

        /**
         * Properties of an UpdateFriendRemarkResp.
         * @memberof protocol
         * @interface IUpdateFriendRemarkResp
         * @property {number|null} [code] UpdateFriendRemarkResp code
         * @property {string|null} [msg] UpdateFriendRemarkResp msg
         */

        /**
         * Constructs a new UpdateFriendRemarkResp.
         * @memberof protocol
         * @classdesc Represents an UpdateFriendRemarkResp.
         * @implements IUpdateFriendRemarkResp
         * @constructor
         * @param {protocol.IUpdateFriendRemarkResp=} [properties] Properties to set
         */
        function UpdateFriendRemarkResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateFriendRemarkResp code.
         * @member {number} code
         * @memberof protocol.UpdateFriendRemarkResp
         * @instance
         */
        UpdateFriendRemarkResp.prototype.code = 0;

        /**
         * UpdateFriendRemarkResp msg.
         * @member {string} msg
         * @memberof protocol.UpdateFriendRemarkResp
         * @instance
         */
        UpdateFriendRemarkResp.prototype.msg = "";

        /**
         * Creates a new UpdateFriendRemarkResp instance using the specified properties.
         * @function create
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {protocol.IUpdateFriendRemarkResp=} [properties] Properties to set
         * @returns {protocol.UpdateFriendRemarkResp} UpdateFriendRemarkResp instance
         */
        UpdateFriendRemarkResp.create = function create(properties) {
            return new UpdateFriendRemarkResp(properties);
        };

        /**
         * Encodes the specified UpdateFriendRemarkResp message. Does not implicitly {@link protocol.UpdateFriendRemarkResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {protocol.IUpdateFriendRemarkResp} message UpdateFriendRemarkResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateFriendRemarkResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified UpdateFriendRemarkResp message, length delimited. Does not implicitly {@link protocol.UpdateFriendRemarkResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {protocol.IUpdateFriendRemarkResp} message UpdateFriendRemarkResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateFriendRemarkResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateFriendRemarkResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpdateFriendRemarkResp} UpdateFriendRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateFriendRemarkResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpdateFriendRemarkResp();
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
         * Decodes an UpdateFriendRemarkResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpdateFriendRemarkResp} UpdateFriendRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateFriendRemarkResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateFriendRemarkResp message.
         * @function verify
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateFriendRemarkResp.verify = function verify(message) {
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
         * Creates an UpdateFriendRemarkResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpdateFriendRemarkResp} UpdateFriendRemarkResp
         */
        UpdateFriendRemarkResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpdateFriendRemarkResp)
                return object;
            var message = new $root.protocol.UpdateFriendRemarkResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateFriendRemarkResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {protocol.UpdateFriendRemarkResp} message UpdateFriendRemarkResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateFriendRemarkResp.toObject = function toObject(message, options) {
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
         * Converts this UpdateFriendRemarkResp to JSON.
         * @function toJSON
         * @memberof protocol.UpdateFriendRemarkResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateFriendRemarkResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateFriendRemarkResp
         * @function getTypeUrl
         * @memberof protocol.UpdateFriendRemarkResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateFriendRemarkResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpdateFriendRemarkResp";
        };

        return UpdateFriendRemarkResp;
    })();

    protocol.SetFriendDNDReq = (function() {

        /**
         * Properties of a SetFriendDNDReq.
         * @memberof protocol
         * @interface ISetFriendDNDReq
         * @property {string|null} [uid] SetFriendDNDReq uid
         * @property {string|null} [friendUid] SetFriendDNDReq friendUid
         * @property {boolean|null} [dnd] SetFriendDNDReq dnd
         * @property {string|null} [token] SetFriendDNDReq token
         */

        /**
         * Constructs a new SetFriendDNDReq.
         * @memberof protocol
         * @classdesc Represents a SetFriendDNDReq.
         * @implements ISetFriendDNDReq
         * @constructor
         * @param {protocol.ISetFriendDNDReq=} [properties] Properties to set
         */
        function SetFriendDNDReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetFriendDNDReq uid.
         * @member {string} uid
         * @memberof protocol.SetFriendDNDReq
         * @instance
         */
        SetFriendDNDReq.prototype.uid = "";

        /**
         * SetFriendDNDReq friendUid.
         * @member {string} friendUid
         * @memberof protocol.SetFriendDNDReq
         * @instance
         */
        SetFriendDNDReq.prototype.friendUid = "";

        /**
         * SetFriendDNDReq dnd.
         * @member {boolean} dnd
         * @memberof protocol.SetFriendDNDReq
         * @instance
         */
        SetFriendDNDReq.prototype.dnd = false;

        /**
         * SetFriendDNDReq token.
         * @member {string} token
         * @memberof protocol.SetFriendDNDReq
         * @instance
         */
        SetFriendDNDReq.prototype.token = "";

        /**
         * Creates a new SetFriendDNDReq instance using the specified properties.
         * @function create
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {protocol.ISetFriendDNDReq=} [properties] Properties to set
         * @returns {protocol.SetFriendDNDReq} SetFriendDNDReq instance
         */
        SetFriendDNDReq.create = function create(properties) {
            return new SetFriendDNDReq(properties);
        };

        /**
         * Encodes the specified SetFriendDNDReq message. Does not implicitly {@link protocol.SetFriendDNDReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {protocol.ISetFriendDNDReq} message SetFriendDNDReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFriendDNDReq.encode = function encode(message, writer) {
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
         * Encodes the specified SetFriendDNDReq message, length delimited. Does not implicitly {@link protocol.SetFriendDNDReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {protocol.ISetFriendDNDReq} message SetFriendDNDReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFriendDNDReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetFriendDNDReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetFriendDNDReq} SetFriendDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFriendDNDReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetFriendDNDReq();
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
         * Decodes a SetFriendDNDReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetFriendDNDReq} SetFriendDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFriendDNDReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetFriendDNDReq message.
         * @function verify
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetFriendDNDReq.verify = function verify(message) {
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
         * Creates a SetFriendDNDReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetFriendDNDReq} SetFriendDNDReq
         */
        SetFriendDNDReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetFriendDNDReq)
                return object;
            var message = new $root.protocol.SetFriendDNDReq();
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
         * Creates a plain object from a SetFriendDNDReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {protocol.SetFriendDNDReq} message SetFriendDNDReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetFriendDNDReq.toObject = function toObject(message, options) {
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
         * Converts this SetFriendDNDReq to JSON.
         * @function toJSON
         * @memberof protocol.SetFriendDNDReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetFriendDNDReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetFriendDNDReq
         * @function getTypeUrl
         * @memberof protocol.SetFriendDNDReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetFriendDNDReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetFriendDNDReq";
        };

        return SetFriendDNDReq;
    })();

    protocol.SetFriendDNDResp = (function() {

        /**
         * Properties of a SetFriendDNDResp.
         * @memberof protocol
         * @interface ISetFriendDNDResp
         * @property {number|null} [code] SetFriendDNDResp code
         * @property {string|null} [msg] SetFriendDNDResp msg
         */

        /**
         * Constructs a new SetFriendDNDResp.
         * @memberof protocol
         * @classdesc Represents a SetFriendDNDResp.
         * @implements ISetFriendDNDResp
         * @constructor
         * @param {protocol.ISetFriendDNDResp=} [properties] Properties to set
         */
        function SetFriendDNDResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetFriendDNDResp code.
         * @member {number} code
         * @memberof protocol.SetFriendDNDResp
         * @instance
         */
        SetFriendDNDResp.prototype.code = 0;

        /**
         * SetFriendDNDResp msg.
         * @member {string} msg
         * @memberof protocol.SetFriendDNDResp
         * @instance
         */
        SetFriendDNDResp.prototype.msg = "";

        /**
         * Creates a new SetFriendDNDResp instance using the specified properties.
         * @function create
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {protocol.ISetFriendDNDResp=} [properties] Properties to set
         * @returns {protocol.SetFriendDNDResp} SetFriendDNDResp instance
         */
        SetFriendDNDResp.create = function create(properties) {
            return new SetFriendDNDResp(properties);
        };

        /**
         * Encodes the specified SetFriendDNDResp message. Does not implicitly {@link protocol.SetFriendDNDResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {protocol.ISetFriendDNDResp} message SetFriendDNDResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFriendDNDResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SetFriendDNDResp message, length delimited. Does not implicitly {@link protocol.SetFriendDNDResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {protocol.ISetFriendDNDResp} message SetFriendDNDResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFriendDNDResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetFriendDNDResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetFriendDNDResp} SetFriendDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFriendDNDResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetFriendDNDResp();
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
         * Decodes a SetFriendDNDResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetFriendDNDResp} SetFriendDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFriendDNDResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetFriendDNDResp message.
         * @function verify
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetFriendDNDResp.verify = function verify(message) {
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
         * Creates a SetFriendDNDResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetFriendDNDResp} SetFriendDNDResp
         */
        SetFriendDNDResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetFriendDNDResp)
                return object;
            var message = new $root.protocol.SetFriendDNDResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetFriendDNDResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {protocol.SetFriendDNDResp} message SetFriendDNDResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetFriendDNDResp.toObject = function toObject(message, options) {
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
         * Converts this SetFriendDNDResp to JSON.
         * @function toJSON
         * @memberof protocol.SetFriendDNDResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetFriendDNDResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetFriendDNDResp
         * @function getTypeUrl
         * @memberof protocol.SetFriendDNDResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetFriendDNDResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetFriendDNDResp";
        };

        return SetFriendDNDResp;
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

    protocol.HandleFriendRequestReq = (function() {

        /**
         * Properties of a HandleFriendRequestReq.
         * @memberof protocol
         * @interface IHandleFriendRequestReq
         * @property {string|null} [fromUid] HandleFriendRequestReq fromUid
         * @property {string|null} [toUid] HandleFriendRequestReq toUid
         * @property {boolean|null} [accept] HandleFriendRequestReq accept
         * @property {string|null} [token] HandleFriendRequestReq token
         */

        /**
         * Constructs a new HandleFriendRequestReq.
         * @memberof protocol
         * @classdesc Represents a HandleFriendRequestReq.
         * @implements IHandleFriendRequestReq
         * @constructor
         * @param {protocol.IHandleFriendRequestReq=} [properties] Properties to set
         */
        function HandleFriendRequestReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandleFriendRequestReq fromUid.
         * @member {string} fromUid
         * @memberof protocol.HandleFriendRequestReq
         * @instance
         */
        HandleFriendRequestReq.prototype.fromUid = "";

        /**
         * HandleFriendRequestReq toUid.
         * @member {string} toUid
         * @memberof protocol.HandleFriendRequestReq
         * @instance
         */
        HandleFriendRequestReq.prototype.toUid = "";

        /**
         * HandleFriendRequestReq accept.
         * @member {boolean} accept
         * @memberof protocol.HandleFriendRequestReq
         * @instance
         */
        HandleFriendRequestReq.prototype.accept = false;

        /**
         * HandleFriendRequestReq token.
         * @member {string} token
         * @memberof protocol.HandleFriendRequestReq
         * @instance
         */
        HandleFriendRequestReq.prototype.token = "";

        /**
         * Creates a new HandleFriendRequestReq instance using the specified properties.
         * @function create
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {protocol.IHandleFriendRequestReq=} [properties] Properties to set
         * @returns {protocol.HandleFriendRequestReq} HandleFriendRequestReq instance
         */
        HandleFriendRequestReq.create = function create(properties) {
            return new HandleFriendRequestReq(properties);
        };

        /**
         * Encodes the specified HandleFriendRequestReq message. Does not implicitly {@link protocol.HandleFriendRequestReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {protocol.IHandleFriendRequestReq} message HandleFriendRequestReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleFriendRequestReq.encode = function encode(message, writer) {
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
         * Encodes the specified HandleFriendRequestReq message, length delimited. Does not implicitly {@link protocol.HandleFriendRequestReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {protocol.IHandleFriendRequestReq} message HandleFriendRequestReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleFriendRequestReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandleFriendRequestReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HandleFriendRequestReq} HandleFriendRequestReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleFriendRequestReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HandleFriendRequestReq();
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
         * Decodes a HandleFriendRequestReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HandleFriendRequestReq} HandleFriendRequestReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleFriendRequestReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandleFriendRequestReq message.
         * @function verify
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandleFriendRequestReq.verify = function verify(message) {
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
         * Creates a HandleFriendRequestReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HandleFriendRequestReq} HandleFriendRequestReq
         */
        HandleFriendRequestReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HandleFriendRequestReq)
                return object;
            var message = new $root.protocol.HandleFriendRequestReq();
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
         * Creates a plain object from a HandleFriendRequestReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {protocol.HandleFriendRequestReq} message HandleFriendRequestReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandleFriendRequestReq.toObject = function toObject(message, options) {
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
         * Converts this HandleFriendRequestReq to JSON.
         * @function toJSON
         * @memberof protocol.HandleFriendRequestReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandleFriendRequestReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandleFriendRequestReq
         * @function getTypeUrl
         * @memberof protocol.HandleFriendRequestReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandleFriendRequestReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.HandleFriendRequestReq";
        };

        return HandleFriendRequestReq;
    })();

    protocol.HandleFriendRequestResp = (function() {

        /**
         * Properties of a HandleFriendRequestResp.
         * @memberof protocol
         * @interface IHandleFriendRequestResp
         * @property {number|null} [code] HandleFriendRequestResp code
         * @property {string|null} [msg] HandleFriendRequestResp msg
         */

        /**
         * Constructs a new HandleFriendRequestResp.
         * @memberof protocol
         * @classdesc Represents a HandleFriendRequestResp.
         * @implements IHandleFriendRequestResp
         * @constructor
         * @param {protocol.IHandleFriendRequestResp=} [properties] Properties to set
         */
        function HandleFriendRequestResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandleFriendRequestResp code.
         * @member {number} code
         * @memberof protocol.HandleFriendRequestResp
         * @instance
         */
        HandleFriendRequestResp.prototype.code = 0;

        /**
         * HandleFriendRequestResp msg.
         * @member {string} msg
         * @memberof protocol.HandleFriendRequestResp
         * @instance
         */
        HandleFriendRequestResp.prototype.msg = "";

        /**
         * Creates a new HandleFriendRequestResp instance using the specified properties.
         * @function create
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {protocol.IHandleFriendRequestResp=} [properties] Properties to set
         * @returns {protocol.HandleFriendRequestResp} HandleFriendRequestResp instance
         */
        HandleFriendRequestResp.create = function create(properties) {
            return new HandleFriendRequestResp(properties);
        };

        /**
         * Encodes the specified HandleFriendRequestResp message. Does not implicitly {@link protocol.HandleFriendRequestResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {protocol.IHandleFriendRequestResp} message HandleFriendRequestResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleFriendRequestResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified HandleFriendRequestResp message, length delimited. Does not implicitly {@link protocol.HandleFriendRequestResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {protocol.IHandleFriendRequestResp} message HandleFriendRequestResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleFriendRequestResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandleFriendRequestResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HandleFriendRequestResp} HandleFriendRequestResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleFriendRequestResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HandleFriendRequestResp();
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
         * Decodes a HandleFriendRequestResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HandleFriendRequestResp} HandleFriendRequestResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleFriendRequestResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandleFriendRequestResp message.
         * @function verify
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandleFriendRequestResp.verify = function verify(message) {
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
         * Creates a HandleFriendRequestResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HandleFriendRequestResp} HandleFriendRequestResp
         */
        HandleFriendRequestResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HandleFriendRequestResp)
                return object;
            var message = new $root.protocol.HandleFriendRequestResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a HandleFriendRequestResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {protocol.HandleFriendRequestResp} message HandleFriendRequestResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandleFriendRequestResp.toObject = function toObject(message, options) {
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
         * Converts this HandleFriendRequestResp to JSON.
         * @function toJSON
         * @memberof protocol.HandleFriendRequestResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandleFriendRequestResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandleFriendRequestResp
         * @function getTypeUrl
         * @memberof protocol.HandleFriendRequestResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandleFriendRequestResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.HandleFriendRequestResp";
        };

        return HandleFriendRequestResp;
    })();

    protocol.Group = (function() {

        /**
         * Properties of a Group.
         * @memberof protocol
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
         * @memberof protocol
         * @classdesc Represents a Group.
         * @implements IGroup
         * @constructor
         * @param {protocol.IGroup=} [properties] Properties to set
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
         * @memberof protocol.Group
         * @instance
         */
        Group.prototype.groupId = "";

        /**
         * Group name.
         * @member {string} name
         * @memberof protocol.Group
         * @instance
         */
        Group.prototype.name = "";

        /**
         * Group description.
         * @member {string} description
         * @memberof protocol.Group
         * @instance
         */
        Group.prototype.description = "";

        /**
         * Group ownerUid.
         * @member {string} ownerUid
         * @memberof protocol.Group
         * @instance
         */
        Group.prototype.ownerUid = "";

        /**
         * Group memberUids.
         * @member {Array.<string>} memberUids
         * @memberof protocol.Group
         * @instance
         */
        Group.prototype.memberUids = $util.emptyArray;

        /**
         * Group createdAt.
         * @member {number|Long} createdAt
         * @memberof protocol.Group
         * @instance
         */
        Group.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Group updatedAt.
         * @member {number|Long} updatedAt
         * @memberof protocol.Group
         * @instance
         */
        Group.prototype.updatedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Group remark.
         * @member {string} remark
         * @memberof protocol.Group
         * @instance
         */
        Group.prototype.remark = "";

        /**
         * Creates a new Group instance using the specified properties.
         * @function create
         * @memberof protocol.Group
         * @static
         * @param {protocol.IGroup=} [properties] Properties to set
         * @returns {protocol.Group} Group instance
         */
        Group.create = function create(properties) {
            return new Group(properties);
        };

        /**
         * Encodes the specified Group message. Does not implicitly {@link protocol.Group.verify|verify} messages.
         * @function encode
         * @memberof protocol.Group
         * @static
         * @param {protocol.IGroup} message Group message or plain object to encode
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
         * Encodes the specified Group message, length delimited. Does not implicitly {@link protocol.Group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Group
         * @static
         * @param {protocol.IGroup} message Group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Group} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Group();
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
         * @memberof protocol.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Group} Group
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
         * @memberof protocol.Group
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
         * @memberof protocol.Group
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Group} Group
         */
        Group.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Group)
                return object;
            var message = new $root.protocol.Group();
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
                    throw TypeError(".protocol.Group.memberUids: array expected");
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
         * @memberof protocol.Group
         * @static
         * @param {protocol.Group} message Group
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
         * @memberof protocol.Group
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Group.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Group
         * @function getTypeUrl
         * @memberof protocol.Group
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Group.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Group";
        };

        return Group;
    })();

    protocol.GroupMember = (function() {

        /**
         * Properties of a GroupMember.
         * @memberof protocol
         * @interface IGroupMember
         * @property {string|null} [uid] GroupMember uid
         * @property {string|null} [username] GroupMember username
         * @property {string|null} [nickname] GroupMember nickname
         * @property {string|null} [role] GroupMember role
         * @property {number|Long|null} [joinTime] GroupMember joinTime
         */

        /**
         * Constructs a new GroupMember.
         * @memberof protocol
         * @classdesc Represents a GroupMember.
         * @implements IGroupMember
         * @constructor
         * @param {protocol.IGroupMember=} [properties] Properties to set
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
         * @memberof protocol.GroupMember
         * @instance
         */
        GroupMember.prototype.uid = "";

        /**
         * GroupMember username.
         * @member {string} username
         * @memberof protocol.GroupMember
         * @instance
         */
        GroupMember.prototype.username = "";

        /**
         * GroupMember nickname.
         * @member {string} nickname
         * @memberof protocol.GroupMember
         * @instance
         */
        GroupMember.prototype.nickname = "";

        /**
         * GroupMember role.
         * @member {string} role
         * @memberof protocol.GroupMember
         * @instance
         */
        GroupMember.prototype.role = "";

        /**
         * GroupMember joinTime.
         * @member {number|Long} joinTime
         * @memberof protocol.GroupMember
         * @instance
         */
        GroupMember.prototype.joinTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GroupMember instance using the specified properties.
         * @function create
         * @memberof protocol.GroupMember
         * @static
         * @param {protocol.IGroupMember=} [properties] Properties to set
         * @returns {protocol.GroupMember} GroupMember instance
         */
        GroupMember.create = function create(properties) {
            return new GroupMember(properties);
        };

        /**
         * Encodes the specified GroupMember message. Does not implicitly {@link protocol.GroupMember.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupMember
         * @static
         * @param {protocol.IGroupMember} message GroupMember message or plain object to encode
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
         * Encodes the specified GroupMember message, length delimited. Does not implicitly {@link protocol.GroupMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupMember
         * @static
         * @param {protocol.IGroupMember} message GroupMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMember message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupMember} GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMember.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupMember();
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
         * @memberof protocol.GroupMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupMember} GroupMember
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
         * @memberof protocol.GroupMember
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
         * @memberof protocol.GroupMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupMember} GroupMember
         */
        GroupMember.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupMember)
                return object;
            var message = new $root.protocol.GroupMember();
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
         * @memberof protocol.GroupMember
         * @static
         * @param {protocol.GroupMember} message GroupMember
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
         * @memberof protocol.GroupMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMember
         * @function getTypeUrl
         * @memberof protocol.GroupMember
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMember.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupMember";
        };

        return GroupMember;
    })();

    protocol.GroupRequestItem = (function() {

        /**
         * Properties of a GroupRequestItem.
         * @memberof protocol
         * @interface IGroupRequestItem
         * @property {string|null} [id] GroupRequestItem id
         * @property {string|null} [groupId] GroupRequestItem groupId
         * @property {string|null} [groupName] GroupRequestItem groupName
         * @property {string|null} [inviterUid] GroupRequestItem inviterUid
         * @property {string|null} [inviteeUid] GroupRequestItem inviteeUid
         * @property {string|null} [status] GroupRequestItem status
         * @property {string|null} [createdAt] GroupRequestItem createdAt
         * @property {string|null} [inviterUsername] GroupRequestItem inviterUsername
         * @property {string|null} [inviteeUsername] GroupRequestItem inviteeUsername
         */

        /**
         * Constructs a new GroupRequestItem.
         * @memberof protocol
         * @classdesc Represents a GroupRequestItem.
         * @implements IGroupRequestItem
         * @constructor
         * @param {protocol.IGroupRequestItem=} [properties] Properties to set
         */
        function GroupRequestItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupRequestItem id.
         * @member {string} id
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.id = "";

        /**
         * GroupRequestItem groupId.
         * @member {string} groupId
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.groupId = "";

        /**
         * GroupRequestItem groupName.
         * @member {string} groupName
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.groupName = "";

        /**
         * GroupRequestItem inviterUid.
         * @member {string} inviterUid
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.inviterUid = "";

        /**
         * GroupRequestItem inviteeUid.
         * @member {string} inviteeUid
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.inviteeUid = "";

        /**
         * GroupRequestItem status.
         * @member {string} status
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.status = "";

        /**
         * GroupRequestItem createdAt.
         * @member {string} createdAt
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.createdAt = "";

        /**
         * GroupRequestItem inviterUsername.
         * @member {string} inviterUsername
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.inviterUsername = "";

        /**
         * GroupRequestItem inviteeUsername.
         * @member {string} inviteeUsername
         * @memberof protocol.GroupRequestItem
         * @instance
         */
        GroupRequestItem.prototype.inviteeUsername = "";

        /**
         * Creates a new GroupRequestItem instance using the specified properties.
         * @function create
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {protocol.IGroupRequestItem=} [properties] Properties to set
         * @returns {protocol.GroupRequestItem} GroupRequestItem instance
         */
        GroupRequestItem.create = function create(properties) {
            return new GroupRequestItem(properties);
        };

        /**
         * Encodes the specified GroupRequestItem message. Does not implicitly {@link protocol.GroupRequestItem.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {protocol.IGroupRequestItem} message GroupRequestItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupRequestItem.encode = function encode(message, writer) {
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
         * Encodes the specified GroupRequestItem message, length delimited. Does not implicitly {@link protocol.GroupRequestItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {protocol.IGroupRequestItem} message GroupRequestItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupRequestItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupRequestItem message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupRequestItem} GroupRequestItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupRequestItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupRequestItem();
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
         * Decodes a GroupRequestItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupRequestItem} GroupRequestItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupRequestItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupRequestItem message.
         * @function verify
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupRequestItem.verify = function verify(message) {
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
         * Creates a GroupRequestItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupRequestItem} GroupRequestItem
         */
        GroupRequestItem.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupRequestItem)
                return object;
            var message = new $root.protocol.GroupRequestItem();
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
         * Creates a plain object from a GroupRequestItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {protocol.GroupRequestItem} message GroupRequestItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupRequestItem.toObject = function toObject(message, options) {
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
         * Converts this GroupRequestItem to JSON.
         * @function toJSON
         * @memberof protocol.GroupRequestItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupRequestItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupRequestItem
         * @function getTypeUrl
         * @memberof protocol.GroupRequestItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupRequestItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupRequestItem";
        };

        return GroupRequestItem;
    })();

    protocol.CreateGroupReq = (function() {

        /**
         * Properties of a CreateGroupReq.
         * @memberof protocol
         * @interface ICreateGroupReq
         * @property {string|null} [name] CreateGroupReq name
         * @property {string|null} [description] CreateGroupReq description
         * @property {string|null} [ownerUid] CreateGroupReq ownerUid
         * @property {Array.<string>|null} [memberUids] CreateGroupReq memberUids
         */

        /**
         * Constructs a new CreateGroupReq.
         * @memberof protocol
         * @classdesc Represents a CreateGroupReq.
         * @implements ICreateGroupReq
         * @constructor
         * @param {protocol.ICreateGroupReq=} [properties] Properties to set
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
         * @memberof protocol.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.name = "";

        /**
         * CreateGroupReq description.
         * @member {string} description
         * @memberof protocol.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.description = "";

        /**
         * CreateGroupReq ownerUid.
         * @member {string} ownerUid
         * @memberof protocol.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.ownerUid = "";

        /**
         * CreateGroupReq memberUids.
         * @member {Array.<string>} memberUids
         * @memberof protocol.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.memberUids = $util.emptyArray;

        /**
         * Creates a new CreateGroupReq instance using the specified properties.
         * @function create
         * @memberof protocol.CreateGroupReq
         * @static
         * @param {protocol.ICreateGroupReq=} [properties] Properties to set
         * @returns {protocol.CreateGroupReq} CreateGroupReq instance
         */
        CreateGroupReq.create = function create(properties) {
            return new CreateGroupReq(properties);
        };

        /**
         * Encodes the specified CreateGroupReq message. Does not implicitly {@link protocol.CreateGroupReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.CreateGroupReq
         * @static
         * @param {protocol.ICreateGroupReq} message CreateGroupReq message or plain object to encode
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
         * Encodes the specified CreateGroupReq message, length delimited. Does not implicitly {@link protocol.CreateGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CreateGroupReq
         * @static
         * @param {protocol.ICreateGroupReq} message CreateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CreateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CreateGroupReq} CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CreateGroupReq();
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
         * @memberof protocol.CreateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CreateGroupReq} CreateGroupReq
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
         * @memberof protocol.CreateGroupReq
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
         * @memberof protocol.CreateGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CreateGroupReq} CreateGroupReq
         */
        CreateGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CreateGroupReq)
                return object;
            var message = new $root.protocol.CreateGroupReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.ownerUid != null)
                message.ownerUid = String(object.ownerUid);
            if (object.memberUids) {
                if (!Array.isArray(object.memberUids))
                    throw TypeError(".protocol.CreateGroupReq.memberUids: array expected");
                message.memberUids = [];
                for (var i = 0; i < object.memberUids.length; ++i)
                    message.memberUids[i] = String(object.memberUids[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CreateGroupReq
         * @static
         * @param {protocol.CreateGroupReq} message CreateGroupReq
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
         * @memberof protocol.CreateGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateGroupReq
         * @function getTypeUrl
         * @memberof protocol.CreateGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.CreateGroupReq";
        };

        return CreateGroupReq;
    })();

    protocol.CreateGroupResp = (function() {

        /**
         * Properties of a CreateGroupResp.
         * @memberof protocol
         * @interface ICreateGroupResp
         * @property {number|null} [code] CreateGroupResp code
         * @property {string|null} [msg] CreateGroupResp msg
         * @property {string|null} [groupId] CreateGroupResp groupId
         */

        /**
         * Constructs a new CreateGroupResp.
         * @memberof protocol
         * @classdesc Represents a CreateGroupResp.
         * @implements ICreateGroupResp
         * @constructor
         * @param {protocol.ICreateGroupResp=} [properties] Properties to set
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
         * @memberof protocol.CreateGroupResp
         * @instance
         */
        CreateGroupResp.prototype.code = 0;

        /**
         * CreateGroupResp msg.
         * @member {string} msg
         * @memberof protocol.CreateGroupResp
         * @instance
         */
        CreateGroupResp.prototype.msg = "";

        /**
         * CreateGroupResp groupId.
         * @member {string} groupId
         * @memberof protocol.CreateGroupResp
         * @instance
         */
        CreateGroupResp.prototype.groupId = "";

        /**
         * Creates a new CreateGroupResp instance using the specified properties.
         * @function create
         * @memberof protocol.CreateGroupResp
         * @static
         * @param {protocol.ICreateGroupResp=} [properties] Properties to set
         * @returns {protocol.CreateGroupResp} CreateGroupResp instance
         */
        CreateGroupResp.create = function create(properties) {
            return new CreateGroupResp(properties);
        };

        /**
         * Encodes the specified CreateGroupResp message. Does not implicitly {@link protocol.CreateGroupResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.CreateGroupResp
         * @static
         * @param {protocol.ICreateGroupResp} message CreateGroupResp message or plain object to encode
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
         * Encodes the specified CreateGroupResp message, length delimited. Does not implicitly {@link protocol.CreateGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CreateGroupResp
         * @static
         * @param {protocol.ICreateGroupResp} message CreateGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CreateGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CreateGroupResp} CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CreateGroupResp();
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
         * @memberof protocol.CreateGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CreateGroupResp} CreateGroupResp
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
         * @memberof protocol.CreateGroupResp
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
         * @memberof protocol.CreateGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CreateGroupResp} CreateGroupResp
         */
        CreateGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CreateGroupResp)
                return object;
            var message = new $root.protocol.CreateGroupResp();
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
         * @memberof protocol.CreateGroupResp
         * @static
         * @param {protocol.CreateGroupResp} message CreateGroupResp
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
         * @memberof protocol.CreateGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateGroupResp
         * @function getTypeUrl
         * @memberof protocol.CreateGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.CreateGroupResp";
        };

        return CreateGroupResp;
    })();

    protocol.JoinGroupReq = (function() {

        /**
         * Properties of a JoinGroupReq.
         * @memberof protocol
         * @interface IJoinGroupReq
         * @property {string|null} [groupId] JoinGroupReq groupId
         * @property {string|null} [uid] JoinGroupReq uid
         */

        /**
         * Constructs a new JoinGroupReq.
         * @memberof protocol
         * @classdesc Represents a JoinGroupReq.
         * @implements IJoinGroupReq
         * @constructor
         * @param {protocol.IJoinGroupReq=} [properties] Properties to set
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
         * @memberof protocol.JoinGroupReq
         * @instance
         */
        JoinGroupReq.prototype.groupId = "";

        /**
         * JoinGroupReq uid.
         * @member {string} uid
         * @memberof protocol.JoinGroupReq
         * @instance
         */
        JoinGroupReq.prototype.uid = "";

        /**
         * Creates a new JoinGroupReq instance using the specified properties.
         * @function create
         * @memberof protocol.JoinGroupReq
         * @static
         * @param {protocol.IJoinGroupReq=} [properties] Properties to set
         * @returns {protocol.JoinGroupReq} JoinGroupReq instance
         */
        JoinGroupReq.create = function create(properties) {
            return new JoinGroupReq(properties);
        };

        /**
         * Encodes the specified JoinGroupReq message. Does not implicitly {@link protocol.JoinGroupReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.JoinGroupReq
         * @static
         * @param {protocol.IJoinGroupReq} message JoinGroupReq message or plain object to encode
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
         * Encodes the specified JoinGroupReq message, length delimited. Does not implicitly {@link protocol.JoinGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.JoinGroupReq
         * @static
         * @param {protocol.IJoinGroupReq} message JoinGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.JoinGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.JoinGroupReq} JoinGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.JoinGroupReq();
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
         * @memberof protocol.JoinGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.JoinGroupReq} JoinGroupReq
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
         * @memberof protocol.JoinGroupReq
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
         * @memberof protocol.JoinGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.JoinGroupReq} JoinGroupReq
         */
        JoinGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.JoinGroupReq)
                return object;
            var message = new $root.protocol.JoinGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a JoinGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.JoinGroupReq
         * @static
         * @param {protocol.JoinGroupReq} message JoinGroupReq
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
         * @memberof protocol.JoinGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinGroupReq
         * @function getTypeUrl
         * @memberof protocol.JoinGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.JoinGroupReq";
        };

        return JoinGroupReq;
    })();

    protocol.JoinGroupResp = (function() {

        /**
         * Properties of a JoinGroupResp.
         * @memberof protocol
         * @interface IJoinGroupResp
         * @property {number|null} [code] JoinGroupResp code
         * @property {string|null} [msg] JoinGroupResp msg
         */

        /**
         * Constructs a new JoinGroupResp.
         * @memberof protocol
         * @classdesc Represents a JoinGroupResp.
         * @implements IJoinGroupResp
         * @constructor
         * @param {protocol.IJoinGroupResp=} [properties] Properties to set
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
         * @memberof protocol.JoinGroupResp
         * @instance
         */
        JoinGroupResp.prototype.code = 0;

        /**
         * JoinGroupResp msg.
         * @member {string} msg
         * @memberof protocol.JoinGroupResp
         * @instance
         */
        JoinGroupResp.prototype.msg = "";

        /**
         * Creates a new JoinGroupResp instance using the specified properties.
         * @function create
         * @memberof protocol.JoinGroupResp
         * @static
         * @param {protocol.IJoinGroupResp=} [properties] Properties to set
         * @returns {protocol.JoinGroupResp} JoinGroupResp instance
         */
        JoinGroupResp.create = function create(properties) {
            return new JoinGroupResp(properties);
        };

        /**
         * Encodes the specified JoinGroupResp message. Does not implicitly {@link protocol.JoinGroupResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.JoinGroupResp
         * @static
         * @param {protocol.IJoinGroupResp} message JoinGroupResp message or plain object to encode
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
         * Encodes the specified JoinGroupResp message, length delimited. Does not implicitly {@link protocol.JoinGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.JoinGroupResp
         * @static
         * @param {protocol.IJoinGroupResp} message JoinGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.JoinGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.JoinGroupResp} JoinGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.JoinGroupResp();
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
         * @memberof protocol.JoinGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.JoinGroupResp} JoinGroupResp
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
         * @memberof protocol.JoinGroupResp
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
         * @memberof protocol.JoinGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.JoinGroupResp} JoinGroupResp
         */
        JoinGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.JoinGroupResp)
                return object;
            var message = new $root.protocol.JoinGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a JoinGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.JoinGroupResp
         * @static
         * @param {protocol.JoinGroupResp} message JoinGroupResp
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
         * @memberof protocol.JoinGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinGroupResp
         * @function getTypeUrl
         * @memberof protocol.JoinGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.JoinGroupResp";
        };

        return JoinGroupResp;
    })();

    protocol.GroupListReq = (function() {

        /**
         * Properties of a GroupListReq.
         * @memberof protocol
         * @interface IGroupListReq
         * @property {string|null} [uid] GroupListReq uid
         */

        /**
         * Constructs a new GroupListReq.
         * @memberof protocol
         * @classdesc Represents a GroupListReq.
         * @implements IGroupListReq
         * @constructor
         * @param {protocol.IGroupListReq=} [properties] Properties to set
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
         * @memberof protocol.GroupListReq
         * @instance
         */
        GroupListReq.prototype.uid = "";

        /**
         * Creates a new GroupListReq instance using the specified properties.
         * @function create
         * @memberof protocol.GroupListReq
         * @static
         * @param {protocol.IGroupListReq=} [properties] Properties to set
         * @returns {protocol.GroupListReq} GroupListReq instance
         */
        GroupListReq.create = function create(properties) {
            return new GroupListReq(properties);
        };

        /**
         * Encodes the specified GroupListReq message. Does not implicitly {@link protocol.GroupListReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupListReq
         * @static
         * @param {protocol.IGroupListReq} message GroupListReq message or plain object to encode
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
         * Encodes the specified GroupListReq message, length delimited. Does not implicitly {@link protocol.GroupListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupListReq
         * @static
         * @param {protocol.IGroupListReq} message GroupListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupListReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupListReq} GroupListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupListReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupListReq();
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
         * @memberof protocol.GroupListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupListReq} GroupListReq
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
         * @memberof protocol.GroupListReq
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
         * @memberof protocol.GroupListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupListReq} GroupListReq
         */
        GroupListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupListReq)
                return object;
            var message = new $root.protocol.GroupListReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a GroupListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupListReq
         * @static
         * @param {protocol.GroupListReq} message GroupListReq
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
         * @memberof protocol.GroupListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupListReq
         * @function getTypeUrl
         * @memberof protocol.GroupListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupListReq";
        };

        return GroupListReq;
    })();

    protocol.GroupListResp = (function() {

        /**
         * Properties of a GroupListResp.
         * @memberof protocol
         * @interface IGroupListResp
         * @property {number|null} [code] GroupListResp code
         * @property {string|null} [msg] GroupListResp msg
         * @property {Array.<protocol.IGroup>|null} [groups] GroupListResp groups
         */

        /**
         * Constructs a new GroupListResp.
         * @memberof protocol
         * @classdesc Represents a GroupListResp.
         * @implements IGroupListResp
         * @constructor
         * @param {protocol.IGroupListResp=} [properties] Properties to set
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
         * @memberof protocol.GroupListResp
         * @instance
         */
        GroupListResp.prototype.code = 0;

        /**
         * GroupListResp msg.
         * @member {string} msg
         * @memberof protocol.GroupListResp
         * @instance
         */
        GroupListResp.prototype.msg = "";

        /**
         * GroupListResp groups.
         * @member {Array.<protocol.IGroup>} groups
         * @memberof protocol.GroupListResp
         * @instance
         */
        GroupListResp.prototype.groups = $util.emptyArray;

        /**
         * Creates a new GroupListResp instance using the specified properties.
         * @function create
         * @memberof protocol.GroupListResp
         * @static
         * @param {protocol.IGroupListResp=} [properties] Properties to set
         * @returns {protocol.GroupListResp} GroupListResp instance
         */
        GroupListResp.create = function create(properties) {
            return new GroupListResp(properties);
        };

        /**
         * Encodes the specified GroupListResp message. Does not implicitly {@link protocol.GroupListResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupListResp
         * @static
         * @param {protocol.IGroupListResp} message GroupListResp message or plain object to encode
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
                    $root.protocol.Group.encode(message.groups[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupListResp message, length delimited. Does not implicitly {@link protocol.GroupListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupListResp
         * @static
         * @param {protocol.IGroupListResp} message GroupListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupListResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupListResp} GroupListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupListResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupListResp();
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
                        message.groups.push($root.protocol.Group.decode(reader, reader.uint32()));
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
         * @memberof protocol.GroupListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupListResp} GroupListResp
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
         * @memberof protocol.GroupListResp
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
                    var error = $root.protocol.Group.verify(message.groups[i]);
                    if (error)
                        return "groups." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GroupListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GroupListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupListResp} GroupListResp
         */
        GroupListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupListResp)
                return object;
            var message = new $root.protocol.GroupListResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.groups) {
                if (!Array.isArray(object.groups))
                    throw TypeError(".protocol.GroupListResp.groups: array expected");
                message.groups = [];
                for (var i = 0; i < object.groups.length; ++i) {
                    if (typeof object.groups[i] !== "object")
                        throw TypeError(".protocol.GroupListResp.groups: object expected");
                    message.groups[i] = $root.protocol.Group.fromObject(object.groups[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupListResp
         * @static
         * @param {protocol.GroupListResp} message GroupListResp
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
                    object.groups[j] = $root.protocol.Group.toObject(message.groups[j], options);
            }
            return object;
        };

        /**
         * Converts this GroupListResp to JSON.
         * @function toJSON
         * @memberof protocol.GroupListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupListResp
         * @function getTypeUrl
         * @memberof protocol.GroupListResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupListResp";
        };

        return GroupListResp;
    })();

    protocol.GroupInfoReq = (function() {

        /**
         * Properties of a GroupInfoReq.
         * @memberof protocol
         * @interface IGroupInfoReq
         * @property {string|null} [groupId] GroupInfoReq groupId
         */

        /**
         * Constructs a new GroupInfoReq.
         * @memberof protocol
         * @classdesc Represents a GroupInfoReq.
         * @implements IGroupInfoReq
         * @constructor
         * @param {protocol.IGroupInfoReq=} [properties] Properties to set
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
         * @memberof protocol.GroupInfoReq
         * @instance
         */
        GroupInfoReq.prototype.groupId = "";

        /**
         * Creates a new GroupInfoReq instance using the specified properties.
         * @function create
         * @memberof protocol.GroupInfoReq
         * @static
         * @param {protocol.IGroupInfoReq=} [properties] Properties to set
         * @returns {protocol.GroupInfoReq} GroupInfoReq instance
         */
        GroupInfoReq.create = function create(properties) {
            return new GroupInfoReq(properties);
        };

        /**
         * Encodes the specified GroupInfoReq message. Does not implicitly {@link protocol.GroupInfoReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupInfoReq
         * @static
         * @param {protocol.IGroupInfoReq} message GroupInfoReq message or plain object to encode
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
         * Encodes the specified GroupInfoReq message, length delimited. Does not implicitly {@link protocol.GroupInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupInfoReq
         * @static
         * @param {protocol.IGroupInfoReq} message GroupInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupInfoReq} GroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfoReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupInfoReq();
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
         * @memberof protocol.GroupInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupInfoReq} GroupInfoReq
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
         * @memberof protocol.GroupInfoReq
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
         * @memberof protocol.GroupInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupInfoReq} GroupInfoReq
         */
        GroupInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupInfoReq)
                return object;
            var message = new $root.protocol.GroupInfoReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            return message;
        };

        /**
         * Creates a plain object from a GroupInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupInfoReq
         * @static
         * @param {protocol.GroupInfoReq} message GroupInfoReq
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
         * @memberof protocol.GroupInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupInfoReq
         * @function getTypeUrl
         * @memberof protocol.GroupInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupInfoReq";
        };

        return GroupInfoReq;
    })();

    protocol.GroupInfoResp = (function() {

        /**
         * Properties of a GroupInfoResp.
         * @memberof protocol
         * @interface IGroupInfoResp
         * @property {number|null} [code] GroupInfoResp code
         * @property {string|null} [msg] GroupInfoResp msg
         * @property {protocol.IGroup|null} [group] GroupInfoResp group
         */

        /**
         * Constructs a new GroupInfoResp.
         * @memberof protocol
         * @classdesc Represents a GroupInfoResp.
         * @implements IGroupInfoResp
         * @constructor
         * @param {protocol.IGroupInfoResp=} [properties] Properties to set
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
         * @memberof protocol.GroupInfoResp
         * @instance
         */
        GroupInfoResp.prototype.code = 0;

        /**
         * GroupInfoResp msg.
         * @member {string} msg
         * @memberof protocol.GroupInfoResp
         * @instance
         */
        GroupInfoResp.prototype.msg = "";

        /**
         * GroupInfoResp group.
         * @member {protocol.IGroup|null|undefined} group
         * @memberof protocol.GroupInfoResp
         * @instance
         */
        GroupInfoResp.prototype.group = null;

        /**
         * Creates a new GroupInfoResp instance using the specified properties.
         * @function create
         * @memberof protocol.GroupInfoResp
         * @static
         * @param {protocol.IGroupInfoResp=} [properties] Properties to set
         * @returns {protocol.GroupInfoResp} GroupInfoResp instance
         */
        GroupInfoResp.create = function create(properties) {
            return new GroupInfoResp(properties);
        };

        /**
         * Encodes the specified GroupInfoResp message. Does not implicitly {@link protocol.GroupInfoResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupInfoResp
         * @static
         * @param {protocol.IGroupInfoResp} message GroupInfoResp message or plain object to encode
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
                $root.protocol.Group.encode(message.group, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupInfoResp message, length delimited. Does not implicitly {@link protocol.GroupInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupInfoResp
         * @static
         * @param {protocol.IGroupInfoResp} message GroupInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupInfoResp} GroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfoResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupInfoResp();
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
                        message.group = $root.protocol.Group.decode(reader, reader.uint32());
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
         * @memberof protocol.GroupInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupInfoResp} GroupInfoResp
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
         * @memberof protocol.GroupInfoResp
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
                var error = $root.protocol.Group.verify(message.group);
                if (error)
                    return "group." + error;
            }
            return null;
        };

        /**
         * Creates a GroupInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GroupInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupInfoResp} GroupInfoResp
         */
        GroupInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupInfoResp)
                return object;
            var message = new $root.protocol.GroupInfoResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.group != null) {
                if (typeof object.group !== "object")
                    throw TypeError(".protocol.GroupInfoResp.group: object expected");
                message.group = $root.protocol.Group.fromObject(object.group);
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupInfoResp
         * @static
         * @param {protocol.GroupInfoResp} message GroupInfoResp
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
                object.group = $root.protocol.Group.toObject(message.group, options);
            return object;
        };

        /**
         * Converts this GroupInfoResp to JSON.
         * @function toJSON
         * @memberof protocol.GroupInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupInfoResp
         * @function getTypeUrl
         * @memberof protocol.GroupInfoResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupInfoResp";
        };

        return GroupInfoResp;
    })();

    protocol.GroupMembersReq = (function() {

        /**
         * Properties of a GroupMembersReq.
         * @memberof protocol
         * @interface IGroupMembersReq
         * @property {string|null} [groupId] GroupMembersReq groupId
         */

        /**
         * Constructs a new GroupMembersReq.
         * @memberof protocol
         * @classdesc Represents a GroupMembersReq.
         * @implements IGroupMembersReq
         * @constructor
         * @param {protocol.IGroupMembersReq=} [properties] Properties to set
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
         * @memberof protocol.GroupMembersReq
         * @instance
         */
        GroupMembersReq.prototype.groupId = "";

        /**
         * Creates a new GroupMembersReq instance using the specified properties.
         * @function create
         * @memberof protocol.GroupMembersReq
         * @static
         * @param {protocol.IGroupMembersReq=} [properties] Properties to set
         * @returns {protocol.GroupMembersReq} GroupMembersReq instance
         */
        GroupMembersReq.create = function create(properties) {
            return new GroupMembersReq(properties);
        };

        /**
         * Encodes the specified GroupMembersReq message. Does not implicitly {@link protocol.GroupMembersReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupMembersReq
         * @static
         * @param {protocol.IGroupMembersReq} message GroupMembersReq message or plain object to encode
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
         * Encodes the specified GroupMembersReq message, length delimited. Does not implicitly {@link protocol.GroupMembersReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupMembersReq
         * @static
         * @param {protocol.IGroupMembersReq} message GroupMembersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMembersReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMembersReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupMembersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupMembersReq} GroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMembersReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupMembersReq();
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
         * @memberof protocol.GroupMembersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupMembersReq} GroupMembersReq
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
         * @memberof protocol.GroupMembersReq
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
         * @memberof protocol.GroupMembersReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupMembersReq} GroupMembersReq
         */
        GroupMembersReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupMembersReq)
                return object;
            var message = new $root.protocol.GroupMembersReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            return message;
        };

        /**
         * Creates a plain object from a GroupMembersReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupMembersReq
         * @static
         * @param {protocol.GroupMembersReq} message GroupMembersReq
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
         * @memberof protocol.GroupMembersReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMembersReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMembersReq
         * @function getTypeUrl
         * @memberof protocol.GroupMembersReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMembersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupMembersReq";
        };

        return GroupMembersReq;
    })();

    protocol.GroupMembersResp = (function() {

        /**
         * Properties of a GroupMembersResp.
         * @memberof protocol
         * @interface IGroupMembersResp
         * @property {number|null} [code] GroupMembersResp code
         * @property {string|null} [msg] GroupMembersResp msg
         * @property {Array.<protocol.IGroupMember>|null} [members] GroupMembersResp members
         */

        /**
         * Constructs a new GroupMembersResp.
         * @memberof protocol
         * @classdesc Represents a GroupMembersResp.
         * @implements IGroupMembersResp
         * @constructor
         * @param {protocol.IGroupMembersResp=} [properties] Properties to set
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
         * @memberof protocol.GroupMembersResp
         * @instance
         */
        GroupMembersResp.prototype.code = 0;

        /**
         * GroupMembersResp msg.
         * @member {string} msg
         * @memberof protocol.GroupMembersResp
         * @instance
         */
        GroupMembersResp.prototype.msg = "";

        /**
         * GroupMembersResp members.
         * @member {Array.<protocol.IGroupMember>} members
         * @memberof protocol.GroupMembersResp
         * @instance
         */
        GroupMembersResp.prototype.members = $util.emptyArray;

        /**
         * Creates a new GroupMembersResp instance using the specified properties.
         * @function create
         * @memberof protocol.GroupMembersResp
         * @static
         * @param {protocol.IGroupMembersResp=} [properties] Properties to set
         * @returns {protocol.GroupMembersResp} GroupMembersResp instance
         */
        GroupMembersResp.create = function create(properties) {
            return new GroupMembersResp(properties);
        };

        /**
         * Encodes the specified GroupMembersResp message. Does not implicitly {@link protocol.GroupMembersResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupMembersResp
         * @static
         * @param {protocol.IGroupMembersResp} message GroupMembersResp message or plain object to encode
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
                    $root.protocol.GroupMember.encode(message.members[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupMembersResp message, length delimited. Does not implicitly {@link protocol.GroupMembersResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupMembersResp
         * @static
         * @param {protocol.IGroupMembersResp} message GroupMembersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMembersResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMembersResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupMembersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupMembersResp} GroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMembersResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupMembersResp();
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
                        message.members.push($root.protocol.GroupMember.decode(reader, reader.uint32()));
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
         * @memberof protocol.GroupMembersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupMembersResp} GroupMembersResp
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
         * @memberof protocol.GroupMembersResp
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
                    var error = $root.protocol.GroupMember.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GroupMembersResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GroupMembersResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupMembersResp} GroupMembersResp
         */
        GroupMembersResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupMembersResp)
                return object;
            var message = new $root.protocol.GroupMembersResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".protocol.GroupMembersResp.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".protocol.GroupMembersResp.members: object expected");
                    message.members[i] = $root.protocol.GroupMember.fromObject(object.members[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupMembersResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupMembersResp
         * @static
         * @param {protocol.GroupMembersResp} message GroupMembersResp
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
                    object.members[j] = $root.protocol.GroupMember.toObject(message.members[j], options);
            }
            return object;
        };

        /**
         * Converts this GroupMembersResp to JSON.
         * @function toJSON
         * @memberof protocol.GroupMembersResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMembersResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMembersResp
         * @function getTypeUrl
         * @memberof protocol.GroupMembersResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMembersResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupMembersResp";
        };

        return GroupMembersResp;
    })();

    protocol.LeaveGroupReq = (function() {

        /**
         * Properties of a LeaveGroupReq.
         * @memberof protocol
         * @interface ILeaveGroupReq
         * @property {string|null} [groupId] LeaveGroupReq groupId
         * @property {string|null} [uid] LeaveGroupReq uid
         */

        /**
         * Constructs a new LeaveGroupReq.
         * @memberof protocol
         * @classdesc Represents a LeaveGroupReq.
         * @implements ILeaveGroupReq
         * @constructor
         * @param {protocol.ILeaveGroupReq=} [properties] Properties to set
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
         * @memberof protocol.LeaveGroupReq
         * @instance
         */
        LeaveGroupReq.prototype.groupId = "";

        /**
         * LeaveGroupReq uid.
         * @member {string} uid
         * @memberof protocol.LeaveGroupReq
         * @instance
         */
        LeaveGroupReq.prototype.uid = "";

        /**
         * Creates a new LeaveGroupReq instance using the specified properties.
         * @function create
         * @memberof protocol.LeaveGroupReq
         * @static
         * @param {protocol.ILeaveGroupReq=} [properties] Properties to set
         * @returns {protocol.LeaveGroupReq} LeaveGroupReq instance
         */
        LeaveGroupReq.create = function create(properties) {
            return new LeaveGroupReq(properties);
        };

        /**
         * Encodes the specified LeaveGroupReq message. Does not implicitly {@link protocol.LeaveGroupReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.LeaveGroupReq
         * @static
         * @param {protocol.ILeaveGroupReq} message LeaveGroupReq message or plain object to encode
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
         * Encodes the specified LeaveGroupReq message, length delimited. Does not implicitly {@link protocol.LeaveGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LeaveGroupReq
         * @static
         * @param {protocol.ILeaveGroupReq} message LeaveGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LeaveGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LeaveGroupReq} LeaveGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LeaveGroupReq();
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
         * @memberof protocol.LeaveGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LeaveGroupReq} LeaveGroupReq
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
         * @memberof protocol.LeaveGroupReq
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
         * @memberof protocol.LeaveGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LeaveGroupReq} LeaveGroupReq
         */
        LeaveGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LeaveGroupReq)
                return object;
            var message = new $root.protocol.LeaveGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a LeaveGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LeaveGroupReq
         * @static
         * @param {protocol.LeaveGroupReq} message LeaveGroupReq
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
         * @memberof protocol.LeaveGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LeaveGroupReq
         * @function getTypeUrl
         * @memberof protocol.LeaveGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LeaveGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.LeaveGroupReq";
        };

        return LeaveGroupReq;
    })();

    protocol.LeaveGroupResp = (function() {

        /**
         * Properties of a LeaveGroupResp.
         * @memberof protocol
         * @interface ILeaveGroupResp
         * @property {number|null} [code] LeaveGroupResp code
         * @property {string|null} [msg] LeaveGroupResp msg
         */

        /**
         * Constructs a new LeaveGroupResp.
         * @memberof protocol
         * @classdesc Represents a LeaveGroupResp.
         * @implements ILeaveGroupResp
         * @constructor
         * @param {protocol.ILeaveGroupResp=} [properties] Properties to set
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
         * @memberof protocol.LeaveGroupResp
         * @instance
         */
        LeaveGroupResp.prototype.code = 0;

        /**
         * LeaveGroupResp msg.
         * @member {string} msg
         * @memberof protocol.LeaveGroupResp
         * @instance
         */
        LeaveGroupResp.prototype.msg = "";

        /**
         * Creates a new LeaveGroupResp instance using the specified properties.
         * @function create
         * @memberof protocol.LeaveGroupResp
         * @static
         * @param {protocol.ILeaveGroupResp=} [properties] Properties to set
         * @returns {protocol.LeaveGroupResp} LeaveGroupResp instance
         */
        LeaveGroupResp.create = function create(properties) {
            return new LeaveGroupResp(properties);
        };

        /**
         * Encodes the specified LeaveGroupResp message. Does not implicitly {@link protocol.LeaveGroupResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.LeaveGroupResp
         * @static
         * @param {protocol.ILeaveGroupResp} message LeaveGroupResp message or plain object to encode
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
         * Encodes the specified LeaveGroupResp message, length delimited. Does not implicitly {@link protocol.LeaveGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LeaveGroupResp
         * @static
         * @param {protocol.ILeaveGroupResp} message LeaveGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LeaveGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LeaveGroupResp} LeaveGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LeaveGroupResp();
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
         * @memberof protocol.LeaveGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LeaveGroupResp} LeaveGroupResp
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
         * @memberof protocol.LeaveGroupResp
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
         * @memberof protocol.LeaveGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LeaveGroupResp} LeaveGroupResp
         */
        LeaveGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LeaveGroupResp)
                return object;
            var message = new $root.protocol.LeaveGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a LeaveGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LeaveGroupResp
         * @static
         * @param {protocol.LeaveGroupResp} message LeaveGroupResp
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
         * @memberof protocol.LeaveGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LeaveGroupResp
         * @function getTypeUrl
         * @memberof protocol.LeaveGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LeaveGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.LeaveGroupResp";
        };

        return LeaveGroupResp;
    })();

    protocol.GroupMemberRoleReq = (function() {

        /**
         * Properties of a GroupMemberRoleReq.
         * @memberof protocol
         * @interface IGroupMemberRoleReq
         * @property {string|null} [groupId] GroupMemberRoleReq groupId
         * @property {string|null} [uid] GroupMemberRoleReq uid
         */

        /**
         * Constructs a new GroupMemberRoleReq.
         * @memberof protocol
         * @classdesc Represents a GroupMemberRoleReq.
         * @implements IGroupMemberRoleReq
         * @constructor
         * @param {protocol.IGroupMemberRoleReq=} [properties] Properties to set
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
         * @memberof protocol.GroupMemberRoleReq
         * @instance
         */
        GroupMemberRoleReq.prototype.groupId = "";

        /**
         * GroupMemberRoleReq uid.
         * @member {string} uid
         * @memberof protocol.GroupMemberRoleReq
         * @instance
         */
        GroupMemberRoleReq.prototype.uid = "";

        /**
         * Creates a new GroupMemberRoleReq instance using the specified properties.
         * @function create
         * @memberof protocol.GroupMemberRoleReq
         * @static
         * @param {protocol.IGroupMemberRoleReq=} [properties] Properties to set
         * @returns {protocol.GroupMemberRoleReq} GroupMemberRoleReq instance
         */
        GroupMemberRoleReq.create = function create(properties) {
            return new GroupMemberRoleReq(properties);
        };

        /**
         * Encodes the specified GroupMemberRoleReq message. Does not implicitly {@link protocol.GroupMemberRoleReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupMemberRoleReq
         * @static
         * @param {protocol.IGroupMemberRoleReq} message GroupMemberRoleReq message or plain object to encode
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
         * Encodes the specified GroupMemberRoleReq message, length delimited. Does not implicitly {@link protocol.GroupMemberRoleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupMemberRoleReq
         * @static
         * @param {protocol.IGroupMemberRoleReq} message GroupMemberRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberRoleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMemberRoleReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupMemberRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupMemberRoleReq} GroupMemberRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberRoleReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupMemberRoleReq();
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
         * @memberof protocol.GroupMemberRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupMemberRoleReq} GroupMemberRoleReq
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
         * @memberof protocol.GroupMemberRoleReq
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
         * @memberof protocol.GroupMemberRoleReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupMemberRoleReq} GroupMemberRoleReq
         */
        GroupMemberRoleReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupMemberRoleReq)
                return object;
            var message = new $root.protocol.GroupMemberRoleReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a GroupMemberRoleReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupMemberRoleReq
         * @static
         * @param {protocol.GroupMemberRoleReq} message GroupMemberRoleReq
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
         * @memberof protocol.GroupMemberRoleReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMemberRoleReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMemberRoleReq
         * @function getTypeUrl
         * @memberof protocol.GroupMemberRoleReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMemberRoleReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupMemberRoleReq";
        };

        return GroupMemberRoleReq;
    })();

    protocol.GroupMemberRoleResp = (function() {

        /**
         * Properties of a GroupMemberRoleResp.
         * @memberof protocol
         * @interface IGroupMemberRoleResp
         * @property {number|null} [code] GroupMemberRoleResp code
         * @property {string|null} [msg] GroupMemberRoleResp msg
         * @property {string|null} [role] GroupMemberRoleResp role
         */

        /**
         * Constructs a new GroupMemberRoleResp.
         * @memberof protocol
         * @classdesc Represents a GroupMemberRoleResp.
         * @implements IGroupMemberRoleResp
         * @constructor
         * @param {protocol.IGroupMemberRoleResp=} [properties] Properties to set
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
         * @memberof protocol.GroupMemberRoleResp
         * @instance
         */
        GroupMemberRoleResp.prototype.code = 0;

        /**
         * GroupMemberRoleResp msg.
         * @member {string} msg
         * @memberof protocol.GroupMemberRoleResp
         * @instance
         */
        GroupMemberRoleResp.prototype.msg = "";

        /**
         * GroupMemberRoleResp role.
         * @member {string} role
         * @memberof protocol.GroupMemberRoleResp
         * @instance
         */
        GroupMemberRoleResp.prototype.role = "";

        /**
         * Creates a new GroupMemberRoleResp instance using the specified properties.
         * @function create
         * @memberof protocol.GroupMemberRoleResp
         * @static
         * @param {protocol.IGroupMemberRoleResp=} [properties] Properties to set
         * @returns {protocol.GroupMemberRoleResp} GroupMemberRoleResp instance
         */
        GroupMemberRoleResp.create = function create(properties) {
            return new GroupMemberRoleResp(properties);
        };

        /**
         * Encodes the specified GroupMemberRoleResp message. Does not implicitly {@link protocol.GroupMemberRoleResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupMemberRoleResp
         * @static
         * @param {protocol.IGroupMemberRoleResp} message GroupMemberRoleResp message or plain object to encode
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
         * Encodes the specified GroupMemberRoleResp message, length delimited. Does not implicitly {@link protocol.GroupMemberRoleResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupMemberRoleResp
         * @static
         * @param {protocol.IGroupMemberRoleResp} message GroupMemberRoleResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberRoleResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMemberRoleResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupMemberRoleResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupMemberRoleResp} GroupMemberRoleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberRoleResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupMemberRoleResp();
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
         * @memberof protocol.GroupMemberRoleResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupMemberRoleResp} GroupMemberRoleResp
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
         * @memberof protocol.GroupMemberRoleResp
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
         * @memberof protocol.GroupMemberRoleResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupMemberRoleResp} GroupMemberRoleResp
         */
        GroupMemberRoleResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupMemberRoleResp)
                return object;
            var message = new $root.protocol.GroupMemberRoleResp();
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
         * @memberof protocol.GroupMemberRoleResp
         * @static
         * @param {protocol.GroupMemberRoleResp} message GroupMemberRoleResp
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
         * @memberof protocol.GroupMemberRoleResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMemberRoleResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMemberRoleResp
         * @function getTypeUrl
         * @memberof protocol.GroupMemberRoleResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMemberRoleResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupMemberRoleResp";
        };

        return GroupMemberRoleResp;
    })();

    protocol.GroupMemberInfoReq = (function() {

        /**
         * Properties of a GroupMemberInfoReq.
         * @memberof protocol
         * @interface IGroupMemberInfoReq
         * @property {string|null} [groupId] GroupMemberInfoReq groupId
         * @property {string|null} [uid] GroupMemberInfoReq uid
         */

        /**
         * Constructs a new GroupMemberInfoReq.
         * @memberof protocol
         * @classdesc Represents a GroupMemberInfoReq.
         * @implements IGroupMemberInfoReq
         * @constructor
         * @param {protocol.IGroupMemberInfoReq=} [properties] Properties to set
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
         * @memberof protocol.GroupMemberInfoReq
         * @instance
         */
        GroupMemberInfoReq.prototype.groupId = "";

        /**
         * GroupMemberInfoReq uid.
         * @member {string} uid
         * @memberof protocol.GroupMemberInfoReq
         * @instance
         */
        GroupMemberInfoReq.prototype.uid = "";

        /**
         * Creates a new GroupMemberInfoReq instance using the specified properties.
         * @function create
         * @memberof protocol.GroupMemberInfoReq
         * @static
         * @param {protocol.IGroupMemberInfoReq=} [properties] Properties to set
         * @returns {protocol.GroupMemberInfoReq} GroupMemberInfoReq instance
         */
        GroupMemberInfoReq.create = function create(properties) {
            return new GroupMemberInfoReq(properties);
        };

        /**
         * Encodes the specified GroupMemberInfoReq message. Does not implicitly {@link protocol.GroupMemberInfoReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupMemberInfoReq
         * @static
         * @param {protocol.IGroupMemberInfoReq} message GroupMemberInfoReq message or plain object to encode
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
         * Encodes the specified GroupMemberInfoReq message, length delimited. Does not implicitly {@link protocol.GroupMemberInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupMemberInfoReq
         * @static
         * @param {protocol.IGroupMemberInfoReq} message GroupMemberInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMemberInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupMemberInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupMemberInfoReq} GroupMemberInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberInfoReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupMemberInfoReq();
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
         * @memberof protocol.GroupMemberInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupMemberInfoReq} GroupMemberInfoReq
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
         * @memberof protocol.GroupMemberInfoReq
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
         * @memberof protocol.GroupMemberInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupMemberInfoReq} GroupMemberInfoReq
         */
        GroupMemberInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupMemberInfoReq)
                return object;
            var message = new $root.protocol.GroupMemberInfoReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a GroupMemberInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupMemberInfoReq
         * @static
         * @param {protocol.GroupMemberInfoReq} message GroupMemberInfoReq
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
         * @memberof protocol.GroupMemberInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMemberInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMemberInfoReq
         * @function getTypeUrl
         * @memberof protocol.GroupMemberInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMemberInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupMemberInfoReq";
        };

        return GroupMemberInfoReq;
    })();

    protocol.GroupMemberInfoResp = (function() {

        /**
         * Properties of a GroupMemberInfoResp.
         * @memberof protocol
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
         * @memberof protocol
         * @classdesc Represents a GroupMemberInfoResp.
         * @implements IGroupMemberInfoResp
         * @constructor
         * @param {protocol.IGroupMemberInfoResp=} [properties] Properties to set
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
         * @memberof protocol.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.code = 0;

        /**
         * GroupMemberInfoResp msg.
         * @member {string} msg
         * @memberof protocol.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.msg = "";

        /**
         * GroupMemberInfoResp uid.
         * @member {string} uid
         * @memberof protocol.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.uid = "";

        /**
         * GroupMemberInfoResp username.
         * @member {string} username
         * @memberof protocol.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.username = "";

        /**
         * GroupMemberInfoResp nickname.
         * @member {string} nickname
         * @memberof protocol.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.nickname = "";

        /**
         * GroupMemberInfoResp role.
         * @member {string} role
         * @memberof protocol.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.role = "";

        /**
         * GroupMemberInfoResp joinTime.
         * @member {number|Long} joinTime
         * @memberof protocol.GroupMemberInfoResp
         * @instance
         */
        GroupMemberInfoResp.prototype.joinTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GroupMemberInfoResp instance using the specified properties.
         * @function create
         * @memberof protocol.GroupMemberInfoResp
         * @static
         * @param {protocol.IGroupMemberInfoResp=} [properties] Properties to set
         * @returns {protocol.GroupMemberInfoResp} GroupMemberInfoResp instance
         */
        GroupMemberInfoResp.create = function create(properties) {
            return new GroupMemberInfoResp(properties);
        };

        /**
         * Encodes the specified GroupMemberInfoResp message. Does not implicitly {@link protocol.GroupMemberInfoResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupMemberInfoResp
         * @static
         * @param {protocol.IGroupMemberInfoResp} message GroupMemberInfoResp message or plain object to encode
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
         * Encodes the specified GroupMemberInfoResp message, length delimited. Does not implicitly {@link protocol.GroupMemberInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupMemberInfoResp
         * @static
         * @param {protocol.IGroupMemberInfoResp} message GroupMemberInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMemberInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMemberInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupMemberInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupMemberInfoResp} GroupMemberInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMemberInfoResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupMemberInfoResp();
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
         * @memberof protocol.GroupMemberInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupMemberInfoResp} GroupMemberInfoResp
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
         * @memberof protocol.GroupMemberInfoResp
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
         * @memberof protocol.GroupMemberInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupMemberInfoResp} GroupMemberInfoResp
         */
        GroupMemberInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupMemberInfoResp)
                return object;
            var message = new $root.protocol.GroupMemberInfoResp();
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
         * @memberof protocol.GroupMemberInfoResp
         * @static
         * @param {protocol.GroupMemberInfoResp} message GroupMemberInfoResp
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
         * @memberof protocol.GroupMemberInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMemberInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMemberInfoResp
         * @function getTypeUrl
         * @memberof protocol.GroupMemberInfoResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMemberInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupMemberInfoResp";
        };

        return GroupMemberInfoResp;
    })();

    protocol.InviteToGroupReq = (function() {

        /**
         * Properties of an InviteToGroupReq.
         * @memberof protocol
         * @interface IInviteToGroupReq
         * @property {string|null} [groupId] InviteToGroupReq groupId
         * @property {string|null} [inviterUid] InviteToGroupReq inviterUid
         * @property {Array.<string>|null} [inviteeUids] InviteToGroupReq inviteeUids
         */

        /**
         * Constructs a new InviteToGroupReq.
         * @memberof protocol
         * @classdesc Represents an InviteToGroupReq.
         * @implements IInviteToGroupReq
         * @constructor
         * @param {protocol.IInviteToGroupReq=} [properties] Properties to set
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
         * @memberof protocol.InviteToGroupReq
         * @instance
         */
        InviteToGroupReq.prototype.groupId = "";

        /**
         * InviteToGroupReq inviterUid.
         * @member {string} inviterUid
         * @memberof protocol.InviteToGroupReq
         * @instance
         */
        InviteToGroupReq.prototype.inviterUid = "";

        /**
         * InviteToGroupReq inviteeUids.
         * @member {Array.<string>} inviteeUids
         * @memberof protocol.InviteToGroupReq
         * @instance
         */
        InviteToGroupReq.prototype.inviteeUids = $util.emptyArray;

        /**
         * Creates a new InviteToGroupReq instance using the specified properties.
         * @function create
         * @memberof protocol.InviteToGroupReq
         * @static
         * @param {protocol.IInviteToGroupReq=} [properties] Properties to set
         * @returns {protocol.InviteToGroupReq} InviteToGroupReq instance
         */
        InviteToGroupReq.create = function create(properties) {
            return new InviteToGroupReq(properties);
        };

        /**
         * Encodes the specified InviteToGroupReq message. Does not implicitly {@link protocol.InviteToGroupReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.InviteToGroupReq
         * @static
         * @param {protocol.IInviteToGroupReq} message InviteToGroupReq message or plain object to encode
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
         * Encodes the specified InviteToGroupReq message, length delimited. Does not implicitly {@link protocol.InviteToGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.InviteToGroupReq
         * @static
         * @param {protocol.IInviteToGroupReq} message InviteToGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteToGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InviteToGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.InviteToGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.InviteToGroupReq} InviteToGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteToGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.InviteToGroupReq();
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
         * @memberof protocol.InviteToGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.InviteToGroupReq} InviteToGroupReq
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
         * @memberof protocol.InviteToGroupReq
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
         * @memberof protocol.InviteToGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.InviteToGroupReq} InviteToGroupReq
         */
        InviteToGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.InviteToGroupReq)
                return object;
            var message = new $root.protocol.InviteToGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.inviterUid != null)
                message.inviterUid = String(object.inviterUid);
            if (object.inviteeUids) {
                if (!Array.isArray(object.inviteeUids))
                    throw TypeError(".protocol.InviteToGroupReq.inviteeUids: array expected");
                message.inviteeUids = [];
                for (var i = 0; i < object.inviteeUids.length; ++i)
                    message.inviteeUids[i] = String(object.inviteeUids[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an InviteToGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.InviteToGroupReq
         * @static
         * @param {protocol.InviteToGroupReq} message InviteToGroupReq
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
         * @memberof protocol.InviteToGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InviteToGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InviteToGroupReq
         * @function getTypeUrl
         * @memberof protocol.InviteToGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InviteToGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.InviteToGroupReq";
        };

        return InviteToGroupReq;
    })();

    protocol.InviteToGroupResp = (function() {

        /**
         * Properties of an InviteToGroupResp.
         * @memberof protocol
         * @interface IInviteToGroupResp
         * @property {number|null} [code] InviteToGroupResp code
         * @property {string|null} [msg] InviteToGroupResp msg
         */

        /**
         * Constructs a new InviteToGroupResp.
         * @memberof protocol
         * @classdesc Represents an InviteToGroupResp.
         * @implements IInviteToGroupResp
         * @constructor
         * @param {protocol.IInviteToGroupResp=} [properties] Properties to set
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
         * @memberof protocol.InviteToGroupResp
         * @instance
         */
        InviteToGroupResp.prototype.code = 0;

        /**
         * InviteToGroupResp msg.
         * @member {string} msg
         * @memberof protocol.InviteToGroupResp
         * @instance
         */
        InviteToGroupResp.prototype.msg = "";

        /**
         * Creates a new InviteToGroupResp instance using the specified properties.
         * @function create
         * @memberof protocol.InviteToGroupResp
         * @static
         * @param {protocol.IInviteToGroupResp=} [properties] Properties to set
         * @returns {protocol.InviteToGroupResp} InviteToGroupResp instance
         */
        InviteToGroupResp.create = function create(properties) {
            return new InviteToGroupResp(properties);
        };

        /**
         * Encodes the specified InviteToGroupResp message. Does not implicitly {@link protocol.InviteToGroupResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.InviteToGroupResp
         * @static
         * @param {protocol.IInviteToGroupResp} message InviteToGroupResp message or plain object to encode
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
         * Encodes the specified InviteToGroupResp message, length delimited. Does not implicitly {@link protocol.InviteToGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.InviteToGroupResp
         * @static
         * @param {protocol.IInviteToGroupResp} message InviteToGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteToGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InviteToGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.InviteToGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.InviteToGroupResp} InviteToGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteToGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.InviteToGroupResp();
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
         * @memberof protocol.InviteToGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.InviteToGroupResp} InviteToGroupResp
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
         * @memberof protocol.InviteToGroupResp
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
         * @memberof protocol.InviteToGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.InviteToGroupResp} InviteToGroupResp
         */
        InviteToGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.InviteToGroupResp)
                return object;
            var message = new $root.protocol.InviteToGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an InviteToGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.InviteToGroupResp
         * @static
         * @param {protocol.InviteToGroupResp} message InviteToGroupResp
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
         * @memberof protocol.InviteToGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InviteToGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InviteToGroupResp
         * @function getTypeUrl
         * @memberof protocol.InviteToGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InviteToGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.InviteToGroupResp";
        };

        return InviteToGroupResp;
    })();

    protocol.SetGroupNicknameReq = (function() {

        /**
         * Properties of a SetGroupNicknameReq.
         * @memberof protocol
         * @interface ISetGroupNicknameReq
         * @property {string|null} [groupId] SetGroupNicknameReq groupId
         * @property {string|null} [uid] SetGroupNicknameReq uid
         * @property {string|null} [nickname] SetGroupNicknameReq nickname
         */

        /**
         * Constructs a new SetGroupNicknameReq.
         * @memberof protocol
         * @classdesc Represents a SetGroupNicknameReq.
         * @implements ISetGroupNicknameReq
         * @constructor
         * @param {protocol.ISetGroupNicknameReq=} [properties] Properties to set
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
         * @memberof protocol.SetGroupNicknameReq
         * @instance
         */
        SetGroupNicknameReq.prototype.groupId = "";

        /**
         * SetGroupNicknameReq uid.
         * @member {string} uid
         * @memberof protocol.SetGroupNicknameReq
         * @instance
         */
        SetGroupNicknameReq.prototype.uid = "";

        /**
         * SetGroupNicknameReq nickname.
         * @member {string} nickname
         * @memberof protocol.SetGroupNicknameReq
         * @instance
         */
        SetGroupNicknameReq.prototype.nickname = "";

        /**
         * Creates a new SetGroupNicknameReq instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupNicknameReq
         * @static
         * @param {protocol.ISetGroupNicknameReq=} [properties] Properties to set
         * @returns {protocol.SetGroupNicknameReq} SetGroupNicknameReq instance
         */
        SetGroupNicknameReq.create = function create(properties) {
            return new SetGroupNicknameReq(properties);
        };

        /**
         * Encodes the specified SetGroupNicknameReq message. Does not implicitly {@link protocol.SetGroupNicknameReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupNicknameReq
         * @static
         * @param {protocol.ISetGroupNicknameReq} message SetGroupNicknameReq message or plain object to encode
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
         * Encodes the specified SetGroupNicknameReq message, length delimited. Does not implicitly {@link protocol.SetGroupNicknameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupNicknameReq
         * @static
         * @param {protocol.ISetGroupNicknameReq} message SetGroupNicknameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupNicknameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupNicknameReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupNicknameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupNicknameReq} SetGroupNicknameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupNicknameReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupNicknameReq();
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
         * @memberof protocol.SetGroupNicknameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupNicknameReq} SetGroupNicknameReq
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
         * @memberof protocol.SetGroupNicknameReq
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
         * @memberof protocol.SetGroupNicknameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupNicknameReq} SetGroupNicknameReq
         */
        SetGroupNicknameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupNicknameReq)
                return object;
            var message = new $root.protocol.SetGroupNicknameReq();
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
         * @memberof protocol.SetGroupNicknameReq
         * @static
         * @param {protocol.SetGroupNicknameReq} message SetGroupNicknameReq
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
         * @memberof protocol.SetGroupNicknameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupNicknameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupNicknameReq
         * @function getTypeUrl
         * @memberof protocol.SetGroupNicknameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupNicknameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupNicknameReq";
        };

        return SetGroupNicknameReq;
    })();

    protocol.SetGroupNicknameResp = (function() {

        /**
         * Properties of a SetGroupNicknameResp.
         * @memberof protocol
         * @interface ISetGroupNicknameResp
         * @property {number|null} [code] SetGroupNicknameResp code
         * @property {string|null} [msg] SetGroupNicknameResp msg
         */

        /**
         * Constructs a new SetGroupNicknameResp.
         * @memberof protocol
         * @classdesc Represents a SetGroupNicknameResp.
         * @implements ISetGroupNicknameResp
         * @constructor
         * @param {protocol.ISetGroupNicknameResp=} [properties] Properties to set
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
         * @memberof protocol.SetGroupNicknameResp
         * @instance
         */
        SetGroupNicknameResp.prototype.code = 0;

        /**
         * SetGroupNicknameResp msg.
         * @member {string} msg
         * @memberof protocol.SetGroupNicknameResp
         * @instance
         */
        SetGroupNicknameResp.prototype.msg = "";

        /**
         * Creates a new SetGroupNicknameResp instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupNicknameResp
         * @static
         * @param {protocol.ISetGroupNicknameResp=} [properties] Properties to set
         * @returns {protocol.SetGroupNicknameResp} SetGroupNicknameResp instance
         */
        SetGroupNicknameResp.create = function create(properties) {
            return new SetGroupNicknameResp(properties);
        };

        /**
         * Encodes the specified SetGroupNicknameResp message. Does not implicitly {@link protocol.SetGroupNicknameResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupNicknameResp
         * @static
         * @param {protocol.ISetGroupNicknameResp} message SetGroupNicknameResp message or plain object to encode
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
         * Encodes the specified SetGroupNicknameResp message, length delimited. Does not implicitly {@link protocol.SetGroupNicknameResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupNicknameResp
         * @static
         * @param {protocol.ISetGroupNicknameResp} message SetGroupNicknameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupNicknameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupNicknameResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupNicknameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupNicknameResp} SetGroupNicknameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupNicknameResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupNicknameResp();
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
         * @memberof protocol.SetGroupNicknameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupNicknameResp} SetGroupNicknameResp
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
         * @memberof protocol.SetGroupNicknameResp
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
         * @memberof protocol.SetGroupNicknameResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupNicknameResp} SetGroupNicknameResp
         */
        SetGroupNicknameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupNicknameResp)
                return object;
            var message = new $root.protocol.SetGroupNicknameResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupNicknameResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetGroupNicknameResp
         * @static
         * @param {protocol.SetGroupNicknameResp} message SetGroupNicknameResp
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
         * @memberof protocol.SetGroupNicknameResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupNicknameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupNicknameResp
         * @function getTypeUrl
         * @memberof protocol.SetGroupNicknameResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupNicknameResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupNicknameResp";
        };

        return SetGroupNicknameResp;
    })();

    protocol.SetGroupRemarkReq = (function() {

        /**
         * Properties of a SetGroupRemarkReq.
         * @memberof protocol
         * @interface ISetGroupRemarkReq
         * @property {string|null} [groupId] SetGroupRemarkReq groupId
         * @property {string|null} [uid] SetGroupRemarkReq uid
         * @property {string|null} [remark] SetGroupRemarkReq remark
         */

        /**
         * Constructs a new SetGroupRemarkReq.
         * @memberof protocol
         * @classdesc Represents a SetGroupRemarkReq.
         * @implements ISetGroupRemarkReq
         * @constructor
         * @param {protocol.ISetGroupRemarkReq=} [properties] Properties to set
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
         * @memberof protocol.SetGroupRemarkReq
         * @instance
         */
        SetGroupRemarkReq.prototype.groupId = "";

        /**
         * SetGroupRemarkReq uid.
         * @member {string} uid
         * @memberof protocol.SetGroupRemarkReq
         * @instance
         */
        SetGroupRemarkReq.prototype.uid = "";

        /**
         * SetGroupRemarkReq remark.
         * @member {string} remark
         * @memberof protocol.SetGroupRemarkReq
         * @instance
         */
        SetGroupRemarkReq.prototype.remark = "";

        /**
         * Creates a new SetGroupRemarkReq instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupRemarkReq
         * @static
         * @param {protocol.ISetGroupRemarkReq=} [properties] Properties to set
         * @returns {protocol.SetGroupRemarkReq} SetGroupRemarkReq instance
         */
        SetGroupRemarkReq.create = function create(properties) {
            return new SetGroupRemarkReq(properties);
        };

        /**
         * Encodes the specified SetGroupRemarkReq message. Does not implicitly {@link protocol.SetGroupRemarkReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupRemarkReq
         * @static
         * @param {protocol.ISetGroupRemarkReq} message SetGroupRemarkReq message or plain object to encode
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
         * Encodes the specified SetGroupRemarkReq message, length delimited. Does not implicitly {@link protocol.SetGroupRemarkReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupRemarkReq
         * @static
         * @param {protocol.ISetGroupRemarkReq} message SetGroupRemarkReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupRemarkReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupRemarkReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupRemarkReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupRemarkReq} SetGroupRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupRemarkReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupRemarkReq();
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
         * @memberof protocol.SetGroupRemarkReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupRemarkReq} SetGroupRemarkReq
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
         * @memberof protocol.SetGroupRemarkReq
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
         * @memberof protocol.SetGroupRemarkReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupRemarkReq} SetGroupRemarkReq
         */
        SetGroupRemarkReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupRemarkReq)
                return object;
            var message = new $root.protocol.SetGroupRemarkReq();
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
         * @memberof protocol.SetGroupRemarkReq
         * @static
         * @param {protocol.SetGroupRemarkReq} message SetGroupRemarkReq
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
         * @memberof protocol.SetGroupRemarkReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupRemarkReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupRemarkReq
         * @function getTypeUrl
         * @memberof protocol.SetGroupRemarkReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupRemarkReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupRemarkReq";
        };

        return SetGroupRemarkReq;
    })();

    protocol.SetGroupRemarkResp = (function() {

        /**
         * Properties of a SetGroupRemarkResp.
         * @memberof protocol
         * @interface ISetGroupRemarkResp
         * @property {number|null} [code] SetGroupRemarkResp code
         * @property {string|null} [msg] SetGroupRemarkResp msg
         */

        /**
         * Constructs a new SetGroupRemarkResp.
         * @memberof protocol
         * @classdesc Represents a SetGroupRemarkResp.
         * @implements ISetGroupRemarkResp
         * @constructor
         * @param {protocol.ISetGroupRemarkResp=} [properties] Properties to set
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
         * @memberof protocol.SetGroupRemarkResp
         * @instance
         */
        SetGroupRemarkResp.prototype.code = 0;

        /**
         * SetGroupRemarkResp msg.
         * @member {string} msg
         * @memberof protocol.SetGroupRemarkResp
         * @instance
         */
        SetGroupRemarkResp.prototype.msg = "";

        /**
         * Creates a new SetGroupRemarkResp instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupRemarkResp
         * @static
         * @param {protocol.ISetGroupRemarkResp=} [properties] Properties to set
         * @returns {protocol.SetGroupRemarkResp} SetGroupRemarkResp instance
         */
        SetGroupRemarkResp.create = function create(properties) {
            return new SetGroupRemarkResp(properties);
        };

        /**
         * Encodes the specified SetGroupRemarkResp message. Does not implicitly {@link protocol.SetGroupRemarkResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupRemarkResp
         * @static
         * @param {protocol.ISetGroupRemarkResp} message SetGroupRemarkResp message or plain object to encode
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
         * Encodes the specified SetGroupRemarkResp message, length delimited. Does not implicitly {@link protocol.SetGroupRemarkResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupRemarkResp
         * @static
         * @param {protocol.ISetGroupRemarkResp} message SetGroupRemarkResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupRemarkResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupRemarkResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupRemarkResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupRemarkResp} SetGroupRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupRemarkResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupRemarkResp();
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
         * @memberof protocol.SetGroupRemarkResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupRemarkResp} SetGroupRemarkResp
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
         * @memberof protocol.SetGroupRemarkResp
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
         * @memberof protocol.SetGroupRemarkResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupRemarkResp} SetGroupRemarkResp
         */
        SetGroupRemarkResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupRemarkResp)
                return object;
            var message = new $root.protocol.SetGroupRemarkResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupRemarkResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetGroupRemarkResp
         * @static
         * @param {protocol.SetGroupRemarkResp} message SetGroupRemarkResp
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
         * @memberof protocol.SetGroupRemarkResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupRemarkResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupRemarkResp
         * @function getTypeUrl
         * @memberof protocol.SetGroupRemarkResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupRemarkResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupRemarkResp";
        };

        return SetGroupRemarkResp;
    })();

    protocol.SetGroupDNDReq = (function() {

        /**
         * Properties of a SetGroupDNDReq.
         * @memberof protocol
         * @interface ISetGroupDNDReq
         * @property {string|null} [groupId] SetGroupDNDReq groupId
         * @property {string|null} [uid] SetGroupDNDReq uid
         * @property {boolean|null} [dnd] SetGroupDNDReq dnd
         */

        /**
         * Constructs a new SetGroupDNDReq.
         * @memberof protocol
         * @classdesc Represents a SetGroupDNDReq.
         * @implements ISetGroupDNDReq
         * @constructor
         * @param {protocol.ISetGroupDNDReq=} [properties] Properties to set
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
         * @memberof protocol.SetGroupDNDReq
         * @instance
         */
        SetGroupDNDReq.prototype.groupId = "";

        /**
         * SetGroupDNDReq uid.
         * @member {string} uid
         * @memberof protocol.SetGroupDNDReq
         * @instance
         */
        SetGroupDNDReq.prototype.uid = "";

        /**
         * SetGroupDNDReq dnd.
         * @member {boolean} dnd
         * @memberof protocol.SetGroupDNDReq
         * @instance
         */
        SetGroupDNDReq.prototype.dnd = false;

        /**
         * Creates a new SetGroupDNDReq instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupDNDReq
         * @static
         * @param {protocol.ISetGroupDNDReq=} [properties] Properties to set
         * @returns {protocol.SetGroupDNDReq} SetGroupDNDReq instance
         */
        SetGroupDNDReq.create = function create(properties) {
            return new SetGroupDNDReq(properties);
        };

        /**
         * Encodes the specified SetGroupDNDReq message. Does not implicitly {@link protocol.SetGroupDNDReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupDNDReq
         * @static
         * @param {protocol.ISetGroupDNDReq} message SetGroupDNDReq message or plain object to encode
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
         * Encodes the specified SetGroupDNDReq message, length delimited. Does not implicitly {@link protocol.SetGroupDNDReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupDNDReq
         * @static
         * @param {protocol.ISetGroupDNDReq} message SetGroupDNDReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupDNDReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupDNDReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupDNDReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupDNDReq} SetGroupDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupDNDReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupDNDReq();
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
         * @memberof protocol.SetGroupDNDReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupDNDReq} SetGroupDNDReq
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
         * @memberof protocol.SetGroupDNDReq
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
         * @memberof protocol.SetGroupDNDReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupDNDReq} SetGroupDNDReq
         */
        SetGroupDNDReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupDNDReq)
                return object;
            var message = new $root.protocol.SetGroupDNDReq();
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
         * @memberof protocol.SetGroupDNDReq
         * @static
         * @param {protocol.SetGroupDNDReq} message SetGroupDNDReq
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
         * @memberof protocol.SetGroupDNDReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupDNDReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupDNDReq
         * @function getTypeUrl
         * @memberof protocol.SetGroupDNDReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupDNDReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupDNDReq";
        };

        return SetGroupDNDReq;
    })();

    protocol.SetGroupDNDResp = (function() {

        /**
         * Properties of a SetGroupDNDResp.
         * @memberof protocol
         * @interface ISetGroupDNDResp
         * @property {number|null} [code] SetGroupDNDResp code
         * @property {string|null} [msg] SetGroupDNDResp msg
         */

        /**
         * Constructs a new SetGroupDNDResp.
         * @memberof protocol
         * @classdesc Represents a SetGroupDNDResp.
         * @implements ISetGroupDNDResp
         * @constructor
         * @param {protocol.ISetGroupDNDResp=} [properties] Properties to set
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
         * @memberof protocol.SetGroupDNDResp
         * @instance
         */
        SetGroupDNDResp.prototype.code = 0;

        /**
         * SetGroupDNDResp msg.
         * @member {string} msg
         * @memberof protocol.SetGroupDNDResp
         * @instance
         */
        SetGroupDNDResp.prototype.msg = "";

        /**
         * Creates a new SetGroupDNDResp instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupDNDResp
         * @static
         * @param {protocol.ISetGroupDNDResp=} [properties] Properties to set
         * @returns {protocol.SetGroupDNDResp} SetGroupDNDResp instance
         */
        SetGroupDNDResp.create = function create(properties) {
            return new SetGroupDNDResp(properties);
        };

        /**
         * Encodes the specified SetGroupDNDResp message. Does not implicitly {@link protocol.SetGroupDNDResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupDNDResp
         * @static
         * @param {protocol.ISetGroupDNDResp} message SetGroupDNDResp message or plain object to encode
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
         * Encodes the specified SetGroupDNDResp message, length delimited. Does not implicitly {@link protocol.SetGroupDNDResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupDNDResp
         * @static
         * @param {protocol.ISetGroupDNDResp} message SetGroupDNDResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupDNDResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupDNDResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupDNDResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupDNDResp} SetGroupDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupDNDResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupDNDResp();
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
         * @memberof protocol.SetGroupDNDResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupDNDResp} SetGroupDNDResp
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
         * @memberof protocol.SetGroupDNDResp
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
         * @memberof protocol.SetGroupDNDResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupDNDResp} SetGroupDNDResp
         */
        SetGroupDNDResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupDNDResp)
                return object;
            var message = new $root.protocol.SetGroupDNDResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupDNDResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetGroupDNDResp
         * @static
         * @param {protocol.SetGroupDNDResp} message SetGroupDNDResp
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
         * @memberof protocol.SetGroupDNDResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupDNDResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupDNDResp
         * @function getTypeUrl
         * @memberof protocol.SetGroupDNDResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupDNDResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupDNDResp";
        };

        return SetGroupDNDResp;
    })();

    protocol.SetGroupMuteReq = (function() {

        /**
         * Properties of a SetGroupMuteReq.
         * @memberof protocol
         * @interface ISetGroupMuteReq
         * @property {string|null} [groupId] SetGroupMuteReq groupId
         * @property {string|null} [operatorUid] SetGroupMuteReq operatorUid
         * @property {string|null} [targetUid] SetGroupMuteReq targetUid
         * @property {boolean|null} [mute] SetGroupMuteReq mute
         */

        /**
         * Constructs a new SetGroupMuteReq.
         * @memberof protocol
         * @classdesc Represents a SetGroupMuteReq.
         * @implements ISetGroupMuteReq
         * @constructor
         * @param {protocol.ISetGroupMuteReq=} [properties] Properties to set
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
         * @memberof protocol.SetGroupMuteReq
         * @instance
         */
        SetGroupMuteReq.prototype.groupId = "";

        /**
         * SetGroupMuteReq operatorUid.
         * @member {string} operatorUid
         * @memberof protocol.SetGroupMuteReq
         * @instance
         */
        SetGroupMuteReq.prototype.operatorUid = "";

        /**
         * SetGroupMuteReq targetUid.
         * @member {string} targetUid
         * @memberof protocol.SetGroupMuteReq
         * @instance
         */
        SetGroupMuteReq.prototype.targetUid = "";

        /**
         * SetGroupMuteReq mute.
         * @member {boolean} mute
         * @memberof protocol.SetGroupMuteReq
         * @instance
         */
        SetGroupMuteReq.prototype.mute = false;

        /**
         * Creates a new SetGroupMuteReq instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupMuteReq
         * @static
         * @param {protocol.ISetGroupMuteReq=} [properties] Properties to set
         * @returns {protocol.SetGroupMuteReq} SetGroupMuteReq instance
         */
        SetGroupMuteReq.create = function create(properties) {
            return new SetGroupMuteReq(properties);
        };

        /**
         * Encodes the specified SetGroupMuteReq message. Does not implicitly {@link protocol.SetGroupMuteReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupMuteReq
         * @static
         * @param {protocol.ISetGroupMuteReq} message SetGroupMuteReq message or plain object to encode
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
         * Encodes the specified SetGroupMuteReq message, length delimited. Does not implicitly {@link protocol.SetGroupMuteReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupMuteReq
         * @static
         * @param {protocol.ISetGroupMuteReq} message SetGroupMuteReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupMuteReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupMuteReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupMuteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupMuteReq} SetGroupMuteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupMuteReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupMuteReq();
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
         * @memberof protocol.SetGroupMuteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupMuteReq} SetGroupMuteReq
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
         * @memberof protocol.SetGroupMuteReq
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
         * @memberof protocol.SetGroupMuteReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupMuteReq} SetGroupMuteReq
         */
        SetGroupMuteReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupMuteReq)
                return object;
            var message = new $root.protocol.SetGroupMuteReq();
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
         * @memberof protocol.SetGroupMuteReq
         * @static
         * @param {protocol.SetGroupMuteReq} message SetGroupMuteReq
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
         * @memberof protocol.SetGroupMuteReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupMuteReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupMuteReq
         * @function getTypeUrl
         * @memberof protocol.SetGroupMuteReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupMuteReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupMuteReq";
        };

        return SetGroupMuteReq;
    })();

    protocol.SetGroupMuteResp = (function() {

        /**
         * Properties of a SetGroupMuteResp.
         * @memberof protocol
         * @interface ISetGroupMuteResp
         * @property {number|null} [code] SetGroupMuteResp code
         * @property {string|null} [msg] SetGroupMuteResp msg
         */

        /**
         * Constructs a new SetGroupMuteResp.
         * @memberof protocol
         * @classdesc Represents a SetGroupMuteResp.
         * @implements ISetGroupMuteResp
         * @constructor
         * @param {protocol.ISetGroupMuteResp=} [properties] Properties to set
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
         * @memberof protocol.SetGroupMuteResp
         * @instance
         */
        SetGroupMuteResp.prototype.code = 0;

        /**
         * SetGroupMuteResp msg.
         * @member {string} msg
         * @memberof protocol.SetGroupMuteResp
         * @instance
         */
        SetGroupMuteResp.prototype.msg = "";

        /**
         * Creates a new SetGroupMuteResp instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupMuteResp
         * @static
         * @param {protocol.ISetGroupMuteResp=} [properties] Properties to set
         * @returns {protocol.SetGroupMuteResp} SetGroupMuteResp instance
         */
        SetGroupMuteResp.create = function create(properties) {
            return new SetGroupMuteResp(properties);
        };

        /**
         * Encodes the specified SetGroupMuteResp message. Does not implicitly {@link protocol.SetGroupMuteResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupMuteResp
         * @static
         * @param {protocol.ISetGroupMuteResp} message SetGroupMuteResp message or plain object to encode
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
         * Encodes the specified SetGroupMuteResp message, length delimited. Does not implicitly {@link protocol.SetGroupMuteResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupMuteResp
         * @static
         * @param {protocol.ISetGroupMuteResp} message SetGroupMuteResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupMuteResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupMuteResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupMuteResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupMuteResp} SetGroupMuteResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupMuteResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupMuteResp();
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
         * @memberof protocol.SetGroupMuteResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupMuteResp} SetGroupMuteResp
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
         * @memberof protocol.SetGroupMuteResp
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
         * @memberof protocol.SetGroupMuteResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupMuteResp} SetGroupMuteResp
         */
        SetGroupMuteResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupMuteResp)
                return object;
            var message = new $root.protocol.SetGroupMuteResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupMuteResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetGroupMuteResp
         * @static
         * @param {protocol.SetGroupMuteResp} message SetGroupMuteResp
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
         * @memberof protocol.SetGroupMuteResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupMuteResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupMuteResp
         * @function getTypeUrl
         * @memberof protocol.SetGroupMuteResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupMuteResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupMuteResp";
        };

        return SetGroupMuteResp;
    })();

    protocol.KickFromGroupReq = (function() {

        /**
         * Properties of a KickFromGroupReq.
         * @memberof protocol
         * @interface IKickFromGroupReq
         * @property {string|null} [groupId] KickFromGroupReq groupId
         * @property {string|null} [operatorUid] KickFromGroupReq operatorUid
         * @property {string|null} [targetUid] KickFromGroupReq targetUid
         */

        /**
         * Constructs a new KickFromGroupReq.
         * @memberof protocol
         * @classdesc Represents a KickFromGroupReq.
         * @implements IKickFromGroupReq
         * @constructor
         * @param {protocol.IKickFromGroupReq=} [properties] Properties to set
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
         * @memberof protocol.KickFromGroupReq
         * @instance
         */
        KickFromGroupReq.prototype.groupId = "";

        /**
         * KickFromGroupReq operatorUid.
         * @member {string} operatorUid
         * @memberof protocol.KickFromGroupReq
         * @instance
         */
        KickFromGroupReq.prototype.operatorUid = "";

        /**
         * KickFromGroupReq targetUid.
         * @member {string} targetUid
         * @memberof protocol.KickFromGroupReq
         * @instance
         */
        KickFromGroupReq.prototype.targetUid = "";

        /**
         * Creates a new KickFromGroupReq instance using the specified properties.
         * @function create
         * @memberof protocol.KickFromGroupReq
         * @static
         * @param {protocol.IKickFromGroupReq=} [properties] Properties to set
         * @returns {protocol.KickFromGroupReq} KickFromGroupReq instance
         */
        KickFromGroupReq.create = function create(properties) {
            return new KickFromGroupReq(properties);
        };

        /**
         * Encodes the specified KickFromGroupReq message. Does not implicitly {@link protocol.KickFromGroupReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.KickFromGroupReq
         * @static
         * @param {protocol.IKickFromGroupReq} message KickFromGroupReq message or plain object to encode
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
         * Encodes the specified KickFromGroupReq message, length delimited. Does not implicitly {@link protocol.KickFromGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.KickFromGroupReq
         * @static
         * @param {protocol.IKickFromGroupReq} message KickFromGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickFromGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickFromGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.KickFromGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.KickFromGroupReq} KickFromGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickFromGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.KickFromGroupReq();
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
         * @memberof protocol.KickFromGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.KickFromGroupReq} KickFromGroupReq
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
         * @memberof protocol.KickFromGroupReq
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
         * @memberof protocol.KickFromGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.KickFromGroupReq} KickFromGroupReq
         */
        KickFromGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.KickFromGroupReq)
                return object;
            var message = new $root.protocol.KickFromGroupReq();
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
         * @memberof protocol.KickFromGroupReq
         * @static
         * @param {protocol.KickFromGroupReq} message KickFromGroupReq
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
         * @memberof protocol.KickFromGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickFromGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KickFromGroupReq
         * @function getTypeUrl
         * @memberof protocol.KickFromGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickFromGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.KickFromGroupReq";
        };

        return KickFromGroupReq;
    })();

    protocol.KickFromGroupResp = (function() {

        /**
         * Properties of a KickFromGroupResp.
         * @memberof protocol
         * @interface IKickFromGroupResp
         * @property {number|null} [code] KickFromGroupResp code
         * @property {string|null} [msg] KickFromGroupResp msg
         */

        /**
         * Constructs a new KickFromGroupResp.
         * @memberof protocol
         * @classdesc Represents a KickFromGroupResp.
         * @implements IKickFromGroupResp
         * @constructor
         * @param {protocol.IKickFromGroupResp=} [properties] Properties to set
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
         * @memberof protocol.KickFromGroupResp
         * @instance
         */
        KickFromGroupResp.prototype.code = 0;

        /**
         * KickFromGroupResp msg.
         * @member {string} msg
         * @memberof protocol.KickFromGroupResp
         * @instance
         */
        KickFromGroupResp.prototype.msg = "";

        /**
         * Creates a new KickFromGroupResp instance using the specified properties.
         * @function create
         * @memberof protocol.KickFromGroupResp
         * @static
         * @param {protocol.IKickFromGroupResp=} [properties] Properties to set
         * @returns {protocol.KickFromGroupResp} KickFromGroupResp instance
         */
        KickFromGroupResp.create = function create(properties) {
            return new KickFromGroupResp(properties);
        };

        /**
         * Encodes the specified KickFromGroupResp message. Does not implicitly {@link protocol.KickFromGroupResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.KickFromGroupResp
         * @static
         * @param {protocol.IKickFromGroupResp} message KickFromGroupResp message or plain object to encode
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
         * Encodes the specified KickFromGroupResp message, length delimited. Does not implicitly {@link protocol.KickFromGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.KickFromGroupResp
         * @static
         * @param {protocol.IKickFromGroupResp} message KickFromGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickFromGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickFromGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.KickFromGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.KickFromGroupResp} KickFromGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickFromGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.KickFromGroupResp();
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
         * @memberof protocol.KickFromGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.KickFromGroupResp} KickFromGroupResp
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
         * @memberof protocol.KickFromGroupResp
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
         * @memberof protocol.KickFromGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.KickFromGroupResp} KickFromGroupResp
         */
        KickFromGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.KickFromGroupResp)
                return object;
            var message = new $root.protocol.KickFromGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a KickFromGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.KickFromGroupResp
         * @static
         * @param {protocol.KickFromGroupResp} message KickFromGroupResp
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
         * @memberof protocol.KickFromGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickFromGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KickFromGroupResp
         * @function getTypeUrl
         * @memberof protocol.KickFromGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickFromGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.KickFromGroupResp";
        };

        return KickFromGroupResp;
    })();

    protocol.UpdateGroupNameReq = (function() {

        /**
         * Properties of an UpdateGroupNameReq.
         * @memberof protocol
         * @interface IUpdateGroupNameReq
         * @property {string|null} [groupId] UpdateGroupNameReq groupId
         * @property {string|null} [operatorUid] UpdateGroupNameReq operatorUid
         * @property {string|null} [newName] UpdateGroupNameReq newName
         */

        /**
         * Constructs a new UpdateGroupNameReq.
         * @memberof protocol
         * @classdesc Represents an UpdateGroupNameReq.
         * @implements IUpdateGroupNameReq
         * @constructor
         * @param {protocol.IUpdateGroupNameReq=} [properties] Properties to set
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
         * @memberof protocol.UpdateGroupNameReq
         * @instance
         */
        UpdateGroupNameReq.prototype.groupId = "";

        /**
         * UpdateGroupNameReq operatorUid.
         * @member {string} operatorUid
         * @memberof protocol.UpdateGroupNameReq
         * @instance
         */
        UpdateGroupNameReq.prototype.operatorUid = "";

        /**
         * UpdateGroupNameReq newName.
         * @member {string} newName
         * @memberof protocol.UpdateGroupNameReq
         * @instance
         */
        UpdateGroupNameReq.prototype.newName = "";

        /**
         * Creates a new UpdateGroupNameReq instance using the specified properties.
         * @function create
         * @memberof protocol.UpdateGroupNameReq
         * @static
         * @param {protocol.IUpdateGroupNameReq=} [properties] Properties to set
         * @returns {protocol.UpdateGroupNameReq} UpdateGroupNameReq instance
         */
        UpdateGroupNameReq.create = function create(properties) {
            return new UpdateGroupNameReq(properties);
        };

        /**
         * Encodes the specified UpdateGroupNameReq message. Does not implicitly {@link protocol.UpdateGroupNameReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpdateGroupNameReq
         * @static
         * @param {protocol.IUpdateGroupNameReq} message UpdateGroupNameReq message or plain object to encode
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
         * Encodes the specified UpdateGroupNameReq message, length delimited. Does not implicitly {@link protocol.UpdateGroupNameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpdateGroupNameReq
         * @static
         * @param {protocol.IUpdateGroupNameReq} message UpdateGroupNameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupNameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGroupNameReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpdateGroupNameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpdateGroupNameReq} UpdateGroupNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupNameReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpdateGroupNameReq();
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
         * @memberof protocol.UpdateGroupNameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpdateGroupNameReq} UpdateGroupNameReq
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
         * @memberof protocol.UpdateGroupNameReq
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
         * @memberof protocol.UpdateGroupNameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpdateGroupNameReq} UpdateGroupNameReq
         */
        UpdateGroupNameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpdateGroupNameReq)
                return object;
            var message = new $root.protocol.UpdateGroupNameReq();
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
         * @memberof protocol.UpdateGroupNameReq
         * @static
         * @param {protocol.UpdateGroupNameReq} message UpdateGroupNameReq
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
         * @memberof protocol.UpdateGroupNameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGroupNameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateGroupNameReq
         * @function getTypeUrl
         * @memberof protocol.UpdateGroupNameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateGroupNameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpdateGroupNameReq";
        };

        return UpdateGroupNameReq;
    })();

    protocol.UpdateGroupNameResp = (function() {

        /**
         * Properties of an UpdateGroupNameResp.
         * @memberof protocol
         * @interface IUpdateGroupNameResp
         * @property {number|null} [code] UpdateGroupNameResp code
         * @property {string|null} [msg] UpdateGroupNameResp msg
         */

        /**
         * Constructs a new UpdateGroupNameResp.
         * @memberof protocol
         * @classdesc Represents an UpdateGroupNameResp.
         * @implements IUpdateGroupNameResp
         * @constructor
         * @param {protocol.IUpdateGroupNameResp=} [properties] Properties to set
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
         * @memberof protocol.UpdateGroupNameResp
         * @instance
         */
        UpdateGroupNameResp.prototype.code = 0;

        /**
         * UpdateGroupNameResp msg.
         * @member {string} msg
         * @memberof protocol.UpdateGroupNameResp
         * @instance
         */
        UpdateGroupNameResp.prototype.msg = "";

        /**
         * Creates a new UpdateGroupNameResp instance using the specified properties.
         * @function create
         * @memberof protocol.UpdateGroupNameResp
         * @static
         * @param {protocol.IUpdateGroupNameResp=} [properties] Properties to set
         * @returns {protocol.UpdateGroupNameResp} UpdateGroupNameResp instance
         */
        UpdateGroupNameResp.create = function create(properties) {
            return new UpdateGroupNameResp(properties);
        };

        /**
         * Encodes the specified UpdateGroupNameResp message. Does not implicitly {@link protocol.UpdateGroupNameResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpdateGroupNameResp
         * @static
         * @param {protocol.IUpdateGroupNameResp} message UpdateGroupNameResp message or plain object to encode
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
         * Encodes the specified UpdateGroupNameResp message, length delimited. Does not implicitly {@link protocol.UpdateGroupNameResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpdateGroupNameResp
         * @static
         * @param {protocol.IUpdateGroupNameResp} message UpdateGroupNameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupNameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGroupNameResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpdateGroupNameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpdateGroupNameResp} UpdateGroupNameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupNameResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpdateGroupNameResp();
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
         * @memberof protocol.UpdateGroupNameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpdateGroupNameResp} UpdateGroupNameResp
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
         * @memberof protocol.UpdateGroupNameResp
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
         * @memberof protocol.UpdateGroupNameResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpdateGroupNameResp} UpdateGroupNameResp
         */
        UpdateGroupNameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpdateGroupNameResp)
                return object;
            var message = new $root.protocol.UpdateGroupNameResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateGroupNameResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UpdateGroupNameResp
         * @static
         * @param {protocol.UpdateGroupNameResp} message UpdateGroupNameResp
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
         * @memberof protocol.UpdateGroupNameResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGroupNameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateGroupNameResp
         * @function getTypeUrl
         * @memberof protocol.UpdateGroupNameResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateGroupNameResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpdateGroupNameResp";
        };

        return UpdateGroupNameResp;
    })();

    protocol.SetGroupAdminReq = (function() {

        /**
         * Properties of a SetGroupAdminReq.
         * @memberof protocol
         * @interface ISetGroupAdminReq
         * @property {string|null} [groupId] SetGroupAdminReq groupId
         * @property {string|null} [operatorUid] SetGroupAdminReq operatorUid
         * @property {string|null} [targetUid] SetGroupAdminReq targetUid
         * @property {boolean|null} [setAdmin] SetGroupAdminReq setAdmin
         */

        /**
         * Constructs a new SetGroupAdminReq.
         * @memberof protocol
         * @classdesc Represents a SetGroupAdminReq.
         * @implements ISetGroupAdminReq
         * @constructor
         * @param {protocol.ISetGroupAdminReq=} [properties] Properties to set
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
         * @memberof protocol.SetGroupAdminReq
         * @instance
         */
        SetGroupAdminReq.prototype.groupId = "";

        /**
         * SetGroupAdminReq operatorUid.
         * @member {string} operatorUid
         * @memberof protocol.SetGroupAdminReq
         * @instance
         */
        SetGroupAdminReq.prototype.operatorUid = "";

        /**
         * SetGroupAdminReq targetUid.
         * @member {string} targetUid
         * @memberof protocol.SetGroupAdminReq
         * @instance
         */
        SetGroupAdminReq.prototype.targetUid = "";

        /**
         * SetGroupAdminReq setAdmin.
         * @member {boolean} setAdmin
         * @memberof protocol.SetGroupAdminReq
         * @instance
         */
        SetGroupAdminReq.prototype.setAdmin = false;

        /**
         * Creates a new SetGroupAdminReq instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupAdminReq
         * @static
         * @param {protocol.ISetGroupAdminReq=} [properties] Properties to set
         * @returns {protocol.SetGroupAdminReq} SetGroupAdminReq instance
         */
        SetGroupAdminReq.create = function create(properties) {
            return new SetGroupAdminReq(properties);
        };

        /**
         * Encodes the specified SetGroupAdminReq message. Does not implicitly {@link protocol.SetGroupAdminReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupAdminReq
         * @static
         * @param {protocol.ISetGroupAdminReq} message SetGroupAdminReq message or plain object to encode
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
         * Encodes the specified SetGroupAdminReq message, length delimited. Does not implicitly {@link protocol.SetGroupAdminReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupAdminReq
         * @static
         * @param {protocol.ISetGroupAdminReq} message SetGroupAdminReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupAdminReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupAdminReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupAdminReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupAdminReq} SetGroupAdminReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupAdminReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupAdminReq();
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
         * @memberof protocol.SetGroupAdminReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupAdminReq} SetGroupAdminReq
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
         * @memberof protocol.SetGroupAdminReq
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
         * @memberof protocol.SetGroupAdminReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupAdminReq} SetGroupAdminReq
         */
        SetGroupAdminReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupAdminReq)
                return object;
            var message = new $root.protocol.SetGroupAdminReq();
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
         * @memberof protocol.SetGroupAdminReq
         * @static
         * @param {protocol.SetGroupAdminReq} message SetGroupAdminReq
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
         * @memberof protocol.SetGroupAdminReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupAdminReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupAdminReq
         * @function getTypeUrl
         * @memberof protocol.SetGroupAdminReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupAdminReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupAdminReq";
        };

        return SetGroupAdminReq;
    })();

    protocol.SetGroupAdminResp = (function() {

        /**
         * Properties of a SetGroupAdminResp.
         * @memberof protocol
         * @interface ISetGroupAdminResp
         * @property {number|null} [code] SetGroupAdminResp code
         * @property {string|null} [msg] SetGroupAdminResp msg
         */

        /**
         * Constructs a new SetGroupAdminResp.
         * @memberof protocol
         * @classdesc Represents a SetGroupAdminResp.
         * @implements ISetGroupAdminResp
         * @constructor
         * @param {protocol.ISetGroupAdminResp=} [properties] Properties to set
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
         * @memberof protocol.SetGroupAdminResp
         * @instance
         */
        SetGroupAdminResp.prototype.code = 0;

        /**
         * SetGroupAdminResp msg.
         * @member {string} msg
         * @memberof protocol.SetGroupAdminResp
         * @instance
         */
        SetGroupAdminResp.prototype.msg = "";

        /**
         * Creates a new SetGroupAdminResp instance using the specified properties.
         * @function create
         * @memberof protocol.SetGroupAdminResp
         * @static
         * @param {protocol.ISetGroupAdminResp=} [properties] Properties to set
         * @returns {protocol.SetGroupAdminResp} SetGroupAdminResp instance
         */
        SetGroupAdminResp.create = function create(properties) {
            return new SetGroupAdminResp(properties);
        };

        /**
         * Encodes the specified SetGroupAdminResp message. Does not implicitly {@link protocol.SetGroupAdminResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.SetGroupAdminResp
         * @static
         * @param {protocol.ISetGroupAdminResp} message SetGroupAdminResp message or plain object to encode
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
         * Encodes the specified SetGroupAdminResp message, length delimited. Does not implicitly {@link protocol.SetGroupAdminResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SetGroupAdminResp
         * @static
         * @param {protocol.ISetGroupAdminResp} message SetGroupAdminResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetGroupAdminResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetGroupAdminResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SetGroupAdminResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SetGroupAdminResp} SetGroupAdminResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetGroupAdminResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SetGroupAdminResp();
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
         * @memberof protocol.SetGroupAdminResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SetGroupAdminResp} SetGroupAdminResp
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
         * @memberof protocol.SetGroupAdminResp
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
         * @memberof protocol.SetGroupAdminResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SetGroupAdminResp} SetGroupAdminResp
         */
        SetGroupAdminResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SetGroupAdminResp)
                return object;
            var message = new $root.protocol.SetGroupAdminResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SetGroupAdminResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SetGroupAdminResp
         * @static
         * @param {protocol.SetGroupAdminResp} message SetGroupAdminResp
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
         * @memberof protocol.SetGroupAdminResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetGroupAdminResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetGroupAdminResp
         * @function getTypeUrl
         * @memberof protocol.SetGroupAdminResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetGroupAdminResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SetGroupAdminResp";
        };

        return SetGroupAdminResp;
    })();

    protocol.DismissGroupReq = (function() {

        /**
         * Properties of a DismissGroupReq.
         * @memberof protocol
         * @interface IDismissGroupReq
         * @property {string|null} [groupId] DismissGroupReq groupId
         * @property {string|null} [operatorUid] DismissGroupReq operatorUid
         */

        /**
         * Constructs a new DismissGroupReq.
         * @memberof protocol
         * @classdesc Represents a DismissGroupReq.
         * @implements IDismissGroupReq
         * @constructor
         * @param {protocol.IDismissGroupReq=} [properties] Properties to set
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
         * @memberof protocol.DismissGroupReq
         * @instance
         */
        DismissGroupReq.prototype.groupId = "";

        /**
         * DismissGroupReq operatorUid.
         * @member {string} operatorUid
         * @memberof protocol.DismissGroupReq
         * @instance
         */
        DismissGroupReq.prototype.operatorUid = "";

        /**
         * Creates a new DismissGroupReq instance using the specified properties.
         * @function create
         * @memberof protocol.DismissGroupReq
         * @static
         * @param {protocol.IDismissGroupReq=} [properties] Properties to set
         * @returns {protocol.DismissGroupReq} DismissGroupReq instance
         */
        DismissGroupReq.create = function create(properties) {
            return new DismissGroupReq(properties);
        };

        /**
         * Encodes the specified DismissGroupReq message. Does not implicitly {@link protocol.DismissGroupReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.DismissGroupReq
         * @static
         * @param {protocol.IDismissGroupReq} message DismissGroupReq message or plain object to encode
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
         * Encodes the specified DismissGroupReq message, length delimited. Does not implicitly {@link protocol.DismissGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DismissGroupReq
         * @static
         * @param {protocol.IDismissGroupReq} message DismissGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DismissGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DismissGroupReq} DismissGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissGroupReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DismissGroupReq();
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
         * @memberof protocol.DismissGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DismissGroupReq} DismissGroupReq
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
         * @memberof protocol.DismissGroupReq
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
         * @memberof protocol.DismissGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DismissGroupReq} DismissGroupReq
         */
        DismissGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DismissGroupReq)
                return object;
            var message = new $root.protocol.DismissGroupReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.operatorUid != null)
                message.operatorUid = String(object.operatorUid);
            return message;
        };

        /**
         * Creates a plain object from a DismissGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DismissGroupReq
         * @static
         * @param {protocol.DismissGroupReq} message DismissGroupReq
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
         * @memberof protocol.DismissGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DismissGroupReq
         * @function getTypeUrl
         * @memberof protocol.DismissGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DismissGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.DismissGroupReq";
        };

        return DismissGroupReq;
    })();

    protocol.DismissGroupResp = (function() {

        /**
         * Properties of a DismissGroupResp.
         * @memberof protocol
         * @interface IDismissGroupResp
         * @property {number|null} [code] DismissGroupResp code
         * @property {string|null} [msg] DismissGroupResp msg
         */

        /**
         * Constructs a new DismissGroupResp.
         * @memberof protocol
         * @classdesc Represents a DismissGroupResp.
         * @implements IDismissGroupResp
         * @constructor
         * @param {protocol.IDismissGroupResp=} [properties] Properties to set
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
         * @memberof protocol.DismissGroupResp
         * @instance
         */
        DismissGroupResp.prototype.code = 0;

        /**
         * DismissGroupResp msg.
         * @member {string} msg
         * @memberof protocol.DismissGroupResp
         * @instance
         */
        DismissGroupResp.prototype.msg = "";

        /**
         * Creates a new DismissGroupResp instance using the specified properties.
         * @function create
         * @memberof protocol.DismissGroupResp
         * @static
         * @param {protocol.IDismissGroupResp=} [properties] Properties to set
         * @returns {protocol.DismissGroupResp} DismissGroupResp instance
         */
        DismissGroupResp.create = function create(properties) {
            return new DismissGroupResp(properties);
        };

        /**
         * Encodes the specified DismissGroupResp message. Does not implicitly {@link protocol.DismissGroupResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.DismissGroupResp
         * @static
         * @param {protocol.IDismissGroupResp} message DismissGroupResp message or plain object to encode
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
         * Encodes the specified DismissGroupResp message, length delimited. Does not implicitly {@link protocol.DismissGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DismissGroupResp
         * @static
         * @param {protocol.IDismissGroupResp} message DismissGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DismissGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DismissGroupResp} DismissGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissGroupResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DismissGroupResp();
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
         * @memberof protocol.DismissGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DismissGroupResp} DismissGroupResp
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
         * @memberof protocol.DismissGroupResp
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
         * @memberof protocol.DismissGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DismissGroupResp} DismissGroupResp
         */
        DismissGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DismissGroupResp)
                return object;
            var message = new $root.protocol.DismissGroupResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a DismissGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DismissGroupResp
         * @static
         * @param {protocol.DismissGroupResp} message DismissGroupResp
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
         * @memberof protocol.DismissGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DismissGroupResp
         * @function getTypeUrl
         * @memberof protocol.DismissGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DismissGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.DismissGroupResp";
        };

        return DismissGroupResp;
    })();

    protocol.GroupRequestListReq = (function() {

        /**
         * Properties of a GroupRequestListReq.
         * @memberof protocol
         * @interface IGroupRequestListReq
         * @property {string|null} [uid] GroupRequestListReq uid
         * @property {string|null} [token] GroupRequestListReq token
         */

        /**
         * Constructs a new GroupRequestListReq.
         * @memberof protocol
         * @classdesc Represents a GroupRequestListReq.
         * @implements IGroupRequestListReq
         * @constructor
         * @param {protocol.IGroupRequestListReq=} [properties] Properties to set
         */
        function GroupRequestListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupRequestListReq uid.
         * @member {string} uid
         * @memberof protocol.GroupRequestListReq
         * @instance
         */
        GroupRequestListReq.prototype.uid = "";

        /**
         * GroupRequestListReq token.
         * @member {string} token
         * @memberof protocol.GroupRequestListReq
         * @instance
         */
        GroupRequestListReq.prototype.token = "";

        /**
         * Creates a new GroupRequestListReq instance using the specified properties.
         * @function create
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {protocol.IGroupRequestListReq=} [properties] Properties to set
         * @returns {protocol.GroupRequestListReq} GroupRequestListReq instance
         */
        GroupRequestListReq.create = function create(properties) {
            return new GroupRequestListReq(properties);
        };

        /**
         * Encodes the specified GroupRequestListReq message. Does not implicitly {@link protocol.GroupRequestListReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {protocol.IGroupRequestListReq} message GroupRequestListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupRequestListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified GroupRequestListReq message, length delimited. Does not implicitly {@link protocol.GroupRequestListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {protocol.IGroupRequestListReq} message GroupRequestListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupRequestListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupRequestListReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupRequestListReq} GroupRequestListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupRequestListReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupRequestListReq();
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
         * Decodes a GroupRequestListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupRequestListReq} GroupRequestListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupRequestListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupRequestListReq message.
         * @function verify
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupRequestListReq.verify = function verify(message) {
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
         * Creates a GroupRequestListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupRequestListReq} GroupRequestListReq
         */
        GroupRequestListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupRequestListReq)
                return object;
            var message = new $root.protocol.GroupRequestListReq();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a GroupRequestListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {protocol.GroupRequestListReq} message GroupRequestListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupRequestListReq.toObject = function toObject(message, options) {
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
         * Converts this GroupRequestListReq to JSON.
         * @function toJSON
         * @memberof protocol.GroupRequestListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupRequestListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupRequestListReq
         * @function getTypeUrl
         * @memberof protocol.GroupRequestListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupRequestListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupRequestListReq";
        };

        return GroupRequestListReq;
    })();

    protocol.GroupRequestListResp = (function() {

        /**
         * Properties of a GroupRequestListResp.
         * @memberof protocol
         * @interface IGroupRequestListResp
         * @property {number|null} [code] GroupRequestListResp code
         * @property {string|null} [msg] GroupRequestListResp msg
         * @property {Array.<protocol.IGroupRequestItem>|null} [items] GroupRequestListResp items
         */

        /**
         * Constructs a new GroupRequestListResp.
         * @memberof protocol
         * @classdesc Represents a GroupRequestListResp.
         * @implements IGroupRequestListResp
         * @constructor
         * @param {protocol.IGroupRequestListResp=} [properties] Properties to set
         */
        function GroupRequestListResp(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupRequestListResp code.
         * @member {number} code
         * @memberof protocol.GroupRequestListResp
         * @instance
         */
        GroupRequestListResp.prototype.code = 0;

        /**
         * GroupRequestListResp msg.
         * @member {string} msg
         * @memberof protocol.GroupRequestListResp
         * @instance
         */
        GroupRequestListResp.prototype.msg = "";

        /**
         * GroupRequestListResp items.
         * @member {Array.<protocol.IGroupRequestItem>} items
         * @memberof protocol.GroupRequestListResp
         * @instance
         */
        GroupRequestListResp.prototype.items = $util.emptyArray;

        /**
         * Creates a new GroupRequestListResp instance using the specified properties.
         * @function create
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {protocol.IGroupRequestListResp=} [properties] Properties to set
         * @returns {protocol.GroupRequestListResp} GroupRequestListResp instance
         */
        GroupRequestListResp.create = function create(properties) {
            return new GroupRequestListResp(properties);
        };

        /**
         * Encodes the specified GroupRequestListResp message. Does not implicitly {@link protocol.GroupRequestListResp.verify|verify} messages.
         * @function encode
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {protocol.IGroupRequestListResp} message GroupRequestListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupRequestListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.protocol.GroupRequestItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GroupRequestListResp message, length delimited. Does not implicitly {@link protocol.GroupRequestListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {protocol.IGroupRequestListResp} message GroupRequestListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupRequestListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupRequestListResp message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GroupRequestListResp} GroupRequestListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupRequestListResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GroupRequestListResp();
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
                        message.items.push($root.protocol.GroupRequestItem.decode(reader, reader.uint32()));
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
         * Decodes a GroupRequestListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GroupRequestListResp} GroupRequestListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupRequestListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupRequestListResp message.
         * @function verify
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupRequestListResp.verify = function verify(message) {
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
                    var error = $root.protocol.GroupRequestItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GroupRequestListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GroupRequestListResp} GroupRequestListResp
         */
        GroupRequestListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GroupRequestListResp)
                return object;
            var message = new $root.protocol.GroupRequestListResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".protocol.GroupRequestListResp.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".protocol.GroupRequestListResp.items: object expected");
                    message.items[i] = $root.protocol.GroupRequestItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GroupRequestListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {protocol.GroupRequestListResp} message GroupRequestListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupRequestListResp.toObject = function toObject(message, options) {
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
                    object.items[j] = $root.protocol.GroupRequestItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this GroupRequestListResp to JSON.
         * @function toJSON
         * @memberof protocol.GroupRequestListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupRequestListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupRequestListResp
         * @function getTypeUrl
         * @memberof protocol.GroupRequestListResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupRequestListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GroupRequestListResp";
        };

        return GroupRequestListResp;
    })();

    protocol.HandleGroupRequestReq = (function() {

        /**
         * Properties of a HandleGroupRequestReq.
         * @memberof protocol
         * @interface IHandleGroupRequestReq
         * @property {string|null} [id] HandleGroupRequestReq id
         * @property {string|null} [token] HandleGroupRequestReq token
         * @property {boolean|null} [approve] HandleGroupRequestReq approve
         * @property {string|null} [groupId] HandleGroupRequestReq groupId
         * @property {string|null} [inviteeUid] HandleGroupRequestReq inviteeUid
         */

        /**
         * Constructs a new HandleGroupRequestReq.
         * @memberof protocol
         * @classdesc Represents a HandleGroupRequestReq.
         * @implements IHandleGroupRequestReq
         * @constructor
         * @param {protocol.IHandleGroupRequestReq=} [properties] Properties to set
         */
        function HandleGroupRequestReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandleGroupRequestReq id.
         * @member {string} id
         * @memberof protocol.HandleGroupRequestReq
         * @instance
         */
        HandleGroupRequestReq.prototype.id = "";

        /**
         * HandleGroupRequestReq token.
         * @member {string} token
         * @memberof protocol.HandleGroupRequestReq
         * @instance
         */
        HandleGroupRequestReq.prototype.token = "";

        /**
         * HandleGroupRequestReq approve.
         * @member {boolean} approve
         * @memberof protocol.HandleGroupRequestReq
         * @instance
         */
        HandleGroupRequestReq.prototype.approve = false;

        /**
         * HandleGroupRequestReq groupId.
         * @member {string} groupId
         * @memberof protocol.HandleGroupRequestReq
         * @instance
         */
        HandleGroupRequestReq.prototype.groupId = "";

        /**
         * HandleGroupRequestReq inviteeUid.
         * @member {string} inviteeUid
         * @memberof protocol.HandleGroupRequestReq
         * @instance
         */
        HandleGroupRequestReq.prototype.inviteeUid = "";

        /**
         * Creates a new HandleGroupRequestReq instance using the specified properties.
         * @function create
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {protocol.IHandleGroupRequestReq=} [properties] Properties to set
         * @returns {protocol.HandleGroupRequestReq} HandleGroupRequestReq instance
         */
        HandleGroupRequestReq.create = function create(properties) {
            return new HandleGroupRequestReq(properties);
        };

        /**
         * Encodes the specified HandleGroupRequestReq message. Does not implicitly {@link protocol.HandleGroupRequestReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {protocol.IHandleGroupRequestReq} message HandleGroupRequestReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleGroupRequestReq.encode = function encode(message, writer) {
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
         * Encodes the specified HandleGroupRequestReq message, length delimited. Does not implicitly {@link protocol.HandleGroupRequestReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {protocol.IHandleGroupRequestReq} message HandleGroupRequestReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleGroupRequestReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandleGroupRequestReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HandleGroupRequestReq} HandleGroupRequestReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleGroupRequestReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HandleGroupRequestReq();
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
         * Decodes a HandleGroupRequestReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HandleGroupRequestReq} HandleGroupRequestReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleGroupRequestReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandleGroupRequestReq message.
         * @function verify
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandleGroupRequestReq.verify = function verify(message) {
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
         * Creates a HandleGroupRequestReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HandleGroupRequestReq} HandleGroupRequestReq
         */
        HandleGroupRequestReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HandleGroupRequestReq)
                return object;
            var message = new $root.protocol.HandleGroupRequestReq();
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
         * Creates a plain object from a HandleGroupRequestReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {protocol.HandleGroupRequestReq} message HandleGroupRequestReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandleGroupRequestReq.toObject = function toObject(message, options) {
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
         * Converts this HandleGroupRequestReq to JSON.
         * @function toJSON
         * @memberof protocol.HandleGroupRequestReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandleGroupRequestReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandleGroupRequestReq
         * @function getTypeUrl
         * @memberof protocol.HandleGroupRequestReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandleGroupRequestReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.HandleGroupRequestReq";
        };

        return HandleGroupRequestReq;
    })();

    protocol.IMMessage = (function() {

        /**
         * Properties of a IMMessage.
         * @memberof protocol
         * @interface IIMMessage
         * @property {string|null} [type] IMMessage type
         * @property {string|null} [from] IMMessage from
         * @property {string|null} [fromUsername] IMMessage fromUsername
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
         * IMMessage fromUsername.
         * @member {string} fromUsername
         * @memberof protocol.IMMessage
         * @instance
         */
        IMMessage.prototype.fromUsername = "";

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
            if (message.fromUsername != null && Object.hasOwnProperty.call(message, "fromUsername"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fromUsername);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.to);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timestamp);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.extra);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.token);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.data);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.filename);
            if (message.filesize != null && Object.hasOwnProperty.call(message, "filesize"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.filesize);
            if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.mimeType);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.groupId);
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
                        message.fromUsername = reader.string();
                        break;
                    }
                case 4: {
                        message.to = reader.string();
                        break;
                    }
                case 5: {
                        message.content = reader.string();
                        break;
                    }
                case 6: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 7: {
                        message.extra = reader.string();
                        break;
                    }
                case 8: {
                        message.token = reader.string();
                        break;
                    }
                case 9: {
                        message.data = reader.bytes();
                        break;
                    }
                case 10: {
                        message.filename = reader.string();
                        break;
                    }
                case 11: {
                        message.filesize = reader.int64();
                        break;
                    }
                case 12: {
                        message.mimeType = reader.string();
                        break;
                    }
                case 13: {
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
            if (message.fromUsername != null && message.hasOwnProperty("fromUsername"))
                if (!$util.isString(message.fromUsername))
                    return "fromUsername: string expected";
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
            if (object.fromUsername != null)
                message.fromUsername = String(object.fromUsername);
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
                object.fromUsername = "";
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
            if (message.fromUsername != null && message.hasOwnProperty("fromUsername"))
                object.fromUsername = message.fromUsername;
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

    protocol.IMMessageList = (function() {

        /**
         * Properties of a IMMessageList.
         * @memberof protocol
         * @interface IIMMessageList
         * @property {Array.<protocol.IIMMessage>|null} [messages] IMMessageList messages
         */

        /**
         * Constructs a new IMMessageList.
         * @memberof protocol
         * @classdesc Represents a IMMessageList.
         * @implements IIMMessageList
         * @constructor
         * @param {protocol.IIMMessageList=} [properties] Properties to set
         */
        function IMMessageList(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IMMessageList messages.
         * @member {Array.<protocol.IIMMessage>} messages
         * @memberof protocol.IMMessageList
         * @instance
         */
        IMMessageList.prototype.messages = $util.emptyArray;

        /**
         * Creates a new IMMessageList instance using the specified properties.
         * @function create
         * @memberof protocol.IMMessageList
         * @static
         * @param {protocol.IIMMessageList=} [properties] Properties to set
         * @returns {protocol.IMMessageList} IMMessageList instance
         */
        IMMessageList.create = function create(properties) {
            return new IMMessageList(properties);
        };

        /**
         * Encodes the specified IMMessageList message. Does not implicitly {@link protocol.IMMessageList.verify|verify} messages.
         * @function encode
         * @memberof protocol.IMMessageList
         * @static
         * @param {protocol.IIMMessageList} message IMMessageList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IMMessageList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.protocol.IMMessage.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IMMessageList message, length delimited. Does not implicitly {@link protocol.IMMessageList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.IMMessageList
         * @static
         * @param {protocol.IIMMessageList} message IMMessageList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IMMessageList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a IMMessageList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.IMMessageList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.IMMessageList} IMMessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IMMessageList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.IMMessageList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.protocol.IMMessage.decode(reader, reader.uint32()));
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
         * Decodes a IMMessageList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.IMMessageList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.IMMessageList} IMMessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IMMessageList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a IMMessageList message.
         * @function verify
         * @memberof protocol.IMMessageList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IMMessageList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.protocol.IMMessage.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a IMMessageList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.IMMessageList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.IMMessageList} IMMessageList
         */
        IMMessageList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.IMMessageList)
                return object;
            var message = new $root.protocol.IMMessageList();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".protocol.IMMessageList.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".protocol.IMMessageList.messages: object expected");
                    message.messages[i] = $root.protocol.IMMessage.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a IMMessageList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.IMMessageList
         * @static
         * @param {protocol.IMMessageList} message IMMessageList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IMMessageList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.protocol.IMMessage.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this IMMessageList to JSON.
         * @function toJSON
         * @memberof protocol.IMMessageList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IMMessageList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IMMessageList
         * @function getTypeUrl
         * @memberof protocol.IMMessageList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IMMessageList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.IMMessageList";
        };

        return IMMessageList;
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

    protocol.GetRecentPrivateMessagesReq = (function() {

        /**
         * Properties of a GetRecentPrivateMessagesReq.
         * @memberof protocol
         * @interface IGetRecentPrivateMessagesReq
         * @property {string|null} [from] GetRecentPrivateMessagesReq from
         * @property {string|null} [to] GetRecentPrivateMessagesReq to
         * @property {number|Long|null} [count] GetRecentPrivateMessagesReq count
         */

        /**
         * Constructs a new GetRecentPrivateMessagesReq.
         * @memberof protocol
         * @classdesc Represents a GetRecentPrivateMessagesReq.
         * @implements IGetRecentPrivateMessagesReq
         * @constructor
         * @param {protocol.IGetRecentPrivateMessagesReq=} [properties] Properties to set
         */
        function GetRecentPrivateMessagesReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecentPrivateMessagesReq from.
         * @member {string} from
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @instance
         */
        GetRecentPrivateMessagesReq.prototype.from = "";

        /**
         * GetRecentPrivateMessagesReq to.
         * @member {string} to
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @instance
         */
        GetRecentPrivateMessagesReq.prototype.to = "";

        /**
         * GetRecentPrivateMessagesReq count.
         * @member {number|Long} count
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @instance
         */
        GetRecentPrivateMessagesReq.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetRecentPrivateMessagesReq instance using the specified properties.
         * @function create
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {protocol.IGetRecentPrivateMessagesReq=} [properties] Properties to set
         * @returns {protocol.GetRecentPrivateMessagesReq} GetRecentPrivateMessagesReq instance
         */
        GetRecentPrivateMessagesReq.create = function create(properties) {
            return new GetRecentPrivateMessagesReq(properties);
        };

        /**
         * Encodes the specified GetRecentPrivateMessagesReq message. Does not implicitly {@link protocol.GetRecentPrivateMessagesReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {protocol.IGetRecentPrivateMessagesReq} message GetRecentPrivateMessagesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecentPrivateMessagesReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.to);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.count);
            return writer;
        };

        /**
         * Encodes the specified GetRecentPrivateMessagesReq message, length delimited. Does not implicitly {@link protocol.GetRecentPrivateMessagesReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {protocol.IGetRecentPrivateMessagesReq} message GetRecentPrivateMessagesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecentPrivateMessagesReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRecentPrivateMessagesReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GetRecentPrivateMessagesReq} GetRecentPrivateMessagesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecentPrivateMessagesReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GetRecentPrivateMessagesReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.from = reader.string();
                        break;
                    }
                case 2: {
                        message.to = reader.string();
                        break;
                    }
                case 3: {
                        message.count = reader.int64();
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
         * Decodes a GetRecentPrivateMessagesReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GetRecentPrivateMessagesReq} GetRecentPrivateMessagesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecentPrivateMessagesReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRecentPrivateMessagesReq message.
         * @function verify
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRecentPrivateMessagesReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetRecentPrivateMessagesReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GetRecentPrivateMessagesReq} GetRecentPrivateMessagesReq
         */
        GetRecentPrivateMessagesReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GetRecentPrivateMessagesReq)
                return object;
            var message = new $root.protocol.GetRecentPrivateMessagesReq();
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetRecentPrivateMessagesReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {protocol.GetRecentPrivateMessagesReq} message GetRecentPrivateMessagesReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRecentPrivateMessagesReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.from = "";
                object.to = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
            }
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            return object;
        };

        /**
         * Converts this GetRecentPrivateMessagesReq to JSON.
         * @function toJSON
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRecentPrivateMessagesReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRecentPrivateMessagesReq
         * @function getTypeUrl
         * @memberof protocol.GetRecentPrivateMessagesReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRecentPrivateMessagesReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GetRecentPrivateMessagesReq";
        };

        return GetRecentPrivateMessagesReq;
    })();

    protocol.GetRecentGroupMessagesReq = (function() {

        /**
         * Properties of a GetRecentGroupMessagesReq.
         * @memberof protocol
         * @interface IGetRecentGroupMessagesReq
         * @property {string|null} [groupId] GetRecentGroupMessagesReq groupId
         * @property {number|Long|null} [count] GetRecentGroupMessagesReq count
         */

        /**
         * Constructs a new GetRecentGroupMessagesReq.
         * @memberof protocol
         * @classdesc Represents a GetRecentGroupMessagesReq.
         * @implements IGetRecentGroupMessagesReq
         * @constructor
         * @param {protocol.IGetRecentGroupMessagesReq=} [properties] Properties to set
         */
        function GetRecentGroupMessagesReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecentGroupMessagesReq groupId.
         * @member {string} groupId
         * @memberof protocol.GetRecentGroupMessagesReq
         * @instance
         */
        GetRecentGroupMessagesReq.prototype.groupId = "";

        /**
         * GetRecentGroupMessagesReq count.
         * @member {number|Long} count
         * @memberof protocol.GetRecentGroupMessagesReq
         * @instance
         */
        GetRecentGroupMessagesReq.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetRecentGroupMessagesReq instance using the specified properties.
         * @function create
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {protocol.IGetRecentGroupMessagesReq=} [properties] Properties to set
         * @returns {protocol.GetRecentGroupMessagesReq} GetRecentGroupMessagesReq instance
         */
        GetRecentGroupMessagesReq.create = function create(properties) {
            return new GetRecentGroupMessagesReq(properties);
        };

        /**
         * Encodes the specified GetRecentGroupMessagesReq message. Does not implicitly {@link protocol.GetRecentGroupMessagesReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {protocol.IGetRecentGroupMessagesReq} message GetRecentGroupMessagesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecentGroupMessagesReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count);
            return writer;
        };

        /**
         * Encodes the specified GetRecentGroupMessagesReq message, length delimited. Does not implicitly {@link protocol.GetRecentGroupMessagesReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {protocol.IGetRecentGroupMessagesReq} message GetRecentGroupMessagesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecentGroupMessagesReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRecentGroupMessagesReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GetRecentGroupMessagesReq} GetRecentGroupMessagesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecentGroupMessagesReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GetRecentGroupMessagesReq();
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
                        message.count = reader.int64();
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
         * Decodes a GetRecentGroupMessagesReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GetRecentGroupMessagesReq} GetRecentGroupMessagesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecentGroupMessagesReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRecentGroupMessagesReq message.
         * @function verify
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRecentGroupMessagesReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isString(message.groupId))
                    return "groupId: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetRecentGroupMessagesReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GetRecentGroupMessagesReq} GetRecentGroupMessagesReq
         */
        GetRecentGroupMessagesReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GetRecentGroupMessagesReq)
                return object;
            var message = new $root.protocol.GetRecentGroupMessagesReq();
            if (object.groupId != null)
                message.groupId = String(object.groupId);
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetRecentGroupMessagesReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {protocol.GetRecentGroupMessagesReq} message GetRecentGroupMessagesReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRecentGroupMessagesReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                object.groupId = message.groupId;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            return object;
        };

        /**
         * Converts this GetRecentGroupMessagesReq to JSON.
         * @function toJSON
         * @memberof protocol.GetRecentGroupMessagesReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRecentGroupMessagesReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRecentGroupMessagesReq
         * @function getTypeUrl
         * @memberof protocol.GetRecentGroupMessagesReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRecentGroupMessagesReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GetRecentGroupMessagesReq";
        };

        return GetRecentGroupMessagesReq;
    })();

    protocol.RegisterReq = (function() {

        /**
         * Properties of a RegisterReq.
         * @memberof protocol
         * @interface IRegisterReq
         * @property {string|null} [username] RegisterReq username
         * @property {string|null} [password] RegisterReq password
         * @property {string|null} [email] RegisterReq email
         * @property {string|null} [emailCode] RegisterReq emailCode
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
         * RegisterReq emailCode.
         * @member {string} emailCode
         * @memberof protocol.RegisterReq
         * @instance
         */
        RegisterReq.prototype.emailCode = "";

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
            if (message.emailCode != null && Object.hasOwnProperty.call(message, "emailCode"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.emailCode);
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
                case 4: {
                        message.emailCode = reader.string();
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
            if (message.emailCode != null && message.hasOwnProperty("emailCode"))
                if (!$util.isString(message.emailCode))
                    return "emailCode: string expected";
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
            if (object.emailCode != null)
                message.emailCode = String(object.emailCode);
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
                object.emailCode = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.emailCode != null && message.hasOwnProperty("emailCode"))
                object.emailCode = message.emailCode;
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

    protocol.SendEmailCodeReq = (function() {

        /**
         * Properties of a SendEmailCodeReq.
         * @memberof protocol
         * @interface ISendEmailCodeReq
         * @property {string|null} [email] SendEmailCodeReq email
         * @property {string|null} [purpose] SendEmailCodeReq purpose
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
         * SendEmailCodeReq purpose.
         * @member {string} purpose
         * @memberof protocol.SendEmailCodeReq
         * @instance
         */
        SendEmailCodeReq.prototype.purpose = "";

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
            if (message.purpose != null && Object.hasOwnProperty.call(message, "purpose"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.purpose);
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
                case 2: {
                        message.purpose = reader.string();
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
            if (message.purpose != null && message.hasOwnProperty("purpose"))
                if (!$util.isString(message.purpose))
                    return "purpose: string expected";
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
            if (object.purpose != null)
                message.purpose = String(object.purpose);
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
            if (options.defaults) {
                object.email = "";
                object.purpose = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.purpose != null && message.hasOwnProperty("purpose"))
                object.purpose = message.purpose;
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

    protocol.ResetPasswordReq = (function() {

        /**
         * Properties of a ResetPasswordReq.
         * @memberof protocol
         * @interface IResetPasswordReq
         * @property {string|null} [email] ResetPasswordReq email
         * @property {string|null} [emailCode] ResetPasswordReq emailCode
         * @property {string|null} [newPassword] ResetPasswordReq newPassword
         */

        /**
         * Constructs a new ResetPasswordReq.
         * @memberof protocol
         * @classdesc Represents a ResetPasswordReq.
         * @implements IResetPasswordReq
         * @constructor
         * @param {protocol.IResetPasswordReq=} [properties] Properties to set
         */
        function ResetPasswordReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResetPasswordReq email.
         * @member {string} email
         * @memberof protocol.ResetPasswordReq
         * @instance
         */
        ResetPasswordReq.prototype.email = "";

        /**
         * ResetPasswordReq emailCode.
         * @member {string} emailCode
         * @memberof protocol.ResetPasswordReq
         * @instance
         */
        ResetPasswordReq.prototype.emailCode = "";

        /**
         * ResetPasswordReq newPassword.
         * @member {string} newPassword
         * @memberof protocol.ResetPasswordReq
         * @instance
         */
        ResetPasswordReq.prototype.newPassword = "";

        /**
         * Creates a new ResetPasswordReq instance using the specified properties.
         * @function create
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {protocol.IResetPasswordReq=} [properties] Properties to set
         * @returns {protocol.ResetPasswordReq} ResetPasswordReq instance
         */
        ResetPasswordReq.create = function create(properties) {
            return new ResetPasswordReq(properties);
        };

        /**
         * Encodes the specified ResetPasswordReq message. Does not implicitly {@link protocol.ResetPasswordReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {protocol.IResetPasswordReq} message ResetPasswordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetPasswordReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.emailCode != null && Object.hasOwnProperty.call(message, "emailCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.emailCode);
            if (message.newPassword != null && Object.hasOwnProperty.call(message, "newPassword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newPassword);
            return writer;
        };

        /**
         * Encodes the specified ResetPasswordReq message, length delimited. Does not implicitly {@link protocol.ResetPasswordReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {protocol.IResetPasswordReq} message ResetPasswordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetPasswordReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResetPasswordReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ResetPasswordReq} ResetPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetPasswordReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ResetPasswordReq();
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
                        message.emailCode = reader.string();
                        break;
                    }
                case 3: {
                        message.newPassword = reader.string();
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
         * Decodes a ResetPasswordReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ResetPasswordReq} ResetPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetPasswordReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResetPasswordReq message.
         * @function verify
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetPasswordReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.emailCode != null && message.hasOwnProperty("emailCode"))
                if (!$util.isString(message.emailCode))
                    return "emailCode: string expected";
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                if (!$util.isString(message.newPassword))
                    return "newPassword: string expected";
            return null;
        };

        /**
         * Creates a ResetPasswordReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ResetPasswordReq} ResetPasswordReq
         */
        ResetPasswordReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ResetPasswordReq)
                return object;
            var message = new $root.protocol.ResetPasswordReq();
            if (object.email != null)
                message.email = String(object.email);
            if (object.emailCode != null)
                message.emailCode = String(object.emailCode);
            if (object.newPassword != null)
                message.newPassword = String(object.newPassword);
            return message;
        };

        /**
         * Creates a plain object from a ResetPasswordReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {protocol.ResetPasswordReq} message ResetPasswordReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetPasswordReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.emailCode = "";
                object.newPassword = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.emailCode != null && message.hasOwnProperty("emailCode"))
                object.emailCode = message.emailCode;
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                object.newPassword = message.newPassword;
            return object;
        };

        /**
         * Converts this ResetPasswordReq to JSON.
         * @function toJSON
         * @memberof protocol.ResetPasswordReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetPasswordReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResetPasswordReq
         * @function getTypeUrl
         * @memberof protocol.ResetPasswordReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResetPasswordReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.ResetPasswordReq";
        };

        return ResetPasswordReq;
    })();

    return protocol;
})();

module.exports = $root;
