---
title: React-JSX简介
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 31977
date: 2020-11-10 23:51:40
tags: 
   - React
   - Web
categories: [Web, React]
---


#### 初探JSX

&emsp;&emsp;相对于AngularJS，React采用了与之不同的方式，这也导致在从AngularJS切换到React时感觉及其别扭。React中使用了JSX，一种JavaScript的扩展语法，更加通俗的说，它将html融入了js中，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式，JSX生成React"元素"，React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

#### JSX基本语法

```javascript
    const name = 'hello world';
    // 定义一个React元素
    const element = <h1>wangBo, {name}</h1>;
    
    ReactDom.render(
    // 使用定义的元素，并绑定到root节点上
        element,
        document.getElementById('root')
    )
```
&emsp;&emsp;老实说，我看到这个语法的时候是崩溃的，相对于之前的采用html+css+js三文件结构的写法，React中相当于删除了html文件，将html与js结合形成JSX语法。在JSX语法中，使用{}将JavaScript表达式包裹，{}中可以放置任何的JavaScript表达式。

```javascript
    // 定义一个名称为test的函数
    function test(user) {
        return user.firstName + user.lastName;
    }
    
    // 定义一个名称为user的对象
    const user = {
        firstName: 'w',
        lastName: 'b'
    }
    
    // 创建React元素，使用函数与对象
    const element = (
        <h1>你好，{test(user)}</h1>  
    );
    
    // 渲染DOM
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
```
&emsp;&emsp;在上述代码中，React元素element中使用了user对象，以及test函数，最终页面上将会显示`你好，wb`。

#### JSX属性与对象

   - JSX属性
        1、在JXS中，可以通过引号来将属性值指定为字符串字面量，这与AngularJS写法类似。
        ```javascript
        const element = <h1 tabIndex="1"></h1>
        ```
        2、也可以通过{}使用JavaScript表达式来定义属性值，这与AngularJS中不一致的是AngularJS中是使用了两个大括号。
        ```javascript
        const element = <input value={user.operate} />
        ```
   - JSX对象
        在React中，之所以能够使用上述的这种写法，是因为Babel会将JSX转译为React.createElement()函数进行调用。下面两种代码的写法实现的功能是一致的。
        ```javascript
            const element = (
              <h1 className="greeting">
                Hello, world!
              </h1>
            );
        ```
        ```javascript
            const element = React.createElement(
              'h1',
              {className: 'greeting'},
              'Hello, world!'
            );
        ```
        事实上，React更完整的创建React元素的过程是这样的，但是这也是简化后的过程，更加深层的还需要去看React源码。
        ```javascript
            const element = {
              type: 'h1',
              props: {
                className: 'greeting',
                children: 'Hello, world!'
              }
            };
        ```
   采用上述方式创建的element，被称为"React元素"，React通过读取这些对象，然后进行DOM构建，并保持实时的更新。
        
#### JSX子元素
    
&emsp;&emsp;因为JSX中的React元素类似与html，那么在创建React元素的时候，可以进行多个元素的嵌套，以及多个元素的并列。如：
    
```javascript
    const element = (
        <div>
            <h3>我是h3</h3>
            <h4>我是h4</h4>
        </div>
    );
```

#### 总结

&emsp;&emsp;通过上述，可以看出在React开发过程中，使用JSX将DOM元素构建为"React元素"，React通过读取这些"元素"，构建DOM，并进行相关的处理。这种写法与AngularJS差异较大，在进行React学习过程中，应该把它当作新的语法来看待。
