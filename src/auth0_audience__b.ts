import { AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { be_, B } from '@ctx-core/object'
const key = 'auth0_audience_'
export const auth0_audience__b:B<auth0_audience__T> = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return auth0_audience_fn as auth0_audience__T
	function auth0_audience_fn() {
		return `https://${AUTH0_DOMAIN$.$}/api/v2/`
	}
})
export type auth0_audience__T = ()=>string
