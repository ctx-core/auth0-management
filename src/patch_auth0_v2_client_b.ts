import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { verify_access_token_header_authorization_fn, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import { auth0_management_token_fn_b } from './auth0_management_token_fn_b'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'patch_auth0_v2_client'
export const patch_auth0_v2_client_b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const auth0_management_token_fn = auth0_management_token_fn_b(ctx)
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return patch_auth0_v2_client as patch_auth0_v2_client_T
	async function patch_auth0_v2_client(params:patch_auth0_v2_client_params_T) {
		const {
			client_id = process.env.AUTH0_CLIENT_ID,
			body,
			json,
		} = params
		const auth0_token = await auth0_management_token_fn()
		const authorization = verify_access_token_header_authorization_fn(auth0_token)
		const url = `https://${get(AUTH0_DOMAIN)}/api/v2/clients/${client_id}`
		return fetch(url, {
			method: 'PATCH',
			headers:
				{
					'Content-Type': 'application/json',
					authorization,
				},
			body: body || JSON.stringify(json),
		})
	}
})
export interface patch_auth0_v2_client_params_T {
	client_id?:string
	body?:string
	json?:unknown
}
export type patch_auth0_v2_client_T =
	(params:patch_auth0_v2_client_params_T)=>Promise<Response>
