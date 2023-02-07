import type { AppMetadata, ManagementClient, UserMetadata } from 'auth0'
export declare function auth0_management_(
	params?:auth0_management__params_T
):ManagementClient<AppMetadata, UserMetadata>
export interface auth0_management__params_T {
	domain?:string
	clientId?:string
	clientSecret?:string
}
export declare type auth0_management_params_I = auth0_management__params_T
