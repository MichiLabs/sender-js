import { Base } from '.'
import { PaginationResponse, Response, SubscribersListResponse } from '../types'

export class Segments extends Base {
	list() {
		return this.fetch<PaginationResponse>('/segments')
	}
	find(id: string) {
		return this.fetch<{ data: object }>(`/segments/${id}`)
	}
	delete(id: string) {
		return this.fetch<Response>(`/segments/${id}`, {
			method: 'DELETE',
		})
	}
	listSubscribers(id: string) {
		return this.fetch<SubscribersListResponse>(
			`/segments/${id}/subscribers`
		)
	}
}
