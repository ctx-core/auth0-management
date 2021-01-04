import { _b, B } from '@ctx-core/object'
import { _query_str } from '@ctx-core/uri'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { _auth0_management_token_b } from './_auth0_management_token_b'
import { _verify_access_token_header_authorization, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
export const get_auth0_v2_client_grants_b:get_auth0_v2_client_grants_b_type = _b('get_auth0_v2_client_grants', (ctx)=>{
	const _auth0_management_token = _auth0_management_token_b(ctx)
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return get_auth0_v2_client_grants as get_auth0_v2_client_grants_type
	async function get_auth0_v2_client_grants(
		params:get_auth0_v2_client_grants_params_type
	) {
		const {
			query,
			json,
		} = params
		const auth0_token = await _auth0_management_token()
		const authorization = _verify_access_token_header_authorization(auth0_token)
		const url = `https://${get(AUTH0_DOMAIN)}/api/v2/client-grants?${query || _query_str(json)}`
		return fetch(url, {
			method: 'GET',
			headers:
				{
					'Content-Type': 'application/json',
					authorization,
				},
		})
	}
})
export interface get_auth0_v2_client_grants_params_type {
	query?:string
	json?:any
}
export type get_auth0_v2_client_grants_type =
	(params:get_auth0_v2_client_grants_params_type)=>Promise<Response>
export interface get_auth0_v2_client_grants_b_type extends B<get_auth0_v2_client_grants_type> {}
