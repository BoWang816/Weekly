---
title: JavaScript-权威指南-值类型变量
top_img: 'https://unsplash.it/1920/1080?random'
comments: true
cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604207586042&di=50261aaaa84079ab5fa1787c10264d4a&imgtype=0&src=http%3A%2F%2Fimage12.bookschina.com%2F2012%2F20120609%2F5524565.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 41827
date: 2020-09-01 10:22:25
tags:
   - JavaScript
   - Web
   - 权威指南
categories: [Web, JavaScript]
---

&emsp;&emsp;JavaScript中数据类型分为两类：**原始类型和对象类型** 
- 原始类型:数字、字符串、布尔值；两个特殊的原始值：null、undefined；
- 对象类型：内部对象，宿主对象，本地对象；
   - 本地对象：ECMA-262把本地对象定义为"独立于宿主环境的ECMAScript实现提供的对象”，
    本地对象就是ECMA-262定义的引用类型，主要有以下：
    ```
      1. Object
      2. Function
      3. Array
      4. String
      5. Boolean
      6. Number
      7. Date
      8. RegExp
      9. Error
      10.EvalError
      11.RangeError
      12.ReferenceReeor
      13.SyntaError
      14.TypeError
      15.URIError
    ```
    - 内置对象：ECMA-262 把内置对象定义为“由 ECMAScript 实现提供的、独立于宿主环境的所有对象，在 ECMAScript 程序开始执行时出现”。这意味着开发者不必明确实例化内置对象，它已被实例化了。ECMA-262 只定义了两个内置对象，即 Global 和 Math。
    - 宿主对象：所有非本地对象都是宿主对象，即由ECMAScript实现的宿主环境提供的对象，所有的BOM和DOM对象都是宿主对象。
    
#### 数字
&emsp;&emsp;JavaScript中不区分整数值和浮点数值，所有的数字均用**浮点数**值表示，JavaScript采用IEEE754标准（双精度）定义的64位浮点格式表示数字，JavaScript所能表示的数值范围为*正负1.7976931348623157乘以10的308次方*，其最小所能表示的小数为*正负5乘以10的负324次方*，这两个边界值可以分别通过访问Number对象的MAX_VALUE属性和MIN_VALUE属性来获取，JavaScript能表示并进行精确算术运算的整数范围为：**正负2的53次方**，也即从最小值-9007199254740992到最大值+9007199254740992之间的范围；对于超过这个范围的整数，JavaScript依旧可以进行运算，但却不保证运算结果的精度。值得注意的是，对于整数的位运算（比如移位等操作），JavaScript仅支持32位整型数，也即从-2147483648到+2147483647之间的整数。
    
   - 整型直接量
      &emsp;&emsp;在JavaScript中识别十进制与十六进制的整型直接量，十进制的则为我们平常书写的，十六进制的直接量以“0X”或者“0x”为前缀，后面跟随十六进制数串的直接量，如0x12ACDA；> 在JavaScript中不支持八进制直接量，但是JavaScript的某些实现可以允许采用八进制形式表示整数，八进制直接量以数字0开始，其后跟随一个由0~7之间的数字组成的序列，如0377；**严格模式下，八进制是禁用的**。
   - 浮点型直接量
      &emsp;&emsp;浮点型直接量可以包含小数点，，一个实数由整数部分、小数点、小数部分组成；还可以使用指数计数法表示浮点型直接量，即在实数后跟字母E和e，后面跟负号其后再加一个整型的指数；
   - JavaScript算术运算
      &emsp;&emsp;JavaScript中主要有加法运算符、减法运算符、乘法运算符、除法运算符、求余运算符等，还有一些更复杂的算术运算，通过作为Math对象的属性定义的函数与常量来实现；
函数  |  说明
--- | ---
Math.pow(2,53)|2的53次幂
Math.round(0.6)|四舍五入
Math.ceil(0.6)|向上取整
Math.floor(0.6)|向下取整
Math.abs(-5)|求绝对值
Math.max(x,y,z)|求最大值
Math.min(x,y,z)|求最小值
Math.random()|生成一个在0到1之间的随机数
Math.PI | 圆周率
Math.E | 自然对数的底数
Math.sqrt(3)|3的平方根
Math.pow(3,1/3)|3的立方根
Math.sin(0)|三角函数
Math.exp(3)|e的三次幂

