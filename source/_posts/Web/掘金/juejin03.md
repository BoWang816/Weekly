---
title: CSS基础面试题
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3387310245,3215677826&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 14491
date: 2020-09-18 14:25:58
tags:
   - 面试
   - CSS
   - Web
categories: 
   - [面试]
   - [Web, CSS]
---

- #### CSS在网页中可以有哪几种设置的方式？
    - 内联（直接在元素内利用style属性设置）；
    - 内嵌（在head标签中用进行设置）；
    - link链接独立CSS文件；
    - @import导入独立CSS文件；

- #### CSS 换行属性
    - 通过使用 word-break 属性，可以让浏览器实现在任意位置的换行。
    - white-space 属性设置如何处理元素内的空白。
    - word-break:break-all,用于处理单词折断。 
    - white-space:no-wrap用于处理元素内的空白，只在一行内显示。

    |word-break 属性值|描述|
    |---|---|
    |normal	|使用浏览器默认的换行规则。
    |break-all	|允许在单词内换行。
    |keep-all	|只能在半角空格或连字符处换行。

    |white-space属性值|描述|
    |---|---|
    |normal	|默认。空白会被浏览器忽略。
    |pre	|空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签。
    |nowrap	|文本不会换行，文本会在在同一行上继续，直到遇到 `<br>` 标签为止。
    |pre-wrap	|保留空白符序列，但是正常地进行换行。
    |pre-line	|合并空白符序列，但是保留换行符。
    |inherit	|规定应该从父元素继承 white-space 属性的值。

- #### CSS Sprites属性
   > CSS Sprites在国内很多人叫css精灵，是一种网页图片应用处理方式。它允许将一个页面涉及到的所有零星图片都包含到一张大图中， 利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位， 访问页面时避免图片载入缓慢的现象。
   
   - 优点
    （1）CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能，这是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；
    （2）CSS Sprites能减少图片的字节；
    （3）CSS Sprites解决了网页设计师在图片命名上的困扰，只需对一张集合的图片命名，不需要对每一个小图片进行命名，从而提高了网页制作效率。
    （4）CSS Sprites只需要修改一张或少张图片的颜色或样式来改变整个网页的风格。
   - 缺点
    （1）图片合并麻烦：图片合并时，需要把多张图片有序的合理的合并成一张图片，并留好足够的空间防止版块出现不必要的背景。
    （2）图片适应性差：在高分辨的屏幕下自适应页面，若图片不够宽会出现背景断裂。
    （3）图片定位繁琐：开发时需要通过工具测量计算每个背景单元的精确位置。
    （4）可维护性差：页面背景需要少许改动，可能要修改部分或整张已合并的图片，进而要改动css。在避免改动图片的前提下，又只能（最好）往下追加图片，但这样增加了图片字节。

- #### link与@import有什么区别？
    - link是XHTML定义的，没有兼容性，@import是CSS自身定义，在IE5.0（css2.1之前）之前是不兼容的；
    - link引入的CSS文件会在网页加载的时候同时加载，@import引入的文件会等html加载完了再进行加载；
    - link引入的CSS文件支持JavaScript控制DOM改变样式，@import引入的则不支持；
    - link也可以引入如sass、less的外部文件，但是@import只能引入CSS文件；

