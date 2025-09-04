---
title: Manifest
---

This page describes the schema for the plugin manifest file, `plugin.json`.

## Example

```json
// plugin.json

{
	"id": "my-plugin",
	"name": "My plugin",
	"description": "My plugin does something cool",
	"version": "0.0.1",
	"apiVersion": "^0.0.1",
	"author": {
		"name": "John Doe",
		"email": "limbo@limbo.com"
	}
}
```

## Properties

| Property    | Type              | Required | Description                                      |
| ----------- | ----------------- | -------- | ------------------------------------------------ |
| id          | string            | ✅       | The ID of the plugin                             |
| name        | string            | ✅       | The name of the plugin                           |
| description | string            | ✅       | A description of the plugin                      |
| version     | string            | ✅       | The version of the plugin                        |
| author      | [author](#author) | ✅       | A semver range of compatible plugin API versions |

## author

| Property | Type   | Required | Description             |
| -------- | ------ | -------- | ----------------------- |
| name     | string | ✅       | The name of the author  |
| email    | string | ✅       | The email of the plugin |
