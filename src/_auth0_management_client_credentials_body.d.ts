import type { post_auth0_oauth_token_body_I } from '@ctx-core/auth0';
import { _auth0_audience_Ctx } from './_auth0_audience_b';
export interface _auth0_management_client_credentials_body_Ctx extends _auth0_audience_Ctx {
    _auth0_management_client_credentials_body?: _auth0_management_client_credentials_body_T;
}
export declare const _auth0_management_client_credentials_body_b: import("@ctx-core/object").Be<_auth0_management_client_credentials_body_Ctx, "_auth0_management_client_credentials_body">;
export declare type _auth0_management_client_credentials_body_T = () => post_auth0_oauth_token_body_I;
