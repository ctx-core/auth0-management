import { AUTH0_DOMAIN__set } from '@ctx-core/auth0'
import { ctx_ } from '@ctx-core/object'
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
	const ctx = ctx_()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	auth0_management__init(ctx, {
		AUTH0_MANAGEMENT_ID: 'AUTH0_MANAGEMENT_ID',
		AUTH0_MANAGEMENT_SECRET: 'AUTH0_MANAGEMENT_SECRET'
	})
	const user_a = user_a_()
	fetch__users_by_email__stub()
	const response = await auth0__v2_users_by_email__GET__fetch(ctx, {
		email: 'john.doe@gmail.com'
	})
	equal(await response.json(), user_a)
	equal(response.status, 200)
	function fetch__users_by_email__stub() {
		stub(globalThis, 'fetch')
			.withArgs('https://myapp.auth0.com/api/v2/users-by-email?email=john.doe%40gmail.com', {
				headers: {
					'Content-Type': 'application/json',
					authorization: 'Bearer access_token',
				}
			})
			.resolves(new Response(JSON.stringify(user_a), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}))
	}
})
test('auth0__v2_users_by_email__GET__fetch2', async ()=>{
	const ctx = ctx_()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	auth0_management__init(ctx, {
		AUTH0_MANAGEMENT_ID: 'AUTH0_MANAGEMENT_ID',
		AUTH0_MANAGEMENT_SECRET: 'AUTH0_MANAGEMENT_SECRET'
	})
	const user_a = user_a_()
	const [payload, response] = await auth0__v2_users_by_email__GET__fetch2(ctx, {
		email: 'john.doe@gmail.com'
	})
	equal(payload, user_a)
	equal(response.status, 200)
	function fetch__users_by_email__stub() {
		stub(globalThis, 'fetch')
			.withArgs('https://myapp.auth0.com/api/v2/users-by-email', {
				headers: {
					'Content-Type': 'application/json',
					authorization: 'Bearer access_token',
				}
			})
			.resolves(new Response(JSON.stringify(user_a), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}))
	}
})
test.run()
function user_a_() {
	return [
		{
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
		}
	]
}
