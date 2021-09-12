---
title: React-React组合与继承
top_img: 'https://unsplash.it/800/200?random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
abbrlink: 62156
date: 2020-03-12 15:27:51
tags: 
   - React
   - Web
categories: [Web, React]
---

#### 包含关系

&emsp;&emsp;有些组件无法提前知晓它子组件的具体内容，因为这些组件使用一个特殊的children prop来将它们的子组件渲染到结果中。

```javascript
   function Son(props) {
        return (
            <div className={'son-border-' + props.color}>
                {props.children}
            </div>
        );
   }
   
   function Parent() {
        return (
            <Son color='blue'>
                <h1>hello, i am parent</h1>
            </Son>
        );
   
   }
```

&emsp;&emsp;在上面的组件中，Parent组件中color将会被传递给Son组件的props中通过props.color获取，并且`<h1>hello, i am parent</h1>`将会挂在Son组件的children，在Son组件的内部通过props.children即可获取，并且从Parent组件中传递到Son组件中的相关数据将会被渲染在Son组件的div标签中。通过这种组合方式，可以嵌套多层的组件，某些特殊情况下使用这种方式可以定制化处理。

#### React哲学
  - 划分组件层级
    针对复杂程度，将组件进行层级划分，从内至外或者从外至内，根据实际情况对复杂的UI组件进行层次划分可以使得开发更加便捷清晰；

  - 用React创建一个静态版本
    在开发过程中，将渲染UI和添加交互这两个过程分开。在构建应用的静态版本时，需要创建一些会重用其他组件的组件，然后通过props进行数据传递，在构建应用的静态版本时是不需要使用state的，因为state代表数据随时会发生变化；因为构建的是静态版本，所以只需要使用render()方法进行渲染即可，当数据模型发生变化时，再次调用ReactDOM.render()方法UI就会被更新。
    
  - 保留最小的state
    找出应用中所需的state最小表示，并根据它计算出其他所有数据，只保留最小的应用所需的state的最小集合，其他数据则会均由它计算产生。属于state的有：用户输入的搜索词、复选框的是否选中值。
    
  - 确定state放置的位置
    - 找到根据最小state进行渲染的所有组件；
    - 找到这些组件的共同所有者组件；
    - 该共同所有这组件或比它层级更高的组件应该拥有state；
    - 如果找不到一个合适的位置存放该state，则应该创建一个新的组件来存放该state，并且这个组件应该置于共同所有者组件层级的位置之上；

#### 总结

&emsp;&emsp;综上所述，其实可以发现，在React中其实模块化的思想很多，将组件进行不断进行抽离，提高组件的复用性，并且根据情景使用将组件进行层级划分并且放在合适的位置，可以使得代码结果更加清晰，并且在排查问题时更快速的定位。
