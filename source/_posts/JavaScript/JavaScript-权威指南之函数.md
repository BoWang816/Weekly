---
title: JavaScript-权威指南之函数
top: 100
comments: true
tags:
  - JavaScript
  - 权威指南
categories: JavaScript
abbrlink: 59238
date: 2019-08-15 13:41:09
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 前言
&emsp;&emsp;JavaScript函数是参数化的：函数的定义包括一个称为形参的标识符列表，这些参数在函数体中像局部变量一样工作。如果函数挂载在一个对象上，作为对象的一个属性，则称为对象的方法，当通过这个对象来调用函数的时候，该对象就是此次调用的上下文，即this的值。*在JavaScript中，函数即对象*
<!-- more -->

- #### 函数定义
```
    function funName(){  //定义没有参数的函数
        函数体
    };

    function funName(x,y){//定义带参数的函数
        函数体
    };

    const f = function(x){//将函数赋值给一个变量，可以不包含名称
        函数体
    };

    const f = function funName(x){//将函数赋值给一个变量，可以包含名称
         函数体
    };

    *函数可以嵌套*
    function h(a,b){
        function square(x){return x*x';}
        return Math.sqrt(square(a) + suqare(b));
    }
```

- #### 函数调用
&emsp;&emsp;函数调用方式有四种：作为函数、作为方法、作为构造函数、通过call方法或者apply方法间接调用；
   - ##### 函数调用
     在一个调用中，每个参数表达式都会计算出来一个值，计算的结果作为参数传递给另外一个函数，这些值作为实参传递给声明函数时定义的形参，在函数体中存在着形参的引用，指向当前传入的实参列表，通过它可以获得参数的值。*在严格模式下，调用上下文this是undefined*
   - ##### 方法调用
     一个方法无非是个保存在一个对象的属性里的JavaScript函数；
     方法调用和函数调用的一个重要区别是方法调用可以使用this
     **this是一个关键字，不是变量，也不是属性名**
     **this没有作用域的限制，嵌套函数不会从调用它的函数中继承this**
     方法链：当方法的返回值是一个对象，这个对象还可以调用它的方法，这种方法调用序列中每次调用的结果都是另外一个表达式的组成部分；

   - ##### 构造函数调用
     构造函数调用创建一个新的空对象，这个对象继承自构造函数的prototype属性。构造函数试图初始化这个新创建的对象，并将这个对象用做其调用上下文，因此这个构造函数可以使用this关键字来引用这个新创建的对象。创建新构造函数的时候，如果没有形参，则可以省略括号。
    ```
    const o = new Object();
    const o = new Object;二者是一样的
    ```
    构造函数中通常不使用return，只要目的是初始化新对象，当函数体执行完毕，则显式返回，这个情况下，构造函数调用表达式的计算结果就是这个新对象的值，如果使用return返回这个对象，那么调用表达式的值就是这个对象；如果构造函数使用return语句但是么有指定返回值，或返回一个原始值，则这个返回值会被忽略，同时这个新对象作为调用结果。

   - ##### 间接调用
     可以将call和apply方法看做某个对象的方法，通过调用方法的形式来间接调用函数。call和apply的第一个实参是要调用函数的对象，它是上下文，在函数体内通过this来获取它的引用。
    ```
    f.call(o);
    f.apply(o);   对象o调用函数f
    ```
    在ES5严格模式中，call和apply的第一个参数都会变成this的值，即使传入的实参是原始值甚至是null或undefined；在非严格模式中，传入的null和undefined会被全局对象代替，而其他原始值会被相应的包装对象所替代；

   * 对于call方法来说，第一个调用上下文实参之后的所有实参就是要传入待调用函数的值
    ```
      f.call(o,1,2);以对象o的方法的形式调用函数f，并传入两个参数；
    ```
   * 对于apply方法，传入的参数都放在一个数组当中：
    ```
      f.apply(o,[1,2]);
    ```
    如果一个函数的实参可以是任意数量，给apply传入的参数数组可以是任意长度的，传入的参数数组可以是类数组对象也可以是真实数组；

