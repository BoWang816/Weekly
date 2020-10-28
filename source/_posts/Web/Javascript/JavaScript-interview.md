---
title: JavaScript-interview 题集
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603895904622&di=5217ed2d974dd7e0c2d3f7aad1f0701c&imgtype=0&src=http%3A%2F%2Ffile.elecfans.com%2Fweb1%2FM00%2FA8%2F70%2Fo4YBAF2NyjWAA0DYAAE8sIZUZrE783.png'
copyright_author: bo.wang
sticky: 1
sitemap: true
aplayer: true
abbrlink: 32904
date: 2020-10-28 19:48:49
tags: 
   - JavaScript
   - Web
categories: Web
---

#### 同步和异步的区别？
> - 同步是阻塞模式，异步是非阻塞模式；
> - 同步就是指一个进程在执行某种请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，知道收到返回信息才继续执行，在js中普通函数的执行就算是一种同步；
> - 异步是指进程不需要一直等待下去，而是继续执行下面的操作，不管其他进程的状态，当消息返回时系统通知进程进行处理，提高了执行的效率，js中像setTimeout、setInterval就是一种异步执行；

#### Web1.0到3.0变化
- Web1.0    是以编辑为特征，网站提供给用户的内容是网站编辑进行编辑处理后提供的，用户阅读网站提供的内容。这个过程是网站到用户的单向行为，web1.0时代的代表站点为新浪，搜狐，网易三大门户。   
- Web2.0   更注重用户的交互作用，用户既是网站内容的消费者（浏览者），也是网站内容的制造者。（微博、天涯社区、自媒体）是以加强了网站与用户之间的互动，网站内容基于用户提供，网站的诸多功能也由用户参与建设，实现了网站与用户双向的交流与参与；用户在web2.0网站系统内拥有自己的数据。并完全基于WEB，所有功能都能通过浏览器完成。   
    web1.0与web2.0的不同之处： 
    - 在web2.0之中个人不再是互联网信息被动的接收者,而是作为一个主动者参与到了互联网的发展之中!用户不再是一个单纯的浏览者而是成为了互联网这块大网的编织者,使用者与传播者! 
    - web2.0不同于web1.0的最大之处在于它的交互性。这个时期的典型代表有：博客中国、亿友交友、联络家等。   
- Web3.0  Web3.0则完全不一样，其特点可归纳为  
    ① 网站内的信息可以直接和其他网站相关信息进行交互和倒腾，能通过第三方信息平台同 时对多家网站的信息进行整合使用；  
    ② 用户在互联网上拥有自己的数据，并能在不同网站上使用;    
    ③ 完全基于WEB，用浏览器即可以实现复杂的系统程序才具有的功能,比如即时通聊天等 等就可以直接在网页完成，无需下载任何软件。

#### W3C标准
> w3c,world wide web Consortium，万维网联盟，是一系列的标准，网页主要由三部分构成，结构，表现和行为；结构化语言包括XTML和XML，表现语言主要包括CSS，行为标准的主要对象包括对象模型，ECMAscript等。
- 结构标准语言：可扩展标准语言（XML），可扩展超文本标记语言（XHTML）
- 表现标注语言：层叠样式表，即CSS
- 行为标准语言： 文档对象模型（DOM），ECMAScript

#### JavaScript数字类型在计算机中存储情况
> - Javascript中，由于其变量内容不同，变量被分为基本数据类型变量和引用数据类型变量。基本类型变量用八字节内存，存储基本数据类型(数值、布尔值、null和未定义)的值，引用类型变量则只保存对对象、数组和函数等引用类型的值的引用(即内存地址)。
> - JS中的数字是不分类型的，也就是没有byte/int/float/double等的差异。
> - 所有数字都是以64位浮点数形式储存。即8byte

