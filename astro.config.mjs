// @ts-check
import { defineConfig, envField } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	env: {
		schema: {
			LATEST_APP_VERSION: envField.string({
				access: "public",
				context: "client",
			}),
		},
	},
	integrations: [
		starlight({
			title: "Limbo Docs",
			social: [
				{
					icon: "discord",
					label: "Discord",
					href: "https://discord.gg/UCMnvtk5Ja",
				},
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/limbo-llm",
				},
			],
			sidebar: [
				{
					label: "Users",
					autogenerate: { directory: "user" },
				},
				{
					label: "Developers",
					autogenerate: { directory: "dev" },
				},
			],
		}),
	],
});
