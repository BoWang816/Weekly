---
title: Web-npm中node-sass安装失败问题
top: 100
comments: true
tags:
  - Web
  - NPM
categories: Web
abbrlink: 57414
date: 2019-05-31 18:59:22
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->


#### node-sass 安装失败问题解决方案
>&emsp;&emsp;前端项目使用scss时，总会出现node-sass安装失败导致项目无法运行的问题，项目中使用了node-sass依赖，但是在windows中安装时总是提示安装失败，可能出现：

<!-- more -->

   - 1、node-sass:command failed
 
   - 2、python问题

   - 3、cannot download win32-x64-XX_binding.node

>&emsp;&emsp;诸如上面的问题，其实可能情况更多，但是最终解决的办法其实应该差不多，出现这种情况除了被墙了之外，很有可能是你电脑安装的node版本与sass版本不对应的问题。

   - 比如node-sass v3.7.0对应node版本：
   
|OS|Architecture|	Node
|----|----|----|
|windows	| x86 或 x64	| 0.10，0.12，1，2，3，4，5，6

&emsp;&emsp;这表示如果你的项目使用的是v3.7.0版本的node-sass，那么你必须安装node 6（包含6）以下的版本；
&emsp;&emsp;在 https://github.com/sass/node-sass/releases 中可以查看指定版本的sass对应的node应该是什么版本。这个问题偶尔也会出现因为墙的原因导致下载不下来，但是一般只要版本对应是正确的，基本不会出现下不下来的问题。
