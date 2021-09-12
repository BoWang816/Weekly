---
title: CSS-精通CSS第四章-链式美化
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1915518695,403146418&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 17894
date: 2020-04-22 19:41:39
tags:
   - CSS
   - Web
   - 精通CSS
categories: 
   - [Web, CSS]
---

#### 链接的四种状态：

- a:link {color:#FF0000;} / 未被访问的链接 /
- a:visited {color:#00FF00;} / 已被访问的链接 /
- a:hover {color:#FF00FF;} / 鼠标指针移动到链接上 /
- a:active {color:#0000FF;} / 正在被点击的链接 /
- a:hover / 必须位于 a:link 和 a:visited 之后 /
- a:active / 必须位于 a:hover 之后 /

#### 设置奇特的下划线

- 1、可以为下滑线直接使用background属性，进行美化，使用url添加背景图片；
- 2、为链接目标设置奇特的样式， 实现的方式是在href的末尾添加一个#字符，加上要链接的元素ID，CSS中允许使用:target这个伪类为目标元素设置样式，当然也可以为这个目标元素设置背景样式，只需要使用background属性即可。

#### 显示不同类型的链接
&emsp;&emsp;常用的外部链接可能会显示的与本站链接有所区别，所以我们可以设置外部链接的样式，为外部链接在右上角添加一个类似于小图标的样式。使用的方式是在页面包含外部链接上添加一个类，然后将图标作为这个类的背景图片即可。

#### 创建类似于按钮的链接
&emsp;&emsp;锚是行内元素，这意味着只有在单击链接的内容的时候才能激活，但是有时候希望实现像按钮一样的效果，有更大的点击区域，可以为锚设置display属性，并将属性值设置为block，然后修改width、height属性，并添加相关的CSS更多的美化样式属性即可；
```html
a {
    display:block;
    width:5em;
    line-height:1.5;
    text-align:center;
    text-decoration:none;
    border:1px solid silver;
    background-color:#AAC;
}
```

&emsp;&emsp;使用line—height属性可以使按钮中的文本垂直居中，如果设置height就必须使用内边距将文本压低，模拟垂直居中的效果；但是当需要改变按钮的大小时，内边距不会更改，文字位置就会发生偏移，但是line-height一旦设置以后，一直会保持垂直居中，不论高度将会怎么改变；

#### 多图像翻转与Pixy样式翻转
&emsp;&emsp;可以使用hover属性设置当鼠标悬浮到按钮的时候切换背景颜色，但是单纯的设置背景颜色可能不能达到我们预期的效果，所以有时候可能会为按钮设置背景图片， 但是这种多图像样式范准的缺点是在浏览器第一次加载鼠标悬停的时候，会出现短暂的延时现象，这会造成一定的闪烁效果，会让用户觉得有点反应迟钝，所以可以将鼠标悬停的图像作为背景应用于父元素，从而预先进行加载，这样就不会出现闪烁现象。但是有另一种方法，不切换多个背景图像，而是使用一个图像并切换它的背景位置，使用单个图像的好处是减少了对服务器的请求数量，而且可以将所有的按钮状态放置在一个地方，这种方位成为Pixy方法。使用方式如下：
```html
a:link, a:visited{
   display:block;
   width:200px; 
   line-height:1.5;
   text-indent:-1000em;
   background:url("http://");
}

a:hover,a:focus{
   background-position:right top;
   /*也可以使用数值方式,第一个值为x位置，第二个值为y位置*/
   /*background-position：100px 100px; */
}
```

#### CSS精灵
&emsp;&emsp;上述的方法中，将很多图片包含到一个图像中，从而减少请求数量，但是有一种更好的方式，是将所有需要使用的图像都集中在一个图像中，从而使得网页在加载的时候更少的对服务器发起请求，这种方式就是CSS精灵。在使用方式上和上面所述是一样的。

#### 纯CSS工具提示
&emsp;&emsp;工具提示是当鼠标悬停在具有title属性的元素上的时候一些浏览器hi弹出黄色的小文本框，使用CSS定位技术，可以创建纯CSS工具提示。
