---
title: linux安装jenkins
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=705014255,1167057535&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 23988
date: 2020-06-17 10:32:49
tags:
   - Linux
   - Jenkins
categories: Linux
keywords: linux, jeknins
---


- #### 安装jdk,openjdk默认安装会配置好环境变量
```bash
apt install openjdk-8-jdk-headless
```

- #### 设置jenkins源，执行命令：
    ```bash
    wget -q -O - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
    ```
    - 在 /etc/apt/sources.list中加上
    ```text
    deb http://pkg.jenkins-ci.org/debian binary/
    ```
    - 更新package源
    ```bash
    apt-get update
    ```
- #### 安装jenkins
```bash
sudo apt-get install jenkins
```

- #### 卸载jenkins
    
    - 卸载服务
    ```bash
    sudo apt-get remove jenkins
    ```
    - 卸载安装包，注意这里如果不是ubuntu那就yum
        ```bash
        sudo apt-get remove --auto-remove jenkins
        ```
    - 卸载配置和数据
    ```bash
    sudo apt-get purge jenkins
    sudo apt-get purge --auto-remove jenkins
    ```
    
- #### 基本配置:jenkins默认路径
    - (1) /var/lib/jenkins/：jenkins安装目录.
    - (2) /etc/default/jenkins：jenkins配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。
    - (3) /var/lib/jenkins/：默认的JENKINS_HOME。
    - (4) /var/log/jenkins/jenkins.log：Jenkins日志文件。
    - jenkins默认权限jenkins:jenkins,如果发布脚本中需要有相关的操作如拷贝、移动等，可能会因为权限问题影响无法完成，jenkins默认是在jenkins组下，需要配置相关的权限,命令：chown jenkins:jenkins 文件夹 

- #### jenkins修改端口号
    - 默认端口是8080，有时候由于端口占用需要修改如下：
    ```text
    1、检查 /etc/init.d/jenkins 脚本，修改 do_start 函数的 check_tcp_port 命令，端口号从 8080 换成 8082：
    2、修改 /etc/default/jenkins 文件，将端口 8080 改成 8082
    3、重启Jenkins：sudo systemctl restart jenkins
    ```

- #### jenkins重启与停止
1、关闭Jenkins：http://localhost:8080/exit
2、重启Jenkins：http://localhost:8080/restart
3、重新加载配置信息：http://localhost:8080/reload
