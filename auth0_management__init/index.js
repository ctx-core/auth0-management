/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { import_meta_env_ } from '@ctx-core/env'
import { AUTH0_MANAGEMENT_ID__set } from '../AUTH0_MANAGEMENT_ID/index.js'
import { AUTH0_MANAGEMENT_SECRET__set } from '../AUTH0_MANAGEMENT_SECRET/index.js'
/** @typedef {Ctx} */
/** @typedef {auth0_management__init__params_T} */
/**
 * @param {Ctx}ctx
 * @param {auth0_management__init__params_T}params
 */
export function auth0_management__init(
	ctx, params
) {
	AUTH0_MANAGEMENT_ID__set(ctx,
		params.AUTH0_MANAGEMENT_ID
		|| import_meta_env_().AUTH0_MANAGEMENT_ID)
	AUTH0_MANAGEMENT_SECRET__set(ctx,
		params.AUTH0_MANAGEMENT_SECRET
		|| import_meta_env_().AUTH0_MANAGEMENT_SECRET)
}
