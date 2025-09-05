import adapter from '@sveltejs/adapter-static'; // Change from adapter-auto

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
