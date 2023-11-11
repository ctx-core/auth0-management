import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch__template_pair__new } from '@ctx-core/fetch'
import { auth0_management__token__new } from '../auth0_management__token__new/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {import('auth0-js').Auth0UserProfile}Auth0UserProfile */
/** @typedef {import('./index.d.ts').auth0__v2_users_by_email__GET__fetch__params_T}auth0__v2_users_by_email__GET__fetch__params_T */
export const [
	auth0__v2_users_by_email__GET__fetch,
	auth0__v2_users_by_email__GET__fetch2,
] = fetch__template_pair__new(
	/**
	 * @param {Ctx}ctx
	 * @param {auth0__v2_users_by_email__GET__fetch__params_T}params
	 * @return {Promise<[Auth0UserProfile[], Response]>}
	 */
	async (ctx, params)=>{
		const { email } = params
		const AUTH0_DOMAIN = params.AUTH0_DOMAIN || AUTH0_DOMAIN_(ctx)
		const auth0__token = await auth0_management__token__new(ctx)
		const authorization = header__access_token__verify(auth0__token)
		const url = `https://${AUTH0_DOMAIN}/api/v2/users-by-email?email=${encodeURIComponent(email)}`
		return fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization
			}
		})
	}
)
export {
	auth0__v2_users_by_email__GET__fetch2 as auth0__v2_users_by_email__fetch_get,
	auth0__v2_users_by_email__GET__fetch2 as get_auth0_v2_users_by_email,
}
