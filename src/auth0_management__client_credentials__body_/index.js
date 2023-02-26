import { auth0__v2__url_ } from '@ctx-core/auth0'
import { import_meta_env_ } from '@ctx-core/env'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {import('@ctx-core/auth0').auth0__oauth_token__fetch__body_T}
 */
export function auth0_management__client_credentials__body_(ctx) {
	return {
		grant_type: 'client_credentials',
		client_id: import_meta_env_().AUTH0_MANAGEMENT_ID,
		client_secret: import_meta_env_().AUTH0_MANAGEMENT_SECRET,
		audience: auth0__v2__url_(ctx)
	}
}
export {
	auth0_management__client_credentials__body_ as auth0_management_client_credentials_body_,
}
