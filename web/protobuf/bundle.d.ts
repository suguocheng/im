import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace protocol. */
export namespace protocol {

    /** Properties of a UserInfoResp. */
    interface IUserInfoResp {

        /** UserInfoResp uid */
        uid?: (string|null);

        /** UserInfoResp username */
        username?: (string|null);

        /** UserInfoResp email */
        email?: (string|null);

        /** UserInfoResp code */
        code?: (number|null);

        /** UserInfoResp msg */
        msg?: (string|null);
    }

    /** Represents a UserInfoResp. */
    class UserInfoResp implements IUserInfoResp {

        /**
         * Constructs a new UserInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUserInfoResp);

        /** UserInfoResp uid. */
        public uid: string;

        /** UserInfoResp username. */
        public username: string;

        /** UserInfoResp email. */
        public email: string;

        /** UserInfoResp code. */
        public code: number;

        /** UserInfoResp msg. */
        public msg: string;

        /**
         * Creates a new UserInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfoResp instance
         */
        public static create(properties?: protocol.IUserInfoResp): protocol.UserInfoResp;

        /**
         * Encodes the specified UserInfoResp message. Does not implicitly {@link protocol.UserInfoResp.verify|verify} messages.
         * @param message UserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfoResp message, length delimited. Does not implicitly {@link protocol.UserInfoResp.verify|verify} messages.
         * @param message UserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UserInfoResp;

        /**
         * Decodes a UserInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UserInfoResp;

        /**
         * Verifies a UserInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfoResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.UserInfoResp;

        /**
         * Creates a plain object from a UserInfoResp message. Also converts values to other types if specified.
         * @param message UserInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UserInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserInfoResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterReq. */
    interface IRegisterReq {

        /** RegisterReq username */
        username?: (string|null);

        /** RegisterReq password */
        password?: (string|null);

        /** RegisterReq email */
        email?: (string|null);
    }

    /** Represents a RegisterReq. */
    class RegisterReq implements IRegisterReq {

        /**
         * Constructs a new RegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRegisterReq);

        /** RegisterReq username. */
        public username: string;

        /** RegisterReq password. */
        public password: string;

        /** RegisterReq email. */
        public email: string;

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterReq instance
         */
        public static create(properties?: protocol.IRegisterReq): protocol.RegisterReq;

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link protocol.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link protocol.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.RegisterReq;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.RegisterReq;

        /**
         * Verifies a RegisterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.RegisterReq;

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @param message RegisterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RegisterReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq uid */
        uid?: (string|null);

        /** LoginReq password */
        password?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILoginReq);

        /** LoginReq uid. */
        public uid: string;

        /** LoginReq password. */
        public password: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: protocol.ILoginReq): protocol.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link protocol.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link protocol.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResetPwdReq. */
    interface IResetPwdReq {

        /** ResetPwdReq email */
        email?: (string|null);

        /** ResetPwdReq newPwd */
        newPwd?: (string|null);

        /** ResetPwdReq code */
        code?: (string|null);
    }

    /** Represents a ResetPwdReq. */
    class ResetPwdReq implements IResetPwdReq {

        /**
         * Constructs a new ResetPwdReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IResetPwdReq);

        /** ResetPwdReq email. */
        public email: string;

        /** ResetPwdReq newPwd. */
        public newPwd: string;

        /** ResetPwdReq code. */
        public code: string;

        /**
         * Creates a new ResetPwdReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResetPwdReq instance
         */
        public static create(properties?: protocol.IResetPwdReq): protocol.ResetPwdReq;

        /**
         * Encodes the specified ResetPwdReq message. Does not implicitly {@link protocol.ResetPwdReq.verify|verify} messages.
         * @param message ResetPwdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IResetPwdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResetPwdReq message, length delimited. Does not implicitly {@link protocol.ResetPwdReq.verify|verify} messages.
         * @param message ResetPwdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IResetPwdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResetPwdReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResetPwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ResetPwdReq;

        /**
         * Decodes a ResetPwdReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResetPwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ResetPwdReq;

        /**
         * Verifies a ResetPwdReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResetPwdReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResetPwdReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.ResetPwdReq;

        /**
         * Creates a plain object from a ResetPwdReq message. Also converts values to other types if specified.
         * @param message ResetPwdReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ResetPwdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResetPwdReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResetPwdReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateUsernameReq. */
    interface IUpdateUsernameReq {

        /** UpdateUsernameReq uid */
        uid?: (string|null);

        /** UpdateUsernameReq newUsername */
        newUsername?: (string|null);
    }

    /** Represents an UpdateUsernameReq. */
    class UpdateUsernameReq implements IUpdateUsernameReq {

        /**
         * Constructs a new UpdateUsernameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUpdateUsernameReq);

        /** UpdateUsernameReq uid. */
        public uid: string;

        /** UpdateUsernameReq newUsername. */
        public newUsername: string;

        /**
         * Creates a new UpdateUsernameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUsernameReq instance
         */
        public static create(properties?: protocol.IUpdateUsernameReq): protocol.UpdateUsernameReq;

        /**
         * Encodes the specified UpdateUsernameReq message. Does not implicitly {@link protocol.UpdateUsernameReq.verify|verify} messages.
         * @param message UpdateUsernameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUpdateUsernameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUsernameReq message, length delimited. Does not implicitly {@link protocol.UpdateUsernameReq.verify|verify} messages.
         * @param message UpdateUsernameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUpdateUsernameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUsernameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUsernameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UpdateUsernameReq;

        /**
         * Decodes an UpdateUsernameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUsernameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UpdateUsernameReq;

        /**
         * Verifies an UpdateUsernameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUsernameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUsernameReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.UpdateUsernameReq;

        /**
         * Creates a plain object from an UpdateUsernameReq message. Also converts values to other types if specified.
         * @param message UpdateUsernameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UpdateUsernameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUsernameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateUsernameReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdatePwdReq. */
    interface IUpdatePwdReq {

        /** UpdatePwdReq uid */
        uid?: (string|null);

        /** UpdatePwdReq oldPwd */
        oldPwd?: (string|null);

        /** UpdatePwdReq newPwd */
        newPwd?: (string|null);
    }

    /** Represents an UpdatePwdReq. */
    class UpdatePwdReq implements IUpdatePwdReq {

        /**
         * Constructs a new UpdatePwdReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUpdatePwdReq);

        /** UpdatePwdReq uid. */
        public uid: string;

        /** UpdatePwdReq oldPwd. */
        public oldPwd: string;

        /** UpdatePwdReq newPwd. */
        public newPwd: string;

        /**
         * Creates a new UpdatePwdReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdatePwdReq instance
         */
        public static create(properties?: protocol.IUpdatePwdReq): protocol.UpdatePwdReq;

        /**
         * Encodes the specified UpdatePwdReq message. Does not implicitly {@link protocol.UpdatePwdReq.verify|verify} messages.
         * @param message UpdatePwdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUpdatePwdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdatePwdReq message, length delimited. Does not implicitly {@link protocol.UpdatePwdReq.verify|verify} messages.
         * @param message UpdatePwdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUpdatePwdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdatePwdReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdatePwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UpdatePwdReq;

        /**
         * Decodes an UpdatePwdReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdatePwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UpdatePwdReq;

        /**
         * Verifies an UpdatePwdReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdatePwdReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdatePwdReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.UpdatePwdReq;

        /**
         * Creates a plain object from an UpdatePwdReq message. Also converts values to other types if specified.
         * @param message UpdatePwdReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UpdatePwdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdatePwdReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdatePwdReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenCheckReq. */
    interface ITokenCheckReq {

        /** TokenCheckReq token */
        token?: (string|null);
    }

    /** Represents a TokenCheckReq. */
    class TokenCheckReq implements ITokenCheckReq {

        /**
         * Constructs a new TokenCheckReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITokenCheckReq);

        /** TokenCheckReq token. */
        public token: string;

        /**
         * Creates a new TokenCheckReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenCheckReq instance
         */
        public static create(properties?: protocol.ITokenCheckReq): protocol.TokenCheckReq;

        /**
         * Encodes the specified TokenCheckReq message. Does not implicitly {@link protocol.TokenCheckReq.verify|verify} messages.
         * @param message TokenCheckReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITokenCheckReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenCheckReq message, length delimited. Does not implicitly {@link protocol.TokenCheckReq.verify|verify} messages.
         * @param message TokenCheckReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITokenCheckReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenCheckReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenCheckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TokenCheckReq;

        /**
         * Decodes a TokenCheckReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenCheckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TokenCheckReq;

        /**
         * Verifies a TokenCheckReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenCheckReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenCheckReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.TokenCheckReq;

        /**
         * Creates a plain object from a TokenCheckReq message. Also converts values to other types if specified.
         * @param message TokenCheckReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TokenCheckReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenCheckReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenCheckReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteAccountReq. */
    interface IDeleteAccountReq {

        /** DeleteAccountReq uid */
        uid?: (string|null);
    }

    /** Represents a DeleteAccountReq. */
    class DeleteAccountReq implements IDeleteAccountReq {

        /**
         * Constructs a new DeleteAccountReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDeleteAccountReq);

        /** DeleteAccountReq uid. */
        public uid: string;

        /**
         * Creates a new DeleteAccountReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteAccountReq instance
         */
        public static create(properties?: protocol.IDeleteAccountReq): protocol.DeleteAccountReq;

        /**
         * Encodes the specified DeleteAccountReq message. Does not implicitly {@link protocol.DeleteAccountReq.verify|verify} messages.
         * @param message DeleteAccountReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDeleteAccountReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteAccountReq message, length delimited. Does not implicitly {@link protocol.DeleteAccountReq.verify|verify} messages.
         * @param message DeleteAccountReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDeleteAccountReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteAccountReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteAccountReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.DeleteAccountReq;

        /**
         * Decodes a DeleteAccountReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteAccountReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.DeleteAccountReq;

        /**
         * Verifies a DeleteAccountReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteAccountReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteAccountReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.DeleteAccountReq;

        /**
         * Creates a plain object from a DeleteAccountReq message. Also converts values to other types if specified.
         * @param message DeleteAccountReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DeleteAccountReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteAccountReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteAccountReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserInfoReq. */
    interface IUserInfoReq {

        /** UserInfoReq token */
        token?: (string|null);
    }

    /** Represents a UserInfoReq. */
    class UserInfoReq implements IUserInfoReq {

        /**
         * Constructs a new UserInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUserInfoReq);

        /** UserInfoReq token. */
        public token: string;

        /**
         * Creates a new UserInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfoReq instance
         */
        public static create(properties?: protocol.IUserInfoReq): protocol.UserInfoReq;

        /**
         * Encodes the specified UserInfoReq message. Does not implicitly {@link protocol.UserInfoReq.verify|verify} messages.
         * @param message UserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfoReq message, length delimited. Does not implicitly {@link protocol.UserInfoReq.verify|verify} messages.
         * @param message UserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UserInfoReq;

        /**
         * Decodes a UserInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UserInfoReq;

        /**
         * Verifies a UserInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfoReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.UserInfoReq;

        /**
         * Creates a plain object from a UserInfoReq message. Also converts values to other types if specified.
         * @param message UserInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LogoutReq. */
    interface ILogoutReq {

        /** LogoutReq token */
        token?: (string|null);
    }

    /** Represents a LogoutReq. */
    class LogoutReq implements ILogoutReq {

        /**
         * Constructs a new LogoutReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILogoutReq);

        /** LogoutReq token. */
        public token: string;

        /**
         * Creates a new LogoutReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogoutReq instance
         */
        public static create(properties?: protocol.ILogoutReq): protocol.LogoutReq;

        /**
         * Encodes the specified LogoutReq message. Does not implicitly {@link protocol.LogoutReq.verify|verify} messages.
         * @param message LogoutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILogoutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogoutReq message, length delimited. Does not implicitly {@link protocol.LogoutReq.verify|verify} messages.
         * @param message LogoutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILogoutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogoutReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LogoutReq;

        /**
         * Decodes a LogoutReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LogoutReq;

        /**
         * Verifies a LogoutReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogoutReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogoutReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.LogoutReq;

        /**
         * Creates a plain object from a LogoutReq message. Also converts values to other types if specified.
         * @param message LogoutReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LogoutReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogoutReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LogoutReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendEmailCodeReq. */
    interface ISendEmailCodeReq {

        /** SendEmailCodeReq email */
        email?: (string|null);
    }

    /** Represents a SendEmailCodeReq. */
    class SendEmailCodeReq implements ISendEmailCodeReq {

        /**
         * Constructs a new SendEmailCodeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISendEmailCodeReq);

        /** SendEmailCodeReq email. */
        public email: string;

        /**
         * Creates a new SendEmailCodeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendEmailCodeReq instance
         */
        public static create(properties?: protocol.ISendEmailCodeReq): protocol.SendEmailCodeReq;

        /**
         * Encodes the specified SendEmailCodeReq message. Does not implicitly {@link protocol.SendEmailCodeReq.verify|verify} messages.
         * @param message SendEmailCodeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISendEmailCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendEmailCodeReq message, length delimited. Does not implicitly {@link protocol.SendEmailCodeReq.verify|verify} messages.
         * @param message SendEmailCodeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISendEmailCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendEmailCodeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendEmailCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SendEmailCodeReq;

        /**
         * Decodes a SendEmailCodeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendEmailCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SendEmailCodeReq;

        /**
         * Verifies a SendEmailCodeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendEmailCodeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendEmailCodeReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.SendEmailCodeReq;

        /**
         * Creates a plain object from a SendEmailCodeReq message. Also converts values to other types if specified.
         * @param message SendEmailCodeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SendEmailCodeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendEmailCodeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendEmailCodeReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a IMMessage. */
    interface IIMMessage {

        /** IMMessage type */
        type?: (string|null);

        /** IMMessage from */
        from?: (string|null);

        /** IMMessage to */
        to?: (string|null);

        /** IMMessage content */
        content?: (string|null);

        /** IMMessage timestamp */
        timestamp?: (number|Long|null);

        /** IMMessage extra */
        extra?: (string|null);

        /** IMMessage token */
        token?: (string|null);

        /** IMMessage data */
        data?: (Uint8Array|null);

        /** IMMessage filename */
        filename?: (string|null);

        /** IMMessage filesize */
        filesize?: (number|Long|null);

        /** IMMessage mimeType */
        mimeType?: (string|null);

        /** IMMessage groupId */
        groupId?: (string|null);
    }

    /** Represents a IMMessage. */
    class IMMessage implements IIMMessage {

        /**
         * Constructs a new IMMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IIMMessage);

        /** IMMessage type. */
        public type: string;

