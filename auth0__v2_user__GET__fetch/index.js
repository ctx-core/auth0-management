/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch__template_pair__new } from 'ctx-core/fetch'
import { auth0_management__token__new } from '../auth0_management__token__new/index.js'
/** @typedef {ctx_T} */
/** @typedef {import('auth0').User} */
/** @typedef {auth0__v2_user__GET__fetch__params_T} */
export const [
	auth0__v2_user__GET__fetch,
	auth0__v2_user__GET__fetch2,
] = fetch__template_pair__new(
	/**
	 * @param {ctx_T}ctx
	 * @param {auth0__v2_user__GET__fetch__params_T}params
	 * @return {Promise<Response>}
	 */
	async (ctx, params)=>{
		const AUTH0_DOMAIN = params.AUTH0_DOMAIN || AUTH0_DOMAIN_(ctx)
		const { user_id } = params
		const auth0__token = await auth0_management__token__new(ctx)
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

