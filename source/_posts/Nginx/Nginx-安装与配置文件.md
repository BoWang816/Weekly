---
title: Nginx-安装与配置文件
top: 100
comments: true
tags: Nginx
categories: Nginx
abbrlink: 43711
date: 2019-05-30 22:03:36
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

#### Nginx安装

- ubuntu:
```bash
apt-get install nginx
```

- Centos
```bash
yum install nginx
```
<!-- more -->

#### 版本

[nginx官网](https://nginx.org/)

- MainLine Version: 开发者版本
- Stable Version: 稳定版本
- Legacy Version: 历史版本

#### 基本配置详解（ubuntu为准）

<script src="https://gist.github.com/BoWang816/1f07e715bda05cb97f0d2f41d2192eba.js"></script>

#### 默认文件目录地址

- 安装目录
```bash
/etc/nginx
```

- 配置文件
```bash
/etc/nginx/nginx.conf
/etc/nginx/sites-enabled/default
...
```

- 资源目录
```bash
/var/www/html
```

#### 服务启动、重启、关闭

   **阿里云服务器请到安全组配置相关端口，并且如果安装了apache，二者不可同时开启**

- 启动服务
```bash
service nginx start
或
systemctl start nginx.service
```

- 重载配置文件
```bash
nginx -s reload
```

- 关闭服务
```bash
nginx -s stop 立刻停止服务 
nginx -s quit 优雅停止服务
```

- 查看配置文件是否正确
```bash
nginx -t

提示如下则表示配置无误:

nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

- 查看是否启动成功
```bash
ps aux | grep nginx

提示如下则启动成功:

root     16877  0.0  0.2 140628  1464 ?        Ss   May29   0:00 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
www-data 16878  0.0  1.4 143600  7204 ?        S    May29   0:00 nginx: worker process
root     19730  0.0  0.2  14428  1004 pts/0    S+   22:47   0:00 grep --color=auto nginx
```

- 日志切割
```bash
先将历史日志文件备份,然后执行

nginx -s reopen
```

- 更多命令
```bash
service nginx {start|stop|restart|reload|force-reload|status|configtest|rotate|upgrade}
```
