import { _auth0_management_token_Ctx } from './_auth0_management_token_b';
export interface get_auth0_v2_users_by_email_Ctx extends _auth0_management_token_Ctx {
    get_auth0_v2_users_by_email?: get_auth0_v2_users_by_email_T;
}
export declare const get_auth0_v2_users_by_email_b: import("@ctx-core/object").Be<get_auth0_v2_users_by_email_Ctx, "get_auth0_v2_users_by_email">;
export declare type get_auth0_v2_users_by_email_params_I = {
    email: string;
    AUTH0_DOMAIN?: string;
};
export declare type get_auth0_v2_users_by_email_T = (params: get_auth0_v2_users_by_email_params_I) => Promise<Response>;
