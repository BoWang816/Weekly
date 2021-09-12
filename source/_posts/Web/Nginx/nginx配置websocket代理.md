---
title: nginx配置websocket代理以及Gzip压缩
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=827061456,130319744&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 31057
date: 2020-01-18 15:15:16
tags:
   - Nginx
   - Web
categories: 
   - [Web, Nginx]
---

#### 前言
>在配置Nginx反向代理时，有时候访问的可能时需要websocket，但是Nginx默认是没有开启的，所以需要配置websocket的反向代理。

#### 配置内容：
```shell script
http {
    map $http_upgrade $connection_upgrade {
           default upgrade;
           ''     close;
   }
  
    ##
    # Gzip Settings
    # 开启gzip
    gzip on;

    # gzip_vary on;
    # gzip_proxied any;
    # gzip_comp_level 6;
    # gzip_buffers 16 8k;
    # gzip_http_version 1.1;
    # 开启压缩的文件类型：
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

   server {
   	  location / {
          # 代理地址
          proxy_pass http://ip:9000;
          proxy_http_version 1.1;
          proxy_set_header Host $host;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection $connection_upgrade;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }		
    }
}
```

#### 总结
&emsp;&emsp;主要配置的是`proxy_http_version 1.1;`, `proxy_set_header Upgrade $http_upgrade;`, `proxy_set_header Connection $connection_upgrade;`这三项，因为`$connection_upgrade`变量默认是不存在的，所以需要提前进行配置。
