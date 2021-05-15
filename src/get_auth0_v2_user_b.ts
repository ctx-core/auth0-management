import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { _verify_access_token_header_authorization } from '@ctx-core/auth0'
import { _auth0_management_token_b, _auth0_management_token_ctx_I } from './_auth0_management_token_b'
export const get_auth0_v2_user_b:get_auth0_v2_user_b_T = _b('get_auth0_v2_user', (
	ctx:get_auth0_v2_user_ctx_I
)=>{
	const _auth0_management_token = _auth0_management_token_b(ctx)
	return get_auth0_v2_user as get_auth0_v2_user_T
	async function get_auth0_v2_user({ AUTH0_DOMAIN, user_id }:get_auth0_v2_user_params_T):Promise<Response> {
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
export interface get_auth0_v2_user_ctx_I extends _auth0_management_token_ctx_I {
	get_auth0_v2_user?:get_auth0_v2_user_T
}
export interface get_auth0_v2_user_params_T {
	AUTH0_DOMAIN:string
	user_id:string
}
export type get_auth0_v2_user_T =
	(params:get_auth0_v2_user_params_T)=>Promise<Response>
export interface get_auth0_v2_user_b_T extends B<get_auth0_v2_user_T> {}
