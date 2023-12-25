import type { UserProfile } from 'auth0'
import { ctx__new } from 'ctx-core/be'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { auth0__user$_, auth0__user_, auth0__user__set } from '../index.js'
test('auth0__user', ()=>{
	const ctx = ctx__new()
	const auth0__user = auth0__user__new()
	equal(auth0__user$_(ctx)(), undefined)
	equal(auth0__user_(ctx), undefined)
	auth0__user__set(ctx, auth0__user)
	equal(auth0__user$_(ctx)(), auth0__user)
	equal(auth0__user_(ctx), auth0__user)
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
