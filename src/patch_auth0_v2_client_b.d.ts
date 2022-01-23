import { B } from '@ctx-core/object'
export declare const patch_auth0_v2_client_b:B<patch_auth0_v2_client_T>
export interface patch_auth0_v2_client_params_T {
	client_id?:string;
	body?:string;
	json?:unknown;
}
export declare type patch_auth0_v2_client_T = (params:patch_auth0_v2_client_params_T)=>Promise<Response>;
