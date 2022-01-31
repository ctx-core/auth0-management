import { verify_access_token_header_authorization, AUTH0_DOMAIN$_ } from '@ctx-core/auth0'
import { fetch } from '@ctx-core/fetch-undici'
import { query_str_ } from '@ctx-core/uri'
import { auth0_management_token_ } from './auth0_management_token_.js'
/** @typedef {import('auth0').CreateClientGrant}CreateClientGrant */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./get_auth0_v2_client_grants.d.ts').get_auth0_v2_client_grants_params_T}params
 * @return {Promise<[CreateClientGrant, Response]>}
 */
export async function get_auth0_v2_client_grants(ctx, params) {
	const { query, json } = params
	const auth0_token = await auth0_management_token_(ctx)
	const authorization = verify_access_token_header_authorization(auth0_token)
	const url = `https://${AUTH0_DOMAIN$_(ctx).$}/api/v2/client-grants?${query || query_str_(json)}`
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
