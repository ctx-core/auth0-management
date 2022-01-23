import { post_auth0_oauth_token_b } from '@ctx-core/auth0'
import { be_ } from '@ctx-core/object'
import { auth0_management_client_credentials_body__b } from './auth0_management_client_credentials_body__b.js'
const key = 'auth0_management_token_'
/** @type {import('./auth0_management_token__b.d.ts').auth0_management_token__b} */
export const auth0_management_token__b = be_(key, ctx=>{
	const auth0_management_client_credentials_body_fn = auth0_management_client_credentials_body__b(ctx)
	return auth0_management_token_
	async function auth0_management_token_() {
		const management_client_credentials = auth0_management_client_credentials_body_fn()
		const [token_response] = await post_auth0_oauth_token_b(ctx)(management_client_credentials)
		return token_response
	}
})
