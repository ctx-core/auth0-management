import { verify_access_token_header_authorization_, AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
import { be_ } from '@ctx-core/object'
import { auth0_management_token__b } from './auth0_management_token__b.js'
const key = 'get_auth0_v2_users_by_email'
/** @type {import('./get_auth0_v2_users_by_email_b.d.ts').get_auth0_v2_users_by_email_b} */
export const get_auth0_v2_users_by_email_b = be_(key, ctx=>{
	const auth0_management_token_ = auth0_management_token__b(ctx)
	return get_auth0_v2_users_by_email
	async function get_auth0_v2_users_by_email(params) {
		const { email } = params
		const AUTH0_DOMAIN = params.AUTH0_DOMAIN || AUTH0_DOMAIN$_b(ctx).$
		const auth0_token = await auth0_management_token_()
		const authorization = verify_access_token_header_authorization_(auth0_token)
		const url = `https://${AUTH0_DOMAIN}/api/v2/users-by-email?email=${encodeURIComponent(email)}`
		return await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization
			}
		})
	}
})
