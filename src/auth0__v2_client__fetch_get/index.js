import { header__access_token__verify, AUTH0_DOMAIN__ } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { auth0_management__token_ } from '../auth0_management__token_/index.js'
/** @typedef {import('auth0').Client}Client */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./auth0__v2_client__fetch_get.d.ts').auth0__v2_client__fetch__params_T}params
 * @return {Promise<[Client, Response]>}
 */
export async function auth0__v2_client__fetch_get(ctx, params) {
	const { client_id = process.env.AUTH0_CLIENT_ID, body, json, } = params
	const auth0_management__token = await auth0_management__token_(ctx)
	const authorization = header__access_token__verify(auth0_management__token)
	const url = `https://${AUTH0_DOMAIN__(ctx).$}/api/v2/clients/${client_id}`
	const res = await fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			authorization
		},
		body: body || JSON.stringify(json)
	})
	/** @type {Client} */
	const client = await res.json()
	return [client, res]
}
export {
	auth0__v2_client__fetch_get as patch_auth0_v2_client,
}
