import { AUTH0_DOMAIN__set } from '@ctx-core/auth0'
import { type UserProfile } from 'auth0'
import { ctx__new } from 'ctx-core/be'
import { restore, stub } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { auth0_management__init } from '../auth0_management__init/index.js'
import { auth0__v2_user__GET__fetch, auth0__v2_user__GET__fetch2 } from '../index.js'
test.after.each(()=>restore())
test('auth0__v2_user__GET__fetch', async ()=>{
	const ctx = ctx__new()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	auth0_management__init(ctx, {
		AUTH0_MANAGEMENT_ID: 'AUTH0_MANAGEMENT_ID',
		AUTH0_MANAGEMENT_SECRET: 'AUTH0_MANAGEMENT_SECRET'
	})
	const auth0__user = auth0__user__new()
	api_v2_user__stub(auth0__user)
	const response = await auth0__v2_user__GET__fetch(ctx, {
		user_id: '123'
	})
	equal(response.status, 200)
	equal(await response.json(), auth0__user)
})
test('auth0__v2_user__GET__fetch2', async ()=>{
	const ctx = ctx__new()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	auth0_management__init(ctx, {
		AUTH0_MANAGEMENT_ID: 'AUTH0_MANAGEMENT_ID',
		AUTH0_MANAGEMENT_SECRET: 'AUTH0_MANAGEMENT_SECRET'
	})
	const test__auth0__user = auth0__user__new()
	api_v2_user__stub(test__auth0__user)
	const [auth0__user, response] =
		await auth0__v2_user__GET__fetch2(ctx, {
			user_id: '123'
		})
	equal(response.status, 200)
	equal(auth0__user, test__auth0__user)
})
test.run()
function auth0__user__new() {
	return {
		'user_id': 'auth0|507f1f77bcf86cd799439020',
		'email': 'john.doe@gmail.com',
		'email_verified': false,
		'username': 'johndoe',
		'phone_number': '+199999999999999',
		'phone_verified': false,
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
		'multifactor': [
			''
		],
		'last_ip': '',
		'last_login': '',
		'logins_count': 0,
		'blocked': false,
		'given_name': '',
		'family_name': ''
	} as UserProfile
}
function api_v2_user__stub(auth0__user:UserProfile) {
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
	fetch.withArgs('https://myapp.auth0.com/api/v2/users/123')
		.resolves(new Response(JSON.stringify(auth0__user), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}))
}
