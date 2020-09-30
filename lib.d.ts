import { ManagementClient } from 'auth0';
declare type Params__management__auth0 = {
    domain?: string;
    clientId?: string;
    clientSecret?: string;
};
export declare function _management__auth0(params?: Params__management__auth0): ManagementClient<import("auth0").AppMetadata, import("auth0").UserMetadata>;
export {};
