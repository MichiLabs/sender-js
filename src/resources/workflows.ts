import { Base } from '.'

export class Workflows extends Base {
	start(id: string, email: string) {
		return this.fetch<Response>(`/workflows/${id}/start`, {
			method: 'POST',
			body: { email },
		})
	}
}
