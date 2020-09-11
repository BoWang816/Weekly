---
title: JavaScript-权威指南之对象
top: 100
comments: true
tags:
  - JavaScript
  - 权威指南
categories: JavaScript
abbrlink: 7869
date: 2019-08-13 17:43:28
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 前言
&emsp;&emsp;对象是JavaScript中的基本数据类型；对象是一种复合值，对象可看做属性的无需集合，每个属性都是一个键值对；属性名是字符串，所以我们可以把对象看成字符串到值得映射。JavaScript不仅是字符串到值得映射，还可以从一个称为原型的对象继承属性。除了字符串、数字、Boolean值、null、undefined之外，JavaScript中的值都是对象；对象常见的用法是：创建、设置、查找、删除、检测、枚举.
<!-- more -->

- #### 创建对象
  创建对象的方法：字面量、new关键字和Object.create()函数；

  - 对象直接量
    &emsp;&emsp;创建对象最简单的方式就是在JavaScript中使用对象直接量，对象直接量是由若干对键值对组成的映射表，键值之间用冒号隔开；键值对之间用分号隔开，整个映射表用花括号括起来。
    ```
    var book = {
        "title":"java",
        "time":2017-11-22,
        "content":"this is java"
    }
    ```
    &emsp;&emsp;对象直接量是一个表达式，这个表达式的每次运算都是创建并初始化一个新的对象，如果重复调用的函数中的循环体使用了对象直接量，它就会创建你很多对象，并且每次创建的对象的属性值也可能不同。

  - 通过new创建对象
    &emsp;&emsp;new运算符创建并初始化一个对象，后跟一个函数调用，这里的函数称为构造函数，构造函数用以初始化一个新创建的对JavaScript中的原始类型都包含内置的构造函数。
    ```
    var a = new Array();
    var b = new Object();
    ```

  - 原型创建
    &emsp;&emsp;每一个JavaScript对象（null除外）都是和一个对象相关联，这个对象就是原型，每一个对象都从原型继承属性。所有通过对象直接量创建的对象都具有一个原型对象，并可以通过JavaScript中的Object.prototype获得原型对象的引用。**通过new关键字和构造函数和调用创建的对象的原型就是构造函数的prototype属性的值，Object,.prototype是没有原型的对象，它不继承任何属性。**

  - Object.create()
    &emsp;&emsp;它创建一个新对象，其中第一个参数就是这个对象的原型。它是一个静态函数，而不是提供给某个对象调用的方法；
    ```
    使用方式：
        var obj = Object.create({x:1,y:2});   obj 继承了x和y的属性
        也可以传递null参数创建一个没有原型的新对象
    ```
    也可以通过原型继承创建一个新对象
    ```
    function inherit(p){
        if(p == null){//p是一个对象但是不能是null
            throw TypeError;
        }
        if(Object.create){
            //如果Object.create存在，则直接使用
            return Object.create(p);
        }
        var t = typeof p;
        //不存在则进一步检测
        if(t !== "object" && t !== "function"){
            throw TypeError;
        }
        function f() {
            //定义一个空的构造函数
        };
        f.prototype = p;//将空的构造函数的原型设置为p
        return new  f();//使用f()函数创建p的继承对象
    }
    ```

