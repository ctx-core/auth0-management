import type { Auth0UserProfile } from 'auth0-js'
import { B } from '@ctx-core/object'
export declare const get_auth0_v2_users_by_email_b:B<get_auth0_v2_users_by_email_T>
export declare type get_auth0_v2_users_by_email_params_I = {
	email:string;
	AUTH0_DOMAIN?:string;
};
export declare type get_auth0_v2_users_by_email_T = (params:get_auth0_v2_users_by_email_params_I)=>Promise<Response>;
export declare type get_auth0_v2_users_by_email_response_T = Auth0UserProfile[];
