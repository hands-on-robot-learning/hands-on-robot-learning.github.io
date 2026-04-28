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
				'Fall 2026 hands-on robotics course: build SO-101 arms, collect teleop data, train ACT/diffusion policies, and demo SmolVLA-style models.',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/hands-on-robot-learning/hands-on-robot-learning.github.io',
				},
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Home',
					slug: '',
				},
				{
					label: 'Course Overview',
					slug: 'overview',
				},
				{
					label: 'Schedule',
					slug: 'schedule',
				},
				{
					label: 'Assignments',
					items: [
						{ label: 'Assignment Overview', slug: 'assignments' },
						{ label: 'A1 Build, Calibrate, and Teleoperate', slug: 'assignments/a1-build-calibrate-teleop' },
						{
							label: 'A2 Handcrafted Cube-Picking Baseline',
							slug: 'assignments/a2-handcrafted-cube-picking',
						},
						{
							label: 'A3 LeRobot Imitation-Learning Challenge',
							slug: 'assignments/a3-lerobot-imitation-challenge',
						},
						{ label: 'A4 VLA / SmolVLA Final Demo', slug: 'assignments/a4-vla-smolvla-demo' },
					],
				},
				{
					label: 'Guides',
					slug: 'guides',
				},
				{
					label: 'Benchmark and Leaderboard',
					slug: 'benchmark',
				},
				{
					label: 'Readings and Research Discussions',
					slug: 'readings',
				},
				{
					label: 'For Sponsors',
					slug: 'sponsors',
				},
				{
					label: 'Policies',
					items: [
						{ label: 'Grading', slug: 'policies/grading' },
						{ label: 'Participation', slug: 'policies/participation' },
						{ label: 'Deadlines and Repair Tokens', slug: 'policies/deadlines' },
						{ label: 'Teams', slug: 'policies/teams' },
						{ label: 'Safety', slug: 'policies/safety' },
						{ label: 'Academic Integrity', slug: 'policies/academic-integrity' },
						{ label: 'LLM and Coding Assistant Policy', slug: 'policies/llm-policy' },
						{ label: 'Data and Evaluation Integrity', slug: 'policies/data-integrity' },
					],
				},
				{
					label: 'FAQ',
					slug: 'faq',
				},
			],
		}),
	],
});
