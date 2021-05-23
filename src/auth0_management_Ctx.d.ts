import type { _auth0_audience_T } from './_auth0_audience_b';
import type { auth0_Ctx } from '@ctx-core/auth0/src/auth0_Ctx';
import type { _auth0_management_client_credentials_body_T } from './_auth0_management_client_credentials_body';
import type { _auth0_management_token_T } from './_auth0_management_token_b';
import type { get_auth0_v2_client_grants_T } from './get_auth0_v2_client_grants_b';
import type { get_auth0_v2_user_T } from './get_auth0_v2_user_b';
import type { get_auth0_v2_users_by_email_T } from './get_auth0_v2_users_by_email_b';
import type { patch_auth0_v2_client_T } from './patch_auth0_v2_client_b';
import type { patch_auth0_v2_user_T } from './patch_auth0_v2_user_b';
export interface auth0_management_Ctx extends auth0_Ctx {
    _auth0_audience?: _auth0_audience_T;
    _auth0_management_client_credentials_body?: _auth0_management_client_credentials_body_T;
    _auth0_management_token?: _auth0_management_token_T;
    get_auth0_v2_client_grants?: get_auth0_v2_client_grants_T;
    get_auth0_v2_user?: get_auth0_v2_user_T;
    get_auth0_v2_users_by_email?: get_auth0_v2_users_by_email_T;
    patch_auth0_v2_client?: patch_auth0_v2_client_T;
    patch_auth0_v2_user?: patch_auth0_v2_user_T;
}
