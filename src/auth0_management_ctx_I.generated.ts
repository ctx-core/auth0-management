import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { auth0_audience_fn_T } from './auth0_audience_fn_b'
import { auth0_audience_fn_b } from './auth0_audience_fn_b'
import type { auth0_management_client_credentials_body_fn_T } from './auth0_management_client_credentials_body_fn_b'
import { auth0_management_client_credentials_body_fn_b } from './auth0_management_client_credentials_body_fn_b'
import type { auth0_management_token_fn_T } from './auth0_management_token_fn_b'
import { auth0_management_token_fn_b } from './auth0_management_token_fn_b'
import type { get_auth0_v2_client_grants_T } from './get_auth0_v2_client_grants_b'
import { get_auth0_v2_client_grants_b } from './get_auth0_v2_client_grants_b'
import type { get_auth0_v2_user_T } from './get_auth0_v2_user_b'
import { get_auth0_v2_user_b } from './get_auth0_v2_user_b'
import type { get_auth0_v2_users_by_email_T } from './get_auth0_v2_users_by_email_b'
import { get_auth0_v2_users_by_email_b } from './get_auth0_v2_users_by_email_b'
import type { patch_auth0_v2_client_T } from './patch_auth0_v2_client_b'
import { patch_auth0_v2_client_b } from './patch_auth0_v2_client_b'
import type { patch_auth0_v2_user_T } from './patch_auth0_v2_user_b'
import { patch_auth0_v2_user_b } from './patch_auth0_v2_user_b'
export interface auth0_management_ctx_I {
	auth0_audience_fn?:auth0_audience_fn_T
	auth0_management_client_credentials_body_fn?:auth0_management_client_credentials_body_fn_T
	auth0_management_token_fn?:auth0_management_token_fn_T
	get_auth0_v2_client_grants?:get_auth0_v2_client_grants_T
	get_auth0_v2_user?:get_auth0_v2_user_T
	get_auth0_v2_users_by_email?:get_auth0_v2_users_by_email_T
	patch_auth0_v2_client?:patch_auth0_v2_client_T
	patch_auth0_v2_user?:patch_auth0_v2_user_T
	auth0_management_b_h?:auth0_management_b_h_T
}
export interface auth0_management_b_h_T {
	get auth0_audience_fn():auth0_audience_fn_T
	get auth0_management_client_credentials_body_fn():auth0_management_client_credentials_body_fn_T
	get auth0_management_token_fn():auth0_management_token_fn_T
	get get_auth0_v2_client_grants():get_auth0_v2_client_grants_T
	get get_auth0_v2_user():get_auth0_v2_user_T
	get get_auth0_v2_users_by_email():get_auth0_v2_users_by_email_T
	get patch_auth0_v2_client():patch_auth0_v2_client_T
	get patch_auth0_v2_user():patch_auth0_v2_user_T
}
export function auth0_management_b_h_b(ctx:auth0_management_ctx_I):B<auth0_management_ctx_I, 'auth0_management_b_h'> {
	return _b('auth0_management_b_h', ()=>{
		return {
			get auth0_audience_fn() { return auth0_audience_fn_b(ctx) },
			get auth0_management_client_credentials_body_fn() { return auth0_management_client_credentials_body_fn_b(ctx) },
			get auth0_management_token_fn() { return auth0_management_token_fn_b(ctx) },
			get get_auth0_v2_client_grants() { return get_auth0_v2_client_grants_b(ctx) },
			get get_auth0_v2_user() { return get_auth0_v2_user_b(ctx) },
			get get_auth0_v2_users_by_email() { return get_auth0_v2_users_by_email_b(ctx) },
			get patch_auth0_v2_client() { return patch_auth0_v2_client_b(ctx) },
			get patch_auth0_v2_user() { return patch_auth0_v2_user_b(ctx) }
		}
	})
}