import { verify_access_token_header_authorization_, AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
import { be_ } from '@ctx-core/object'
import { auth0_management_token__b } from './auth0_management_token__b.js'
const key = 'patch_auth0_v2_client'
/** @type {import('./patch_auth0_v2_client_b.d.ts').patch_auth0_v2_client_b} */
export const patch_auth0_v2_client_b = be_(key, ctx=>{
	const auth0_management_token_ = auth0_management_token__b(ctx)
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return patch_auth0_v2_client
	async function patch_auth0_v2_client(params) {
		const { client_id = process.env.AUTH0_CLIENT_ID, body, json, } = params
		const auth0_token = await auth0_management_token_()
		const authorization = verify_access_token_header_authorization_(auth0_token)
		const url = `https://${AUTH0_DOMAIN$.$}/api/v2/clients/${client_id}`
		return fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization
			},
			body: body || JSON.stringify(json)
		})
	}
})
