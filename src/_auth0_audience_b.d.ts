import { B } from '@ctx-core/object';
import { AUTH0_DOMAIN_ctx_I } from '@ctx-core/auth0';
export declare const _auth0_audience_b: _auth0_audience_b_T;
export interface _auth0_audience_ctx_I extends AUTH0_DOMAIN_ctx_I {
    _auth0_audience?: _auth0_audience_T;
}
export declare type _auth0_audience_T = () => string;
export interface _auth0_audience_b_T extends B<_auth0_audience_T> {
}
