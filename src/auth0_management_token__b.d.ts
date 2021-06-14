import { B } from '@ctx-core/object';
import { auth0_token_T } from '@ctx-core/auth0';
import type { auth0_management_Ctx } from './auth0_management_Ctx';
declare const key = "auth0_management_token_";
export declare const auth0_management_token__b: B<auth0_management_Ctx, typeof key>;
export declare type auth0_management_token__T = () => Promise<auth0_token_T>;
export {};
