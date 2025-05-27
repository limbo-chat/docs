// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	integrations: [
		starlight({
			title: "Limbo Docs",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/limbo-llm",
				},
			],
			sidebar: [
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
