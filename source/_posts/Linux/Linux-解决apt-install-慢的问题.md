---
title: Linux-解决apt install 慢的问题
top: 100
comments: true
tags:
  - Linux
categories: Linux
abbrlink: 20613
date: 2019-05-31 16:15:38
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

#### 打开 /etc/gai.conf
```bash
vim /etc/gai.conf
```
<!-- more -->

#### 找到以下内容行:
```text
# For sites which prefer IPv4 connections change the last line to
# precedence ::ffff:0:0/96 100
```

#### 去掉#
```text
precedence ::ffff:0:0/96 100
```
