---
title: Nginx-配置jenkins代理实现https方式访问jenkins
top: 100
comments: true
tags:
  - Nginx
  - Jenkins
categories: Nginx
abbrlink: 7079
date: 2019-06-05 15:27:18
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 安装jenkins与Nginx(ubuntu为例)
```bash
   Nginx: apt-get install nginx
   Jenkins: apt-get install jenkins
```
<!-- more -->
- #### 登陆jenkins，设置Jenkins Location
    
   - 打开系统配置
   - 找到Jenkins Location
   - 填入要绑定的jenkins域名，如https://jenkins.wangboweb.com
   - 点击保存

- #### 配置Nginx
    
   - 新建一个server
   
   - 填入以下内容
   
   ```bash
    server {
        # 监控端口80
        listen 80;
        listen [::]:8080;
        # 监控端口443
        listen 443 ssl;
        listen [::]:443 ssl;
        # ssl on; 注释这个则http和https都支持
        # ssl证书
        ssl_certificate /etc/nginx/cert/jenkinsCert.pem;
        ssl_certificate_key /etc/nginx/cert/jenkinsCert.key;
        # 绑定的域名
        server_name  jenkins.wangboweb.com;
        # 日志地址
        access_log /var/log/jenkins.log;
        error_log  /var/log/jenkins.log;
        client_max_body_size 60M;
        client_body_buffer_size 512k;
        location / {
            # 代理地址
            proxy_pass http://装jenkins的服务器IP:8080;
            proxy_redirect  off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }   
   ```
   - 保存
   
- #### 重启Nginx服务

   ```bash
      service nginx restart
   ``` 
- #### 总结
   
   &emsp;&emsp;访问[https://jenkins.wangboweb.com](https://jenkins.wangboweb.com)，通过以上方式即可实现配置jenkins的自定义域名，并实现https访问。
