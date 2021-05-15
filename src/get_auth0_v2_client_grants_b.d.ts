import { B } from '@ctx-core/object';
import { AUTH0_DOMAIN_ctx_I } from '@ctx-core/auth0';
import { _auth0_management_token_ctx_I } from './_auth0_management_token_b';
export declare const get_auth0_v2_client_grants_b: get_auth0_v2_client_grants_b_T;
export interface get_auth0_v2_client_grants_ctx_I extends _auth0_management_token_ctx_I, AUTH0_DOMAIN_ctx_I {
    get_auth0_v2_client_grants?: get_auth0_v2_client_grants_T;
}
export interface get_auth0_v2_client_grants_params_I {
    query?: string;
    json?: any;
}
export declare type get_auth0_v2_client_grants_T = (params: get_auth0_v2_client_grants_params_I) => Promise<Response>;
export interface get_auth0_v2_client_grants_b_T extends B<get_auth0_v2_client_grants_T> {
}
