import { B } from '@ctx-core/object';
export declare const get_auth0_v2_users_by_email_b: get_auth0_v2_users_by_email_b_type;
export declare type get_auth0_v2_users_by_email_params_type = {
    email: string;
    AUTH0_DOMAIN?: string;
};
export declare type get_auth0_v2_users_by_email_type = (params: get_auth0_v2_users_by_email_params_type) => Promise<Response>;
export interface get_auth0_v2_users_by_email_b_type extends B<get_auth0_v2_users_by_email_type> {
}
