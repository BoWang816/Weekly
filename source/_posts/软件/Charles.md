---
title: Charles抓包工具的基本使用
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2271678093,1999335211&fm=15&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 13430
date: 2019-09-27 10:05:39
tags: 
   - Charles 
   - 软件
categories: 软件
keywords: charles
description: Charles抓包工具的基本使用
---

### Charles抓包工具的基本使用（Mac版本）

- 准备工作

    - 官方地址：https://www.charlesproxy.com

    - 安装包下载地址：https://www.charlesproxy.com/download
        
    安装之后注册：注册码地址,请支持正版

- 配置
    
    - Mac配置：
    
        - 1、添加证书：打开Charles菜单栏，help -> SSL Proxying -> Install Charles Root Certificate
        ![](https://user-images.githubusercontent.com/26587649/47204659-6c57c480-d3b6-11e8-939e-17c35440ccff.png)
        - 2、默认添加的证书是不被信任的，需要对证书添加信任，对证书文件右键 -> 显示简介 -> 信任 -> 使用此证书时 下拉选择为“始终信任”
            - 不受信任情况
        ![](https://user-images.githubusercontent.com/26587649/47206199-a034e900-d3ba-11e8-9cac-a3e59fe8ef59.png)
            - 设置始终信任
        ![](https://user-images.githubusercontent.com/26587649/47206240-bc388a80-d3ba-11e8-98cf-94bc7af6a7a0.png)
            - 设置完毕
        ![](https://user-images.githubusercontent.com/26587649/47206260-c9ee1000-d3ba-11e8-8ae0-221311b8b066.png)
        - 3、设置好证书后，返回Charles，选择help -> SSL Proxying -> Install Charles Root Certificate in iOS Simulators，会弹出需要在手机上配置的信息，下面的手机配置中进行配置。
        ![](https://user-images.githubusercontent.com/26587649/47206301-e25e2a80-d3ba-11e8-8ae3-1f03b697909e.png)
        ![](https://user-images.githubusercontent.com/26587649/47206306-e8540b80-d3ba-11e8-9c57-8769e6fc85db.png)
        - 4、 设置https方式可抓包。Charles菜单中选择 Proxy -> SSL Proxying Settings，将Enable SSL Proxying勾选，然后点击Add， 在弹出的对话框中Host输入：*，Port输入443，这个配置表示监控所有https链接。点击ok进行保存。
        ![](https://user-images.githubusercontent.com/26587649/47206367-0b7ebb00-d3bb-11e8-9129-359cad22e125.png)
        - 5、添加SSL证书，如果不添加SSl证书，对于https的链接可能会出现下面这种情况。打开钥匙串访问，将ssl证书拖进去，同第2步中一样，对ssl证书添加信任。
        ![](https://user-images.githubusercontent.com/26587649/47206422-2cdfa700-d3bb-11e8-9366-18e00f7f7037.png)
        ![](https://user-images.githubusercontent.com/26587649/47206392-1c2f3100-d3bb-11e8-83ef-d79f18cca42e.png)
        - 6、给手机传递ssl证书，可以使用airPort，也可以用其他方式，总之将ssl证书传到手机上就可以。

    - iphone手机配置：
        
        - 1、连接与Mac使用相同的Wi-Fi，在上面的第3步中弹出的信息输入到手机Wi-Fi代理中，点开连接的Wi-Fi，点击后面的感叹号，拉到最下面，点击配置代理，改为手动，服务器地址：你的电脑IP地址，端口默认是8888，可在Charles中设置。
        ![](https://user-images.githubusercontent.com/26587649/47206462-47198500-d3bb-11e8-8bf4-05255e97865c.PNG)
        ![](https://user-images.githubusercontent.com/26587649/47206708-e50d4f80-d3bb-11e8-8f0b-a6d8709c5f18.PNG)
        - 2、下载证书，在手机浏览器中打开网址：chls.pro/ssl 过几秒钟会自动下载证书并请求跳转到设置中，点击继续；

        - 3、安装证书。点击通用，拉到最下面，点击描述文件，里面会有需要安装的证书，SSL证书如果已经传到手机上，默认点击之后这里也会出现，将两个证书进行安装。

        - 4、安装好证书之后，点击关于本机，拉到最下面，点击证书信任设置，将里面的Charles开头的两个证书都进行信任。
        ![](https://user-images.githubusercontent.com/26587649/47206766-0e2de000-d3bc-11e8-86ab-d17d57d38804.PNG)

- 使用
&emsp;&emsp;打开Charles，点击Recording按钮，变为红色时即表示已经开始监控，手机上进行县官操作，Charles即可显示访问的的相关链接，通过右侧的相关选项即可查看请求的数据与返回的数据。
![](https://user-images.githubusercontent.com/26587649/47206813-2b62ae80-d3bc-11e8-8f3a-23f56ced688b.png)
出现如下则表示成功
![](https://user-images.githubusercontent.com/26587649/47206835-39183400-d3bc-11e8-8829-6cdbe4792814.png)
