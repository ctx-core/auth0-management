import type { Auth0UserProfile } from 'auth0-js';
import { B } from '@ctx-core/object';
import type { auth0_management_Ctx } from './auth0_management_Ctx';
declare const key = "patch_auth0_v2_user";
export declare const patch_auth0_v2_user_b: B<auth0_management_Ctx, typeof key>;
export interface patch_auth0_v2_user_data_I extends Partial<Auth0UserProfile> {
    password?: string;
}
export declare type patch_auth0_v2_user_T = (user_id: string, data: patch_auth0_v2_user_data_I) => Promise<Response>;
export {};
