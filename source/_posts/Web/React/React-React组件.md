---
title: React-React组件
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 27599
date: 2020-11-11 23:59:58
tags: 
   - React
   - Web
categories: [Web, React]
---

##### React组件定义

&emsp;&emsp;在React中，多数使用组件，通过组件将UI拆分为独立可复用的代码片段，实现一处组件多处使用。React组件接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

#### 函数组件与class组件

   - 函数组件：一个函数即可实现一个组件，如：
    
   ```javascript
      function Hello(props) {
           return <h1>Hello, {props.name}</h1>;
      }
   ```
   - class组件：ES6中通过继承React.Component实现一个组件，如：
    
   ```javascript
      class Hello extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}</h1>;
        }
      }
   ```

#### 组件渲染

&emsp;&emsp;React中，React元素可以是普通的DOM标签，也可以是一个组件，当React元素是一个组件时它会将JSX接收的属性转换为单个对象传递给组件，而这个对象就被成为"Props"。如

   ```javascript
    // 定义一个名称为Welcome的组件
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
     
    // 创建一个React元素，这个元素使用了Welcome组件，并且传入了name参数
    const element = <Welcome name="Sara" />;
     // 渲染组件
    ReactDOM.render(
       element,
       document.getElementById('root')
    );
   ```
     
   - 调用 ReactDOM.render() 函数，并传入 <Welcome name="Sara" /> 作为参数。
   - React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入。
   - Welcome 组件将 `<h1>Hello, Sara</h1>` 元素作为返回值。
   - React DOM 将 DOM 高效地更新为 `<h1>Hello, Sara</h1>`
   
   **在React中，组件的名称必须以大写字母开头，且使用也必须在作用域内**

#### 组合组件

&emsp;&emsp;在React中，可以像嵌套DOM节点一样嵌套组件，比如：
   ```javascript
    // 定义一个名称为Welcome的组件
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    
    // 定义一个名称为Hello的组件，并在其中使用Welcome组件
    function Hello(props) {
        return (
            <div>
                <Welcome name="world" />
                <h2>age is {props.age}</h2>
            </div>
        )
    }
    
    // 定义一个名称为App的组件，并在其中使用Welcome、Hello组件
    function App() {
      return (
        <div>
          <Hello age="12"/>
          <Welcome name="Cahal" />
        </div>
      );
    }
    
    // 渲染组件，将App组件作为了React元素
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
   ```
   
   实现效果：
   
   ![组件](https://i.loli.net/2019/06/11/5cff518b91a1b91245.png)

#### Props 的只读性

&emsp;&emsp;在React中组件无论是使用函数进行声明还是使用ES6的class进行声明，**都不可以更改props**。但是在实际的应用当中，总是需要去操作数据进行更改，且应用程序的 UI 是动态的，并会伴随着时间的推移而变化。因此React中引入了"state"的概念，在不违反上述规则的情况下，state 允许 React 组件随用户操作、网络响应或者其他变化而动态更改输出内容。

#### 总结

&emsp;&emsp;通过上述内容，了解到了React中组件的定义，通过定义一个纯函数，并返回React元素即可定义一个简单组件，也可以使用class通过继承React的Component定义一个组件。同时组件支持嵌套使用，将复杂的组件进行提取为多个简单的组件，可以高效的实现组件复用。在组件中，Props参数不可改变，它将从外部接收的属性转换为对象供组件内部使用。
