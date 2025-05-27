---
title: Overview
description: An overview of the limbo plugin system
---

Plugins are JavaScript modules that extend the existing functionality in Limbo.

- register custom models
- register custom tools
- register commands
- register custom views with React
- hook into app lifecycles

Limbo is built with [Electron](https://www.electronjs.org/) and plugins are executed in the [renderer process](https://www.electronjs.org/docs/latest/tutorial/process-model#the-renderer-process). This means that plugins have access to the browser APIs such as the document.

Plugins should **avoid** interacting with the browser APIs and use the API provided by Limbo **as much as possible**. A mobile version of Limbo is on the [roadmap]() and plugins that use browser APIs may cause the plugin to be unusable.
