import { describe, it, expect } from 'vitest'
import { createClient } from '../src'
import * as dotenv from 'dotenv'

dotenv.config()

const accessToken = process.env.SENDER_ACCESS_TOKEN

describe('Sender', () => {
	const sender = createClient(accessToken)

	it('should list subscribers', async () => {
		const response = await sender.subscribers.list()

		expect(response).toBeInstanceOf(Object)
	})
})
