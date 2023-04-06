import { Base } from '.'
import { PaginationResponse, Response, SubscribersListResponse } from '../types'

export class Segments extends Base {
	/**
	 * Returns a list of all segments in your account.
	 */
	list() {
		return this.fetch<PaginationResponse>('/segments')
	}
	/**
	 * Returns segment's information.
	 */
	find(id: string) {
		return this.fetch<{ data: object }>(`/segments/${id}`)
	}
	/**
	 * Deletes a segment with the specified ID.
	 */
	delete(id: string) {
		return this.fetch<Response>(`/segments/${id}`, {
			method: 'DELETE',
		})
	}
	/**
	 * Returns a list of all subscribers in this segment.
	 */
	listSubscribers(id: string) {
		return this.fetch<SubscribersListResponse>(
			`/segments/${id}/subscribers`
		)
	}
}
