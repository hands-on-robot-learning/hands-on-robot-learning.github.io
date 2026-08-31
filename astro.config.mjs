// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://hands-on-robot-learning.github.io',
	trailingSlash: 'always',
	output: 'static',
	integrations: [
		starlight({
			title: 'Hands-on Robot Learning',
			description:
				'EN.601.498 / EN.601.698 · Fall 2026 · Johns Hopkins University',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			favicon: '/favicon.svg',
			editLink: {
				baseUrl:
					'https://github.com/hands-on-robot-learning/hands-on-robot-learning.github.io/edit/main/',
			},
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			components: {
				Head: './src/components/CourseHead.astro',
				Header: './src/components/CourseHeader.astro',
				Footer: './src/components/CourseFooter.astro',
			},
			sidebar: [],
		}),
	],
});
