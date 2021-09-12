---
title: JavaScript-权威指南-类与模块
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604207586042&di=50261aaaa84079ab5fa1787c10264d4a&imgtype=0&src=http%3A%2F%2Fimage12.bookschina.com%2F2012%2F20120609%2F5524565.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 13186
date: 2020-07-01 10:48:15
tags:
   - JavaScript
   - Web
   - 权威指南
categories: [Web, JavaScript]
---

#### 前言
>&emsp;&emsp;在JavaScript中，类的实现是基于原型继承机制的。如果两个实例都是从同一个原型对象上继承了属性，则它们是同一个类的实例。

#### 类和原型
>&emsp;&emsp;在JavaScript中，类的所有实例对象都是从同一个原型对象上继承属性，所以原型对象是类的核心。
   - 定义一个类：
        如果定义一个原型对象，然后通过inherit()函数创建一个继承自它的对象，这样就定义了一个类。通常类还需要进行初始化，
        通常是定义一个函数来创建并初始化这个新对象。
   - 实现一个简单的JavaScript类：
   ```javascript
    function range(from,to){
        //使用inherit()函数来创建对象，这个对象继承自在下面定义的原型对象
        //原型对象作为函数的一个属性存储，并定义所有“范围对象”所共享的方法
        const r = inherit(range.methods);
    
        //存储新的“范围对象”的起始和结束位置，这两个属性不可继承，每个对象拥有唯一性
        r.from = from;
        r.to = to;
    
        //返回这个新创建的对象
        return r;
    }
   ```
    
   - 原型对象定义方法，这个方法为每个范围对象多继承
   ```javascript
    range.methods = {
        includes:function(x){
            return this.from <= x && x <= this.to;
        },
        foreach:function(f){
            for(var x = Math.ceil(this.from); x<=this.to; x++){
                f(x);
            }
        },
        toString:function(){
            return "(" + this.from + "..." + this.to + ")";
        }
    };
    
    const r = range(1,4);//创建一个范围对象
    r.includes(2);//true,2在1到4的范围
    r.foreach(console.log);//输出1 2 3 4
    console.log(r);  //输出(1,2,3,4)
   ```

#### 类和构造函数
>&emsp;&emsp;使用构造函数在调用之前就创建了新对象，通过this可以获取这个新对象，构造函数不必返回这个新创建的对象，它会自动创建对象，然后将构造函数作为这个对象的方法来调用一次，最终返回这个新对象。调用构造函数的一个重要特征是**构造函数的prototype属性被用作新对象的原型**, 通过同一个构造函数创建的所有对象都继承自一个相同的的对象，因此它们是同一个类的成员。

