---
title: React-React State Hook
top_img: 'https://unsplash.it/800/200?random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
abbrlink: 53991
date: 2021-01-27 11:43:27
tags:
    - React
    - Web
categories: [Web, React]
---

#### state Hook
&emsp;&emsp;State Hook用于在函数组件中声明变量。在函数组件中，可以使用useState进行变量声明，通过`const [count, setCount] = useState(0);`进行声明，等价于class组件中的`this.state = {count:0}`，在读取时可以直接通过`{count}`进行读取。

- 调用 useState 方法的时候做了什么?
  定义了state变量，因为useState其实相当于封装了`this.state={}`，二者功能是完全相同的；
- useState需要哪些参数？
  useState() 方法里面唯一的参数就是初始 state，在class组件中我们需要设置初始值的话必须将一个对象赋值给this.state，但是useState中只需要将要设置的值作为它的参数即可；
- useState方法返回什么？
  返回值为：当前 state 以及更新 state 的函数。这也是写成 `const [count, setCount] = useState()` 的原因，这与 class 里面 this.state.count 和 this.setState 类似，唯一区别就是你需要成对的获取它们；

  ``` javascript
    import React, { useState } from 'react';
    function Example() {
        const [count, setCount] = useState(0); // 设置初始值，解构赋值
        return (
            <div>
                <p>You clicked {count} times</p>
                   // 通过setCount直接改变state中count的值 
                   <button onClick={() => setCount(count + 1)}>
                   Click me
                  </button>
                </div>
            );
        }
  ```
