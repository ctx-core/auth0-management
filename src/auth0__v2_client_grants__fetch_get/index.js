import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { query_str_ } from '@ctx-core/uri'
import { auth0_management__token_ } from '../auth0_management__token_/index.js'
/** @typedef {import('auth0').CreateClientGrant}CreateClientGrant */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./auth0__v2_client_grants__fetch_get.d.ts').auth0__v2_client_grants__fetch__params_T}params
 * @return {Promise<[CreateClientGrant, Response]>}
 */
export async function auth0__v2_client_grants__fetch_get(
	ctx,
	params
) {
	const { query, json } = params
	const auth0__token = await auth0_management__token_(ctx)
	const authorization = header__access_token__verify(auth0__token)
	const url = `https://${AUTH0_DOMAIN_(ctx)}/api/v2/client-grants?${query || query_str_(json)}`
	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization
		}
	})
	/** @type {CreateClientGrant} */
	const create_client_grant = await res.json()
	return [create_client_grant, res]
}
export {
	auth0__v2_client_grants__fetch_get as get_auth0_v2_client_grants,
}
