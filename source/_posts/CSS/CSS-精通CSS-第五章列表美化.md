---
title: CSS-精通CSS-第五章列表美化
top: 100
comments: true
tags:
  - Web
  - CSS
categories: CSS
abbrlink: 41413
date: 2019-06-03 22:17:13
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 基本样式列表
>&emsp;&emsp;可以使用list-style-image属性，为li项目添加定制的项目符号，但是这种方式对项目符号图像的位置控制能力不强，更常用的方法是关闭项目符号，并且将定制的项目符号作为背景添加在列表元素上，然后使用背景图像的定位属性精确的控制自定义项目符号的位置；
<!-- more -->
```html
<ul>
    <li>hello</li>
    <li>world</li>
    <li>java</li>
    <li>javascript</li>
    <li>php</li>
</ul>
```
- #### 创建基本的垂直导航条
>&emsp;&emsp;为a标签设置`display:block`转为块级元素之后，根据要求设置相关其他属性，使其展现为一个按钮样式；在将li设置display:inline将li元素设置为横向排列，然后对li进行其他美化样式设置，就可以设置一个基本的垂直导航条；
```html
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>垂直导航条</title>
            <style>
                ul>li>a{
                    display: block;
                    width: 100px;
                    line-height: 1.5;
                    background-color: grey;
                    text-decoration: none;
                    border-top: 1px solid #dfdfdf;
                    color:#FFF;
                }
                li{
                    list-style: none;
                    display: inline;
                }
            </style>
        </head>
        <body>
            <ul>
                <li><a href="">首页</a></li>
                <li><a href="">导航</a></li>
                <li><a href="">关于我们</a></li>
                <li><a href="">联系我们</a></li>
                <li><a href="">退出</a></li>
            </ul>
        </body>
   </html>
```
- #### 创建基本的水平导航条
>&emsp;&emsp;为a标签设置`display:block`转为块级元素之后，根据要求设置相关其他属性，使其展现为一个按钮样式；在将li设置`display:inline-block`将li元素设置为横向排列，然后对li进行其他美化样式设置，就可以设置一个基本的水平导航条；也可以为li设置float属性实现水平布局，当元素浮动之后它不再占据文档流中的任何空间，这种方法比display的方式更好。

   - inline-block：水平排列一行，即使元素高度不一，也会以最大高度的元素为行高，即使小元素周围会留空，也不会被上浮补位，可以设置默认的垂直对齐基线；
   - float:left:让元素脱离当前文档流，呈现环绕排列，如遇上空白，小元素大小可以挤进去，这个小元素就会进行补位，默认是顶部对齐；
```html
<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>水平导航条</title>
      <style>
          ul>li>a{
              display: block;
              width: 100px;
              line-height: 1.5;
              background-color: grey;
              text-decoration: none;
              border-top: 1px solid #dfdfdf;
              text-align: center;
              color: #FFF;
          }
          li{
              list-style: none;
              display: inline-block;
          }
      </style>
  </head>
  <body>
      <ul>
          <li><a href="">首页</a></li>
          <li><a href="">导航</a></li>
          <li><a href="">关于我们</a></li>
          <li><a href="">联系我们</a></li>
          <li><a href="">退出</a></li>
      </ul>
  </body>
</html> 
```
- #### 简化的“滑动门”标签页式导航
```html
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>水平导航条</title>
        <style>
            ul.nav{
                margin:0;
                padding:0;
                list-style: none;
                width: 72em;
                overflow: hidden;
            }
            ul.nav>li{
                float: left;
            }
            ul>li>a{
                display: block;
                width: 100px;
                border-radius: 5px;

                line-height: 2em;
                background-color: grey;
                text-decoration: none;
                border-top: 1px solid #dfdfdf;
                text-align: center;
                float: left;
                color: #FFF;
            }
            a:hover,a:focus{
                color: #333;
            }
            </style>
    </head>
    <body>
        <ul class="nav">
            <li><a href="">首页</a></li>
            <li><a href="">导航</a></li>
            <li><a href="">关于我们</a></li>
        </ul>
    </body>
 </html>
```
