import { B } from '@ctx-core/object';
import { AUTH0_DOMAIN_ctx_I } from '@ctx-core/auth0';
import { _auth0_management_token_ctx_I } from './_auth0_management_token_b';
export declare const patch_auth0_v2_client_b: patch_auth0_v2_client_b_T;
export interface patch_auth0_v2_client_ctx_I extends _auth0_management_token_ctx_I, AUTH0_DOMAIN_ctx_I {
    patch_auth0_v2_client?: patch_auth0_v2_client_T;
}
export interface patch_auth0_v2_client_params_T {
    client_id?: string;
    body?: string;
    json?: unknown;
}
export declare type patch_auth0_v2_client_T = (params: patch_auth0_v2_client_params_T) => Promise<Response>;
export interface patch_auth0_v2_client_b_T extends B<patch_auth0_v2_client_T> {
}
