import { verify_access_token_header_authorization, AUTH0_DOMAIN$_ } from '@ctx-core/auth0'
import { fetch, headers_ } from '@ctx-core/fetch-undici'
import { auth0_management_token_ } from './auth0_management_token_.js'
/** @type {import('auth0-js').Auth0UserProfile}Auth0UserProfile */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./get_auth0_v2_users_by_email.d.ts').get_auth0_v2_users_by_email_params_T}params
 * @return {Promise<[Auth0UserProfile[], Response]>}
 */
export async function get_auth0_v2_users_by_email(ctx, params) {
	const { email } = params
	const AUTH0_DOMAIN = params.AUTH0_DOMAIN || AUTH0_DOMAIN$_(ctx).$
	const auth0_token = await auth0_management_token_(ctx)
	const authorization = verify_access_token_header_authorization(auth0_token)
	const url = `https://${AUTH0_DOMAIN}/api/v2/users-by-email?email=${encodeURIComponent(email)}`
	const res = await fetch(url, {
		method: 'GET',
		headers: headers_({
			'Content-Type': 'application/json',
			authorization
		})
	})
	/** @type {Auth0UserProfile[]} */
	const auth0_user_profile_a = await res.json()
	return [auth0_user_profile_a, res]
}
