import { AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch__template_pair__new } from '@ctx-core/fetch'
import { query_str_ } from '@ctx-core/uri'
import { auth0_management__token__new } from '../auth0_management__token__new/index.js'
/** @typedef {import('@ctx-core/fetch').response_pair_T}response_pair_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('auth0').CreateClientGrant}CreateClientGrant */
/** @typedef {import('./auth0__v2_client_grants__GET__fetch2.d.ts').auth0__v2_client_grants__GET__fetch__params_T}auth0__v2_client_grants__GET__fetch__params_T */
export const [
	auth0__v2_client_grants__GET__fetch,
	auth0__v2_client_grants__GET__fetch2,
] = fetch__template_pair__new(
	/**
	 * @param {Ctx}ctx
	 * @param {auth0__v2_client_grants__GET__fetch__params_T}params
	 * @returns {Promise<response_pair_T<CreateClientGrant>>}
	 */
	async(ctx, params)=>{
		const { query, json } = params
		const auth0__token = await auth0_management__token__new(ctx)
		const authorization = header__access_token__verify(auth0__token)
		const url = `https://${AUTH0_DOMAIN_(ctx)}/api/v2/client-grants?${query || query_str_(json)}`
		return fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization
			}
		})
	}
)
export {
	auth0__v2_client_grants__GET__fetch2 as auth0__v2_client_grants__fetch_get,
	auth0__v2_client_grants__GET__fetch2 as get_auth0_v2_client_grants,
}