* *JavaScript中算术溢出不会报错，上溢出时结果为Infinity，下溢出时结果为-Infinity*
* *JavaScript中被0整除不会报错，会返回Infinity或者-Infinity，但是0除以0返回NaN*
* *JavaScript中NaN不等于NaN，负值0于正值0相等*

##### 二进制浮点数与四舍五入错误
&emsp;&emsp;JavaScript中浮点数的形式只能表示有限的个数，最多表示18 437 736 874 454 810 627个，JavaScript中采用IEEE-754浮点数表示法，JavaScript中数字具有足够的精度，并可以及其近似于0.1。

##### 日期与时间
&emsp;&emsp;JavaScript中包括Date构造函数，用来创建表示日期和时间的对象；

方法	|描述
---|---
Date()	|返回当日的日期和时间。
getDate()|	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay()|	从 Date 对象返回一周中的某一天 (0 ~ 6)。
getMonth()|	从 Date 对象返回月份 (0 ~ 11)。
getFullYear()|	从 Date 对象以四位数字返回年份。
getYear()	|请使用 getFullYear() 方法代替。
getHours()	|返回 Date 对象的小时 (0 ~ 23)。
getMinutes()|	返回 Date 对象的分钟 (0 ~ 59)。
getSeconds()|	返回 Date 对象的秒数 (0 ~ 59)。
getMilliseconds()|	返回 Date 对象的毫秒(0 ~ 999)。
getTime()	|返回 1970 年 1 月 1 日至今的毫秒数。
getTimezoneOffset()	|返回本地时间与格林威治标准时间 (GMT) 的分钟差。
getUTCDate()|	根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
getUTCDay()	|根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
getUTCMonth()	|根据世界时从 Date 对象返回月份 (0 ~ 11)。
getUTCFullYear()|	根据世界时从 Date 对象返回四位数的年份。
getUTCHours()	|根据世界时返回 Date 对象的小时 (0 ~ 23)。
getUTCMinutes()	|根据世界时返回 Date 对象的分钟 (0 ~ 59)。
getUTCSeconds()	|根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
getUTCMilliseconds()	|根据世界时返回 Date 对象的毫秒(0 ~ 999)。
parse()	|返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
setDate()	|设置 Date 对象中月的某一天 (1 ~ 31)。
setMonth()	|设置 Date 对象中月份 (0 ~ 11)。
setFullYear()	|设置 Date 对象中的年份（四位数字）。
setYear()	|请使用 setFullYear() 方法代替。
setHours()	|设置 Date 对象中的小时 (0 ~ 23)。
setMinutes()|	设置 Date 对象中的分钟 (0 ~ 59)。
setSeconds()|	设置 Date 对象中的秒钟 (0 ~ 59)。
setMilliseconds()|	设置 Date 对象中的毫秒 (0 ~ 999)。
setTime()	|以毫秒设置 Date 对象。
setUTCDate()|	根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
setUTCMonth()|	根据世界时设置 Date 对象中的月份 (0 ~ 11)。
setUTCFullYear()|	根据世界时设置 Date 对象中的年份（四位数字）。
setUTCHours()	|根据世界时设置 Date 对象中的小时 (0 ~ 23)。
setUTCMinutes()	|根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
setUTCSeconds()	|根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。
setUTCMilliseconds()	|根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
toSource()	|返回该对象的源代码。
toString()	|把 Date 对象转换为字符串。
toTimeString()	|把 Date 对象的时间部分转换为字符串。
toDateString()	|把 Date 对象的日期部分转换为字符串。
toGMTString()	|请使用 toUTCString() 方法代替。
toUTCString()	|根据世界时，把 Date 对象转换为字符串。
toLocaleString()|	根据本地时间格式，把 Date 对象转换为字符串。
toLocaleTimeString()	|根据本地时间格式，把 Date 对象的时间部分转换为字符串。
toLocaleDateString()	|根据本地时间格式，把 Date 对象的日期部分转换为字符串。
UTC()	|根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
valueOf()	|返回 Date 对象的原始值。

