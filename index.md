---
title: Xcode Releases
description: More than you ever wanted to know™
layout: centered
---

<script type="text/javascript">
{% include xcodereleases.js %}
</script>

All downloads are hosted by Apple. Links on this site take you directly to Apple's download pages.

This is not an official Apple website. [Please consider donating](https://paypal.me/XcodeReleases) to help maintain it.

Looking for an API? The data for this site is available at <a href="{{ site.url }}/data.json">{{ site.url }}/data.json</a>.

<div id="search">
  <input type="search" id="filter-text" oninput="filter()" placeholder="Search"/>
  <br />
  <input type="radio" name="filter-release" id="filter-all" value="" checked  onchange="filter()" />
  <label for="filter-all">All</label>

  <input type="radio" name="filter-release" id="filter-releases" value="release" onchange="filter()" />
  <label for="filter-release">Releases</label>

  <input type="radio" name="filter-release" id="filter-beta" value="beta" onchange="filter()" />
  <label for="filter-beta">Betas</label>
</div>

---

<table id="xcodes">
  <tr>
    <th>Version</th>
    <th>Release</th>
    <th>Build</th>
    <th>Released</th>
    <th>Requires</th>
    <th>macOS SDKs</th>
    <th>iOS SDKs</th>
    <th>watchOS SDKs</th>
    <th>tvOS SDKs</th>
    <th>Download Size</th>
    <th><a name="ret-fn1"></a>Download<a href="#fn1">¹</a></th>
    <th>Release Notes<a href="#fn1">¹</a></th>
  </tr>
{% for release in site.data.releases %}
  {% include xcode_row.html release=release %}
{% endfor %}
</table>

---

<ul>
  <li><a name="fn1"></a>¹ - If the direct download link doesn't work, you can find most downloads on <a href="https://developer.apple.com/download/all/?q=Xcode">developer.apple.com/download/all/?q=Xcode</a>.<br />Alternatively, make sure you're logged in to developer.apple.com, and then reload xcodereleases.com. <a href="#ret-fn1">[↑]</a></li>
</ul>
