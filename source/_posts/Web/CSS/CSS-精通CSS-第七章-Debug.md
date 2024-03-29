---
title: CSS-精通CSS第七章-Debug
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1915518695,403146418&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 23342
date: 2020-09-22 20:04:07
tags:
   - CSS
   - Web
   - 精通CSS
categories: 
   - [Web, CSS]
---

#### CSS Debug

&emsp;&emsp;CSS “掌握困难”的原因不是来源于语言本身，而是为了让站点在老是浏览器上工作的时候正常采取很多措施，但是bug信息又很难找到，不会有详细的文档说明，使用CSS Hack可以解决有时候出现的问题，但是这种方法是不得已才使用的。并且CSS hack只能实现布局效果，并不能找到问题出现的原因。


#### 捕捉 bug
常见CSS问题：

- 1、字母拼写错误，最好使用有语法突出、代码补全功能的开发工具；
- 2、特殊性和分类次序，不要随便添加选择器，删除额外的选择器；
- 3、上下外边距重叠问题，使用控制台工具查看；

#### 捕捉 bug的基本知识
- 1、尽量避免bug；开发的时候就要注意样式书写规范；
- 2、代码隔离测试；将有bug的模块单独拿出来进行测试；
- 3、创建基本的测试案例；删除多余html文档、css样式进行指定范围代码测试；
- 4、修复问题而不是修复症状；不能只要求实现效果，而是要解决问题；
- 5、请求帮助；

#### 拥有布局 haslayout

&emsp;&emsp;拥有布局的元素负责本身以及子元素尺寸的设置与定位，如果一个元素没有拥有布局，那么它的尺寸和位置由最近的拥有布局的祖先元素控制；默认情况下拥有布局的元素包括：body、html（标准模式中）、table、tr、td、img、hr、input、select、textarea、button、iframe、object、marquee

   - 解决办法
        - 1、IE条件注释：条件注释是一种专有的对常规HTML注释的Microsoft扩展，条件注释可以根据条件显示代码块，主要是针对IE；
        - 2、关于hack和过滤器的一个警告：作为一种语言CSS被设计的向前兼容，如果浏览器不理解某个选择器，它将忽略整个规则；如果它不理解某个属性或值，也会忽略整个声明；这意味着添加新的选择器、属性、值应该不会对老式浏览器产生严重的影响。
        - 3、明智使用hack和过滤器
        - 4、应用IE for Mac带通过滤器
        - 5、应用星号HTML Hack； * html {}
        - 6、应用子选择器hack  html>body{}
    
#### 常见bug及其修复方法

- 双外边距浮动bug：IE6或者更低版本中的bug，设置float之后两个盒子之间会有边距，解决的办法是设置display：inline即可。
- 3像素文本偏移bug：IE5和6的bug；
- IE6的重复字bug；
- 相对容器中的绝对定位：原因是相对定位的元素没有获得内部的haslayout属性，因为他们不创建新的定位上下文，所有绝对定位元素相对于视窗进行定位；解决办法是在容器上显式设置width和height，也可以使用条件注释的方式设置容器，使其拥有布局；
- ...
