/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { AUTH0_DOMAIN_ } from '@ctx-core/auth0'
import { ManagementClient } from 'auth0'
import { AUTH0_MANAGEMENT_ID_ } from '../AUTH0_MANAGEMENT_ID/index.js'
import { AUTH0_MANAGEMENT_SECRET_ } from '../AUTH0_MANAGEMENT_SECRET/index.js'
/** @typedef {ctx_T} */
/** @typedef {import('auth0').ManagementClient} */
/** @typedef {auth0_management__params_T} */
/**
 * @param {ctx_T}ctx
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
