import { $Fetch } from 'ofetch'

export class Base {
	protected fetch: $Fetch
	constructor(fetch: $Fetch) {
		this.fetch = fetch
	}
}

export { Subscribers } from './subscribers'
export { Groups } from './groups'
export { Segments } from './segments'
export { Fields } from './fields'
export { Statistics } from './statistics'
export { Campaigns } from './campaigns'
export { Workflows } from './workflows'