#### ajax与flash的优劣性
> - Ajax的优势：1.可搜索性 2.开放性 3.费用 4.易用性 5.易于开发。
> - Flash的优势：1.多媒体处理 2.兼容性 3.矢量图形 4.客户端资源调度
> - Ajax的劣势：1.它可能破坏浏览器的后退功能   2.使用动态页面更新使得用户难于将某个特定的状态保存到收藏夹中 ，不过这些都有相关方法解决。
> - Flash的劣势：1.二进制格式 2.格式私有 3.flash 文件经常会很大，用户第一次使用的时候需要忍耐较长的等待时间  4.性能问题

#### ajax请求乱码原因与解决方案
> - 发送get请求
    - 产生乱码的原因：
        ie浏览器对应的ajax对象对中文参数值会使用gbk进行编码，而其它浏览器会使用utf-8进行编码。web服务器默认情况下，会使用iso-8859-1进行解码。
    - 解决方案：   
        使用encodeURI<js内置的函数>函数对请求地址进行编码。该函数会对其中的中文参数值按照utf-8进行编码。
        让服务器统一使用utf-8进行解码。比如，可以修改tomcat的配置文件。conf/server.xml对<Connector>添加URIEncoding="utf-8"。tomcat会对所有的get请求<对Post请求无效>中的参数使用utf-8进行解码。

> - 发送post请求
    - 产生乱码的原因：
        所有浏览器对应的ajax对象对中文参数都使用utf-8进行编码。服务器使用iso-8859-1进行解码。
    - 解决方案：  
        request.setCharacterEncoding("utf-8");

#### js中怎样添加、移除、移动、复制、创建、查找节点？
> - 创建节点
     - createDocumentFragment()创建一个DOM片段；
     - createElement()创建一个具体的元素
     - createTextNode()创建一个文本节点
> - 操作节点
     - appendChild()添加一个节点；
     - removeChild()移除一个节点；
     - replaceChild()替换一个节点；
     - insertChild()插入一个节点；
> - 查找节点
     - getElementByTagName()通过标签名称查找节点；
     - getElementByName()通过元素设置的name属性值查找节点；
     - getElementById()通过元素的ID查找节点；

#### js中typeof返回哪些数据类型？
>返回的数据类型有：Object、number、function、boolean、undefined；

#### js有哪些数据类型？
> - 基本数据类型：Number、String、Boolean、Undefined、Null；
> - 复杂数据类型：Object、Array、Function、RegExp、Date、Error；
> - 全局数据类型：Math，JSON；

#### AMD、CMD、CommonJS规范的区别？
> - AMD是RequireJS在推广过程中最模块定义的规范化产生的；
> - CMD是SeaJS在推广过程中对模块化定义的规范化产生的；  
> - 对于依赖的模块，AMD是提前执行，CMD是延迟执行，不过在requireJS 2.0 开始，也改成了可以延迟执行。
> - CMD推崇依赖就近，AMD推崇依赖前置。
> - CommonJS是服务器端的规范，Node中采用了这个规范，CommonJS中规范加载模块是同步的，并且是通过module.exports或者exports的属性赋值来达到暴露模块对象的目的；

#### 为什么利用多个域名来提供网站资源会更有效？
> - 静态内容和动态内容分服务器存放，使用不同的服务器处理请求，针对性的处理动态内容或者静态内容，互相不会影响，CDN缓存更加方便；    
> - 突破浏览器并发限制（一般每个域名简历的链接不超过6个）；
> - 跨域不会传递cookie，节省了带宽；

#### 说说减少页面加载时间的方法
> - 优化图片，利用工具进行图片压缩，在保证不失真的情况下，将图片的大小尽量压缩到最小；
> - 优化CSS文件、JS文件，利用在线压缩工具，去除文件中不必要的空格，换行等；
> - 标明高度和宽度，浏览器没有找到这两个参数，就会一遍下载图片一遍计算大小，如果图片过多，浏览器不断进行调整，加载会变慢；
> - 减少http请求，可以合并可以合并的文件；
> - 使用CDN加速；
> - CSS、JS文件尽量使用外部引用，便于一次缓存下来；

#### 解释一下事件代理？
> JavaScript事件代理可以把事件处理器添加到一个父级元素上，这样就避免了把事件处理器添加到多个子级元素上，当我们需要对很多元素添加事件的时候，可用通过事件添加到它们的父元素而将事件委托给父节点来触发处理函数，这得益于事件冒泡机制，事件代理用到了两个在JavaScript事件中常被忽略的特性：事件冒泡和目标元素。

