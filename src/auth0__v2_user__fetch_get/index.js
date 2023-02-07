import { header__access_token__verify } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { auth0_management__token_ } from '../auth0_management__token_/index.js'
/** @typedef {import('auth0').User}User */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./auth0__v2_user__fetch_get.d.ts').get_auth0_v2_user_params_T}params
 * @return {Promise<[User, Response]>}
 */
export async function auth0__v2_user__fetch_get(ctx, params) {
	const { AUTH0_DOMAIN, user_id } = params
	const auth0_token = await auth0_management__token_(ctx)
	const authorization = header__access_token__verify(auth0_token)
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
export {
	auth0__v2_user__fetch_get as get_auth0_v2_user,
}

