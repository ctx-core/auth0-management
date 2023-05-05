#!/usr/bin/env node
import { ctx_ } from '@ctx-core/object'
import { auth0__v2_client__GET__fetch2 } from '../src/index.js'
await main()
async function main() {
	const ctx = ctx_()
	const [client] = await auth0__v2_client__GET__fetch2(ctx, {
		json: {
			grant_types: [
				'password',
				'http://auth0.com/oauth/grant-type/password-realm',
			],
		},
	})
	console.info(JSON.stringify(client, null, 2))
}
