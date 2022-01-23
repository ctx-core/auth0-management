/// <reference lib="dom" />
import { B } from '@ctx-core/object'
import type { CreateClientGrant } from 'auth0'
export declare const get_auth0_v2_client_grants_b:B<get_auth0_v2_client_grants_T>
export interface get_auth0_v2_client_grants_params_I {
	query?:string;
	json?:any;
}
export declare type get_auth0_v2_client_grants_T =
	(params:get_auth0_v2_client_grants_params_I)=>Promise<[CreateClientGrant, Response]>;
