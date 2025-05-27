// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { loadEnv } from "vite";

// @ts-expect-error
const env = loadEnv(process.env.NODE_ENV, process.cwd());

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	integrations: [
		starlight({
			title: "Limbo Docs",
			social: [
				{
					icon: "discord",
					label: "Discord",
					href: env.VITE_PUBLIC_DISCORD_INVITE_URL,
				},
				{
					icon: "github",
					label: "GitHub",
					href: env.VITE_PUBLIC_GITHUB_URL,
				},
			],
			sidebar: [
				{
					label: "Limbo",
					items: [
						{
							label: "Introduction",
							link: "/about",
						},
						{
							label: "Roadmap",
							link: "/about/roadmap",
						},
						{
							label: "Glossary",
							link: "/about/glossary",
						},
						{
							label: "Credits",
							link: "/about/credits",
						},
					],
				},
				{
					label: "Developers",
					collapsed: true,
					items: [
						{
							label: "Plugins",
							items: [
								{
									label: "Guides",
									items: [
										{
											label: "Getting started",
											link: "/dev/plugins/guides/getting-started",
										},
										{
											label: "Best practices",
											link: "/dev/plugins/guides/best-practices",
										},
										{
											label: "Common pitfalls",
											link: "/dev/plugins/guides/pitfalls",
										},
										{
											label: "Building",
											link: "/dev/plugins/guides/building",
										},
										{
											label: "Publishing",
											link: "/dev/plugins/guides/publishing",
										},
									],
								},
								{
									label: "Reference",
									items: [
										{
											label: "Manifest",
											link: "/dev/plugins/reference/manifest",
										},
									],
								},
							],
						},
						{
							label: "Styles",
							items: [
								{
									label: "Overview",
									link: "/dev/styles",
								},
							],
						},
					],
				},
			],
		}),
	],
});
