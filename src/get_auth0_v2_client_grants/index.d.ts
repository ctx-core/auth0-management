/// <reference lib="dom" />
import { type Ctx } from '@ctx-core/object'
import { type CreateClientGrant } from 'auth0'
export declare function get_auth0_v2_client_grants(
	ctx:Ctx, params:get_auth0_v2_client_grants_params_T
):Promise<[CreateClientGrant, Response]>
export interface get_auth0_v2_client_grants_params_T {
	query?:string
	json?:any
}
