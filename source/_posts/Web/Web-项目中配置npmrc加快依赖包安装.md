---
title: Web-项目中配置npmrc加快依赖包安装
top: 100
comments: true
tags:
  - Web
  - NPM
categories: Web
abbrlink: 58967
date: 2019-06-18 09:04:10
---
![](https://source.unsplash.com/random/800x200)
<!--&emsp;-->

- ##### 原因
&emsp;&emsp;在项目中安装某些依赖时，会有不可抗拒的因素，导致依赖安装慢或者安装不上的问题，因为在项目中配置国内taobao源，便于安装。

<!-- more -->

- ##### 操作
    
    1、在项目根目录新建一个名称为`.npmrc`的文件；
    
    2、将以下内容复制到`.npmrc`文件中；
    <script src="https://gist.github.com/BoWang816/c7769dd9c135387e42a4f72a2b85ff99.js"></script>
    
    3、执行npm install，安装依赖
    
- ##### 其他
&emsp;&emsp;也可以自行添加更多其他配置，只需要找到对应的淘宝源即可。
