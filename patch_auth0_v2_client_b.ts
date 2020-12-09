import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { _verify_access_token_header_authorization, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import { _auth0_management_token_b } from './_auth0_management_token_b'
export const patch_auth0_v2_client_b = _b(
	'patch_auth0_v2_client', (ctx)=>{
		const _auth0_management_token = _auth0_management_token_b(ctx)
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		return async function patch_auth0_v2_client(params:patch_auth0_v2_client_params_type) {
			const {
				client_id = process.env.AUTH0_CLIENT_ID,
				body,
				json,
			} = params
			const auth0_token = await _auth0_management_token()
			const authorization = _verify_access_token_header_authorization(auth0_token)
			const url = `https://${get(AUTH0_DOMAIN)}/api/v2/clients/${client_id}`
			return fetch(url, {
				method: 'PATCH',
				headers:
					{
						'Content-Type': 'application/json',
						authorization,
					},
				body: body || JSON.stringify(json),
			})
		}
	})
export interface patch_auth0_v2_client_params_type {
	client_id?:string
	body?:string
	json?:unknown
}