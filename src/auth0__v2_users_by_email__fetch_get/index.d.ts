import type { Auth0UserProfile } from 'auth0-js'
import type { Ctx } from '@ctx-core/object'
export declare function auth0__v2_users_by_email__fetch_get(
	ctx:Ctx, params:auth0__v2_users_by_email__fetch__params_T
):Promise<[Auth0UserProfile[], Response]>
export {
	auth0__v2_users_by_email__fetch_get as get_auth0_v2_users_by_email,
}
export declare type auth0__v2_users_by_email__fetch__params_T = {
	email:string
	AUTH0_DOMAIN?:string
}
export declare type get_auth0_v2_users_by_email_params_T = auth0__v2_users_by_email__fetch__params_T