- #### 对象属性的查询和设置
  - 属性的查询：使用.或者[]运算符来获取属性的值。
     - 对于运算符.来说，右侧必须是一个以属性名称命名的简单标识符；也可以创建属性或为属性赋值；
     - 对于方括号[]来说，方括号内必须是一个计算结果为字符串的表达式，这个字符串就是属性的名字；
    ```
    使用.方法：
    var author = book.author;   //获取book的author属性
    var title = book["main title"];  //获取book的main title属性
    
    使用[]方法：
    book.edition = 5;   //给book创建一个名为edition的属性
    book[main title] = 'ECMAScript';   //给book的mian title添加属性值
    ```
    二者区别：
    - 使用.运算符访问对象的属性时，属性名用一个标识符来表示，标识符直接出现在JavaScript程序中，不是数据类型，程序无法修改；
    - 使用[]来访问对象属性时，属性名通过字符串进行表示，字符串时JavaScript中的数据类型，在程序运行时可以创建它们。
    
    **当时用[]时，表达式必须返回字符串或者返回一个可以转换为字符串的值**

  - 作为关联数组的对象
    JavaScript中的对象都是关联数组，关联数组通过字符串索引而不是数字索引；
    ```
    var add = '';
    for(var i=0; i<10; i++){
        addr += customer["address" + i];       //创建对象的属性并连接起来；
    }
    ```

  - 继承
    JavaScript对象具有“自有属性”，也有一些属性是继承而来。说起继承，就会涉及到原型链的问题。

    * 假设要查询对象o的属性x，如果o中不存在x属性，那么将会在c的原型对象中进行查询属性x，但是若原型对象中也没有，但这个原型对象还有原型，那么会继续在这个型对象的原型对象中进行查询，直到找到x或者另一个原型时null的对象为止，这就是原型链，通过这个链可以实现属性的继承；
    
    * 假设为对象o的属性值x进行赋值，如果o中已经存在x并且这个x属性不是继承而来，那么这个赋值操作会改变这个属性x的值；如果o中不存在属性x，则赋值操作会给o添加一个新属性x；如果之前继承自属性x，那么这个继承的属性被新创建的同名属性覆盖。
    
    * 如果o继承自一个只读属性x，那么赋值操作时不允许的；如果允许进行赋值操作，它也总是在原始对象上创建属性或对已有属性进行赋值，而不会去修改原型链；**在JavaScript中只有在查询属性的时候才与继承有关，该特性可以让开发可以选择性的覆盖继承的属性**
    ```
    var obj = {r:1};  一个用来继承的对象
    var c = inherit(obj);  c继承属性r
    c.x = 1;  c.y = 2;   为c定义两个属性
    c.r = 2;   c覆盖继承来的属性
    obj.r;    输出1，原型对象不会被修改
    ```

  - 属性访问错误
    * 属性不存在报错：查询一个不存在的属性并不会报错，如果在对象o自身的属性或者继承的属性中没有找到属性x，访问o的属性x就会返回undefined；
    * 对象不存在报错：对象不存在的时候查询结果返回就会产生报错，null和undefined对象都没有属性值，查询这些值的属性就会报错；
    避免报错的方法：
    ```
    第一种：
    var len = undefined；
    if(book){
        if(book.title){
            len = book.title.length;
        }
    };
   
    第二种：
    var len = book && book.title && book.title.length;
    ```

    下面的情况为对象o设置属性p会失败：
    
    * o中属性p是只读的：不能为只读属性重新赋值；**defineProperty()方法中有一个例外，可以对可配置的只读属性重新赋值**
    * o中属性p是继承属性，且是只读的；
    * o中不存在自有属性p：如果o中不存在p属性，且没有setter方法可供调用，则p会添加至o中；但是如果o不是可扩展的，那么o不能定义新属性；

- #### 删除对象属性
  delete运算符可以删除对象的属性，它的操作数是一个属性访问表达式，delete只是断开属性和宿主对象的联系，而不会去操作属性中的属性；**delete只能删除自有属性，不能删除继承属性，已经删除的属性可能会存在引用，并且引用在使用delete直接删除这个属性之后依然存在，所以可能会造成内容泄漏，应该在销毁对象的时候遍历属性，依次进行删除。**
    * 当delete表达式成功删除属性时，它返回true，如果delete之后不是一个属性访问表达式，delete也会返回true；
    * delete不能删除那些可配置性为false的属性；严格模式中删除一个不可配置的属性会报类型错误；
    * 通过变量声明和函数声明创建的全局对象的属性是不可配置的，使用delete会报错；
    ```
      delete Object.prototype;   不能删除，属性是不可配置的
      var x = 1;
      delete this.x;   不能删除全局变量属性
      function a(){};
      delete this.a;    不能删除去全局函数
    ```

