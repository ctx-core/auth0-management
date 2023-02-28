import { import_meta_env_ } from '@ctx-core/env'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').AUTH0_MANAGEMENT_SECRET__} */
export const AUTH0_MANAGEMENT_SECRET__ = be_('AUTH0_MANAGEMENT_SECRET__', ()=>
	atom_(import_meta_env_().AUTH0_MANAGEMENT_SECRET))
export function AUTH0_MANAGEMENT_SECRET_(ctx) {
	return AUTH0_MANAGEMENT_SECRET__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {string}AUTH0_MANAGEMENT_SECRET
 */
export function AUTH0_MANAGEMENT_SECRET__set(ctx, AUTH0_MANAGEMENT_SECRET) {
  AUTH0_MANAGEMENT_SECRET__(ctx).$ = AUTH0_MANAGEMENT_SECRET
}
