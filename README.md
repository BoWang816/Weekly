# Weekly
博客，基于Hexo框架，使用了ButterFly主题，部署在Vercel服务。https://blog.wangboweb.site/


[![GitHub issues](https://img.shields.io/github/issues/BoWang816/Weekly)](https://github.com/BoWang816/Weekly/issues)

[![GitHub forks](https://img.shields.io/github/forks/BoWang816/Weekly)](https://github.com/BoWang816/Weekly/network)

[![GitHub stars](https://img.shields.io/github/stars/BoWang816/Weekly)](https://github.com/BoWang816/Weekly/stargazers)

[![GitHub license](https://img.shields.io/github/license/BoWang816/Weekly)](https://github.com/BoWang816/Weekly/blob/master/LICENSE)

相关命令：

// 新建文章
hexo new post "xxx"

// 新建草稿
hexo new draft "xxx"

// 新建页面
hexo new page "xxx"

// 在指定文件目录下新建文章
hexo new post --path Web/React "Taro小程序"
表示在_posts下面新建了一个Web文件夹(如果这个文件夹不存在)，在Web文件夹下建立了名称为React的markdown文件，title为Taro小程序

// 清除缓存
hexo c 或 hexo clean

// 生成静态文件
hexo g 或 hexo generate

// 发表草稿
hexo publish draft 'xxx'

// 查看某类型下面的文章
hexo list <type> type支持 page, post, route, tag, category

