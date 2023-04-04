import type { Ctx } from '@ctx-core/object'
import type { CreateClientGrant } from 'auth0'
export declare function auth0__v2_client_grants__fetch_get(
	ctx:Ctx,
	params:auth0__v2_client_grants__fetch__params_T
):Promise<[CreateClientGrant, Response]>
export {
	auth0__v2_client_grants__fetch_get as get_auth0_v2_client_grants,
}
export interface auth0__v2_client_grants__fetch__params_T {
	query?:string
	json?:any
}
export declare type get_auth0_v2_client_grants_params_T = auth0__v2_client_grants__fetch__params_T
