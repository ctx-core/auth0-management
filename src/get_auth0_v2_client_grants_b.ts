import { _b, B } from '@ctx-core/object'
import { _query_str } from '@ctx-core/uri'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { verify_access_token_header_authorization_fn, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import { auth0_management_token_fn_b} from './auth0_management_token_fn_b'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'get_auth0_v2_client_grants'
export const get_auth0_v2_client_grants_b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const auth0_management_token_fn = auth0_management_token_fn_b(ctx)
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return get_auth0_v2_client_grants as get_auth0_v2_client_grants_T
	async function get_auth0_v2_client_grants(
		params:get_auth0_v2_client_grants_params_I
	) {
		const { query, json } = params
		const auth0_token = await auth0_management_token_fn()
		const authorization = verify_access_token_header_authorization_fn(auth0_token)
		const url = `https://${get(AUTH0_DOMAIN)}/api/v2/client-grants?${query || _query_str(json)}`
		return fetch(url, {
			method: 'GET',
			headers:
				{
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
