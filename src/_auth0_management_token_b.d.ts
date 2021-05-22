import { $auth0_token_T, post_auth0_oauth_token_Ctx } from '@ctx-core/auth0';
import { _auth0_management_client_credentials_body_Ctx } from './_auth0_management_client_credentials_body';
export interface _auth0_management_token_Ctx extends post_auth0_oauth_token_Ctx, _auth0_management_client_credentials_body_Ctx {
    _auth0_management_token?: _auth0_management_token_T;
}
export declare const _auth0_management_token_b: import("@ctx-core/object").Be<_auth0_management_token_Ctx, "_auth0_management_token", _auth0_management_token_T>;
export declare type _auth0_management_token_T = () => Promise<$auth0_token_T>;
