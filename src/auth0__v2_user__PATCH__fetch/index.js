import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch, fetch__template_pair_ } from '@ctx-core/fetch-undici'
import { auth0_management__token_ } from '../auth0_management__token_/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('auth0').UpdateUserData}UpdateUserData */
/** @typedef {import('./auth0__v2_user__PATCH__fetch2.d.ts').auth0__v2_user__PATCH__fetch__data_T}auth0__v2_user__PATCH__fetch__data_T */
/** @typedef {import('./index.d.ts').auth0__v2_user__PATCH__error_T}auth0__v2_user__PATCH__error_T */
export const [
	auth0__v2_user__PATCH__fetch,
	auth0__v2_user__PATCH__fetch2,
] = fetch__template_pair_(
	/**
	 * @param {Ctx}ctx
	 * @param {string}user_id
	 * @param {auth0__v2_user__PATCH__fetch__data_T}data
	 * @return {Promise<[UpdateUserData|auth0__v2_user__PATCH__error_T, Response]>}
	 * @see {@link https://auth0.com/docs/api-auth/tutorials/client-credentials}
	 * @see {@link https://auth0.com/docs/api-auth/which-oauth-flow-to-use}
	 * @see {@link https://auth0.com/docs/clients/client-grant-types}
	 * @see {@link https://auth0.com/docs/api-auth/grant/authorization-code}
	 * @see {@link https://auth0.com/docs/protocols/oauth2}
	 */
	async(
		ctx,
		user_id,
		data
	)=>{
		const auth0_management_token = await auth0_management__token_(ctx)
		const authorization = header__access_token__verify(auth0_management_token)
		const url = `https://${AUTH0_DOMAIN_(ctx)}/api/v2/users/${user_id}`
		return fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization
			},
			body: JSON.stringify(data)
		})
	}
)
export {
	auth0__v2_user__PATCH__fetch2 as auth0__v2_user__fetch_patch,
	auth0__v2_user__PATCH__fetch2 as patch_auth0_v2_user,
}
