#!/usr/bin/env node
require = require('esm')(module)
const { patch_auth0_v2_client } = require('@ctx-core/auth0-management')
main().then()
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
