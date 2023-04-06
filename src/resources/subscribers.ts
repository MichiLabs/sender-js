import { Base } from '.'
import { CreateResponse, Response, SubscribersListResponse } from '../types'

export class Subscribers extends Base {
	/**
	 * Returns all subscribers in your Sender account.
	 */
	list() {
		return this.fetch<SubscribersListResponse>('/subscribers')
	}
	/**
	 * Returns a subscriber profile with the specified email address.
	 */
	find(email: string) {
		return this.fetch<{ data: object }>(`/subscribers/${email}`)
	}
	/**
	 * Creates a new subscriber, providing basic information, fields and groups.
	 */
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
	/**
	 * Updates subscriber's information, fields, groups or status.
	 */
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
	/**
	 * Returns a list of actions that this subscriber has performed.
	 */
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
	/**
	 * Deletes one or more subscribers.
	 */
	delete(subscribers: string[]) {
		return this.fetch<Response>(`/subscribers`, {
			method: 'DELETE',
			body: {
				subscribers,
			},
		})
	}
	/**
	 * Adds one or more subscribers to the specified group.
	 */
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
	/**
	 * Removes one or more subscribers from a group.
	 */
	removeFromGroup(groupId: string, subscribers: string[]) {
		return this.fetch<Response>(`/subscribers/groups/${groupId}`, {
			method: 'DELETE',
			body: {
				subscribers,
			},
		})
	}
}
