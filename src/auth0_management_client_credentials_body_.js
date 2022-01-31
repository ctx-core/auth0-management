import { auth0_audience_ } from './auth0_audience_.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {import('@ctx-core/auth0').post_auth0_oauth_token_body_I}
 */
export function auth0_management_client_credentials_body_(ctx) {
	return {
		grant_type: 'client_credentials',
		client_id: process.env.AUTH0_MANAGEMENT_ID,
		client_secret: process.env.AUTH0_MANAGEMENT_SECRET,
		audience: auth0_audience_(ctx)
	}
}
