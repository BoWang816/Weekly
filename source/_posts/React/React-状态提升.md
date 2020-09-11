---
title: React-状态提升
top: 100
comments: true
tags:
  - Web
  - React
categories: React
abbrlink: 6496
date: 2019-06-19 21:50:08
---
<!--![](https://source.unsplash.com/random/800x200)-->
<!--&emsp;-->


- #### 状态提升的原因

&emsp;&emsp;在使用多个组件时，需要反应相同的变化数据，这是应该使用状态提升，将共享的状态提升到最近的父组件中。

- #### 举例描述

&emsp;&emsp;以计算水在给定温度下是否会沸腾，设置一个基本的计算器程序。

<!-- more -->

   1、设置一个名称为BoilingVerdict的组件，用于判断接收到的温度是否导致水沸腾。当从props中接收的celsius值大于等于100时，表示沸腾。
   
   ```text
   function BoilingVerdict(props) {
        if (props.celsius >= 100) {
            return (<p>ok, 水已经沸腾啦！！！</p>);
        }
        return (<p>在等会，水还没开呢...</p>)
   }
    ```
    
   2、设置一个名称为TemperatureInput的组件，渲染一个用于输入温度的input，并将值保存到this.state.temperature中，根据scale的值显示摄氏度和华氏度两个输入组件。
    
   ```text
    const scaleNames = {
        c: '摄氏度',
        f: '华氏度'
    };
    
    // 将输入温度抽离为一个公告组件
    
    class TemperatureInput extends Component{
        constructor(props) {
            super(props);
            this.state = {
                temperature: ''
            };
            this.handleChangeTemperature = this.handleChangeTemperature.bind(this);
        }
    
        handleChangeTemperature (e) {
            this.setState({
                temperature: e.target.value
            })
        }
    
        render() {
            const temperature = this.state.temperature;
            // 根据传入的scale的值显示不同的提示信息，c显示摄氏度，f显示华氏度
            const scale = this.props.scale;
            return (
                <fieldset>
                    <legend>请输入{scaleNames[scale]}值：</legend>
                    <input
                        type="text"
                        value={temperature}
                        onChange={this.handleChangeTemperature}
                    />
                </fieldset>
            );
        }
    }
   ```
   3、设置一个名称为Calculator的组件，两个温度输入组件。
    
   ```text
    class Calculator extends Component{
        render() {
            return (
                <div>
                    {/*摄氏度输入*/}
                    <TemperatureInput scale="c"/>
                    {/*华氏度输入*/}
                    <TemperatureInput scale="f"/>
                </div>
            );
        }
    }
   ```
   
   4、转换函数：将摄氏度转换为华氏度，将华氏度转换为摄氏度进行显示，并进行数据格式转换处理
   
   ```text
     // 转换为摄氏度的函数
     function toCelsius(fValue) {
         return (fValue - 32) * 5 / 9;
     }
     // 转换为华氏度的函数
     function toFahrenheit(cValue) {
         return (cValue * 9 / 5) + 32;
     }
     // 根据temperature与转换函数输入计算值函数
     function tryConvert(temperature, convertFun) {
         // 将输入的字符串转换为float类型
         const inputValue = parseFloat(temperature);
         // 如果输入值不合法则返回空
         if (Number.isNaN(inputValue)) {
             return '';
         }
         // 否则通过转换函数进行转换
         const outputValue = convertFun(inputValue);
         // 保留三位小数
         const rounded = Math.round(outputValue * 1000) / 1000;
         // 返回转换后的字符串
         return rounded.toString();
     }
   ```
   5、状态提升
   &emsp;&emsp;目前为止，在Calculator组件中定义的两个组件`<TemperatureInput scale="c"/>`与`<TemperatureInput scale="f"/>`均在各自内部的state中保留着相互独立互不影响的数据，但是我希望能够在输入摄氏温度或者华氏温度时，另外一个也能实时的跟着计算变化。这时就需要使用state提升，将两个组件中共享的state提升到它们最近的父组件中，以此来实现state共享。
   &emsp;&emsp;在本示例中，需要将TemperatureInput组件中的state提升到Calculator组件中，以此来实现两个TemperatureInput组件中的state共享。当将state提升到Calculator组件中后，两个TemperatureInput将会拥有相同的数据源，它们的props均是来自于Calculator组件中，因此两个输入框中的内容将会始终保持一致。
   
   - 修改TemperatureInput组件中的temperature值数据源与handleChangeTemperature函数中的数据更新方式，这样的话，temperature的值将会从Calculator组件中获取，而数据变化时将会触发onTemperatureChange函数，也是在Calculator进行响应的更新，因为二者都是从props中获取到的。
   ```text
    handleChangeTemperature (e) {
            // 旧
            this.setState({temperature: e.target.value});
            // 新
            this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // 旧
        // const temperature = this.state.temperature;
        // 新
        const temperature = this.props.temperature;
        // 根据传入的scale的值显示不同的提示信息，c显示摄氏度，f显示华氏度
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>请输入{scaleNames[scale]}值：</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={this.handleChangeTemperature}
                />
            </fieldset>
        );
    }
   ```
   - 修改Calculator组件中的内容，在Calculator组件中的state定义好temperature字段与scale字段，并为两个组件TemperatureInput组件分别这是相关的属性与方法，此时代码如下：
   
   ```text
    class Calculator extends Component{
        constructor(props) {
            super(props);
            // 设置一个默认值
            this.state = {
                temperature: '0',
                scale: 'c'
            };
    
            // 绑定change函数
            this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
            this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        }
    
        handleCelsiusChange(temperature) {
            this.setState({
                scale: 'c',
                temperature
            });
        }
    
        handleFahrenheitChange(temperature) {
            this.setState({
                scale: 'f',
                temperature
            });
        }
    
        render() {
            const scale = this.state.scale;
            const temperature = this.state.temperature;
    
            // 调用tryConvert函数进行温度值的转换
            // 如果是华氏温度则转换为设施温度
            const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
            // 如果是摄氏度温度则转换为华氏温度
            const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
            return (
                <div>
                    {/*在组件中设置需要的属性与方法*/}
                    <TemperatureInput
                        scale="c"
                        temperature={celsius}
                        onTemperatureChange={this.handleCelsiusChange}/>
    
                    <TemperatureInput
                        scale="f"
                        temperature={fahrenheit}
                        onTemperatureChange={this.handleFahrenheitChange}/>
    
                    <BoilingVerdict celsius={parseFloat(celsius)}/>
                </div>
            );
        }
    }
   ```
    
- #### 总结原理  
&emsp;&emsp;通过上述方式，就实现了子组件的状态提升，将子组件的state提升到离它们最近的父组件，实现state共享，其中主要原理过程分析如下：

   - React中input变化时会触发onChange事件，在本示例中，当在输入框输入值时会触发TemperatureInput组件上的onTemperatureChange；
   - TemperatureInput组件上的onTemperatureChange触发时，父组件会把this.handleFahrenheitChange或this.handleCelsiusChange传递给子组件；
   - 无论在输入摄氏温度还是华氏温度时，都会触发handleFahrenheitChange或handleCelsiusChange方法，它们都进行setState的操作，因为state状态会发生改变，所以无论在哪个输入框输入值时state都会改变；
   - 因为state的改变，将会重新执行render函数进行DOM渲染，以此来实现页面更新；
   - render重新渲染时，也是触发BoilingVerdict组件，它将接收celsius的值，并进行判断，当celsius的值大于等于100时，则页面提示`ok, 水已经沸腾啦！！！`，小与100时则提示`在等会，水还没开呢...`；

- #### 总结
&emsp;&emsp;使用状态提升，将任何可变的数据都可以集中到一个"数据源"，如果其他组件中也需要这个state，则将这个state提升到这些子组件的最近的父组件中，根据自上而下的数据流特性，不仅便于管理数据源，同时在进行排查bug的时也能够有针对性的、集中的进行排查。当然，在react中其实有更好的方式去实现这样的数据管理，如利用redux框架设置store层进行数据管理。因为react是一款用于构建用户界面的javaScript库，所以在使用多数据时需要使用其他的框架，redux将在后面进行介绍。

整个例子的完整代码：
<script src="https://gist.github.com/BoWang816/abcdc9ddba1783d04bf16c89884aceca.js"></script>