#### 解释一下JavaScript中的this是如何工作的？
> - this永远指向函数运行时所在的对象，而不是函数被创建时所指的对象，匿名函数或不处于任何对象中的函数指向window。
> - 如果是call、apply、with，指向的this是谁就是谁；
> - 普通的函数调用，函数被谁调用this就是谁；

#### JavaScript中宿主对象和原生对象的区别？
> - 原生对象：本地对象，ECMA-262中把本地对象定义为“独立于宿主环境的ECMAScript实现提供的对象”，原生对象包括 ：Null、Number、Boolean、String、Object、Function、Array、RegExp、Error、Date、Math、JSON、Global、Arguments，是需要通过关键字New来创建的；
> - 内置对象：ECMA-262把内置对象定义为“有ECMAScript实现提供的、独立于宿主环境的所有对象，在ECMAScript程序开始执行时出现”，这意味着开发者不需要new来进行实例化，而是已经被实例化好了。每个内置对象都是本地对象，ECMAScript中的内置对象是Math与Global，Global对象是ECMAScript中最特别的对象，类似于isNaN()、parseInt()、parseFloat()这种看起来像函数的东西，其实都是Global对象的方法，更多的方法再w3c官方文档中也有说明；
> - 宿主对象：所有的BOM和DOM对象都是宿主对象，ECMAScript中的“宿主”就是网页的运行环境，即浏览器和操作系统，所有非本地对象都是宿主对象，ECMAScript官方未定义的对象都属于宿主对象，因为未定义的对象大多数是自己通过ECMAScript程序创建的对象；

#### jJavaScript中call和apply的区别？
> - call(thisObj,Obj);调用一个对象的一个方法，以另一个对象替换当前的对象，call方法可以将一个函数的对象上下文从初始的上下文改变为由thisObj执行的新对象，如果没有提供thisObj对象，那么会用Global对象替代；
> - apply(thisObj,[argArray]);应用某个对象的一个方法，用另一个对象替换当前对象，如果argArray不是一个有效的数组或者不是arguments对象，那么将导致TypeError，如果没有提供thisObj和argArray任何一个参数，那么thisObj对象会被Global对象替代，并且无法传递任何参数。
> - 两者在作用上是相同的，但参数上有区别。对于第一个参数，二者意义是一样的，但是对于第二个参数：apply传入的是一个参数数组，也就是将多个参数组合成一个数组传入，而call则作为call的参数传入，并且apply的好处是可以直接将当前函数的arguments对象作为apply的第二个参数传入；
    
#### JSONP的工作原理？
> JSONP，json with Padding，是一个简单的高效的跨域模式，HTML中的script标签可以加载并执行其他与的JavaScript，于是通过script标记来动态加载其他域的资源。由于同源策略，一般来说位于 server.example.com 的网页无法与不是 server.example.com 的服务器沟通，但是利用script标签的开放策略，网页可用够得到从其他源动态产生JSON资料，而这种模式就是所谓的jsonp，用jsonp抓到的资料并不是json，而是任意的JavaScript，用JavaScript直译器执行而不是json解析器解析。

#### 什么是跨域？
> - 跨域，只要存在协议、端口、域名任意一个不同的情况，就被视作跨域。浏览器的同源策略导致跨域，同源策略分为两种：
    - 1.DOM同源策略：禁止对不同的源的页面DOM进行操作，iframe跨域中不同域名的iframe是限制相互访问的；
    - 2.XMLHttpRequest同源策略：禁止使用XHR对象向不同源的服务器地址发起http请求；

