import { _b } from '@ctx-core/object'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from '@ctx-core/auth0'
const key = '_auth0_audience'
export interface _auth0_audience_ctx_I extends AUTH0_DOMAIN_ctx_I {
	_auth0_audience?:_auth0_audience_T
}
export type _auth0_audience_T = ()=>string
export const _auth0_audience_b = _b<_auth0_audience_ctx_I, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return _auth0_audience as _auth0_audience_T
	function _auth0_audience() {
		return `https://${AUTH0_DOMAIN.$}/api/v2/`
	}
})
