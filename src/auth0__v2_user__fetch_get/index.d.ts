import type { Ctx } from '@ctx-core/object'
import type { User } from 'auth0'
export declare function auth0__v2_user__fetch_get(
	ctx:Ctx,
	params:auth0__v2_user__fetch_get__params_T
):Promise<[User, Response]>
export {
	auth0__v2_user__fetch_get as get_auth0_v2_user,
}
export interface auth0__v2_user__fetch_get__params_T {
	AUTH0_DOMAIN?:string
	user_id:string
}
export declare type get_auth0_v2_user_params_T = auth0__v2_user__fetch_get__params_T

