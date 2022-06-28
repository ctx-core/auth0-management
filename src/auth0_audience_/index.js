import { AUTH0_DOMAIN__ } from '@ctx-core/auth0'
/** @type {import('./auth0_audience_.d.ts').auth0_audience_} */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {string}
 */
export function auth0_audience_(ctx) {
	return `https://${AUTH0_DOMAIN__(ctx).$}/api/v2/`
}
