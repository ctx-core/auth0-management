#!/usr/bin/env node
require = require('esm')(module)
const { auth0_management_fn, get_auth0_v2_client_grants, _audience } = require('@ctx-core/auth0-management')
//main()
main2().then()
async function main() {
	const management_auth0 = auth0_management_fn()
	const clientGrant_a1 = await management_auth0.clientGrants.getAll()
	console.info(JSON.stringify(clientGrant_a1, null, 2))
}
async function main2() {
  const response = await get_auth0_v2_client_grants({
		json: {
			client_id: process.env.AUTH0_CLIENT_ID,
			audience: _audience()
		}
	})
	const json = await response.json()
	console.info(JSON.stringify(json, null, 2))
}
