import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { auth0_management__token_ } from '../auth0_management__token_/index.js'
/** @typedef {import('auth0').UpdateUserData}UpdateUserData */
/** @typedef {import('./index.d.ts').auth0__v2_user__fetch_patch__error_T}auth0__v2_user__fetch_patch__error_T */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}user_id
 * @param {import('./auth0__v2_user__fetch_patch.d.ts').auth0__v2_user__fetch_patch__data_T}data
 * @return {Promise<[UpdateUserData|auth0__v2_user__fetch_patch__error_T, Response]>}
 * @see {@link https://auth0.com/docs/api-auth/tutorials/client-credentials}
 * @see {@link https://auth0.com/docs/api-auth/which-oauth-flow-to-use}
 * @see {@link https://auth0.com/docs/clients/client-grant-types}
 * @see {@link https://auth0.com/docs/api-auth/grant/authorization-code}
 * @see {@link https://auth0.com/docs/protocols/oauth2}
 */
export async function auth0__v2_user__fetch_patch(
	ctx,
	user_id,
	data
) {
	const auth0_management_token = await auth0_management__token_(ctx)
	const authorization = header__access_token__verify(auth0_management_token)
	const url = `https://${AUTH0_DOMAIN_(ctx)}/api/v2/users/${user_id}`
	const res = await fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			authorization
		},
		body: JSON.stringify(data)
	})
	/** @type {UpdateUserData|auth0__v2_user__fetch_patch__error_T} */
	const update_user_data_or_auth0_error = await res.json()
	return [update_user_data_or_auth0_error, res]
}
export {
	auth0__v2_user__fetch_patch as patch_auth0_v2_user,
}
