---
title: 配置npmrc加快项目依赖安装速度
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600418386304&di=7171aa016dbd8c0318b0dbcb9a6239b5&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-f3cb85d3ca5d58e80142a58e4cdb2c57_1200x500.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 8406
date: 2020-01-18 13:51:00
tags: 
   - npm
   - Web
categories: Web
---


- ##### 原因
&emsp;&emsp;在项目中安装某些依赖时，会有不可抗拒的因素，导致依赖安装慢或者安装不上的问题，因为在项目中配置国内taobao源，便于安装。

- ##### 操作
    
    1、在项目根目录新建一个名称为`.npmrc`的文件；
    
    2、将以下内容复制到`.npmrc`文件中；
    
    ```shell script
        registry=https://registry.npm.taobao.org
        disturl=https://npm.taobao.org/dist
        sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
        phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
        electron_mirror=https://npm.taobao.org/mirrors/electron/
        chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver
        operadriver_cdnurl=https://npm.taobao.org/mirrors/operadriver
        selenium_cdnurl=https://npm.taobao.org/mirrors/selenium
        node_inspector_cdnurl=https://npm.taobao.org/mirrors/node-inspector
        fsevents_binary_host_mirror=http://npm.taobao.org/mirrors/fsevents/
    ```
    
    3、执行npm install，安装依赖
    
- ##### 其他
&emsp;&emsp;也可以自行添加更多其他配置，只需要找到对应的淘宝源即可。
