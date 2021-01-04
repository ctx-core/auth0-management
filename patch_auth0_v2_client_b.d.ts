import { B } from '@ctx-core/object';
export declare const patch_auth0_v2_client_b: patch_auth0_v2_client_b_type;
export interface patch_auth0_v2_client_params_type {
    client_id?: string;
    body?: string;
    json?: unknown;
}
export declare type patch_auth0_v2_client_type = (params: patch_auth0_v2_client_params_type) => Promise<Response>;
export interface patch_auth0_v2_client_b_type extends B<patch_auth0_v2_client_type> {
}
