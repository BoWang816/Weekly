---
title: JavaScript-权威指南-数组
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604207586042&di=50261aaaa84079ab5fa1787c10264d4a&imgtype=0&src=http%3A%2F%2Fimage12.bookschina.com%2F2012%2F20120609%2F5524565.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 32369
date: 2020-05-22 10:48:05
tags:
   - JavaScript
   - Web
   - 权威指南
categories: [Web, JavaScript]
---

#### 前言
>&emsp;&emsp;数组是值的有序集合；JavaScript中数组是无类型的：数组的元素可以是任意类型，并且同一个数组中不同的元素可以有不同的类型。 数组的索引是基于0的32位数值：第一个元素索引为0，最大的索引为2的32次方减2，数组最大容纳4294967295个元素；

#### 创建数组
  - 数组直接量创建
  ```javascript
    var temp = [];
	var a = [1,2,4,5,6,7];
	var b = [1,2+1,324+1];
	var c = [[1,{x:1,y:2}],[2,{x:3,y:4}]];
  ```
	
   **如果省略数组直接量中的某个值，省略的元素将被赋予undefined值，[,,]中只有两个元素，而不是三个**

  - 调用构造函数Array()创建数组
  ```javascript
    var a = new Array(); // 创建一个空数组
    var a = new Array(10); // 创建一个长度为10的数组
    var a = new Array(53,4,3,2,42,2,34,4); // 创建一个有元素的数组
  ```

#### 数组元素的读写
>&emsp;&emsp;使用\[]操作符来访问数组中的一个元素,**JavaScript中将指定的数字索引值转换为字符串，然后可以将其作为属性名使用，所有的数组都是对象，所有的索引都是属性名，但只有在0\~2的32次方减2之间的整数属性名才是索引。**

```javascript
var a = ['world'];
var value = a[0];
a[1] = 3.14;
```

#### 稀疏数组
>&emsp;&emsp;系数数组就是包含从0开始的不连续索引的数组。如果是稀疏数组，length属性大于元素的个数；  **当在数组直接量中胜利时不会创建稀疏数组，内存的元素在数组中是存在的，但是是其值为undefined**

 ```javascript
    a = new Array(5);
    a = [];
    a[1000] = 0;
 ```
  

#### 数组长度
  length属性导致数组的两个特殊行为：
   - 如果为一个数组赋值，它的索引值i大于或等于现有数组的长度时，length的属性值为i+1；
   - 设置length属性为一个小于当前长度的非负整数时，当前数组中那些索引值大于或者等于n的元素将会被删除；
   - 设置length属性大于当前数组的长度时，不会向当前数组添加元素，只在会在数组尾部创建一段空的区域；

#### 数组元素的添加与删除
- 数组元素的添加方式：
   - 为新索引赋值；
   - 使用push方法在数组末尾添加一个或者多个元素；
   - 使用unshift方法在数组首部插入一个元素，并且插入后它后面的元素下标递增；该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。**unshift() 方法不创建新的创建，而是直接修改原有的数组**

- 数组元素的删除方式：
   - 可以使用delete运算符删除数组元素；（对数组使用delete不会修改数组的length，删除后会变成稀疏数组）
   - 为数组设置新的length属性（比原length小的值）然后删除数组尾部元素；
   - 使用pop方法，删除数组最后一个元素，使得数组长度减一，并返回被删除的元素；
   - 使用shift方法，把数组中的第一个元素删除，并返回第一个元素的值。将所有元素下移到比当期索引低1的地方以达到删除数组元素的目的，该方法会改变数组的长度

    |数组元素添加方式 | 数组元素删除方式|
    |---------------|--------------
    |创建新的索引值并为其赋值 | 使用delete运算符删除元素，不会改变数组length
    |使用push方法在数组末尾插入元素|使用pop方法删除数组最后一个元素，返回删除的元素
    |使用unshift方法在数组首部插入元素|使用shift方法删除数组第一个元素，并返回第一个元素的值

#### 数组遍历
>&emsp;&emsp;数组遍历可以使用for循环，for-in循环，forEach循环

- for循环
```javascript
 var keys = Object.keys(o);
 var values = [];
 for(var i=0;i<keys.length;i++){
     var key  = keys[i];
     values[i] = o[key];
 }
```
- for-in循环
```javascript
for(var index in Array){
    value = Array[index];
}
```

- forEach循环
```javascript
var data = [1,2,23,4,5,6];
var y = 0;
data.forEach(function(x){
     y = x * x;
});
```

#### 多维数组
>&emsp;&emsp;JavaScript中不支持真的多维数组，但是可以使用数组的数组；
 
