import { _b, B } from '@ctx-core/object'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from '@ctx-core/auth0'
export const _auth0_audience_b:_auth0_audience_b_T = _b('_auth0_audience', (
	ctx:_auth0_audience_ctx_I
)=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return _auth0_audience as _auth0_audience_T
	function _auth0_audience() {
		return `https://${AUTH0_DOMAIN.$}/api/v2/`
	}
})
export interface _auth0_audience_ctx_I extends AUTH0_DOMAIN_ctx_I {
	_auth0_audience?:_auth0_audience_T
}
export type _auth0_audience_T = ()=>string
export interface _auth0_audience_b_T extends B<_auth0_audience_T> {}
