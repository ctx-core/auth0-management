import querystringify from 'querystringify'
import { _b } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { _auth0_management_token_b } from './_auth0_management_token_b'
import { _verify_access_token_header_authorization, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
export const get_auth0_v2_client_grants_b = _b(
	'get_auth0_v2_client_grants', (ctx)=>{
		const _auth0_management_token = _auth0_management_token_b(ctx)
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		return async function get_auth0_v2_client_grants(
			params:get_auth0_v2_client_grants_params_type
		) {
			const {
				query,
				json,
			} = params
			const auth0_token = await _auth0_management_token()
			const authorization = _verify_access_token_header_authorization(auth0_token)
			const url = `https://${get(AUTH0_DOMAIN)}/api/v2/client-grants?${query || querystringify(json)}`
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
