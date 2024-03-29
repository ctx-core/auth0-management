/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch__template_pair__new } from 'ctx-core/fetch'
import { auth0_management__token__new } from '../auth0_management__token__new/index.js'
/** @typedef {ctx_T} */
/** @typedef {import('auth0').UpdateUserData} */
/** @typedef {auth0__v2_user__PATCH__fetch__data_T} */
/** @typedef {auth0__v2_user__PATCH__error_T} */
export const [
	auth0__v2_user__PATCH__fetch,
	auth0__v2_user__PATCH__fetch2,
] = fetch__template_pair__new(
	/**
	 * @param {ctx_T}ctx
	 * @param {string}user_id
	 * @param {auth0__v2_user__PATCH__fetch__data_T}data
	 * @return {Promise<[UpdateUserData|auth0__v2_user__PATCH__error_T, Response]>}
	 * @see {@link https://auth0.com/docs/api-auth/tutorials/client-credentials}
	 * @see {@link https://auth0.com/docs/api-auth/which-oauth-flow-to-use}
	 * @see {@link https://auth0.com/docs/clients/client-grant-types}
	 * @see {@link https://auth0.com/docs/api-auth/grant/authorization-code}
	 * @see {@link https://auth0.com/docs/protocols/oauth2}
	 */
	async (
		ctx,
		user_id,
		data
	)=>{
		const auth0_management_token = await auth0_management__token__new(ctx)
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
