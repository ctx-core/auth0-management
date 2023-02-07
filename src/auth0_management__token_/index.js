import { auth0__oauth_token__fetch_post } from '@ctx-core/auth0'
import { auth0_management__client_credentials__body_ } from '../auth0_management__client_credentials__body_/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {Promise<import('@ctx-core/auth0').auth0__token_T>}
 */
export async function auth0_management__token_(ctx) {
	const [token_response] = await auth0__oauth_token__fetch_post(
		ctx, auth0_management__client_credentials__body_(ctx))
	return token_response
}
export {
	auth0_management__token_ as auth0_management_token_,
}
