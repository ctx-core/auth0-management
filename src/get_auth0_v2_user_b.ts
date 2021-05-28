import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { verify_access_token_header_authorization_fn } from '@ctx-core/auth0'
import { auth0_management_token_fn_b } from './auth0_management_token_fn_b'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'get_auth0_v2_user'
export const get_auth0_v2_user_b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const auth0_management_token_fn = auth0_management_token_fn_b(ctx)
	return get_auth0_v2_user as get_auth0_v2_user_T
	async function get_auth0_v2_user({ AUTH0_DOMAIN, user_id }:get_auth0_v2_user_params_T):Promise<Response> {
		const auth0_token = await auth0_management_token_fn()
		const authorization = verify_access_token_header_authorization_fn(auth0_token)
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
