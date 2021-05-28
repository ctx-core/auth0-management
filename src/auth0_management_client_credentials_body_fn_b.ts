import { _b, B } from '@ctx-core/object'
import type { post_auth0_oauth_token_body_I } from '@ctx-core/auth0'
import { auth0_audience_fn_b } from './auth0_audience_fn_b'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'auth0_management_client_credentials_body_fn'
export const auth0_management_client_credentials_body_fn_b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const auth0_audience_fn = auth0_audience_fn_b(ctx)
	return auth0_management_client_credentials_body_fn as auth0_management_client_credentials_body_fn_T
	function auth0_management_client_credentials_body_fn():post_auth0_oauth_token_body_I {
		return {
			grant_type: 'client_credentials',
			client_id: process.env.AUTH0_MANAGEMENT_ID!,
			client_secret: process.env.AUTH0_MANAGEMENT_SECRET!,
			audience: auth0_audience_fn(),
		}
	}
})
export type auth0_management_client_credentials_body_fn_T = ()=>post_auth0_oauth_token_body_I
