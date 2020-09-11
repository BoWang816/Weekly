---
title: Nginx-根据端口设置虚拟主机及日志监控
top: 100
comments: true
tags: Nginx
categories: Nginx
abbrlink: 21523
date: 2019-05-31 22:24:56
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

#### Nginx根据多个端口配置虚拟主机

>说的简单点就在在配置文件中的http下配置多个server，如

<!-- more -->

<script src="https://gist.github.com/BoWang816/5fd0ae4a9fe415e521298bf63ceff51d.js"></script>

>&emsp;&emsp;这种配置其实就相当于配置了两个虚拟主机，其中一个监听的是80端口，一个监听的是8001端口，同时配置了相对应的域名，因此在访问的时候，如果访问的是第一个server则走的将会是80端口，同时访问的域名将会是下面这个，同样第二个server同理。
```text
www.wangboweb.com
```

>&emsp;&emsp;比如：你安装Nginx的机器IP是192.168.123.232，当访问该机器的80端口的时候将会跳转到域名1下，进行相关的访问；当访问的是8001端口时将会跳转到域名2下，如果你这两个域名绑定的IP不是一个，那么将会各自访问各自的主机。如果绑定的IP是一个，则根据各自的设置进行访问相对应的文件目录。

```text
域名1：
www.wangboweb.com

域名2：
blog.wangboweb.com
```


#### 安装goAccess监控Nginx日志
   
   - 安装命令(ubuntu)
   ```bash
   apt-get install goaccess    
   ```
   - 配置goAccess
   
        - 在/var/log/nginx目录下新建一个html文件，该目录为默认存放nginx日志文件的目录，此处新建为report.html；
        - 设置日志中时间格式
        
            - 打开/etc/goaccess.conf配置文件，新增以下内容：
            ```text
            time-format %T
            date-format %d/%b/%Y
            log-format %h - %^ [%d:%t %^] requesthost:"%v"; "%r" requesttime:"%T"; %s %b "%R" - %^"%u"
            ```
        - 配置nginx的goAccess监控页面指向
            ```text
            1、打开/etc/nginx/sites-enabled/default文件；
            2、添加一个location指向
            location = /report.html {
                root /var/log/nginx/report.html
            }
            ```
        - 开启goAccess监控,执行命令
            ```bash
            goaccess /var/log/nginx/access.log -o /var/www/html/log/report.html --log-format=COMBINED --real-time-html
            注: 默认的log文件放在/var/log/nginx/目录下,也可以自定义配置,此处也要跟着相对应
            ```
        - 开启后会提示
        ```text
        WebSocket server ready to accept new client connections
        ```
        - 重载nginx配置文件
        - 访问http://IP/report.html即可
        - 关闭websocket依然可以访问
        
   - 更过goAccess可访问 https://goaccess.io/get-started
