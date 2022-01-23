import { verify_access_token_header_authorization_ } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { be_ } from '@ctx-core/object'
import { auth0_management_token__b } from './auth0_management_token__b.js'
const key = 'get_auth0_v2_user'
/** @type {import('./get_auth0_v2_user_b.d.ts').get_auth0_v2_user_b} */
export const get_auth0_v2_user_b = be_(key, ctx=>{
	const auth0_management_token_ = auth0_management_token__b(ctx)
	return get_auth0_v2_user
	async function get_auth0_v2_user({ AUTH0_DOMAIN, user_id }) {
		const auth0_token = await auth0_management_token_()
		const authorization = verify_access_token_header_authorization_(auth0_token)
		const url = `https://${AUTH0_DOMAIN}/api/v2/users/${user_id}`
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization
			}
		})
		return [await res.json(), res]
	}
})
