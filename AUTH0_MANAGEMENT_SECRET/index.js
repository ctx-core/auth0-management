import { import_meta_env_ } from 'ctx-core/env'
import { be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
export const [
	AUTH0_MANAGEMENT_SECRET$_,
	AUTH0_MANAGEMENT_SECRET_,
	AUTH0_MANAGEMENT_SECRET__set,
] = /** @type {be_atom_triple_T<string>} */ be_atom_triple_(()=>
	import_meta_env_().AUTH0_MANAGEMENT_SECRET)
export {
	AUTH0_MANAGEMENT_SECRET$_ as AUTH0_MANAGEMENT_SECRET__,
}
