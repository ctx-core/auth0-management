import type { post_auth0_oauth_token_body_I } from '@ctx-core/auth0'
import { be_, B } from '@ctx-core/object'
import { auth0_audience__b } from './auth0_audience__b.js'
import type { auth0_management_Ctx } from './auth0_management_Ctx.js'
const key = 'auth0_management_client_credentials_body_'
export const auth0_management_client_credentials_body__b:B<auth0_management_Ctx, typeof key> = be_<auth0_management_Ctx, typeof key>(key, ctx=>{
	const auth0_audience_ = auth0_audience__b(ctx)
	return auth0_management_client_credentials_body_ as auth0_management_client_credentials_body__T
	function auth0_management_client_credentials_body_():post_auth0_oauth_token_body_I {
		return {
			grant_type: 'client_credentials',
			client_id: process.env.AUTH0_MANAGEMENT_ID!,
			client_secret: process.env.AUTH0_MANAGEMENT_SECRET!,
			audience: auth0_audience_(),
		}
	}
})
export type auth0_management_client_credentials_body__T = ()=>post_auth0_oauth_token_body_I
