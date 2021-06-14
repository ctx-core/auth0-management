import { B } from '@ctx-core/object';
import type { auth0_management_Ctx } from './auth0_management_Ctx';
declare const key = "get_auth0_v2_users_by_email";
export declare const get_auth0_v2_users_by_email_b: B<auth0_management_Ctx, typeof key>;
export declare type get_auth0_v2_users_by_email_params_I = {
    email: string;
    AUTH0_DOMAIN?: string;
};
export declare type get_auth0_v2_users_by_email_T = (params: get_auth0_v2_users_by_email_params_I) => Promise<Response>;
export {};
