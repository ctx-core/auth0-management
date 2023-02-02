import type { AppMetadata, ManagementClient, UserMetadata } from 'auth0'
export declare function auth0_management_(
	params?:auth0_management_params_I
):ManagementClient<AppMetadata, UserMetadata>
export interface auth0_management_params_I {
	domain?:string
	clientId?:string
	clientSecret?:string
}
