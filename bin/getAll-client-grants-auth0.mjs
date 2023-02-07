#!/usr/bin/env node
import { ctx_ } from '@ctx-core/object'
import { auth0__v2_client_grants__fetch_get, auth0__v2__url_ } from '../src/index.js'
await main()
async function main() {
	const ctx = ctx_()
	const [json] = await auth0__v2_client_grants__fetch_get(ctx, {
		json: {
			client_id: process.env.AUTH0_CLIENT_ID,
			audience: auth0__v2__url_(ctx)
		}
	})
	console.info(JSON.stringify(json, null, 2))
}
