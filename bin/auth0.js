#!/usr/bin/env node
require = require('esm')(module)
const { auth0_management_fn } = require('@ctx-core/auth0-management')
main().then()
// auth0.js clientGrants getAll
async function main() {
	const rest_argv_a1 = process.argv.slice(2)
	const [arg_manager, arg_cmd, ...arg_a] = rest_argv_a1
	const management_auth0 = auth0_management_fn()
	const manager = management_auth0[arg_manager]
	if (!manager) throw `Invalid manager ${arg_manager}`
	const cmd = manager[arg_cmd]
	if (!cmd) throw `Invalid manager ${arg_cmd}`
	const rv = await cmd(...arg_a)
  console.info(JSON.stringify(rv))
}
