import { _b, B } from '@ctx-core/object'
import { AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import { get } from '@ctx-core/store'
export const _auth0_audience_b:_auth0_audience_b_type = _b('_auth0_audience', (ctx)=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return _auth0_audience as _auth0_audience_type
	function _auth0_audience() {
		return `https://${get(AUTH0_DOMAIN)}/api/v2/`
	}
})
export type _auth0_audience_type = () => string
export interface _auth0_audience_b_type extends B<_auth0_audience_type> {}
