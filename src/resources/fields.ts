import { Base } from '.'
import { PaginationResponse, Response, CreateResponse } from '../types'

export class Fields extends Base {
	/**
	 * Returns a list of all custom fields in your account.
	 */
	list() {
		return this.fetch<PaginationResponse>('/fields')
	}
	/**
	 * To create a new field, specify both title and field type.
	 */
	create(title: string, type: 'number' | 'text' | 'datetime') {
		return this.fetch<CreateResponse>('/fields', {
			method: 'POST',
			body: {
				title,
				type,
			},
		})
	}
	/**
	 * Allows renaming a field and showing or hiding it in the subscribers section. Changing field type is not allowed.
	 */
	rename(id: string, title?: string, show?: boolean) {
		return this.fetch<Response>(`/fields/${id}`, {
			method: 'PATCH',
			body: {
				title,
				show,
			},
		})
	}
	/**
	 * Deletes the specified custom field.
	 */
	delete(id: string) {
		return this.fetch<Response>(`/fields/${id}`, {
			method: 'DELETE',
		})
	}
}