        /** IMMessage from. */
        public from: string;

        /** IMMessage to. */
        public to: string;

        /** IMMessage content. */
        public content: string;

        /** IMMessage timestamp. */
        public timestamp: (number|Long);

        /** IMMessage extra. */
        public extra: string;

        /** IMMessage token. */
        public token: string;

        /** IMMessage data. */
        public data: Uint8Array;

        /** IMMessage filename. */
        public filename: string;

        /** IMMessage filesize. */
        public filesize: (number|Long);

        /** IMMessage mimeType. */
        public mimeType: string;

        /** IMMessage groupId. */
        public groupId: string;

        /**
         * Creates a new IMMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IMMessage instance
         */
        public static create(properties?: protocol.IIMMessage): protocol.IMMessage;

        /**
         * Encodes the specified IMMessage message. Does not implicitly {@link protocol.IMMessage.verify|verify} messages.
         * @param message IMMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IIMMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IMMessage message, length delimited. Does not implicitly {@link protocol.IMMessage.verify|verify} messages.
         * @param message IMMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IIMMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a IMMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IMMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.IMMessage;

        /**
         * Decodes a IMMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IMMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.IMMessage;

        /**
         * Verifies a IMMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a IMMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IMMessage
         */
        public static fromObject(object: { [k: string]: any }): protocol.IMMessage;

        /**
         * Creates a plain object from a IMMessage message. Also converts values to other types if specified.
         * @param message IMMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.IMMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IMMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IMMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a APIResp. */
    interface IAPIResp {

        /** APIResp code */
        code?: (number|null);

        /** APIResp msg */
        msg?: (string|null);

        /** APIResp data */
        data?: (Uint8Array|null);
    }

    /** Represents a APIResp. */
    class APIResp implements IAPIResp {

        /**
         * Constructs a new APIResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAPIResp);

        /** APIResp code. */
        public code: number;

        /** APIResp msg. */
        public msg: string;

        /** APIResp data. */
        public data: Uint8Array;

        /**
         * Creates a new APIResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns APIResp instance
         */
        public static create(properties?: protocol.IAPIResp): protocol.APIResp;

        /**
         * Encodes the specified APIResp message. Does not implicitly {@link protocol.APIResp.verify|verify} messages.
         * @param message APIResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAPIResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified APIResp message, length delimited. Does not implicitly {@link protocol.APIResp.verify|verify} messages.
         * @param message APIResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAPIResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a APIResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns APIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.APIResp;

        /**
         * Decodes a APIResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns APIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.APIResp;

        /**
         * Verifies a APIResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a APIResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns APIResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.APIResp;

        /**
         * Creates a plain object from a APIResp message. Also converts values to other types if specified.
         * @param message APIResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.APIResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this APIResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for APIResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Notification. */
    interface INotification {

        /** Notification type */
        type?: (string|null);

        /** Notification from */
        from?: (string|null);

        /** Notification fromUsername */
        fromUsername?: (string|null);

        /** Notification to */
        to?: (string|null);

        /** Notification groupId */
        groupId?: (string|null);

        /** Notification groupName */
        groupName?: (string|null);

        /** Notification content */
        content?: (string|null);

        /** Notification timestamp */
        timestamp?: (number|Long|null);

        /** Notification extra */
        extra?: (string|null);
    }

    /** Represents a Notification. */
    class Notification implements INotification {

        /**
         * Constructs a new Notification.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INotification);

        /** Notification type. */
        public type: string;

        /** Notification from. */
        public from: string;

        /** Notification fromUsername. */
        public fromUsername: string;

        /** Notification to. */
        public to: string;

        /** Notification groupId. */
        public groupId: string;

        /** Notification groupName. */
        public groupName: string;

        /** Notification content. */
        public content: string;

        /** Notification timestamp. */
        public timestamp: (number|Long);

        /** Notification extra. */
        public extra: string;

        /**
         * Creates a new Notification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Notification instance
         */
        public static create(properties?: protocol.INotification): protocol.Notification;

        /**
         * Encodes the specified Notification message. Does not implicitly {@link protocol.Notification.verify|verify} messages.
         * @param message Notification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Notification message, length delimited. Does not implicitly {@link protocol.Notification.verify|verify} messages.
         * @param message Notification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Notification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Notification;

        /**
         * Decodes a Notification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Notification;

        /**
         * Verifies a Notification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Notification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Notification
         */
        public static fromObject(object: { [k: string]: any }): protocol.Notification;

        /**
         * Creates a plain object from a Notification message. Also converts values to other types if specified.
         * @param message Notification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Notification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Notification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileInfo. */
    interface IFileInfo {

        /** FileInfo filename */
        filename?: (string|null);

        /** FileInfo originalName */
        originalName?: (string|null);

        /** FileInfo size */
        size?: (number|Long|null);

        /** FileInfo type */
        type?: (string|null);

        /** FileInfo url */
        url?: (string|null);
    }

    /** Represents a FileInfo. */
    class FileInfo implements IFileInfo {

        /**
         * Constructs a new FileInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFileInfo);

        /** FileInfo filename. */
        public filename: string;

        /** FileInfo originalName. */
        public originalName: string;

        /** FileInfo size. */
        public size: (number|Long);

        /** FileInfo type. */
        public type: string;

        /** FileInfo url. */
        public url: string;

        /**
         * Creates a new FileInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileInfo instance
         */
        public static create(properties?: protocol.IFileInfo): protocol.FileInfo;

        /**
         * Encodes the specified FileInfo message. Does not implicitly {@link protocol.FileInfo.verify|verify} messages.
         * @param message FileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link protocol.FileInfo.verify|verify} messages.
         * @param message FileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.FileInfo;

        /**
         * Decodes a FileInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.FileInfo;

        /**
         * Verifies a FileInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileInfo
         */
        public static fromObject(object: { [k: string]: any }): protocol.FileInfo;

        /**
         * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
         * @param message FileInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddFriendReq. */
    interface IAddFriendReq {

        /** AddFriendReq fromUid */
        fromUid?: (string|null);

        /** AddFriendReq toUid */
        toUid?: (string|null);

        /** AddFriendReq verifyMsg */
        verifyMsg?: (string|null);

        /** AddFriendReq token */
        token?: (string|null);
    }

    /** Represents an AddFriendReq. */
    class AddFriendReq implements IAddFriendReq {

        /**
         * Constructs a new AddFriendReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAddFriendReq);

        /** AddFriendReq fromUid. */
        public fromUid: string;

        /** AddFriendReq toUid. */
        public toUid: string;

        /** AddFriendReq verifyMsg. */
        public verifyMsg: string;

        /** AddFriendReq token. */
        public token: string;

        /**
         * Creates a new AddFriendReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddFriendReq instance
         */
        public static create(properties?: protocol.IAddFriendReq): protocol.AddFriendReq;

        /**
         * Encodes the specified AddFriendReq message. Does not implicitly {@link protocol.AddFriendReq.verify|verify} messages.
         * @param message AddFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAddFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddFriendReq message, length delimited. Does not implicitly {@link protocol.AddFriendReq.verify|verify} messages.
         * @param message AddFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAddFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddFriendReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.AddFriendReq;

        /**
         * Decodes an AddFriendReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.AddFriendReq;

        /**
         * Verifies an AddFriendReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddFriendReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddFriendReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.AddFriendReq;

        /**
         * Creates a plain object from an AddFriendReq message. Also converts values to other types if specified.
         * @param message AddFriendReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AddFriendReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddFriendReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddFriendReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddFriendResp. */
    interface IAddFriendResp {

        /** AddFriendResp code */
        code?: (number|null);

        /** AddFriendResp msg */
        msg?: (string|null);
    }

    /** Represents an AddFriendResp. */
    class AddFriendResp implements IAddFriendResp {

        /**
         * Constructs a new AddFriendResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAddFriendResp);

        /** AddFriendResp code. */
        public code: number;

        /** AddFriendResp msg. */
        public msg: string;

        /**
         * Creates a new AddFriendResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddFriendResp instance
         */
        public static create(properties?: protocol.IAddFriendResp): protocol.AddFriendResp;

        /**
         * Encodes the specified AddFriendResp message. Does not implicitly {@link protocol.AddFriendResp.verify|verify} messages.
         * @param message AddFriendResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAddFriendResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddFriendResp message, length delimited. Does not implicitly {@link protocol.AddFriendResp.verify|verify} messages.
         * @param message AddFriendResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAddFriendResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddFriendResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.AddFriendResp;

        /**
         * Decodes an AddFriendResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.AddFriendResp;

        /**
         * Verifies an AddFriendResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddFriendResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddFriendResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.AddFriendResp;

        /**
         * Creates a plain object from an AddFriendResp message. Also converts values to other types if specified.
         * @param message AddFriendResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AddFriendResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddFriendResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddFriendResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HandleFriendReq. */
    interface IHandleFriendReq {

        /** HandleFriendReq fromUid */
        fromUid?: (string|null);

        /** HandleFriendReq toUid */
        toUid?: (string|null);

        /** HandleFriendReq accept */
        accept?: (boolean|null);

        /** HandleFriendReq token */
        token?: (string|null);
    }

    /** Represents a HandleFriendReq. */
    class HandleFriendReq implements IHandleFriendReq {

        /**
         * Constructs a new HandleFriendReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHandleFriendReq);

        /** HandleFriendReq fromUid. */
        public fromUid: string;

        /** HandleFriendReq toUid. */
        public toUid: string;

        /** HandleFriendReq accept. */
        public accept: boolean;

        /** HandleFriendReq token. */
        public token: string;

        /**
         * Creates a new HandleFriendReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandleFriendReq instance
         */
        public static create(properties?: protocol.IHandleFriendReq): protocol.HandleFriendReq;

        /**
         * Encodes the specified HandleFriendReq message. Does not implicitly {@link protocol.HandleFriendReq.verify|verify} messages.
         * @param message HandleFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHandleFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HandleFriendReq message, length delimited. Does not implicitly {@link protocol.HandleFriendReq.verify|verify} messages.
         * @param message HandleFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHandleFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HandleFriendReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandleFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.HandleFriendReq;

        /**
         * Decodes a HandleFriendReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandleFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.HandleFriendReq;

        /**
         * Verifies a HandleFriendReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HandleFriendReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HandleFriendReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.HandleFriendReq;

        /**
         * Creates a plain object from a HandleFriendReq message. Also converts values to other types if specified.
         * @param message HandleFriendReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HandleFriendReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HandleFriendReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HandleFriendReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HandleFriendResp. */
    interface IHandleFriendResp {

        /** HandleFriendResp code */
        code?: (number|null);

        /** HandleFriendResp msg */
        msg?: (string|null);
    }

    /** Represents a HandleFriendResp. */
    class HandleFriendResp implements IHandleFriendResp {

        /**
         * Constructs a new HandleFriendResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHandleFriendResp);

        /** HandleFriendResp code. */
        public code: number;

        /** HandleFriendResp msg. */
        public msg: string;

        /**
         * Creates a new HandleFriendResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandleFriendResp instance
         */
        public static create(properties?: protocol.IHandleFriendResp): protocol.HandleFriendResp;

        /**
         * Encodes the specified HandleFriendResp message. Does not implicitly {@link protocol.HandleFriendResp.verify|verify} messages.
         * @param message HandleFriendResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHandleFriendResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HandleFriendResp message, length delimited. Does not implicitly {@link protocol.HandleFriendResp.verify|verify} messages.
         * @param message HandleFriendResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHandleFriendResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HandleFriendResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandleFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.HandleFriendResp;

        /**
         * Decodes a HandleFriendResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandleFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.HandleFriendResp;

        /**
         * Verifies a HandleFriendResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HandleFriendResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HandleFriendResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.HandleFriendResp;

        /**
         * Creates a plain object from a HandleFriendResp message. Also converts values to other types if specified.
         * @param message HandleFriendResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HandleFriendResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HandleFriendResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HandleFriendResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendListReq. */
    interface IFriendListReq {

        /** FriendListReq uid */
        uid?: (string|null);

        /** FriendListReq token */
        token?: (string|null);
    }

    /** Represents a FriendListReq. */
    class FriendListReq implements IFriendListReq {

        /**
         * Constructs a new FriendListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendListReq);

        /** FriendListReq uid. */
        public uid: string;

        /** FriendListReq token. */
        public token: string;

        /**
         * Creates a new FriendListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendListReq instance
         */
        public static create(properties?: protocol.IFriendListReq): protocol.FriendListReq;

        /**
         * Encodes the specified FriendListReq message. Does not implicitly {@link protocol.FriendListReq.verify|verify} messages.
         * @param message FriendListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendListReq message, length delimited. Does not implicitly {@link protocol.FriendListReq.verify|verify} messages.
         * @param message FriendListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.FriendListReq;

        /**
         * Decodes a FriendListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.FriendListReq;

        /**
         * Verifies a FriendListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendListReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendListReq;

        /**
         * Creates a plain object from a FriendListReq message. Also converts values to other types if specified.
         * @param message FriendListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendListReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendListResp. */
    interface IFriendListResp {

        /** FriendListResp friendUids */
        friendUids?: (string[]|null);

        /** FriendListResp friendUsernames */
        friendUsernames?: (string[]|null);

        /** FriendListResp code */
        code?: (number|null);

        /** FriendListResp msg */
        msg?: (string|null);

        /** FriendListResp remarks */
        remarks?: (string[]|null);
    }

    /** Represents a FriendListResp. */
    class FriendListResp implements IFriendListResp {

        /**
         * Constructs a new FriendListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendListResp);

        /** FriendListResp friendUids. */
        public friendUids: string[];

        /** FriendListResp friendUsernames. */
        public friendUsernames: string[];

        /** FriendListResp code. */
        public code: number;

        /** FriendListResp msg. */
        public msg: string;

        /** FriendListResp remarks. */
        public remarks: string[];

        /**
         * Creates a new FriendListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendListResp instance
         */
        public static create(properties?: protocol.IFriendListResp): protocol.FriendListResp;

        /**
         * Encodes the specified FriendListResp message. Does not implicitly {@link protocol.FriendListResp.verify|verify} messages.
         * @param message FriendListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendListResp message, length delimited. Does not implicitly {@link protocol.FriendListResp.verify|verify} messages.
         * @param message FriendListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.FriendListResp;

        /**
         * Decodes a FriendListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.FriendListResp;

        /**
         * Verifies a FriendListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendListResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendListResp;

        /**
         * Creates a plain object from a FriendListResp message. Also converts values to other types if specified.
         * @param message FriendListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendListResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteFriendReq. */
    interface IDeleteFriendReq {

