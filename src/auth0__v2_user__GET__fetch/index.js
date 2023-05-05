import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch, fetch__template_pair_ } from '@ctx-core/fetch-undici'
import { auth0_management__token_ } from '../auth0_management__token_/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('auth0').User}User */
/** @typedef {import('./auth0__v2_user__GET__fetch2.d.ts').auth0__v2_user__GET__fetch__params_T}auth0__v2_user__GET__fetch__params_T */
export const [
	auth0__v2_user__GET__fetch,
	auth0__v2_user__GET__fetch2,
] = fetch__template_pair_(
	/**
	 * @param {Ctx}ctx
	 * @param {auth0__v2_user__GET__fetch__params_T}params
	 * @return {Promise<[User, Response]>}
	 */
	async(ctx, params)=>{
		const AUTH0_DOMAIN = params.AUTH0_DOMAIN || AUTH0_DOMAIN_(ctx)
		const { user_id } = params
		const auth0__token = await auth0_management__token_(ctx)
		const authorization = header__access_token__verify(auth0__token)
		const url = `https://${AUTH0_DOMAIN}/api/v2/users/${user_id}`
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
	auth0__v2_user__GET__fetch2 as auth0__v2_user__fetch_get,
	auth0__v2_user__GET__fetch2 as get_auth0_v2_user,
}
