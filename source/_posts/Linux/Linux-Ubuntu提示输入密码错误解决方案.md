---
title: Linux-Ubuntu提示输入密码错误解决方案
top: 100
comments: true
tags: Linux
categories: Linux
abbrlink: 59341
date: 2019-05-31 16:40:39
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

#### Ubuntu中在终端进入root权限但是总提示密码错误的解决方案

- 先解除root锁定，为root用户重新设置密码

<!-- more -->

- 打开终端输入：
```bash
sudo passwd #注意是passwd不是password

Password: <— 输入你当前用户的密码

Enter new UNIX password: <— 新的Root用户密码

Retype new UNIX password: <— 重复新的Root用户密码

passwd：已成功更新密码
```
- 密码更新成功，就可以使用root登陆了
