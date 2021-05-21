import type { Auth0UserProfile } from 'auth0-js';
import { AUTH0_DOMAIN_Ctx } from '@ctx-core/auth0';
import { _auth0_management_token_Ctx } from './_auth0_management_token_b';
export interface patch_auth0_v2_user_Ctx extends _auth0_management_token_Ctx, AUTH0_DOMAIN_Ctx {
    patch_auth0_v2_user?: patch_auth0_v2_user_T;
}
export declare const patch_auth0_v2_user_b: import("@ctx-core/object").Be<patch_auth0_v2_user_Ctx, "patch_auth0_v2_user">;
export interface patch_auth0_v2_user_data_I extends Partial<Auth0UserProfile> {
    password?: string;
}
export declare type patch_auth0_v2_user_T = (user_id: string, data: patch_auth0_v2_user_data_I) => Promise<Response>;
