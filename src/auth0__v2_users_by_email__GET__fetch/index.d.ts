import type { fetch__template_pair_T } from '@ctx-core/fetch'
import type { Ctx } from '@ctx-core/object'
import type { Auth0UserProfile } from 'auth0-js'
export declare const [
	auth0__v2_users_by_email__GET__fetch,
	auth0__v2_users_by_email__GET__fetch2,
]:fetch__template_pair_T<
	[
		ctx:Ctx,
		params:auth0__v2_users_by_email__GET__fetch__params_T
	],
	Auth0UserProfile[]
>
export {
	auth0__v2_users_by_email__GET__fetch2 as auth0__v2_users_by_email__fetch_get,
	auth0__v2_users_by_email__GET__fetch2 as get_auth0_v2_users_by_email,
}
export declare type auth0__v2_users_by_email__GET__fetch__params_T = {
	email:string
	AUTH0_DOMAIN?:string
}
export type auth0__v2_users_by_email__fetch_get__params_T = auth0__v2_users_by_email__GET__fetch__params_T
export declare type get_auth0_v2_users_by_email_params_T = auth0__v2_users_by_email__GET__fetch__params_T
