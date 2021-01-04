import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { _verify_access_token_header_authorization } from '@ctx-core/auth0'
import { _auth0_management_token_b } from './_auth0_management_token_b'
export const get_auth0_v2_user_b:get_auth0_v2_user_b_type = _b('get_auth0_v2_user', (ctx)=>{
	const _auth0_management_token = _auth0_management_token_b(ctx)
	return get_auth0_v2_user as get_auth0_v2_user_type
	async function get_auth0_v2_user({ AUTH0_DOMAIN, user_id }:get_auth0_v2_user_params_type) {
		const auth0_token = await _auth0_management_token()
		const authorization = _verify_access_token_header_authorization(auth0_token)
		const url = `https://${AUTH0_DOMAIN}/api/v2/users/${user_id}`
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
export interface get_auth0_v2_user_params_type {
	AUTH0_DOMAIN:string
	user_id:string
}
export type get_auth0_v2_user_type =
	(params:get_auth0_v2_user_params_type)=>Promise<Response>
export interface get_auth0_v2_user_b_type extends B<get_auth0_v2_user_type> {}
