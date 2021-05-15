import { B } from '@ctx-core/object';
import { _auth0_management_token_ctx_I } from './_auth0_management_token_b';
export declare const get_auth0_v2_users_by_email_b: get_auth0_v2_users_by_email_b_T;
export interface get_auth0_v2_users_by_email_ctx_I extends _auth0_management_token_ctx_I {
    get_auth0_v2_users_by_email?: get_auth0_v2_users_by_email_T;
}
export declare type get_auth0_v2_users_by_email_params_I = {
    email: string;
    AUTH0_DOMAIN?: string;
};
export declare type get_auth0_v2_users_by_email_T = (params: get_auth0_v2_users_by_email_params_I) => Promise<Response>;
export interface get_auth0_v2_users_by_email_b_T extends B<get_auth0_v2_users_by_email_T> {
}
