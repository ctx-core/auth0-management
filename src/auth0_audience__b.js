import { AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { be_ } from '@ctx-core/object'
const key = 'auth0_audience_'
/** @type {import('./auth0_audience__b.d.ts').auth0_audience__b} */
export const auth0_audience__b = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return auth0_audience_fn
	function auth0_audience_fn() {
		return `https://${AUTH0_DOMAIN$.$}/api/v2/`
	}
})
