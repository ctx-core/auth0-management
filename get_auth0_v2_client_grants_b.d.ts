import { B } from '@ctx-core/object';
export declare const get_auth0_v2_client_grants_b: get_auth0_v2_client_grants_b_type;
export interface get_auth0_v2_client_grants_params_type {
    query?: string;
    json?: any;
}
export declare type get_auth0_v2_client_grants_type = (params: get_auth0_v2_client_grants_params_type) => Promise<Response>;
export interface get_auth0_v2_client_grants_b_type extends B<get_auth0_v2_client_grants_type> {
}
