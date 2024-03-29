/// <reference types="ctx-core" />
import { auth0__v2__url_ } from '@ctx-core/auth0'
import { AUTH0_MANAGEMENT_ID_ } from '../AUTH0_MANAGEMENT_ID/index.js'
import { AUTH0_MANAGEMENT_SECRET_ } from '../AUTH0_MANAGEMENT_SECRET/index.js'
/**
 * @param {ctx_T}ctx
 * @return {import('@ctx-core/auth0').auth0__oauth_token__fetch__body_T}
 */
export function auth0_management__client_credentials__body__new(ctx) {
	return {
		grant_type: 'client_credentials',
		client_id: AUTH0_MANAGEMENT_ID_(ctx),
		client_secret: AUTH0_MANAGEMENT_SECRET_(ctx),
		audience: auth0__v2__url_(ctx),
	}
}
export {
	auth0_management__client_credentials__body__new as auth0_management__client_credentials__body_,
	auth0_management__client_credentials__body__new as auth0_management_client_credentials_body_,
}
