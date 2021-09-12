---
title: Webstorm插件推荐
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
image: 'https://cdn.jsdelivr.net/gh/BoWang816/zPicture@main/20210804/webstormCover.png'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 63952
date: 2019-08-17 10:00:52
updated: 2021-08-04 10:00:52
tags: 
   - Webstorm 
   - 软件
categories: 软件
keywords: webstorm, plugins
description: webstorm常用插件推荐
---

### WebStorm插件与WebStorm 插件与可能出现的问题解决

- 插件
    - .ignore 版本管理工具的忽略文件插件
    - CamelCase 下划线驼峰转换插件
    - Docker Docker管理插件
    - Power Mode II 打字特效
    - activate-power-mode 打字特效
    - stackoverflow 右键stackoverflow搜索(通过Google搜索,墙内不能用)
    - Rainbow Brackets 括号换色提示插件
    - Translation 翻译插件
    - ideaVim 支持vim编辑器，但是按键会冲突，个人觉得不是很好用
    - AceJump 光标快速定位
    - Key Promoter 快捷键提示，每按一次都会提示，提示框很大，个人觉得不好用
    - Markdown 支持markdown语法
    - Material Theme UI 设置主题，不好的是大部分是暗色主题，亮色的特别亮，但是支持的文件图标不错
    - CodeGlance 右侧小地图导航，像sublime text中一样的那个，可以配置宽度
    - Codota: AI代码生成，自动联想，支持javaScript和java；
    - Atom Material Icons: 文件图标、系统图标会更好看；
    - GitToolBox: git提交记录插件，鼠标在某行代码的时候可以看见是谁在什么时候提交的，提交信息是什么；
    - Paste images into MarkDown: 在编写markdown时，如果需要添加图片，则复制以后可直接使用ctrl+v或command+v进行粘贴，会弹出一个弹框设置图片名称、路径，十分方便
    - IDE Eval Reset: 30天试用试用试用webstormAdi
- 问题

    1、搜索插件时一直搜不到插件怎么办？在settings中找到system settings，下面的updates，点开以后右边会有两个选择，不要选Use secure connection，勾选上面那个选择就好。

    2、如果在plugins实在下载不下来可以去 https://plugins.jetbrains.com/ 这里下载，如果一只刷不出来则不要用安全连接，直接访问http://plugins.jetbrains.com/ ，然后进行搜索下载即可。下载下来以后是个压缩包，解压之后，将整个文件夹放在webstorm安装目录下的plugin文件夹下，如果解压出来的文件名是以idea开头的，则将idea-去掉就好了

## 前言
作为一个FE开发者，在日常工作中用的最多的可能就是WebStorm与VsCode，我在工作的这几年一直使用的是WebStorm进行开发，今天为大家带来我工作中使用的一些Webstorm插件以及一些可以提效的配置方法，希望能够帮助使用WebStorm的朋友们更加高效工作，多余时间可以多摸摸🐟！

## 最终效果展示

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a711db42d41440da15e8fd610605500~tplv-k3u1fbpfcp-zoom-1.image)

## 插件推荐
> 下面会详细介绍每一个插件的安装、使用建议，推荐指数✨

### **.ignore**: 版本管理工具的忽略文件插件

- 插件描述：支持创建多种.ignore文件，会默认设置到需要忽略的文件或文件夹，我常用的是.gitignore，用于常见前端常见的需要忽略提交的文件，如node_modules，dist等；支持将文件旋选中右键进行添加到.gitignore；
- 安装方式：webstorm内部插件市场搜索`.ignore`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/7495--ignore
- 使用效果：个人感觉很实用，会非常方便，有时候如果已经将文件添加到git提交缓存中的时候，需要使用命令清除缓存把文件撤销出来，这个插件可以帮助你完成这一步。更多功能需要自己使用进行发掘
- 推荐指数：🌟🌟🌟🌟🌟
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd85af237ca4432c917868450ee35007~tplv-k3u1fbpfcp-zoom-1.image)

### **Power Mode II**: 打字特效
- 插件描述：炫酷的打字效果，除了炫酷，没任何卵用，屏幕抖动的看着难受；
- 安装方式：webstorm内部插件市场搜索`Power Mode II`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/8251-power-mode-ii
- 使用效果：装13可以，效果不大
- 推荐指数：🌟🌟
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cec8ab00ba141719b81d7ead597f4f2~tplv-k3u1fbpfcp-zoom-1.image)

