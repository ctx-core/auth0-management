import { auth0__oauth_token__POST__fetch2 } from '@ctx-core/auth0'
import { http_error__throw } from '@ctx-core/error'
import { auth0_management__client_credentials__body_ } from '../auth0_management__client_credentials__body_/index.js'
/** @typedef {import('@ctx-core/auth0').auth0__token_T}auth0__token_T */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {Promise<auth0__token_T>}
 */
export async function auth0_management__token_(ctx) {
	const [payload, response] =
		await auth0__oauth_token__POST__fetch2(
			ctx, auth0_management__client_credentials__body_(ctx))
	if (!response.ok) {
		/** @type {Auth0Error} */
		const auth0_error = payload
		http_error__throw({
			http__status: response.status,
			error_message: `${auth0_error.error}: ${auth0_error.error_description}`,
		})
	}
	return payload
}
export {
	auth0_management__token_ as auth0_management_token_,
}
