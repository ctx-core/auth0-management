import type { Ctx } from '@ctx-core/object'
import type { UpdateUserData, UserData } from 'auth0'
import type { Auth0Error } from 'auth0-js'
export declare function auth0__v2_user__fetch_patch(
	ctx:Ctx,
	user_id:string,
	data:auth0__v2_user__fetch_patch__data_T
):Promise<[UpdateUserData|auth0__v2_user__fetch_patch__error_T, Response]>
export {
	auth0__v2_user__fetch_patch as patch_auth0_v2_user,
}
export interface auth0__v2_user__fetch_patch__data_T extends Partial<UserData> {
	password?:string
}
export declare type patch_auth0_v2_user_data_T = auth0__v2_user__fetch_patch__data_T
export interface auth0__v2_user__fetch_patch__error_T extends Auth0Error {
	message:string
}
