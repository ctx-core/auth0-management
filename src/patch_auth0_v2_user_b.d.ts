import type { Auth0UserProfile } from 'auth0-js';
import type { auth0_management_Ctx } from './auth0_management_Ctx';
export declare const patch_auth0_v2_user_b: import("@ctx-core/object").Be<auth0_management_Ctx, "patch_auth0_v2_user", patch_auth0_v2_user_T>;
export interface patch_auth0_v2_user_data_I extends Partial<Auth0UserProfile> {
    password?: string;
}
export declare type patch_auth0_v2_user_T = (user_id: string, data: patch_auth0_v2_user_data_I) => Promise<Response>;
