/// <reference lib="dom" />
import { B } from '@ctx-core/object'
import type { UserData, UpdateUserData } from 'auth0'
import type { Auth0Error } from 'auth0-js'
export declare const patch_auth0_v2_user_b:B<patch_auth0_v2_user_T>
export interface patch_auth0_v2_user_data_I extends Partial<UserData> {
	password?:string;
}
export declare type patch_auth0_v2_user_T =
	(user_id:string, data:patch_auth0_v2_user_data_I)=>Promise<[UpdateUserData|Auth0Error, Response]>;
