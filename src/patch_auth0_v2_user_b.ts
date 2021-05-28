import type { Auth0UserProfile } from 'auth0-js'
import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { verify_access_token_header_authorization_fn, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import { get } from '@ctx-core/store'
import { auth0_management_token_fn_b } from './auth0_management_token_fn_b'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'patch_auth0_v2_user'
export const patch_auth0_v2_user_b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const auth0_management_token_fn = auth0_management_token_fn_b(ctx)
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return patch_auth0_v2_user as patch_auth0_v2_user_T
	/**
	 * @see {@link https://auth0.com/docs/api-auth/tutorials/client-credentials}
	 * @see {@link https://auth0.com/docs/api-auth/which-oauth-flow-to-use}
	 * @see {@link https://auth0.com/docs/clients/client-grant-types}
	 * @see {@link https://auth0.com/docs/api-auth/grant/authorization-code}
	 * @see {@link https://auth0.com/docs/protocols/oauth2}
	 */
	async function patch_auth0_v2_user(user_id:string, data:patch_auth0_v2_user_data_I) {
		const auth0_token = await auth0_management_token_fn()
		const authorization = verify_access_token_header_authorization_fn(auth0_token)
		const url = `https://${get(AUTH0_DOMAIN)}/api/v2/users/${user_id}`
		return fetch(url, {
			method: 'PATCH',
			headers:
				{
					'Content-Type': 'application/json',
					authorization,
				},
			body: JSON.stringify(data),
		})
	}
})
export interface patch_auth0_v2_user_data_I extends Partial<Auth0UserProfile> {
	password?:string
}
export type patch_auth0_v2_user_T =
	(user_id:string, data:patch_auth0_v2_user_data_I)=>Promise<Response>
