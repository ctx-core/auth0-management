import { ManagementClient } from 'auth0';
export declare function auth0_management_(params?: auth0_management_params_I): ManagementClient<import("auth0").AppMetadata, import("auth0").UserMetadata>;
export interface auth0_management_params_I {
    domain?: string;
    clientId?: string;
    clientSecret?: string;
}
