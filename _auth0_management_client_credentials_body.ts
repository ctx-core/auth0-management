import { _b } from '@ctx-core/object'
import { _auth0_audience_b } from './_auth0_audience_b'
export const _auth0_management_client_credentials_body_b = _b(
	'_auth0_management_client_credentials_body', (ctx)=>{
		const _auth0_audience = _auth0_audience_b(ctx)
		return function _auth0_management_client_credentials_body() {
			return {
				grant_type: 'client_credentials',
				client_id: process.env.AUTH0_MANAGEMENT_ID,
				client_secret: process.env.AUTH0_MANAGEMENT_SECRET,
				audience: _auth0_audience(),
			}
		}
	})
