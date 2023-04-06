import { Base } from '.'
import { PaginationResponse, Response, CreateResponse } from '../types'

export class Fields extends Base {
	list() {
		return this.fetch<PaginationResponse>('/fields')
	}
	create(title: string, type: 'number' | 'text' | 'datetime') {
		return this.fetch<CreateResponse>('/fields', {
			method: 'POST',
			body: {
				title,
				type,
			},
		})
	}
	rename(id: string, title?: string, show?: boolean) {
		return this.fetch<Response>(`/fields/${id}`, {
			method: 'PATCH',
			body: {
				title,
				show,
			},
		})
	}
	delete(id: string) {
		return this.fetch<Response>(`/fields/${id}`, {
			method: 'DELETE',
		})
	}
}
