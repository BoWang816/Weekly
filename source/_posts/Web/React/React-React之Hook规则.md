---
title: React-React Hook规则
top_img: 'https://unsplash.it/800/200?random'
comments: true
image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
abbrlink: 45022
date: 2021-01-27 11:44:44
tags:
    - React
    - Web
categories: [Web, React]
---

> &emsp;&emsp; Hook的本质就是javaScript函数，使用时需要遵循两条规则：只在顶层使用Hook，只在React函数中调用Hook；

### 只在顶层使用Hook
> 不要在循环、条件、嵌套函数中调用Hook；每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。

### 只在React函数中使用Hook
> 可以在React函数中调用Hook，在自定义的Hook中调用其他Hook；