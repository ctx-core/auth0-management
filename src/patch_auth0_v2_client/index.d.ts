/// <reference lib="dom" />
import type { Ctx } from '@ctx-core/object'
import type { Client } from 'auth0'
export declare function patch_auth0_v2_client(
	ctx:Ctx, params:patch_auth0_v2_client_params_T
):Promise<[Client, Response]>
export interface patch_auth0_v2_client_params_T {
	client_id?:string
	body?:string
	json?:unknown
}
