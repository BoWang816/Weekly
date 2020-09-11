---
title: AngularJS-脏检查原理
top: 100
comments: true
tags:
  - Web
  - AngularJS
categories: AngularJS
abbrlink: 37614
date: 2019-05-23 15:50:15
---
<!--![](https://source.unsplash.com/random/800x200)-->

#### 什么是脏检查？

   >&emsp;&emsp;浏览器中没有提供数据监测的API，故对于任何内存数据变动都无法被监听，所以就没办法处理callback；但是可以基于能够产生数据变动的事件进行封装，在每次事件发生后，检测一遍数据的变化，如果数据和上次的值有变化，则执行这个值对应的callback，这个callback可能是view层的一个数据展现，也可能是一段处理的function。
   
<!-- more -->

   >&emsp;&emsp;在检测数据变化的时候，由于不知道这个事件对哪些数据做了更改，以及这个事件有可能造成事件之外的其他任何地方的数据更改，所以必须进行一次大检查，将所有注册过的值全部检查一遍，一次检查称为一个周期，每次最少检查两遍，第二遍的目的是为了确认前一次的变动中有没有影响其他任何地方的数据更改，如果第二次发生了变动，则再执行一遍，直到最后两次完全一致则停止检测，但是考虑到内存消耗，脏检查每个周期最多检测10遍；

#### 何时触发脏检查？

    当UI事件、ajax请求或者timeout延迟事件才会触发脏检查；

#### 脏检查的内部实现

   >首先，构造一个$scope对象，function $scope = function(){};每一个绑定到UI上的数据都有一个对应的$watch对象，这个对象被push到watchlist中，这个对象中有一个name属性，两个方法：

   - name：当前watch作用的变量名；
   - getNewValue()：监控函数，用于在值发生变化后得到提示，并返回新值；
   - listener()：监听函数，用于在数据变更的时候的响应行为；
   
```javascript
    function $scope(){
       this.$$watchList = [];
    }
    $$表示这个变量是作为私有变量来考虑的
```
    
   >定义$watch方法，将$watch方法接收的两个函数作为参数，存储在$$watchList数组中，我们需要在每个scope实例上存储这些函数，所以把这些函数放在Scope原型上：

```javascript
    $scope.prototype.$watch = function(name,getNewValue,listener){
        const watch = {
            name:name,
            getNewValue: getNewValue,
            listener: listener
        };
        this.$$watchList.push(watch);
    }
```

#### 手动触发脏检查

   - $digest()函数，它执行了所有在作用域上注册过的监听器：
   
```javascript
    $scope.prototype.$digest = function(){
        var list = this.$$watchList;
        for(var i=0; i<list.length; i++){
            list[i].listener();
        }
    }
    const scope = new Scope();
    scope.$watch(function() {
        console.log("hey i have got newValue")
    }, function() {
        console.log("i am the listener");
    });
    
    scope.$watch(function() {
        console.log("hey i have got newValue 2")
    }, function() {
        console.log("i am the listener2");
    })
```

- $digest函数的作用是调用这个监控函数，并且比较它返回的值和上一次返回值的差异，如果不相同，监听器就是脏的，监听函数就会被调用；
- $digest需要记住每个监控函数上返回的值，我们现在已经为每个监听器创建过一个对象，只要将上一次的值存在里面就行了：
- 检测当前scope以及子scope中所有的watches，因为监听函数会在执行过程中修改model(scope中的变量)，$digest()会一直被调用直到model没有再变。当调用超过10次时，$digest()会抛出一个异常”Maximum iteration limit exceeded’，以此来防止程序进入一个死循环。

```javascript
$scope.prototype.$digest = function(){
    const list = this.$$watchList;
    for(let i=0; i<list.length; i++){
        let watch = list[i];
        const newValue = watch.getNewValue(this);
        const oldValue = watch.last;
        if(newValue != oldValue){
            watch.listener(newValue,oldValue);
        }
        watch.last = newValue;
    }
}
```

- $watch()函数，$watch(watchExpression, listener, [objectEquality])

    - watchExpression：监听对象，可以是string或者function(scope){}
    
    - listener：监听对象发生改变时执行的回调函数function(newVal,oldVal,scope){}
    
    - objectEquality：是否深度监听，如果设置为true，它告诉Angular检查所监控的对象中每一个属性的变化。如果你希望监控数组的个别元素或者对象的属性而不是一个普通的值, 设置为false。
