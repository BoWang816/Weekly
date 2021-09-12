---
title: JavaScript-事件流
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2269261448,2123572753&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 6816
date: 2020-11-01 10:08:52
tags:
   - JavaScript
   - Web
categories: [Web, JavaScript]
---

#### 概念

   - 事件流，描述的是从页面中接收事件的顺序，但是在IE中的事件流是事件冒泡流，而网景公司的事件流则是事件捕获流。

      - 事件冒泡，即事件开始时由具体元素接收（文档中嵌套最深的那个节点）,然后逐级上升传播到较为不具体的节点（文档）。
      - 事件捕获，即不太具体的节点更早的接收到事件，而具体的节点最后接收到事件，事件捕获的意义在事件到达预定目标之前捕获它，这与事件冒泡是两个相反的概念。
        
#### 事件冒泡示例
```html
<!DOCTYPE html>
     <head>事件流</head>
      <body>
         <div id="mydiv">Click Me</div>    
     </body>
</html>
```
&emsp;&emsp;点击文档中的Click Me则这个click事件会按照如下顺序传播：`div->body->html->document`，click点击事件首先发生在div元素，然后依次向上传播，直到document对象。所有现代浏览器都支持事件冒泡，但是在具体的实现中还是有一定的差别，IE5.5及更早的版本中事件冒泡会跳过html，直接从body到document，在IE9、Firefox、Chrome、Safari中则将事件一直冒泡到window对象；

#### 事件捕获示例
```html
<!DOCTYPE html>
    <head>事件流</head>
     <body>
        <div id="mydiv">Click Me</div>    
     </body>
</html>
```

&emsp;&emsp;同上面一样的代码，但是在事件捕获中，document首先接收到click事件，然后沿着DOM树依次向下，一直到Div元素。
&emsp;&emsp;虽然事件捕获是网景公司唯一支持的事件流模型，但是在IE9、firefox、Chrome、Opera、Safari浏览器中也是支持这种事件模型的，尽管“DOM2级事件”规范要求事件应该从document对象开始传播，但是浏览器依然还是从window对象开始捕获事件的。因为老版本浏览器不支持事件捕获，所以尽量使用事件冒泡，特殊需要时使用事件捕获。
