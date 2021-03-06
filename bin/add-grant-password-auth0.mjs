#!/usr/bin/env node
import { patch_auth0_v2_client } from '../dist/index.js'
await main()
async function main() {
	const response = await patch_auth0_v2_client({
		json: {
			grant_types: [
				'password',
				'http://auth0.com/oauth/grant-type/password-realm',
			],
		},
	})
	const json = await response.json()
	console.info(JSON.stringify(json, null, 2))
}
