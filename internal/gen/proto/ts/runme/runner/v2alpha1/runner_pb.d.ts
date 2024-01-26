/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/runner/v2alpha1/runner.proto" (package "runme.runner.v2alpha1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { MessageType } from "@protobuf-ts/runtime";
import { UInt32Value } from "../../../google/protobuf/wrappers_pb";
import { ProgramConfig } from "./config_pb";
/**
 * @generated from protobuf message runme.runner.v2alpha1.Project
 */
export interface Project {
    /**
     * root is a root directory of the project.
     * The semantic is the same as for the "--project"
     * flag in "runme".
     *
     * @generated from protobuf field: string root = 1;
     */
    root: string;
    /**
     * env_load_order is list of environment files
     * to try and load env from.
     *
     * @generated from protobuf field: repeated string env_load_order = 2;
     */
    envLoadOrder: string[];
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.Session
 */
export interface Session {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * env keeps track of session environment variables.
     * They can be modified by executing programs which
     * alter them through "export" and "unset" commands.
     *
     * @generated from protobuf field: repeated string env = 2;
     */
    env: string[];
    /**
     * metadata is a map of client specific metadata.
     *
     * @generated from protobuf field: map<string, string> metadata = 3;
     */
    metadata: {
        [key: string]: string;
    };
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.CreateSessionRequest
 */
export interface CreateSessionRequest {
    /**
     * metadata is a map of client specific metadata.
     *
     * @generated from protobuf field: map<string, string> metadata = 1;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * env field provides an initial set of environment variables
     * for a newly created session.
     *
     * @generated from protobuf field: repeated string env = 2;
     */
    env: string[];
    /**
     * project from which to load environment variables.
     * They will be appended to the list from the env field.
     * The env field has a higher priority.
     *
     * @generated from protobuf field: optional runme.runner.v2alpha1.Project project = 3;
     */
    project?: Project;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.CreateSessionResponse
 */
export interface CreateSessionResponse {
    /**
     * @generated from protobuf field: runme.runner.v2alpha1.Session session = 1;
     */
    session?: Session;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.GetSessionRequest
 */
export interface GetSessionRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.GetSessionResponse
 */
export interface GetSessionResponse {
    /**
     * @generated from protobuf field: runme.runner.v2alpha1.Session session = 1;
     */
    session?: Session;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ListSessionsRequest
 */
export interface ListSessionsRequest {
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ListSessionsResponse
 */
export interface ListSessionsResponse {
    /**
     * @generated from protobuf field: repeated runme.runner.v2alpha1.Session sessions = 1;
     */
    sessions: Session[];
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.UpdateSessionRequest
 */
export interface UpdateSessionRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * metadata is a map of client specific metadata.
     *
     * @generated from protobuf field: map<string, string> metadata = 2;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * env field provides an initial set of environment variables
     * for a newly created session.
     *
     * @generated from protobuf field: repeated string env = 3;
     */
    env: string[];
    /**
     * project from which to load environment variables.
     * They will be appended to the list from the env field.
     * The env field has a higher priority.
     *
     * @generated from protobuf field: optional runme.runner.v2alpha1.Project project = 4;
     */
    project?: Project;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.UpdateSessionResponse
 */
export interface UpdateSessionResponse {
    /**
     * @generated from protobuf field: runme.runner.v2alpha1.Session session = 1;
     */
    session?: Session;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.DeleteSessionRequest
 */
export interface DeleteSessionRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.DeleteSessionResponse
 */
export interface DeleteSessionResponse {
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.Winsize
 */
export interface Winsize {
    /**
     * @generated from protobuf field: uint32 rows = 1;
     */
    rows: number;
    /**
     * @generated from protobuf field: uint32 cols = 2;
     */
    cols: number;
    /**
     * @generated from protobuf field: uint32 x = 3;
     */
    x: number;
    /**
     * @generated from protobuf field: uint32 y = 4;
     */
    y: number;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ExecuteRequest
 */
export interface ExecuteRequest {
    /**
     * @generated from protobuf field: runme.runner.v2alpha1.ProgramConfig config = 1;
     */
    config?: ProgramConfig;
    /**
     * input_data is a byte array that will be send as input
     * to the program.
     *
     * @generated from protobuf field: bytes input_data = 8;
     */
    inputData: Uint8Array;
    /**
     * stop requests the running process to be stopped.
     * It is allowed only in the consecutive calls.
     *
     * @generated from protobuf field: runme.runner.v2alpha1.ExecuteStop stop = 9;
     */
    stop: ExecuteStop;
    /**
     * sets pty winsize
     * has no effect in non-interactive mode
     *
     * @generated from protobuf field: optional runme.runner.v2alpha1.Winsize winsize = 10;
     */
    winsize?: Winsize;
    /**
     * session_id indicates in which Session the program should execute.
     * Executing in a Session might provide additional context like
     * environment variables.
     *
     * @generated from protobuf field: string session_id = 20;
     */
    sessionId: string;
    /**
     * session_strategy is a strategy for selecting the session.
     *
     * @generated from protobuf field: runme.runner.v2alpha1.SessionStrategy session_strategy = 21;
     */
    sessionStrategy: SessionStrategy;
    /**
     * project used to load environment variables from .env files.
     *
     * @generated from protobuf field: optional runme.runner.v2alpha1.Project project = 22;
     */
    project?: Project;
    /**
     * store_last_stdout, if true, will store the stdout of
     * the last ran block in the environment variable `__`.
     *
     * @generated from protobuf field: bool store_last_stdout = 23;
     */
    storeLastStdout: boolean;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ExecuteResponse
 */
export interface ExecuteResponse {
    /**
     * exit_code is sent only in the final message.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value exit_code = 1;
     */
    exitCode?: UInt32Value;
    /**
     * stdout_data contains bytes from stdout since the last response.
     *
     * @generated from protobuf field: bytes stdout_data = 2;
     */
    stdoutData: Uint8Array;
    /**
     * stderr_data contains bytes from stderr since the last response.
     *
     * @generated from protobuf field: bytes stderr_data = 3;
     */
    stderrData: Uint8Array;
    /**
     * pid contains the process' PID.
     * This is only sent once in an initial response
     * for background processes.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value pid = 4;
     */
    pid?: UInt32Value;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ResolveEnvRequest
 */
export interface ResolveEnvRequest {
    /**
     * @generated from protobuf oneof: source
     */
    source: {
        oneofKind: "commands";
        /**
         * commands are commands to be executed by the program.
         * The commands are joined and executed as a script.
         *
         * @generated from protobuf field: runme.runner.v2alpha1.ResolveEnvRequest.CommandList commands = 1;
         */
        commands: ResolveEnvRequest_CommandList;
    } | {
        oneofKind: "script";
        /**
         * script is code to be executed by the program.
         * Individual lines are joined with the new line character.
         *
         * @generated from protobuf field: string script = 2;
         */
        script: string;
    } | {
        oneofKind: undefined;
    };
    /**
     * env is a list of additional environment variables
     * that will be injected to the executed program.
     *
     * @generated from protobuf field: repeated string env = 3;
     */
    env: string[];
    /**
     * session_id indicates in which Session the program should execute.
     * Executing in a Session might provide additional context like
     * environment variables.
     *
     * @generated from protobuf field: string session_id = 4;
     */
    sessionId: string;
    /**
     * session_strategy is a strategy for selecting the session.
     *
     * @generated from protobuf field: runme.runner.v2alpha1.SessionStrategy session_strategy = 5;
     */
    sessionStrategy: SessionStrategy;
    /**
     * project used to load environment variables from .env files.
     *
     * @generated from protobuf field: optional runme.runner.v2alpha1.Project project = 6;
     */
    project?: Project;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ResolveEnvRequest.CommandList
 */
export interface ResolveEnvRequest_CommandList {
    /**
     * commands are commands to be executed by the program.
     * The commands are joined and executed as a script.
     * For example: ["echo 'Hello, World'", "ls -l /etc"].
     *
     * @generated from protobuf field: repeated string items = 1;
     */
    items: string[];
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ResolveEnvResult
 */
export interface ResolveEnvResult {
    /**
     * @generated from protobuf oneof: result
     */
    result: {
        oneofKind: "resolvedEnv";
        /**
         * @generated from protobuf field: runme.runner.v2alpha1.ResolveEnvResult.ResolvedEnv resolved_env = 1;
         */
        resolvedEnv: ResolveEnvResult_ResolvedEnv;
    } | {
        oneofKind: "unresolvedEnv";
        /**
         * @generated from protobuf field: runme.runner.v2alpha1.ResolveEnvResult.UnresolvedEnv unresolved_env = 2;
         */
        unresolvedEnv: ResolveEnvResult_UnresolvedEnv;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ResolveEnvResult.ResolvedEnv
 */
export interface ResolveEnvResult_ResolvedEnv {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string original_value = 2;
     */
    originalValue: string;
    /**
     * @generated from protobuf field: string resolved_value = 3;
     */
    resolvedValue: string;
    /**
     * @generated from protobuf field: runme.runner.v2alpha1.ResolveEnvResult.ResolvedEnvSource source = 4;
     */
    source: ResolveEnvResult_ResolvedEnvSource;
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ResolveEnvResult.UnresolvedEnv
 */
export interface ResolveEnvResult_UnresolvedEnv {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string original_value = 2;
     */
    originalValue: string;
}
/**
 * @generated from protobuf enum runme.runner.v2alpha1.ResolveEnvResult.ResolvedEnvSource
 */
export declare enum ResolveEnvResult_ResolvedEnvSource {
    /**
     * @generated from protobuf enum value: RESOLVED_ENV_SOURCE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: RESOLVED_ENV_SOURCE_ENV = 1;
     */
    ENV = 1,
    /**
     * @generated from protobuf enum value: RESOLVED_ENV_SOURCE_SESSION = 2;
     */
    SESSION = 2,
    /**
     * @generated from protobuf enum value: RESOLVED_ENV_SOURCE_PROJECT = 3;
     */
    PROJECT = 3
}
/**
 * @generated from protobuf message runme.runner.v2alpha1.ResolveEnvResponse
 */
export interface ResolveEnvResponse {
    /**
     * @generated from protobuf field: repeated runme.runner.v2alpha1.ResolveEnvResult items = 1;
     */
    items: ResolveEnvResult[];
}
/**
 * @generated from protobuf enum runme.runner.v2alpha1.ExecuteStop
 */
export declare enum ExecuteStop {
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_INTERRUPT = 1;
     */
    INTERRUPT = 1,
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_KILL = 2;
     */
    KILL = 2
}
/**
 * SessionStrategy determines a session selection in
 * an initial execute request.
 *
 * @generated from protobuf enum runme.runner.v2alpha1.SessionStrategy
 */
export declare enum SessionStrategy {
    /**
     * Uses the session_id field to determine the session.
     * If none is present, a new session is created.
     *
     * @generated from protobuf enum value: SESSION_STRATEGY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Uses the most recent session on the server.
     * If there is none, a new one is created.
     *
     * @generated from protobuf enum value: SESSION_STRATEGY_MOST_RECENT = 1;
     */
    MOST_RECENT = 1
}
declare class Project$Type extends MessageType<Project> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.Project
 */
export declare const Project: Project$Type;
declare class Session$Type extends MessageType<Session> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.Session
 */
export declare const Session: Session$Type;
declare class CreateSessionRequest$Type extends MessageType<CreateSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.CreateSessionRequest
 */
export declare const CreateSessionRequest: CreateSessionRequest$Type;
declare class CreateSessionResponse$Type extends MessageType<CreateSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.CreateSessionResponse
 */
export declare const CreateSessionResponse: CreateSessionResponse$Type;
declare class GetSessionRequest$Type extends MessageType<GetSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.GetSessionRequest
 */
export declare const GetSessionRequest: GetSessionRequest$Type;
declare class GetSessionResponse$Type extends MessageType<GetSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.GetSessionResponse
 */
export declare const GetSessionResponse: GetSessionResponse$Type;
declare class ListSessionsRequest$Type extends MessageType<ListSessionsRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ListSessionsRequest
 */
export declare const ListSessionsRequest: ListSessionsRequest$Type;
declare class ListSessionsResponse$Type extends MessageType<ListSessionsResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ListSessionsResponse
 */
export declare const ListSessionsResponse: ListSessionsResponse$Type;
declare class UpdateSessionRequest$Type extends MessageType<UpdateSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.UpdateSessionRequest
 */
export declare const UpdateSessionRequest: UpdateSessionRequest$Type;
declare class UpdateSessionResponse$Type extends MessageType<UpdateSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.UpdateSessionResponse
 */
export declare const UpdateSessionResponse: UpdateSessionResponse$Type;
declare class DeleteSessionRequest$Type extends MessageType<DeleteSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.DeleteSessionRequest
 */
export declare const DeleteSessionRequest: DeleteSessionRequest$Type;
declare class DeleteSessionResponse$Type extends MessageType<DeleteSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.DeleteSessionResponse
 */
export declare const DeleteSessionResponse: DeleteSessionResponse$Type;
declare class Winsize$Type extends MessageType<Winsize> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.Winsize
 */
export declare const Winsize: Winsize$Type;
declare class ExecuteRequest$Type extends MessageType<ExecuteRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ExecuteRequest
 */
export declare const ExecuteRequest: ExecuteRequest$Type;
declare class ExecuteResponse$Type extends MessageType<ExecuteResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ExecuteResponse
 */
export declare const ExecuteResponse: ExecuteResponse$Type;
declare class ResolveEnvRequest$Type extends MessageType<ResolveEnvRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ResolveEnvRequest
 */
export declare const ResolveEnvRequest: ResolveEnvRequest$Type;
declare class ResolveEnvRequest_CommandList$Type extends MessageType<ResolveEnvRequest_CommandList> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ResolveEnvRequest.CommandList
 */
export declare const ResolveEnvRequest_CommandList: ResolveEnvRequest_CommandList$Type;
declare class ResolveEnvResult$Type extends MessageType<ResolveEnvResult> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ResolveEnvResult
 */
export declare const ResolveEnvResult: ResolveEnvResult$Type;
declare class ResolveEnvResult_ResolvedEnv$Type extends MessageType<ResolveEnvResult_ResolvedEnv> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ResolveEnvResult.ResolvedEnv
 */
export declare const ResolveEnvResult_ResolvedEnv: ResolveEnvResult_ResolvedEnv$Type;
declare class ResolveEnvResult_UnresolvedEnv$Type extends MessageType<ResolveEnvResult_UnresolvedEnv> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ResolveEnvResult.UnresolvedEnv
 */
export declare const ResolveEnvResult_UnresolvedEnv: ResolveEnvResult_UnresolvedEnv$Type;
declare class ResolveEnvResponse$Type extends MessageType<ResolveEnvResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v2alpha1.ResolveEnvResponse
 */
export declare const ResolveEnvResponse: ResolveEnvResponse$Type;
/**
 * @generated ServiceType for protobuf service runme.runner.v2alpha1.RunnerService
 */
export declare const RunnerService: any;
export {};