---
title: nginx安装与基本配置
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=827061456,130319744&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 61228
date: 2020-08-18 14:44:29
tags:
   - Nginx
   - Web
categories: 
   - [Nginx]
   - [Web]
---

#### Nginx安装

- ubuntu:
```bash
apt-get install nginx
```

- Centos
```bash
yum install nginx
```

#### 版本

[nginx官网](https://nginx.org/)

- MainLine Version: 开发者版本
- Stable Version: 稳定版本
- Legacy Version: 历史版本

#### 基本配置详解（ubuntu为准）

```shell script
# 默认用户
user www-data;
# 进程数量，根据cpu核数设置，便于高并发处理
worker_processes auto;
# pid文件位置
pid /run/nginx.pid;
# 包含的配置文件
include /etc/nginx/modules-enabled/*.conf;

events {
		# 后台允许最大并发数量，可设置
        worker_connections 768;
        # multi_accept on;
}

http {

        ##
        # Basic Settings
        # 网络报文数量
        sendfile on;
        tcp_nopush on;
        tcp_nodelay on;
		# 保持链接时间
        keepalive_timeout 65;
        types_hash_max_size 2048;
        # server_tokens off;

        # server_names_hash_bucket_size 64;
        # server_name_in_redirect off;
		# 文件扩展名映射表
        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        ##
        # SSL Settings
        ##

        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
        ssl_prefer_server_ciphers on;

        ##
        # Logging Settings
        # 访问日志文件地址与错误日志文件地址
        access_log /var/log/nginx/access.log;
		error_log /var/log/nginx/error.log;

        ##
        # Gzip Settings
        # gzip优化
        gzip on;

        # gzip_vary on;
		# gzip_proxied any;
        # gzip_comp_level 6;
        # gzip_buffers 16 8k;
        # gzip_http_version 1.1;
        # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

        ##
        # Virtual Host Configs
        # 子配置项配置文件
        include /etc/nginx/conf.d/*.conf;
        include /etc/nginx/sites-enabled/*;
}


#mail {
#       # See sample authentication script at:
#       # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
#
#       # auth_http localhost/auth.php;
#       # pop3_capabilities "TOP" "USER";
#       # imap_capabilities "IMAP4rev1" "UIDPLUS";
#
#       server {
#               listen     localhost:110;
#               protocol   pop3;
#               proxy      on;
#       }
#
#       server {
#               listen     localhost:143;
#               protocol   imap;
#               proxy      on;
#       }
#}
```

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
