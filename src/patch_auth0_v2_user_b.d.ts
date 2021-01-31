import type { Auth0UserProfile } from 'auth0-js';
import { B } from '@ctx-core/object';
export declare const patch_auth0_v2_user_b: patch_auth0_v2_user_b_type;
export interface patch_auth0_v2_user_data_type extends Partial<Auth0UserProfile> {
    password?: string;
}
export declare type patch_auth0_v2_user_type = (user_id: string, data: patch_auth0_v2_user_data_type) => Promise<Response>;
export interface patch_auth0_v2_user_b_type extends B<patch_auth0_v2_user_type> {
}
