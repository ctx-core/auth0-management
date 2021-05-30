import { _b, B } from '@ctx-core/object'
import { AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = 'auth0_audience_'
export const auth0_audience__b:B<auth0_management_Ctx, typeof key> = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return auth0_audience_fn as auth0_audience__T
	function auth0_audience_fn() {
		return `https://${AUTH0_DOMAIN$._}/api/v2/`
	}
})
export type auth0_audience__T = ()=>string
