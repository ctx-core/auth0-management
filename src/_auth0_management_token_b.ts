import { _b, B } from '@ctx-core/object'
import { $auth0_token_T, post_auth0_oauth_token_b } from '@ctx-core/auth0'
import { _auth0_management_client_credentials_body_b } from './_auth0_management_client_credentials_body'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = '_auth0_management_token'
export const _auth0_management_token_b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
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
