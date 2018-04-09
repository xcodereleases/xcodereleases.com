---
title: Xcode Releases
description: More than you ever wanted to know™
---

<script type="text/javascript">
{% include xcodereleases.js %}
</script>

This is not an official Apple website. [Please consider donating](https://paypal.me/XcodeReleases) to help maintain it.

<div id="search">
  <input type="search" id="filter-text" oninput="filter()" placeholder="Search"/>
  <br />
  <input type="radio" name="filter-release" value="" checked  onchange="filter()" /> All
  <input type="radio" name="filter-release" value="gm" onchange="filter()" /> GMs
  <input type="radio" name="filter-release" value="beta" onchange="filter()" /> Betas
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
    <th><a name="ret-fn1"></a>Download<a href="#fn1">¹</a></th>
    <th>Release Notes<a href="#fn1">¹</a></th>
  </tr>
{% for release in site.data.releases %}
  {% include xcode_row.html release=release %}
{% endfor %}
</table>

---

<ul>
  <li><a name="fn1"></a>¹ - If the direct download link doesn't work, you can find most downloads on <a href="https://developer.apple.com/download/more">developer.apple.com/download/more</a>.<br />Alternatively, make sure you're logged in to developer.apple.com, and then reload xcodereleases.com. <a href="#ret-fn1">[↑]</a></li>
</ul>
