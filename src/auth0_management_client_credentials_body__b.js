import { be_ } from '@ctx-core/object'
import { auth0_audience__b } from './auth0_audience__b.js'
const key = 'auth0_management_client_credentials_body_'
/** @type {import('./auth0_management_client_credentials_body__b.d.ts').auth0_management_client_credentials_body__b} */
export const auth0_management_client_credentials_body__b = be_(key, ctx=>{
	const auth0_audience_ = auth0_audience__b(ctx)
	return auth0_management_client_credentials_body_
	function auth0_management_client_credentials_body_() {
		return {
			grant_type: 'client_credentials',
			client_id: process.env.AUTH0_MANAGEMENT_ID,
			client_secret: process.env.AUTH0_MANAGEMENT_SECRET,
			audience: auth0_audience_()
		}
	}
})
