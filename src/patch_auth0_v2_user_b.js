import { verify_access_token_header_authorization_, AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { be_ } from '@ctx-core/object'
import { auth0_management_token__b } from './auth0_management_token__b.js'
const key = 'patch_auth0_v2_user'
/** @type {import('./patch_auth0_v2_user_b.d.ts').patch_auth0_v2_user_b} */
export const patch_auth0_v2_user_b = be_(key, ctx=>{
	const auth0_management_token_ = auth0_management_token__b(ctx)
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return patch_auth0_v2_user
	/**
	 * @see {@link https://auth0.com/docs/api-auth/tutorials/client-credentials}
	 * @see {@link https://auth0.com/docs/api-auth/which-oauth-flow-to-use}
	 * @see {@link https://auth0.com/docs/clients/client-grant-types}
	 * @see {@link https://auth0.com/docs/api-auth/grant/authorization-code}
	 * @see {@link https://auth0.com/docs/protocols/oauth2}
	 */ async function patch_auth0_v2_user(user_id, data) {
		const auth0_management_token = await auth0_management_token_()
		const authorization = verify_access_token_header_authorization_(auth0_management_token)
		const url = `https://${AUTH0_DOMAIN$.$}/api/v2/users/${user_id}`
		const res = await fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization
			},
			body: JSON.stringify(data)
		})
		return [await res.json(), res]
	}
})
