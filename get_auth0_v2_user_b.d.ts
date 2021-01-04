import { B } from '@ctx-core/object';
export declare const get_auth0_v2_user_b: get_auth0_v2_user_b_type;
export interface get_auth0_v2_user_params_type {
    AUTH0_DOMAIN: string;
    user_id: string;
}
export declare type get_auth0_v2_user_type = (params: get_auth0_v2_user_params_type) => Promise<Response>;
export interface get_auth0_v2_user_b_type extends B<get_auth0_v2_user_type> {
}
