import type { auth0_management_Ctx } from './auth0_management_Ctx';
export declare const get_auth0_v2_client_grants_b: import("@ctx-core/object").Be<auth0_management_Ctx, "get_auth0_v2_client_grants", get_auth0_v2_client_grants_T>;
export interface get_auth0_v2_client_grants_params_I {
    query?: string;
    json?: any;
}
export declare type get_auth0_v2_client_grants_T = (params: get_auth0_v2_client_grants_params_I) => Promise<Response>;
