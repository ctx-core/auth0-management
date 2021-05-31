import { be_, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { verify_access_token_header_authorization_, AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { auth0_management_token__b } from './auth0_management_token__b'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'get_auth0_v2_users_by_email'
export const get_auth0_v2_users_by_email_b:B<auth0_management_Ctx, typeof key> = be_<auth0_management_Ctx, typeof key>(key, ctx=>{
	const auth0_management_token_ = auth0_management_token__b(ctx)
	return get_auth0_v2_users_by_email as get_auth0_v2_users_by_email_T
	async function get_auth0_v2_users_by_email(params:get_auth0_v2_users_by_email_params_I) {
		const { email } = params
		const AUTH0_DOMAIN = params.AUTH0_DOMAIN || AUTH0_DOMAIN$_b(ctx)._
		const auth0_token = await auth0_management_token_()
		const authorization = verify_access_token_header_authorization_(auth0_token)
		const url = `https://${AUTH0_DOMAIN}/api/v2/users-by-email?email=${encodeURIComponent(email)}`
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
export type get_auth0_v2_users_by_email_params_I = {
	email:string,
	AUTH0_DOMAIN?:string,
}
export type get_auth0_v2_users_by_email_T =
	(params:get_auth0_v2_users_by_email_params_I)=>Promise<Response>
