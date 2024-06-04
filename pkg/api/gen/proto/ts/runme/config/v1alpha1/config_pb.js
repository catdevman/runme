/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/config/v1alpha1/config.proto" (package "runme.config.v1alpha1", syntax proto3)
// tslint:disable
// @ts-nocheck
/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/config/v1alpha1/config.proto" (package "runme.config.v1alpha1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf enum runme.config.v1alpha1.Config.FilterType
 */
export var Config_FilterType;
(function (Config_FilterType) {
    /**
     * @generated from protobuf enum value: FILTER_TYPE_UNSPECIFIED = 0;
     */
    Config_FilterType[Config_FilterType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: FILTER_TYPE_BLOCK = 1;
     */
    Config_FilterType[Config_FilterType["BLOCK"] = 1] = "BLOCK";
    /**
     * @generated from protobuf enum value: FILTER_TYPE_DOCUMENT = 2;
     */
    Config_FilterType[Config_FilterType["DOCUMENT"] = 2] = "DOCUMENT";
})(Config_FilterType || (Config_FilterType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Config$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config", [
            { no: 1, name: "project", kind: "message", T: () => Config_Project },
            { no: 2, name: "runtime", kind: "message", T: () => Config_Runtime },
            { no: 3, name: "server", kind: "message", T: () => Config_Server },
            { no: 4, name: "log", kind: "message", T: () => Config_Log }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config
 */
export const Config = new Config$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Project$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Project", [
            { no: 1, name: "root", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "filename", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "find_repo_upward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "ignore_paths", kind: "scalar", jsonName: "ignore", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "disable_gitignore", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "env", kind: "message", T: () => Config_Env },
            { no: 7, name: "filters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Config_Filter }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Project
 */
export const Config_Project = new Config_Project$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Filter$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Filter", [
            { no: 1, name: "type", kind: "enum", T: () => ["runme.config.v1alpha1.Config.FilterType", Config_FilterType, "FILTER_TYPE_"], options: { "buf.validate.field": { enum: { definedOnly: true } } } },
            { no: 2, name: "condition", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "buf.validate.field": { string: { minLen: "1", maxLen: "1024" } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Filter
 */
export const Config_Filter = new Config_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Env$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Env", [
            { no: 1, name: "use_system_env", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "sources", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Env
 */
export const Config_Env = new Config_Env$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Runtime$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Runtime", [
            { no: 1, name: "docker", kind: "message", T: () => Config_Docker }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Runtime
 */
export const Config_Runtime = new Config_Runtime$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Docker$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Docker", [
            { no: 1, name: "enabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "image", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "build", kind: "message", T: () => Config_Docker_Build }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Docker
 */
export const Config_Docker = new Config_Docker$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Docker_Build$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Docker.Build", [
            { no: 1, name: "context", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "dockerfile", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Docker.Build
 */
export const Config_Docker_Build = new Config_Docker_Build$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Server$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Server", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "tls", kind: "message", T: () => Config_Server_TLS }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Server
 */
export const Config_Server = new Config_Server$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Server_TLS$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Server.TLS", [
            { no: 1, name: "enabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "cert_file", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "key_file", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Server.TLS
 */
export const Config_Server_TLS = new Config_Server_TLS$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Config_Log$Type extends MessageType {
    constructor() {
        super("runme.config.v1alpha1.Config.Log", [
            { no: 1, name: "enabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "verbose", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Log
 */
export const Config_Log = new Config_Log$Type();