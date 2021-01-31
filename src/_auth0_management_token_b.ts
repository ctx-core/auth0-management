import { _b, B } from '@ctx-core/object'
import { $auth0_token_type, post_auth0_oauth_token_b } from '@ctx-core/auth0'
import { _auth0_management_client_credentials_body_b } from './_auth0_management_client_credentials_body'
export const _auth0_management_token_b:_auth0_management_token_b_type = _b('_auth0_management_token', (ctx)=>{
	const post_auth0_oauth_token = post_auth0_oauth_token_b(ctx)
	const _auth0_management_client_credentials_body = _auth0_management_client_credentials_body_b(ctx)
	return _auth0_management_token
	async function _auth0_management_token() {
		const management_client_credentials = _auth0_management_client_credentials_body()
		const response = await post_auth0_oauth_token(management_client_credentials)
		return response.json()
	}
})
export type _auth0_management_token_type = ()=>Promise<$auth0_token_type>
export interface _auth0_management_token_b_type extends B<_auth0_management_token_type> {}
