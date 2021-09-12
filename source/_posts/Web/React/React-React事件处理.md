---
title: React-React事件处理与条件渲染
top_img: 'https://unsplash.it/800/200?random'
comments: true
image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
abbrlink: 30486
date: 2019-11-22 15:27:33
tags: 
   - React
   - Web
categories: [Web, React]
---

#### 事件处理

&emsp;&emsp;React中，使用事件的方式与原生JavaScript中使用事件方式类似，但是在React中，事件的命名采用的是小驼峰式（类似eventName），并且在JSX语法中，需要给事件传入一个函数，而不是字符串。如：

```javascript
<button onClick={eventName}>click me</button> // eventName为函数名
```
&emsp;&emsp;在React中，不同通过函数返回false来阻止事件发生，必须要显式的使用`preventDefault`，如下代码所示，此处e 是一个合成事件，React 根据 W3C 规范来定义这些合成事件。

```javascript
function  ActionLink() {
  function handleClick(e) {
    // 阻止事件默认行为
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    // 将不会跳转到index.html
    <a href="/index.html" onClick={handleClick}>Click me</a>
  );
}
class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <ActionLink />
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```
   
   ##### 为事件函数传递参数
    
   ```javascript
    <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
    或
    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
   ```
   &emsp;&emsp;在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
    
   ##### 为事件绑定this
   - 使用箭头函数绑定
       ```javascript
          <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
       ```
   - 使用内联式bind绑定
       ```javascript
          <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
       ```
   - 在构造函数中绑定
       ```javascript
          constructor(props) {
            super(props);
             // 为了在回调中使用 `this`，这个绑定是必不可少的
            this.deleteRow = this.deleteRow.bind(this);
          }
       ```
       
#### 条件渲染

&emsp;&emsp;React中的条件渲染与JavaScript中一样，通过使用if或者其它条件运算符去创建元素来进行显示。如：
   ```javascript
    // 定义组件Test1
    function Test1(props) {
        return <h1>hello，我是test1</h1>
    }
    
    // 定义组件Test2
    function Test2(props) {
        return <h1>hello，我是test2</h1>
    }
    
    // 定义组件AllTest
    function AllTest(props) {
        const isShow = props.isShow;
        if (isShow) {
            return <Test1 />;
        }
        return <Test2 />;
    }
    
    ReactDOM.render(
      // 默认传入isShow为false
      // 通过对isShow进行不同的值控制组件的显示
      <AllTest isShow={false} />,
      document.getElementById('root')
    );
   ```
   
   ##### 元素变量
   &emsp;&emsp;使用变量来储存元素。 它可以有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。
   ```javascript
    class LoginControl extends React.Component {
      constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }
    
      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
    
      render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
    
        if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
        }
    
        return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
          </div>
        );
      }
    }
    
    function UserGreeting(props) {
      return <h1>Welcome back!</h1>;
    }
    
    function GuestGreeting(props) {
      return <h1>Please sign up.</h1>;
    }
    
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }
    
    function LoginButton(props) {
      return (
        <button onClick={props.onClick}>
          Login
        </button>
      );
    }
    
    function LogoutButton(props) {
      return (
        <button onClick={props.onClick}>
          Logout
        </button>
      );
    }
    
    ReactDOM.render(
      <LoginControl />,
      document.getElementById('root')
    );
   ```
   
   ##### && 与运算符与三目运算符
   &emsp;&emsp;因为在JSX语法中，可以使用{}在其中嵌入任何表达式，因此在{}中使用&&运算符，可以像javaScript一样进行相关的逻辑功能。在Test组件中判断传入变量unreadMessages的长度进行UI渲染，当unreadMessages的长度为0时，&&后面的代码将不会执行。三目运算符中，当isLoggedIn为true时，currently字符就会显示，当为false时，not字符显示，这与javaScript中一样，只是React中是在{}中执行的。

   ```javascript
    function Test(props) {
      const unreadMessages = props.unreadMessages;
      const isLoggedIn = props.isLoggedIn;
      return (
        <div>
          <h1>Hello!</h1>
          {unreadMessages.length > 0 &&
            <h2>
              You have {unreadMessages.length} unread messages.
            </h2>
          }
           <div>
                The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
           </div>
        </div>
      );
    }
    
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    ReactDOM.render(
      <Test isLoggedIn={true} unreadMessages={messages} />,
      document.getElementById('root')
    );
   ```
   ##### 阻止组件渲染
   &emsp;&emsp;在某些情况下，希望组件能够被隐藏，即使它已经被其他组件渲染，这时只需要在render函数中返回`null`即可。在组件的 render 方法中返回 null 并不会影响组件的生命周期。如：
   ```javascript
    // 定义一个判断是否显示Page组件的组件，根据传递的参数进行控制显示
    function WarningBanner(props) {
      if (!props.warn) {
        return null;
      }
    
      return (
        <div className="warning">
          Warning!
        </div>
      );
    }
    
    class Page extends React.Component {
      constructor(props) {
        super(props);
        this.state = {showWarning: true};
         // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleToggleClick = this.handleToggleClick.bind(this);
      }
      
      // 点击事件进行组件显示与隐藏切换
      handleToggleClick() {
        this.setState(state => ({
          showWarning: !state.showWarning
        }));
      }
    
      render() {
        return (
          <div>
            // 根据showWarning的指判断是否渲染该组件
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
              {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
          </div>
        );
      }
    }
    
    ReactDOM.render(
      <Page />,
      document.getElementById('root')
    );
   ```

#### 总结
&emsp;&emsp;综上，描述了React中事件的绑定以及为事件传参，同时也了解到了React中的事件也可以像JavaScript中一样使用各种运算符进行实现，不同的是在阻止元素事件的默认行为时，React中需要使用preventDefault进行阻止，并且在阻止渲染的时候也是需要将render函数返回null即可，这与JavaScript还是存在一点小差别。
