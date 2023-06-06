import { AUTH0_CLIENT_ID_, AUTH0_DOMAIN_, header__access_token__verify } from '@ctx-core/auth0'
import { fetch, fetch__template_pair_ } from '@ctx-core/fetch-undici'
import { auth0_management__token__new } from '../auth0_management__token__new/index.js'
/** @typedef {import('@ctx-core/fetch').response_pair_T}response_pair_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('auth0').Client}Client */
/** @typedef {import('./auth0__v2_client__GET__fetch2.d.ts').auth0__v2_client__GET__fetch__params_T}auth0__v2_client__GET__fetch__params_T */
export const [
	auth0__v2_client__GET__fetch,
	auth0__v2_client__GET__fetch2,
] = fetch__template_pair_(
	/**
	 * @param {Ctx}ctx
	 * @param {auth0__v2_client__GET__fetch__params_T}params
	 * @returns {Promise<response_pair_T<Client>>}
	 */
	async(
		ctx,
		params
	)=>{
		const {
			client_id = AUTH0_CLIENT_ID_(ctx),
			body,
			json,
		} = params
		const auth0_management__token = await auth0_management__token__new(ctx)
		const authorization = header__access_token__verify(auth0_management__token)
		const url = `https://${AUTH0_DOMAIN_(ctx)}/api/v2/clients/${client_id}`
		return fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization
			},
			body: body || JSON.stringify(json)
		})
	})
export {
	auth0__v2_client__GET__fetch2 as auth0__v2_client__fetch_get,
	auth0__v2_client__GET__fetch2 as patch_auth0_v2_client,
}
