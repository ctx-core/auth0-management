import { AUTH0_DOMAIN_Ctx } from '@ctx-core/auth0';
import { _auth0_management_token_Ctx } from './_auth0_management_token_b';
export interface get_auth0_v2_client_grants_Ctx extends _auth0_management_token_Ctx, AUTH0_DOMAIN_Ctx {
    get_auth0_v2_client_grants?: get_auth0_v2_client_grants_T;
}
export declare const get_auth0_v2_client_grants_b: import("@ctx-core/object").Be<get_auth0_v2_client_grants_Ctx, "get_auth0_v2_client_grants", get_auth0_v2_client_grants_T>;
export interface get_auth0_v2_client_grants_params_I {
    query?: string;
    json?: any;
}
export declare type get_auth0_v2_client_grants_T = (params: get_auth0_v2_client_grants_params_I) => Promise<Response>;
