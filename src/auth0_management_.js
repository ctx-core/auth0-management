import { ManagementClient } from 'auth0'
/**
 * @param {import('./auth0_management_.d.ts').auth0_management_params_I} params
 * @returns {import('auth0').ManagementClient}
 * @private
 */
export function auth0_management_(params = {}) {
	const domain = params.domain || process.env.AUTH0_DOMAIN || ''
	const clientId = params.clientId || process.env.AUTH0_MANAGEMENT_ID || ''
	const clientSecret = params.clientSecret || process.env.AUTH0_MANAGEMENT_SECRET || ''
	const scope = ''
	return new ManagementClient({
		domain,
		clientId,
		clientSecret,
		scope
	})
}
