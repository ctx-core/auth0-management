import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { _verify_access_token_header_authorization, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import { get } from '@ctx-core/store'
import { _auth0_management_token_b } from './_auth0_management_token_b'
export const patch_auth0_v2_user_b = _b(
	'patch_auth0_v2_user', (ctx)=>{
		const _auth0_management_token = _auth0_management_token_b(ctx)
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		/**
		 * @see {@link https://auth0.com/docs/api-auth/tutorials/client-credentials}
		 * @see {@link https://auth0.com/docs/api-auth/which-oauth-flow-to-use}
		 * @see {@link https://auth0.com/docs/clients/client-grant-types}
		 * @see {@link https://auth0.com/docs/api-auth/grant/authorization-code}
		 * @see {@link https://auth0.com/docs/protocols/oauth2}
		 */
		return async function patch_auth0_v2_user(user_id, form) {
			const auth0_token = await _auth0_management_token()
			const authorization = _verify_access_token_header_authorization(auth0_token)
			const url = `https://${get(AUTH0_DOMAIN)}/api/v2/users/${user_id}`
			return fetch(url, {
				method: 'PATCH',
				headers:
					{
						'Content-Type': 'application/json',
						authorization,
					},
				body: JSON.stringify(form),
			})
		}
	})
