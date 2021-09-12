---
title: 如何搭建同步hexo的博客小程序
top_img: 'https://unsplash.it/800/200?random'
comments: true
cover: 'https://tva1.sinaimg.cn/large/008eGmZEly1gnxgpp21apj30p008c3yk.jpg'
copyright_author: bo.wang
description: 打造微信小程序同步hexo博客数据
sitemap: true
tags:
  - 小程序
  - Hexo
  - 博客搭建
categories: [Web, 小程序]
abbrlink: 63103
date: 2021-02-08 09:54:35
---

## 前言

&nbsp;&nbsp;&nbsp;&nbsp;在上一次的文章中，介绍了[如何使用 vercel+hexo 打造自己的线上博客](https://juejin.cn/post/6915246250933616648)，如果有跟着一步一步实践了的朋友，应该已经搭建了自己的博客了，今儿个咱们再玩儿点新的花样，那就是在 hexo 中写了博客，怎么让他在小程序中也可以直接预览。

## 原因

&nbsp;&nbsp;&nbsp;&nbsp;做这个的原因在于，目前小程序在微信打开极其方便，比如在简历里面你直接扔个二维码比扔个链接，让面试官手机一扫看着也更方便，并且因为我本身还没有做过小程序相关的东西，所以也想玩一玩。

- 为什么不用 Taro 或 uniapp？

  Taro 试了试项目也搭建好了，但是写的有点累，所以后来就有点难受，整好之前买了一本掘金的小册，[小程序开发入门与实践](https://juejin.cn/book/6897486502482149376)，就我个人而言，还是挺推荐这个小册的，用来入门妥妥的，不打广告，真实感受！

  至于 uniapp 的话，也是完全没接触过，暂时可能也不会接触，所以就选择了微信小程序

## 介绍

&nbsp;&nbsp;&nbsp;&nbsp;因为本文涉及两个方面的东西，一个是博客中的数据怎么转成接口形式供小程序调用，另一个是小程序开发的所需要具备的条件。那么接下来就带着这两个问题开始吧！！

- hexo 插件

  在 hexo 众多插件中，又一个叫`hexo-generator-restful`的插件，顾名思义就是将 hexo 中的某些东西可以转换生成 restful 接口供其他地方调用，GitHub 地址：[https://github.com/yscoder/hexo-generator-restful](https://github.com/yscoder/hexo-generator-restful)，但是呢这个插件只是获取到了一些简单的数据，包括文章列表、分类列表、标签列表以及自定义页面的东西，如果不满足需要你也可以 fork 下来自己进行二次开发一下！

- 微信小程序

  微信小程序的话，需要申请，在[微信公众平台](https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN)注册并完善相关的信息即可，过程也比较简单这里不再赘述，如有问题可以留言告诉我哈，尽我所能！所需要的工具，由于比较环境和语法都比较特殊，微信有专门的开发者工具，Vscode 里面也有一些可以开发的插件，但是说实话着实不太好用，时不时就卡死了，如果有朋友知道更好用的工具，麻烦告诉我一声，十分感谢！！！

## hexo-generator-restful 配置

1、打开我们之前建好的博客项目，在 package.json 中安装插件，

安装命令： `npm install hexo-generator-restful`

![](https://tva1.sinaimg.cn/large/008eGmZEly1gnwhmbvv6dj311l0u0ac4.jpg)

2、打开\_config.yaml 文件，粘贴以下代码，当然配置信息具体描述可以在[Github](https://github.com/yscoder/hexo-generator-restful)上查看获取。**注意配置信息的代码缩进**

```yaml
# 对外API
restful:
  # site 可配置为数组选择性生成某些属性
  # site: ['title', 'subtitle', 'description', 'author', 'since', email', 'favicon', 'avatar']
  site: true        # hexo.config mix theme.config
  posts_size: 10    # 文章列表分页，0 表示不分页
  posts_props:      # 文章列表项的需要生成的属性
    title: true
    slug: true
    date: true
    updated: true
    comments: true
    path: true
    excerpt: false
    cover: true      # 封面图，取文章第一张图片
    content: true
    keywords: true
    categories: true
    tags: true
  categories: true         # 分类数据
  use_category_slug: true # Use slug for filename of category data
  tags: true               # 标签数据
  use_tag_slug: true      # Use slug for filename of tag data
  post: true               # 文章数据
  pages: true
```

3、配置好以后，push 代码，vercel 自动部署后即可访问。访问地址是你的域名+/api/\*\*\*，你也可以直接访问域名+/api，查看完整的数据类目。举个 🌰，看看我的就行，哈哈哈。因为我的域名是https://blog.wangboweb.site，所以只需要在后面加上/api即可。

- 文章列表：[https://blog.wangboweb.site/api/posts.json](https://blog.wangboweb.site/api/posts.json)
  ![](https://tva1.sinaimg.cn/large/008eGmZEly1gnxermp3zpj31uo0u0qdl.jpg)

- 分类列表：[https://blog.wangboweb.site/api/categories.json](https://blog.wangboweb.site/api/categories.json)

- 标签列表： [https://blog.wangboweb.site/api/tags.json](https://blog.wangboweb.site/api/tags.json)

- 文章详情：[https://blog.wangboweb.site/api/articles/%E9%9A%8F%E7%AC%94/2021.json](https://blog.wangboweb.site/api/articles/%E9%9A%8F%E7%AC%94/2021.json)

4、到这里，hexo 博客方面就已经配置完成了，这种方式生成的接口不需要鉴权，因此你可以在任意项目里面调用它。

## 小程序开发

&nbsp;&nbsp;&nbsp;&nbsp;在搭建小程序项目时，除了注册小程序再就是使用微信开发者工具进行小程序开发了，那么下载[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。

- 登陆微信小程序，在设置中找到 AppId，记住；
- 打开微信开发者工具，扫码登陆
  ![](https://tva1.sinaimg.cn/large/008eGmZEly1gnxexzf50lj30ik0qcwev.jpg)
- 新建小程序项目
    - 项目名称：填写你的项目名称
    - 目录：选择项目所在目录
    - AppID：就是在微信小程序后台中的那个 AppId
    - 开发模式：小程序
    - 后端服务：小程序云开发表示可以使用云函数以及云开发环境，是微信提供的，通过微信云 SDK 进行调用；不使用云服务则是简单的微信小程序项目。因为我已经开通了云开发功能因此这里我也选择了云开发。
      ![小程序开发](https://tva1.sinaimg.cn/large/008eGmZEly1gnxf062neyj31400u0dgz.jpg)
    - 新建好后，就是这样的，默认的页面
      ![](https://tva1.sinaimg.cn/large/008eGmZEly1gnxf9rs8kjj31930u0jud.jpg)
    - 接下来就可以正常开发了。有兴趣的可以查看我现在正在做的项目，[wx-blog](https://github.com/BoWang816/wx-blog)
    - 项目目录结构
      ![](https://tva1.sinaimg.cn/large/008eGmZEly1gnxfiawdtvj30cm164dgn.jpg)

        - cloudFunctions `云函数`
        - miniProgram `项目目录`
            - UIComponents `引用的三方UI组件库`
            - components `业务组件`
            - constants `常量`
            - image `项目里用到的图片`
            - pages `页面目录`
            - style `公共样式`
            - app.x `入口页面`
            - project.config.json `配置文件`

    - UI组件库用的是iView组件库，[访问地址](http://inmap.talkingdata.com/wx/index_prod.html#/docs/guide/start)

  ![](https://tva1.sinaimg.cn/large/008eGmZEly1gnxfxrjjoyj30by0byq38.jpg)

&nbsp;&nbsp;&nbsp;&nbsp;具体小程序怎么开发，网上有很多的资料和文档教程，大家可以学习一下，因为hexo中已经提供了接口，在小程序中只需要设置好接口前缀，进行数据调用即可。

## 实现效果

&nbsp;&nbsp;&nbsp;&nbsp;因为目前我做的还没开发完成，所以还没有上线暂时无法访问，这里给大家看一下目前的效果，目前显示的列表就是调用了hexo博客中的数据进行展示的。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gnxfoii2pxj30u01t0wj6.jpg)

## 总结
&nbsp;&nbsp;&nbsp;&nbsp;到这里其实也就基本完了，后续中在hexo博客中写了博客以后，vercel自动部署接口也会自动更新，小程序打开的时候也会获取到最新的数据。

&nbsp;&nbsp;&nbsp;&nbsp;整个过程其实也没有什么难度，利用的也都是第三方的插件，至于微信小程序的开发有什么坑我暂时还没有遇到，因为还没有深入去做，后续实践的过程中有遇到再写吧。

## 参考

[hexo-generator-restful](https://github.com/yscoder/hexo-generator-restful)

[小程序开发入门与实践](https://juejin.cn/book/6897486502482149376)
