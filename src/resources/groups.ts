import { Base } from '.'
import { PaginationResponse, CreateResponse, Response } from '../types'

export class Groups extends Base {
	/**
	 * Returns a list of all groups in your account.
	 */
	list() {
		return this.fetch<PaginationResponse>('/groups')
	}
	/**
	 * Returns group details.
	 */
	find(id: string) {
		return this.fetch<{ data: object }>(`/groups/${id}`)
	}
	/**
	 * Creates a new group.
	 */
	create(title: string) {
		return this.fetch<CreateResponse>('/groups', {
			method: 'POST',
			body: { title },
		})
	}
	/**
	 * Changes group name.
	 */
	rename(id: string, title: string) {
		return this.fetch<Response>(`/groups/${id}`, {
			method: 'PATCH',
			body: { title },
		})
	}
	/**
	 * Deletes the specified group.
	 */
	delete(id: string, delete_subscribers: boolean) {
		return this.fetch<Response>(`/groups/${id}`, {
			method: 'DELETE',
			body: { delete_subscribers },
		})
	}
	/**
	 * Returns all subscribers in the specified group.
	 */
	listSubscribers(id: string) {
		return this.fetch<PaginationResponse>(`/groups/${id}/subscribers`)
	}
}
