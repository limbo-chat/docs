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
					label: "Plugins",
					collapsed: true,
					items: [
						{
							label: "Overview",
							link: "/plugins",
						},
						{
							label: "Lifecycle",
							link: "/plugins/lifecycle",
						},
						{
							label: "Chats",
							link: "/plugins/chats",
						},
						{
							label: "Models",
							link: "/plugins/models",
						},
						{
							label: "Tools",
							link: "/plugins/tools",
						},
						{
							label: "Commands",
							link: "/plugins/commands",
						},
						{
							label: "Chat Nodes",
							link: "/plugins/chat-nodes",
						},
						{
							label: "Chat Panels",
							link: "/plugins/chat-panels",
						},
						{
							label: "Settings",
							link: "/plugins/settings",
						},
						{
							label: "Storage",
							link: "/plugins/storage",
						},
						{
							label: "Database",
							link: "/plugins/database",
						},
						{
							label: "Interactions",
							link: "/plugins/interactions",
						},
						{
							label: "Authentication",
							link: "/plugins/authentication",
						},
						{
							label: "Guides",
							items: [
								{
									label: "Getting started",
									link: "/plugins/guides/getting-started",
								},
								{
									label: "Best practices",
									link: "/plugins/guides/best-practices",
								},
								{
									label: "Common pitfalls",
									link: "/plugins/guides/pitfalls",
								},
								{
									label: "Building",
									link: "/plugins/guides/building",
								},
								{
									label: "Publishing",
									link: "/plugins/guides/publishing",
								},
								{
									label: "Building a Chat Node",
									link: "/plugins/guides/building-a-chat-node",
								},
								{
									label: "Notable Plugins",
									link: "/plugins/guides/notable-plugins",
								},
							],
						},
						{
							label: "Reference",
							collapsed: true,
							items: [
								{
									label: "Manifest",
									link: "/plugins/reference/manifest",
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
							link: "/styles",
						},
					],
				},
			],
		}),
	],
});
