---
title: markdown 基本用法
top_img: 'https://unsplash.it/800/200?random'
comments: true
cover: 'https://tva1.sinaimg.cn/large/008eGmZEly1gmm62h46ruj30m80ci3yw.jpg'
copyright_author: bo.wang
sitemap: true
tags:
  - 工具
  - markdown
categories: 工具
abbrlink: 9439
date: 2021-01-13 16:44:26
---

## 前言
> 写作过程中经常用到Markdown写文章，然有时候某个语法忘了，就得度一度，所以这次我帮你们整理好了！记不住的话就收藏一下，收藏了就能随时查看啦！

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/795cb2d981444e35a64662e0d8cf4560~tplv-k3u1fbpfcp-watermark.image)

### <a id="top"> 我是顶部位置 </a>

[我想直奔评论](#bottom)

### 分割线
1. 使用\*的分割线

- 效果:
******************
- 语法：\*********

2. 使用--的分割线
- 效果:
------
- 语法：\--------

### 引用
- 效果:
> 引用内容
> >嵌套引用 '>' 使用字符

- 语法：单个：\>；   嵌套：\>>

### 标记
- 效果：
    * 使用\*标记
    + 使用+标记
    - 使用-标记

- 语法：\* xxx, \+ xxx, \- xxx

### 列表
- 效果:
1.  有序列表1
    1.  嵌套
    2.  嵌套
2.  有序列表2

- 语法：
```text
1. hhhhh
2. wwwww
3. qqqqq
```


### 代码
1. 行内代码
- 效果:
  我是`console.log('行内')`代码

- 语法：\`console.log('行内')\`

2. 块代码，指定语法代码
- 效果:
```javascript
// 这里是一段块代码，并且是javascript代码
console.log('块代码');
```

- 语法：
```text
  ```javascript
  // 这里是一段块代码，并且是javascript代码
  console.log('块代码');
  \``` 这里要去掉\
```


### 链接
1. 普通超连接:
- 效果:[Google](https://www.google.com)
- 语法：`[Google](https://www.google.com)`

2. 本地超链接:
- 效果:[markdown](./img/default.jpg)
- 语法：`[markdown](./img/default.jpg)`

3. 包含title的超链接：
- 效果:[titile](https://www/baidu.com, '百度')
- 语法：`[titile](https://www/baidu.com, '百度')`

### 换行
- 效果:

你好，<br/>滚

- 语法：使用\<br/>换行

### 图片
1. 行内图片：
   ![GitHub](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec1dcdca336b465a9728d0ae1391d167~tplv-k3u1fbpfcp-zoom-1.image)

- 语法：`![GitHub](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec1dcdca336b465a9728d0ae1391d167~tplv-k3u1fbpfcp-zoom-1.image)`

2. 包含title的图片：
   ![Github](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51818583701142ca9326314b413efaaa~tplv-k3u1fbpfcp-zoom-1.image "好美啊")

- 语法：`![Github](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51818583701142ca9326314b413efaaa~tplv-k3u1fbpfcp-zoom-1.image "好美啊")`

3. 指定图片大小：
   <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e580b1a56ee94085a8b1769833e24569~tplv-k3u1fbpfcp-zoom-1.image" alt="GitHub" title="Cat" width="200" height="200" />

- 语法：
  `<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e580b1a56ee94085a8b1769833e24569~tplv-k3u1fbpfcp-zoom-1.image" alt="GitHub" title="Cat" width="200" height="200" />`

### 强调
1. 表示强调：
- 效果: **我是被强调的**，__好巧，我也是__
- 语法： \*\*这里写**

2. 表示加粗斜体：
- 效果: ***加粗斜体***
- 语法：\*\*\*这里写***

3. 斜体：
- 效果: *啊，我弯了*
- 语法：\*这里写*

4. 背景高亮：
- 效果: ==好家伙，掘金好像不支持==
- 语法：\=\=这里写==，

### 需要转义的字符
需要转义的字符：用法：比如想显示*，则 **我是被强调的\***

```
\
`
*
_
{}
[]
()
#
+
-
.
!
```

### 删除线
- 效果：~~被删除了啊~~
- 语法： \~\~被删除了啊~~

### 表格
1. 表格左对齐：
   | name | age  |
   | :--- | ---- |
   | wang | 20   |

- 语法：
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56a1985b455c463c84d600dad2ff8641~tplv-k3u1fbpfcp-watermark.image)

2. 表格居中：

| name | age  |
| :--: | :--: |
| wang |  20  |

- 语法：
  ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5f41253b6f54ed2946d6301f467d416~tplv-k3u1fbpfcp-watermark.image)

3. 表格右对齐：

| name |  age |
| ---: | ---: |
| wang |   20 |

- 语法：
  ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a19120714b7b487a9ca6abf6b80f2f4f~tplv-k3u1fbpfcp-watermark.image)

- 表格中使用其他内容：

| name       | age                            |
| :--------- | ------------------------------ |
| **强调哦** | [一个链接](https://google.com) |

语法：
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a9e9b81d4da4e8c8c9e64d18263a680~tplv-k3u1fbpfcp-watermark.image)

### 完成清单
- 效果:
    - [ ] 还没有完成
    - [x] 已经完成了

- 语法：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d96fc821ccd1450c86e0f8c5452e9cf5~tplv-k3u1fbpfcp-watermark.image)

### 缩进
- 效果:

&emsp;&emsp;我缩进去了啊

&nbsp;&nbsp;&nbsp;&nbsp; 好巧我也是

&ensp;&ensp;&ensp; 这么巧吗？

- 语法：
  ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b964b0b2507b43d6b499a7a6588ff97d~tplv-k3u1fbpfcp-watermark.image)


### 对齐
- 效果:

<p align="left">行左对齐</p>
<center>居中？掘金好像不支持啊</center>	
<p align="right">行右对齐</p>

- 语法：
  ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1be48d2f616f42ffaccc35ba7f943276~tplv-k3u1fbpfcp-watermark.image)


### 参考
- 效果：

我经常去的几个网站[Google][1]、[掘金][2]。

[1]:http://www.google.com
[2]:http://www.juejin.cn

- 语法：
```
我经常去的几个网站[Google][1]、[掘金][2]。

[1]:http://www.google.com 
[2]:http://www.juejin.cn
```


### 注脚
- 效果:
  Markdown[^1]真的很棒棒, 可以转换成 HTML[^2]。并且会在文档末尾展示[^3]

[^1]: Markdown是一种纯文本标记语言
[^2]: 超文本标记语言
[^3]: 文档末尾注脚

- 语法：
```
Markdown[^1]真的很棒棒, 可以转换成 HTML[^2]。并且会在文档末尾展示[^3]

[^1]: Markdown是一种纯文本标记语言
[^2]: 超文本标记语言
[^3]: 文档末尾注脚
```


### 锚点
- 效果:
  [回到顶部](#top) 我在顶部定义了a标签

- 语法： \[回到顶部](#top)

### 标记
- 效果:
  <mark>你好啊，我收藏了</mark>

- 语法：
  \<mark>棒啊，我收藏了\</mark>

### 折叠
- 效果:
<details>
  <summary>点击查看详细内容</summary>

```javascript
  console.log('我是折叠了的内容啊');
```

</details>

- 语法：
```text
<details>
  <summary>点击查看详细内容</summary>

	```javascript
  	console.log('我是折叠了的内容啊');
	```

</details>
```

## 总结
> 日常写作中用到的，大概就这么多啦，如果有更多的好用的有用的，欢迎大家继续补充添加！

### <a id="bottom"> 点赞、评论吧 </a>
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5e933c960064473834559ba252ad60c~tplv-k3u1fbpfcp-watermark.image)

