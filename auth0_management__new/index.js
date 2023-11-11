import { AUTH0_DOMAIN_ } from '@ctx-core/auth0'
import { createRequire } from 'module'
import { AUTH0_MANAGEMENT_ID_ } from '../AUTH0_MANAGEMENT_ID/index.js'
import { AUTH0_MANAGEMENT_SECRET_ } from '../AUTH0_MANAGEMENT_SECRET/index.js'
const require = createRequire(import.meta.url)
const { ManagementClient } = require('auth0')
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('auth0').ManagementClient}ManagementClient */
/** @typedef {import('./index.d.ts').auth0_management__params_T}auth0_management__params_T */
/**
 * @param {Ctx}ctx
 * @param {auth0_management__params_T}params
 * @returns {ManagementClient}
 */
export function auth0_management__new(
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
export {
	auth0_management__new as auth0_management_
}
