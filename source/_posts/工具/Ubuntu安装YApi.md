---
title: Ubuntu安装YApi
top_img: 'https://unsplash.it/800/200?random'
comments: true
cover: 'https://cdn.jsdelivr.net/gh/BoWang816/zPicture@main/20210421/yapibanner.jpg'
copyright_author: bo.wang
description: 'YApi旨在为开发、产品、测试人员提供更优雅的接口管理服务。可以帮助开发者轻松创建、发布、维护 API'
sitemap: true
abbrlink: 28295
date: 2021-04-21 18:05:23
tags:
  - YApi
categories: [Web]
---

### 前言
&nbsp;&nbsp;&nbsp;&nbsp;因为最近换了新公司，前后端对接中没有没有使用任何接口文档系统，直接都是丢个txt或者word文件，为了提升开发效率，尝试了使用YApi进行接口文档管理。

&nbsp;&nbsp;&nbsp;&nbsp;YApi旨在为开发、产品、测试人员提供更优雅的接口管理服务，可以帮助开发者轻松创建、发布、维护 API。支持权限控制、可视化接口管理、mock接口、自动化测试、数据导入、插件机制等功能。同时支持内网自己部署，项目由[去哪儿网大前端技术中心](https://github.com/YMFE)维护，使用了Koa + mongoose框架开发，不管是部署还是配置方面对前端很友好，那么接下来开整吧！


### 环境准备
&nbsp;&nbsp;&nbsp;&nbsp;因为YApi是基于node开发，数据存储在mongodb数据库，因此在安装之前需要在服务器安装node和mondodb。

#### mongoDB安装

- 下载mongodb安装包，下载地址：[点我可以直接下载压缩包](https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2004-4.4.5.tgz)

- 下载后在服务器解压
```
  tar -xvf mongodb-linux-x86_64-ubuntu2004-4.4.5
```
- 解压后重命名

```
mv mongodb-linux-x86_64-ubuntu2004-4.4.5/ mongodb
```

- 将mongodb文件夹移动到/usr/local

```
mv mongodb /usr/local
```

- 添加环境变量

```
sudo vim /etc/profile
```

- 添加以下内容并保存

```
export PATH=/usr/local/mongodb/bin:$PATH
```

- 使修改生效

 ```
 source /etc/profile
 ```

- 创建用于存放数据和日志文件的文件夹，并修改其权限增加读写权限

```
# 数据存储目录
sudo mkdir -p /var/lib/mongo
# 日志文件目录
sudo mkdir -p /var/log/mongodb
sudo chown `whoami` /var/lib/mongo     # 设置权限
sudo chown `whoami` /var/log/mongodb   # 设置权限
```
- 在/usr/local/mongodb/bin下面增加配置文件

```shell
# 数据文件存放目录
dbpath = /var/lib/mongo
# 日志文件存放目录
logpath = /var/log/mongodb/mongodb.log
#端口
port = 27017
#是否认证，后续会改成true
auth = false
#远程连接要指定ip 不然无法连接。0.0.0.0不限制ip访问,并开启对应端口
bind_ip = 0.0.0.0
```

#### nodejs安装
&nbsp;&nbsp;&nbsp;&nbsp;这里我使用的是压缩包的方式安装，其实使用ubuntu本身的命令安装会更方便，如下：
```shell
安装nodejs，安装完成通过node -v查看是否安装成功
apt-get install nodejs
安装npm，安装完成通过npm -v查看是否安装成功
apt-get install npm
安装pm2，安装完成通过pm2 -v查看是否安装成功
sudo npm install -g pm2
```
&nbsp;&nbsp;&nbsp;&nbsp;因为使用了压缩包的方式，后面装了npm、pm2、n的时候还需要配置软链接，所以不建议大家使用压缩包方式安装。

- 下载nodejs安装包，下载地址：[点我直接下载](https://npm.taobao.org/mirrors/node/v14.16.1/node-v14.16.1-linux-x64.tar.xz)

- 下载后在服务器解压：
```
tar -xvf node-v14.16.1-linux-x64.tar.xz
```

- 解压后重命名文件夹：
```
mv node-v14.16.1-linux-x64 nodejs
```

- 将nodejs文件夹移动到/usr/local
```
mv nodejs /usr/local
```
- 添加软链接
```
ln -s /usr/local/nodejs/bin/node /usr/local/bin
ln -s /usr/local/nodejs/bin/npm /usr/local/bin
```
- 查看是否安装成功
```
node -v
npm -v
```
![image-20210421100502215](https://tva1.sinaimg.cn/large/008eGmZEgy1gpr50w7o08j30hw04u753.jpg)

- 安装pm2与n进行管理
```
npm install -g pm2
npm install -g n
```
- 添加软链接
```
ln -s /usr/local/nodejs/bin/pm2 /usr/local/bin
ln -s /usr/local/nodejs/bin/n /usr/local/bin
```
- 查看是否安装成功
```
n -V
pm2 -v
```
- 安装成功
  ![image-20210421101841365](https://tva1.sinaimg.cn/large/008eGmZEgy1gpr5f40rinj30hw04egm0.jpg)

**安装node的时候不要安装版本太高，因为后续安装yapi时候node版本太高导致报错了，因此安装10.x左右的版本就行。**

#### 启动mongodb

启动mongodb，进入`usr/local/mongodb/bin`执行以下命令，--fork指的是在后台运行，可以先不加，等后面都配置好了再进行启动即可。

```
./mongod -f mongodb.conf --fork
```

- 配置密码登陆

执行`mongo`命令进去shell，执行以下命令创建一个管理员用户

```shell
1、use admin
2、db.createUser({user:"admin", pwd: "adminpassword", roles: [{role: "userAdminAnyDatabase", db: "admin"}]})
# 用户名为admin，密码为adminpassword，针对admin数据库创建
3、db.auth('admin','adminpassword')  # 验证是否创建成功
```
这样则表示创建成功

![image-20210421113832766](https://tva1.sinaimg.cn/large/008i3skNly1gprd0ln18aj30a001y0st.jpg)

- 在配置文件开启权限认证，打开/usr/local/mongodb/bin/mongodb.conf文件将auth设置为true
  ![](https://tva1.sinaimg.cn/large/008i3skNly1gpric6kvc9j30g007i3zg.jpg)

- 关闭mongodb服务，并重新开启，就可以使用密码进行连接mongodb了
```
./mongod -f mongodb.conf --shutdown
./mongod -f mongodb.conf --fork
```

### 安装yapi
&nbsp;&nbsp;&nbsp;&nbsp;YApi官方提供了可视化部署和命令行部署两种方式，可视化部署方式是在服务器起了一个node服务，在浏览器根据需要填入相关配置后自动部署，命令行方式则是自己修改配置文件后进行部署。具体操作可查看[这里](https://hellosean1025.github.io/yapi/devops/index.html)

```bash
npm install -g yapi-cli --registry https://registry.npm.taobao.org
```
- 添加软链接（因为前面安装node的方式导致这里需要再处理一下）
```
ln -s /usr/local/nodejs/bin/yapi /usr/local/bin
```
- 执行`yapi server`启动安装服务，默认端口9090

- 防火墙开启9090端口，浏览器输入访问地址`http://ip:9090`开始安装

- 安装过程中需要有mongodb数据库的用户名和密码，我们之前建立的是admin数据库的用户名和密码，因为这里我们需要再建立一个yapi数据库的密码
```shell
1、use yapi
2、db.createUser({user:"admin", pwd: "adminyapi", roles: [{role: "readWrite", db: "yapi"}]})
# 用户名为admin，密码为adminyapi，针对yapi数据库创建
3、db.auth('admin','adminyapi')  # 验证是否创建成功
```
- 建立好以后就可以进行安装了，数据库地址填写服务器IP，其他的根据自己的情况填写即可。我在这里使用了navicat进行登陆数据库看了看，Authentication就是指你具体要连接哪个数据库。
  ![](https://tva1.sinaimg.cn/large/008i3skNly1gprhtb1u7wj30km0ik75f.jpg)

- 安装完成后通过http://ip:3000进行访问即可进行注册登陆使用了

**注意事项：服务器的安全组记得开端口9090、3000、27017三个**

### 总结
> 整体安装过程比较简单，官方的脚手架用着也很方便，麻烦的就是mongodb的安装和配置，但是如果用的熟练的话也没有什么问题的。

### 参考
- 官方使用文档: [https://hellosean1025.github.io/yapi/documents/index.html](https://hellosean1025.github.io/yapi/documents/index.html)
- 官方部署文档: [https://hellosean1025.github.io/yapi/devops/index.html](https://hellosean1025.github.io/yapi/devops/index.html)
- 环境搭建文档: [https://zhuanlan.zhihu.com/p/95880755](https://zhuanlan.zhihu.com/p/95880755)
