#!/usr/bin/env node
import { ctx_ } from '@ctx-core/object'
import { get_auth0_v2_client_grants_b, auth0_audience__b } from '../src/index.js'
await main()
async function main() {
	const ctx = ctx_()
	const [json] = await get_auth0_v2_client_grants_b(ctx)({
		json: {
			client_id: process.env.AUTH0_CLIENT_ID,
			audience: auth0_audience__b(ctx)()
		}
	})
	console.info(JSON.stringify(json, null, 2))
}
