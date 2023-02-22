/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		console.log({ event });
		const body = await event.request.formData();

		// log all fields
		console.log('body:', [...body]);

		return {
			// get a specific field's value
			title: body.get('title') ?? '',
			content: body.get('content') ?? '',
			success: true
		};
	}
};
