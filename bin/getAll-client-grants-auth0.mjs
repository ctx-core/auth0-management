#!/usr/bin/env node
import { import_meta_env_ } from '@ctx-core/env'
import { ctx__new } from '@ctx-core/object'
import { auth0__v2_client_grants__GET__fetch2, auth0__v2__url_ } from '../index.js'
await main()
async function main() {
	const ctx = ctx__new()
	const [json] = await auth0__v2_client_grants__GET__fetch2(ctx, {
		json: {
			client_id: import_meta_env_().AUTH0_CLIENT_ID,
			audience: auth0__v2__url_(ctx)
		}
	})
	console.info(JSON.stringify(json, null, 2))
}
