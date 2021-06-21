---
title: Xcode Releases
description: More than you ever wanted to know™
---

<script type="text/javascript">
{% include xcodereleases.js %}
</script>

This is not an official Apple website. [Please consider donating](https://paypal.me/XcodeReleases) to help maintain it.

<div id="search-beta" style="width: 33%">
  <div id="search-box" class="search">
    <input type="text" id="filter-text" oninput="filter()" placeholder="Search"/>
  </div>
  
  <div id="release-filter" class="segmented">
    <input type="radio" name="filter-release" id="filter-all" value="" checked onchange="filter()" />
    <label for="filter-all">All</label>
    <input type="radio" name="filter-release" id="filter-gm" value="gm" onchange="filter()" />
    <label for="filter-gm">GMs</label>
    <input type="radio" name="filter-release" id="filter-beta" value="beta" onchange="filter()" />
    <label for="filter-beta">Betas</label>
  </div>
</div>

---
  
<div class="column-wrapper">
  <div class="column header align-left">Name</div>
  <div class="column header align-left">Required macOS</div>
  <div class="column header">Released</div>
  <div class="column header">Download<a name="ret-fn1"></a><a href="#fn1">¹</a></div>
  <div class="column header">Release Notes<a href="#fn1">¹</a></div>
</div>
  
{% for release in site.data.releases %}
  {% include xcode_row_beta.html release=release %}
{% endfor %}

---

<ul>
  <li><a name="fn1"></a>¹ - If the direct download link doesn't work, you can find most downloads on <a href="https://developer.apple.com/download/all/">developer.apple.com/download/all</a>.<br />Alternatively, make sure you're logged in to developer.apple.com, and then reload xcodereleases.com. <a href="#ret-fn1">[↑]</a></li>
</ul>
