/// <reference types="ctx-core" />
import { auth0__oauth_token__POST__fetch2 } from '@ctx-core/auth0'
import { http_error__throw } from 'ctx-core/error'
import {
	auth0_management__client_credentials__body__new
} from '../auth0_management__client_credentials__body__new/index.js'
/** @typedef {import('@ctx-core/auth0').auth0__token_T} */
/** @typedef {ctx_T} */
/** @typedef {import('auth0-js').Auth0Error} */
/**
 * @param {ctx_T}ctx
 * @return {Promise<auth0__token_T>}
 */
export async function auth0_management__token__new(ctx) {
	const [
		payload,
		response
	] = await auth0__oauth_token__POST__fetch2(
		ctx,
		auth0_management__client_credentials__body__new(ctx))
	if (!response.ok) {
		/** @type {Auth0Error} */
		const auth0_error = payload
		http_error__throw(
			`${auth0_error.error}: ${auth0_error.error_description}`,
			{
				http__status: response.status,
			})
	}
	return payload
}
export {
	auth0_management__token__new as auth0_management__token_,
	auth0_management__token__new as auth0_management_token_,
}
