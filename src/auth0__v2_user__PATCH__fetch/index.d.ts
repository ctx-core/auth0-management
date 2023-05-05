import type { fetch__template_pair_T } from '@ctx-core/fetch'
import type { Ctx } from '@ctx-core/object'
import type { UpdateUserData, UserData } from 'auth0'
import type { Auth0Error } from 'auth0-js'
export declare const [
	auth0__v2_user__PATCH__fetch,
	auth0__v2_user__PATCH__fetch2,
]:fetch__template_pair_T<
	[
		ctx:Ctx,
		user_id:string,
		data:auth0__v2_user__PATCH__fetch__data_T
	],
	UpdateUserData|auth0__v2_user__PATCH__error_T
>
export {
	auth0__v2_user__PATCH__fetch2 as auth0__v2_user__fetch_patch,
	auth0__v2_user__PATCH__fetch2 as patch_auth0_v2_user,
}
export interface auth0__v2_user__PATCH__fetch__data_T extends Partial<UserData> {
	password?:string
}
export type auth0__v2_user__fetch_patch__params_T = auth0__v2_user__PATCH__fetch__data_T
export declare type patch_auth0_v2_user_data_T = auth0__v2_user__PATCH__fetch__data_T
export interface auth0__v2_user__PATCH__error_T extends Auth0Error {
	message:string
}
export type auth0__v2_user__fetch_patch__error_T = auth0__v2_user__PATCH__error_T
