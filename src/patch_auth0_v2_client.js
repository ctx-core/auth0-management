import { verify_access_token_header_authorization, AUTH0_DOMAIN$_ } from '@ctx-core/auth0'
import { fetch, headers_ } from '@ctx-core/fetch-undici'
import { auth0_management_token_ } from './auth0_management_token_.js'
/** @typedef {import('auth0').Client}Client */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./patch_auth0_v2_client.d.ts').patch_auth0_v2_client_params_T}params
 * @return {Promise<[Client, Response]>}
 */
export async function patch_auth0_v2_client(ctx, params) {
	const { client_id = process.env.AUTH0_CLIENT_ID, body, json, } = params
	const auth0_token = await auth0_management_token_(ctx)
	const authorization = verify_access_token_header_authorization(auth0_token)
	const url = `https://${AUTH0_DOMAIN$_(ctx).$}/api/v2/clients/${client_id}`
	const res = await fetch(url, {
		method: 'PATCH',
		headers: headers_({
			'Content-Type': 'application/json',
			authorization
		}),
		body: body || JSON.stringify(json)
	})
	/** @type {Client} */
	const client = await res.json()
	return [client, res]
}