#### 文本
&emsp;&emsp;字符串是一组由16位值组成的不可变的有序序列，采用UTF-16编码的Unicode字符集，每个字符通常来自于Unicode字符集，字符串的长度是其所含值的个数。

   - 字符串直接量
   &emsp;&emsp;JavaScript中字符串直接量是由单引号或双引号括起来的字符序列，单引号定界的字符串可以包含双引号，双引号定界的字符串也可以包含单引号；字符串直接量可以拆分成多行（ECMAScript5之后才可以），每行必须用\结束，反斜线和行结束符不算是字符串直接量的内容；在使用单引号的时候要注意英语单词中的撇号，使用时应进行转义。
    
   - 转义字符
    转义字符 | 含义说明
    ----| ----
    \o | NUL字符
    \b |退格符
    \t |水平制表符
    \n | 换行符
    \v | 垂直制表符
    \f | 换页符
    \r | 回车符
    \" |双引号
    \' | 单引号
    \ | 反斜线
    \xXX | 由两位十六进制数XX指定的Latin-l字符
    \uXXX | 由四位十六进制XXXX指定的Unicode字符

   - 字符串的使用
   &emsp;&emsp;JavaScript中字符串是固定不变的，类似replace()与toUpperCase()等方法都是返回新的字符串，原字符串本身是没有改变的；
    字符串属性	| 描述
    ----|---
    constructor|	对创建该对象的函数的引用
    length	|字符串的长度
    prototype|	允许您向对象添加属性和方法
   
   - 字符串方法 
    字符串方法|描述
    ---|---
    anchor()	|创建 HTML 锚。
    big()	|用大号字体显示字符串。
    blink()	|显示闪动字符串。
    bold()	|使用粗体显示字符串。
    charAt()	|返回在指定位置的字符。
    charCodeAt()	|返回在指定的位置的字符的 Unicode 编码。
    concat()	|连接字符串。
    fixed()	|以打字机文本显示字符串。
    fontcolor()	|使用指定的颜色来显示字符串。
    fontsize()	|使用指定的尺寸来显示字符串。
    fromCharCode()|	从字符编码创建一个字符串。
    indexOf()	|检索字符串。
    italics()	|使用斜体显示字符串。
    lastIndexOf()	|从后向前搜索字符串。
    link()	|将字符串显示为链接。
    localeCompare()	|用本地特定的顺序来比较两个字符串。
    match()	|找到一个或多个正则表达式的匹配。
    replace()	|替换与正则表达式匹配的子串。
    search()	|检索与正则表达式相匹配的值。
    slice()	|提取字符串的片断，并在新的字符串中返回被提取的部分。
    small()	|使用小字号来显示字符串。
    split()	|把字符串分割为字符串数组。
    strike()	|使用删除线来显示字符串。
    sub()	|把字符串显示为下标。
    substr()	|从起始索引号提取字符串中指定数目的字符。
    substring()	|提取字符串中两个指定的索引号之间的字符。
    sup()	|把字符串显示为上标。
    toLocaleLowerCase()	|把字符串转换为小写。
    toLocaleUpperCase()	|把字符串转换为大写。
    toLowerCase()	|把字符串转换为小写。
    toUpperCase()	|把字符串转换为大写。
    toSource()	|代表对象的源代码。
    toString()	|返回字符串。
    valueOf()	|返回某个字符串对象的原始值。

   - 模式匹配
   &emsp;&emsp;JavaScript中定义了RegExp()构造函数，用来创建表示文本匹配模式的对象 ，这些模式成为“正则表达式”，RegExp不是JavaScript中的基本类型，是一种特殊对象，与Date相似。在两条斜线之间的文本构成一个正则表达式直接量，第二条斜线之后可以跟随一个或多个字母进行匹配模式的修饰；* 直接语法方式： /pattern/attributes
        - 创建RegExp对象方法： new RegExp(pattern,attributes);
        - 参数说明
        参数pattern是一个字符串，制定了正则表达式的模式或者其他正则表达式；
        参数attributes是一个可选的字符串，包括属性’g‘，’i‘，’m‘，分别用于指定匹配全局、区分大小写匹配，匹配多行；
        - 返回值说明   
        一个新的RegExp对象，具有指定的模式和标志，如果pattern是正则表达式而不是字符串，那么 RegExp() 构造函数将用与指定的 RegExp 相同的模式和标志创建一个新的 RegExp 对象。
        如果不用 new 运算符，而将 RegExp() 作为函数调用，那么它的行为与用 new 运算符调用时一样，只是当 pattern 是正则表达式时，它只返回 pattern，而不再创建一个新的 RegExp 对象。
        - 抛出说明
        SyntaxError - 如果 pattern 不是合法的正则表达式，或 attributes 含有 "g"、"i" 和 "m" 之外的字符，抛出该异常。
        TypeError - 如果 pattern 是 RegExp 对象，但没有省略 attributes 参数，抛出该异常。
        
       * RegExp中的修饰符
       
        | 修饰符 | 描述 |
        | ---|---
        i	|执行对大小写不敏感的匹配。
        g	|执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
        m	|执行多行匹配。

   * RegExp中的方括号
    表达式	| 描述
    ----|---
    [abc]	|查找方括号之间的任何字符。
    [^abc]	|查找任何不在方括号之间的字符。
    [0-9]	|查找任何从 0 至 9 的数字。
    [a-z]	|查找任何从小写 a 到小写 z 的字符。
    [A-Z]	|查找任何从大写 A 到大写 Z 的字符。
    [A-z]	|查找任何从大写 A 到小写 z 的字符。
    [adgk]	|查找给定集合内的任何字符。
    [^adgk]	|查找给定集合外的任何字符。
    (red/blue/green)	|查找任何指定的选项。

   * RegExp中的元字符
    元字符	|描述
    ---|---
    .	|查找单个字符，除了换行和行结束符。
    \w	|查找单词字符。
    \W	|查找非单词字符。
    \d	|查找数字。
    \D	|查找非数字字符。
    \s	|查找空白字符。
    \S	|查找非空白字符。
    \b	|匹配单词边界。
    \B	|匹配非单词边界。
    \0	|查找 NUL 字符。
    \n	|查找换行符。
    \f	|查找换页符。
    \r	|查找回车符。
    \t	|查找制表符。
    \v	|查找垂直制表符。
    \xxx	|查找以八进制数 xxx 规定的字符。
    \xdd	|查找以十六进制数 dd 规定的字符。
    \uxxxx	|查找以十六进制数 xxxx 规定的 Unicode 字符。


   * RegExp中的量词
    量词	| 描述
    ---|---
    n+	|匹配任何包含至少一个 n 的字符串。
    n*	|匹配任何包含零个或多个 n 的字符串。
    n?	|匹配任何包含零个或一个 n 的字符串。
    n{X}	|匹配包含 X 个 n 的序列的字符串。
    n{X,Y}	|匹配包含 X 至 Y 个 n 的序列的字符串。
    n{X,}	|匹配包含至少 X 个 n 的序列的字符串。
    n$	|匹配任何结尾为 n 的字符串。
    ^n	|匹配任何开头为 n 的字符串。
    ?=n	|匹配任何其后紧接指定字符串 n 的字符串。
    ?!n	|匹配任何其后没有紧接指定字符串 n 的字符串。

   * RegExp中的对象属性
    属性 | 描述
    ---|---
    global	|RegExp 对象是否具有标志 g。声明了给定的正则表达式是否执行全局匹配，该标志被设置则属性为true，未设置为false
    ignoreCase	|RegExp 对象是否具有标志 i，设置了i标志则返回true，否则返回false；
    lastIndex	|一个整数，标示开始下一次匹配的字符位置。该属性存放一个整数，它声明的是上一次匹配文本之后的第一个字符的位置.上次匹配的结果是由方法 RegExp.exec() 和 RegExp.test() 找到的，它们都以 lastIndex 属性所指的位置作为下次检索的起始点。这样，就可以通过反复调用这两个方法来遍历一个字符串中的所有匹配文本。该属性是可读可写的。只要目标字符串的下一次搜索开始，就可以对它进行设置。当方法 exec() 或 test() 再也找不到可以匹配的文本时，它们会自动把 lastIndex 属性重置为 0。
    multiline	|RegExp 对象是否具有标志 m。是否可以进行多行匹配，如果被设置则该属性为true，否则为false
    source	|返回正则表达式的源文本，不包括正则表达式直接量使用的定界符，也不包括g、i、m

   * RegExp的对象方法
    方法 | 描述 |  参数说明
    ---| --- |---
    compile | 用于在脚本执行过程中编译正则表达式，也可以改变和重新编译，语法：RegExpObject.compile(regexp,modifier); |regexp是正则表达式，modifier规定匹配类型，i、g、m可结合使用
    exec() | 用于检索字符串中的正则表达式的匹配，返回一个数组，其中放匹配结果，未找到匹配返回null，语法：RegExpObject.exec(string); | 如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。此数组的第 0 个元素是与正则表达式相匹配的文本，第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话）， 以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性。index 属性声明的是匹配文本的第一个字符的位置。input 属性则存放的是被检索的字符串 string。我们可以看得出，在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。但是，当 RegExpObject 是一个全局正则表达式时，exec() 的行为就稍微复杂一些。它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string。当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
    test() | 用于检测一个字符串是否匹配某个模式，如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false。语法：RegexpObject.test(string); |调用 RegExp 对象 r 的 test() 方法，并为它传递字符串 s，与这个表示式是等价的：(r.exec(s) != null)。

   * 支持正则表达式的String对象的方法
    方法 | 描述 | 说明
    ---| --- | ----
    search	|检索与正则表达式相匹配的值。该参数可以是需要在 stringObject 中检索的子串，也可以是需要检索的 RegExp 对象。语法：	stringObject.search(regexp);|stringObject 中第一个与 regexp 相匹配的子串的起始位置。search() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置。
    match	|找到一个或多个正则表达式的匹配。该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。语法：stringObject.match(searchvalue)';stringObject.match(regexp); |searchvalue规定要检索的字符串值,regexp规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。
    replace	|替换与正则表达式匹配的子串。语法：stringObject.replace(regexp/substr,replacement)  |regexp/substr规定子字符串或要替换的模式的 RegExp 对象。如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。 replacement一个字符串值，规定了替换文本或生成替换文本的函数。
    split	|把字符串分割为字符串数组。语法：stringObject.split(separator,howmany) |separator字符串或正则表达式，从该参数指定的地方分割 stringObject；howmany可选参数，该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。

