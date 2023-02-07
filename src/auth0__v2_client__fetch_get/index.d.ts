import type { Ctx } from '@ctx-core/object'
import type { Client } from 'auth0'
export declare function auth0__v2_client__fetch_get(
	ctx:Ctx, params:auth0__v2_client__fetch__params_T
):Promise<[Client, Response]>
export {
	auth0__v2_client__fetch_get as patch_auth0_v2_client,
}
export interface auth0__v2_client__fetch__params_T {
	client_id?:string
	body?:string
	json?:unknown
}
export declare type patch_auth0_v2_client_params_T = auth0__v2_client__fetch__params_T
