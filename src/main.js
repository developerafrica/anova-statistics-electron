import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'LUANAR ANOVA',
		version:'1.1.1'
	}
});

export default app;