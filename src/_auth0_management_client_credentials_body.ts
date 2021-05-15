import { _b, B } from '@ctx-core/object'
import type { post_auth0_oauth_token_body_I } from '@ctx-core/auth0'
import { _auth0_audience_b, _auth0_audience_ctx_I } from './_auth0_audience_b'
export const _auth0_management_client_credentials_body_b:_auth0_management_client_credentials_body_b_T = _b('_auth0_management_client_credentials_body', (
	ctx:_auth0_management_client_credentials_body_ctx_I
)=>{
	const _auth0_audience = _auth0_audience_b(ctx)
	return _auth0_management_client_credentials_body as _auth0_management_client_credentials_body_T
	function _auth0_management_client_credentials_body():post_auth0_oauth_token_body_I {
		return {
			grant_type: 'client_credentials',
			client_id: process.env.AUTH0_MANAGEMENT_ID!,
			client_secret: process.env.AUTH0_MANAGEMENT_SECRET!,
			audience: _auth0_audience(),
		}
	}
})
export interface _auth0_management_client_credentials_body_ctx_I extends _auth0_audience_ctx_I {
	_auth0_management_client_credentials_body?:_auth0_management_client_credentials_body_T
}
export type _auth0_management_client_credentials_body_T = ()=>post_auth0_oauth_token_body_I
export interface _auth0_management_client_credentials_body_b_T extends B<_auth0_management_client_credentials_body_T> {}
