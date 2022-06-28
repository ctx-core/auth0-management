/// <reference lib="dom" />
import { type Auth0UserProfile } from 'auth0-js'
import { type Ctx } from '@ctx-core/object'
export declare function get_auth0_v2_users_by_email(
	ctx:Ctx, params:get_auth0_v2_users_by_email_params_T
):Promise<[Auth0UserProfile[], Response]>
export declare type get_auth0_v2_users_by_email_params_T = {
	email:string
	AUTH0_DOMAIN?:string
}
