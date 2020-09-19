#!/usr/bin/env node
require = require('esm')(module)
const { _management__auth0 } = require('@ctx-core/auth0-management')
main()
// auth0.js clientGrants getAll
async function main() {
	const a1__argv__rest = process.argv.slice(2)
	const [manager__arg, cmd__arg, ...arg_a1] = a1__argv__rest
	const auth0__management = _management__auth0()
	const manager = auth0__management[manager__arg]
	if (!manager) throw `Invalid manager ${manager__arg}`
	const cmd = manager[cmd__arg]
	if (!cmd) throw `Invalid manager ${cmd__arg}`
	const rv = await cmd(...arg_a1)
  console.info(JSON.stringify(rv))
}
