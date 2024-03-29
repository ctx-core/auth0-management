import type { UserProfile, UserUpdate } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { ctx_T } from 'ctx-core/be'
import type { fetch__template_pair_T } from 'ctx-core/fetch'
export declare const [
	auth0__v2_user__PATCH__fetch,
	auth0__v2_user__PATCH__fetch2,
]:fetch__template_pair_T<
	[
		ctx:ctx_T,
		user_id:string,
		data:auth0__v2_user__PATCH__fetch__data_T
	],
	UserUpdate|auth0__v2_user__PATCH__error_T
>
export {
	auth0__v2_user__PATCH__fetch2 as auth0__v2_user__fetch_patch,
	auth0__v2_user__PATCH__fetch2 as patch_auth0_v2_user,
}
export interface auth0__v2_user__PATCH__fetch__data_T extends Partial<UserProfile> {
	password?:string
}
export type auth0__v2_user__fetch_patch__params_T = auth0__v2_user__PATCH__fetch__data_T
export declare type patch_auth0_v2_user_data_T = auth0__v2_user__PATCH__fetch__data_T
export interface auth0__v2_user__PATCH__error_T extends Auth0Error {
	message:string
}
export type auth0__v2_user__fetch_patch__error_T = auth0__v2_user__PATCH__error_T
