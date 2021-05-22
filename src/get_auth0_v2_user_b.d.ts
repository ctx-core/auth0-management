import { _auth0_management_token_Ctx } from './_auth0_management_token_b';
export interface get_auth0_v2_user_Ctx extends _auth0_management_token_Ctx {
    get_auth0_v2_user?: get_auth0_v2_user_T;
}
export declare const get_auth0_v2_user_b: import("@ctx-core/object").Be<get_auth0_v2_user_Ctx, "get_auth0_v2_user", get_auth0_v2_user_T>;
export interface get_auth0_v2_user_params_T {
    AUTH0_DOMAIN: string;
    user_id: string;
}
export declare type get_auth0_v2_user_T = (params: get_auth0_v2_user_params_T) => Promise<Response>;
