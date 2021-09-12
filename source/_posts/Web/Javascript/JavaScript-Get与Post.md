---
title: JavaScript-Get与Post
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604207305702&di=944851c9019b8030d0d9afc3536550b7&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-edfdf66b530ae9b1809f2b64c4e01177_bh.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 50844
date: 2020-11-01 10:09:22
tags: 
   - JavaScript
   - Web
categories: [Web, JavaScript]
---

#### 普通区别
    
   - 最直观的Get把数据请求的参数放在了URL中，而Post则是通过request body传递参数，
   - Get请求在浏览器进行回退的时候是无害的，即不会再次进行提交请求，但是Post回再次提交请求；
   - Get请求会被浏览器主动cache，而Post不会；
   - Get请求只能进行url编码，但是Post支持多种编码方式；
   - Get请求会被完整保留在浏览器的历史记录中，但是Post不会；
   - Get请求在URL中传送的参数是有长度限制的，而Post没有；
   - 对于参数的类型，Get请求只是接受ASCII字符，Post没有限制；
   - Get请求会将传递的参数直接暴露在URL中，不能够传递敏感信息，Post则不是；

#### 数据长度限制

&emsp;&emsp;其实在Http中，对于Get长度是没有限制的，之所以产生限制，是因为不同浏览器以及服务器对它的限制。

   - 浏览器的限制：超过该长度的字符以后，提交按钮会无效导致无法提交数据请求。

        1、IE：最大URL字符长度2083个字符；
        2、Firefox：最大URL字符长度65536个字符；
        3、Safari：最大URL字符长度80000个字符；
        4、Opera：最大URL字符长度190000个字符；
        5、Chrome：最大URL字符长度8192个字符；

   - 服务器的限制：

        1、Apache：最大URL长度8192个字符；
        2、IIS：最大URL长度16384个字符；

#### 更多区别

   - Get和Post本质上还是TCP链接，只不过TCP相当于一辆卡车，当使用Get的时候就相当于把货物放在了车顶上，过往的人都能看见，但是使用Post的时候，相当于把货物放在了车厢中，过往的人是看不见的，所以会比较安全。虽然在Get的时候也可以在车厢中放一点货物，但是这不好，在Post的时候在车顶放一些货物会觉得有毛病，车厢内可以放为什么要放在车顶？另外Get的请求如果超出浏览器限制的范围就相当于超载了，警察叔叔会把你的车扣住，你要是不卸一些货你是不能走的，这就意味着请求不会被提交了，但是这货物很珍贵不能卸，所以就死循环没办法走了。
   - 对于Get请求来说，会产生一个数据包进行发送，但是Post会产生两个TCP数据包；
   - Get请求中，浏览器会把http header和data一起发送出去，服务器响应200返回数据即可；
   - Post请求中，首先要发送header过去打招呼说你好，我要给你发送数据了，然后服务器收到也打招呼，返回100给浏览器说好的，然后浏览器再将data发送过去，服务器收到以后做出响应返回200；
   - 因为Post分为两步进行数据发送，时间上会比Get长一点，所以Get可能会比Post更有效，但是在网速环境十分优良的情况下，这个区别其实不大，但是在网络较差的情况下，这个区别就会很明显。

