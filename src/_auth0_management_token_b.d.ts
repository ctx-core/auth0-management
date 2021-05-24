import { B } from '@ctx-core/object';
import { $auth0_token_T } from '@ctx-core/auth0';
import type { auth0_management_Ctx } from './auth0_management_Ctx';
declare const key = "_auth0_management_token";
export declare const _auth0_management_token_b: B<auth0_management_Ctx, typeof key>;
export declare type _auth0_management_token_T = () => Promise<$auth0_token_T>;
export {};
