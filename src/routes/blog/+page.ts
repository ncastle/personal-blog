import type { PageLoad } from './$types';
// import { error } from '@sveltejs/kit';

type Post = {
	title: string;
	content: string;
};
const posts: Post[] = [
	{ title: 'Post 1', content: 'Hello this is my first post' },
	{ title: 'Second Post', content: 'This is my second ever post!!' }
];

export const load: PageLoad = async ({ url, ...rest }) => {
	console.log('PageLoad data:', { url, rest });

	return {
		posts
	};

	// throw error(404, 'Not found');
};
