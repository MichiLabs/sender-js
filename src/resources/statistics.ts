import { Base } from '.'
import { PaginationResponse } from '../types'

export class Statistics extends Base {
	listCampaignOpens(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/opens`)
	}
	listCampaignClicks(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/clicks`)
	}
	getSoftBouncesOfCampaign(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/soft_bounces`)
	}
	getHardBouncesOfCampaign(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/hard_bounces`)
	}
	getUnsubscribesOfCampaign(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/unsubscribes`)
	}
	getSpamReportsOfCampaign(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/complaints`)
	}
}