#### 布尔值
* 布尔值代表真假、开关、是否，只有true和false；
* 布尔值包含toString()方法，可以使用这个方法将字符串转换为true或者false；
* 与运算&&、或运算||、非运算!

#### null与undefined
* null是JavaScript中的一个关键字，用来描述“空值”，是一个特殊的对象值，含义是“非对象”，也可以表示值为空；
* undefined预定义的全局变量，表示“未定义”，在ECMAScript5中undefined是只读的，是undefined类型；

#### 全局对象
&emsp;&emsp;全局对象的属性是全局定义的符号，加载页面时将创建一个新的全局对象，并给他初始化相关属性；

#### 包装对象
&emsp;&emsp;存取字符串、数字或者布尔值的属性时创建的临时对象称为包装对象，通常包装对象只是被看做是一种细节实现，因为是只读的所以不可以重新定义新属性，主要有String(),Boolean()，Number()等；

#### 不可变的原始值与可变的对象引用
* JavaScript中的原始值：undefined、null、布尔值、数字、字符串；原始值不可更改，原始值的比较是值得比较，只有值相等的时候它们就相等；
* JavaScript中的对象：数组、函数等；
* 对象中的值是可变的，通常称对象为引用类型，对象值是引用，对象的比较均是引用的比较，当且仅当它们引用同一个对象的时候它们才相等；
 
