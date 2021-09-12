---
title: React-React Hook
top_img: 'https://unsplash.it/800/200?random'
comments: true
image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
abbrlink: 41014
date: 2020-06-14 15:28:40
tags: 
   - React
   - Web
categories: [Web, React]
---

#### 前言
&emsp;&emsp; Hook 是 React 16.8 的新增特性，它可以不编写 class 的情况下使用 state 以及其他的 React 特性。

#### React Hook产生动机
&emsp;&emsp; 组件之间复用状态困难：React没有直接将可复用性添加到组件的方式，但是如果非要这么做也可以使用高阶组件或render props进行，但是这样会很麻烦，使得项目也不好维护，而另一种情况下，组件复用需要使用provider、consumers，但是这样的方式会形成类似于promise中的then方式的地狱式嵌套，所以Hook的诞生就是为了解决这个问题，Hook 使你在无需修改组件结构的情况下复用状态逻辑，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），Hook 可以
在非 class 的情况下可以使用更多的 React 特性

#### Hook分类
  - state hook：用于声明一个或多个state变量）；
  - effect hook：用于给函数组件增加了操作副作用的能力；

#### Hook使用规则
&emsp;&emsp;Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：
   - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
   - 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）

#### 自定义hook
&emsp;&emsp;Hook 是一种复用状态逻辑的方式，它不复用 state 本身。事实上 Hook 的每次调用都有一个完全独立的 state，因此可以在单个组件中多次调用同一个自定义 Hook。自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook。
