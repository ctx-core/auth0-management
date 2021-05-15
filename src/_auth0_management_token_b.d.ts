import { B } from '@ctx-core/object';
import { $auth0_token_T, post_auth0_oauth_token_ctx_I } from '@ctx-core/auth0';
import { _auth0_management_client_credentials_body_ctx_I } from './_auth0_management_client_credentials_body';
export declare const _auth0_management_token_b: _auth0_management_token_b_T;
export interface _auth0_management_token_ctx_I extends post_auth0_oauth_token_ctx_I, _auth0_management_client_credentials_body_ctx_I {
    _auth0_management_token?: _auth0_management_token_T;
}
export declare type _auth0_management_token_T = () => Promise<$auth0_token_T>;
export interface _auth0_management_token_b_T extends B<_auth0_management_token_T> {
}