#### 类型转换
- 转换和相等性
  一个值转换为另外一个值并不意味这两个值相等；JavaScript中运算符和语句期望使用多样化的数据类型，并可以相互转换；
- 显示类型转换
  做显示式类型转换最简单的方法就是通过Boolean()、Number()、String()或者Object()函数；除了Null和undefined之外任何值都具有toString()方法，这个方法的执行结果通常和String()方法的返回结果一致。
- 对象转换为原始值
  对象到布尔值得转换：所有的对象包括数组和函数都会转换为true；对象到字符串和对象到数字的转换是通过调用待转换的对象的一个方法来完成的。

    * toString() 所有的对象继承了两种转换方法，第一个是toString(),它的作用是返回一个反映这个对象的字符串；
        * 数组类的toString()方法将每个数组元素转换为一个字符串，并在元素之间添加逗号后合并成结果字符串；
        * 函数类的toString()方法返回这个函数的实现定义的表示方式；
        * 日期类的toString()方法返回一个可读的日期和时间字符串；
        * RegExp类的定义的toString()方法将REgExp对象转换为表示正则表达式直接量的字符串；

    * valueOf() 另一种就是valueOf()，如果存在任意原始值，它就默认将对象转化位表示它的原始值；对象是符合值，而且大多数对象无法真正的表示一个原始值，因此默认的valueOf()返回对象本身，而不是返回一个原始值；数组，函数，正则表达式简单的继承了这个默认的方法；

