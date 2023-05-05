import { import_meta_env_ } from '@ctx-core/env'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	AUTH0_MANAGEMENT_ID__,
	AUTH0_MANAGEMENT_ID_,
	AUTH0_MANAGEMENT_ID__set,
] = be_atom_triple_(()=>
	atom_(import_meta_env_().AUTH0_MANAGEMENT_ID))
