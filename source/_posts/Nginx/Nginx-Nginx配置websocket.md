---
title: Nginx-Nginx配置websocket
top: 100
comments: true
tags: Nginx
categories: Nginx
abbrlink: 294
date: 2019-12-20 09:51:47
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 前言
  &emsp;&emsp;在配置Nginx反向代理时，有时候访问的可能时需要websocket，但是Nginx默认是没有开启的，所以需要配置websocket的反向代理。
<!-- more -->

配置内容：
<script src="https://gist.github.com/BoWang816/4a4f236152a9e6345bf167621de1e45c.js"></script>

- #### 总结
&emsp;&emsp;主要配置的是`proxy_http_version 1.1;`, `proxy_set_header Upgrade $http_upgrade;`, `proxy_set_header Connection $connection_upgrade;`这三项，因为`$connection_upgrade`变量默认是不存在的，所以需要提前进行配置。
