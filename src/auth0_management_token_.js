import { post_auth0_oauth_token } from '@ctx-core/auth0'
import { auth0_management_client_credentials_body_ } from './auth0_management_client_credentials_body_.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {Promise<import('@ctx-core/auth0').auth0_token_T>}
 */
export async function auth0_management_token_(ctx) {
	const [token_response] = await post_auth0_oauth_token(
		ctx, auth0_management_client_credentials_body_(ctx)
	)
	return token_response
}
