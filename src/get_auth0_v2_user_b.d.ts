import { B } from '@ctx-core/object'
export declare const get_auth0_v2_user_b:B<get_auth0_v2_user_T>
export interface get_auth0_v2_user_params_T {
	AUTH0_DOMAIN:string;
	user_id:string;
}
export declare type get_auth0_v2_user_T = (params:get_auth0_v2_user_params_T)=>Promise<Response>;
