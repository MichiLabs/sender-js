import { Base } from '.'
import { PaginationResponse, CreateResponse, Response } from '../types'

export class Groups extends Base {
	list() {
		return this.fetch<PaginationResponse>('/groups')
	}
	find(id: string) {
		return this.fetch<{ data: object }>(`/groups/${id}`)
	}
	create(title: string) {
		return this.fetch<CreateResponse>('/groups', {
			method: 'POST',
			body: { title },
		})
	}
	rename(id: string, title: string) {
		return this.fetch<Response>(`/groups/${id}`, {
			method: 'PATCH',
			body: { title },
		})
	}
	delete(id: string, delete_subscribers: boolean) {
		return this.fetch<Response>(`/groups/${id}`, {
			method: 'DELETE',
			body: { delete_subscribers },
		})
	}
	listSubscribers(id: string) {
		return this.fetch<PaginationResponse>(`/groups/${id}/subscribers`)
	}
}
