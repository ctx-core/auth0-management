#!/usr/bin/env node
import { ctx_ } from '@ctx-core/object'
import { patch_auth0_v2_client_b } from '../src/index.js'
await main()
async function main() {
	const ctx = ctx_()
	const [client] = await patch_auth0_v2_client_b(ctx)({
		json: {
			grant_types: [
				'password',
				'http://auth0.com/oauth/grant-type/password-realm',
			],
		},
	})
	console.info(JSON.stringify(client, null, 2))
}
