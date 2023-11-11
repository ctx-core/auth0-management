import { AUTH0_DOMAIN__set } from '@ctx-core/auth0'
import { ctx__new } from '@ctx-core/object'
import { type Auth0UserProfile } from 'auth0-js'
import { restore, stub } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	auth0__v2_users_by_email__GET__fetch,
	auth0__v2_users_by_email__GET__fetch2,
	auth0_management__init
} from '../index.js'
test.after.each(()=>{
	restore()
})
test('auth0__v2_users_by_email__GET__fetch', async ()=>{
	const ctx = ctx__new()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	auth0_management__init(ctx, {
		AUTH0_MANAGEMENT_ID: 'AUTH0_MANAGEMENT_ID',
		AUTH0_MANAGEMENT_SECRET: 'AUTH0_MANAGEMENT_SECRET'
	})
	const user_a = user_a_()
	fetch__users_by_email__stub(user_a)
	const response = await auth0__v2_users_by_email__GET__fetch(ctx, {
		email: 'john.doe@gmail.com'
	})
	equal(await response.json(), user_a)
	equal(response.status, 200)
})
test('auth0__v2_users_by_email__GET__fetch2', async ()=>{
	const ctx = ctx__new()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	auth0_management__init(ctx, {
		AUTH0_MANAGEMENT_ID: 'AUTH0_MANAGEMENT_ID',
		AUTH0_MANAGEMENT_SECRET: 'AUTH0_MANAGEMENT_SECRET'
	})
	const user_a = user_a_()
	fetch__users_by_email__stub(user_a)
	const [payload, response] = await auth0__v2_users_by_email__GET__fetch2(ctx, {
		email: 'john.doe@gmail.com'
	})
	equal(payload, user_a)
	equal(response.status, 200)
})
test.run()
function fetch__users_by_email__stub(user_a:Auth0UserProfile[]) {
	const fetch = stub(globalThis, 'fetch')
	fetch
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
		access_token: 'access_token',
		token_type: 'Bearer',
	}), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}))
	fetch
	.withArgs('https://myapp.auth0.com/api/v2/users-by-email?email=john.doe%40gmail.com', {
		'method': 'GET',
		'headers': {
			'Content-Type': 'application/json',
			'authorization': 'Bearer access_token'
		}
	})
	.resolves(new Response(JSON.stringify(user_a), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}))
}
function user_a_():Auth0UserProfile[] {
	return [
		{
			'user_id': 'auth0|507f1f77bcf86cd799439020',
			'email': 'john.doe@gmail.com',
			'email_verified': false,
			'username': 'johndoe',
			'created_at': '',
			'updated_at': '',
			'identities': [
				{
					'connection': 'Initial-Connection',
					'user_id': '507f1f77bcf86cd799439020',
					'provider': 'auth0',
					'isSocial': false
				}
			],
			'app_metadata': {},
			'user_metadata': {},
			'picture': '',
			'name': '',
			'nickname': '',
			'given_name': '',
			'family_name': ''
		} as Auth0UserProfile
	]
}
