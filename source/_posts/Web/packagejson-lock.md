---
title: 前端项目关闭使用package-lock.json
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1776657357,2127366881&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 21272
date: 2020-09-18 13:47:20
tags: 
   - package-lock.json
   - Web
categories: Web
keywords: web, package-lock.json
---

  简单的说，package-lock.json是npm在安装依赖node_modules时自动生成的一个文件，这个npm5之后才有的，这个文件的功能主要是

- 安装之后锁定包的版本，手动更改package.json文件安装将不会更新包， 想要更新只能使用 npm install xxx@1.0.0 –save 这种方式来进行版本更新package-lock.json 文件才可以；

- 加快了npm install 的速度，因为 package-lock.json 文件中已经记录了整个 node_modules 文件夹的树状结构， 甚至连模块的下载地址都记录了，再重新安装的时候只需要直接下载文件即可, 它的意义在于锁定了包的版本，确保能够避免包版本不同产生的问题。

#### 为什么要关闭：
- 这个文件太大了，虽然打包的时候不会打进去，但是在安装某个依赖之后这个文件会发生变化，在使用版本控制的时候老是需要提交，要想关闭项目生成package-lock.json,主要采用一下命令即可：
```bash
npm config set package-lock false
```
- 使用该命令后，再在项目中运行npm install就不会生成package-lock.json文件了。
