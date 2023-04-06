import { Base } from '.'
import { PaginationResponse } from '../types'

export class Statistics extends Base {
	/**
	 * Returns a list of subscribers who opened this campaign.
	 */
	listCampaignOpens(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/opens`)
	}
	/**
	 * Returns a list of subscribers who clicked a link in this campaign.
	 */
	listCampaignClicks(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/clicks`)
	}
	/**
	 * Returns a list of subscribers who soft-bounced in this campaign.
	 */
	getSoftBouncesOfCampaign(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/soft_bounces`)
	}
	/**
	 * Returns a list of subscribers who hard-bounced in this campaign.
	 */
	getHardBouncesOfCampaign(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/hard_bounces`)
	}
	/**
	 * Returns a list of subscribers who unsubscribed from this campaign.
	 */
	getUnsubscribesOfCampaign(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/unsubscribes`)
	}
	/**
	 * Returns a list of subscribers who reported this campaign as spam.
	 */
	getSpamReportsOfCampaign(id: string) {
		return this.fetch<PaginationResponse>(`/campaigns/${id}/complaints`)
	}
}
