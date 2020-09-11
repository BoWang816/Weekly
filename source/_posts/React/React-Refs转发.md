---
title: React-Refs转发
top: 100
comments: true
tags:
  - Web
  - React
categories: React
abbrlink: 31939
date: 2019-07-19 10:35:59
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->

- #### 前言

&emsp;&emsp;Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧，Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件。

<!-- more -->

- #### ref转发
&emsp;&emsp;在下述示例中，FancyButton 使用 React.forwardRef 来获取传递给它的 ref，然后转发到它渲染的 DOM button，这样，使用 FancyButton 的组件可以获取底层 DOM 节点 button 的 ref ，并在必要时访问，就像其直接使用 DOM button 一样。
```text
import React from "react";

class Refs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // 你可以直接获取 DOM button 的 ref：
        const ref = React.createRef();
        return (
            <FancyButton ref={ref}>Click me!</FancyButton>
        );
    }
}

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

export default Refs;
```
- 首先通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。
- 通过指定 ref 为 JSX 属性，将其向下传递给 `<FancyButton ref={ref}>`组件。
- React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数。
- 向下转发该 ref 参数到 `<button ref={ref}>`，将其指定为 JSX 属性。
- 当 ref 挂载完成，ref.current 将指向 `<button>` DOM 节点。yao
第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件**不接收**ref 参数，且 **props 中也不存在 ref**。Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中

- #### Refs
&emsp;&emsp;Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。在React中，使用Props是父组件与子组件唯一交互的方式，要修改一个子组件，则需要通过更新Props来重新渲染子组件，但是在某些情况下，可能会需要在数据流范围之外修改子组件，被修改的子组件可能是一个React元素，也可能是一个DOM元素。
    
   - ##### 何时使用Refs（避免使用 refs 来做任何可以通过声明式实现来完成的事情）
        - 管理焦点，文本选择或媒体播放。
        - 触发强制动画。
        - 集成第三方 DOM 库。

   - ##### 创建Refs
   在React 16.3 版本引入了 React.createRef() API，可以通过该API创建一个refs，并通过 ref 属性附加到 React 元素，在构建组件时，通常将ref属性分配给实例属性，这样的话在整个组件中都可以使用。
   ```text
    class MyComponent extends React.Component {
         constructor(props) {
           super(props);
           this.myRef = React.createRef();
         }
         render() {
           return <div ref={this.myRef} />;
         }
       }
   ```
   - ##### 访问 Refs
   &emsp;&emsp;当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。ref 的值根据节点的类型而有所不同：
        1、当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
        2、当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
        3、不能在函数组件上使用 ref 属性，因为函数组件没有实例。
        
        - 为DOM元素添加ref  
        **React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。**
        
        ```text
        class Refs extends React.Component {
            constructor(props) {
                super(props);
                this.state = {};
                // 创建一个组件全局可用的refs
                this.textInput = React.createRef();
        
            }
            focusTextInput = () => {
                // 直接使用原生 API 使 text 输入框获得焦点，此时的this.textInput.current就相当于原生的input DOM节点
                console.log(this.textInput.current); // <input type="text">
                this.textInput.current.focus();
            };
        
            render() {
                // 获取 DOM button 的 ref：
                // const ref = React.createRef();
                return (
                    <div >
                        {/* 将this.textInput挂载到input上 */}
                        <input type="text" ref={this.textInput} />
        
                        <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
                        {/*<FancyButton ref={ref}>Click me!</FancyButton>*/}
                    </div>
                );
            }
        }
        ```
        - 为Class组件添加ref 
        同上面的例子一样，为InputComponent组件传递ref，但是InputComponent必须是Class声明的组件，不能使用函数方式声明。
        父组件：
        ```text
        class Refs extends React.Component {
           constructor(props) {
               super(props);
               this.state = {};
               // 创建一个组件全局可用的refs
               this.textInput = React.createRef();
       
           }
       
           componentDidMount() {
               // 组件挂载完毕后会执行ref中的focusTextInput()方法实现自动聚焦
               console.log(this.textInput.current);
               this.textInput.current.focusTextInput();
           };
       
           render() {
               return (
                   <div >
                       <InputComponent ref={this.textInput}></InputComponent>
                   </div>
               );
           }
        }
        ```
        子组件：
        ```text   
        class InputComponent extends React.Component {
            constructor(props) {
                super(props);
                this.textInput = React.createRef();
            }
        
            focusTextInput = () => {
                this.textInput.current.focus();
            };
        
            render() {
                return (
                    <div>
                        <input
                            type="text"
                            ref={this.textInput} />
                    </div>
                );
            }
        }
        ```
   
   - ##### ref与函数组件    
   &emsp;&emsp;因为函数式组件没有实例，所以不能在函数组件上使用ref属性，但是可以在其内部正常使用ref属性，如：
   ```text
    function CustomTextInput(props) {
      // 必须声明 textInput，这样 ref 才可以引用它
      let textInput = React.createRef();
    
      function handleClick() {
        textInput.current.focus();
      }
    
      return (
        <div>
          <input
            type="text"
            ref={textInput} />
    
          <input
            type="button"
            value="Focus the text input"
            onClick={handleClick}
          />
        </div>
      );
    }
   ```
    
   - ##### 回调refs
   &emsp;&emsp;在上面所描述中，都是通过React的API进行创建ref，React也支持另一种设置refs的方式，即使用回调函数的形式，使用回调的方式中，为ref传递一个函数，这个函数接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。
   ```text
    class Refs extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
            // 创建一个组件全局可用的ref
            this.inputRef = null;
            // 创建回调函数，为inputRef
            this.setInputRef = element => {
                // element就是DOM元素，将其赋给inputRef
                console.log(element); //<input type="text">
                this.inputRef = element;
            };

            this.focusInput = () => {
                if (this.inputRef) {
                    this.inputRef.focus();
                }
            };
        }
    
        componentDidMount() {
            // 组件挂载后，执行focusInput设置，实现自动聚焦
            this.focusInput();
        };
    
        render() {
            return (
                <div >
                    <input
                        type="text"
                        ref={this.setInputRef}
                    />
                </div>
            );
        }
    }
   ```
   &emsp;&emsp;利用这种方式，可以在组件之间传递回调形式的refs，比如通过在父组件中设置一个回调refs， `<CustomTextInput inputRef={el => this.inputElement = el}/>`，通过props传递到子组件中，子组件就可以通过props拿到传递的回调函数`<input ref={props.inputRef} />`，并将其赋给ref属性，通过这种方式，父组件中this.inputElement就会设置为与子组件中相对应的DOM节点。
   &emsp;&emsp;如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

- #### 总结

&emsp;&emsp;综上可以看出，在使用refs时需要根据实际情景看是否有必要，使用的主要场景有： 1、管理焦点，文本选择或媒体播放；2、 触发强制动画；3、集成第三方 DOM 库。主要是用于传递DOM元素，使用场景并不是很多，但是针对以上三个场景来说使用refs还是有必要的。在创建refs时可以通过React的API进行创建，也可以通过回调Refs函数进行创建，值得注意的时，在函数组件中不可以使用ref属性，但是可以在其内部是可以使用ref的。
