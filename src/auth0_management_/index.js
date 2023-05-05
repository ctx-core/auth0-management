import { AUTH0_DOMAIN_ } from '@ctx-core/auth0'
import { createRequire } from 'module'
import { AUTH0_MANAGEMENT_ID_ } from '../AUTH0_MANAGEMENT_ID__/index.js'
import { AUTH0_MANAGEMENT_SECRET_ } from '../AUTH0_MANAGEMENT_SECRET__/index.js'
const require = createRequire(import.meta.url)
const { ManagementClient } = require('auth0')
/**
 * @param {import('./auth0_management_.d.ts').auth0_management__params_T} params
 * @returns {import('auth0').ManagementClient}
 */
export function auth0_management_(
	ctx,
	params = {}
) {
	const domain =
		params.AUTH0_DOMAIN
		|| AUTH0_DOMAIN_(ctx)
		|| ''
	const clientId =
		params.AUTH0_MANAGEMENT_ID
		|| AUTH0_MANAGEMENT_ID_(ctx)
		|| ''
	const clientSecret =
		params.AUTH0_MANAGEMENT_SECRET
		|| AUTH0_MANAGEMENT_SECRET_(ctx)
		|| ''
	const scope = ''
	return new ManagementClient({
		domain,
		clientId,
		clientSecret,
		scope
	})
}
