import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { auth0_management__token_ } from '../auth0_management__token_/index.js'
/** @type {import('auth0-js').Auth0UserProfile}Auth0UserProfile */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./auth0__v2_users_by_email__fetch_get.d.ts').auth0__v2_users_by_email__fetch__params_T}params
 * @return {Promise<[Auth0UserProfile[], Response]>}
 */
export async function auth0__v2_users_by_email__fetch_get(
	ctx,
	params
) {
	const { email } = params
	const AUTH0_DOMAIN = params.AUTH0_DOMAIN || AUTH0_DOMAIN_(ctx)
	const auth0__token = await auth0_management__token_(ctx)
	const authorization = header__access_token__verify(auth0__token)
	const url = `https://${AUTH0_DOMAIN}/api/v2/users-by-email?email=${encodeURIComponent(email)}`
	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization
		}
	})
	/** @type {Auth0UserProfile[]} */
	const auth0_user_profile_a = await res.json()
	return [auth0_user_profile_a, res]
}
export {
	auth0__v2_users_by_email__fetch_get as get_auth0_v2_users_by_email,
}
