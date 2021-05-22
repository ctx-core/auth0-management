import { AUTH0_DOMAIN_Ctx } from '@ctx-core/auth0';
export interface _auth0_audience_Ctx extends AUTH0_DOMAIN_Ctx {
    _auth0_audience?: _auth0_audience_T;
}
export declare type _auth0_audience_T = () => string;
export declare const _auth0_audience_b: import("@ctx-core/object").Be<_auth0_audience_Ctx, "_auth0_audience", _auth0_audience_T>;