|URL|说明|              是否允许通信|
|----|----|---|
|http://www.a.com/a.js或http://www.a.com/b.js   |      同一域名下       |        允许
|http://www.a.com/lab/a.js或http://www.a.com/script/b.js | 同一域名下不同文件夹   |  允许
|http://www.a.com:8000/a.js或http://www.a.com/b.js    |     同一域名，不同端口    |  不允许
|http://www.a.com/a.js或https://www.a.com/b.js   |     同一域名，不同协议   |   不允许
|http://www.a.com/a.js或http://70.32.92.74/b.js  |    域名和域名对应ip      |  不允许
|http://www.a.com/a.js或http://script.a.com/b.js |     主域相同，子域不同    |  不允许
|http://www.a.com/a.js或http://a.com/b.js        |    同一域名，不同二级域名 | 不允许（cookie这种情况下也不允许访问）
|http://www.cnblogs.com/a.js或http://www.a.com/b.js    |     不同域名       |         不允许

#### 为什么要跨域？
> - 跨域主要是为了安全考虑，浏览器的同源策略主要是用来防止CSRF（跨站请求伪造）攻击，因为用户在访问网站时，每访问一次http请求都会携带cookie信息，当用户登录自己的页面，页面会向用户的cookie添加标识，然后用于再访问了恶意的网页，并且执行了http请求，那么就会携带cookie信息，恶意页面向正常的页面发起请求，会把正常页面上的cookie信息也同时发送，然后正常页面验证cookie正确，就会返回信息，恶意页面就会劫取到返回的数据，那么用户信息就已经泄露了。并且因为上述处理都是后台进行执行，用户并不知道，但是利用了跨域之后，如果监测到域名、协议、端口在用户访问的时候有不同，就会阻止执行，这样就保证了用户访问页面的安全。

#### 跨域的解决方式有哪些？
> - 跨域资源共享（CORS）
    定义可在访问跨域资源时，浏览器与服务器应该如何沟通：使用自定义的HTTP头部让浏览器与服务器行沟通，从而决定该相应或请求是成功还是失败。
> - JSONP跨域
    jsonp主要由两部分组成：回调函数与数据。回调函数是当响应到来的时候在页面中调用的函数，而数据就是传入回调函数中的json数据。在js中，我们直接使用XMLHttpRequest请求不同域上的数据时是不允许的，但是在页面引入不同域上的js脚本文件却是允许的，jsonp就是利用了这个原理。通过引入的js文件加载完成后执行在url参数中指定函数，并且把需要的json数据作为参数传入。jsonp只能用get方式请求，有参数长度限制且安全性差。
    - 使用document.domain来跨子域
    不同的框架之间可以获取window对象，但是无法获取相应的属性和方法，比如一个页面的地址是www.example.com/a.html ，并且这个页面里面有一个iframe，它的src指向是example.com/b.html，显然这两个是不同域的，所以我们通过页面中的js代码时不能进行访问的，这时候就需要使用document.domain进行跨域，我们只需要把两个压面中的document.domain的值设置为相同的域名就可以了，但是在设置的时候，我们只能设置其自身或者更高一级的父域，且主域名必须是相同的。上述情况中我们把页面a和页面b中的document.domain值都设置成example.com即可进行跨域访问。domain可以实现不同的window之间的相互访问，但是只适用于父子window之间的通信，不适用于XMLHttpRequest，并且只能在主域相同子域不同的情况下使用。
    - 使用window.name属性进行跨域
    window对象都有name属性，该属性有一个特征：即在一个window的生命周期内，窗口载入的所有页面都是共享一个window.name的，每个页面都name有读写的权限，但是其最大只能是2M左右，不同的浏览器也有不同的大小限制，并且因为所有页面都可以进行修改，是不安全的，数据传输的类型也仅限于字符串，如果是对象或者是其他数据类型也会被转换成字符串。
    - 使用HTML5中的Window.postMessage进行跨域
    这个方法是html5中的新特性，PC端部分浏览器可能需要降级处理，使用方式window.postMessage(message,targetOrigin)，设置参数message要发送的数据，html5规范中提到该参数可以是JavaScript的任意基本类型或可复制的对象，然而并不是所有浏览器都做到了这点儿，部分浏览器只能处理字符串参数，所以我们在传递参数的时候需要使用JSON.stringify()方法对对象参数序列化，在低版本IE中引用json2.js可以实现类似效果；
    targetOrigin请求url，指明目标窗口的源，协议+主机+端口号[+URL]，URL会被忽略，所以可以不写，这个参数是为了安全考虑，postMessage()方法只会将message传递给指定窗口，当然如果愿意也可以建参数设置为”*”，这样可以传递给任意窗口，如果要指定和当前窗口同源的话设置为”/“。
    - nginx反向代理，可以不同与目标服务器配合，但是需要搭建一个中转nginx服务器，用于转发请求；

