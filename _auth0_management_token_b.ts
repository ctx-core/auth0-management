import { _b } from '@ctx-core/object'
import { post_auth0_oauth_token_b } from '@ctx-core/auth0'
import { _auth0_management_client_credentials_body_b } from './_auth0_management_client_credentials_body'
export const _auth0_management_token_b = _b(
	'_auth0_management_token', (ctx)=>{
		const post_auth0_oauth_token = post_auth0_oauth_token_b(ctx)
		const _auth0_management_client_credentials_body = _auth0_management_client_credentials_body_b(ctx)
		return async function _auth0_management_token() {
			const client_credentials__management = _auth0_management_client_credentials_body()
			const response = await post_auth0_oauth_token(client_credentials__management)
			return response.json()
		}
	})