```javascript
function Range(from,to) {
    // 这是一个构造函数，没有返回对象，只用作初始化对象
    this.from = from;
    this.to = to;
}

Range.prototype = { 
    // 所有的“范围对象”都继承自range，属性的名字必须是prototype
    includes:function(){},
    foreach:function(){},
    toString:function(){},
}
```
**定义构造函数即使定义类，并且类名字首字母要大写，普通函数和方法都是首字母小写**

   - 构造函数和类的标识
    &emsp;&emsp;原型对象是类的唯一标识：当且仅当两个对象继承自同一个原型对象时，它们才是同一个类的实例；而初始化对象的状态的构造函数则不能作为类的标识，两个构造函数的prototype属性可能指向同一个原型对象。
    &emsp;&emsp;使用instanceof检测一个对象时候是一个对象的实例化对象： r instanceof Range，但是instanceof运算符不会检测r是否是由Range构造函数初始化而来，而是检查r时候继承自Range.prototype。

   - constructor属性
    &emsp;&emsp;任何JavaScript函数都可以作为构造函数，并且调用构造函数时需要用到prototype属性，因此每个JavaScript函数都自动拥有一个prototype属性，这个属性的值是一个对象，这个对象包含唯一一个不可枚举属性constructor；
    
   ```javascript
    var F = function(){};
    var c = F.prototype.constructor;
    F == c;     // true, constructor属性的值是一个函数对象
    // 对象通常继承的constructor均指代它们的构造函数

    var f = new F();   // 创建一个类F的对象
    f.constructor === F;  // true,constructor指代这个类
   ```

   ![constructor.png](https://i.loli.net/2019/09/10/I5iDNMAoH2pQsdt.png)

   之前创建的range类中没有constructor属性，可用通过下面的两种方法进行添加：

   - 第一种：显示的为原型添加一个构造函数

            Range.prototype = {
                constructor:Range,
                其他代码;
            }

   - 第二种：使用预定义的原型对象，预定义的原型对象中包含constructor属性。

            Range.prototype.includes = function(x){};
            Range.prototype.foreach = function(x){};
            Range.prototype.toString = function(x){};

#### JavaScript中Java式的类继承
>&emsp;&emsp;JavaScript中的类牵扯三种同的对象：构造函数、原型、实例；
   - 构造函数对象: 构造函数为JavaScript的类定义了名字，任何添加到这个构造函数对象中的属性都是类字段和类方法（属性值是函数的话就是类方法）
   - 原型对象: 原型对象的属性被类的所有实例继承，如果原型对象的属性值是函数的话，这个函数就作为类的实例的方法来调用；
   - 实例对象: 类的每一个实例都是一个独立的对象，直接给这个实例定义的属性是不会为所有实例对象所共享的，定义在实例上的非函数属性，是实例的字段。

   定义一个类的步骤：
       1. 先定义一个构造函数，并设置初始化新对象的实例属性；
       2. 给构造函数的prototype对象定义实例的方法；
       3. 给构造函数定义类字段和类属性；
       ```javascript
        function defineClass(constructor, methods, statics){
            //定义类的函数
            //constructor 用以设置实例的属性的函数
            //methods 实例的方法，复制到原型中
            //statics 类属性，复制到构造函数中
        }
        var simple = defineClass(
        //利用定义的类函数实现一个类
            function(f,t){
                this.f = f;
                this.t = t;
             },
             {
                includes:function(x){},
                toString:function(){},
             },
             {
                upto:function(t){}
             }
        );
        ```

#### 类的扩充
>&emsp;&emsp;JavaScript中基于原型的继承机制是动态的，对象从原型继承属性，如果创建对象只有原型的属性发生改变，会影响到继承这个原型的所有的实例对象。因为这个机制，那么我们可以通过修改原型对象，为其添加我们需要的方法，对JavaScript类进行扩充。
&emsp;&emsp;可以使用Object.prototype添加方法，从而使所有的对象都可以调用这些方法，但是这样做并不推荐，在ES5之前，无法将新增的方法设置为不可枚举的，如果给Object.prototype添加属性，这些属性是会被for-in循环遍历到的，但是我们并不期望这样做，所以在ES5中使用了Object.defineProperty方法安全的扩充Object.prototype;

#### 类和类型
>&emsp;&emsp;虽然可以使用typeof运算符得出值得类型，但是我们也希望将类作为类型对待，JavaScript的内置对象中可以根据class属性进行区分，但是实例对象的class属性是“Object”，进行更细致的区分则很难实现，所以出现了可以**检测任意对象的类**的技术：**instanceof运算符，constructor属性，构造函数的名字**

   - instanceof运算符
        &emsp;&emsp;instanceof左操作数是待检测其类型的对象，右操作数是定义类的构造函数，如果o继承自c.prototype，则表达式o instanceof c值为true，这里的继承可以是直接继承也可以是间接继承，如果o所继承的对象继承自另一个对象，后者继承与c.prototype，这样也是可以的。虽然instanceof运算的右操作符是构造函数，但是实际上计算过程是检测对象的继承关系。
        &emsp;&emsp;如果想检测对象的原型链上是否存在某个特定的原型对象，可以不使用构造函数为中介的方法，可以使用isPrototypeOf()方法。
        &emsp;&emsp;instanceof 与 isPrototypeOf()方法的缺点：无法通过对象来获得类名，只能检测对象是否属于指定的类名。
        **构造函数是类的公共标识，但是原型是类的唯一标识**

   - constructor属性
     &emsp;&emsp;另一种识别对象是否属于某个类的方法是使用constructor属性，因为构造函数时类的公共标示，所以可以直接使用constructor属性，但是在多个执行上下文的场景中无法正常工作；
     
   ```javascript
    function typValue(x){
        if(x==null){return '';}//Null和undefined没有构造函数
        switch(x.constructor){
            case Number: return "Number";//Number类型对象
            case String: return "String";//String类型对象
            case Date: return "Date";    //Date类型对象
            case RegExp: return "RegExp";//RegExp类型对象
            case Complex: return "Complex";//自定义类型对象
        }
    }
    // case后面的表达式都是函数，如果用typeof运算符或者取得对象的class属性的话，应当将case后面的内容改为字符串类型
   ```
    
   - 构造函数的名称
    &emsp;&emsp;使用instanceof运算符和constructor属性在遇到多个执行上下文中存在构造函数的多个副本的时候，两个方法的检测会出现错误，虽然多个上下文的函数看起来一样，但是它们是相互独立的对象；在JavaScript的实现中为函数对象提供一个非标准的name属性，用来表示函数名称，对于没有name属性的实现，可以将函数转换为字符串，然后从中提取函数名，但是并不一定所有的函数对象都有名字，所以getName()方法可能返回空字符串。

   - 鸭式辩型
    &emsp;&emsp;上述说的检测对象的类的各种技术多少会存在问题，解决的办法是避免这些问题，不去关注对象的类是什么，而是去关注对象能做什么，这个思考方式成为“鸭式辩型”。
   例子：
        - 创建接口类，主要用来保存信息到实例类中：
            ```javascript
            var Interface = function (name, methods) {
                this.name = name;
                this.method = methods;
            }
            ```
        - 自定义一个接口，接口中定义接口名称和一些方法的名称
            ```javascript
            var Duck = new Interface('Duck', ['swim', 'cry', 'foots']);
            ```
        - 创建检测方法，它用来检测对象中有没有实现Duck接口中所有的方法，如果有就认为这个对象实现了Duck接口;否则就认为没有实现。
            ```javascript
            Interface.ensureImplements = function (obj, interface) {
                var canNotFoundMethods = [];
                for(var i = 0, len = interface.method.length; i < len; i++) {
                    //检测对象有没有接口中所有方法
                    if(!interface.method[i] || typeof obj[interface.method[i]] !== 'function') {
                        canNotFoundMethods.push(interface.method[i]);
                    }
                }
                if(canNotFoundMethods.length){
                     throw new Error(obj.name+'实例对象没有实现'+interface.name+'接口');
                }else{
                    console.log(obj.name+'实例对象已经实现'+interface.name+'接口');
                }
            }
            ```
        - 创建一个将要被检测的对象，这个对象继承三个方法
            ```javascript
            var duck = function (){ this.name = 'duck'; }
            duck.prototype = {
                'swim': function (){},
                'cry': function (){},
                'foots': function (){},
            }
            var _new_duck = new duck();
            ```
        - 对创建的对象进行检测，如果新创建的对象中实现了接口中的所有方法，那么认为新创建的对象实现了定义好的接口
            ```javascript
            Interface.ensureImplements(_new_duck, Duck);
            ```

#### JavaScript中的面向对象技术
   - 集合类: 集合是一种数据结构，用以表示非重复元素的无序集合。集合的基础方法包括添加值、检测值是否在集合中，这种集合需要一种通用的实现。
    ```javascript
    function Set() {//构造函数
        this.values = {};//集合数据保存在对象的属性里
        this.n = 0; //集合中的值得个人
        this.add.apply(this, arguments);//把所有参数都添加进这个集合
    };

    Set.prototype.add = function () {//添加元素
        for (var i = 0; i < arguments.length; i++) {
            var val = arguments[i];
            var str = Set._v2s(val);//将对象转换为字符串
            if (!this.values.hasOwnProperty(str)) {
                this.values[str] = val;   //将字符串和值对应起来
                this.n++;//集合中值得计数加一
            }
        }
        return this;          //支持链式方法调用
    };

    Set.prototype.remove = function () {//删除元素
        for (var i = 0; i < arguments.length; i++) {
            var str = Set._v2s(arguments[i]);
            if (this.values.hasOwnProperty(str)) {
                delete this.values[str];
                this.n--;
            }
        }
        return this;
    };

    Set.prototype.contains = function (value) {//查询是否包含value
        return this.values.hasOwnProperty(Set._v2s(value));
    };

    Set.prototype.size = function () {
        return this.n;
    };

    Set.prototype.foreach = function (f, context) {
        for (var s in this.values) {
            if (this.values.hasOwnProperty(s)) {
            }//忽略继承的属性
            f.call(context, this.values[s]);//调用f传入value
        }
    };

    Set._v2s = function (val) {
        switch (val) {
            case undefined:
                return "Undefined";
            case null:
                return "Null";
            case true:
                return "true";
            case false:
                return "false";
            default:
                switch (typeof val) {
                    case 'number':
                        return '数字类型：' + val;
                    case 'string':
                        return '字符串类型：' + val;
                    default:
                        return '对象或函数类型' + objectID(val);
                }
        }

    function objectID(o) {
        var prop = "|**objected**|";//私有属性用于存放Id
        if (!o.hasOwnProperty(prop)) {//如果对象没ID
            o[prop] = Set._v2s.next++;//将下一个值赋值给它
        }
        return o[prop];// 返回这个id
    }
    Set._v2s.next = 100;//初始化id的值
    ```

   - 枚举类: 枚举类型是一种类型，它是值的有限集合，如果值定义为这个类型，则该值是可枚举的。定义一个表示“玩牌”的类:
    ```javascript
    function Card(suit,rank){
       this.suit = suit;//每张牌的花色
       this.rank = rank;//每张牌的点数
    }

    //使用枚举类型定义花色和点数

    Card.Suit = enumeration({Clubs:1,Diamonds:2,Hearts:3,Spades:4});//枚举四种花色
    Card.Rand = enumeration({Two:2,Three:3,Four:4,Five:5,Six:6,Seven:7,Eight:8,Nine:9,Ten:10,Jack:11,Queen:12,King:13,Ace:14});//枚举13个点数
    Card.prototype.toString = function(){//定义用以描述牌面的文本
      return this.rank.toString() + "of" +this.suit.toString();
    };

    //比较扑克牌中两张牌的大小
    Card.prototype.compareTo = function(that){
      if(this.rank<that.rank) return -1;
      if(this.rank>that.rank)return 1;
      return 0;
    };

    //以扑克牌的玩法规则对牌进行排序的函数

    Card.orderByRank = function(a,b){
        return a.compareTo(b);
    };

    //以桥牌的玩法规则对扑克牌进行排序的函数

    Card.orderBySuit = function(a,b){
      if(a.suit<b.suit) return -1;
      if(a.suit>b.suit)return 1;
      if(a.rank<b.rank)return -1;
      if(a.rank>b.rank)return 1;
      return 0;
    };

    //定义用以表示一副标准扑克牌的类

    function Deck(){
      var cards = this.cards = [];//一副牌是一个数组
      Card.Suit.foreach(function(s){//对数组尽心个初始化
           Card.Rank.foreach(function(r){
               cards.push(new Card(s,r));
          });
       });
    }

    //洗牌的方法，重新洗牌并返回洗好的牌

    Deck.prototype.shuffle = function(){
       //遍历数组中的每个元素，随机找出牌面最小的元素，并与当前遍历元素交换
       var deck = this.cards,len = deck.length;
       for(var i=len-1;i>0;i--){
          var r = Math.floor(Math.random()*(i+1)),temp;//生成一个随机数
          temp = deck[i],
          deck[i] = deck[r],
          deck[r] = temp;        //进行位置交换
       }
       return this;
    };

    //发牌方法：返回牌的数组
    Deck.prototype.deal = function(n){
      if(this.cards.length<n) throw "Out of cards";
        return this.cards.splice(this.cards.length-n,n);
    };

    //创建一副新扑克牌，洗牌并发牌
    var deck = (new Deck()).shuffle();
    var hand =deck.deal(13).sort(Card.orderBySuit);
    ```
   - 标准转换方法
        - toString()方法
            返回一个可以表示这个对象的字符串。在调用时，如果这个方法没有实现，则类会默认从Object.prototype中继承toString()方法；
            运算结果是：[object Object];
        - toLocaleString()方法
            以本地敏感性的方式将对象转换为字符串，默认情况下，对象继承的toLocalString()方法只是简单的调用了toString()方法；
        - valueOf()方法
            它用来将对象转换为原始值，大多数对象没有合适的原始值来表示它们，也没有定义这个方法；
        - toJSON()方法
            这个方法由JSON.stringify()自动调用，可以处理JavaScript原始值、数组、纯对象。它与类无关，当对一个对象执行序列化操作的时候，它会忽略对象的原型和构造函数。将它返回的
            字符串再调用JSON.parse()方法之后，会得到纯对象，但是这个对象中不会包含继承来的方法。

   - 比较方法
    &emsp;&emsp;JavaScript中的相等运算符比较对象时，比较的是引用而不是值，主要是比较两个对象的引用是否指向同一个对象，而不是检查这两个对象是否有相同的属性名和属性值；
    &emsp;&emsp;为了能让自定义类的实例具备比较的功能，定义一个名为equals()实例方法，这个方法只接受一个参数，如果这个参数和调用此方法的对象相等的话返回true。
    ```javascript
    Set.prototype.equals = function (that) {
        if(this === that){//如果that对象不是一个集合，则that与this不等
            return true;
        }

        //null与undefined是不能用instanceof检测的
        if(!(that instanceof Set)){
            return false;
        }
        //如果两个集合的大小不相等，则它们不相等
        if(this.size() !== that.size()){
            return false;
        }

        try{//检测两个集合中的元素是否完全一样
            this.foreach(function (v){
                if (!that.contains(v)){
                        throw false;
                    }
                    return true;//所有元素匹配，两集合相等
                }
            )
        }catch (x){//抛出异常
            if(x === false){ //有元素不相同
                return false;
            }
            throw x;
        }
    };
    ```
    &emsp;&emsp;如果将对象用于JavaScript的关系比较运算符，JavaScript会首先调用对象的valueOf方法，如果这个方法返回一个原始值，则直接比较原始值；但是大对数的类并没有valueOf方法，为了按照显示定义的规则来比较这些类型的对象，可以定义一个compareTo的方法：
    ```javascript
    range.prototype.compareTo = function(that){//只能接收一个参数，将这个参数和调用它的对象进行比较
        if(!(that instanceof range)){
            throw new Error("Can't  compare a range with " + that);
        }
        var diff = this.from - that.from;  //上下边界比较
        if(diff === 0){
            diff = this.to - that.to;//如果下边界相等，比较上边界
        }
        return diff;
    }
    ```
    - 方法借用: 多个类中的方法可以共用一个单独的函数，把一个类的方法用到其他的类中的做法也称为“多重继承”，在JavaScript中这种方法称为“方法借用”；
        - 原型方法
         &emsp;&emsp;在JavaScript中，当对象和数组都是列表类型的数据结构时，对象可以从数组“借用”方法，最常用的方法是 Array.prototype.slice
         ```javascript
         function myfun(){
            arguments.sort();
            var args = Array.prototype.slice.call(arguments);
            args.sort();
         }
         myfun('z','C','python');//输出 C,python,z
         ```
         &emsp;&emsp;借用方法之所以可行，是因为**call和apply方法允许在不同的上下文中调用函数**，这也是重用已经有的功能而不必继承其他对象的好方法；使用call也可以借用其他方法。
         ```javascript
          Array.prototype.join.call('abc', '|');
          Array.prototype.filter.call('abcdefghijk', function(val) {
              return ['a', 'e', 'i', 'o', 'u'].indexOf(val) !== -1;
          }).join('');
         ```
         &emsp;&emsp;不仅对象可以借用数组的方法，字符串也可以。但是因为泛型方法是在原型上定义的，每次想要借用方法时都必须使用 String.prototype 或 Array.prototype。但是这种方法很麻烦，更有效的方法是使用字面量来达到同样的目的。
    
        - 使用字面量借用方法
         &emsp;&emsp;字面量可以代表值，它们是固定值，不是变量，就是在脚本中按字面给出的。可以利用字面量保存对字面量和方法的引用，然后再进行方法借用会更方便：
         ```javascript
         var slice = [].slice;
         slice.call(arguments);
         var join = [].join;       //必须在[]和""上操作以借用方法；将要借用的方法保存在一个字面量中，方便使用
         join.call('abc', '|');
    
         var toUpperCase = ''.toUpperCase;
         toUpperCase.call(['lowercase', 'words', 'in', 'a', 'sentence']).split(',');
         // 但是又不想每次调用都使用call或者apply函数，所以就有了bind()       
         ```
        - Function.prototype.call.bind()绑定借用方法
            ```javascript
            var slice = Function.prototype.call.bind(Array.prototype.slice);
            slice(arguments);
    
            var join = Function.prototype.call.bind(Array.prototype.join);
            join('abc', '|');
    
            var toUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);
            toUpperCase(['lowercase', 'words', 'in', 'a', 'sentence']).split(',');
            ```
            - Function.prototype.call是一种引用，可以“call”函数并将设置其“this”值可以在函数中使用；
            - bind返回的其实是存有“this”值的一个新函数，因此.bind(Array.prototype.slice)返回的新函数的“this”总是Array.prototype.slice函数；
    
        - 另外用户自定义的方法也可以借用
            ```javascript
            var scoreCalculator = {//定义一个对象，里面有两个方法
                getSum: function(results) {
                    var score = 0;
                    for (var i = 0, len = results.length; i &lt; len; i++) {
                        score = score + results[i];
                    }
                    return score;
                },
                getScore: function() {
                    return scoreCalculator.getSum(this.results) / this.handicap;
                }
            };
    
            //创建对象
            var player1 = {
                results: [69, 50, 76],
                handicap: 8
            };
    
            var player2 = {
                results: [23, 4, 58],
                handicap: 5
            };
    
            var score = Function.prototype.call.bind(scoreCalculator.getScore);//绑定自定义方法
    
            // Score: 24.375
            console.log('Score: ' + score(player1));
    
            // Score: 17
            console.log('Score: ' + score(player2));
            ```
   - 私有状态
    &emsp;&emsp;通过将变量或参数闭包在一个构造函数内来模拟实现私有实例字段，调用构造函数会创建一个实例。为了做到这一点，需要在构造函数内部定义一个函数，并将这个函数赋值给新对象的属性。
    ```javascript
    function range(from,to){
        //将端点不再保存到对象的属性，而是利用存取函数返回端点的值，这些值保存在闭包中
        this.from = function(){return from;};
        this.to = function(){return to;}
    }
    ```
    &emsp;&emsp;使用这种方式可以使得from和to的属性依然可写，但是同时这种方式会造成更大的系统开销，使用闭包来封装类的状态的类会比不使用封装的状态变量的等价类运行速度更慢，并占用更多内存。
    
   - 构造函数的重载和工厂方法
        - 通过重载构造函数让它根据传入的参数的不同，执行不同的初始化方法；
        ```javascript
        function Set(){
            this.values = {};
            this.n = 0;
        if(arguments.length === 1 && isArrayLike(arguments[0])){
            //如果传入一个类数组的对象，将这个元素添加至集合中，否则将所有的参数添加到集合中
            this.add.apply(this,arguments[0]);
        } else if(arguments.length > 0){
                this.add.apply(this,arguments);
            }
        }
        ```

        - 工厂方法：一个类的方法用以返回类的一个实例。
        ```javascript
        Set.fromArray = function(s){   //通过数组初始化Set对象
            s = new Set();  //创建一个空集合
            s.add.apply(s,a);//将数组a的成员作为参数传入add方法中；
            return s;//返回这个新集合
        }
        ```

#### 子类
>&emsp;&emsp;在JavaScript中创建子类的关键在于**采用合适的方法对原型对象进行初始化**，如果类B继承自类A，B.prototype必须是A.prototype的子嗣，B的实例继承自B.prototype，A的实例继承自A.prototype。

   - 定义子类
    &emsp;&emsp;JavaScript的对象可以从类的原型对象中继承属性（通常继承方法），如果O是类B的实例，B是A的子类，那么O也从A中继承了属性；为此首先要保证B的原型对象继承自A的原型对象，通过inherit函数继承；
    ```javascript
    function inherit(p){
        if(p == null){//p是一个对象但是不能是null
            throw TypeError;
        }
        if(Object.create){//如果Object.create存在，则直接使用
            return Object.create(p);
        }
        var t = typeof p;//不存在则进一步检测
        if(t !== "object" && t !== "function"){
            throw TypeError;
        }
        function f() {
            //定义一个空的构造函数
        };
        f.prototype = p;//将空的构造函数的原型设置为p
        return new  f();//使用f()函数创建p的继承对象
    }
    B.prototype = inherit(A.prototype);//子类派生自父类
    B.prototype.constructor = B;//重载继承来的constructor属性
    ```
    定义一个子类：
    ```javascript
    function defineSubClass(superclass,constructor,methods,statics){
        //superclass 父类的构造函数
        //constructor 新的子类的构造函数
        //methods 实例方法：复制到原型中
        //statics 类属性：复制到构造函数中
    
        constructor.prototype = inherit(superclass.prototype);//子类派生自父类
        constructor.prototype.constructor = constructor;//重载继承来的constructor属性
    
        if(methods){//复制方法
            extend(constructor.prototype,methods);
        }
        if(statics){//复制属性
            extend(constructor,statics);
        }
        return constructor;
    };
    Function.prototype.extend = function(constructor,methods,statics){
        return definedSubClass(this,constructor,methods,statics);
    };
    ```
    
  - 构造函数和方法链
    &emsp;&emsp;在定义子类的时候，希望对父类的行为进行修改或者扩充，而不是完全替换它们，为了做到这一点，构造函数和子类的方法需要调用或链接到父类构造函数和父类方法；
    ```javascript
    function NonNullSet(){
        //仅链接到父类，作为普通函数调用父类的构造函数来初始化通过调用该构造函数创建的对象
        Set.apply(this,arguments);
    }
    NonNullSet.prototype = inherit(Set.prototype);//继承Set
    NonNullSet.prototype.constructor = NinNullSet;//将NonNullSet设置为Set的子类
    //将null与undefined排除，重写add方法
    NonNullSet.prototype.add = function(){
        //检测参数是不是null或undefined
        for(var i=0; i<arguments.length; i++){
            if(arguments[i] == null){
                throw new Error('Can't add null or undefined to a NonNullSet');
            }
        }
        //调用父类的add方法执行实际操作
        return Set.prototype.add.apply(this,arguments);
    }
    ```
   &emsp;&emsp;方法链在jQuery中用的较多，如 $('#demo').css('color', 'red').show() 这种形式，当方法的返回值是一个对象，这个对象就可以继续调用其他的方法，一般当不再需要返回值的时候，直接return this就好，余下的方法就可以基于此继续进行调用。
   &emsp;&emsp;由于所有对象都会继承其原型对象的属性和方法，所以可以让定义在原型对象中的那些方法都返回用以调用方法的实例对象的引用；

  - 组合与子类
    &emsp;&emsp;使用子类可以根据特定的标准对集合对集合成员做限制，所创建的自定义子类使用了特定的过滤函数来对对象结合中的成员做了限制；利用组合的原理定义一个新的集合实现，它“包装”了另一个集合对象，在将受限制的成员过滤掉之后会用到这个包装集合对象。事实上组合优于继承，要放在不同环境下，各有优缺点，使用的环境不同，表现的能力也不同。

#### ES5中的类
>&emsp;&emsp;ES5中给属性特性新增了方法支持：getter、setter、可枚举型、可写性、可配置性，而且增加了对象可扩展性的限制。

  - 让属性不可枚举 enumerable: false
    ```javascript
    (function () {
        Object.defineProperty(Object.prototype, "objectId", {
            //定义一个不可枚举的属性objectId，可以被所有对象继承
            get: idGetter,//取值器，当读取这个属性时调用getter函数
            //没有定义setter，表示它是只读的
            enumerable: false,  //不可枚举
            configurable: false  //不可配置，false表示不能删除
        });

        function idGetter() {
            if (!(idprop in this)) {//如果对象象不存在id
                if (!Object.isExtensible(this)) {//并且可以添加属性
                    throw Error('不可新增属性');
                }
                Object.defineProperty(this, idprop, {
                    value: nextid++,
                    writable: false,//只读的
                    enumerable: false,//不可枚举的
                    configurable: false//不可删除的
                });
            }
            return this[idprop];//返回已有的或者新创建的值
        };
        var idprop = "|**objectId**|";
        var nextid = 1;
    })();
    ```

  - 定义不可变的类 writable: false
    ```javascript
    function freezeProps(o) {
        var props = (arguments.length == 1)//如果只有一个参数
            ? Object.getOwnPropertyNames(o)//使用所有的属性
            : Array.prototype.splice.call(arguments, 1);//否则传入指定名字的属性

        props.forEach(function (n) { //将它们设置为只读和不可配置的
            if (!Object.getOwnPropertyDescriptor(0, n).configurable) return;
            //忽略不可配置
            Object.defineProperty(0, n, {
                writable: false,
                configurable: false
                // enumerable:false //不可枚举的
                // configurable:true //可配置的
            });
        });
        return o;
    };
    //实现例子
    function range(from, to) {
        this.from = from;
        this.to = to;
        freezeProps(this);//根据上面的配置情况定义原型
    }
    range.prototype = hideProps({
        constructor: range,
        includes: function () {
        },
        foreach: function () {
        },
        toString: function () {
        }
    });
    
    ** // Object.definePrototype()和Object.defineProperties()可以创建新属性，也可以修改已有属性；创建的新属性的特性值默认都是false，修改的属性保持原来的属性值不变**
    ```
  - 封装对象状态
     &emsp;&emsp;构造函数中的变量和参数可以用做它创建的对象的私有状态，在ES3中访问这些私有状态的存取器方法可以替换，但是在ES5中，可以通过定义属性getter和setter方法将状态变量更健壮的封装起来，这两个方法是无法删除的。
     
    ```javascript
    function Range(from,to) {
        if(from>to){
            throw new Error('Range:from must be <= to');
        }

        function getFrom() {
            return from;
        };
        function getTo() {
            return to;
        };

        function setFrom(f) {
            if(f<=to){
                from  =f;
            } else{
                throw new Error('Range: from must be <= to');
            }
        };
        function setTo(t) {
            if(t>= from){
                to = t;
            }else {
                throw new Error('Range: to must be >= from');
            }
        }
    };
    // 使用取值器的属性设置为可枚举，不可配置
    Object.defineProperties(this,{
        from:{
            get:getFrom,
            set:setFrom,
            enumerable:true,
            configurable:false
        },
        to:{
            get:getTo,
            set:setTo,
            enumerable:true,
            configurable:false
        }
    });
    //  实例
    Range.prototype = hideProps({
        constructor:Range,
        includes:function (x) {},
        foreach:function (f) {},
        toString:function (x) {},
    });
    ```
  - 防止类的扩展
    &emsp;&emsp;通常认为，通过给原型对象添加方法可以动态的对类进行扩展，但是ES5中根据需要对此特性加以限制：使用 **Object.preventExtensions()** 可以将对象设置为不可扩展的，也就是不能给对象添加任何新属性。**Object.seal()** 不仅会阻止用于对对象添加新属性，还会将当前已有的属性值设置为不可配置的，这样就不能删除这些属性了，但是不可配置的属性可以是可写的，也可以转换为只读属性。
    ```javascript
    Object.seal(Object.prototype);     //阻止对Object.prototype的扩展
    Object.freeze(Object.prototype);     //阻止对Object.prototype的扩展
    ```
    - Monkey-patch 对象的方法可以随时替换
    ```javascript
    var originsort = Array.prototype.sort;
    Array.prototype.sort = function(){
        var start = new Date();
        originsort.apply(this,arguments);
        var end =  new Date();
        console.log('Array sort took' + (end-start) + 'milliseconds');
    }
    ```
  - 子类和ES5
    &emsp;&emsp;利用ES5中的Object.create()创建原型对象，这个原型对象继承自父类的原型同时给新创建的对象定义属性，并且在创建时传入了参数null，这个创建的对象没有继承任何成员，这个对象用来存储集合的成员，同时这个对象没有原型， 可以直接使用in运算符。
    
  - 属性描述符
    &emsp;&emsp;在ES5之前，没有内置的机制指定货检查对象某个属性的特性，所有的对象属性都可以通过属性描述符来指定；
    ```javascript
    var obj = {
        a:2
    };
    Object.getOwnPropertyDescriptor(obj,'a');//输出{value: 2, writable: true, enumerable: true, configurable: true}
    ```
    &emsp;&emsp;通过上面的例子可以看出，除了value，JavaScript的属性描述符有enumerable、writable、configurable这三个特性。如果不指定的话，这三个特性的默认值都是true，可以通过Object.defineProperty()函数来指定它们为我们需要的值；
    ```javascript
     var obj = {};
     Object.getOwnPropertyDescriptor(obj,'a',{
        value:2,
        writable:true,
        configurable:true,
        enumerable:true
     });
     obj.a;// 输出2
     ```
     
  - 是否可写
    &emsp;&emsp;如果应用了 strict mode 的话，那么 myObject.a 将会抛出 TypeError，而不是仅仅忽略写入的值。ES5 还引入了对象属性的 Getter 和 Setter，这里的 writable: false可以认为是和没有定义或者定义了没有任何操作的 setters 的情况大致等同。如果是 strict mode 下，需要在 setters 里面抛出 TypeError 来完全模拟 writable: false 的情形。
    ```javascript    
    // "use strict";
    var myObject = {};
    Object.defineProperty( myObject, "a", {
        value: 2,
        writable: false, // 不可写!
        configurable: true,
        enumerable: true
    } );
    myObject.a = 3; // 写入的值将会被忽略
    myObject.a; // 2
    ```
    
  - 是否可配置
    &emsp;&emsp;这个特性用来描述对象的某个属性是否可以用 Object.defineProperty() 来重新配置，一旦某个属性被指定可配置为false，那么久认为不能重新指定这个值为true，这个操作是单向的。
    ```javascript
    var myObject = {
        a: 2
    };
    myObject.a = 3;
    myObject.a;                 // 3
    Object.defineProperty( myObject, "a", {
        value: 4,
        writable: true,
        configurable: false,    // 不可配置!
        enumerable: true
    } );
    myObject.a;                 // 4
    myObject.a = 5;
    myObject.a;                 // 5
    Object.defineProperty( myObject, "a", {
        value: 6,
        writable: true,
        configurable: true,
        enumerable: true
    } ); // TypeError
    ```
    另外这个特性会影响delete的操作行为。
    ```javascript
    var myObject = {
        a: 2
    };
    myObject.a;             // 2
    delete myObject.a;
    myObject.a;             // undefined
    Object.defineProperty( myObject, "a", {
        value: 2,
        writable: true,
        configurable: false,
        enumerable: true
    } );
    myObject.a;             // 2
    delete myObject.a;
    myObject.a;             // 2，一旦指定某个属性为 configurable: false，那么 delete 操作会被忽略
    ```
    
  - 是否可枚举
    &emsp;&emsp;这个特性用来描述对象的某个属性是否在对象属性的枚举中出现，比如 for..in 循环中
    ```javascript
    var myObject = { };
    Object.defineProperty(
        myObject,
        "a",
        // make `a` enumerable, as normal
        { enumerable: true, value: 2 }
    );
    Object.defineProperty(
        myObject,
        "b",
        // make `b` NON-enumerable
        { enumerable: false, value: 3 }
    );
    myObject.b; // 3
    ("b" in myObject); // true
    myObject.hasOwnProperty( "b" ); // true
    for (var k in myObject) {
        console.log( k, myObject[k] );
    }
    // "a" 2
    myObject.propertyIsEnumerable( "a" ); // true
    myObject.propertyIsEnumerable( "b" ); // false
    Object.keys( myObject ); // ["a"]
    Object.getOwnPropertyNames( myObject ); // ["a", "b"]
    ```
    &emsp;&emsp;enumerable: false 使得该属性从对象属性枚举操作中被隐藏，但Object.hasOwnProperty()仍然可以检测到属性的存在。另外，Object.propertyIsEnumerable() 可以用来检测某个属性是否可枚举,Object.keys()仅仅返回可枚举的属性，而Object.getOwnPropertyNames() 则返回该对象上的所有属性，包括不可枚举的。

  - 对象常量 (Object Constant)
    &emsp;&emsp;通过组合 writable: false 和 configurable: false，我们可以创建一个不能修改、重新定义或删除其属性的对象常量，比如：
    &emsp;&emsp;这里对该对象属性的删除，修改操作会被忽略，你也不能再用Object.defineProperty() 来重新配置该属性的特性。
    ```javascript
    var myObject = {};
    Object.defineProperty( myObject, "FAVORITE_NUMBER", {
        value: 42,
        writable: false,
        configurable: false
    } );
    ```
    
  - 禁止扩展 (Prevent Extensions)
    &emsp;&emsp;如果希望阻止新的属性被加入到对象，可以通过调用Object.preventExtensions() 来做到这一点, 在 strict mode 下，行为稍有不同，对属性的赋值会抛出 TypeError, 而不是仅仅忽略赋值操作。
    ```javascript
    var myObject = {
        a: 2
    };
    Object.preventExtensions( myObject );
    myObject.b = 3;
    myObject.b; // undefined
    ```

  - 封装 (Seal)
    &emsp;&emsp;可以通过 Object.seal() 来封装一个对象。在调用这个操作之后，对象上不能再添加新的属性，也不能重新定义属性描述符或者删除某个属性：
    ```javascript
    var myObject = {
        a: 2
    };
    Object.seal(myObject);
    myObject.b = 'b';
    console.log(myObject); // {a: 2}
    myObject.a = 6;
    console.log(myObject); // {a: 6}
    ```
    &emsp;&emsp;事实上，Object.seal() 相当于调用了 Object.preventExtensions()，并设置现有的所有属性为 configurable:false。

  - 冻结 (Freeze)
    &emsp;&emsp;调用 Object.freeze() 可以创建一个被冻结的对象，这个对象拥有不能再被做任何修改或者删除属性的操作，效果相当于调用了 Object.seal() 并设置所有属性为 writable: false。
    ```javascript
    var myObject = {
        a: 2
    };
    Object.seal(myObject);
    myObject.b = 'b';
    console.log(myObject); // {a: 2}
    myObject.a = 6;
    console.log(myObject); // {a: 2}
    ```
    &emsp;&emsp;需要注意的细节是，上述操作仅仅会设置对象的直接属性，而不会影响作为myObject 对象的属性的对象的特性，比如：
    ```javascript
    var myObject = {
        innerObj: {
            a: 2
        },
        b: 3
    }
    console.log(myObject) // { innerObj: { a: 2 }, b: 3 }
    Object.freeze(myObject);
    myObject.b = 6;
    console.log(myObject); // { innerObj: { a: 2 }, b: 3 }
    myObject.innerObj.a = 6;
    console.log(myObject) // { innerObj: { a: 6 }, b: 3 }
    ```
    &emsp;&emsp;这里可以看到，即使调用了 Object.freeze(), 对 innerObj 属性的修改仍然成功了，对其他几个方法，比如 Object.seal() 或者Object.preventExtensions() 也存在类似的情况，如果需要的话，可以对对象的属性递归调用上述方法。

#### 模块
>&emsp;&emsp;JavaScript中的模块可以是包含一个类定义、一组相关的类、一个实用的库函数或一段待执行的代码。只要以模块的形式编写代码，任何JavaScript代码段就可以当做一个模块。
&emsp;&emsp;模块化的目标是支持大规模的程序开发，处理分散源中代码的组装，并且能让代码正确运行，不同的模块必须避免修改全局执行上下文，因此后续模块应该在它们期望运行的原始上下文中执行。
&emsp;&emsp;在模块创建过程中避免污染全局变量的一种方法是使用一个对象作为命名空间，它将函数和值作为命名空间对象属性存储起来，可以通过全局变量进行引用，而不是定义全部函数和变量。
   - 原始写法：模块就是实现特定功能的一组方法；
   ```javascript
    function f1() {
       // ...代码块...
    }
    function f2() {
       // ...代码块...
    }
    // 函数f1和f2组成了一个模块，使用的时候直接调用即可。
    // 缺点：污染了全局变量，无法保证不与其他模块发生变量名冲突，模块成员之间看不出直接关系
   ```
      
   - 对象写法：把模块写成一个对象，所有的模块成员都在这个对象里面
   ```javascript
    const module = new Object({
       count: 0,
       f1:function(){},
       f2:function(){},
       f3:function(){}
    });
    // 将函数封装在了module对象中，使用的时候直接调用对象的属性，如module.f1();
    // 缺点：这样的写法会暴露所有模块的成员，内部状态可以被外部改写，比如可以在外部改写count的值：module.count=5;
   ```
        
   - 立即执行函数写法：使用立即执行函数，可以达到不暴露私有成员的目的
   ```javascript
    const module = (function(){
        const count = 0;
        const f1 = function(){};
        const f2 = function(){};
        const f3 = function(){};
        return {
            f1:f1,
            f2:f2,
            f3:f3
        };
    })();
    // 使用这种写法，外部就不会访问到内部的变量了，而这也是JavaScript模块最基本的写法。
    ```

   - 放大模式：如果一个模块很大，就需要分成多个部分，或者一个模块需要继承另一个模块，这时就采用“方大模式”
    ```javascript
    var module = (function(mod){
        mod.f4 = function(){
            // ...代码块...
        };
        return mod;
    })(module);
    // 上面的代码为module添加了一个新的方法f4，然后返回了新的module模块
    ```
   - 宽放大模式：浏览器环境中，模块的各个部分通常是网上获取的，有时不知道哪个部分先加载，采用上面的写法，如果返回的是空对象，则会出现错误，宽放大的模式主要是为了避免出现这种错误，使得“立即执行函数”可以是空对象；
    ```javascript
        var module = ( function (mod){
        　　　　//...
        　　　　return mod;
        })(window.module || {});
    ```
   - 输入全局变量：独立性是模块的重要概念，模块内部最好不与程序的其他部分直接交互，为了在模块内部调用全局变量，必须显式将其他变量输入模块
    ```javascript
        var module = (function ($, YAHOO) {
    　　　　//...
    　　})(jQuery, YAHOO);
        // 上面的module1模块需要使用jQuery库和YUI库，就把这两个库（其实是两个模块）当作参数输入module。
        // 这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。
    ```