#### 说一下变量提升？
> 在js中定义的变量，存在于作用域链中，而在函数执行时会先把变量的声明进行提升，但是不会把赋值操作提升。
```javascript
  var test = function() {
    console.log(name); // 输出：undefined
    var name = "hello";
    console.log(name); // 输出：hello
  }
  var test = function() {
    var name;
    console.log(name); // 输出：undefined
    name = "hello";
    console.log(name); // 输出：hello
  }
```

#### attribute与property的区别是什么？
> - Property，属性，所有的HTML元素都是由HTMLElement类型表示，HTMLElement类型直接继承自Element并添加了一些属性，添加的这些属性分别对应于每个HTML元素都有下面的5个标准特性：id、title、lang、className、dir。DOM节点是一个对象， 因此，它可以和其他JavaScript对象一样添加自定义的属性和方法，property的值可以是任何的数据类型，对大小写敏感，自定义的property不会出现在html代码中，只存在于js中；
  - Attribute，特性，attribute只能是字符串，大小写不敏感，出现在innerHTMl中，通过数组attributes可以罗列所有的attribute。
  - 相同之处：标准的DOM中property与attribute是同步的，公认的特性会被以属性的形式添加到DOM对象中，如id、align等，这时候操作property或者使用操作特性的DOM方法 如getAttribute()的特性名与实际的特性名相同，因此对于class的特性值获取的时候要传入‘class’；
  - 不同之处：
    - getAttribute与点号.获取的值存在差异，如href、src、style等事件处理程序；
    - href：getAttribute获取的是href的实际值，而.获取的是完成的url，存在浏览器差异。
        
#### 解释一下JavaScript中的同源策略？
> 在客户端编程语言中，同源策略是一个很重要的安全理念，它在保证数据的安全性方面有着重要的意义。同源策略规定跨域之间的脚本隔离的，一个域的脚本不能访问和操作另外一个域的绝大部分属性和方法，然后会涉及到跨域请求方面的内容。

#### JavaScript中函数参数arguments是数组吗？
> 在函数代码中，使用特殊对象arguments，开发者无需指明参数名，通过下标就可以访问相应的参数。arguments虽然有一些数组的性质，但并非真正的数组，只是一个类数组的对象，其并没有数组的很多方法，不能像真正的数组那样调用join()、contact()、pop()等这些方法。

#### 什么是‘use strict’，使用它的好处和坏处？
> - 使用‘use strict’意味着js代码按照严格模式解析，使得js在更严格的条件下运行。特点是：
> - 消除JavaScript语法的一些不合理、不严谨之处，较少怪异行为；
> - 消除代码的不安全之处，保证代码运行的安全；
> - 提高编译器效率，增加运行效率；
> - 为新版本的JavaScript做好铺垫；
> - 同样的代码，在严格模式可能有不一样的运行结果，一些在正常模式中可以运行但是在严格模式可能不会运行。
    
#### 说一下对作用域链的理解
> 作用域链的作用是保证执行环境中有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的。

#### 创建ajax过程
> - 常见XMLHttpRequest对象，也就是创建一个异步调用对象；
> - 创建一个新的HTTP请求，并指定该HTTP请求的方法、URL、验证信息；
> - 设置响应HTTP请求状态变化的函数；
> - 发送HTTP请求；
> - 获取异步调用返回的数据；
> - 使用JavaScript和DOM实现局部刷新。

