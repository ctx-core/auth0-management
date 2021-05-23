import type { auth0_management_Ctx } from './auth0_management_Ctx';
export declare const get_auth0_v2_user_b: import("@ctx-core/object").Be<auth0_management_Ctx, "get_auth0_v2_user", get_auth0_v2_user_T>;
export interface get_auth0_v2_user_params_T {
    AUTH0_DOMAIN: string;
    user_id: string;
}
export declare type get_auth0_v2_user_T = (params: get_auth0_v2_user_params_T) => Promise<Response>;
