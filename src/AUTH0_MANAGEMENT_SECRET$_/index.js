import { import_meta_env_ } from '@ctx-core/env'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	AUTH0_MANAGEMENT_SECRET$_,
	AUTH0_MANAGEMENT_SECRET_,
	AUTH0_MANAGEMENT_SECRET__set,
] = be_atom_triple_(()=>
	atom_(import_meta_env_().AUTH0_MANAGEMENT_SECRET))
export {
	AUTH0_MANAGEMENT_SECRET$_ as AUTH0_MANAGEMENT_SECRET__,
}
