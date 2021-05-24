import { B } from '@ctx-core/object';
import type { auth0_management_Ctx } from './auth0_management_Ctx';
declare const key = "get_auth0_v2_client_grants";
export declare const get_auth0_v2_client_grants_b: B<auth0_management_Ctx, typeof key>;
export interface get_auth0_v2_client_grants_params_I {
    query?: string;
    json?: any;
}
export declare type get_auth0_v2_client_grants_T = (params: get_auth0_v2_client_grants_params_I) => Promise<Response>;
export {};
