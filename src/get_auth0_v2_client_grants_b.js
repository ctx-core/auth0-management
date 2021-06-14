import { be_ } from '@ctx-core/object';
import { _query_str } from '@ctx-core/uri';
import { get } from '@ctx-core/store';
import { fetch } from '@ctx-core/fetch';
import { verify_access_token_header_authorization_, AUTH0_DOMAIN$_b } from '@ctx-core/auth0';
import { auth0_management_token__b } from './auth0_management_token__b';
const key = 'get_auth0_v2_client_grants';
export const get_auth0_v2_client_grants_b = be_(key, ctx => {
    const auth0_management_token_ = auth0_management_token__b(ctx);
    const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx);
    return get_auth0_v2_client_grants;
    async function get_auth0_v2_client_grants(params) {
        const { query, json } = params;
        const auth0_token = await auth0_management_token_();
        const authorization = verify_access_token_header_authorization_(auth0_token);
        const url = `https://${get(AUTH0_DOMAIN$)}/api/v2/client-grants?${query || _query_str(json)}`;
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization,
            },
        });
    }
});
//# sourceMappingURL=src/get_auth0_v2_client_grants_b.js.map