        /** DeleteFriendReq uid */
        uid?: (string|null);

        /** DeleteFriendReq friendUid */
        friendUid?: (string|null);

        /** DeleteFriendReq token */
        token?: (string|null);
    }

    /** Represents a DeleteFriendReq. */
    class DeleteFriendReq implements IDeleteFriendReq {

        /**
         * Constructs a new DeleteFriendReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDeleteFriendReq);

        /** DeleteFriendReq uid. */
        public uid: string;

        /** DeleteFriendReq friendUid. */
        public friendUid: string;

        /** DeleteFriendReq token. */
        public token: string;

        /**
         * Creates a new DeleteFriendReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteFriendReq instance
         */
        public static create(properties?: protocol.IDeleteFriendReq): protocol.DeleteFriendReq;

        /**
         * Encodes the specified DeleteFriendReq message. Does not implicitly {@link protocol.DeleteFriendReq.verify|verify} messages.
         * @param message DeleteFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDeleteFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteFriendReq message, length delimited. Does not implicitly {@link protocol.DeleteFriendReq.verify|verify} messages.
         * @param message DeleteFriendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDeleteFriendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteFriendReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.DeleteFriendReq;

        /**
         * Decodes a DeleteFriendReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.DeleteFriendReq;

        /**
         * Verifies a DeleteFriendReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteFriendReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteFriendReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.DeleteFriendReq;

        /**
         * Creates a plain object from a DeleteFriendReq message. Also converts values to other types if specified.
         * @param message DeleteFriendReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DeleteFriendReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteFriendReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteFriendReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteFriendResp. */
    interface IDeleteFriendResp {

        /** DeleteFriendResp code */
        code?: (number|null);

        /** DeleteFriendResp msg */
        msg?: (string|null);
    }

    /** Represents a DeleteFriendResp. */
    class DeleteFriendResp implements IDeleteFriendResp {

        /**
         * Constructs a new DeleteFriendResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDeleteFriendResp);

        /** DeleteFriendResp code. */
        public code: number;

        /** DeleteFriendResp msg. */
        public msg: string;

        /**
         * Creates a new DeleteFriendResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteFriendResp instance
         */
        public static create(properties?: protocol.IDeleteFriendResp): protocol.DeleteFriendResp;

        /**
         * Encodes the specified DeleteFriendResp message. Does not implicitly {@link protocol.DeleteFriendResp.verify|verify} messages.
         * @param message DeleteFriendResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDeleteFriendResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteFriendResp message, length delimited. Does not implicitly {@link protocol.DeleteFriendResp.verify|verify} messages.
         * @param message DeleteFriendResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDeleteFriendResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteFriendResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.DeleteFriendResp;

        /**
         * Decodes a DeleteFriendResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.DeleteFriendResp;

        /**
         * Verifies a DeleteFriendResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteFriendResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteFriendResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.DeleteFriendResp;

        /**
         * Creates a plain object from a DeleteFriendResp message. Also converts values to other types if specified.
         * @param message DeleteFriendResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DeleteFriendResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteFriendResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteFriendResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendRequestListResp. */
    interface IFriendRequestListResp {

        /** FriendRequestListResp fromUids */
        fromUids?: (string[]|null);

        /** FriendRequestListResp fromUsernames */
        fromUsernames?: (string[]|null);

        /** FriendRequestListResp verifyMsgs */
        verifyMsgs?: (string[]|null);

        /** FriendRequestListResp code */
        code?: (number|null);

        /** FriendRequestListResp msg */
        msg?: (string|null);
    }

    /** Represents a FriendRequestListResp. */
    class FriendRequestListResp implements IFriendRequestListResp {

        /**
         * Constructs a new FriendRequestListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendRequestListResp);

        /** FriendRequestListResp fromUids. */
        public fromUids: string[];

        /** FriendRequestListResp fromUsernames. */
        public fromUsernames: string[];

        /** FriendRequestListResp verifyMsgs. */
        public verifyMsgs: string[];

        /** FriendRequestListResp code. */
        public code: number;

        /** FriendRequestListResp msg. */
        public msg: string;

        /**
         * Creates a new FriendRequestListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendRequestListResp instance
         */
        public static create(properties?: protocol.IFriendRequestListResp): protocol.FriendRequestListResp;

        /**
         * Encodes the specified FriendRequestListResp message. Does not implicitly {@link protocol.FriendRequestListResp.verify|verify} messages.
         * @param message FriendRequestListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendRequestListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendRequestListResp message, length delimited. Does not implicitly {@link protocol.FriendRequestListResp.verify|verify} messages.
         * @param message FriendRequestListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendRequestListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendRequestListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRequestListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.FriendRequestListResp;

        /**
         * Decodes a FriendRequestListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendRequestListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.FriendRequestListResp;

        /**
         * Verifies a FriendRequestListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendRequestListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRequestListResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendRequestListResp;

        /**
         * Creates a plain object from a FriendRequestListResp message. Also converts values to other types if specified.
         * @param message FriendRequestListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendRequestListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRequestListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendRequestListResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateRemarkReq. */
    interface IUpdateRemarkReq {

        /** UpdateRemarkReq uid */
        uid?: (string|null);

        /** UpdateRemarkReq friendUid */
        friendUid?: (string|null);

        /** UpdateRemarkReq remark */
        remark?: (string|null);

        /** UpdateRemarkReq token */
        token?: (string|null);
    }

    /** Represents an UpdateRemarkReq. */
    class UpdateRemarkReq implements IUpdateRemarkReq {

        /**
         * Constructs a new UpdateRemarkReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUpdateRemarkReq);

        /** UpdateRemarkReq uid. */
        public uid: string;

        /** UpdateRemarkReq friendUid. */
        public friendUid: string;

        /** UpdateRemarkReq remark. */
        public remark: string;

        /** UpdateRemarkReq token. */
        public token: string;

        /**
         * Creates a new UpdateRemarkReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRemarkReq instance
         */
        public static create(properties?: protocol.IUpdateRemarkReq): protocol.UpdateRemarkReq;

        /**
         * Encodes the specified UpdateRemarkReq message. Does not implicitly {@link protocol.UpdateRemarkReq.verify|verify} messages.
         * @param message UpdateRemarkReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUpdateRemarkReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRemarkReq message, length delimited. Does not implicitly {@link protocol.UpdateRemarkReq.verify|verify} messages.
         * @param message UpdateRemarkReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUpdateRemarkReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRemarkReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UpdateRemarkReq;

        /**
         * Decodes an UpdateRemarkReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UpdateRemarkReq;

        /**
         * Verifies an UpdateRemarkReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRemarkReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRemarkReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.UpdateRemarkReq;

        /**
         * Creates a plain object from an UpdateRemarkReq message. Also converts values to other types if specified.
         * @param message UpdateRemarkReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UpdateRemarkReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRemarkReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateRemarkReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateRemarkResp. */
    interface IUpdateRemarkResp {

        /** UpdateRemarkResp code */
        code?: (number|null);

        /** UpdateRemarkResp msg */
        msg?: (string|null);
    }

    /** Represents an UpdateRemarkResp. */
    class UpdateRemarkResp implements IUpdateRemarkResp {

        /**
         * Constructs a new UpdateRemarkResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUpdateRemarkResp);

        /** UpdateRemarkResp code. */
        public code: number;

        /** UpdateRemarkResp msg. */
        public msg: string;

        /**
         * Creates a new UpdateRemarkResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRemarkResp instance
         */
        public static create(properties?: protocol.IUpdateRemarkResp): protocol.UpdateRemarkResp;

        /**
         * Encodes the specified UpdateRemarkResp message. Does not implicitly {@link protocol.UpdateRemarkResp.verify|verify} messages.
         * @param message UpdateRemarkResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUpdateRemarkResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRemarkResp message, length delimited. Does not implicitly {@link protocol.UpdateRemarkResp.verify|verify} messages.
         * @param message UpdateRemarkResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUpdateRemarkResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRemarkResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UpdateRemarkResp;

        /**
         * Decodes an UpdateRemarkResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UpdateRemarkResp;

        /**
         * Verifies an UpdateRemarkResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRemarkResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRemarkResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.UpdateRemarkResp;

        /**
         * Creates a plain object from an UpdateRemarkResp message. Also converts values to other types if specified.
         * @param message UpdateRemarkResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UpdateRemarkResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRemarkResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateRemarkResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendInfoReq. */
    interface IFriendInfoReq {

        /** FriendInfoReq uid */
        uid?: (string|null);

        /** FriendInfoReq friendUid */
        friendUid?: (string|null);

        /** FriendInfoReq token */
        token?: (string|null);
    }

    /** Represents a FriendInfoReq. */
    class FriendInfoReq implements IFriendInfoReq {

        /**
         * Constructs a new FriendInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendInfoReq);

        /** FriendInfoReq uid. */
        public uid: string;

        /** FriendInfoReq friendUid. */
        public friendUid: string;

        /** FriendInfoReq token. */
        public token: string;

        /**
         * Creates a new FriendInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendInfoReq instance
         */
        public static create(properties?: protocol.IFriendInfoReq): protocol.FriendInfoReq;

        /**
         * Encodes the specified FriendInfoReq message. Does not implicitly {@link protocol.FriendInfoReq.verify|verify} messages.
         * @param message FriendInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendInfoReq message, length delimited. Does not implicitly {@link protocol.FriendInfoReq.verify|verify} messages.
         * @param message FriendInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.FriendInfoReq;

        /**
         * Decodes a FriendInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.FriendInfoReq;

        /**
         * Verifies a FriendInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendInfoReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendInfoReq;

        /**
         * Creates a plain object from a FriendInfoReq message. Also converts values to other types if specified.
         * @param message FriendInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FriendInfoResp. */
    interface IFriendInfoResp {

        /** FriendInfoResp uid */
        uid?: (string|null);

        /** FriendInfoResp username */
        username?: (string|null);

        /** FriendInfoResp email */
        email?: (string|null);

        /** FriendInfoResp remark */
        remark?: (string|null);

        /** FriendInfoResp dnd */
        dnd?: (boolean|null);

        /** FriendInfoResp code */
        code?: (number|null);

        /** FriendInfoResp msg */
        msg?: (string|null);
    }

    /** Represents a FriendInfoResp. */
    class FriendInfoResp implements IFriendInfoResp {

        /**
         * Constructs a new FriendInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendInfoResp);

        /** FriendInfoResp uid. */
        public uid: string;

        /** FriendInfoResp username. */
        public username: string;

        /** FriendInfoResp email. */
        public email: string;

        /** FriendInfoResp remark. */
        public remark: string;

        /** FriendInfoResp dnd. */
        public dnd: boolean;

        /** FriendInfoResp code. */
        public code: number;

        /** FriendInfoResp msg. */
        public msg: string;

        /**
         * Creates a new FriendInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendInfoResp instance
         */
        public static create(properties?: protocol.IFriendInfoResp): protocol.FriendInfoResp;

        /**
         * Encodes the specified FriendInfoResp message. Does not implicitly {@link protocol.FriendInfoResp.verify|verify} messages.
         * @param message FriendInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendInfoResp message, length delimited. Does not implicitly {@link protocol.FriendInfoResp.verify|verify} messages.
         * @param message FriendInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.FriendInfoResp;

        /**
         * Decodes a FriendInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.FriendInfoResp;

        /**
         * Verifies a FriendInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendInfoResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendInfoResp;

        /**
         * Creates a plain object from a FriendInfoResp message. Also converts values to other types if specified.
         * @param message FriendInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendInfoResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetDNDReq. */
    interface ISetDNDReq {

        /** SetDNDReq uid */
        uid?: (string|null);

        /** SetDNDReq friendUid */
        friendUid?: (string|null);

        /** SetDNDReq dnd */
        dnd?: (boolean|null);

        /** SetDNDReq token */
        token?: (string|null);
    }

    /** Represents a SetDNDReq. */
    class SetDNDReq implements ISetDNDReq {

        /**
         * Constructs a new SetDNDReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISetDNDReq);

        /** SetDNDReq uid. */
        public uid: string;

        /** SetDNDReq friendUid. */
        public friendUid: string;

        /** SetDNDReq dnd. */
        public dnd: boolean;

        /** SetDNDReq token. */
        public token: string;

        /**
         * Creates a new SetDNDReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetDNDReq instance
         */
        public static create(properties?: protocol.ISetDNDReq): protocol.SetDNDReq;

        /**
         * Encodes the specified SetDNDReq message. Does not implicitly {@link protocol.SetDNDReq.verify|verify} messages.
         * @param message SetDNDReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISetDNDReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetDNDReq message, length delimited. Does not implicitly {@link protocol.SetDNDReq.verify|verify} messages.
         * @param message SetDNDReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISetDNDReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetDNDReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SetDNDReq;

        /**
         * Decodes a SetDNDReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SetDNDReq;

        /**
         * Verifies a SetDNDReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetDNDReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetDNDReq
         */
        public static fromObject(object: { [k: string]: any }): protocol.SetDNDReq;

        /**
         * Creates a plain object from a SetDNDReq message. Also converts values to other types if specified.
         * @param message SetDNDReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SetDNDReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetDNDReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetDNDReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetDNDResp. */
    interface ISetDNDResp {

        /** SetDNDResp code */
        code?: (number|null);

        /** SetDNDResp msg */
        msg?: (string|null);
    }

    /** Represents a SetDNDResp. */
    class SetDNDResp implements ISetDNDResp {

        /**
         * Constructs a new SetDNDResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISetDNDResp);

        /** SetDNDResp code. */
        public code: number;

        /** SetDNDResp msg. */
        public msg: string;

        /**
         * Creates a new SetDNDResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetDNDResp instance
         */
        public static create(properties?: protocol.ISetDNDResp): protocol.SetDNDResp;

        /**
         * Encodes the specified SetDNDResp message. Does not implicitly {@link protocol.SetDNDResp.verify|verify} messages.
         * @param message SetDNDResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISetDNDResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetDNDResp message, length delimited. Does not implicitly {@link protocol.SetDNDResp.verify|verify} messages.
         * @param message SetDNDResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISetDNDResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetDNDResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SetDNDResp;

        /**
         * Decodes a SetDNDResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SetDNDResp;

        /**
         * Verifies a SetDNDResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetDNDResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetDNDResp
         */
        public static fromObject(object: { [k: string]: any }): protocol.SetDNDResp;

