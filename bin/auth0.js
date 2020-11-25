#!/usr/bin/env node
require = require('esm')(module)
const { _auth0_management } = require('@ctx-core/auth0-management')
main()
// auth0.js clientGrants getAll
async function main() {
	const a1__argv__rest = process.argv.slice(2)
	const [manager__arg, cmd__arg, ...arg_a1] = a1__argv__rest
	const auth0__management = _auth0_management()
	const manager = auth0__management[manager__arg]
	if (!manager) throw `Invalid manager ${manager__arg}`
	const cmd = manager[cmd__arg]
	if (!cmd) throw `Invalid manager ${cmd__arg}`
	const rv = await cmd(...arg_a1)
  console.info(JSON.stringify(rv))
}
