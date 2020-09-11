---
title: JavaScript-权威指南之词法结构
top: 100
comments: true
tags:
  - JavaScript
  - 权威指南
categories: JavaScript
abbrlink: 53488
date: 2019-08-12 09:36:49
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 字符集
&emsp;&emsp;JavaScript程序由Unicode字符集编写，Unicode是ASCII和Latin-1的超集，支持几乎所有的语言；

<!-- more -->

- #### 单词大小写的区分
&emsp;&emsp;在JavaScript中关键字、变量、函数名、标识符都必须统一采取小写形式；HTML中就没有这么严格了，标签和属性名可大写也可小写，但是尽量使用规范统一的代码格式，避免使用时而大写时而小写的标签或者属性名，避免出现可读性差的文档；

- #### 格式控制符
&emsp;&emsp;JavaScript中忽略程序中标识之间的空格，多数情况下也会忽略换行符。
    - 空格符：**普通空格符(\u0020)、水平制表符(\u0009)、垂直制表符(\u000B)、换页符(\u000C)、不中断空白符(\u00A0)、字节序标记(\uFEFF)等；**
    - 行结束符：**换行符(\u000A)、回车符(\u000D)、行分隔符(\u2028)、段分隔符(\u2029)**，回车符加换行符在一起会解析成一个单行结束符；

- #### 标准化
&emsp;&emsp;Unicode标准为所有字符定义了一个首选的编码样式，并给出了一个标准化处理方式将文本转换为一种合适比较的标准格式，JavaScript会认为它正在解析的程序代码已经是这种标准格式，不会再对其标识符、字符串或者正则表达式标准化处理；

- #### 标识符与保留字

    - 标识符：JavaScript中标识符用来对变量和函数进行命名，或者作为某些循环语句中跳转位置的标记；JavaScript中的标识符必须以**字母、下划线、美元符号**开始，后续字符可以是字母、数字、下划线、美元符哈等；

    - 保留字：JavaScript把一些标识符拿出来做关键字，因此这些标识符不能在程序中做标识符了。

    - 1、主要关键字
     break, delete,  function, return,  typeof, case, do, if, switch,  var,catch,else,in,this,    void,  continue,  false,    instanceof,  throw,   while,  debugger,  finally,  new,true,    with,   default,   for,null,try            
    - 2、保留关键字 ：class、const、enum、export、extends、import、super
    - 3、普通模式关键字、严格模式保留字：implements、let、private、public、yield、interface、package、protected、static；    

- #### 可选的分号

    - 两条代码在两行书写，则第一个分号可以省略
      ```
      a=1
      b=2;
      ```
    - 两条代码在一行书写，则第一个分号不可以省略
      ```
      a=1;b=2;
      ```

    **JavaScript并不是在所有换行处都自动添加分号，只是在缺少了分号就无法正常解析代码的时候才会填不补分号**，虽然javascript默认会在当前语句和下一行语句无法合并解析时添加分号，但是在使用return、break、continue语句场景中，这三个后面紧跟换行的话就会出现错误：
    ```
        比如 return    ====>   会被解析成return; true;  
            true；                        
        
        比如 x      ====>      会被解析成x;++y;
            ++
            y;                                    
    ```
    所以为了避免这种错误的出现，我们在书写代码的时候一定要注意分号的添加，不能滥用，不能不用。
              