```javascript
    var table = new Array(10);
    for(var i=0; i<table.length; i++){
        table[i] = new Array(10);
    }
    // 以上就是创建了一个10*10的多维数组
  ```

  ```javascript
  // 初始化数组：
  var p = table[4][5];
  // 使用数组：
  for(var row=0; row<table.length; row++){
      for(var col=0; col<table[row].length; col++){
          table[row][col] = row * col;
      }
  };
  ```

#### 数组方法
>&emsp;&emsp; 数组中有许多方法进行数组相关的操作，表格中为相关的方法描述，下面有具体的例子。
   
方法 | 描述
-----|------
concat() 	|连接两个或更多的数组，并返回结果。
join() |	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
pop() 	|删除并返回数组的最后一个元素
push() 	|向数组的末尾添加一个或更多元素，并返回新的长度。
reverse()| 	颠倒数组中元素的顺序。
shift() |	删除并返回数组的第一个元素
slice() |	从某个已有的数组返回选定的元素
sort() 	|对数组的元素进行排序
splice() |	删除元素，并向数组添加新元素。
toSource()| 	返回该对象的源代码。
toString() |	把数组转换为字符串，并返回结果。
toLocaleString()| 	把数组转换为本地数组，并返回结果。
unshift() 	|向数组的开头添加一个或更多元素，并返回新的长度。
valueOf() 	|返回数组对象的原始值

* join方法： 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符
```javascript
    var arr = [1,2,3];
    console.log(arr.join()); // 1,2,3
    console.log(arr.join("-")); // 1-2-3
    console.log(arr); // [1, 2, 3]（原数组不变）
```

* contact方法：将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
```javascript
    var arr = [1,3,5,7];
    var arrCopy = arr.concat(9,[11,13]);
    console.log(arrCopy); //[1, 3, 5, 7, 9, 11, 13]
    console.log(arr); // [1, 3, 5, 7](原数组未被修改)

    传入一个数组：
    var arrCopy2 = arr.concat([9,[11,13]]);
    console.log(arrCopy2); //[1, 3, 5, 7, 9, Array[2]]
    console.log(arrCopy2[5]); //[11, 13]
```

* pop方法：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
* push方法：可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度
```javascript
    var arr = ["Lily","lucy","Tom"];
    var count = arr.push("Jack","Sean");
    console.log(count); // 5
    console.log(arr); // ["Lily", "lucy", "Tom", "Jack", "Sean"]
    var item = arr.pop();
    console.log(item); // Sean
    console.log(arr); // ["Lily", "lucy", "Tom", "Jack"]
```

* reverse方法：反转数组项的顺序
```javascript
    var arr = [13, 24, 51, 3];
    console.log(arr.reverse()); //[3, 51, 24, 13]
    console.log(arr); //[3, 51, 24, 13](原数组改变)
```

* shift方法：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined
* unshift方法：将参数添加到原数组开头，并返回数组的长度
```javascript
    var arr = ["Lily","lucy","Tom"];
    var count = arr.unshift("Jack","Sean");
    console.log(count); // 5
    console.log(arr); //["Jack", "Sean", "Lily", "lucy", "Tom"]
    var item = arr.shift();
    console.log(item); // Jack
    console.log(arr); // ["Sean", "Lily", "lucy", "Tom"]
```

* slice方法：返回从原数组中指定开始下标到结束下标之间的项组成的新数组。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。
    - 在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。
    - 如果有两个参数，该方法返回起始和结束位置之间的项——但*不包括结束位置的项*；
    - 参数为负值，表示取倒数第几位；
```javascript
    var arr = [1,3,5,7,9,11];
    var arrCopy = arr.slice(1);
    var arrCopy2 = arr.slice(1,4);
    var arrCopy3 = arr.slice(1,-2);
    var arrCopy4 = arr.slice(-4,-1);
    console.log(arr); //[1, 3, 5, 7, 9, 11](原数组没变)
    console.log(arrCopy); //[3, 5, 7, 9, 11]
    console.log(arrCopy2); //[3, 5, 7]
    console.log(arrCopy3); //[3, 5, 7]
    console.log(arrCopy4); //[5, 7, 9]
```

* sort方法：按升序排列数组项——即最小的值位于最前面，最大的值排在最后面
```javascript
    var arr1 = ["a", "d", "c", "b"];
    console.log(arr1.sort()); // ["a", "b", "c", "d"]
    arr2 = [13, 24, 51, 3];
    console.log(arr2.sort()); // [13, 24, 3, 51]
    console.log(arr2); // [13, 24, 3, 51](元数组被改变)

    解决比较大小的问题：
    function compare(value1, value2) {
    if (value1 < value2) {
            return -1;
    } else if (value1 > value2) {
            return 1;
    } else {
            return 0;
        }
    }
    arr2 = [13, 24, 51, 3];
    console.log(arr2.sort(compare)); // [3, 13, 24, 51]
```

