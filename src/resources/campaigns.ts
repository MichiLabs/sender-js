import { Base } from '.'
import { CreateResponse, PaginationResponse, Response } from '../types'

export class Campaigns extends Base {
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
	find(id: string) {
		return this.fetch<{ data: object }>(`/campaigns/${id}`)
	}
	send(id: string) {
		return this.fetch<Response>(`/campaigns/${id}/send`, {
			method: 'POST',
		})
	}
	scheduleSend(id: string, schedule_time: string) {
		return this.fetch<Response>(`/campaigns/${id}/schedule`, {
			method: 'POST',
			body: {
				schedule_time,
			},
		})
	}
	cancelSchedule(id: string) {
		return this.fetch<Response>(`/campaigns/${id}/schedule`, {
			method: 'DELETE',
		})
	}
	cancelFollowUp(id: string) {
		return this.fetch<Response>(`/campaigns/${id}/cancel_followup`, {
			method: 'POST',
		})
	}
	copy(id: string) {
		return this.fetch<CreateResponse>(`/campaigns/${id}/copy`, {
			method: 'POST',
		})
	}
	delete(ids: string[], status?: 'DRAFT' | 'SENT' | 'PENDING' | 'PREPARING') {
		return this.fetch<Response>(`/campaigns`, {
			method: 'DELETE',
			query: {
				ids,
				status,
			},
		})
	}
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
	errors(id: string) {
		return this.fetch<{ errors: object[]; warnings: object[] }>(
			`/campaigns/${id}/errors`
		)
	}
}
