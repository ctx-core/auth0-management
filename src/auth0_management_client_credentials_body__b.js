import { be_ } from '@ctx-core/object';
import { auth0_audience__b } from './auth0_audience__b';
const key = 'auth0_management_client_credentials_body_';
export const auth0_management_client_credentials_body__b = be_(key, ctx => {
    const auth0_audience_ = auth0_audience__b(ctx);
    return auth0_management_client_credentials_body_;
    function auth0_management_client_credentials_body_() {
        return {
            grant_type: 'client_credentials',
            client_id: process.env.AUTH0_MANAGEMENT_ID,
            client_secret: process.env.AUTH0_MANAGEMENT_SECRET,
            audience: auth0_audience_(),
        };
    }
});
//# sourceMappingURL=src/auth0_management_client_credentials_body__b.js.map