import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'LUANAR',
		version:'0.0.1'
	}
});

export default app;