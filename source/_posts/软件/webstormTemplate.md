---
title: webstormTemplate
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3790211540,860916268&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 24805
date: 2019-08-17 10:12:19
tags: 
   - Webstorm 
   - 软件
categories: 软件
keywords: Webstorm
description: webstorm设置文件模版
---


#### Mac版WebStorm设置文件模版

>&emsp;&emsp;在使用WebStorm进行开发时，有时候会用到类似于如下的文件模版，添加文件名称、创建时间、创建人等，WebStorm支持多种可选值。

- 设置
    ```text
    Preferences->Editor->File and Code Template, 在右侧选择你要添加哪类的注释
    ```

    ![](https://user-images.githubusercontent.com/26587649/53138683-14c6a100-35c2-11e9-915d-ad74d22557bc.png)

- 设置内容与生成效果
```text
内容:
/**
 * ${NAME}.js
 * @author ${USER}
 * @since ${DATE}
 */

效果:
/**
 * style.js
 * @author wangbo
 * @since 2019-02-20
 */
```

- 可设置项
    
    ${PROJECT_NAME} -当前项目的名称。
    ${NAME} -你在指定新文件的名称新文件文件的创建过程对话框。
    ${USER} -当前用户的登录名。
    ${DATE} -当前系统日期。
    ${TIME} -当前系统时间。
    ${YEAR} -当前年份。
    ${MONTH} -当前月份。
    ${DAY} -该月的当前日期。
    ${HOUR} -当前时间。
    ${MINUTE} -当前分钟。
    ${PRODUCT_NAME} -在该文件将被创建IDE的名字。
    ${MONTH_NAME_SHORT} -月份名称的前3个字母。例如：一月，二月，等等。
    ${MONTH_NAME_FULL} -一个月的全名。例如：一月，二月，等等。

- 设置自定义变量（#set）
    
    - 与原始可设置项一样，在进行文件模版注释中设置自定义变量，如：

    ![](https://user-images.githubusercontent.com/26587649/53138750-4b9cb700-35c2-11e9-9763-ebb83b2a5302.png) 

    - 结果

    ![](https://user-images.githubusercontent.com/26587649/53138785-62430e00-35c2-11e9-9d9f-7d36522162d0.png)

- 参考
>有网友把官方帮助文档翻译了一遍，[查看地址](https://www.kancloud.cn/zxhy/webstorm/182199)，虽然有些暇疵，但是基本的使用方式都有了。

   官方帮助文档：https://www.jetbrains.com/help/webstorm/meet-webstorm.html
