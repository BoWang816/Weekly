---
title: React-表单
top: 100
comments: true
tags:
  - Web
  - React
categories: React
abbrlink: 53245
date: 2019-06-13 18:11:05
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

&emsp;&emsp;在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。

<!-- more -->

- #### 受控组件

&emsp;&emsp;在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作，被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。对于受控组件来说，每个 state 突变都有一个相关的处理函数。这使得修改或验证用户输入变得简单。

```text
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    // state存储一个value
    this.state = {value: ''};

    // 绑定函数
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          // input类型
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          // textarea类型
           <textarea value={this.state.value} onChange={this.handleChange} />
           // selected类型
            <select value={this.state.value} onChange={this.handleChange}>
                   <option value="grapefruit">葡萄柚</option>
                   <option value="lime">柠檬</option>
                   <option value="coconut">椰子</option>
                   <option value="mango">芒果</option>
            </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
```

- #### 非受控组件

&emsp;&emsp;在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。因为非受控组件将真实数据储存在 DOM 节点中，所以再使用非受控组件时，有时候反而更容易同时集成 React 和非 React 代码。在 React 渲染生命周期时，表单元素上的 value 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个 defaultValue 属性，而不是 value。**受控组件与非受控组件都可以设置defaultValue**，所以checkout和radio、select 和 textarea都支持 defaultValue。在input的type为file时，它始终是一个非受控组件，因为它的值只能由用户设置，而不能通过代码控制。

```text
class FileInput extends React.Component {
  constructor(props) {
    // highlight-range{3}
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    // highlight-range{4}
    event.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    // highlight-range{5}
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <FileInput />,
  document.getElementById('root')
);

```

- #### 受控组件与非受控组件差异

    - 受控组件与非受控组件都可以设置defaultValue默认值，且后期不可改变；

    - 受控组件
        
        - value有动态的初始值；
        - 在使用受控组件时，要想改变value的值，必须使用onChange方法，通过setState进行修改，设置setState其实是通过有状态的component对内部的state进行维护；如下，当在两个输入框实时输入值时， {this.state.a+this.state.b}将会实时显示两个输入之后拼接的字符串。
        - 添加了value 属性的表单组件元素其内部是不会维护自己状态state，组件的value值一旦设置某个具体值就始终是这个值，所以需要调用者来控制组件value的改变。
    
        ```text
          class Add extends React.Component {
              constructor(){
                  super();
                  this.state={a: 'hello',b: 'world'}
              }
              // onChange事件的时候触发，重新设置a和b的值
              handleChange=(key,e)=>{
                  //处理多个输入框的值映射到状态的方法
                  let val=e.target.value;
                  this.setState({[key]:val});
              }
              render(){
                  return (<div>
                      <input type="text" value={this.state.a} onChange={(e)=>{
                          this.handleChange('a',e)
                      }}/>
                      <input type="text" value={this.state.b} onChange={(e)=>{
                          this.handleChange('b',e)
                      }}/>
                      // 字符串拼接
                      {this.state.a+this.state.b}
                  </div>)
              }
          }
          ReactDOM.render(
            <Add />,     
            document.querySelector('#root')
          );
        ```
    - 非受控组件  
        
        - 无动态的初始值；
        - 可以通过为输入标签设置ref属性，通过this.refs获取到对应的dom元素，并从中拿到value 值，并不是react内部进行维护。
        
        ```text
        class Add extends React.Component {
             constructor(){
                super();
                this.state={result:''}
            }
            //通过ref设置的属性，可以通过this.refs获取到对应的dom元素
            handleChange=()=>{
                // 从refs拿到a与b的值并拼接
                let result=this.refs.a.value + ' ' + this.b.value;
                // 更新result的值
                this.setState({result});
            }
            render(){
                // 在input父节点上添加onChange方法，采用事件冒泡触发
                return (<div onChange={this.handleChange}>
                    <input type="text" ref="a"/>
                    <input type="text" ref={x=>this.b=x}/>
                    {this.state.result}
                </div>)
            }
        }
        ReactDOM.render(<Add/>, document.querySelector('#root'));
        ```
        
- #### defaultValue使用

&emsp;&emsp;在为标签设置了defaultValue属性并设置属性值后，将会默认显示已设置的属性值，如第一个input，它其实是一个非受控元素，因为没有绑定onChange事件，所以input中的值改变时，this.state.a的值不会改变。

```text
class Add extends React.Component {
      constructor(){
          super();
          this.state={a: 'hello',b: 'world'}
      }
      // onChange事件的时候触发，重新设置a和b的值
      handleChange=(key,e)=>{
          //处理多个输入框的值映射到状态的方法
          let val=e.target.value;
          this.setState({[key]:val});
      }
      render(){
          return (<div>
              <input type="text" defaultValue={this.state.a}/>
              <input type="text" value={this.state.b} onChange={(e)=>{this.handleChange('b',e)}}/>
              // 字符串拼接
              {this.state.a+this.state.b}
          </div>)
      }
    }
    ReactDOM.render(
    <Add />,     
    document.querySelector('#root')
);
```

- #### 处理多个输入与受控输入空值

&emsp;&emsp;当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作。
&emsp;&emsp;在受控组件上指定 value 的 prop 可以防止用户更改输入。如果指定了 value，但输入仍可编辑，则可能是意外地将value 设置为 undefined 或 null。

```text
setTimeout(function() {
  ReactDOM.render(<input value={null} />,  document.getElementById('root'));
}, 1000);

// 初始时input不可编辑，1s后value设置为null就可编辑
ReactDOM.render(
  <input value="hi" />,
  document.getElementById('root')
);
```

- #### 总结

&emsp;&emsp;综上，在表单使用各类输入标签时，所涉及到的问题主要时受控组件与非受控组件，受控组件其实就是可以在React内部通过state进行控制的组件，一般通过设置value属性与onChange方法实现。在日常的开发中，可以灵活的使用受控和非受控组件，而不必纠结哪个好或者哪个坏。
