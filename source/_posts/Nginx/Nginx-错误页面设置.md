---
title: Nginx-错误页面设置
top: 100
comments: true
tags: Nginx
categories: Nginx
abbrlink: 10286
date: 2019-05-30 23:00:13
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

#### 多错误指向单页面

- 默认配置文件地址

```bash
/etc/nginx/sites-enabled.d/default.conf
```
<!-- more -->

- 配置50x与404页面

<script src="https://gist.github.com/BoWang816/b6d1db6107fe0ce1156a340cff412a79.js"></script>

   - 本地跳转，在/var/www/html建立名称为404.html的文件
    
```text
error_page 404 /404.html;

location = /404.html {
    root /var/www/html;
}
```
   - 外链跳转

```bash
error_page 500 502 503 504 http://blog.wangboweb.site;
```

   - 配置完成后需要重载配置文件
   
```bash
nginx -s reload
```
