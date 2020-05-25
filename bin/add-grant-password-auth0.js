#!/usr/bin/env node
import { patch__client__v2__auth0 } from '@ctx-core/auth0-management/fetch'
main()
async function main() {
	const response = await patch__client__v2__auth0({
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
