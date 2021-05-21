import { _b } from '@ctx-core/object'
import { $auth0_token_T, post_auth0_oauth_token_b, post_auth0_oauth_token_ctx_I } from '@ctx-core/auth0'
import {
	_auth0_management_client_credentials_body_b, _auth0_management_client_credentials_body_ctx_I
} from './_auth0_management_client_credentials_body'
const key = '_auth0_management_token'
export interface _auth0_management_token_ctx_I
	extends post_auth0_oauth_token_ctx_I,
		_auth0_management_client_credentials_body_ctx_I {
	_auth0_management_token?:_auth0_management_token_T
}
export const _auth0_management_token_b = _b<_auth0_management_token_ctx_I, typeof key>(key, ctx=>{
	const post_auth0_oauth_token = post_auth0_oauth_token_b(ctx)
	const _auth0_management_client_credentials_body = _auth0_management_client_credentials_body_b(ctx)
	return _auth0_management_token as _auth0_management_token_T
	async function _auth0_management_token():Promise<$auth0_token_T> {
		const management_client_credentials = _auth0_management_client_credentials_body()
		const response = await post_auth0_oauth_token(management_client_credentials)
		return response.json()
	}
})
export type _auth0_management_token_T = ()=>Promise<$auth0_token_T>