### **activate-power-mode**: 打字特效
- 插件描述：与Power Mode II类似，效果更爆炸
- 安装方式：webstorm内部插件市场搜索`activate-power-mode`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/8330-activate-power-mode
- 使用效果：头晕式摸鱼
- 推荐指数：🌟🌟
  ![](https://plugins.jetbrains.com/files/8330/screenshot_16504.png)

### **CodeSearch**: 右键搜索(通过Google搜索,墙内不能用)
- 插件描述：选中某段内容，可以直接右键通过搜索引擎搜索进行搜索；需要配置搜索引擎，可以配置Baidu, Google, StackOverflow and GitHub四种
- 安装方式：webstorm内部插件市场搜索`codeSearch`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/12578-codesearch
- 使用效果：实用性挺高，很方便的帮助搜索，安装以后就可以选中要搜索的东西
- 推荐指数：🌟🌟🌟🌟🌟
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eac5e5086b8841b58677011179c0c4f8~tplv-k3u1fbpfcp-watermark.image)
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd913a799edf4de3a535b39a4d3dacfb~tplv-k3u1fbpfcp-watermark.image)

### **Rainbow Brackets**: 括号换色提示插件
- 插件描述：代码中如果嵌套较深的话，找前面的括号与后面对应的地方会很麻烦，这款插件使用不同颜色进行标记，可以很方便的找到对应的开始和结尾的括号
- 安装方式：webstorm内部插件市场搜索`.ignore`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/10080-rainbow-brackets
- 使用效果：个人感觉比较方便，可以快速定位，并且代码界面也会看起来更好看一点，愉悦心情，开心coding；
- 推荐指数：🌟🌟🌟🌟
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b683786aaaf8477ebf7feb4cf1cbb49d~tplv-k3u1fbpfcp-zoom-1.image)

### **Translation**: 翻译插件
- 插件描述：翻译插件，可以便捷的在WebStorm中进行翻译，省去了去浏览器进行翻译的操作，也支持右键方式选中翻译
- 安装方式：webstorm内部插件市场搜索`Translation`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/8579-translation
- 使用效果：翻译更便捷啦，但是还是要多动脑子想一想呀
- 推荐指数：🌟🌟🌟🌟
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7b2a221bb854b7e9913e376235d0e25~tplv-k3u1fbpfcp-watermark.image)
  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c64046073204137af9bc994c78b1cee~tplv-k3u1fbpfcp-watermark.image)

### **AceJump**: 光标快速定位
- 插件描述：AceJump 允许您将插入符号快速导航到编辑器中可见的任何位置，使用方式快捷键：Ctrl+;
- 安装方式：webstorm内部插件市场搜索`AceJump`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/7086-acejump
- 使用效果：用的不是很多，得使用快捷键，也不是很方便，马马虎虎吧，看个人喜好
- 推荐指数：🌟🌟
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5bee110342a437a84e6421e6d4ac3b7~tplv-k3u1fbpfcp-zoom-1.image)

### **Material Theme UI**: 设置主题，不好的是大部分是暗色主题，亮色的特别亮，但是支持的文件图标不错
- 插件描述：众所周知，一款很出名的主题
- 安装方式：webstorm内部插件市场搜索`Material Theme UI`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/8006-material-theme-ui
- 使用效果：根据个人喜好吧，自己喜欢的才是最好的
- 推荐指数：🌟🌟🌟🌟
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b347c5d14ed44cef8920218fbc36cc9d~tplv-k3u1fbpfcp-zoom-1.image)

### **CodeGlance**: 右侧小地图导航，像sublime text中一样的那个，可以配置宽度
- 插件描述：可以在打开的窗口右边显示小地图，用于快速定位跳转，尤其是针对很多行的文件，就很方便的；
- 安装方式：webstorm内部插件市场搜索`CodeGlance`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/7275-codeglance
- 使用效果：可以配置小地图宽度，可以设置固定宽，也可以拖拉设置宽度
- 推荐指数：🌟🌟🌟🌟🌟
  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68a7a5521cda4e77b4d78fdbfae13d02~tplv-k3u1fbpfcp-watermark.image)

