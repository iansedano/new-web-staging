---
layout: page
title: All Tags
---

<div>
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[1].size | plus: 1000 }}#{{ tag[0] }}#{{ tag[1].size }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}
{% for tag in sortedtags reversed %}
    {% assign tagitems = tag | split: '#' %}
    <li><a href="/tag/{{ tagitems[1] }}">{{ tagitems[1] }} ({{ tagitems[2] }})</a></li>
{% endfor %}
</div>