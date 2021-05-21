import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { _verify_access_token_header_authorization } from '@ctx-core/auth0'
import { _auth0_management_token_b, _auth0_management_token_Ctx } from './_auth0_management_token_b'
const key = 'get_auth0_v2_user'
export interface get_auth0_v2_user_Ctx
	extends _auth0_management_token_Ctx {
	get_auth0_v2_user?:get_auth0_v2_user_T
}
export const get_auth0_v2_user_b = _b<get_auth0_v2_user_Ctx, typeof key>(key, ctx=>{
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
export interface get_auth0_v2_user_params_T {
	AUTH0_DOMAIN:string
	user_id:string
}
export type get_auth0_v2_user_T =
	(params:get_auth0_v2_user_params_T)=>Promise<Response>
