---
title: CSS-精通CSS第三章-可视化格式模型
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1915518695,403146418&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 23194
date: 2020-03-22 19:35:32
tags:
   - CSS
   - Web
   - 精通CSS
categories: 
   - [Web, CSS]
---

#### 标准盒模型
>&emsp;&emsp;主要由content、padding、border、margin构成。

在CSS中，width与height指的是内容区域的宽度和高度，增加内边距padding、外边距margin不会影响width的尺寸，但是会增加整个盒子的总尺寸。在盒模型中，padding、width、height、border不可以是负值，但是margin可以是负值。

   ![](https://i.loli.net/2019/02/25/5c739b9b16b28.png)

   CSS3中新增属性box-sizing，允许以特定的方式匹配某个区域的特定元素，box-sizing的属性值有：
   
   - content-box:由CSS2.1规定的宽度高度行为，宽度和高度分别应用到元素的内容框，在宽度和高度之外绘制元素的内边距和边框；padding和border不被包含在定义的width和height之内，对象实际宽度等于设置的width值和padding、border之和。此属性表现为标准模式下的盒模型；
   - border-box:为元素设定的宽度和高度决定了元素的边框盒，为元素指定任何内边距和边框都在讲已设定的宽度和高度内进行绘制；padding和border被包含在定义的width和height之内，对象实际宽度等于设置的width值，即使定义有border和padding实际宽度。此属性表现为怪异模式下的盒模型;
   - inherit:从父元素继承box-sizing属性的值；

   ```html
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <style>
                .test {
                    width: 200px;
                    height: 70px;
                    padding: 10px;
                    border: 15px solid #999;
                    -moz-box-sizing: content-box;
                    -ms-box-sizing: content-box;
                    box-sizing: content-box;
                    background: #eee;
                    <!--标准盒模型-->
                }
        
                .test2 {
                    width: 200px;
                    height: 70px;
                    padding: 10px;
                    border: 15px solid #999;
                    -moz-box-sizing: border-box;
                    -ms-box-sizing: border-box;
                    box-sizing: border-box;
                    background: #eee;
                    margin-top: 20px;
                    <!--怪异盒模型-->
                }
            </style>
        </head>
        <body>
            <div class="test">content-box</div>
            <div class="test2">border-box</div>
        </body>
    </html>
   ```

#### 外边距叠加问题
- 上下相邻盒模型外边距合并问题：
>&emsp;&emsp;当两个或者更多垂直外边距相遇时，它们将形成一个外边距，这个外边距的高度等于两个发生叠加的外边距的高度的较大者。当div1出现在div2上面时，div1的下外边距就会与div2的上外边距发生合并，如下图

![1.gif](https://i.loli.net/2019/05/23/5ce6a368c0e4715553.gif)

- 盒子包含盒子外边距合并问题
>&emsp;&emsp;同样当div4包含在div3中时，它们的上下外边距也会发生合并，如下图
![2.gif](https://i.loli.net/2019/05/23/5ce6a368c0ef562485.gif)

- 空元素自身上下边距合并问题
>&emsp;&emsp;尽管一个空元素，如果为它设置了上边距和下边距，则二者就会发生合并，如下图
![3.gif](https://i.loli.net/2019/05/23/5ce6a368c0e4788656.gif)

- 空元素外边距与其他元素外边距合并问题
>&emsp;&emsp;如果空元素设置了上下外边距，且与它上下相邻的元素也存在上下边距的话二者也会发生合并，如下图
![4.gif](https://i.loli.net/2019/05/23/5ce6a368c0f8158815.gif)

- 外边距重叠的导致的问题
>&emsp;&emsp;当我们在使用段落的时候，都设置了p元素，那么上下段落都是块级元素，如果设置了外边距，二者可能就会发生重叠，那个就不会达到我们预期的效果，所以我们需要去除这个重叠问题。块级元素上下外边距重叠问题常用的解决方案：
   
- 外层元素使用padding代替margin;
- 内层元素设置透明边框border:1px solid transparent;
- 内层元素使用绝对定位position:absolute;
- 外层元素设置overflow:hidden;
- 内层元素设置float:left或者display:inline-block;
- 内层元素使用padding：1px;

#### 定位问题

>&emsp;&emsp;CSS中有三种定位机制：**普通流、浮动、绝对定位**，除非专门的指定，否则所有框都在普通流中定位。块级框从上到下一个接一个垂直排列，框之间垂直距离由框的垂直外边距计算；行框在一行水平排列，使用水平内边距、边框、外边距可以进行调整，同样在行内框上设置显式的高度和宽度是不受影响的；CSS2中使用display的属性设置为inline-block可以使元素像行内元素一样水平一次排列，但框的内容依然符合块级框的行为；在一种情况下，即使没有进行显式定义，也会创建块级元素，即将文本添加到一个块级元素中时的情况；

- 相对定位 relative
&emsp;&emsp;在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。被看作普通流定位模型的一部分，定位元素的位置相对于它在普通流中的位置进行移动。使用相对定位的元素不管它是否进行移动，元素仍要占据它原来的位置。
移动元素会导致它覆盖其他的框。示例：
```html
<html>
    <head>
    <style type="text/css">
        .box1{
            background-color: red;
            width:100px;
            height:100px;
        }
        .box2{
            background-color: yellow;
            width:100px;
            height:100px;
            position: relative;
            left: 20px;
        }
        .box3{
            background-color: blue;
            width:100px;
            height:100px;
            position: relative;
            right: 20px;
        }
    </style>
    </head>
    
    <body>
        <div class="box1">box1</div>
        <div class="box2">box2</div>
        <div class="box3">box3</div>
    </body>
</html>
```
- 绝对定位 absolute
&emsp;&emsp;相对于已定位的最近的祖先元素，如果没有已定位的最近的祖先元素，那么它的位置就相对于最初的包含块（如body）。绝对定位的框可以从它的包含块向上、右、下、左移动。绝对定位的框脱离普通流，所以它可以覆盖页面上的其他元素，可以通过设置Ｚ-Iindex属性来控制这些框的堆放次序。
```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <style>
        *{margin: 0; padding: 0;}
        #div1 {
            width: 200px;
            height: 200px;
            background: yellow;
        }
        #div2 {
            width: 50%;
            height: 50%;
            background: red;
            top: 100px;
            left: 100px;
            position: absolute;
        }
        </style>
    </head>
    <body>
        <div id="div1">
            <div id="div2"></div>
        </div>
    </body>
</html>
```

- 固定定位 fixed
&emsp;&emsp;相对于浏览器窗口，其余的特点类似于绝对定位，是绝对定位中的一种。

#### 浮动概述
&emsp;&emsp;浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。

- 左浮动(float:left)
&emsp;&emsp;当框 1 向左浮动时，它脱离文档流并且向左移动，直到它的左边缘碰到包含框的左边缘。因为它不再处于文档流中，所以它不占据空间，实际上覆盖住了框 2，使框 2 从视图中消失.
![6.gif](https://i.loli.net/2019/05/23/5ce6a368dd12470588.gif)

- 右浮动:(float:right)
&emsp;&emsp;当把框 1 向右浮动时，它脱离文档流并且向右移动，直到它的右边缘碰到包含框的右边缘：
![5.gif](https://i.loli.net/2019/05/23/5ce6a368ddb5f30414.gif)

- 浮动"卡住"
&emsp;&emsp;如果包含框太窄，无法容纳水平排列的三个浮动元素，那么其它浮动块向下移动，直到有足够的空间。如果浮动元素的高度不同，那么当它们向下移动时可能被其它浮动元素“卡住”.
![7.gif](https://i.loli.net/2019/05/23/5ce6a368dc61547478.gif)

- 行框和清理
浮动框旁边的行框被缩短，从而给浮动框留出空间，行框围绕浮动框。

    - 创建浮动框可以使文本围绕图像 
    ![9.gif](https://i.loli.net/2019/05/23/5ce6a368efb2b17504.gif)
    
    - 要阻止行框浮动，需要进行clear属性设置
    1、clear 属性的值可以是 left、right、both 或 none，它表示框的哪些边不应该挨着浮动框。
    2、为了实现这种效果，在被清理的元素的上外边距上添加足够的空间，使元素的顶边缘垂直下降到浮动框下
    ![8.gif](https://i.loli.net/2019/05/23/5ce6a368f090516316.gif)

#### clear属性详解： 

| 属性值  | 说明
|---|---
|left	| 在左侧不允许浮动元素。
|right	| 在右侧不允许浮动元素。
|both	| 在左右两侧均不允许浮动元素。
|none	| 默认值。允许浮动元素出现在两侧。
|inherit | 规定应该从父元素继承 clear 属性的值。

#### CSS 定位属性:

| 属性值  | 说明
|---|---
|position	| 把元素放置到一个静态的、相对的、绝对的、或固定的位置中。
|top	| 定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。
|right	| 定义了定位元素右外边距边界与其包含块右边界之间的偏移。
|bottom	| 定义了定位元素下外边距边界与其包含块下边界之间的偏移。
|left	| 定义了定位元素左外边距边界与其包含块左边界之间的偏移。
|overflow	| 设置当元素的内容溢出其区域时发生的事情。
|clip	| 设置元素的形状。元素被剪入这个形状之中，然后显示出来。
|vertical-align	| 设置元素的垂直对齐方式。
|z-index	| 设置元素的堆叠顺序。

#### 清除浮动方式：

|清除浮动的手段	| 产生的问题
|---|---
|父级div定义高度	| 真正的需求中布局太死板，后续问题很多
|结尾处加空div标签 |clear:both html结构中增加了无意义的div，结构冗杂
|父级div定义 伪类:after 和 zoom	| 无发现，较完美的手段，兼容性好
|父级div定义 overflow:hidden	| 所有的子元素都不能超出父元素范围定位，不然会消失，这种情况下表现不好
|父级div定义 overflow:auto	| 内部元素超过父元素时会出现滚动条
|父级div 也一起浮动	| 产生新的浮动
|父级div定义 display:table	| 会产生各种问题，用这种古老的东西
|结尾处加 br标签 clear:both	| 类似第二种，br现在已经很少用了
