import { ofetch, $Fetch } from 'ofetch'
import {
	Subscribers,
	Groups,
	Segments,
	Fields,
	Statistics,
	Campaigns,
	Workflows,
} from './resources'

export class Sender {
	protected api: string
	protected fetch: $Fetch

	subscribers: Subscribers
	groups: Groups
	segments: Segments
	fields: Fields
	statistics: Statistics
	campaigns: Campaigns
	workflows: Workflows

	constructor(private readonly accessToken: string) {
		if (!accessToken) {
			throw new Error('Access token is required')
		}

		this.accessToken = accessToken

		this.api = 'https://api.sender.net/v2'

		this.fetch = ofetch.create({
			baseURL: this.api,
			headers: {
				'Authorization': `Bearer ${this.accessToken}`,
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		})

		this.subscribers = new Subscribers(this.fetch)
		this.groups = new Groups(this.fetch)
		this.segments = new Segments(this.fetch)
		this.fields = new Fields(this.fetch)
		this.statistics = new Statistics(this.fetch)
		this.campaigns = new Campaigns(this.fetch)
		this.workflows = new Workflows(this.fetch)
	}
}

export const createClient = (accessToken: string) => new Sender(accessToken)
