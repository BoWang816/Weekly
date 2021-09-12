---
title: React-React元素渲染
top_img: 'https://unsplash.it/800/200?random'
comments: true
image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
abbrlink: 48589
date: 2019-08-22 15:48:41
tags: 
   - React
   - Web
categories: [Web, React]
---

#### React元素

&emsp;&emsp;React元素是显示在屏幕上看到的内容，与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。

#### 将React元素渲染为DOM

&emsp;&emsp;在只有React构建的应用中，通常只有一个单独的根节点，如果将 React 集成进一个已有应用，那么可以在应用中包含任意多的独立根 DOM 节点。在单一的React应用中，只需要在html文件中创建一个节点作为根节点，其他的DOM都将使用React元素进行构建，并且React元素都会作为根节点的子节点。最后通过一下方式，将元素渲染到根节点。

```javascript
    // 创建一个React元素
    const element = <h1>Hello, world</h1>;
    // 渲染后id为root的跟节点上
    ReactDOM.render(element, document.getElementById('root'));
```

#### 更新React元素

&emsp;&emsp;React元素是不可变的对象，即一旦创建之后就无法改变它的子元素和属性，如果想更新React的元素，就必须创建一个新的元素，并将该元素传递给ReactDOM.render()函数中进行重新渲染。例如，通过定时器执行React元素的更新：

```javascript
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
// 每隔一秒执行一次tick函数，就会重新渲染一次DOM
setInterval(tick, 1000);
```
&emsp;&emsp;但是在实际应用中，并不会去使用定时器不断的去渲染DOM，而是通过有状态的组件进行相关的渲染处理。在React元素的更新过程中，React DOM 会将元素和它的子元素与它们之前的状态进行比较，并`只会进行必要的更新`来使 DOM 达到预期的状态。这也是React高渲染效率的重要原因。

#### 总结

&emsp;&emsp;通过以上内容，可以了解到React通过ReactDOM.render()函数React元素渲染为DOM，并且在更新的时候只进行必要的跟新，有效的提高了DOM渲染的效率。