- #### 函数的实参和形参
    - ##### 可选形参
      * 当调用函数的时候传入的实参比函数声明时指定的形参个数要少，剩下的形参将设置为undefined值。
      * 当使用可选实参来实现函数时，需要将可选实参方在实参列表的最后；

    - ##### 可变长的实参列表：实参对象
      * 当调用函数的时候传入的实参个数超过函数定义时形参的个数时，没有办法直接获得命名值得引用，使用参数对象解决这个问题；
      * 在函数体中，标识符arguments是指向实参对象的引用，实参对象是一个类数组对象，通过下标就可以进行访问传入函数的实参值，而不用非要通过名字来得到实参；
      * JavaScript中省略的实参都将是undefined，多多来的参数都会自动省略；
      * 实参对象一个重要的作用就是让函数可以操作任意数量的实参，比如：
      ```
        function max(){
            const max = Number.NEGATIVE_INDINITY;
            for(const i=0; i<arguments.length; i++){
                if(arguments[i] > max){
                    max = arguments[i];
                }
            }
            return max;
        }
        这种可以接受任何个数参数的函数称为“不定实参函数”，不定实参函数的实参个数不能为0
      ```
      * 在非严格模式下，当一个函数包含若干形参，实现对象的数组元素是函数形参所对应实参的别名，实参对象中以数字索引，并且形参名称可以认为是相同变量的不同命名。
      ```
        function f(x){
            console.log(x);   实参的初始值
            arguments[0] = null;  修改实参数组的元素同样会修改x的值
            console.log(x);   //输出null
        }
      ```
      * 在非严格模式中，arguments知识一个标识符，在严格模式中是一个保留字；严格模式中的函数不能使用arguments作为形参名或局部变量名，也不能对其赋值。

      * callee与caller属性：在严格模式下，对这两个属性的读写都会产生类型错误，但是在非严格模式下，callee属性指代当前正在执行的函数，caller指代调用当前正在执行的函数的函数，这个属性可以访问调用栈。

    - ##### 将对象属性用作实参
      定义函数的时候，传入的实参都写入一个单独的对象之中，在调用的时候传入一个对象，对象中的名/值对是真正需要的实参数据：
```javascript
function easycopy(args){
    arraycopy(args.form,
              args.form_start || 0,
              args.to,
              args.to_start || 0,
              args.length
    );
}

const a = [1,2,3,4,5,6,6],b=[];
easycopy({form:a, to:b, length:4});
```
- #### 作为值的函数
&emsp;&emsp;JavaScript中函数不仅仅是一种语法，也是值，可以将函数赋值给变量，存储在对象的属性或者数组的元素中，作为参数传入另外一个函数等；
```
    function square(x){return x*x;}
    这个定义创建一个新的函数对象，其变量名是square，函数的名字实际上是看不见的，这个变量名指代了函数对象；
    const s = square;
    square(2);
    s(2);    结果是一样的，s与suqare指代的是一个函数对象
    
    const o = {square:function(x){return x*x;}};
    const y = o.square(12);//将函数赋值给对象的属性，当这个对象属性被调用的时候，函数就是方法；
    ```
   自定义函数属性：
    ```
    JavaScript中的函数并不是原始值，而是一种特殊的对象，函数可以拥有属性。
    当函数需要一个“静态”变量来在调用时保持某个值不变，最方便的方式就是给函数定义属性，而不是定义全局变量；
```

- #### 作为命名空间的函数
```javascript
(function(){
    // 模块代码
}());
```

- #### 闭包
&emsp;&emsp;JavaScript中函数的执行依赖于变量作用域，这个作用域是在函数定义的时候决定的，而不是调用的时候决定的。函数对象可以通过作用域链相互关联起来，函数体内部的变量都可以保存在函数作用域中，这个特性称为“闭包”。从技术角度讲，所有的JavaScript函数都是闭包：它们都是对象，都关联到作用域链。
```javascript
    const scope = "global scope";
    function checkscope(){
        const scope = "local scope";
        function(f){
            return scope;
        }
        return f();
    };
    
    checkscope(); // 返回local scope；
    checkscope() // 函数声明了一个局部变量，并定义了一个函数f()，函数返回了这个变量的值，最后将函数f的执行结果返回。

    const scope = "global scope";
    function checkscope(){
        const scope = "local scope";
        function(f){
            return scope;
        }
        return f;
    };
    checkscope()(); // checkscope函数内嵌套的一个函数对象，而不是直接返回一个结果；
    // JavaScript的函数定义的时候会创建一个作用域链，嵌套函数f在这个作用域内，其中变量scope一定是局部变量；
```
   闭包中的作用域链的概念：
   &emsp;&emsp;将作用域链描述为一个对象的列表，而不是绑定的栈。每次调用JavaScript函数的时候，都会为之创建衣一个新的对象用来保存局部变量，把这个对象添加到作用域链中，当函数返回时，就从这个作用域链中将这个绑定变量的对象删除；如果不存在嵌套函数也没有其他引用指向这个绑定对象，它就会被当做垃圾回收掉。如果定义了嵌套的函数，每个嵌套的函数都各自对应一个作用域链，并且这个作用域链指向一个变量绑定对象。但是如果这些嵌套函数对象在外部函数保存下来，那么它们也会和所指向的变量绑定对象一样被当做垃圾回收；但是这个函数如果有定义和嵌套的函数，并将它作为返回值返回或者存储在某处属性里，这时就会有一个外部引用指向这个嵌套的函数，它就不会被当做垃圾回收，并且它指向的变量绑定对象也不会被当做垃圾回收。

