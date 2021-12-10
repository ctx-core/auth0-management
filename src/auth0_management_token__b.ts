import { auth0_token_T, post_auth0_oauth_token_b } from '@ctx-core/auth0'
import { be_, B } from '@ctx-core/object'
import { auth0_management_client_credentials_body__b } from './auth0_management_client_credentials_body__b.js'
const key = 'auth0_management_token_'
export const auth0_management_token__b:B<auth0_management_token__T> = be_(key, ctx=>{
	const post_auth0_oauth_token = post_auth0_oauth_token_b(ctx)
	const auth0_management_client_credentials_body_fn = auth0_management_client_credentials_body__b(ctx)
	return auth0_management_token_ as auth0_management_token__T
	async function auth0_management_token_():Promise<auth0_token_T> {
		const management_client_credentials = auth0_management_client_credentials_body_fn()
		const response = await post_auth0_oauth_token(management_client_credentials)
		return response.json()
	}
})
export type auth0_management_token__T = ()=>Promise<auth0_token_T>
