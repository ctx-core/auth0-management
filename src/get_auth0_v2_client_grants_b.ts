import { verify_access_token_header_authorization_, AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
import { be_, B } from '@ctx-core/object'
import { query_str_ } from '@ctx-core/uri'
import { auth0_management_token__b } from './auth0_management_token__b.js'
const key = 'get_auth0_v2_client_grants'
export const get_auth0_v2_client_grants_b:B<get_auth0_v2_client_grants_T> = be_(key, ctx=>{
	const auth0_management_token_ = auth0_management_token__b(ctx)
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return get_auth0_v2_client_grants as get_auth0_v2_client_grants_T
	async function get_auth0_v2_client_grants(
		params:get_auth0_v2_client_grants_params_I
	) {
		const { query, json } = params
		const auth0_token = await auth0_management_token_()
		const authorization = verify_access_token_header_authorization_(auth0_token)
		const url = `https://${AUTH0_DOMAIN$.$}/api/v2/client-grants?${query || query_str_(json)}`
		return fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization,
			},
		})
	}
})
export interface get_auth0_v2_client_grants_params_I {
	query?:string
	json?:any
}
export type get_auth0_v2_client_grants_T =
	(params:get_auth0_v2_client_grants_params_I)=>Promise<Response>
