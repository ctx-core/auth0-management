import { ManagementClient } from 'auth0';
export declare function _auth0_management(params?: auth0_management_params_type): ManagementClient<import("auth0").AppMetadata, import("auth0").UserMetadata>;
export interface auth0_management_params_type {
    domain?: string;
    clientId?: string;
    clientSecret?: string;
}
