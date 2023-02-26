import { import_meta_env_ } from '@ctx-core/env'
import { ManagementClient } from 'auth0'
/**
 * @param {import('./auth0_management_.d.ts').auth0_management__params_T} params
 * @returns {import('auth0').ManagementClient}
 */
export function auth0_management_(params = {}) {
	const domain = params.domain || import_meta_env_().AUTH0_DOMAIN || ''
	const clientId = params.clientId || import_meta_env_().AUTH0_MANAGEMENT_ID || ''
	const clientSecret = params.clientSecret || import_meta_env_().AUTH0_MANAGEMENT_SECRET || ''
	const scope = ''
	return new ManagementClient({
		domain,
		clientId,
		clientSecret,
		scope
	})
}
