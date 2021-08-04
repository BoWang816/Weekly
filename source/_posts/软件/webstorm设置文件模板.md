---
title: webstorm设置文件模板
top_img: 'https://unsplash.it/800/200?random'
comments: true
cover: 'https://cdn.jsdelivr.net/gh/BoWang816/zPicture@main/20210804/webstormCover.png'
copyright_author: bo.wang
description: Webstorm设置文件模板以及模板变量
sitemap: true
tags:
  - Webstorm
  - 软件
categories: 
  - [软件] 
abbrlink: 60426
date: 2021-08-04 09:12:19
---

## 如何设置

**本文设置过程针对Mac，Windows可根据变化，其实差别不大；**

- Webstorm-Preferences，搜索template，找到File and Code Templates
![](https://cdn.jsdelivr.net/gh/BoWang816/zPicture@main/20210803/webstormTemplateSet.png)

- 会展示很多文件模板，可以修改，也可以自己新建添加
- 比如我这里新增了ReactFC-JS、ReactFC-JSX、README三个模板；
- ReactFC-JS如下，支持试用变量如${NAME}, ${USER}等；

    ```javascript
        /**
        * 
        * ${NAME}.js
        * @author ${USER}
        * @since ${DATE}
        */
    
        import React from 'react';
        const Fun: React.FC = props => {
            return (
                <div>
                hello
                </div>
            );
        };
        
        export default Fun;
    ```

- 设置好以后在新建的时候就可以选择了
![](https://cdn.jsdelivr.net/gh/BoWang816/zPicture@main/20210803/webstormTemplate.png)


## 模板中支持的变量有以下内容：

- ${PROJECT_NAME} - the name of the current project(当前项目名).

- ${NAME} - the name of the new file which you specify in the New File dialog box during the file creation.(文件名)

- ${USER} - the login name of the current user.(webstorm用户名)

- ${DATE} - the current system date.(当前日期)

- ${TIME} - the current system time.(当前时间)

- ${YEAR} - the current year.(当前年份)

- ${MONTH} - the current month.(当前月份)

- ${DAY} - the current day of the month.(当前日期)

- ${HOUR} - the current hour.(当前小时)

- ${MINUTE} - the current minute.(当前分)

- ${PRODUCT_NAME} - the name of the IDE in which the file will be created.

- ${MONTH_NAME_SHORT} - the first 3 letters of the month name. Example: Jan, Feb, etc.

- ${MONTH_NAME_FULL} - full name of a month. Example: January, February, etc.

## 模板中还支持自定义变量，有兴趣且有需求的可以去查一下
在除了预定义模板变量，有可能以指定自定义变量。如果需要的话，您可以直接使用的模板定义自定义变量的值 #SET VTL指令。

例如，如果你想使用自己的全名，而不是通过定义你的登录名的 $ {USER} ，写出下面的结构：

`#set( $MyName = "hello" )`

如果一个变量的值不会在模板中定义，WebStorm会问你在应用模板时指定它。使用时就可以使用${MyName}，使用该模板新建文件的时候，${MyName}的位置就会替换为hello;

- 与原始可设置项一样，在进行文件模版注释中设置自定义变量，如：

  ![](https://user-images.githubusercontent.com/26587649/53138750-4b9cb700-35c2-11e9-9763-ebb83b2a5302.png) 

- 结果

  ![](https://user-images.githubusercontent.com/26587649/53138785-62430e00-35c2-11e9-9d9f-7d36522162d0.png)

## 参考
>有网友把官方帮助文档翻译了一遍，[查看地址](https://www.kancloud.cn/zxhy/webstorm/182199)，虽然有些暇疵，但是基本的使用方式都有了。

官方帮助文档：https://www.jetbrains.com/help/webstorm/meet-webstorm.html