### **Codota**: AI代码生成，自动联想，支持javaScript和java；
- 插件描述：代码联想，不用过多解释了
- 安装方式：webstorm内部插件市场搜索`Codota`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/7638-codota-ai-autocomplete-for-java-and-javascript
- 使用效果：我用的觉得还行，它可以快捷显示之前输入过的内容，或者快捷生成函数等，可以提升写代码的速度
- 推荐指数：🌟🌟🌟🌟🌟
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e213a6dd1b140d0aaf1b9cf38d5509b~tplv-k3u1fbpfcp-zoom-1.image)

### **Atom Material Icons**: 文件图标、系统图标会更好看；
- 插件描述：为文件夹、文件增加图标，让编译器看起来更美观，也是一款可以愉快coding的好用插件
- 安装方式：webstorm内部插件市场搜索`Atom Material Icons`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/10044-atom-material-icons
- 使用效果：针不戳啊针不戳
- 推荐指数：🌟🌟🌟🌟🌟
  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7bdc310a04d4f658dbd425c0fcacd55~tplv-k3u1fbpfcp-watermark.image)

### **GitToolBox**: git提交记录插件，鼠标在某行代码的时候可以看见是谁在什么时候提交的，提交信息是什么；
- 插件描述：没记错的话VsCode里面也有一款类似的插件，可以看见每行代码是谁、在什么时候提交的，提交message是什么，不用再使用Annote with Git Blame了
- 安装方式：webstorm内部插件市场搜索`GitToolBox`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/7499-gittoolbox
- 使用效果：方便啊方便，非常方便的！！一看有bug，就知道是谁写的这垃圾代码了！
- 推荐指数：🌟🌟🌟🌟🌟
  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03056f1a1736424dba1dc6e5f4182bb5~tplv-k3u1fbpfcp-watermark.image)

### **Paste images into MarkDown**: 在编写markdown时，如果需要添加图片，则复制以后可直接使用ctrl+v或command+v进行粘贴，会弹出一个弹框设置图片名称、路径，十分方便
- 插件描述：在WebStorm写markdwon文档的时候，有时候需要增加图片可能要先将图片放到文件夹，再在markdown中引用，那么这个插件可以很好的解决问题，剪贴板上有图片信息，直接ctrl+V进行粘贴
- 安装方式：webstorm内部插件市场搜索`Paste images into MarkDown`或官方地址下载到本地进行安装
- 官方地址：https://plugins.jetbrains.com/plugin/8446-paste-images-into-markdown
- 使用效果：提升效率的利器，还可以设置图片存储路径，是否是圆角、图片大小等
- 推荐指数：🌟🌟🌟🌟🌟
  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30eb42ee0a0b480cb1fc457707e02f45~tplv-k3u1fbpfcp-watermark.image)

好啦，可以写出来的常用的就这些基本插件啦，更多的插件可以去我的博客了解：https://blog.wangboweb.site/2019/08/17/63952.html

## 设置一下

### 字体以及UI、展示风格
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5b49ab527c442ee9814790b09f116f2~tplv-k3u1fbpfcp-watermark.image)

### 文件模板设置
详情：https://blog.wangboweb.site/2021/08/04/60426.html
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e4221ec021b4a1784e53d373697d633~tplv-k3u1fbpfcp-watermark.image)

### 配置信息备份
可以备份到云上，也可以备份到jetbrains 账户上
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a83a43448e154fd0af07107849f30696~tplv-k3u1fbpfcp-watermark.image)

### 设置背景图片
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c2d3cbe0e4f4ea783eb47ab12e432d1~tplv-k3u1fbpfcp-watermark.image)

## 总结
大概就是这么多了，其实很多功能在日常开发中不一定会用到，但是一旦发现了，就会很顺手，需要自己多多探索，打造一个适合自己的编译器，才能真正的提高开发效率，这样就有更多的机会去摸鱼鱼！！！

另外有人翻译了WebStorm的官方帮助文档，有需要的可以去看看。

中文帮助文档：https://www.kancloud.cn/zxhy/webstorm/182199

官方英文帮助文档：https://www.jetbrains.com/help/webstorm/meet-webstorm.html
