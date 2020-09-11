---
title: React-Redux基础
top: 100
comments: true
tags:
  - React
  - Redux
categories: React
abbrlink: 26298
date: 2019-07-28 19:51:14
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 简介

&emsp;&emsp;Redux是一个可预测状态的容器，是一个应用数据流框架，主要作用是应用状态的管理。在Redux中用一个单独的常量状态树（对象）保存整个应用的状态，这个对象不能直接被改变，当数据发生变化时，通过actions与reducer可以创建新的对象。

<!-- more -->

- #### Redux设计与使用原则
    - state以单一的对象存储在store对象中；
    - state是只读的；
    - state的更新是使用纯函数reducer执行的；

- #### Redux与Flux差异
    - Flux可以有多个改变应用状态的store，通过事件来进行触发，组件中可以订阅这些事件来同步状态；但是Redux中只有一个store进行状态管理；
    - Redux中没有分发器dispatcher，但Flux中dispatcher被用来传递数据到注册的回调事件中；
    
- #### Redux工作流程
    - 在React中使用Redux时，首先在Action Creator中通过dispatch将所需要的操作派发到Store中；
    - Store中将state传递给Reducer,Reducer中拷贝一份原始state，并进行处理，将处理后的state再返回给Store；
    - Store接收到更新后的state，将更新后的state返回给组件，实现更新；
    ![reduxFlow.jpg](https://i.loli.net/2019/07/28/5d3d902e9ec8757037.jpg)

- #### Redux核心-Reducer纯函数
&emsp;&emsp;Reducer函数时一个纯函数，即同样的输入必定会返回同样的输出；纯函数的约束条件：不得改写参数；不能调用系统I/O的API；不能调用不是纯函数的方法；如下就是一个简单的Reducer函数，因为Reducer中需要处理很多不同的action进行state状态改变，更多情况下是将每个处理写成单独的文件模块，在Reducer中使用switch-case方式进行处理。
```text
// reducer可以接收state，但是不能修改state
export default (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        // 给store返回newState
        return newState;
    }
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.unshift(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === 'del_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        return newState;
    }
    return state;
}
```

- #### 完整的使用Redux的例子
&emsp;&emsp;以下是一个完整的使用Redux的例子，实现一个简单的TodoList，支持增加和删除操作。在index文件中创建相关的action，派发到store中；在store中引入Reducer，将每次接收到的action传递给Reducer，在Reducer中根据acton中的type字段判断action类型并做出相对应的state更新操作，最后再将state返回给store，因为index文件中通过store.subscribe(this.handleStoreChange)订阅操作，相关的state更新就重新进行了渲染。
<script src="https://gist.github.com/BoWang816/0a20dd487cc0bedc03ec91bd429fa0b1.js"></script>
