import { be_ } from '@ctx-core/object';
import { post_auth0_oauth_token_b } from '@ctx-core/auth0';
import { auth0_management_client_credentials_body__b } from './auth0_management_client_credentials_body__b';
const key = 'auth0_management_token_';
export const auth0_management_token__b = be_(key, ctx => {
    const post_auth0_oauth_token = post_auth0_oauth_token_b(ctx);
    const auth0_management_client_credentials_body_fn = auth0_management_client_credentials_body__b(ctx);
    return auth0_management_token_;
    async function auth0_management_token_() {
        const management_client_credentials = auth0_management_client_credentials_body_fn();
        const response = await post_auth0_oauth_token(management_client_credentials);
        return response.json();
    }
});
//# sourceMappingURL=src/auth0_management_token__b.js.map