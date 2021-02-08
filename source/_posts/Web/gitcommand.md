---
title: 常见git命令使用
top_img: 'https://uploadbeta.com/api/pictures/random'
comments: true
cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=5497635,54094103&fm=26&gp=0.jpg'
copyright_author: bo.wang
sitemap: true
aplayer: true
abbrlink: 35041
date: 2020-02-18 14:04:06
tags: 
   - Git
   - Web
categories:
   - [Web, Git]
---

- 基本配置
    
    1、配置git ssh秘钥
    ```bash
    ssh-keygen -t rsa -C "youremail@example.com"
    ```
    <!-- more -->

    2、设置个人信息
    ```bash
    git config --global user.name "your name"
    git config --global user.email "your email"
    ```
    3、查看本地Git配置选项
    ```bash
    git config --list
    ```
    4、查看说明文档
    ```bash
    git help
    ```
- Git仓库

    1、创建git仓库
    ```bash
    git init
    ```
    2、克隆仓库
    ```bash
    git clone "url"
    如: git clone git@github.com:BoWang816/wangboBlog.git
    ```
    3、添加远程仓库
    ```bash
    git remote add origin "url"
    git push -u origin --all
    git push origin --tags
    ```
    
- Git文件管理

    1、添加提交文件
    ```bash
    git add "文件名"
    注: 添加单个文件,需要包括后缀名
    
    git add .
    注:添加所有修改文件

    git add *.js
    注:添加所有后缀名为js的文件
    ```
    2、提交文件
    ```bash
    git commit -m "提交说明内容"
    
    git commit -am "提交说明内容"
    注:该命令是将add和commit一起执行
    
    git commit --amend
    注:可覆盖最后commit的文件,比如最后一次提交的文件内容需要改动,但是又不想多加一次commit,
    则文件改动后,使用git add之后,使用该命令,会进入vim编辑器,可修改部分提交信息,之后保存退出即可,
    这种方式可以在不添加commit log的情况下更新文件
    
    git commit --amend -m 'xxxxxxx'
    注:一次执行,xxxxx将会覆盖上一次的提交信息,但是如果已经push,需要使用--force进行强制push
    
    git rebase -i HEAD^^
    注:修改倒数第二次提交文件,如果提交两次后发现,倒数第二次提交的问题需要改动,则直接输入该命令,
    同样会进入vim编辑器,会看见倒数第二次commit提交的文件,如果你需要修改某个文件的内容,将该文件
    前面的pick改为edit,然后保存退出,然后对需要修改的文件进行修改,修改之后,
    执行
    git add
    再执行
    git commit --amend
    接着执行
    git rebase --coutinue
    这样,倒数第二次提交的文件被修改的commit就会添加到倒数第一次的commit中
    ```
    3、合并更新
    ```bash
    git pull origin next
    注:拉取远程仓区next分支的代码
    
    git pull origin next:master
    注:拉取next分支的代码与本地master合并
    
    git fetch origin next
    注:拉取远next分支更新
    git merge origin/next
    注:合并分支
    ```
    4、查看分支
    ```bash
    git branch
    注:查看本地分支以及当前所在分支
    
    git branch -r
    注:查看远程分支
    ```
    5、查看状态
    ```bash
    git status
    注:查看详细状态
    
    git status -s
    注:简易形式查看状态
    
    git status --ignored
    注:查看忽略文件
    
    git diff
    注:查看不同
    
    git show
    注:查看上一次提交信息
    
    git diff dev..master
    注:查看dev分支和master的不同
    
    git log
    注:查看提交记录
    
    git log --online
    注:简洁形式记录
    
    git log --decorate
    注:显示提交的所有commit信息
    
    git log -p -2
    注:显示最近两次提交内容的差异
    
    q
    注:查看log后需要退出查看,输入q即可
    ```
- 6、文件还原与暂存
    ```bash
    git checkout 文件名
    注:放弃当前修改
    
    git stash
    注:暂存当前修改,可用于切换分支时操作
    
    git pull
    注:一般与git stash一起操作,git stash将改动暂存之后,git pull拉去新代码,git stash pop可以继续修改自己的代码
    
    git stash pop
    注:删除暂存,继续操作
    版本回退
    git reset HEAD 文件名
    注:add之后回退到之前版本
    
    git reset "commit id"
    注:回退到某个commit版本并且保留当前的更改
    
    git reset --hard "commit id"
    注:回退到某个commit版本但不保留当前的更改
    
    git reset --hard HEAD^
    注:回退到上一个版本
    
    git reset --hard HEAD~5
    注:回退到第五个之前的版本
    
    git reflog
    注:放弃回退,回到之前状态
    ```
- 分支管理

    1、创建分支
    ```bash
    git checkout -b develop
    注:创建develop分支并切换到develop分支
    
    git branch develop
    git chekout develop
    注:与上面的功能一样
    ```
    2、合并分支
    ```bash
    git merge develop
    注:将develop分支合到当前分支
    
    git rebase develop
    注:不生成新节点合并
    ```
    3、删除分支
    ```bash    
    git branch -d develop
    注:删除本地develop分支
    
    git branch -D develop
    注:强制删除本地develop分支
    
    git push origin :develop
    注:删除远程仓库develop分支
    
    git push origin --delete develop
    注:与上面的作用一样
    ```
    4、解决冲突
    ```bash
    git merge的时候有时候会冲突,只能手动删除不需要部分,然后add commit push
    ```
    5、打tag
    ```bash
    git tag -a v1.0 -m "标签记录内容"
    注:设置标签名为v1.0的tag
    
    git push origin v1.0
    注:推送到远程仓库
    
    git push origin --tags
    注:推送所有tags
    ```
- 定位问题
    1、定位负责人
    ```bash
    git blame 文件名
    注:查看文件每行的修改人
    ```
