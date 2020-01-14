---
title: Xcode Releases API
description: Programmatic access to more than you ever wanted to know™
---

<div style="text-align: center;">
The data behind xcodereleases.com is available for you to integrate in to your own tools and products. It is available in both RSS and JSON form.
</div>

## RSS

### All Releases

- URL: `https://xcodereleases.com/api/all.rss`
- Description: An RSS feed of all known Xcode releases, including betas. Information about each release is in the `<description>` of each entry.

### GM Releases

- URL: `https://xcodereleases.com/api/gm.rss`
- Like `all.rss`, but it does not contain any beta, seed, or preview releases. It only contains GM release information.

## JSON

### All Releases

- URL: `https://xcodereleases.com/api/all.json`
- Description: A JSON file of all known Xcode releases, including betas

### GM Releases

- URL: `https://xcodereleases.com/api/gm.json`
- Description: Like `all.json`, but it does not contain any beta, seed, or preview releases. It only contains GM release information.

### JSON Format

Each entry in the JSON feed is an object with the following properties:

#### An `Xcode` object

- `name`: A string, typically "Xcode". Early versions of Xcode were called "Xcode Tools"
- `version`: A `Version` value describing this version of Xcode
- `date`: A `Date` object, encoding the date on which this version of Xcode was released
- `requires`: A string indicating the minimum version of macOS required to run this version of Xcode
- `compilers` (optional): An object where the keys are the kind of compiler (ex: `clang`, `swift`, etc), and the value is an array of `Version` values.
- `links` (optional): An object where the keys are the kind of link (ex: `download`, `notes`, etc), and the value is a `Link` value.
- `sdks` (optional): An object where the keys are the platform of the SDK (ex: `iOS`, `macOS`, etc), and the value is an array of `Version` values.

#### A `Date` object

A `Date` object has three keys: `year`, `month`, and `day`. 

#### A `Version` object

A `Version` object has three keys:

- `build`: the build string for this release. Ex: `11A420a`
- `number`: the human-readable version for this release. Ex: `11.0`, `10.2.1`, etc.
- `release`: an object describing the kind of version.
	- `gm`: If this key is present, then it is a "GM" release. The value is a boolean (always `true`).
    - `gmseed`: If this key is present, then it is a "GM Seed" release. The value is an integer indicating the seed number.
    - `beta`: If this key is present, then it is a "Beta" release. The value is an integer indicating the beta number.
    - `dp`: If this key is present, then it is a "Developer Preview" release. The value is an integer indicating the preview number.

#### A `Link` object

A `Link` object has a single key, called `url`. Its value is a `String` containing a link to the resource.