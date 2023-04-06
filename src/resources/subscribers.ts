import { Base } from '.'
import { CreateResponse, Response, SubscribersListResponse } from '../types'

export class Subscribers extends Base {
	list() {
		return this.fetch<SubscribersListResponse>('/subscribers')
	}
	find(email: string) {
		return this.fetch<{ data: object }>(`/subscribers/${email}`)
	}
	create(
		email: string,
		information?: Partial<{
			firstname: string
			lastname: string
			groups: string[]
			fields: object
			phone: string
			trigger_automation: boolean
		}>
	) {
		return this.fetch<CreateResponse>('/subscribers', {
			method: 'POST',
			body: { email, ...information },
		})
	}
	update(
		email: string,
		information?: Partial<{
			firstname: string
			lastname: string
			groups: string[]
			fields: object
			phone: string
			trigger_automation: boolean
		}>
	) {
		return this.fetch<Response>(`/subscribers/${email}`, {
			method: 'PATCH',
			body: information,
		})
	}
	getSubscriberEvents(
		email: string,
		actions: 'opened' | 'bounced' | 'clicked' | 'unsubscribed' | 'got'[]
	) {
		return this.fetch<object[]>(`/subscribers/${email}/events`, {
			query: {
				actions,
			},
		})
	}
	delete(subscribers: string[]) {
		return this.fetch<Response>(`/subscribers`, {
			method: 'DELETE',
			body: {
				subscribers,
			},
		})
	}
	addToGroup(
		groupId: string,
		subscribers: string[],
		options?: Partial<{
			trigger_automation: boolean
		}>
	) {
		return this.fetch<Response>(`/subscribers/groups/${groupId}`, {
			method: 'POST',
			body: {
				subscribers,
				...options,
			},
		})
	}
	removeFromGroup(groupId: string, subscribers: string[]) {
		return this.fetch<Response>(`/subscribers/groups/${groupId}`, {
			method: 'DELETE',
			body: {
				subscribers,
			},
		})
	}
}