#### 变量声明
&emsp;&emsp;在JavaScript中使用一个变量前，应该首先使用关键字var声明；可以通过一个var关键字声明多个变量，可以将变量的初始赋值和变量声明合在一起。如果未在var声明语句中给变量初始值，这个初始值就是undefined；

#### 变量作用域
&emsp;&emsp;一个变量的作用域是程序源代码中定义这个变量的区域，全局变量拥有全局作用域；在函数内部声明的变量只在函数内有定义，是局部变量；在函数体内，局部变量的优先级高于同名的全局变量，如果在函数内声明一个局部变量或者函数参数中带有的变量和全局变量重名，那么全局变量会被局部变量所遮盖；

- 函数作用域于声明提前
&emsp;&emsp;JavaScript中没有块级作用域的概念，使用的是函数作用域：变量在声明它们的函数体以及这个函数体嵌套的任意函数体内都是有定义的；JavaScript中的函数作用域是指在函数内声明的所有变量在函数体内始终是可见的，这意味着变量在声明之前就已经可用，这种特性被称为声明提前；声明提前只是将声明变量这个操作提前的，但是不会将赋值提前；
```
var scope='global';
function(){
    console.log(scope);//输出undefined，下面的变量声明提前了，但是赋值操作没提前
    var scope = 'local';
    console.log(scope);
}
```

- 作为属性的变量
&emsp;&emsp;当声明一个JavaScript全局变量时，实际上是定义全局对象的一个属性，当使用var声明一个变量的时候，创建的这个属性是不可配置的，也就是说这个变量无法通过delete运算符删除；在非严格模式下给一个未声明的变量赋值的话，JavaScript会自动创建一个全局变量，用这个方式创建的全局对象是正常的可配置属性，并可以删除它们；JavaScript中全局变量是全局对象的属性，局部变量当做跟函数调用相关的某个对象的属性称为“声明上下文对象”，JavaScript中可以使用this关键字来引用全局对象，却没有方法可以引用局部变量中存放的对象；

- 作用域链
&emsp;&emsp;作用域链是一个对象列表或者链表，这组对象定义了这段代码“作用域中”的变量，当JavaScript需要查找变量x的值得时候（变量解析），它会从链中的第一个对象开始查找，如果这个对象有一个名为x的属性，则会直接使用这个属性，如果第一个对象中不存在名为x的属性，JavaScript会继续查找链上的下一个对象，如果第二个对象依然没有名为x的属性，则继续查找下一个对象，依次类推，形成一个作用域链。

&emsp;&emsp;在JavaScript的最顶层代码中，作用域链由一个全局对象组成，在不包含嵌套的函数体内，作用域链上有两个对象，第一个是定义函数参数和局部变量的对象，第二个是全局对象；在一个嵌套的函数体中，作用域链上至少有三个对象；当定义一个函数时，实际上就是保存了一个作用域链，当调用这个函数时，它创建一个新的对象来存储它的局部变量，并将这对象添加至保存的那个作用域链上，同时创建一个新的更长的表示函数调用作用域的“链”。
