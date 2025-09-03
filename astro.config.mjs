// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";
import { loadEnv } from "vite";

// @ts-expect-error
const env = loadEnv(process.env.NODE_ENV, process.cwd());

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	integrations: [
		mermaid(),
		starlight({
			title: "Limbo Docs",
			customCss: ["./src/styles/theme.css"],
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
							collapsed: true,
							items: [
								{
									label: "Overview",
									link: "/dev/plugins",
								},
								{
									label: "Lifecycle",
									link: "/dev/plugins/lifecycle",
								},
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
									label: "Models",
									collapsed: true,
									items: [
										{
											label: "Registering models",
											link: "/dev/plugins/models/registering-models",
										},
									],
								},
								{
									label: "Reference",
									collapsed: true,
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
								{
									label: "Components",
									collapsed: true,
									autogenerate: {
										directory: "/dev/styles/components",
									},
								},
							],
						},
					],
				},
			],
		}),
	],
});
