import { B } from '@ctx-core/object';
import { _auth0_management_token_ctx_I } from './_auth0_management_token_b';
export declare const get_auth0_v2_user_b: get_auth0_v2_user_b_T;
export interface get_auth0_v2_user_ctx_I extends _auth0_management_token_ctx_I {
    get_auth0_v2_user?: get_auth0_v2_user_T;
}
export interface get_auth0_v2_user_params_T {
    AUTH0_DOMAIN: string;
    user_id: string;
}
export declare type get_auth0_v2_user_T = (params: get_auth0_v2_user_params_T) => Promise<Response>;
export interface get_auth0_v2_user_b_T extends B<get_auth0_v2_user_T> {
}
