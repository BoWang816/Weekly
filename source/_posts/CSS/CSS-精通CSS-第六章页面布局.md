---
title: CSS-精通CSS-第六章页面布局
top: 100
comments: true
tags:
  - Web
  - CSS
categories: CSS
abbrlink: 52972
date: 2019-06-03 22:38:18
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 列的设置

<!-- more -->

   - 使用CSS实现高度相等的列
   <script src="https://gist.github.com/BoWang816/f907ee02220c0f2e530e2636a12487f7.js"></script>
    
   &emsp;&emsp;在未设置父元素overflow属性之前，父元素如果是固定高低，则子元素就会发生溢出，部分内容显示在父元素之外(红颜色边框为父元素边框)，效果如下：
   ![等列布局.jpg](https://i.loli.net/2019/06/10/5cfdce8fc81c632015.jpg)

   &emsp;&emsp;要想让三个子元素一样高，可以为父元素设置overflow:hidden，这样超出父元素范围的子元素内容会被裁剪，实际上是被隐藏了，效果如下图，但是内容被隐藏不是我们想要的效果，所以需要通过其他方式进行设置：
   ![等列布局优化.jpg](https://i.loli.net/2019/06/10/5cfdce8fcf22391825.jpg)

   &emsp;&emsp;为了把列的底边定位在正确位置，需要让他们与其容器元素的底部对齐，为此需要进行更多的设置；
    <script src="https://gist.github.com/BoWang816/874ac2301f76804952ecee189cfdd252.js"></script>   
   
   - 使用CSS3实现列
   <script src="https://gist.github.com/BoWang816/0a78ceba294df640ab6d3da7854d3022.js"></script>
   实现效果：
   ![css3实现列.jpg](https://i.loli.net/2019/06/10/5cfdce8fcc45415806.jpg)
   &emsp;&emsp;但是存在问题是，p元素是块级元素，在实现的时候首行和尾行都会出现差一行的情况，这是因为在div中又添加了p元素，p元素在创建的时候会自动为其前后各添加空白，所以才导致了这个问题产生。

   - Column布局属性
   
|属性|说明|
|----|--------|
|column-width|定义列的最小宽度，默认是auto，表示列的数量自动调整，可设置具体值 |
|column-count|定义列的数量，最大的列数 |
|column-gap|定义列间距，默认值normal，相当于1em；如果column-gap与column-width加起来大于总宽度的话，会无法显示column-count的总列数，会被浏览器自动调整列数和列宽 |
|column-rule|定义列的边框，类似于border，区别是rule不占据任何空间，设置之后不会导致列宽变化，如果边框宽度大于column-gap列间距，将不会显示边框 |
|column-span|定义是否跨列，默认none不跨列，all表示跨所有列|
|column-fill|定义统一列高，默认auto表示各列高度随内容自动调整，balance表示所有列高都设为最高的列高|

- #### 弹性布局

&emsp;&emsp;针对流式布局的缺点，弹性布局相对来说弥补了这个问题，弹性布局中是相对于字号而不是浏览器来这是元素的宽度，以em为单位设置宽度，可以确保在字号增加时整个布局随之扩大；但是弹性布局也有缺点：

   - 固定宽度布局一样，不能充分的利用页面空间；
   - 在文本字号增大时整个布局会加大，导致布局可能会比浏览器窗口宽，导致水平滚动条的出现；

&emsp;&emsp;为了解决这个缺点问题，可以在需要再容器div上添加max-width:100%，使得页面显示效果更好；
    <script src="https://gist.github.com/BoWang816/a0e9e8beec2949cd06a42f2e611e673c.js"></script>
    实现效果：
    ![弹性布局.jpg](https://i.loli.net/2019/06/10/5cfdce8f8076a44518.jpg)

- #### 流式布局

   - 流失布局不同于固定宽度布局，尺寸大小是通过百分数设置的，而不是像素，这使得流式布局能够相对于浏览器窗口进行伸缩;
   - 流式布局高效的使用了页面空间，且用户体验更好；
   - 但是如果窗口宽度太小，列会变得非常狭窄，不利用阅读，但是可以通过设置em或者px设置min-width，从而避免布局变得太窄；
   - 同时，如果浏览器窗口变得太大，那么整行就会很长，也不方便阅读，解决方法是只让容器跨越可用宽度的一部分，也可以设置padding或者margin为百分比；
   **现在这种情况因为文字不多，浏览器拉伸或者收缩不会产生文本行阅读困难的问题，但是如果文本内容过多则后导致阅读困难，所以要设置类名为content的这个元素的max-width与min-width，避免出现阅读困难的问题；**
   <script src="https://gist.github.com/BoWang816/317ccf9e73bec7343777fe8a4f622f53.js"></script>
   实现效果：
   ![流式布局.jpg](https://i.loli.net/2019/06/10/5cfdce8f7e73786842.jpg)

- #### 浮动布局

    - 两列式浮动布局
    &emsp;&emsp;在一个Div中放置div1和div2，设计要求是div1位于页面的左边，div2位于页面的右边。在创建浮动布局时，将div1和div2进行向左浮动，使用外边距或者内边距为两列之间创建一个隔离带，这种方法使得列在可用空间内包得很紧。因为div1与div2元素是浮动的，它们将不在文档流占据任何空间，这可能会导致页脚向上提升，所以需要在div1与div2的父元素进行溢出处理，从而清理浮动元素。
    <script src="https://gist.github.com/BoWang816/e084c3eeeca03d6fdf3c229323293520.js"></script>
    实现效果：
    ![浮动布局.jpg](https://i.loli.net/2019/06/10/5cfdce8f796ec62541.jpg)
    
    - 三列式浮动布局
    &emsp;&emsp;三列式浮动布局与两列式浮动布局的区别：在div2中添加两个新的div：div3和div4，一个用于次要内容，一个用于主要内容，然后在div2中，将div3向左浮动，将div4向右浮动，这是将div2区分成两列，从而结合div1形成三列效果；
    <script src="https://gist.github.com/BoWang816/c9a9a38b23c49f2cb54cdfb9c4a33aee.js"></script>
    实现效果：
    ![三列浮动布局.jpg](https://i.loli.net/2019/06/10/5cfdce8f7baf777289.jpg)

