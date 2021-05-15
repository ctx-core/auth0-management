import { B } from '@ctx-core/object';
import type { post_auth0_oauth_token_body_I } from '@ctx-core/auth0';
import { _auth0_audience_ctx_I } from './_auth0_audience_b';
export declare const _auth0_management_client_credentials_body_b: _auth0_management_client_credentials_body_b_T;
export interface _auth0_management_client_credentials_body_ctx_I extends _auth0_audience_ctx_I {
    _auth0_management_client_credentials_body?: _auth0_management_client_credentials_body_T;
}
export declare type _auth0_management_client_credentials_body_T = () => post_auth0_oauth_token_body_I;
export interface _auth0_management_client_credentials_body_b_T extends B<_auth0_management_client_credentials_body_T> {
}