- #### CSS选择器有哪些？优先级如何？
    - 选择器类型：标签选择器(p,a,ul)、属性选择器(a[href=’#’])、类选择器(.mydiv)、ID选择器(#mydiv)、后代选择器(ul li a)、子元素选择器(ul>li)、相邻兄弟选择器(div+p)、伪类选择器(active、focus、hover、link、visited、first-child、lang)、伪元素选择器（first-line(只能用于块级元素)、first-letter(只能用于块级元素)、before、after）；
    - 优先级：内联样式>ID选择器>类选择器>元素选择器；其他的可根据权重进行计算，ID选择器权重为100，类选择器权重10，元素选择器权重1;

- #### CSS reset的用途？
    - Reset重置浏览器的CSS默认浏览器的品种不同，样式不同，进行重置，可以使其统一。

- #### CSS sprite处理方式的理解？
    - CSS图片精灵，是一种网页图片应用处理方式，允许将一个页面所涉及到的所有零星图片都包含到一张大图中去，当访问页面时，载入的图片不会像零散的那样一张一张进行显示。CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置。可以更好的减少网页http请求，大大提高加载性能，可以减少图片的字节，解决了网页图片命名上的困扰；但是在合并图片的时候要预留足够的位置进行图片放置，开发的时候也比较麻烦，维护的时候也比较麻烦，可能只需要改一处但是其他的地方可能会受到影响。

- #### CSS隐藏元素的几种方式？
    - opacity：元素本身依旧占据自己的位置并且对网页的布局也起着作用，也会响应用户的交互操作；
    - visibility：与opacity不同的是不响应任何用户的交互；
    - display：none，这种方式就相当于这个元素不存在；
    - clip-path：在IE下不被完全支持；

- #### CSS清除浮动的方式？
    - 使用带clear属性的空元素；
    - 使用CSS的overflow属性；
    - 使用CSS的:after伪元素；
    - 使用邻接元素处理；

- #### CSS水平居中与垂直居中的方式？
    - 水平居中：
        - 行内元素：text-align：center；
        - Flex布局：用display：flex；justify-content：center；
        - 块级元素水平居中：
            - 定义宽度，设置margin为auto；
            - 设置display：inline，父元素设置相对定位，left设置50%，子元素设置相对定位，left设置50%。
    
    - 垂直居中：
        - 单行文本：设置高度等于line-height；
        - 父元素确定的多行文本，可以使用table标签，然后用vertical-align：middle，不太推荐了。
        - 块级元素垂直居中：
            - 使用绝对定位，设置left、top、margin-left、margin-top；
            - 使用绝对定位，设置margin为auto；
            - 使用transform：translate(x,y)进行移动；
            
- #### CSS3新增了哪些新特性？
    - border-radius圆角边框；
    - box-shadow盒子阴影；
    - border-image边框背景图；
    - background-size背景图片尺寸设置；
    - background-origin背景图片定位区域设置；
    - text-shadow文本阴影设置；
    - word-wrap自动换行；transform中2D转换，translate(x,y)移动，rotate(10deg)旋转，scale(x,y)增加或减少元素尺寸，skew(xdeg,ydeg)翻转；
    - keyframes动画设置；
    - column多列设置；
    - resize是否支持用户调节元素尺寸；
    - box-sizing用确切的方式定义适应某个区域的具体内容；
    - outline-offset对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

- #### display属性的属性值有哪些？
    - block：像块级元素一样进行显示；
    - none：不显示元素；
    - inline-block：像行内元素一样进行显示，但是其内容像块级元素一样显示；
    - list-item：像块级元素一样显示，并添加样式列表标记；
    - inline：默认行为，会被显示为内联元素，元素前后没有换行符；
    - run-in：根据上下文作为块级元素或内联元素显示；
    - inherit：从父级元素继承display的属性值；

- #### position的属性值与区别？
    - absolute：绝对定位，元素框从文档流完全删除，并相对于包含块定位，包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的位置会关闭，就像元素原来不存在一样，元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型；
    - relative：相对定位，元素框偏移某个距离，元素仍然保持其未定位前的形状，它原本所占的位置保留；
    - static：元素框正常生成，块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于父元素中。
    - fixed：元素框的表现类似于将position设置为absolute，不过其包含块是视窗本身；

- #### 什么是CSS Hack？
    简单的说，针对不同的浏览器写不同的CSS样式，就是CSS Hack；主要有条件Hack，属性Hack，选择符Hack；更具体的要查阅相关其他资料。

- #### 如果使用了非标准字体要如何实现？
    - 用图片去代替；
    - 使用在线字库；

- #### 浏览器是如何判断元素是否匹配某个CSS选择器的？
    从后往前判断。浏览器先产生一个元素集合，这个集合旺旺由最后一个部分的索引产生，如果没有索引就是元素的集合，然后向上匹配，如果不符合上一个部分，就把元素从集合中删除，知道整个选择器都匹配完成，还在这个集合中的元素就匹配这个选择器了。

- #### display:none 与 visibility:hidden的区别？
    - display:none;隐藏对应的元素，在文档布局中不再给它分配空间，就相当于它不存在一样；
    - visibility:hidden;隐藏对应元素，但是在文档布局中仍然保留原来的空间。

- #### box-sizing属性？
    标准浏览器下，按照w3c规范对盒子模型解析，一旦修改了元素的边框或者内边距，就会影响元素的盒子尺寸，会导致重新计算元素的盒子尺寸，影响页面布局；
   - box-sizing属性主要用来控制元素的盒模型的解析模式，默认值是content-box；
   - content-box：让元素维持w3c的标准盒模型，元素的高度或宽度由border+padding+content的高度或宽度决定，设置的width或者height指的是content的宽度或者高度；
   - border-box：让元素维持IE传统盒子模型，设置的width或者height指的是border+padding+content的值；
   - padding-box：设置的width或者height指的是content+padding的值；

- #### 行内元素和块级元素的具体区别有哪些？
    - 块级元素：总是独占一行，其后面的元素如果没有经过特殊设置必须在它的下一行显示；width、padding、border、margin都可以进行控制；
    - 行内元素：和相邻的行内元素在同一行；宽度(width)、高度(height)、内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变，padding和margin的left和right是可以设置的。

- #### 拥有内在尺寸、可设置宽高但是不会自动换行的元素有哪些？
    - input、img、button、textarea、label

- #### rgba()和opacity()的透明效果有什么不同？
    rgba()和opacity()都能实现透明效果，但是opacity只能作用于元素，以及元素内的内容的透明度，rgba只作用于元素的颜色或者其背景色。

- #### CSS中可以让文字在垂直和水平方向上重叠的两个属性是什么？
    - 垂直方向：line-height；
    - 水平方向：letter-spacing，可以消除inline-block元素之间的空隙；

- #### LESS、SASS的了解？
    是CSS的预处理器，是CSS的一种抽象层，是一种特殊的语法可以编译生成css；使用预处理器使得css结构更加清晰，便于扩展，屏蔽浏览器私有语法的差异，实现多重继承，兼容CSS代码；

- #### css中的content属性作用是什么？
    content专门应用在before和after伪元素上，用来插入生成的内容；常见的应用是利用伪类清除浮动。after 伪元素通过content在后面生成一个块级元素，然后利用clear属相清除浮动。

    ```css
     .clearfix:after {
        content:".";   
        display:block; 
        height:0;
        visibility:hidden; 
        clear:both; 
    }
    ```

- #### CSS中哪些属性可以继承？
    - 可以继承的样式：font-size，font-family，color，ul，li，dl，dd，dt；
    - 不可继承样式：border、padding、margin、width、height；

- #### CSS优先级算法是如何计算的？
    - 优先级就近原则，同权重情况下样式定义最近者为准；
    - 载入样式以最后载入的定位为准；
    - 同权重情况：内联样式>嵌入式样式>外部样式表；
    - !important>id>class>tag；

- #### CSS3新增伪类有哪些？
    - :first-of-type p:first-of-type 选择属于其父元素的首个元素的每个元素。
    - :last-of-type p:last-of-type 选择属于其父元素的最后元素的每个元素。
    - :only-of-type p:only-of-type 选择属于其父元素唯一的元素的每个元素。
    - :only-child p:only-child 选择属于其父元素的唯一子元素的每个元素。
    - :nth-child(n) p:nth-child(2) 选择属于其父元素的第二个子元素的每个元素。
    - :nth-last-child(n) p:nth-last-child(2) 同上，从最后一个子元素开始计数。
    - :nth-of-type(n) p:nth-of-type(2) 选择属于其父元素第二个元素的每个元素。
    - :nth-last-of-type(n) p:nth-last-of-type(2) 同上，但是从最后一个子元素开始计数。
    - :last-child p:last-child 选择属于其父元素最后一个子元素每个元素。
    - :root :root 选择文档的根元素。
    - :empty p:empty 选择没有子元素的每个元素（包括文本节点）。
    - :target #news:target 选择当前活动的 #news 元素。
    - :enabled input:enabled 选择每个启用的元素。
    - :disabled input:disabled 选择每个禁用的元素
    - :checked input:checked 选择每个被选中的元素。
    - :not(selector) :not(p) 选择非元素的每个元素。
    - ::selection ::selection 选择被用户选取的元素部分。

- #### CSS3中的FlexBox弹性盒布局模型？
    flexbox是一个用于页面布局的全新css功能，可以把列表放在同一个方向并让列表能延伸到占用可用空间。较为复杂的布局还可以通过嵌套一个伸缩容器来实现；
采用flex布局的元素被称为flex容器；它的所有子元素自动成为容器成员被称为flex项目；flex布局是基于flex-flow流可以很方便的用来做居中，能对不同屏幕大小自适应；

- #### 用CSS创建一个三角形实现的原理是什么？
    把上、左、右三条边隐藏掉（颜色设为 transparent）
    ```css
    #demo {
      width: 0;
      height: 0;
      border-width: 20px;
      border-style: solid;
      border-color: transparent transparent red transparent;
    }
    ```
  
- #### 为什么要初始化CSS样式？
    因为浏览器的兼容问题，不同的浏览器对标签的默认值不同，如果没有对CSS初始化往往会出现浏览器页面之间的页面显示差异，但是初始化之后对SEO会产生一定的影响。

- #### CSS里的visibility属性有个collapse属性值的作用？在不同浏览器下以后什么区别？
    - 对于普通元素visibility:collapse，会将元素完全隐藏不占据页面布局，与display:none,表现相同；
    - 如果目标元素为table，则这个属性会将table隐藏但是会占据页面布局空间；仅在Firefox下起作用，IE会显示元素，Chrome会将元素隐藏但是占据空间；

- #### 如果position与display、overflow、float这些特性相互叠加会怎么样？
    - 如果元素设置了display:none，那么元素不会被渲染，position、float将不会起作用；
    - 如果元素拥有进行了绝对定位，那么float将不会起作用；
    - 如果元素float不是none，那么元素脱离文档流，会根据float的属性值进行显示；

- #### 对BFC(块级格式上下文block formatting context)的理解？
    - FC：指页面中一个渲染区域，并且拥有一套渲染规则，决定了其子元素如何定位，以及其他元素的相互关系和作用；
    - BFC：指一个独立的块级渲染区域，只有block-level Box参与，该区域拥有一套渲染规则来约束块级盒子的布局，与其外部区域有关；
    - CSS2.1中规定满足下列CSS声明之一的元素变回2生成BFC：float的值不是none；overflow的值不为visible；display的值不为inline-block、table-cell、table-caption；position的值为absolute或fixed；
    - BFC的约束规则：生成BFC元素的子元素会一个接一个的放置。垂直方向上他们的起点是一个包含块的顶部，两个相邻子元素之间垂直距离取决于元素margin特性，在BFC中相邻的块级元素外边距会被折叠；
    - 生成BFC元素的子元素，每一个子元素的外边距和包含块的左边界相接触，对于从右到左的格式化，右外边距与右边界接触，除非这个子元素也创建了一个新的BFC；

- #### 为什么要清除浮动？有哪些方式？
    清除浮动是为了清除使用浮动元素产生的影响，浮动的元素高度会塌陷，高度塌陷会使得页面的布局产生紊乱，不能正常显示；
   - 清除浮动的方式：
        - 使用overflow:hidden；
        - 使用clear:both；
        - 使用after伪元素，添加content内容为空；
        - 使用双伪元素，但是不严谨：　
        ```css
        .clearfix:before,.clearfix:after {
                 content: "";
                 display: block;
                 clear: both;
           }
           .clearfix {
                 zoom: 1;
           }
       ```
     
- #### zoom:1的清除浮动原理？
    - 清除浮动，触发IE的haslayout；
    - Zoom是IE浏览器的专属属性，可以设置或检索对象的缩放比例；
    - 当设置zoom的属性值后，所设置的元素就会扩大或者缩小，高度宽度就会宠溺新进行计算了，一旦改变zoom的值其实就会发生重新渲染，利用这个原理也会解决ie下子元素浮动时父元素不随着扩大的问题；
    - 目前非IE浏览器不支持这个属性进行元素缩放，但是可以使用CSS3中transform：scale属性进行缩放；

- #### ::before与:after中双冒号和单冒号有什么区别？
    - 单冒号：用于CSS3的伪类；
    - 双冒号用于CSS3中的伪元素，新的CSS3中引入的伪元素不再支持旧的单冒号的写法；

- #### 让页面里的字体变清晰，变细用CSS怎么做？
    - -webkit-font-smoothing: antialiased;

- #### font-style有哪些属性值？
    - normal：默认值，浏览器显示一个标准的字体样式；
    - italic：浏览器显示一个斜体的字体样式；
    - oblique：浏览器显示一个倾斜的字体样式；
    - inherit：继承父元素的样式；

- #### 如果需要手写动画，你认为最少时间间隔是多久？
    多数显示器的默认频率是60HZ，即1秒刷新60次，理论最小是间隔是1/60 * 1000ms=16.7ms；
