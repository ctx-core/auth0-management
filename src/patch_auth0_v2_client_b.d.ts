import { B } from '@ctx-core/object';
import type { auth0_management_Ctx } from './auth0_management_Ctx';
declare const key = "patch_auth0_v2_client";
export declare const patch_auth0_v2_client_b: B<auth0_management_Ctx, typeof key>;
export interface patch_auth0_v2_client_params_T {
    client_id?: string;
    body?: string;
    json?: unknown;
}
export declare type patch_auth0_v2_client_T = (params: patch_auth0_v2_client_params_T) => Promise<Response>;
export {};
