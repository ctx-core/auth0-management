import { AUTH0_DOMAIN_Ctx } from '@ctx-core/auth0';
import { _auth0_management_token_Ctx } from './_auth0_management_token_b';
export interface patch_auth0_v2_client_Ctx extends _auth0_management_token_Ctx, AUTH0_DOMAIN_Ctx {
    patch_auth0_v2_client?: patch_auth0_v2_client_T;
}
export declare const patch_auth0_v2_client_b: import("@ctx-core/object").Be<patch_auth0_v2_client_Ctx, "patch_auth0_v2_client", patch_auth0_v2_client_T>;
export interface patch_auth0_v2_client_params_T {
    client_id?: string;
    body?: string;
    json?: unknown;
}
export declare type patch_auth0_v2_client_T = (params: patch_auth0_v2_client_params_T) => Promise<Response>;
