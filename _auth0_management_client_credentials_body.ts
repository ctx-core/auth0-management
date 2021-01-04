import { _b, B } from '@ctx-core/object'
import type { auth0_client_id_body_type } from '@ctx-core/auth0'
import { _auth0_audience_b } from './_auth0_audience_b'
export const _auth0_management_client_credentials_body_b:_auth0_management_client_credentials_body_b_type = _b('_auth0_management_client_credentials_body', (ctx)=>{
	const _auth0_audience = _auth0_audience_b(ctx)
	return _auth0_management_client_credentials_body as _auth0_management_client_credentials_body_type
	function _auth0_management_client_credentials_body() {
		return {
			grant_type: 'client_credentials',
			client_id: process.env.AUTH0_MANAGEMENT_ID,
			client_secret: process.env.AUTH0_MANAGEMENT_SECRET,
			audience: _auth0_audience(),
		}
	}
})
export interface auth0_management_client_credentials_body_type extends auth0_client_id_body_type {
	client_id:string
	grant_type:string
	client_secret:string
	audience:string
}
export type _auth0_management_client_credentials_body_type = ()=>auth0_management_client_credentials_body_type
export interface _auth0_management_client_credentials_body_b_type extends B<_auth0_management_client_credentials_body_type> {}
