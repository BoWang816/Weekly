---
title: Ubuntu中在终端进入root权限但是总提示密码错误的解决方案
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
cover: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3928303111,771089006&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 61603
date: 2020-09-17 10:35:09
tags: Linux
categories: Linux 
keywords: linux, password
---


- 先解除root锁定，为root用户重新设置密码

- 打开终端输入：
```bash
sudo passwd #注意是passwd不是password

Password: <— 输入你当前用户的密码

Enter new UNIX password: <— 新的Root用户密码

Retype new UNIX password: <— 重复新的Root用户密码

passwd：已成功更新密码
```
- 密码更新成功，就可以使用root登陆了
