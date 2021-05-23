import type { auth0_management_Ctx } from './auth0_management_Ctx';
export declare const get_auth0_v2_users_by_email_b: import("@ctx-core/object").Be<auth0_management_Ctx, "get_auth0_v2_users_by_email", get_auth0_v2_users_by_email_T>;
export declare type get_auth0_v2_users_by_email_params_I = {
    email: string;
    AUTH0_DOMAIN?: string;
};
export declare type get_auth0_v2_users_by_email_T = (params: get_auth0_v2_users_by_email_params_I) => Promise<Response>;
