import type { UserProfile } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { Ctx } from 'ctx-core/be'
import type { fetch__template_pair_T } from 'ctx-core/fetch'
export declare const [
	auth0__v2_user__GET__fetch,
	auth0__v2_user__GET__fetch2,
]:fetch__template_pair_T<
	[
		ctx:Ctx,
		params:auth0__v2_user__GET__fetch__params_T
	],
	UserProfile|Auth0Error
>
export {
	auth0__v2_user__GET__fetch2 as auth0__v2_user__fetch_get,
	auth0__v2_user__GET__fetch2 as get_auth0_v2_user,
}
export interface auth0__v2_user__GET__fetch__params_T {
	AUTH0_DOMAIN?:string
	user_id:string
}
export type auth0__v2_user__fetch_get__params_T = auth0__v2_user__GET__fetch__params_T
export declare type get_auth0_v2_user_params_T = auth0__v2_user__GET__fetch__params_T

