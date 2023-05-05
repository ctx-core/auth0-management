import type { fetch__template_pair_T } from '@ctx-core/fetch'
import type { Ctx } from '@ctx-core/object'
import type { CreateClientGrant } from 'auth0'
export declare const [
	auth0__v2_client_grants__GET__fetch,
	auth0__v2_client_grants__GET__fetch2,
]:fetch__template_pair_T<
	[
		ctx:Ctx,
		params:auth0__v2_client_grants__fetch__params_T
	],
	CreateClientGrant
>
export {
	auth0__v2_client_grants__GET__fetch2 as auth0__v2_client_grants__fetch_get,
	auth0__v2_client_grants__GET__fetch2 as get_auth0_v2_client_grants,
}
export interface auth0__v2_client_grants__fetch__params_T {
	query?:string
	json?:any
}
export declare type get_auth0_v2_client_grants_params_T = auth0__v2_client_grants__fetch__params_T
