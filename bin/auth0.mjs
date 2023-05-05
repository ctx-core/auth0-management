#!/usr/bin/env node
import { auth0_management__new } from '../src/index.js'
await main()
// auth0.js clientGrants getAll
async function main() {
	const rest_argv_a = process.argv.slice(2)
	const [arg_manager, arg_cmd, ...arg_a] = rest_argv_a
	const management_auth0 = auth0_management__new()
	const manager = management_auth0[arg_manager]
	if (!manager) throw new Error(`Invalid manager ${arg_manager}`)
	const cmd = manager[arg_cmd]
	if (!cmd) throw new Error(`Invalid manager ${arg_cmd}`)
	const rv = await cmd(...arg_a)
  console.info(JSON.stringify(rv))
}