        /**
         * Creates a plain object from a SetDNDResp message. Also converts values to other types if specified.
         * @param message SetDNDResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SetDNDResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetDNDResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetDNDResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace pb. */
export namespace pb {

    /** Properties of a Group. */
    interface IGroup {

        /** Group groupId */
        groupId?: (string|null);

        /** Group name */
        name?: (string|null);

        /** Group description */
        description?: (string|null);

        /** Group ownerUid */
        ownerUid?: (string|null);

        /** Group memberUids */
        memberUids?: (string[]|null);

        /** Group createdAt */
        createdAt?: (number|Long|null);

        /** Group updatedAt */
        updatedAt?: (number|Long|null);

        /** Group remark */
        remark?: (string|null);
    }

    /** Represents a Group. */
    class Group implements IGroup {

        /**
         * Constructs a new Group.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroup);

        /** Group groupId. */
        public groupId: string;

        /** Group name. */
        public name: string;

        /** Group description. */
        public description: string;

        /** Group ownerUid. */
        public ownerUid: string;

        /** Group memberUids. */
        public memberUids: string[];

        /** Group createdAt. */
        public createdAt: (number|Long);

        /** Group updatedAt. */
        public updatedAt: (number|Long);

        /** Group remark. */
        public remark: string;

        /**
         * Creates a new Group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Group instance
         */
        public static create(properties?: pb.IGroup): pb.Group;

        /**
         * Encodes the specified Group message. Does not implicitly {@link pb.Group.verify|verify} messages.
         * @param message Group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Group message, length delimited. Does not implicitly {@link pb.Group.verify|verify} messages.
         * @param message Group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Group;

        /**
         * Decodes a Group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Group;

        /**
         * Verifies a Group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Group message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Group
         */
        public static fromObject(object: { [k: string]: any }): pb.Group;

        /**
         * Creates a plain object from a Group message. Also converts values to other types if specified.
         * @param message Group
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Group to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Group
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMember. */
    interface IGroupMember {

        /** GroupMember uid */
        uid?: (string|null);

        /** GroupMember username */
        username?: (string|null);

        /** GroupMember nickname */
        nickname?: (string|null);

        /** GroupMember role */
        role?: (string|null);

        /** GroupMember joinTime */
        joinTime?: (number|Long|null);
    }

    /** Represents a GroupMember. */
    class GroupMember implements IGroupMember {

        /**
         * Constructs a new GroupMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMember);

        /** GroupMember uid. */
        public uid: string;

        /** GroupMember username. */
        public username: string;

        /** GroupMember nickname. */
        public nickname: string;

        /** GroupMember role. */
        public role: string;

        /** GroupMember joinTime. */
        public joinTime: (number|Long);

        /**
         * Creates a new GroupMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMember instance
         */
        public static create(properties?: pb.IGroupMember): pb.GroupMember;

        /**
         * Encodes the specified GroupMember message. Does not implicitly {@link pb.GroupMember.verify|verify} messages.
         * @param message GroupMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMember message, length delimited. Does not implicitly {@link pb.GroupMember.verify|verify} messages.
         * @param message GroupMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMember;

        /**
         * Decodes a GroupMember message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMember;

        /**
         * Verifies a GroupMember message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMember message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMember
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMember;

        /**
         * Creates a plain object from a GroupMember message. Also converts values to other types if specified.
         * @param message GroupMember
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMember to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMember
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMessage. */
    interface IGroupMessage {

        /** GroupMessage messageId */
        messageId?: (string|null);

        /** GroupMessage groupId */
        groupId?: (string|null);

        /** GroupMessage fromUid */
        fromUid?: (string|null);

        /** GroupMessage fromUsername */
        fromUsername?: (string|null);

        /** GroupMessage content */
        content?: (string|null);

        /** GroupMessage messageType */
        messageType?: (string|null);

        /** GroupMessage timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a GroupMessage. */
    class GroupMessage implements IGroupMessage {

        /**
         * Constructs a new GroupMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMessage);

        /** GroupMessage messageId. */
        public messageId: string;

        /** GroupMessage groupId. */
        public groupId: string;

        /** GroupMessage fromUid. */
        public fromUid: string;

        /** GroupMessage fromUsername. */
        public fromUsername: string;

        /** GroupMessage content. */
        public content: string;

        /** GroupMessage messageType. */
        public messageType: string;

        /** GroupMessage timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new GroupMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMessage instance
         */
        public static create(properties?: pb.IGroupMessage): pb.GroupMessage;

        /**
         * Encodes the specified GroupMessage message. Does not implicitly {@link pb.GroupMessage.verify|verify} messages.
         * @param message GroupMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMessage message, length delimited. Does not implicitly {@link pb.GroupMessage.verify|verify} messages.
         * @param message GroupMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMessage;

        /**
         * Decodes a GroupMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMessage;

        /**
         * Verifies a GroupMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMessage
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMessage;

        /**
         * Creates a plain object from a GroupMessage message. Also converts values to other types if specified.
         * @param message GroupMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateGroupReq. */
    interface ICreateGroupReq {

        /** CreateGroupReq name */
        name?: (string|null);

        /** CreateGroupReq description */
        description?: (string|null);

        /** CreateGroupReq ownerUid */
        ownerUid?: (string|null);

        /** CreateGroupReq memberUids */
        memberUids?: (string[]|null);
    }

    /** Represents a CreateGroupReq. */
    class CreateGroupReq implements ICreateGroupReq {

        /**
         * Constructs a new CreateGroupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICreateGroupReq);

        /** CreateGroupReq name. */
        public name: string;

        /** CreateGroupReq description. */
        public description: string;

        /** CreateGroupReq ownerUid. */
        public ownerUid: string;

        /** CreateGroupReq memberUids. */
        public memberUids: string[];

        /**
         * Creates a new CreateGroupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateGroupReq instance
         */
        public static create(properties?: pb.ICreateGroupReq): pb.CreateGroupReq;

        /**
         * Encodes the specified CreateGroupReq message. Does not implicitly {@link pb.CreateGroupReq.verify|verify} messages.
         * @param message CreateGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICreateGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateGroupReq message, length delimited. Does not implicitly {@link pb.CreateGroupReq.verify|verify} messages.
         * @param message CreateGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ICreateGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CreateGroupReq;

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.CreateGroupReq;

        /**
         * Verifies a CreateGroupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateGroupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateGroupReq
         */
        public static fromObject(object: { [k: string]: any }): pb.CreateGroupReq;

        /**
         * Creates a plain object from a CreateGroupReq message. Also converts values to other types if specified.
         * @param message CreateGroupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.CreateGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateGroupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateGroupReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateGroupResp. */
    interface ICreateGroupResp {

        /** CreateGroupResp code */
        code?: (number|null);

        /** CreateGroupResp msg */
        msg?: (string|null);

        /** CreateGroupResp groupId */
        groupId?: (string|null);
    }

    /** Represents a CreateGroupResp. */
    class CreateGroupResp implements ICreateGroupResp {

        /**
         * Constructs a new CreateGroupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICreateGroupResp);

        /** CreateGroupResp code. */
        public code: number;

        /** CreateGroupResp msg. */
        public msg: string;

        /** CreateGroupResp groupId. */
        public groupId: string;

        /**
         * Creates a new CreateGroupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateGroupResp instance
         */
        public static create(properties?: pb.ICreateGroupResp): pb.CreateGroupResp;

        /**
         * Encodes the specified CreateGroupResp message. Does not implicitly {@link pb.CreateGroupResp.verify|verify} messages.
         * @param message CreateGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICreateGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateGroupResp message, length delimited. Does not implicitly {@link pb.CreateGroupResp.verify|verify} messages.
         * @param message CreateGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ICreateGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CreateGroupResp;

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.CreateGroupResp;

        /**
         * Verifies a CreateGroupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateGroupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateGroupResp
         */
        public static fromObject(object: { [k: string]: any }): pb.CreateGroupResp;

        /**
         * Creates a plain object from a CreateGroupResp message. Also converts values to other types if specified.
         * @param message CreateGroupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.CreateGroupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateGroupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateGroupResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinGroupReq. */
    interface IJoinGroupReq {

        /** JoinGroupReq groupId */
        groupId?: (string|null);

        /** JoinGroupReq uid */
        uid?: (string|null);
    }

    /** Represents a JoinGroupReq. */
    class JoinGroupReq implements IJoinGroupReq {

        /**
         * Constructs a new JoinGroupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IJoinGroupReq);

        /** JoinGroupReq groupId. */
        public groupId: string;

        /** JoinGroupReq uid. */
        public uid: string;

        /**
         * Creates a new JoinGroupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinGroupReq instance
         */
        public static create(properties?: pb.IJoinGroupReq): pb.JoinGroupReq;

        /**
         * Encodes the specified JoinGroupReq message. Does not implicitly {@link pb.JoinGroupReq.verify|verify} messages.
         * @param message JoinGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IJoinGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinGroupReq message, length delimited. Does not implicitly {@link pb.JoinGroupReq.verify|verify} messages.
         * @param message JoinGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IJoinGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinGroupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.JoinGroupReq;

        /**
         * Decodes a JoinGroupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.JoinGroupReq;

        /**
         * Verifies a JoinGroupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinGroupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinGroupReq
         */
        public static fromObject(object: { [k: string]: any }): pb.JoinGroupReq;

        /**
         * Creates a plain object from a JoinGroupReq message. Also converts values to other types if specified.
         * @param message JoinGroupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.JoinGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinGroupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinGroupReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinGroupResp. */
    interface IJoinGroupResp {

        /** JoinGroupResp code */
        code?: (number|null);

        /** JoinGroupResp msg */
        msg?: (string|null);
    }

    /** Represents a JoinGroupResp. */
    class JoinGroupResp implements IJoinGroupResp {

        /**
         * Constructs a new JoinGroupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IJoinGroupResp);

        /** JoinGroupResp code. */
        public code: number;

        /** JoinGroupResp msg. */
        public msg: string;

        /**
         * Creates a new JoinGroupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinGroupResp instance
         */
        public static create(properties?: pb.IJoinGroupResp): pb.JoinGroupResp;

        /**
         * Encodes the specified JoinGroupResp message. Does not implicitly {@link pb.JoinGroupResp.verify|verify} messages.
         * @param message JoinGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IJoinGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinGroupResp message, length delimited. Does not implicitly {@link pb.JoinGroupResp.verify|verify} messages.
         * @param message JoinGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IJoinGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinGroupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.JoinGroupResp;

        /**
         * Decodes a JoinGroupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.JoinGroupResp;

        /**
         * Verifies a JoinGroupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinGroupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinGroupResp
         */
        public static fromObject(object: { [k: string]: any }): pb.JoinGroupResp;

        /**
         * Creates a plain object from a JoinGroupResp message. Also converts values to other types if specified.
         * @param message JoinGroupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.JoinGroupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinGroupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinGroupResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LeaveGroupReq. */
    interface ILeaveGroupReq {

        /** LeaveGroupReq groupId */
        groupId?: (string|null);

        /** LeaveGroupReq uid */
        uid?: (string|null);
    }

    /** Represents a LeaveGroupReq. */
    class LeaveGroupReq implements ILeaveGroupReq {

        /**
         * Constructs a new LeaveGroupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILeaveGroupReq);

        /** LeaveGroupReq groupId. */
        public groupId: string;

        /** LeaveGroupReq uid. */
        public uid: string;

        /**
         * Creates a new LeaveGroupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveGroupReq instance
         */
        public static create(properties?: pb.ILeaveGroupReq): pb.LeaveGroupReq;

        /**
         * Encodes the specified LeaveGroupReq message. Does not implicitly {@link pb.LeaveGroupReq.verify|verify} messages.
         * @param message LeaveGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILeaveGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LeaveGroupReq message, length delimited. Does not implicitly {@link pb.LeaveGroupReq.verify|verify} messages.
         * @param message LeaveGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILeaveGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeaveGroupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LeaveGroupReq;

        /**
         * Decodes a LeaveGroupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LeaveGroupReq;

        /**
         * Verifies a LeaveGroupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveGroupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveGroupReq
         */
        public static fromObject(object: { [k: string]: any }): pb.LeaveGroupReq;

        /**
         * Creates a plain object from a LeaveGroupReq message. Also converts values to other types if specified.
         * @param message LeaveGroupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LeaveGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveGroupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LeaveGroupReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LeaveGroupResp. */
    interface ILeaveGroupResp {

        /** LeaveGroupResp code */
        code?: (number|null);

        /** LeaveGroupResp msg */
        msg?: (string|null);
    }

    /** Represents a LeaveGroupResp. */
    class LeaveGroupResp implements ILeaveGroupResp {

        /**
         * Constructs a new LeaveGroupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILeaveGroupResp);

        /** LeaveGroupResp code. */
        public code: number;

        /** LeaveGroupResp msg. */
        public msg: string;

        /**
         * Creates a new LeaveGroupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveGroupResp instance
         */
        public static create(properties?: pb.ILeaveGroupResp): pb.LeaveGroupResp;

        /**
         * Encodes the specified LeaveGroupResp message. Does not implicitly {@link pb.LeaveGroupResp.verify|verify} messages.
         * @param message LeaveGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILeaveGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LeaveGroupResp message, length delimited. Does not implicitly {@link pb.LeaveGroupResp.verify|verify} messages.
         * @param message LeaveGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILeaveGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeaveGroupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LeaveGroupResp;

        /**
         * Decodes a LeaveGroupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LeaveGroupResp;

        /**
         * Verifies a LeaveGroupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveGroupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveGroupResp
         */
        public static fromObject(object: { [k: string]: any }): pb.LeaveGroupResp;

        /**
         * Creates a plain object from a LeaveGroupResp message. Also converts values to other types if specified.
         * @param message LeaveGroupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LeaveGroupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveGroupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LeaveGroupResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupListReq. */
    interface IGroupListReq {

        /** GroupListReq uid */
        uid?: (string|null);
    }

    /** Represents a GroupListReq. */
    class GroupListReq implements IGroupListReq {

        /**
         * Constructs a new GroupListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupListReq);

        /** GroupListReq uid. */
        public uid: string;

        /**
         * Creates a new GroupListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupListReq instance
         */
        public static create(properties?: pb.IGroupListReq): pb.GroupListReq;

        /**
         * Encodes the specified GroupListReq message. Does not implicitly {@link pb.GroupListReq.verify|verify} messages.
         * @param message GroupListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupListReq message, length delimited. Does not implicitly {@link pb.GroupListReq.verify|verify} messages.
         * @param message GroupListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupListReq;

        /**
         * Decodes a GroupListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupListReq;

        /**
         * Verifies a GroupListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupListReq
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupListReq;

        /**
         * Creates a plain object from a GroupListReq message. Also converts values to other types if specified.
         * @param message GroupListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupListReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupListResp. */
    interface IGroupListResp {

