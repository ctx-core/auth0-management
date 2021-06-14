import type { auth0_audience__T } from './auth0_audience__b';
import type { auth0_management_client_credentials_body__T } from './auth0_management_client_credentials_body__b';
import type { auth0_management_token__T } from './auth0_management_token__b';
import type { get_auth0_v2_client_grants_T } from './get_auth0_v2_client_grants_b';
import type { get_auth0_v2_user_T } from './get_auth0_v2_user_b';
import type { get_auth0_v2_users_by_email_T } from './get_auth0_v2_users_by_email_b';
import type { patch_auth0_v2_client_T } from './patch_auth0_v2_client_b';
import type { patch_auth0_v2_user_T } from './patch_auth0_v2_user_b';
export interface auth0_management_ctx_I {
    auth0_audience_?: auth0_audience__T;
    auth0_management_client_credentials_body_?: auth0_management_client_credentials_body__T;
    auth0_management_token_?: auth0_management_token__T;
    get_auth0_v2_client_grants?: get_auth0_v2_client_grants_T;
    get_auth0_v2_user?: get_auth0_v2_user_T;
    get_auth0_v2_users_by_email?: get_auth0_v2_users_by_email_T;
    patch_auth0_v2_client?: patch_auth0_v2_client_T;
    patch_auth0_v2_user?: patch_auth0_v2_user_T;
}
