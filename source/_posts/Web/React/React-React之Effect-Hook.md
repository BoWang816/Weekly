---
title: React-React Effect Hook
top_img: 'https://unsplash.it/800/200?random'
comments: true
image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
description: Hook中useEffect的基础用法
sitemap: true
abbrlink: 11229
date: 2021-01-27 11:44:06
tags:
    - React
    - Web
categories: [Web, React]
---


### effect Hook
>&emsp;&emsp; Effect Hook 可以让你在函数组件中执行副作用操作，对比于class组件中的componentDidMount、componentDidUpdate 和 componentWillUnmount 这三个函数的组合。React 组件中有两种常见副作用操作：需要清除的和不需要清除的。

### 基础用法
```js
import React, {useState, useEffect} from 'react';
function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
  
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
```

### 无需清除的effect
>&emsp;&emsp; 在使用React更新DOM后进行一些额外的操作，并且在这些操作完成后无需清除，则通过effect操作后该过程就是无需清除的effect。与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快，大多数情况下effect不需要同步执行，在个别情况如测量布局的情况，会提供专门的API useLayoutEffect使用。

#### useEffect做了什么？
>&emsp;&emsp;useEffect可以在React组件渲染后执行某些操作，并且在DOM更新后调用它，每次重新渲染，都会生成新的 effect，替换掉之前的。

#### 为什么在组件内部调用 useEffect？
>&emsp;&emsp;useEffect放在组件内部，可以直接访问到useState定义的state或者props，不需要额外的使用特殊的API来获取，因为state或props已经保存在了函数作用域内。

#### useEffect 会在每次渲染后都执行吗？
>&emsp;&emsp;默认情况下，在第一次组件渲染以及每次组件更新后都会调用useEffect，useEffect是发生在渲染之后，因此也不用再考虑挂载还是更新。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。 当然useEffect如果每次DOM渲染后都进行调用，有时可能会造成性能问题，因为我们并不一定想去进行调用。在class组件中，存在componentDidUpdate进行判断是否需要更新， 而在useEffect中如果有这种诉求，可以给useEffect传递第二个参数，第二个参数作为一个state变量，如果该变量的值发生了变化，useEffect的回调函数才会执行，否则不执行。

### 需要清除的effect
>&emsp;&emsp; 在某些情况下，如订阅了外部数据源的操作，这种情况下就需要清除副作用，防止内存泄漏。如在class组件中在componentDidMount中设置订阅，在componentDidUpdate中进行逻辑处理，在componentWillUnmount中清除它；而在useEffect中，清除副作用的方式就是在useEffect中返回一个函数，在该函数中执行清除操作。这也是useEffect相对class方式中的一个好处，在你一个函数中处理两种逻辑，而不需要分开在生命周期内进行处理。

#### 为什么要在 effect 中返回一个函数？
>&emsp;&emsp; effect可选的清除机制，每个 effect 都可以返回一个清除函数，如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分

#### React何时清除了effect？
>&emsp;&emsp; React会在组件卸载的时候清除effect，因为effect 在每次渲染的时候都会执行，因此在执行当前effect的时候会对上一个effect进行清除。**effect中的返回的函数可以是匿名函数**

### 总结

useEffect的方式，解决了class组件中使用挂载、更新、卸载相关的生命周期的问题，更大的简化了开发流程，同时减少了代码量。