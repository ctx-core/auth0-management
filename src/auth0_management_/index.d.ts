import type { Ctx } from '@ctx-core/object'
import type { AppMetadata, ManagementClient, UserMetadata } from 'auth0'
export declare function auth0_management_(
	ctx:Ctx,
	params?:auth0_management__params_T
):ManagementClient<AppMetadata, UserMetadata>
export interface auth0_management__params_T {
	AUTH0_DOMAIN?:string
	AUTH0_MANAGEMENT_ID?:string
	AUTH0_MANAGEMENT_SECRET?:string
}
export declare type auth0_management_params_I = auth0_management__params_T