        /** GroupListResp code */
        code?: (number|null);

        /** GroupListResp msg */
        msg?: (string|null);

        /** GroupListResp groups */
        groups?: (pb.IGroup[]|null);
    }

    /** Represents a GroupListResp. */
    class GroupListResp implements IGroupListResp {

        /**
         * Constructs a new GroupListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupListResp);

        /** GroupListResp code. */
        public code: number;

        /** GroupListResp msg. */
        public msg: string;

        /** GroupListResp groups. */
        public groups: pb.IGroup[];

        /**
         * Creates a new GroupListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupListResp instance
         */
        public static create(properties?: pb.IGroupListResp): pb.GroupListResp;

        /**
         * Encodes the specified GroupListResp message. Does not implicitly {@link pb.GroupListResp.verify|verify} messages.
         * @param message GroupListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupListResp message, length delimited. Does not implicitly {@link pb.GroupListResp.verify|verify} messages.
         * @param message GroupListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupListResp;

        /**
         * Decodes a GroupListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupListResp;

        /**
         * Verifies a GroupListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupListResp
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupListResp;

        /**
         * Creates a plain object from a GroupListResp message. Also converts values to other types if specified.
         * @param message GroupListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupListResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMembersReq. */
    interface IGroupMembersReq {

        /** GroupMembersReq groupId */
        groupId?: (string|null);
    }

    /** Represents a GroupMembersReq. */
    class GroupMembersReq implements IGroupMembersReq {

        /**
         * Constructs a new GroupMembersReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMembersReq);

        /** GroupMembersReq groupId. */
        public groupId: string;

        /**
         * Creates a new GroupMembersReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMembersReq instance
         */
        public static create(properties?: pb.IGroupMembersReq): pb.GroupMembersReq;

        /**
         * Encodes the specified GroupMembersReq message. Does not implicitly {@link pb.GroupMembersReq.verify|verify} messages.
         * @param message GroupMembersReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMembersReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMembersReq message, length delimited. Does not implicitly {@link pb.GroupMembersReq.verify|verify} messages.
         * @param message GroupMembersReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMembersReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMembersReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMembersReq;

        /**
         * Decodes a GroupMembersReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMembersReq;

        /**
         * Verifies a GroupMembersReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMembersReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMembersReq
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMembersReq;

        /**
         * Creates a plain object from a GroupMembersReq message. Also converts values to other types if specified.
         * @param message GroupMembersReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMembersReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMembersReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMembersReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMembersResp. */
    interface IGroupMembersResp {

        /** GroupMembersResp code */
        code?: (number|null);

        /** GroupMembersResp msg */
        msg?: (string|null);

        /** GroupMembersResp members */
        members?: (pb.IGroupMember[]|null);
    }

    /** Represents a GroupMembersResp. */
    class GroupMembersResp implements IGroupMembersResp {

        /**
         * Constructs a new GroupMembersResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMembersResp);

        /** GroupMembersResp code. */
        public code: number;

        /** GroupMembersResp msg. */
        public msg: string;

        /** GroupMembersResp members. */
        public members: pb.IGroupMember[];

        /**
         * Creates a new GroupMembersResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMembersResp instance
         */
        public static create(properties?: pb.IGroupMembersResp): pb.GroupMembersResp;

        /**
         * Encodes the specified GroupMembersResp message. Does not implicitly {@link pb.GroupMembersResp.verify|verify} messages.
         * @param message GroupMembersResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMembersResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMembersResp message, length delimited. Does not implicitly {@link pb.GroupMembersResp.verify|verify} messages.
         * @param message GroupMembersResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMembersResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMembersResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMembersResp;

        /**
         * Decodes a GroupMembersResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMembersResp;

        /**
         * Verifies a GroupMembersResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMembersResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMembersResp
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMembersResp;

        /**
         * Creates a plain object from a GroupMembersResp message. Also converts values to other types if specified.
         * @param message GroupMembersResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMembersResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMembersResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMembersResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupInfoReq. */
    interface IGroupInfoReq {

        /** GroupInfoReq groupId */
        groupId?: (string|null);
    }

    /** Represents a GroupInfoReq. */
    class GroupInfoReq implements IGroupInfoReq {

        /**
         * Constructs a new GroupInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupInfoReq);

        /** GroupInfoReq groupId. */
        public groupId: string;

        /**
         * Creates a new GroupInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupInfoReq instance
         */
        public static create(properties?: pb.IGroupInfoReq): pb.GroupInfoReq;

        /**
         * Encodes the specified GroupInfoReq message. Does not implicitly {@link pb.GroupInfoReq.verify|verify} messages.
         * @param message GroupInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupInfoReq message, length delimited. Does not implicitly {@link pb.GroupInfoReq.verify|verify} messages.
         * @param message GroupInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupInfoReq;

        /**
         * Decodes a GroupInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupInfoReq;

        /**
         * Verifies a GroupInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupInfoReq
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupInfoReq;

        /**
         * Creates a plain object from a GroupInfoReq message. Also converts values to other types if specified.
         * @param message GroupInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupInfoResp. */
    interface IGroupInfoResp {

        /** GroupInfoResp code */
        code?: (number|null);

        /** GroupInfoResp msg */
        msg?: (string|null);

        /** GroupInfoResp group */
        group?: (pb.IGroup|null);
    }

    /** Represents a GroupInfoResp. */
    class GroupInfoResp implements IGroupInfoResp {

        /**
         * Constructs a new GroupInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupInfoResp);

        /** GroupInfoResp code. */
        public code: number;

        /** GroupInfoResp msg. */
        public msg: string;

        /** GroupInfoResp group. */
        public group?: (pb.IGroup|null);

        /**
         * Creates a new GroupInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupInfoResp instance
         */
        public static create(properties?: pb.IGroupInfoResp): pb.GroupInfoResp;

        /**
         * Encodes the specified GroupInfoResp message. Does not implicitly {@link pb.GroupInfoResp.verify|verify} messages.
         * @param message GroupInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupInfoResp message, length delimited. Does not implicitly {@link pb.GroupInfoResp.verify|verify} messages.
         * @param message GroupInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupInfoResp;

        /**
         * Decodes a GroupInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupInfoResp;

        /**
         * Verifies a GroupInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupInfoResp
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupInfoResp;

        /**
         * Creates a plain object from a GroupInfoResp message. Also converts values to other types if specified.
         * @param message GroupInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupInfoResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendGroupMessageReq. */
    interface ISendGroupMessageReq {

        /** SendGroupMessageReq groupId */
        groupId?: (string|null);

        /** SendGroupMessageReq fromUid */
        fromUid?: (string|null);

        /** SendGroupMessageReq content */
        content?: (string|null);

        /** SendGroupMessageReq messageType */
        messageType?: (string|null);
    }

    /** Represents a SendGroupMessageReq. */
    class SendGroupMessageReq implements ISendGroupMessageReq {

        /**
         * Constructs a new SendGroupMessageReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISendGroupMessageReq);

        /** SendGroupMessageReq groupId. */
        public groupId: string;

        /** SendGroupMessageReq fromUid. */
        public fromUid: string;

        /** SendGroupMessageReq content. */
        public content: string;

        /** SendGroupMessageReq messageType. */
        public messageType: string;

        /**
         * Creates a new SendGroupMessageReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendGroupMessageReq instance
         */
        public static create(properties?: pb.ISendGroupMessageReq): pb.SendGroupMessageReq;

        /**
         * Encodes the specified SendGroupMessageReq message. Does not implicitly {@link pb.SendGroupMessageReq.verify|verify} messages.
         * @param message SendGroupMessageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISendGroupMessageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendGroupMessageReq message, length delimited. Does not implicitly {@link pb.SendGroupMessageReq.verify|verify} messages.
         * @param message SendGroupMessageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISendGroupMessageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendGroupMessageReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendGroupMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SendGroupMessageReq;

        /**
         * Decodes a SendGroupMessageReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendGroupMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SendGroupMessageReq;

        /**
         * Verifies a SendGroupMessageReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendGroupMessageReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendGroupMessageReq
         */
        public static fromObject(object: { [k: string]: any }): pb.SendGroupMessageReq;

        /**
         * Creates a plain object from a SendGroupMessageReq message. Also converts values to other types if specified.
         * @param message SendGroupMessageReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SendGroupMessageReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendGroupMessageReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendGroupMessageReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendGroupMessageResp. */
    interface ISendGroupMessageResp {

        /** SendGroupMessageResp code */
        code?: (number|null);

        /** SendGroupMessageResp msg */
        msg?: (string|null);

        /** SendGroupMessageResp messageId */
        messageId?: (string|null);
    }

    /** Represents a SendGroupMessageResp. */
    class SendGroupMessageResp implements ISendGroupMessageResp {

        /**
         * Constructs a new SendGroupMessageResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISendGroupMessageResp);

        /** SendGroupMessageResp code. */
        public code: number;

        /** SendGroupMessageResp msg. */
        public msg: string;

        /** SendGroupMessageResp messageId. */
        public messageId: string;

        /**
         * Creates a new SendGroupMessageResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendGroupMessageResp instance
         */
        public static create(properties?: pb.ISendGroupMessageResp): pb.SendGroupMessageResp;

        /**
         * Encodes the specified SendGroupMessageResp message. Does not implicitly {@link pb.SendGroupMessageResp.verify|verify} messages.
         * @param message SendGroupMessageResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISendGroupMessageResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendGroupMessageResp message, length delimited. Does not implicitly {@link pb.SendGroupMessageResp.verify|verify} messages.
         * @param message SendGroupMessageResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISendGroupMessageResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendGroupMessageResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendGroupMessageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SendGroupMessageResp;

        /**
         * Decodes a SendGroupMessageResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendGroupMessageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SendGroupMessageResp;

        /**
         * Verifies a SendGroupMessageResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendGroupMessageResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendGroupMessageResp
         */
        public static fromObject(object: { [k: string]: any }): pb.SendGroupMessageResp;

        /**
         * Creates a plain object from a SendGroupMessageResp message. Also converts values to other types if specified.
         * @param message SendGroupMessageResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SendGroupMessageResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendGroupMessageResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendGroupMessageResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMessageHistoryReq. */
    interface IGroupMessageHistoryReq {

        /** GroupMessageHistoryReq groupId */
        groupId?: (string|null);

        /** GroupMessageHistoryReq limit */
        limit?: (number|null);

        /** GroupMessageHistoryReq beforeTimestamp */
        beforeTimestamp?: (number|Long|null);
    }

    /** Represents a GroupMessageHistoryReq. */
    class GroupMessageHistoryReq implements IGroupMessageHistoryReq {

        /**
         * Constructs a new GroupMessageHistoryReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMessageHistoryReq);

        /** GroupMessageHistoryReq groupId. */
        public groupId: string;

        /** GroupMessageHistoryReq limit. */
        public limit: number;

        /** GroupMessageHistoryReq beforeTimestamp. */
        public beforeTimestamp: (number|Long);

        /**
         * Creates a new GroupMessageHistoryReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMessageHistoryReq instance
         */
        public static create(properties?: pb.IGroupMessageHistoryReq): pb.GroupMessageHistoryReq;

        /**
         * Encodes the specified GroupMessageHistoryReq message. Does not implicitly {@link pb.GroupMessageHistoryReq.verify|verify} messages.
         * @param message GroupMessageHistoryReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMessageHistoryReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMessageHistoryReq message, length delimited. Does not implicitly {@link pb.GroupMessageHistoryReq.verify|verify} messages.
         * @param message GroupMessageHistoryReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMessageHistoryReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMessageHistoryReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMessageHistoryReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMessageHistoryReq;

        /**
         * Decodes a GroupMessageHistoryReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMessageHistoryReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMessageHistoryReq;

        /**
         * Verifies a GroupMessageHistoryReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMessageHistoryReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMessageHistoryReq
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMessageHistoryReq;

        /**
         * Creates a plain object from a GroupMessageHistoryReq message. Also converts values to other types if specified.
         * @param message GroupMessageHistoryReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMessageHistoryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMessageHistoryReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMessageHistoryReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMessageHistoryResp. */
    interface IGroupMessageHistoryResp {

        /** GroupMessageHistoryResp code */
        code?: (number|null);

        /** GroupMessageHistoryResp msg */
        msg?: (string|null);

        /** GroupMessageHistoryResp messages */
        messages?: (pb.IGroupMessage[]|null);
    }

    /** Represents a GroupMessageHistoryResp. */
    class GroupMessageHistoryResp implements IGroupMessageHistoryResp {

        /**
         * Constructs a new GroupMessageHistoryResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMessageHistoryResp);

        /** GroupMessageHistoryResp code. */
        public code: number;

        /** GroupMessageHistoryResp msg. */
        public msg: string;

        /** GroupMessageHistoryResp messages. */
        public messages: pb.IGroupMessage[];

        /**
         * Creates a new GroupMessageHistoryResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMessageHistoryResp instance
         */
        public static create(properties?: pb.IGroupMessageHistoryResp): pb.GroupMessageHistoryResp;

        /**
         * Encodes the specified GroupMessageHistoryResp message. Does not implicitly {@link pb.GroupMessageHistoryResp.verify|verify} messages.
         * @param message GroupMessageHistoryResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMessageHistoryResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMessageHistoryResp message, length delimited. Does not implicitly {@link pb.GroupMessageHistoryResp.verify|verify} messages.
         * @param message GroupMessageHistoryResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMessageHistoryResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMessageHistoryResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMessageHistoryResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMessageHistoryResp;

        /**
         * Decodes a GroupMessageHistoryResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMessageHistoryResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMessageHistoryResp;

        /**
         * Verifies a GroupMessageHistoryResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMessageHistoryResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMessageHistoryResp
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMessageHistoryResp;

        /**
         * Creates a plain object from a GroupMessageHistoryResp message. Also converts values to other types if specified.
         * @param message GroupMessageHistoryResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMessageHistoryResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMessageHistoryResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMessageHistoryResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InviteToGroupReq. */
    interface IInviteToGroupReq {

        /** InviteToGroupReq groupId */
        groupId?: (string|null);

        /** InviteToGroupReq inviterUid */
        inviterUid?: (string|null);

        /** InviteToGroupReq inviteeUids */
        inviteeUids?: (string[]|null);
    }

    /** Represents an InviteToGroupReq. */
    class InviteToGroupReq implements IInviteToGroupReq {

