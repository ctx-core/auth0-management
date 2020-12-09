import { ManagementClient } from 'auth0'
export function _auth0_management(params:auth0_management_params_type = {}) {
	const domain = params.domain || process.env.AUTH0_DOMAIN || ''
	const clientId = params.clientId || process.env.AUTH0_MANAGEMENT_ID || ''
	const clientSecret = params.clientSecret || process.env.AUTH0_MANAGEMENT_SECRET || ''
	const scope = ''
	return new ManagementClient({
		domain,
		clientId,
		clientSecret,
		scope,
	})
}
export interface auth0_management_params_type {
	domain?:string
	clientId?:string
	clientSecret?:string
}