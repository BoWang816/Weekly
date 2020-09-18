---
title: nginx配置https
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=827061456,130319744&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 24039
date: 2020-09-18 15:08:36
tags:
   - Nginx
   - Web
categories: 
   - [Nginx]
   - [Web]
---

#### 上传Nginx域名证书
>将Nginx的证书文件夹上传到服务器/etc/nginx/cert文件夹下,cert文件夹自己创建即可，也可上传到其他目录。可使用以下命令直接上传文件：
```bash
scp -r test.txt  root@66.42.36.32:/root/cert
```

> 文件名：test.txt, 服务器用户：root，服务器IP：66.42.36.32，上传目的目录：/root/cert

#### 进入/etc/nginx目录配置SSL
```shell script
vim nginx.conf 
```
或进入sites-enabled目录
```shell script
vim default
```

```shell script
    http{
    
    server {  
            listen 80;
            listen [::]:80; 
            listen 443 ssl;
            listen [::]:443 ssl;
            server_name example.com;
    
            # ssl on; 注释这个则http和https都支持
            ssl_certificate /cert/ssl.crt;
            ssl_certificate_key /cert/ssl.key;
       }
    }
```

#### 查看配置是否正确以及重载配置文件
```shell script
nginx -t && nginx -s reload
```

