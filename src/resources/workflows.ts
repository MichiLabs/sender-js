import { Base } from '.'

export class Workflows extends Base {
	/**
	 * Adds the specified email and begins workflow.
	 */
	start(id: string, email: string) {
		return this.fetch<Response>(`/workflows/${id}/start`, {
			method: 'POST',
			body: { email },
		})
	}
}
