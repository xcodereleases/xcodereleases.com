---
title: Xcode Releases
description: More than you ever wanted to know™
---

<script type="text/javascript">
{% include xcodereleases.js %}
</script>

This is not an official Apple website. [Please consider donating](https://paypal.me/XcodeReleases) to help maintain it.

<div id="search">
  <input type="radio" name="filter-release" value="" checked  onchange="filter()" /> All
  <input type="radio" name="filter-release" value="gm" onchange="filter()" /> GMs
  <input type="radio" name="filter-release" value="beta" onchange="filter()" /> Betas
  <input type="search" id="filter-text" oninput="filter()" placeholder="Search"/>
</div>

---
  
{% assign counter=0 %}
{% for release in site.data.releases %}
  {%- increment counter -%}
  {% include xcode_row_beta.html release=release counter=counter%}
{% endfor %}

---

<ul>
  <li><a name="fn1"></a>¹ - If the direct download link doesn't work, you can find most downloads on <a href="https://developer.apple.com/download/more">developer.apple.com/download/more</a>.<br />Alternatively, make sure you're logged in to developer.apple.com, and then reload xcodereleases.com. <a href="#ret-fn1">[↑]</a></li>
</ul>
