import type { ManagementClient } from 'auth0'
import type { Ctx } from 'ctx-core/be'
export declare function auth0_management__new(
	ctx:Ctx,
	params?:auth0_management__params_T
):ManagementClient
export {
	auth0_management__new as auth0_management_
}
export interface auth0_management__params_T {
	AUTH0_DOMAIN?:string
	AUTH0_MANAGEMENT_ID?:string
	AUTH0_MANAGEMENT_SECRET?:string
}
export declare type auth0_management_params_I = auth0_management__params_T