        /**
         * Constructs a new InviteToGroupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IInviteToGroupReq);

        /** InviteToGroupReq groupId. */
        public groupId: string;

        /** InviteToGroupReq inviterUid. */
        public inviterUid: string;

        /** InviteToGroupReq inviteeUids. */
        public inviteeUids: string[];

        /**
         * Creates a new InviteToGroupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InviteToGroupReq instance
         */
        public static create(properties?: pb.IInviteToGroupReq): pb.InviteToGroupReq;

        /**
         * Encodes the specified InviteToGroupReq message. Does not implicitly {@link pb.InviteToGroupReq.verify|verify} messages.
         * @param message InviteToGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IInviteToGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InviteToGroupReq message, length delimited. Does not implicitly {@link pb.InviteToGroupReq.verify|verify} messages.
         * @param message InviteToGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IInviteToGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InviteToGroupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InviteToGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.InviteToGroupReq;

        /**
         * Decodes an InviteToGroupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InviteToGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.InviteToGroupReq;

        /**
         * Verifies an InviteToGroupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InviteToGroupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InviteToGroupReq
         */
        public static fromObject(object: { [k: string]: any }): pb.InviteToGroupReq;

        /**
         * Creates a plain object from an InviteToGroupReq message. Also converts values to other types if specified.
         * @param message InviteToGroupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.InviteToGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InviteToGroupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InviteToGroupReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InviteToGroupResp. */
    interface IInviteToGroupResp {

        /** InviteToGroupResp code */
        code?: (number|null);

        /** InviteToGroupResp msg */
        msg?: (string|null);
    }

    /** Represents an InviteToGroupResp. */
    class InviteToGroupResp implements IInviteToGroupResp {

        /**
         * Constructs a new InviteToGroupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IInviteToGroupResp);

        /** InviteToGroupResp code. */
        public code: number;

        /** InviteToGroupResp msg. */
        public msg: string;

        /**
         * Creates a new InviteToGroupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InviteToGroupResp instance
         */
        public static create(properties?: pb.IInviteToGroupResp): pb.InviteToGroupResp;

        /**
         * Encodes the specified InviteToGroupResp message. Does not implicitly {@link pb.InviteToGroupResp.verify|verify} messages.
         * @param message InviteToGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IInviteToGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InviteToGroupResp message, length delimited. Does not implicitly {@link pb.InviteToGroupResp.verify|verify} messages.
         * @param message InviteToGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IInviteToGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InviteToGroupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InviteToGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.InviteToGroupResp;

        /**
         * Decodes an InviteToGroupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InviteToGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.InviteToGroupResp;

        /**
         * Verifies an InviteToGroupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InviteToGroupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InviteToGroupResp
         */
        public static fromObject(object: { [k: string]: any }): pb.InviteToGroupResp;

        /**
         * Creates a plain object from an InviteToGroupResp message. Also converts values to other types if specified.
         * @param message InviteToGroupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.InviteToGroupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InviteToGroupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InviteToGroupResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KickFromGroupReq. */
    interface IKickFromGroupReq {

        /** KickFromGroupReq groupId */
        groupId?: (string|null);

        /** KickFromGroupReq operatorUid */
        operatorUid?: (string|null);

        /** KickFromGroupReq targetUid */
        targetUid?: (string|null);
    }

    /** Represents a KickFromGroupReq. */
    class KickFromGroupReq implements IKickFromGroupReq {

        /**
         * Constructs a new KickFromGroupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IKickFromGroupReq);

        /** KickFromGroupReq groupId. */
        public groupId: string;

        /** KickFromGroupReq operatorUid. */
        public operatorUid: string;

        /** KickFromGroupReq targetUid. */
        public targetUid: string;

        /**
         * Creates a new KickFromGroupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickFromGroupReq instance
         */
        public static create(properties?: pb.IKickFromGroupReq): pb.KickFromGroupReq;

        /**
         * Encodes the specified KickFromGroupReq message. Does not implicitly {@link pb.KickFromGroupReq.verify|verify} messages.
         * @param message KickFromGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IKickFromGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickFromGroupReq message, length delimited. Does not implicitly {@link pb.KickFromGroupReq.verify|verify} messages.
         * @param message KickFromGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IKickFromGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickFromGroupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickFromGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.KickFromGroupReq;

        /**
         * Decodes a KickFromGroupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickFromGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.KickFromGroupReq;

        /**
         * Verifies a KickFromGroupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickFromGroupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickFromGroupReq
         */
        public static fromObject(object: { [k: string]: any }): pb.KickFromGroupReq;

        /**
         * Creates a plain object from a KickFromGroupReq message. Also converts values to other types if specified.
         * @param message KickFromGroupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.KickFromGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickFromGroupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KickFromGroupReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KickFromGroupResp. */
    interface IKickFromGroupResp {

        /** KickFromGroupResp code */
        code?: (number|null);

        /** KickFromGroupResp msg */
        msg?: (string|null);
    }

    /** Represents a KickFromGroupResp. */
    class KickFromGroupResp implements IKickFromGroupResp {

        /**
         * Constructs a new KickFromGroupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IKickFromGroupResp);

        /** KickFromGroupResp code. */
        public code: number;

        /** KickFromGroupResp msg. */
        public msg: string;

        /**
         * Creates a new KickFromGroupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickFromGroupResp instance
         */
        public static create(properties?: pb.IKickFromGroupResp): pb.KickFromGroupResp;

        /**
         * Encodes the specified KickFromGroupResp message. Does not implicitly {@link pb.KickFromGroupResp.verify|verify} messages.
         * @param message KickFromGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IKickFromGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickFromGroupResp message, length delimited. Does not implicitly {@link pb.KickFromGroupResp.verify|verify} messages.
         * @param message KickFromGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IKickFromGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickFromGroupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickFromGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.KickFromGroupResp;

        /**
         * Decodes a KickFromGroupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickFromGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.KickFromGroupResp;

        /**
         * Verifies a KickFromGroupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickFromGroupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickFromGroupResp
         */
        public static fromObject(object: { [k: string]: any }): pb.KickFromGroupResp;

        /**
         * Creates a plain object from a KickFromGroupResp message. Also converts values to other types if specified.
         * @param message KickFromGroupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.KickFromGroupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickFromGroupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KickFromGroupResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupNicknameReq. */
    interface ISetGroupNicknameReq {

        /** SetGroupNicknameReq groupId */
        groupId?: (string|null);

        /** SetGroupNicknameReq uid */
        uid?: (string|null);

        /** SetGroupNicknameReq nickname */
        nickname?: (string|null);
    }

    /** Represents a SetGroupNicknameReq. */
    class SetGroupNicknameReq implements ISetGroupNicknameReq {

        /**
         * Constructs a new SetGroupNicknameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupNicknameReq);

        /** SetGroupNicknameReq groupId. */
        public groupId: string;

        /** SetGroupNicknameReq uid. */
        public uid: string;

        /** SetGroupNicknameReq nickname. */
        public nickname: string;

        /**
         * Creates a new SetGroupNicknameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupNicknameReq instance
         */
        public static create(properties?: pb.ISetGroupNicknameReq): pb.SetGroupNicknameReq;

        /**
         * Encodes the specified SetGroupNicknameReq message. Does not implicitly {@link pb.SetGroupNicknameReq.verify|verify} messages.
         * @param message SetGroupNicknameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupNicknameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupNicknameReq message, length delimited. Does not implicitly {@link pb.SetGroupNicknameReq.verify|verify} messages.
         * @param message SetGroupNicknameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupNicknameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupNicknameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupNicknameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupNicknameReq;

        /**
         * Decodes a SetGroupNicknameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupNicknameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupNicknameReq;

        /**
         * Verifies a SetGroupNicknameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupNicknameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupNicknameReq
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupNicknameReq;

        /**
         * Creates a plain object from a SetGroupNicknameReq message. Also converts values to other types if specified.
         * @param message SetGroupNicknameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupNicknameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupNicknameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupNicknameReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupNicknameResp. */
    interface ISetGroupNicknameResp {

        /** SetGroupNicknameResp code */
        code?: (number|null);

        /** SetGroupNicknameResp msg */
        msg?: (string|null);
    }

    /** Represents a SetGroupNicknameResp. */
    class SetGroupNicknameResp implements ISetGroupNicknameResp {

        /**
         * Constructs a new SetGroupNicknameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupNicknameResp);

        /** SetGroupNicknameResp code. */
        public code: number;

        /** SetGroupNicknameResp msg. */
        public msg: string;

        /**
         * Creates a new SetGroupNicknameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupNicknameResp instance
         */
        public static create(properties?: pb.ISetGroupNicknameResp): pb.SetGroupNicknameResp;

        /**
         * Encodes the specified SetGroupNicknameResp message. Does not implicitly {@link pb.SetGroupNicknameResp.verify|verify} messages.
         * @param message SetGroupNicknameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupNicknameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupNicknameResp message, length delimited. Does not implicitly {@link pb.SetGroupNicknameResp.verify|verify} messages.
         * @param message SetGroupNicknameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupNicknameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupNicknameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupNicknameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupNicknameResp;

        /**
         * Decodes a SetGroupNicknameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupNicknameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupNicknameResp;

        /**
         * Verifies a SetGroupNicknameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupNicknameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupNicknameResp
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupNicknameResp;

        /**
         * Creates a plain object from a SetGroupNicknameResp message. Also converts values to other types if specified.
         * @param message SetGroupNicknameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupNicknameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupNicknameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupNicknameResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateGroupNameReq. */
    interface IUpdateGroupNameReq {

        /** UpdateGroupNameReq groupId */
        groupId?: (string|null);

        /** UpdateGroupNameReq operatorUid */
        operatorUid?: (string|null);

        /** UpdateGroupNameReq newName */
        newName?: (string|null);
    }

    /** Represents an UpdateGroupNameReq. */
    class UpdateGroupNameReq implements IUpdateGroupNameReq {

        /**
         * Constructs a new UpdateGroupNameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUpdateGroupNameReq);

        /** UpdateGroupNameReq groupId. */
        public groupId: string;

        /** UpdateGroupNameReq operatorUid. */
        public operatorUid: string;

        /** UpdateGroupNameReq newName. */
        public newName: string;

        /**
         * Creates a new UpdateGroupNameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGroupNameReq instance
         */
        public static create(properties?: pb.IUpdateGroupNameReq): pb.UpdateGroupNameReq;

        /**
         * Encodes the specified UpdateGroupNameReq message. Does not implicitly {@link pb.UpdateGroupNameReq.verify|verify} messages.
         * @param message UpdateGroupNameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUpdateGroupNameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGroupNameReq message, length delimited. Does not implicitly {@link pb.UpdateGroupNameReq.verify|verify} messages.
         * @param message UpdateGroupNameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUpdateGroupNameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGroupNameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGroupNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UpdateGroupNameReq;

        /**
         * Decodes an UpdateGroupNameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGroupNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UpdateGroupNameReq;

        /**
         * Verifies an UpdateGroupNameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateGroupNameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGroupNameReq
         */
        public static fromObject(object: { [k: string]: any }): pb.UpdateGroupNameReq;

        /**
         * Creates a plain object from an UpdateGroupNameReq message. Also converts values to other types if specified.
         * @param message UpdateGroupNameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UpdateGroupNameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateGroupNameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateGroupNameReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateGroupNameResp. */
    interface IUpdateGroupNameResp {

        /** UpdateGroupNameResp code */
        code?: (number|null);

        /** UpdateGroupNameResp msg */
        msg?: (string|null);
    }

    /** Represents an UpdateGroupNameResp. */
    class UpdateGroupNameResp implements IUpdateGroupNameResp {

        /**
         * Constructs a new UpdateGroupNameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUpdateGroupNameResp);

        /** UpdateGroupNameResp code. */
        public code: number;

        /** UpdateGroupNameResp msg. */
        public msg: string;

        /**
         * Creates a new UpdateGroupNameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGroupNameResp instance
         */
        public static create(properties?: pb.IUpdateGroupNameResp): pb.UpdateGroupNameResp;

        /**
         * Encodes the specified UpdateGroupNameResp message. Does not implicitly {@link pb.UpdateGroupNameResp.verify|verify} messages.
         * @param message UpdateGroupNameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUpdateGroupNameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGroupNameResp message, length delimited. Does not implicitly {@link pb.UpdateGroupNameResp.verify|verify} messages.
         * @param message UpdateGroupNameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUpdateGroupNameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGroupNameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGroupNameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UpdateGroupNameResp;

        /**
         * Decodes an UpdateGroupNameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGroupNameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UpdateGroupNameResp;

        /**
         * Verifies an UpdateGroupNameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateGroupNameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGroupNameResp
         */
        public static fromObject(object: { [k: string]: any }): pb.UpdateGroupNameResp;

        /**
         * Creates a plain object from an UpdateGroupNameResp message. Also converts values to other types if specified.
         * @param message UpdateGroupNameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UpdateGroupNameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateGroupNameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateGroupNameResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupRemarkReq. */
    interface ISetGroupRemarkReq {

        /** SetGroupRemarkReq groupId */
        groupId?: (string|null);

        /** SetGroupRemarkReq uid */
        uid?: (string|null);

        /** SetGroupRemarkReq remark */
        remark?: (string|null);
    }

    /** Represents a SetGroupRemarkReq. */
    class SetGroupRemarkReq implements ISetGroupRemarkReq {

        /**
         * Constructs a new SetGroupRemarkReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupRemarkReq);

        /** SetGroupRemarkReq groupId. */
        public groupId: string;

        /** SetGroupRemarkReq uid. */
        public uid: string;

        /** SetGroupRemarkReq remark. */
        public remark: string;

        /**
         * Creates a new SetGroupRemarkReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupRemarkReq instance
         */
        public static create(properties?: pb.ISetGroupRemarkReq): pb.SetGroupRemarkReq;

        /**
         * Encodes the specified SetGroupRemarkReq message. Does not implicitly {@link pb.SetGroupRemarkReq.verify|verify} messages.
         * @param message SetGroupRemarkReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupRemarkReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupRemarkReq message, length delimited. Does not implicitly {@link pb.SetGroupRemarkReq.verify|verify} messages.
         * @param message SetGroupRemarkReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupRemarkReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupRemarkReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupRemarkReq;

        /**
         * Decodes a SetGroupRemarkReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupRemarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupRemarkReq;

        /**
         * Verifies a SetGroupRemarkReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupRemarkReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupRemarkReq
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupRemarkReq;

        /**
         * Creates a plain object from a SetGroupRemarkReq message. Also converts values to other types if specified.
         * @param message SetGroupRemarkReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupRemarkReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupRemarkReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupRemarkReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupRemarkResp. */
    interface ISetGroupRemarkResp {

