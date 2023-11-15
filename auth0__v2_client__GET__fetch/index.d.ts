import type { fetch__template_pair_T } from '@ctx-core/fetch'
import type { Ctx } from '@ctx-core/object'
import type { Client } from 'auth0'
import type { Auth0Error } from 'auth0-js'
export declare const [
	auth0__v2_client__GET__fetch,
	auth0__v2_client__GET__fetch2,
]:fetch__template_pair_T<
	[
		ctx:Ctx,
		params:auth0__v2_client__GET__fetch__params_T
	],
	Client|Auth0Error
>
export {
	auth0__v2_client__GET__fetch2 as auth0__v2_client__fetch_get,
	auth0__v2_client__GET__fetch2 as patch_auth0_v2_client,
}
export interface auth0__v2_client__GET__fetch__params_T {
	client_id?:string
	body?:string
	json?:unknown
}
export type auth0__v2_client__fetch_get = auth0__v2_client__GET__fetch__params_T
export declare type patch_auth0_v2_client_params_T = auth0__v2_client__GET__fetch__params_T