#### JavaScript中垃圾回收的方法有哪些？
> - 标记清除：这是JavaScript中常见的垃圾回收方式，当变量进入执行环境的时候，会被进行标记，当变量离开环境变量的时候，会被进行新的标记。垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境变量中所引用的变量，在这些完成后仍然在标记的就是要删除的变量。
> - 引用计数：在低版本IE中经常出现内存泄漏，很多时候就是因为其采用引用计数方式进行垃圾回收。引用计数的策略是跟踪记录每个值都被使用的次数，当声明了一个变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值引用次数减1，当这个值得引用次数变为0的时候，表示这个变量不再使用了，这个值没法访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。
> - 在IE中虽然js对象通过标记清除进行垃圾回收，但是BOM和DOM对象是通过引用计数回收垃圾的。

#### 说一说webWorker和webSocket
> - worker主线程：
    1. 通过worker=new Worker(url)加载一个js文件来创建一个worker，同时返回一个worker实例；
    2. 通过worker.postMessage(data)方法来向worker发送数据；
    3. 绑定worker.onmessage方法来接收worker发送过来的数据；
    4. 可以使用worker.terminate()来终止一个worker的执行；

> - WebSocket是web应用程序的传输协议，它提供了双向的、按序到达的数据流，它是一个html5协议，websocket的链接是持久的，它通过在客户端和服务器之间保持双工链接，服务器的更新可以被及时推送给客户端，而不需要客户端去轮询。

#### 有哪些性能优化问题？
> - 代码层面：避免使用css表达式，避免使用高级选择器、通配选择器；
> - 缓存利用：缓存ajax，使用CDN，使用外部js、css文件，添加Expires头、服务器配置Etag，减少DNS查找等；
> - 请求数量：合并样式和脚本，使用css图片精灵，按需加载图片资源，静态资源延迟加载；
> - 请求带宽：压缩文件，开启GZIP；
> - 少用全局变量，避免全局查询，多个变量声明合并；
> - 用innerHTML代替DOM操作，减少DOM操作次数，优化JavaScript性能；
> - 用setTimeout来避免页面失去响应；
> - 缓存DOM节点查找的结果；避免使用with，with会创建自己的作用域，会延长作用域链；
> - 避免图片好iframe等空的src，空src会重新加载当前页面，影响速度和效率；

#### ES6的理解
> - 新增模板字符串：为javaScript提供了简单的字符串插值功能；
> - 箭头函数：操作符左边为输入的参数，右边则是进行操作以及返回的值；
> - for-of：用来遍历对象；
> - arguments对象可被不定参数和默认参数完美替代；
> - ES6将promise对象纳入规范，提供了原生的Promise对象；
> - 增加了let、const命令，用来声明变量；
> - 增加了块作用域，实际上let命令就是增加了块作用域；
> - ES6规定，var命令和function命令声明的全局变量属于全局对象的属性；
> - let、const、class命令声明的全局变量补数据全局对象的属性；

#### 闭包的理解
> - 使用闭包主要是为了设计私有的方法和变量，闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内容，会加大内存消耗，使用不当会造成内存泄漏。
> - 闭包的三特性：函数嵌套函数，函数内部可以引用外部参数的变量；参数和变量不会被垃圾回收机制回收；

#### 使用cookie的弊端
> - 每个特定域名下最多生成20个cookie（IE6以下），IE7以后最多可以有50个cookie；Firefox最多50个，chrome和Safari没有硬性限制；
> - IE和Opera会清理近期使用最少的cookie，Firefox会随机清理；
> - cookie最大大约4kb字节；
> - IE中提供了一种存储可以持久化用户数据，叫做userdata，从IE5以后就开始支持，每个数据最多128k，每个域名下最后1M，如果不进行清理，会一直存在；
>
#### new 操作符具体做了什么？
> - 创建了一个新对象，并且this变量引用该对象，同时还继承了该函数的原型；
> - 属性和方法被加入到this引用的对象中；
> - 新创建的对象由this所引用，并且最后隐式的返回this；

#### js延迟加载的方式有哪些？
> - 使用setTimeout延迟方法的加载时间；
> - 让js文件最后加载；
> - 动态创建DOM方式；
> - 用ajax下载代码，建立一个空的script tag，设置text属性为下载的代码；
> - async 属性(缺点是不能控制加载的顺序)
