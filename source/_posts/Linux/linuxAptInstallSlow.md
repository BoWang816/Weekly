---
title: 解决linux中apt install慢的问题
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4186541464,1812673689&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 12263
date: 2020-08-17 10:29:18
tags: Linux
categories: Linux
keywords: linux, shell, script
---

#### 打开 /etc/gai.conf
```bash
vim /etc/gai.conf
```

#### 找到以下内容行:
```text
# For sites which prefer IPv4 connections change the last line to
# precedence ::ffff:0:0/96 100
```

#### 去掉#
```text
precedence ::ffff:0:0/96 100
```
