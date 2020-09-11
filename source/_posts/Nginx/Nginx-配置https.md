---
title: Nginx-配置https
top: 100
comments: true
tags: Nginx
categories: Nginx
abbrlink: 58631
date: 2019-05-31 15:57:48
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 上传Nginx域名证书

>将Nginx的证书文件夹上传到服务器/etc/nginx/cert文件夹下,cert文件夹自己创建即可，也可上传到其他目录。可使用以下命令直接上传文件：
```bash
scp -r test.txt  root@66.42.36.32:/root/cert
```
<!-- more -->

> 文件名：test.txt, 服务器用户：root，服务器IP：66.42.36.32，上传目的目录：/root/cert

- #### 进入/etc/nginx目录配置SSL
```bash
vim nginx.conf 
或
进入sites-enabled目录, vim default
```
    ```text
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

- #### 查看配置是否正确以及重载配置文件
```bash
nginx -t && nginx -s reload
```
