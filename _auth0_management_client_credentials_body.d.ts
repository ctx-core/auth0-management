import { B } from '@ctx-core/object';
import type { auth0_client_id_body_type } from '@ctx-core/auth0';
export declare const _auth0_management_client_credentials_body_b: _auth0_management_client_credentials_body_b_type;
export interface auth0_management_client_credentials_body_type extends auth0_client_id_body_type {
    client_id: string;
    grant_type: string;
    client_secret: string;
    audience: string;
}
export declare type _auth0_management_client_credentials_body_type = () => auth0_management_client_credentials_body_type;
export interface _auth0_management_client_credentials_body_b_type extends B<_auth0_management_client_credentials_body_type> {
}