        /** SetGroupRemarkResp code */
        code?: (number|null);

        /** SetGroupRemarkResp msg */
        msg?: (string|null);
    }

    /** Represents a SetGroupRemarkResp. */
    class SetGroupRemarkResp implements ISetGroupRemarkResp {

        /**
         * Constructs a new SetGroupRemarkResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupRemarkResp);

        /** SetGroupRemarkResp code. */
        public code: number;

        /** SetGroupRemarkResp msg. */
        public msg: string;

        /**
         * Creates a new SetGroupRemarkResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupRemarkResp instance
         */
        public static create(properties?: pb.ISetGroupRemarkResp): pb.SetGroupRemarkResp;

        /**
         * Encodes the specified SetGroupRemarkResp message. Does not implicitly {@link pb.SetGroupRemarkResp.verify|verify} messages.
         * @param message SetGroupRemarkResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupRemarkResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupRemarkResp message, length delimited. Does not implicitly {@link pb.SetGroupRemarkResp.verify|verify} messages.
         * @param message SetGroupRemarkResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupRemarkResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupRemarkResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupRemarkResp;

        /**
         * Decodes a SetGroupRemarkResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupRemarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupRemarkResp;

        /**
         * Verifies a SetGroupRemarkResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupRemarkResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupRemarkResp
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupRemarkResp;

        /**
         * Creates a plain object from a SetGroupRemarkResp message. Also converts values to other types if specified.
         * @param message SetGroupRemarkResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupRemarkResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupRemarkResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupRemarkResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupDNDReq. */
    interface ISetGroupDNDReq {

        /** SetGroupDNDReq groupId */
        groupId?: (string|null);

        /** SetGroupDNDReq uid */
        uid?: (string|null);

        /** SetGroupDNDReq dnd */
        dnd?: (boolean|null);
    }

    /** Represents a SetGroupDNDReq. */
    class SetGroupDNDReq implements ISetGroupDNDReq {

        /**
         * Constructs a new SetGroupDNDReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupDNDReq);

        /** SetGroupDNDReq groupId. */
        public groupId: string;

        /** SetGroupDNDReq uid. */
        public uid: string;

        /** SetGroupDNDReq dnd. */
        public dnd: boolean;

        /**
         * Creates a new SetGroupDNDReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupDNDReq instance
         */
        public static create(properties?: pb.ISetGroupDNDReq): pb.SetGroupDNDReq;

        /**
         * Encodes the specified SetGroupDNDReq message. Does not implicitly {@link pb.SetGroupDNDReq.verify|verify} messages.
         * @param message SetGroupDNDReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupDNDReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupDNDReq message, length delimited. Does not implicitly {@link pb.SetGroupDNDReq.verify|verify} messages.
         * @param message SetGroupDNDReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupDNDReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupDNDReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupDNDReq;

        /**
         * Decodes a SetGroupDNDReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupDNDReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupDNDReq;

        /**
         * Verifies a SetGroupDNDReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupDNDReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupDNDReq
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupDNDReq;

        /**
         * Creates a plain object from a SetGroupDNDReq message. Also converts values to other types if specified.
         * @param message SetGroupDNDReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupDNDReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupDNDReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupDNDReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupDNDResp. */
    interface ISetGroupDNDResp {

        /** SetGroupDNDResp code */
        code?: (number|null);

        /** SetGroupDNDResp msg */
        msg?: (string|null);
    }

    /** Represents a SetGroupDNDResp. */
    class SetGroupDNDResp implements ISetGroupDNDResp {

        /**
         * Constructs a new SetGroupDNDResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupDNDResp);

        /** SetGroupDNDResp code. */
        public code: number;

        /** SetGroupDNDResp msg. */
        public msg: string;

        /**
         * Creates a new SetGroupDNDResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupDNDResp instance
         */
        public static create(properties?: pb.ISetGroupDNDResp): pb.SetGroupDNDResp;

        /**
         * Encodes the specified SetGroupDNDResp message. Does not implicitly {@link pb.SetGroupDNDResp.verify|verify} messages.
         * @param message SetGroupDNDResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupDNDResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupDNDResp message, length delimited. Does not implicitly {@link pb.SetGroupDNDResp.verify|verify} messages.
         * @param message SetGroupDNDResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupDNDResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupDNDResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupDNDResp;

        /**
         * Decodes a SetGroupDNDResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupDNDResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupDNDResp;

        /**
         * Verifies a SetGroupDNDResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupDNDResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupDNDResp
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupDNDResp;

        /**
         * Creates a plain object from a SetGroupDNDResp message. Also converts values to other types if specified.
         * @param message SetGroupDNDResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupDNDResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupDNDResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupDNDResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupMuteReq. */
    interface ISetGroupMuteReq {

        /** SetGroupMuteReq groupId */
        groupId?: (string|null);

        /** SetGroupMuteReq operatorUid */
        operatorUid?: (string|null);

        /** SetGroupMuteReq targetUid */
        targetUid?: (string|null);

        /** SetGroupMuteReq mute */
        mute?: (boolean|null);
    }

    /** Represents a SetGroupMuteReq. */
    class SetGroupMuteReq implements ISetGroupMuteReq {

        /**
         * Constructs a new SetGroupMuteReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupMuteReq);

        /** SetGroupMuteReq groupId. */
        public groupId: string;

        /** SetGroupMuteReq operatorUid. */
        public operatorUid: string;

        /** SetGroupMuteReq targetUid. */
        public targetUid: string;

        /** SetGroupMuteReq mute. */
        public mute: boolean;

        /**
         * Creates a new SetGroupMuteReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupMuteReq instance
         */
        public static create(properties?: pb.ISetGroupMuteReq): pb.SetGroupMuteReq;

        /**
         * Encodes the specified SetGroupMuteReq message. Does not implicitly {@link pb.SetGroupMuteReq.verify|verify} messages.
         * @param message SetGroupMuteReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupMuteReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupMuteReq message, length delimited. Does not implicitly {@link pb.SetGroupMuteReq.verify|verify} messages.
         * @param message SetGroupMuteReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupMuteReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupMuteReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupMuteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupMuteReq;

        /**
         * Decodes a SetGroupMuteReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupMuteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupMuteReq;

        /**
         * Verifies a SetGroupMuteReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupMuteReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupMuteReq
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupMuteReq;

        /**
         * Creates a plain object from a SetGroupMuteReq message. Also converts values to other types if specified.
         * @param message SetGroupMuteReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupMuteReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupMuteReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupMuteReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupMuteResp. */
    interface ISetGroupMuteResp {

        /** SetGroupMuteResp code */
        code?: (number|null);

        /** SetGroupMuteResp msg */
        msg?: (string|null);
    }

    /** Represents a SetGroupMuteResp. */
    class SetGroupMuteResp implements ISetGroupMuteResp {

        /**
         * Constructs a new SetGroupMuteResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupMuteResp);

        /** SetGroupMuteResp code. */
        public code: number;

        /** SetGroupMuteResp msg. */
        public msg: string;

        /**
         * Creates a new SetGroupMuteResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupMuteResp instance
         */
        public static create(properties?: pb.ISetGroupMuteResp): pb.SetGroupMuteResp;

        /**
         * Encodes the specified SetGroupMuteResp message. Does not implicitly {@link pb.SetGroupMuteResp.verify|verify} messages.
         * @param message SetGroupMuteResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupMuteResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupMuteResp message, length delimited. Does not implicitly {@link pb.SetGroupMuteResp.verify|verify} messages.
         * @param message SetGroupMuteResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupMuteResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupMuteResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupMuteResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupMuteResp;

        /**
         * Decodes a SetGroupMuteResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupMuteResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupMuteResp;

        /**
         * Verifies a SetGroupMuteResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupMuteResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupMuteResp
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupMuteResp;

        /**
         * Creates a plain object from a SetGroupMuteResp message. Also converts values to other types if specified.
         * @param message SetGroupMuteResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupMuteResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupMuteResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupMuteResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupAdminReq. */
    interface ISetGroupAdminReq {

        /** SetGroupAdminReq groupId */
        groupId?: (string|null);

        /** SetGroupAdminReq operatorUid */
        operatorUid?: (string|null);

        /** SetGroupAdminReq targetUid */
        targetUid?: (string|null);

        /** SetGroupAdminReq setAdmin */
        setAdmin?: (boolean|null);
    }

    /** Represents a SetGroupAdminReq. */
    class SetGroupAdminReq implements ISetGroupAdminReq {

        /**
         * Constructs a new SetGroupAdminReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupAdminReq);

        /** SetGroupAdminReq groupId. */
        public groupId: string;

        /** SetGroupAdminReq operatorUid. */
        public operatorUid: string;

        /** SetGroupAdminReq targetUid. */
        public targetUid: string;

        /** SetGroupAdminReq setAdmin. */
        public setAdmin: boolean;

        /**
         * Creates a new SetGroupAdminReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAdminReq instance
         */
        public static create(properties?: pb.ISetGroupAdminReq): pb.SetGroupAdminReq;

        /**
         * Encodes the specified SetGroupAdminReq message. Does not implicitly {@link pb.SetGroupAdminReq.verify|verify} messages.
         * @param message SetGroupAdminReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupAdminReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAdminReq message, length delimited. Does not implicitly {@link pb.SetGroupAdminReq.verify|verify} messages.
         * @param message SetGroupAdminReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupAdminReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAdminReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAdminReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupAdminReq;

        /**
         * Decodes a SetGroupAdminReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAdminReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupAdminReq;

        /**
         * Verifies a SetGroupAdminReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAdminReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAdminReq
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupAdminReq;

        /**
         * Creates a plain object from a SetGroupAdminReq message. Also converts values to other types if specified.
         * @param message SetGroupAdminReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupAdminReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAdminReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupAdminReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetGroupAdminResp. */
    interface ISetGroupAdminResp {

        /** SetGroupAdminResp code */
        code?: (number|null);

        /** SetGroupAdminResp msg */
        msg?: (string|null);
    }

    /** Represents a SetGroupAdminResp. */
    class SetGroupAdminResp implements ISetGroupAdminResp {

        /**
         * Constructs a new SetGroupAdminResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISetGroupAdminResp);

        /** SetGroupAdminResp code. */
        public code: number;

        /** SetGroupAdminResp msg. */
        public msg: string;

        /**
         * Creates a new SetGroupAdminResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAdminResp instance
         */
        public static create(properties?: pb.ISetGroupAdminResp): pb.SetGroupAdminResp;

        /**
         * Encodes the specified SetGroupAdminResp message. Does not implicitly {@link pb.SetGroupAdminResp.verify|verify} messages.
         * @param message SetGroupAdminResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISetGroupAdminResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAdminResp message, length delimited. Does not implicitly {@link pb.SetGroupAdminResp.verify|verify} messages.
         * @param message SetGroupAdminResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISetGroupAdminResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAdminResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAdminResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SetGroupAdminResp;

        /**
         * Decodes a SetGroupAdminResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAdminResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SetGroupAdminResp;

        /**
         * Verifies a SetGroupAdminResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAdminResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAdminResp
         */
        public static fromObject(object: { [k: string]: any }): pb.SetGroupAdminResp;

        /**
         * Creates a plain object from a SetGroupAdminResp message. Also converts values to other types if specified.
         * @param message SetGroupAdminResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SetGroupAdminResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAdminResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetGroupAdminResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DismissGroupReq. */
    interface IDismissGroupReq {

        /** DismissGroupReq groupId */
        groupId?: (string|null);

        /** DismissGroupReq operatorUid */
        operatorUid?: (string|null);
    }

    /** Represents a DismissGroupReq. */
    class DismissGroupReq implements IDismissGroupReq {

        /**
         * Constructs a new DismissGroupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDismissGroupReq);

        /** DismissGroupReq groupId. */
        public groupId: string;

        /** DismissGroupReq operatorUid. */
        public operatorUid: string;

        /**
         * Creates a new DismissGroupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissGroupReq instance
         */
        public static create(properties?: pb.IDismissGroupReq): pb.DismissGroupReq;

        /**
         * Encodes the specified DismissGroupReq message. Does not implicitly {@link pb.DismissGroupReq.verify|verify} messages.
         * @param message DismissGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDismissGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissGroupReq message, length delimited. Does not implicitly {@link pb.DismissGroupReq.verify|verify} messages.
         * @param message DismissGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IDismissGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissGroupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DismissGroupReq;

        /**
         * Decodes a DismissGroupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.DismissGroupReq;

        /**
         * Verifies a DismissGroupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissGroupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissGroupReq
         */
        public static fromObject(object: { [k: string]: any }): pb.DismissGroupReq;

        /**
         * Creates a plain object from a DismissGroupReq message. Also converts values to other types if specified.
         * @param message DismissGroupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.DismissGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissGroupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DismissGroupReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DismissGroupResp. */
    interface IDismissGroupResp {

        /** DismissGroupResp code */
        code?: (number|null);

        /** DismissGroupResp msg */
        msg?: (string|null);
    }

    /** Represents a DismissGroupResp. */
    class DismissGroupResp implements IDismissGroupResp {

        /**
         * Constructs a new DismissGroupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDismissGroupResp);

        /** DismissGroupResp code. */
        public code: number;

        /** DismissGroupResp msg. */
        public msg: string;

        /**
         * Creates a new DismissGroupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissGroupResp instance
         */
        public static create(properties?: pb.IDismissGroupResp): pb.DismissGroupResp;

        /**
         * Encodes the specified DismissGroupResp message. Does not implicitly {@link pb.DismissGroupResp.verify|verify} messages.
         * @param message DismissGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDismissGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissGroupResp message, length delimited. Does not implicitly {@link pb.DismissGroupResp.verify|verify} messages.
         * @param message DismissGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IDismissGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissGroupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DismissGroupResp;

        /**
         * Decodes a DismissGroupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.DismissGroupResp;

        /**
         * Verifies a DismissGroupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissGroupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissGroupResp
         */
        public static fromObject(object: { [k: string]: any }): pb.DismissGroupResp;

        /**
         * Creates a plain object from a DismissGroupResp message. Also converts values to other types if specified.
         * @param message DismissGroupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.DismissGroupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissGroupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DismissGroupResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMemberRoleReq. */
    interface IGroupMemberRoleReq {

        /** GroupMemberRoleReq groupId */
        groupId?: (string|null);

        /** GroupMemberRoleReq uid */
        uid?: (string|null);
    }

    /** Represents a GroupMemberRoleReq. */
    class GroupMemberRoleReq implements IGroupMemberRoleReq {

