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
