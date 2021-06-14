import { be_ } from '@ctx-core/object';
import { AUTH0_DOMAIN$_b } from '@ctx-core/auth0';
const key = 'auth0_audience_';
export const auth0_audience__b = be_(key, ctx => {
    const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx);
    return auth0_audience_fn;
    function auth0_audience_fn() {
        return `https://${AUTH0_DOMAIN$._}/api/v2/`;
    }
});
//# sourceMappingURL=src/auth0_audience__b.js.map