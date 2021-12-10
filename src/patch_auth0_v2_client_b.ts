import { verify_access_token_header_authorization_, AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { be_, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { auth0_management_token__b } from './auth0_management_token__b.js'
const key = 'patch_auth0_v2_client'
export const patch_auth0_v2_client_b:B<patch_auth0_v2_client_T> = be_(key, ctx=>{
	const auth0_management_token_ = auth0_management_token__b(ctx)
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return patch_auth0_v2_client as patch_auth0_v2_client_T
	async function patch_auth0_v2_client(params:patch_auth0_v2_client_params_T) {
		const {
			client_id = process.env.AUTH0_CLIENT_ID,
			body,
			json,
		} = params
		const auth0_token = await auth0_management_token_()
		const authorization = verify_access_token_header_authorization_(auth0_token)
		const url = `https://${AUTH0_DOMAIN$.$}/api/v2/clients/${client_id}`
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
