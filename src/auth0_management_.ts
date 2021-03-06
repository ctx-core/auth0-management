import { ManagementClient } from 'auth0'
export function auth0_management_(params:auth0_management_params_I = {}) {
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
export interface auth0_management_params_I {
	domain?:string
	clientId?:string
	clientSecret?:string
}
