---
title: nginx访问权限控制
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=827061456,130319744&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 30656
date: 2020-05-14 14:58:42
tags:
   - Nginx
   - Web
categories: 
   - [Web, Nginx]
---

> 网站中部分文件或者文件夹允许或者禁止用户访问，可以进行自定义配置，例如：

```shell script
server {
  listen 80;
  server_name www.wangboweb.com;
  
  location / {
    root /var/www/html/
    index index.html
  }
  
  location =/img {
    # 允许所有用户访问img文件夹
  		allow all;
  	}
  
  location = /admin {
    # admin 禁止访问admin文件夹
    deny all;
  }
  
  # 精确匹配
  location ~\.php$ {
    # php文件禁止访问
  	deny all;
  }
}

server {
  listen 8001;
  server_name blog.wangboweb.comw;
  
  location =/hello {
    # 允许所有用户访问img文件夹
  		allow all;
  	}
  
  location = /world {
    # admin 禁止访问admin文件夹
    deny all;
  }
}
```