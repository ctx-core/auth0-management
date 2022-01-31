/// <reference lib="dom" />
import { Ctx } from '@ctx-core/object'
import { User } from 'auth0'
export declare function get_auth0_v2_user(
	ctx:Ctx, params:get_auth0_v2_user_params_T
):Promise<[User, Response]>
export interface get_auth0_v2_user_params_T {
	AUTH0_DOMAIN:string;
	user_id:string;
}
