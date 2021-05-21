import { AUTH0_DOMAIN_ctx_I } from '@ctx-core/auth0';
export interface _auth0_audience_ctx_I extends AUTH0_DOMAIN_ctx_I {
    _auth0_audience?: _auth0_audience_T;
}
export declare type _auth0_audience_T = () => string;
export declare const _auth0_audience_b: import("@ctx-core/object").Be<_auth0_audience_ctx_I, "_auth0_audience">;