- #### 函数属性、方法、构造函数
   - ##### length属性:函数的length属性是只读属性，它代表函数定义时给出的参数个数。
    ```javascript
    function check(args){
        const actual = args.length;  // 实参的真实个数
        const expected = args.callee.length;  // 期望的实参个数
        if(actual !== expected){
            throw Error(actual + " " + expected);
        }
    }
    function f(x,y,z){
        check(arguments);// 检测实参真实个数和期望实参个数是否相等
        return x+y+z;
    }
    ```
   - ##### prototype属性
     每一个函数都包含prototype属性，这个属性指向一个对象的引用，这个对象称为“原型对象”，每一个函数都包含不同的原型对象，当将函数用作构造函数的时候，新创建的独享会从原型上继承属性。
   - ##### bind()方法：主要用于将函数绑定到某个对象
    ```javascript
    function f(y){ return this.x + y;} // 待绑定函数
    const o = {x:1};  // 将要绑定的对象
    const g = f.bind(o);  // 将通过g(x)调用o.f(x)
    ```
   - ##### toString()方法:返回一个字符串，大多数的toString()方法的实现都返回函数的完成源码，内置函数往往返回一个类似“[native code]”的字符串作为函数体。
   - ##### Function构造函数
     Function()构造函数可以传入任意数量的字符串实参，最后一个实参所表示的文本就是函数体；参数可以包含任何JavaScript语句，每两条语句之间用逗号隔开。
   ```javascript
    const f = new Function("x","y","return x+y;");
    const f = function(x,y){return x+y;};   // 二者是一样的
   ```
        * Function构造函数允许JavaScript在运行时动态的创建并编译函数；
        * 每次调用Function()构造函数都输解析函数体，并会创建新的函数对象；
        * 构造函数创建的函数并不是使用词法作用域，相反，*函数体代码的编译总是会在顶层函数执行*
   ```javascript
    const scope = "global";
    function constructFunction(){
        const scope = 'local';
        return new Function("return scope");//无法捕获局部作用域
    }
    // 通过构造函数所返回的函数使用的不是局部作用域
    constructFunction()();//输出global
   ```
   - ##### 可调用对象:可调用对象是一个对象，可以在函数调用表达式中调用这个对象，所有的函数都是可调用的，但是不是所有的可调用对象都是函数。
     如果想检测一个对象是不是真正的函数对象，可使用类似isArray方法的实现：
   ```javascript
    function isFunction(x){
        return Object.prototype.toString.call(x) === "[object Function]";
    }
   ```

- #### 函数式编程
   - ##### 使用函数处理数组
    ```javascript
    // 使用map和reduce函数处理数组
    const data = [1,23,45,5,564,7,678,88];
    const sum = function(x,y){return x+y;};
    const square = function(x){return x*x;};
    const mear = reduce(data,sum)/data.length;
    const deviations = data.map(function(x){return x-mean;});
    const stddev = Math.sqrt(reduce(map(deviations,squre),sum)/(data.length-1));
    ```

   - ##### 高阶函数:高阶函数就是操作函数的函数，它接收一个或多个函数作为参数，并返回一个新的函数。
    ```javascript
    function compose(f,g){
        return function(){
            //需要给f()传入一个参数，使用f的call方法
            //需要给g()传入很多参数，使用g的apply方法
            return f.call(this,g.apply(this,arguments));
        }
    }
    ```
