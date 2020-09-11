---
title: React-state与React生命周期
top: 100
comments: true
tags:
  - Web
  - React
categories: React
abbrlink: 9422
date: 2019-06-11 16:46:24
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

&emsp;&emsp;在React组件中使用state，可以实现代码一次编写，便可以让组件自我更新。State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件，即仅在其组件内部有效。

<!-- more -->

- #### 组件中使用state

&emsp;&emsp;要在组件中使用state，则必须使用class组件，并且在class的构造函数中对this.state进行初始化，如下，通过下面的方式，就可以使用state，但是目前还不是实时更新的。

```text
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

- #### React生命周期

&emsp;&emsp;在React组件中，当组件第一次渲染DOM即挂载，当组件被删除的即卸载，在React中会存在生命周期方法，在组件中可以使用这些方法来实现。

```text
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // 组件已经被渲染到 DOM 中后运行,即挂载
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // 组件删除时，即卸载，清除定时器
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  // 使用setState()获取日期更新组件
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
   - 初始化 Initialization
        设置 props 和 state
   - 挂载 Mount
        依次执行componentWillMount->render->componentDidMount
   - 更新 Update：props与state更新
        - state更新时触发周期顺序：
            - shouldComponentUpdate：props或state更新时触发，必须返回一个boolean。返回true则继续执行render，返回false则不执行render。
            - componentWillUpdate：shouldComponentUpdate后执行。
            - render
            - componentDidUpdate：render之后执行。
        - props更新时触发周期顺序，**相比state触发前面多了一个componentWillReceiveProps**
            - componentWillReceiveProps：组件第一次存在与DOM中，它不会被执行，组件已经存在于DOM中，它才会被执行。  
            - shouldComponentUpdate：props或state更新时触发，必须返回一个boolean。返回true则继续执行render，返回false则不执行render。
            - componentWillUpdate
            - render
            - componentDidUpdate
   - 卸载 UnMount
        - componentWillUnmount：组件卸载前期执行，如删除组件

- #### State的正确使用

    - 不要直接修改state
    在需要修改state时，不能直接通过 this.state.name = 'hello'进行修改，而是应该使用this.setState({name: 'hello'})的方式进行修改；
    - State 的更新是异步的
    this.props和this.state会存在异步更新，因此不能直接通过修改值来进行更新，而是传递一个函数，并且这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数。
    ```text
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
    ```
    - State 的更新会被合并
    出于性能的考虑，React可能会把多个setState()调用合并为一个调用，多次的setState间隔时间端，React会合并并更新一次虚拟DOM。调用 setState() 的时候，React 会把提供的对象合并到当前的 state。
    
    ```text
    import React from 'react';
    
    class Add extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
             posts: [],
             comments: []
        };
      }
    
      // state合并后，posts与comments都被修改，但是都在this.state中，posts与comments二者是互不影响的。
      componentDidMount() {
        fetchPosts().then(response => {
              this.setState({
                posts: response.posts
              });
            });
        
            fetchComments().then(response => {
              this.setState({
                comments: response.comments
              });
            });
      }
    }
    
    ReactDOM.render(
      <Add />,
      document.getElementById('root')
    );
    ```
- #### setState方法基本原理

&emsp;&emsp;setState其实是根据前后对比虚拟DOM，其中应用了diff算法。在对比虚拟DOM时，前后的state中的虚拟DOM是同层对比，比如DOM存在三层，则当state变化时，虚拟DOM会先比较第一层的DOM，如果二者不一样，则直接更新整个虚拟DOM，如果第一层一样，则开始对比第二层，依次类推。

- #### 数据是向下流动的

&emsp;&emsp;组件可以将它自身的state作为props传递给它的子组件，但是子组件是无法得知props中的参数是否来自父组件，这里说的子组件指的是嵌套在一个组件里面的组件。这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。在React中，可以在有状态的组件中使用无状态的组件，也可以在无状态的组件中使用有状态的组件。

- #### 总结

&emsp;&emsp;综上内容可以看出，在使用React的组件时，state只存在于其自己的组件中，且可以在其子组件中使用，并且state的使用也是需要注意一定的方式，在存在异步的情况时使用函数方式将state最为参数进行传递实现DOM更新。
