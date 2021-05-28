import { _b, B } from '@ctx-core/object'
import { $auth0_token_T, post_auth0_oauth_token_b } from '@ctx-core/auth0'
import { auth0_management_client_credentials_body_fn_b } from './auth0_management_client_credentials_body_fn_b'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'auth0_management_token_fn'
export const auth0_management_token_fn_b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const post_auth0_oauth_token = post_auth0_oauth_token_b(ctx)
	const auth0_management_client_credentials_body_fn = auth0_management_client_credentials_body_fn_b(ctx)
	return auth0_management_token_fn as auth0_management_token_fn_T
	async function auth0_management_token_fn():Promise<$auth0_token_T> {
		const management_client_credentials = auth0_management_client_credentials_body_fn()
		const response = await post_auth0_oauth_token(management_client_credentials)
		return response.json()
	}
})
export type auth0_management_token_fn_T = ()=>Promise<$auth0_token_T>
