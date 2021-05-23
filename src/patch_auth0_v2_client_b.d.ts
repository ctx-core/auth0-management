import type { auth0_management_Ctx } from './auth0_management_Ctx';
export declare const patch_auth0_v2_client_b: import("@ctx-core/object").Be<auth0_management_Ctx, "patch_auth0_v2_client", patch_auth0_v2_client_T>;
export interface patch_auth0_v2_client_params_T {
    client_id?: string;
    body?: string;
    json?: unknown;
}
export declare type patch_auth0_v2_client_T = (params: patch_auth0_v2_client_params_T) => Promise<Response>;
