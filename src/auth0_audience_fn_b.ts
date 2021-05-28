import { _b, B } from '@ctx-core/object'
import { AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'auth0_audience_fn'
export type auth0_audience_fn_T = ()=>string
export const auth0_audience_fn_b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return auth0_audience_fn as auth0_audience_fn_T
	function auth0_audience_fn() {
		return `https://${AUTH0_DOMAIN.$}/api/v2/`
	}
})
