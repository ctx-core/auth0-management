/// <reference lib="dom" />
import type { Ctx } from '@ctx-core/object'
import type { UpdateUserData, UserData } from 'auth0'
import type { Auth0Error } from 'auth0-js'
export declare function patch_auth0_v2_user(
	ctx:Ctx, user_id:string, data:patch_auth0_v2_user_data_T
):Promise<[UpdateUserData|Auth0Error, Response]>
export interface patch_auth0_v2_user_data_T extends Partial<UserData> {
	password?:string
}