        /**
         * Constructs a new GroupMemberRoleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMemberRoleReq);

        /** GroupMemberRoleReq groupId. */
        public groupId: string;

        /** GroupMemberRoleReq uid. */
        public uid: string;

        /**
         * Creates a new GroupMemberRoleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMemberRoleReq instance
         */
        public static create(properties?: pb.IGroupMemberRoleReq): pb.GroupMemberRoleReq;

        /**
         * Encodes the specified GroupMemberRoleReq message. Does not implicitly {@link pb.GroupMemberRoleReq.verify|verify} messages.
         * @param message GroupMemberRoleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMemberRoleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMemberRoleReq message, length delimited. Does not implicitly {@link pb.GroupMemberRoleReq.verify|verify} messages.
         * @param message GroupMemberRoleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMemberRoleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMemberRoleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMemberRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMemberRoleReq;

        /**
         * Decodes a GroupMemberRoleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMemberRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMemberRoleReq;

        /**
         * Verifies a GroupMemberRoleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMemberRoleReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMemberRoleReq
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMemberRoleReq;

        /**
         * Creates a plain object from a GroupMemberRoleReq message. Also converts values to other types if specified.
         * @param message GroupMemberRoleReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMemberRoleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMemberRoleReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMemberRoleReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMemberRoleResp. */
    interface IGroupMemberRoleResp {

        /** GroupMemberRoleResp code */
        code?: (number|null);

        /** GroupMemberRoleResp msg */
        msg?: (string|null);

        /** GroupMemberRoleResp role */
        role?: (string|null);
    }

    /** Represents a GroupMemberRoleResp. */
    class GroupMemberRoleResp implements IGroupMemberRoleResp {

        /**
         * Constructs a new GroupMemberRoleResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMemberRoleResp);

        /** GroupMemberRoleResp code. */
        public code: number;

        /** GroupMemberRoleResp msg. */
        public msg: string;

        /** GroupMemberRoleResp role. */
        public role: string;

        /**
         * Creates a new GroupMemberRoleResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMemberRoleResp instance
         */
        public static create(properties?: pb.IGroupMemberRoleResp): pb.GroupMemberRoleResp;

        /**
         * Encodes the specified GroupMemberRoleResp message. Does not implicitly {@link pb.GroupMemberRoleResp.verify|verify} messages.
         * @param message GroupMemberRoleResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMemberRoleResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMemberRoleResp message, length delimited. Does not implicitly {@link pb.GroupMemberRoleResp.verify|verify} messages.
         * @param message GroupMemberRoleResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMemberRoleResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMemberRoleResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMemberRoleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMemberRoleResp;

        /**
         * Decodes a GroupMemberRoleResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMemberRoleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMemberRoleResp;

        /**
         * Verifies a GroupMemberRoleResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMemberRoleResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMemberRoleResp
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMemberRoleResp;

        /**
         * Creates a plain object from a GroupMemberRoleResp message. Also converts values to other types if specified.
         * @param message GroupMemberRoleResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMemberRoleResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMemberRoleResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMemberRoleResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMemberInfoReq. */
    interface IGroupMemberInfoReq {

        /** GroupMemberInfoReq groupId */
        groupId?: (string|null);

        /** GroupMemberInfoReq uid */
        uid?: (string|null);
    }

    /** Represents a GroupMemberInfoReq. */
    class GroupMemberInfoReq implements IGroupMemberInfoReq {

        /**
         * Constructs a new GroupMemberInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMemberInfoReq);

        /** GroupMemberInfoReq groupId. */
        public groupId: string;

        /** GroupMemberInfoReq uid. */
        public uid: string;

        /**
         * Creates a new GroupMemberInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMemberInfoReq instance
         */
        public static create(properties?: pb.IGroupMemberInfoReq): pb.GroupMemberInfoReq;

        /**
         * Encodes the specified GroupMemberInfoReq message. Does not implicitly {@link pb.GroupMemberInfoReq.verify|verify} messages.
         * @param message GroupMemberInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMemberInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMemberInfoReq message, length delimited. Does not implicitly {@link pb.GroupMemberInfoReq.verify|verify} messages.
         * @param message GroupMemberInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMemberInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMemberInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMemberInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMemberInfoReq;

        /**
         * Decodes a GroupMemberInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMemberInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMemberInfoReq;

        /**
         * Verifies a GroupMemberInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMemberInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMemberInfoReq
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMemberInfoReq;

        /**
         * Creates a plain object from a GroupMemberInfoReq message. Also converts values to other types if specified.
         * @param message GroupMemberInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMemberInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMemberInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMemberInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMemberInfoResp. */
    interface IGroupMemberInfoResp {

        /** GroupMemberInfoResp code */
        code?: (number|null);

        /** GroupMemberInfoResp msg */
        msg?: (string|null);

        /** GroupMemberInfoResp uid */
        uid?: (string|null);

        /** GroupMemberInfoResp username */
        username?: (string|null);

        /** GroupMemberInfoResp nickname */
        nickname?: (string|null);

        /** GroupMemberInfoResp role */
        role?: (string|null);

        /** GroupMemberInfoResp joinTime */
        joinTime?: (number|Long|null);
    }

    /** Represents a GroupMemberInfoResp. */
    class GroupMemberInfoResp implements IGroupMemberInfoResp {

        /**
         * Constructs a new GroupMemberInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupMemberInfoResp);

        /** GroupMemberInfoResp code. */
        public code: number;

        /** GroupMemberInfoResp msg. */
        public msg: string;

        /** GroupMemberInfoResp uid. */
        public uid: string;

        /** GroupMemberInfoResp username. */
        public username: string;

        /** GroupMemberInfoResp nickname. */
        public nickname: string;

        /** GroupMemberInfoResp role. */
        public role: string;

        /** GroupMemberInfoResp joinTime. */
        public joinTime: (number|Long);

        /**
         * Creates a new GroupMemberInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMemberInfoResp instance
         */
        public static create(properties?: pb.IGroupMemberInfoResp): pb.GroupMemberInfoResp;

        /**
         * Encodes the specified GroupMemberInfoResp message. Does not implicitly {@link pb.GroupMemberInfoResp.verify|verify} messages.
         * @param message GroupMemberInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupMemberInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMemberInfoResp message, length delimited. Does not implicitly {@link pb.GroupMemberInfoResp.verify|verify} messages.
         * @param message GroupMemberInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupMemberInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMemberInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMemberInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupMemberInfoResp;

        /**
         * Decodes a GroupMemberInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMemberInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupMemberInfoResp;

        /**
         * Verifies a GroupMemberInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMemberInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMemberInfoResp
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupMemberInfoResp;

        /**
         * Creates a plain object from a GroupMemberInfoResp message. Also converts values to other types if specified.
         * @param message GroupMemberInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupMemberInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMemberInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMemberInfoResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupInviteItem. */
    interface IGroupInviteItem {

        /** GroupInviteItem id */
        id?: (string|null);

        /** GroupInviteItem groupId */
        groupId?: (string|null);

        /** GroupInviteItem groupName */
        groupName?: (string|null);

        /** GroupInviteItem inviterUid */
        inviterUid?: (string|null);

        /** GroupInviteItem inviteeUid */
        inviteeUid?: (string|null);

        /** GroupInviteItem status */
        status?: (string|null);

        /** GroupInviteItem createdAt */
        createdAt?: (string|null);

        /** GroupInviteItem inviterUsername */
        inviterUsername?: (string|null);

        /** GroupInviteItem inviteeUsername */
        inviteeUsername?: (string|null);
    }

    /** Represents a GroupInviteItem. */
    class GroupInviteItem implements IGroupInviteItem {

        /**
         * Constructs a new GroupInviteItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupInviteItem);

        /** GroupInviteItem id. */
        public id: string;

        /** GroupInviteItem groupId. */
        public groupId: string;

        /** GroupInviteItem groupName. */
        public groupName: string;

        /** GroupInviteItem inviterUid. */
        public inviterUid: string;

        /** GroupInviteItem inviteeUid. */
        public inviteeUid: string;

        /** GroupInviteItem status. */
        public status: string;

        /** GroupInviteItem createdAt. */
        public createdAt: string;

        /** GroupInviteItem inviterUsername. */
        public inviterUsername: string;

        /** GroupInviteItem inviteeUsername. */
        public inviteeUsername: string;

        /**
         * Creates a new GroupInviteItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupInviteItem instance
         */
        public static create(properties?: pb.IGroupInviteItem): pb.GroupInviteItem;

        /**
         * Encodes the specified GroupInviteItem message. Does not implicitly {@link pb.GroupInviteItem.verify|verify} messages.
         * @param message GroupInviteItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupInviteItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupInviteItem message, length delimited. Does not implicitly {@link pb.GroupInviteItem.verify|verify} messages.
         * @param message GroupInviteItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupInviteItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupInviteItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupInviteItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupInviteItem;

        /**
         * Decodes a GroupInviteItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupInviteItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupInviteItem;

        /**
         * Verifies a GroupInviteItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupInviteItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupInviteItem
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupInviteItem;

        /**
         * Creates a plain object from a GroupInviteItem message. Also converts values to other types if specified.
         * @param message GroupInviteItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupInviteItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupInviteItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupInviteItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupInviteListReq. */
    interface IGroupInviteListReq {

        /** GroupInviteListReq uid */
        uid?: (string|null);

        /** GroupInviteListReq token */
        token?: (string|null);
    }

    /** Represents a GroupInviteListReq. */
    class GroupInviteListReq implements IGroupInviteListReq {

        /**
         * Constructs a new GroupInviteListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupInviteListReq);

        /** GroupInviteListReq uid. */
        public uid: string;

        /** GroupInviteListReq token. */
        public token: string;

        /**
         * Creates a new GroupInviteListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupInviteListReq instance
         */
        public static create(properties?: pb.IGroupInviteListReq): pb.GroupInviteListReq;

        /**
         * Encodes the specified GroupInviteListReq message. Does not implicitly {@link pb.GroupInviteListReq.verify|verify} messages.
         * @param message GroupInviteListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupInviteListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupInviteListReq message, length delimited. Does not implicitly {@link pb.GroupInviteListReq.verify|verify} messages.
         * @param message GroupInviteListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupInviteListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupInviteListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupInviteListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupInviteListReq;

        /**
         * Decodes a GroupInviteListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupInviteListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupInviteListReq;

        /**
         * Verifies a GroupInviteListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupInviteListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupInviteListReq
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupInviteListReq;

        /**
         * Creates a plain object from a GroupInviteListReq message. Also converts values to other types if specified.
         * @param message GroupInviteListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupInviteListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupInviteListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupInviteListReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupInviteListResp. */
    interface IGroupInviteListResp {

        /** GroupInviteListResp code */
        code?: (number|null);

        /** GroupInviteListResp msg */
        msg?: (string|null);

        /** GroupInviteListResp items */
        items?: (pb.IGroupInviteItem[]|null);
    }

    /** Represents a GroupInviteListResp. */
    class GroupInviteListResp implements IGroupInviteListResp {

        /**
         * Constructs a new GroupInviteListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGroupInviteListResp);

        /** GroupInviteListResp code. */
        public code: number;

        /** GroupInviteListResp msg. */
        public msg: string;

        /** GroupInviteListResp items. */
        public items: pb.IGroupInviteItem[];

        /**
         * Creates a new GroupInviteListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupInviteListResp instance
         */
        public static create(properties?: pb.IGroupInviteListResp): pb.GroupInviteListResp;

        /**
         * Encodes the specified GroupInviteListResp message. Does not implicitly {@link pb.GroupInviteListResp.verify|verify} messages.
         * @param message GroupInviteListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGroupInviteListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupInviteListResp message, length delimited. Does not implicitly {@link pb.GroupInviteListResp.verify|verify} messages.
         * @param message GroupInviteListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGroupInviteListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupInviteListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupInviteListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GroupInviteListResp;

        /**
         * Decodes a GroupInviteListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupInviteListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GroupInviteListResp;

        /**
         * Verifies a GroupInviteListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupInviteListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupInviteListResp
         */
        public static fromObject(object: { [k: string]: any }): pb.GroupInviteListResp;

        /**
         * Creates a plain object from a GroupInviteListResp message. Also converts values to other types if specified.
         * @param message GroupInviteListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GroupInviteListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupInviteListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupInviteListResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HandleGroupInviteReq. */
    interface IHandleGroupInviteReq {

        /** HandleGroupInviteReq id */
        id?: (string|null);

        /** HandleGroupInviteReq token */
        token?: (string|null);

        /** HandleGroupInviteReq approve */
        approve?: (boolean|null);

        /** HandleGroupInviteReq groupId */
        groupId?: (string|null);

        /** HandleGroupInviteReq inviteeUid */
        inviteeUid?: (string|null);
    }

    /** Represents a HandleGroupInviteReq. */
    class HandleGroupInviteReq implements IHandleGroupInviteReq {

        /**
         * Constructs a new HandleGroupInviteReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IHandleGroupInviteReq);

        /** HandleGroupInviteReq id. */
        public id: string;

        /** HandleGroupInviteReq token. */
        public token: string;

        /** HandleGroupInviteReq approve. */
        public approve: boolean;

        /** HandleGroupInviteReq groupId. */
        public groupId: string;

        /** HandleGroupInviteReq inviteeUid. */
        public inviteeUid: string;

        /**
         * Creates a new HandleGroupInviteReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandleGroupInviteReq instance
         */
        public static create(properties?: pb.IHandleGroupInviteReq): pb.HandleGroupInviteReq;

        /**
         * Encodes the specified HandleGroupInviteReq message. Does not implicitly {@link pb.HandleGroupInviteReq.verify|verify} messages.
         * @param message HandleGroupInviteReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IHandleGroupInviteReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HandleGroupInviteReq message, length delimited. Does not implicitly {@link pb.HandleGroupInviteReq.verify|verify} messages.
         * @param message HandleGroupInviteReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IHandleGroupInviteReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HandleGroupInviteReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandleGroupInviteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.HandleGroupInviteReq;

        /**
         * Decodes a HandleGroupInviteReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandleGroupInviteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.HandleGroupInviteReq;

        /**
         * Verifies a HandleGroupInviteReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HandleGroupInviteReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HandleGroupInviteReq
         */
        public static fromObject(object: { [k: string]: any }): pb.HandleGroupInviteReq;

        /**
         * Creates a plain object from a HandleGroupInviteReq message. Also converts values to other types if specified.
         * @param message HandleGroupInviteReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.HandleGroupInviteReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HandleGroupInviteReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HandleGroupInviteReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
