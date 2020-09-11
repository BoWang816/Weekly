---
title: JavaScript-权威指南之语句
top: 100
comments: true
tags:
  - JavaScript
  - 权威指南
categories: JavaScript
abbrlink: 37689
date: 2019-08-13 17:20:24
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 复合语句与空语句
  JavaScript中将多条语句联合在一起形成复合语句，只需要将多个语句用{}括起来即可。
    
    * 语句块的结尾不需要分号；块中的原始语句必须用分号结束；
    * 语句块中的语句尽量尽心缩进显示；
    * JavaScript中没有块级作用域，语句块中声明的变量并不只是在语句块可使用；
<!-- more -->

- #### 声明语句
  var和function都是声明语句，它们声明变量或定义函数，通过创建变量和函数，可以更好的组织代码的语义。
  - var
    ```
        var语句用来声明一个或者多个变量；
        如果var在一个函数中，那么它定义的就是局部变量，其作用域就是这个函数；
        var声明的变量是无法通过delete进行删除的；
        如果var语句的变量没有指定初始化表达式，那么这个变量的值初始化为undefined；
    ```
  - function
    ```
        关键字function用来定义函数；
        函数语句不能出现在if语句、while语句等语句中；
    ```
  - 函数声明与声明语句的区别：
    ```
        都创建了新的函数对象；
        函数声明语句中的函数名是一个变量，变量指向函数对象；函数定义语句中的函数被显示地提升到了函数的顶部，函数名称和函数体都会被提升；
        var声明的变量提升的之后只会将声明提升，并不会将初始化提升；
        函数声明语句创建的变量也是无法删除的，但是这些变量不是只读的，变量值可以重写；
    ```

- #### 条件语句
  条件语句是通过判断指定表达式的值来决定执行还是跳过某些语句，条件语句中主要if-else语句，switch-case语句；

- #### 循环语句
  JavaScript中的四种循环语句：while、do-while、for、for-in；

   - while语句
    ```
    基本语法：
        while(expression){
            statement;
    }
    ```
    JavaScript解释器首先计算expression的值，
    
    * 如果是假值，则跳过循环体执行程序中的下一条语句；
    * 如果是真值，则执行函数体中的内容，等expression为假值时不再执行函数体内部语句；

   - do-while语句
    ```
     基本语法：
        do{
            statement;
        }while(expression);
    ```
    与While类似，但是do-while至少执行一次循环体中的语句块；

   - for循环语句
    ```
    基本语法：
        for(init;test;increment){
            statement;
        }
    ```

   - for-in语句
    ```
    基本语法：
        for(variable in object){
            statement;
        }
    ```

- #### 跳转语句
  JavaScript中主要有break、continue、return、throw语句进行跳转操作；

    * break语句：跳转到循环或者其他语句的结束；
    * continue语句：终止本次循环的执行并开始下一次循环的执行；
    * return语句：让解释器跳出函数体的执行，并提供本次调用的返回值；
    * throw语句：触发或者跑出一个异常，与try-catch共同使用；
    ![yufa.png](https://i.loli.net/2019/08/13/VCJSnH9PFqufZpG.png)
    * 标签语句：语句是可以添加标签的，标签由语句前的标识符和冒号组成：
    ```
    基本语法：indentfier:statement
    ```
    ```
    基本用法：
        mainloop:while(token != null){
            语句；
            continue mainloop:=;
            语句；
        }
    ```
    通过给语句定义标签，就可以在程序的任何地方通过标签，也可以对多条语句定义标签；break和continue是JavaScript中唯一可以使用语句标签的语句；

- #### 其他语句类型
   - with语句：with语句用于临时扩展作用域链；严格模式禁止使用with，非严格模式也尽量不要使用，会导致代码运行变慢；
    ```
    基本语法：
        with(object){
            statement;
        }
    这条语句将object添加到作用域链的头部，然后执行了statement，最后把作用域链恢复到原始状态；
    ```
   - 指令与语句的区别：
    * 指令不包含任何语言的关键字，指令仅仅是一个包含特殊字符串直接量的表达式；
    * 它只能出现在脚本代码的开始或者函数体的开始、任何实体语句之前，但不一定出现在脚本的首行或者函数体的首行，因为’use strict‘指令之后或者之前都可能有其他字符串直接量表达式语句，并且JavaScript的具体实现可能将解析为解释器自有的指令；
    ![yufa2.png](https://i.loli.net/2019/08/13/RKwPWZlu3bXH9na.png)


