---
title: Linux-服务器自动登陆脚本
top: 100
comments: true
tags:
  - Linux
categories: Linux
abbrlink: 24227
date: 2019-05-31 16:31:30
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 新建一个shell脚本
```bash
vim login.sh
```
<!-- more -->

- #### 输入以下内容
```bash
#!/usr/bin/expect
spawn ssh -p22 root@192.168.221.222
expect "Password:"
send "first\n"
expect "Select server:"
send "2\n"
expect "Input account:"
send "2\n"
interact
expect eof
```
- #### 解释
    - root 服务器登陆用户名
    - 192.168.221.222 服务器登陆IP
    - expect "Password:" 指在执行spawn命令后服务器显示的需要输入密码时的文字
    - send "first\n"  指自动输入first并自动执行回车
    - expect与send可多次执行，比如在登陆堡垒机的时候需要多次验证，脚本可以自动执行多次输入
