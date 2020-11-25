import { _b } from '@ctx-core/object'
import { AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import { get } from '@ctx-core/store'
export const _auth0_audience_b = _b(
	'_auth0_audience', (ctx)=>{
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		return function _auth0_audience() {
			return `https://${get(AUTH0_DOMAIN)}/api/v2/`
		}
	})
