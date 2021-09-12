---
title: React-React列表与Key
top_img: 'https://unsplash.it/800/200?random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3396435274,4251997814&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
abbrlink: 12000
date: 2019-12-22 15:27:25
tags: 
   - React
   - Web
categories: [Web, React]
---

&emsp;&emsp;在React中的列表与JavaScript类似，可以通过{}在JSX中进行列表的渲染。

#### 基础组件列表

&emsp;&emsp;定义一个组件，并接收一个list作为参数，渲染出list中的每个元素，需要注意的是需要为每一个li设置key，不然会报错，因为key是为了帮助React识别元素，一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。如果列表项目的顺序可能会变化，不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。**key只是在兄弟节点节点之间不可共存，他们不需要全局唯一，并且key 会传递信息给 React ，但不会传递给你的组件**。

```javascript
function NumList(props) {
    const list = props.list;
    // 此处的index是map自己的index即索引
    const listItems = list.map((number, index) =>
        // 此处的index为number元素的index属性
        <li key={number.index}>
          {number.value}
        </li>
    );
    return <ul>{listItems}</ul>;
};

const num = [{index:1, value: 'yi'},{index:2, value: 'er'},{index:3, value: 'san'},{index:4, value: 'si'}];
ReactDOM.render(
    <NumList list={num} />,
    document.getElementById('root')
)

```

#### 在 JSX 中嵌入 map()

&emsp;&emsp;在JSX中可以直接将map包含在{}中，因为{}中允许嵌入任何表达式，因此在下面两种写法中，产生的结果其实是完全一样的，只是两种不同的写法而已。

```javascript
// 方式1：
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```
```javascript
// 方式2：
function NumberList(props) {
  const numbers = props.numbers;
  return (
     <ul>
       {numbers.map((number) => <ListItem key={number.toString()} value={number} />)}
     </ul>
   );
}
```

#### 总结

&emsp;&emsp;综上，了解了React中的列表基本使用，其实和JavaScript中大同小异，使用方式如出一辙，一点小差别是React在渲染列表元素时需要指定key，因为React需要根据它的唯一值识别元素，且React在组件中使用list时，组件的props不会传递key。
