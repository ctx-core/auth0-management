import { AUTH0_DOMAIN__set } from '@ctx-core/auth0'
import { ctx_ } from '@ctx-core/object'
import { restore, stub } from 'sinon'
import { test } from 'uvu'
import { equal, throws } from 'uvu/assert'
import { AUTH0_MANAGEMENT_ID__set } from '../AUTH0_MANAGEMENT_ID$_/index.js'
import { AUTH0_MANAGEMENT_SECRET__set } from '../AUTH0_MANAGEMENT_SECRET$_/index.js'
import { auth0_management__token__new } from './index.js'
test.after.each(()=>restore())
test('auth0_management__token__new|error', async ()=>{
	const ctx = ctx_()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	AUTH0_MANAGEMENT_ID__set(ctx, 'AUTH0_MANAGEMENT_ID')
	AUTH0_MANAGEMENT_SECRET__set(ctx, 'AUTH0_MANAGEMENT_SECRET')
	const _stub = stub(globalThis, 'fetch')
		.withArgs('https://myapp.auth0.com/oauth/token', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				grant_type: 'client_credentials',
				client_id: 'AUTH0_MANAGEMENT_ID',
				client_secret: 'AUTH0_MANAGEMENT_SECRET',
				audience: 'https://myapp.auth0.com/api/v2/',
			})
		})
		.resolves(new Response(JSON.stringify({
			error: 'security error',
			error_description: 'invalid credentials'
		}), {
			status: 403,
			headers: {
				'Content-Type': 'application/json',
			}
		}))
	let err
	await auth0_management__token__new(ctx)
		.catch($err=>err = $err)
	equal(!!err, true)
	equal(err.message, 'security error: invalid credentials')
})
test.run()
