---
title: Xcode Releases
description: More than you ever wanted to know™
---

<script type="text/javascript">
{% include xcodereleases.js %}
</script>

This is not an official Apple website. [Please consider donating](https://paypal.me/XcodeReleases) to help maintain it.

<div class="centered" style="width: 100%">
<div id="search-beta" style="width: 50%">
  <input type="search" id="filter-text" oninput="filter()" placeholder="Search"/>
  
  <div id="release-filter" class="segmented">
  
  <label class="column">
    <input type="radio" name="filter-release" id="filter-all" value="" checked  onchange="filter()" />All
  </label>
  
  <label class="column" for="filter-gm">
    <input type="radio" name="filter-release" id="filter-gm" value="gm" onchange="filter()" />GMs
  </label>
  
  <label class="column" for="filter-beta">
    <input type="radio" name="filter-release" id="filter-beta" value="beta" onchange="filter()" />Betas
  </label>
  </div>
</div>
</div>

---
  
<div class="column-wrapper">
  <div class="column header">Name</div>
  <div class="column header">Required macOS</div>
  <div class="column header">Released</div>
  <div class="column header">Download</div>
  <div class="column header">Release Notes</div>
</div>
  
{% for release in site.data.releases %}
  {% include xcode_row_beta.html release=release %}
{% endfor %}

---

<ul>
  <li><a name="fn1"></a>¹ - If the direct download link doesn't work, you can find most downloads on <a href="https://developer.apple.com/download/more">developer.apple.com/download/more</a>.<br />Alternatively, make sure you're logged in to developer.apple.com, and then reload xcodereleases.com. <a href="#ret-fn1">[↑]</a></li>
</ul>
