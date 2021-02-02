---
title: React-React State Hook
top_img: 'https://unsplash.it/800/200?random'
comments: true
description: Hook中useState的基础用法
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

### state Hook
&emsp;&emsp;State Hook用于在函数组件中声明变量。在函数组件中，可以使用useState进行变量声明，通过`const [count, setCount] = useState(0);`进行声明，等价于class组件中的`this.state = {count:0}`，在读取时可以直接通过`{count}`进行读取。

#### 声明state变量

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


#### 读取state

   - class组件
    在使用class组件时获取state需要使用this.state.xxx即可，如
    ```javascript
      <p>You clicked {this.state.count} times</p>
    ```
   - Hook组件
    但是在hook中，因为使用了useState定义了state变了，则可以直接使用即可，如
    ```javascript
        const [xxx, setXxx] = useState(0);
        <p>You clicked {xxx} times</p>
    ```


#### 更新state

   - class组件
    在使用class组件时更新state需要使用this.setState({xxx: 111})即可，如
     ```javascript
      <button onClick={() => this.setState({ xxx: this.state.xxx + 1 })}>
        Click me
      </button>
     ```
     
   - Hook组件
    但是在hook中，使用useState定义的setXxx即可修改state值，如
     ```javascript
        const [xxx, setXxx] = useState(0);
        <button onClick={() => setXxx(xxx + 1)}>
            Click me
        </button>
     ```


#### []的作用

   ```javascript
        const [xxx, setXxx] = useState(0);
   ```
   在使用useState时，其实是同时创建两个变量，一个xxx，一个setXxx，并通过解构形式解构出来，等同于
   ```javascript
        const data = useState('banana'); // 返回一个有两个元素的数组，初始化为banana
        const xxx = data[0]; // 数组里的第一个值, 即banana
        const setXxx = data[1]; // 数组里的第二个值，即setXxx函数
   ```


#### 使用多个state变量

   - class组件
    在class组件中，如果定义多个state变量，则需要
     ```javascript
        this.state = {
            aaa: 111,
            bbb: 222,
            ccc: 333
        };
     ```
    在需要更新state时，使用setState
     ```javascript
        this.setState({
            aaa: 444,
            bbb: 555,
            ccc: 666
        })
     ```
    
   - Hook组件
    而在hook中，定义多个state变量，则通过多个useState进行定义即可
    ```javascript
        const [aaa, setAaa] = useState(111);
        const [bbb, setAaa] = useState(222);
        const [ccc, setAaa] = useState(333);
    ```
    在进行更新state时则需要通过每个单独的set方式进行更新
    ```javascript
        setAaa(444)
        setBbb(555)
        setCcc(666)
    ```