* splice方法：可进行数组的删除、插入、替换操作
    - 删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数
    - 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项
    - 插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项
```javascript
    var arr = [1,3,5,7,9,11];
    var arrRemoved = arr.splice(0,2);
    console.log(arr); //[5, 7, 9, 11]
    console.log(arrRemoved); //[1, 3]
    var arrRemoved2 = arr.splice(2,0,4,6);
    console.log(arr); // [5, 7, 4, 6, 9, 11]
    console.log(arrRemoved2); // []
    var arrRemoved3 = arr.splice(1,1,2,4);
    console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
    console.log(arrRemoved3); //[7]
```

* toString方法:把数组转换为字符串，并返回结果，返回值与没有参数的 join() 方法返回的字符串相同。
```javascript
    var arr = new Array(3)
    arr[0] = "George"
    arr[1] = "John"
    arr[2] = "Thomas"
    document.write(arr.toString())   //George,John,Thomas
```

* toLocaleString方法:将数组转换为本地字符串。首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串
```javascript
    var arr = new Array(3)
    arr[0] = "George"
    arr[1] = "John"
    arr[2] = "Thomas"
    document.write(arr.toLocaleString())   //George, John, Thomas
```

#### ES6中的数组方法

* indexOf方法：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找
* lastIndexOf方法：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找
```javascript
    var arr = [1,3,5,7,7,5,3,1];
    console.log(arr.indexOf(5)); //2
    console.log(arr.lastIndexOf(5)); //5
    console.log(arr.indexOf(5,2)); //2
    console.log(arr.lastIndexOf(5,4)); //2
    console.log(arr.indexOf("5")); //-1
```

* forEach方法：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。参数都是function类型，默认有传参，参数分别为：遍历的数组内容；第对应的数组索引，数组本身
```javascript
    var arr = [1, 2, 3, 4, 5];
    arr.forEach(function(x, index, a){
        console.log(x + '|' + index + '|' + (a === arr));
    });
    // 输出为：
    // 1|0|true
    // 2|1|true
    // 3|2|true
    // 4|3|true
    // 5|4|true
```

* map方法：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
```javascript
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.map(function(item){
        return item*item;
    });
    console.log(arr2); //[1, 4, 9, 16, 25]
```

* filter方法：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组
```javascript
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arr2 = arr.filter(function(x, index) {
        return index % 3 === 0 || x >= 8;
    });
    console.log(arr2); //[1, 4, 7, 8, 9, 10]
```

* every方法：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true
```javascript
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.every(function(x) {
        return x < 10;
    });
    console.log(arr2); //true
        var arr3 = arr.every(function(x) {
        return x < 3;
    });
    console.log(arr3); // false
```

* some方法：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true
```javascript
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.some(function(x) {
        return x < 3;
    });
    console.log(arr2); //true
    var arr3 = arr.some(function(x) {
        return x < 1;
    });
    console.log(arr3); // false
```

* reduce方法与reduceRight方法：
    - 这两个方法都会实现迭代数组的所有项，然后构建一个最终返回的值。reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。
    - 这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。
    - 传给 reduce()和 reduceRight()的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。
```javascript
    var values = [1,2,3,4,5];
    var sum = values.reduceRight(function(prev, cur, index, array){
        return prev + cur;
    },10);
    console.log(sum); //25
```

#### 数组类型
>&emsp;&emsp;在ES5中，使用Array.isArray()方法来判断一个对象是不是数组；使用typeOf和instanceof并不方便且不可靠。解决方案是检查对象的类属性，isArray函数体可以这样写：
   
```javascript
    var isArray = Function.isArray || function(o){
        return typeof o === 'object' &&
        Object.prototype.toString.call(o) === '[Object Array]';
    }
```

#### 作为数组的字符串
>&emsp;&emsp;在ES5中，字符串的行为类似于只读的数组，除了适应charAt()方法来访问单个字符以外，还可以使用方括号的形式：可索引的字符串的最大的好处就是简单，用[]代替了charAt方法，更加方便使用；*字符串是不可变值，把他们当做数组看待时，他们是只读的，使用数组方法修改字符串会导致错误，并且错误不会提示*
```javascript
var s = test;
s.charAt(0);  //t
s[1];         //e
```
