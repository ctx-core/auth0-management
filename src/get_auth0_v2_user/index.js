import { verify_access_token_header_authorization } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { auth0_management_token_ } from '../auth0_management_token_/index.js'
/** @typedef {import('auth0').User}User */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./get_auth0_v2_user.d.ts').get_auth0_v2_user_params_T}params
 * @return {Promise<[User, Response]>}
 */
export async function get_auth0_v2_user(ctx, params) {
	const { AUTH0_DOMAIN, user_id } = params
	const auth0_token = await auth0_management_token_(ctx)
	const authorization = verify_access_token_header_authorization(auth0_token)
	const url = `https://${AUTH0_DOMAIN}/api/v2/users/${user_id}`
	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization
		}
	})
	/** @type {User} */
	const user = await res.json()
	return [user, res]
}
