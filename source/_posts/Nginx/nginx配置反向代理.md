---
title: nginx配置反向代理以及适配多端
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=827061456,130319744&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 51543
date: 2020-05-18 15:11:46
tags:
   - Nginx
   - Web
categories: 
   - [Nginx]
   - [Web]
---

#### 配置反向代理
```shell script
server {
  listen 80;
  server_name www.wangboweb.com;
  location / {
    # 显示文件目录而不是解析文件
    autoindex on;
    # 代理到百度
  	proxy_pass http://www.baidu.com;
  }
}
```
或者
```shell script
http {
  # 代理多个机器
  upstream local {
  	server 192.168.123.11:80;
    server 192.168.123.12:80;
  }
  # 设置缓存文件路径,缓存名称为myCache
  proxy_cache_path /tmp/nginxCache levels=1:2 keys_zone=myCache:10m max_size=10g inactive=60m use_temp_path=off;
  server {
    # 缓存路径设置
    proxy_cache myCache;
	# 缓存key
    proxy_cache_key $host$uri$is_args$args;
    # 哪些请求不缓存，设置缓存时间为1天
    proxy_cache_valid 200 304 302 1d;
  	proxy_pass http://local;
  }
}
```

#### 配置适配多端
```shell script
server {
	listen 80 default_server;
	server_name default_server;
	location / {
		root /var/www/pc;
		if ($http_user_agent ~* 'Android|WebOS|iPhone|iPod|BlackBerry') {
			root /var/www/mobile;
		}
		index index.html;
	}
}
```