- #### 检测对象属性
  JavaScript对象可以看做属性的集合，判断某个属性是否存在于某个对象中，可以通过in、hasOwnPreperty()和propertyIsEnumerable()方法检测；

    - 1、in运算符的左侧是属性名（字符串）右侧是对象，如果对象的自有属性或继承属性中包含这个属性则返回true，
    - 2、对象的hasOwnProperty()方法用来检测给定的名字是否是对象的自有属性，对于继承属性它返回false；
    - 3、propertyIsEnumerable()只检测到是自有属性且这个属性的可枚举性为true时它才返回true；*标记*

- #### 枚举对象属性
  JavaScript中对象的属性分为可枚举和不可枚举，它们是由属性的enumerable值决定的，不可枚举属性用for-in是遍历不到的，js中内置属性不可遍历；ES5中定义了两个以枚举属性名称的函数：Object.keys()和Object.getOwnPropertyNames()；
    * Object.keys()返回一个数组，这个数组由对象中可枚举的自有属性的名称组成；
    * Object.getOwnPropertyNames()返回对象的所有自有属性的名称，而不仅仅是可枚举的属性。

- #### 对象属性：getter和setter
  在ES5中属性值可以用一个或者两个方法替代，setter和getter，由这两种方法定义的属性称作“存取器属性”。
    * 当程序查询存取属性的值时，JavaScript调用getter方法（无参数），这个方法返回值就是属性存取表达式的值。
    * 当程序设置存取选择器的值时，JavaScript调用setter方法，将赋值表达式右侧的值当做参数传入；可以忽略返回值。
    
  存取器属性不具有可写性，如果属性同时具有getter和setter方法，那么它是一个可读可写属性；如果只用getter方法，它是一个可读属性，如果只用setter方法，它是一个可写属性；存取器属性是还可以继承的，
    
- #### 属性的特性：值、可写性、可枚举性、可配置性；

- #### 对象的三个属性
  对象的三个属性：原型属性、类属性、可扩展属性
    - 原型属性：对象的原型属性是用来继承属性的，是在实例对象创建之初就设置好的；在JavaScript中将对象作为参数传入Object.getPrototypeOf()可以查询它的原型；    检测一个对象是否是另一个对象的原型（或处于原型链中），使用isPrototupeOf()方法：
    ```
    var p = {x:1};   定义一个原型对象
    var o = Object.create(p);  使用这个原型创建一个对象
    p.isPrototypeOf(o);    true,o继承自p
    Object.prototype.idPrototypeOf(o);   true，p继承自Object.prototype
    ```
    - 类属性：对象的类属性是一个字符串，用以表示对象的类型信息，默认使用toString()返回了如下格式的字符串[object class];数字、字符串、布尔值可以直接调用toString()方法，就像对象调用它一样，并且这个函数包含对null和undefined的特殊处理。通过内置构造函数创建对象的类属性，它与构造函数名称相匹配。为了调用正确的toString()版本，必须间接使用Function.call方法；
    - 可扩展性：对象的可扩展性用以表示是否可以给对象添加新属性。
        * 所有内置对象和自定义对象都是显式可扩展的，宿主对象的可扩展性是由JavaScript引擎定义的；
        * 可以通过将对象传入Object.exExtensible()来判断对象是否是可扩展的；
        * 如果想将对象转换为不可扩展的，需要调用Object.preventExtensions()将带转换的对象作为参数传进去。
        * 一旦将对象转换为不可扩展的，就无法再转回可扩展的了；

- #### 序列化对象
  对象序列化是指将对象的状态转换为字符串，字符串也可以再还原为对象；* JavaScript中提供了内置函数JSON.stringify()和JSON.parse()来序列化和还原JavaScript对象。
    ```
    o = {x:1,y:{z:[false,null,""]}}; 定义一个测试对象
    s = JSON.stringify(o);   s是整个o的字符串内容
    p = JSON.parse(s);  p是o的深拷贝
    ```
