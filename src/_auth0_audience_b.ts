import { _b } from '@ctx-core/object'
import { AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import type { auth0_management_Ctx } from './auth0_management_Ctx'
const key = '_auth0_audience'
export type _auth0_audience_T = ()=>string
export const _auth0_audience_b = _b<auth0_management_Ctx, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return _auth0_audience as _auth0_audience_T
	function _auth0_audience() {
		return `https://${AUTH0_DOMAIN.$}/api/v2/`
	}
})
