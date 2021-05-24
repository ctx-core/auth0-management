import { B } from '@ctx-core/object';
import type { auth0_management_Ctx } from './auth0_management_Ctx';
declare const key = "get_auth0_v2_user";
export declare const get_auth0_v2_user_b: B<auth0_management_Ctx, typeof key>;
export interface get_auth0_v2_user_params_T {
    AUTH0_DOMAIN: string;
    user_id: string;
}
export declare type get_auth0_v2_user_T = (params: get_auth0_v2_user_params_T) => Promise<Response>;
export {};
