import { Base } from '.'
import { CreateResponse, PaginationResponse, Response } from '../types'

export class Campaigns extends Base {
	/**
	 * Returns a list of all campaigns.
	 */
	list(
		filter?: Partial<{
			limit: number
			status: 'SCHEDULED' | 'SENDING' | 'SENT' | 'DRAFT'
		}>
	) {
		return this.fetch<PaginationResponse>('/campaigns', {
			query: filter,
		})
	}
	/**
	 * Get a specific campaign.
	 */
	find(id: string) {
		return this.fetch<{ data: object }>(`/campaigns/${id}`)
	}
	/**
	 * Starts sending the campaign.
	 */
	send(id: string) {
		return this.fetch<Response>(`/campaigns/${id}/send`, {
			method: 'POST',
		})
	}
	/**
	 * Specify a date and time when the campaign should be sent.
	 */
	scheduleSend(id: string, schedule_time: string) {
		return this.fetch<Response>(`/campaigns/${id}/schedule`, {
			method: 'POST',
			body: {
				schedule_time,
			},
		})
	}
	/**
	 * Cancel a campaign that is scheduled to be sent.
	 */
	cancelSchedule(id: string) {
		return this.fetch<Response>(`/campaigns/${id}/schedule`, {
			method: 'DELETE',
		})
	}
	/**
	 * Cancel the automatic follow-up to this campaign, if it is enabled.
	 */
	cancelFollowUp(id: string) {
		return this.fetch<Response>(`/campaigns/${id}/cancel_followup`, {
			method: 'POST',
		})
	}
	/**
	 * Would make a copy of the specified campaign.
	 */
	copy(id: string) {
		return this.fetch<CreateResponse>(`/campaigns/${id}/copy`, {
			method: 'POST',
		})
	}
	/**
	 * Deletes one or more campaigns.
	 */
	delete(ids: string[], status?: 'DRAFT' | 'SENT' | 'PENDING' | 'PREPARING') {
		return this.fetch<Response>(`/campaigns`, {
			method: 'DELETE',
			query: {
				ids,
				status,
			},
		})
	}
	/**
	 * Use this API method to create a new campaign from scratch. Specify the group or segment IDs that this campaign will be sent to.
	 *
	 * You can use API to provide plain text or a custom HTML campaign content. For drag&drop templates, you must create its content in your Sender application interface.
	 */
	create(data: {
		title?: string
		subject: string
		from: string
		reply_to: string
		content_type: 'editor' | 'html' | 'text'
		google_analytics?: number
		auto_followup_subject?: string
		auto_followup_delay?: 12 | 24 | 48 | 72 | 96 | 120 | 144 | 168
		auto_followup_active?: boolean
		groups?: string[]
		segments?: string[]
		content?: string
	}) {
		return this.fetch<CreateResponse>('/campaigns', {
			method: 'POST',
			body: data,
		})
	}
	/**
	 * Returns a list of errors with reasons why this campaign cannot be sent.
	 */
	errors(id: string) {
		return this.fetch<{ errors: object[]; warnings: object[] }>(
			`/campaigns/${id}/errors`
		)
	}
}
