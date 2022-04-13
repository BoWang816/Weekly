---
title: 前端脚手架辣么多，那我也要写一个玩玩
top_img: 'https://unsplash.it/800/200?random'
comments: true
cover: 'https://api.dongmanxingkong.com/suijitupian/acg/1080p/index.php'
copyright_author: bo.wang
description: 手摸手开发一个前端脚手架工具
sitemap: true
tags:
  - Web
  - 脚手架
categories:
  - Web
  - 脚手架
abbrlink: 29655
date: 2022-04-13 17:30:24
---

### 前言
2022年已经过了四分之一还多了，之前说好的每个月一篇文章好像也没有让自己兑现。最近公司在做一些前端工程化相关的东西，虽然准备做组件库的事情被领导给毙了，不过在这之前写了一个脚手架的工具，毕竟现在这个环境下，脚手架工具泛滥，所以当然也要写一写玩玩。

- [前言](#前言)
- [最终效果](#最终效果)
- [支持功能](#支持功能)
- [开发](#开发)
- [初始化项目](#初始化项目)
    - [设置项目入口](#设置项目入口)
    - [其他花里胡哨的东东](#其他花里胡哨的东东)
- [项目模板](#项目模板)
- [发布](#发布)
- [总结](#总结)
- [参考](#参考)
- [结语](#结语)

### 最终效果
![cliInit](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ead34ddd4d114af1881c1dcf00094939~tplv-k3u1fbpfcp-zoom-1.image)

### 支持功能
- 自主选择web端或移动端；
- 自主选择项目框架react或vue；
- 自主选择是否设置远程git地址；
- 支持在项目模板中自定义变量替换；
- 自主选择是否自动安装依赖，可选择npm、cnpm、yarn；
- 支持使用update命令在线更新；
- 自主选择已存在文件目录是否覆盖；

### 开发

### 初始化项目
那么接下来就开始开发了，首先我们来新建一个项目文件夹就叫`new-cli`吧，在项目文件夹中新建`package.json`文件，设置常用的字段，设置完成后如下：
```json
{
  "name": "new-cli",
  "version": "1.0.0",
  "description": "a react project cli, help you create a react project quickly",
  "bin": {
    "new-cli": "bin/www.js"
  },
  "dependencies": {
    "boxen": "^5.1.2",
    "chalk": "^4.1.2",
    "commander": "^9.1.0",
    "consolidate": "^0.16.0",
    "cross-spawn": "^7.0.3",
    "download-git-repo": "^3.0.2",
    "ejs": "^3.1.6",
    "fs-extra": "^10.0.1",
    "inquirer": "^8.2.1",
    "metalsmith": "^2.4.2",
    "ora": "^5.4.1",
    "figlet": "^1.5.2",
    "semver": "^7.3.5",
    "shelljs": "^0.8.5"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/BoWang816/new-cli.git"
  },
  "keywords": [
    "cli",
    "react"
  ],
  "author": "恪晨",
  "publishConfig": {
    "registry": "私有仓库地址"
  },
  "engines": {
    "node":"^12.20.0 || >=14"
   }
}
```
通过以上设置以后，我们的脚手架名字就叫new-cli，也就是说到时候安装的时候就是通过`npm install -g new-cli`进行安装。bin下面设置的名称就是为了设置脚手架执行的命令，并且是从bin/www.js 文件作为了入口文件；`dependencies`中为我们需要的项目依赖，值得注意的是像**boxen、chalk、figlet这一类的依赖包在最新版本中已经不支持requier方式引入了**所以这里我们需要安装低版本的包；`publishConfig`中可以设置到时候需要发布的npm地址，如果你搭建了npm私服则通过设置registry就可以发布到你的私服了。

#### 设置项目入口

建好`package.json`以后我们就开始建入口文件，也就是bin下面的 www.js， 事实上你的入口文件放置在根目录也是可以的，可以根据自己的喜好，当然如果放置在了根目录，则bin下面就要改为`new-cli: './www.js'`。www.js 中主要是引入commander、inquirer等工具包，进行脚手架工具的初始化。因为 www.js 将要作为一个node脚本来运行，因此需要在最上方声明环境：`#! /usr/bin/env node`，我写的这个脚手架中涉及到了init、update、help这三个命令，并且help是commander本身就支持的，这里只是做了一点定制化。

- 初始化init命令、update命令、help命令

  首先需要引入commander，使用它的program，`const {program} = require("commander");`，脚手架工具的主体就是它了，我们初始化相关的命令：

  ```js
    #! /usr/bin/env node
    // 引入commander
    const {program} = require("commander");
    
    // 初始化init命令， project-name就是你的项目名称与项目文件夹名称
    program.command("init <project-name>")
            // init命令描述
           .description("create a new project name is <project-name>")
           // init命令参数项，因为后续会设置支持覆盖文件夹，所以这里提供一个-f参数
           .option("-f, --force", "overwrite target directory if it exists")
           // init命名执行后做的事情
           .action(() => { 
                console.log('doSomething');
            });
           
    program.command("update")
            .description("update the cli to latest version")
            // update命令执行后做的事情，自动检测更新
            .action(async () => {
                // await checkUpdate();
                console.log('update');
            });
    
    program.on("--help", () => {
        // 监听--help命令，输出一个提示
        console.log(figlet.textSync("new-cli", {
            font: "Standard",
            horizontalLayout: 'full',
            verticalLayout: 'fitted',
            width: 120,
            whitespaceBreak: true
        }));
    });   
    
    // 这个一定不能忘，且必须在最后！！！
    program.parse(process.argv);      
  ```

通过设置以上内容，其实我们就可以使用基本的命令了。本地调试的方式有两种，一种是通过`npm link`命令将我们写的脚手架工具直接链接到本地的全局npm中，一种则是直接通过`node bin/www.js`直接执行这个js文件，这里我们使用后者就可以了。
![initCommand](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0b252bb6857431aa0e38e819bc7a816~tplv-k3u1fbpfcp-zoom-1.image)


- 扩展init命令

  接下来我们就需要扩展init命名，也就是在action做一些事情了。首先，我们提供了-f的参数选项，目的是为了在初始化项目的时候检测到有同名文件夹则进行覆盖，因此在初始化项目的第一步我们就需要检测当前路径下是否存在同名的文件夹，并且在没有设置-f的时候给出提示信息，同时在设置了-f后给出二次提示，同意覆盖则开始初始化项目。因此action函数中将要执行的以下内容，这里我们就需要引入chalk，paht，fs-extray以及后续我们自己写的create。

```js
const chalk = require("chalk");
const path = require("path");
const fs = require('fs-extra');
const figlet = require('figlet');
const create = require('../utils/create');
    
program
    .command("init <project-name>")
    .description("create a new project name is <project-name>")
    .option("-f, --force", "overwrite target directory if it exists")
    .action(async (projectName, options) => {
        const cwd = process.cwd();
        // 拼接到目标文件夹
        const targetDirectory = path.join(cwd, projectName);
        // 如果目标文件夹已存在
        if (fs.existsSync(targetDirectory)) {
            if (!options.force) {
            // 如果没有设置-f则提示，并退出
                console.error(chalk.red(`Project already exist! Please change your project name or use ${chalk.greenBright(`new-cli create ${projectName} -f`)} to create`))
                return;
            }
            // 如果设置了-f则二次询问是否覆盖原文件夹
            const {isOverWrite} = await inquirer.prompt([{
                name: "isOverWrite",
                type: "confirm",
                message: "Target directory already exists, Would you like to overwrite it?",
                choices: [
                    {name: "Yes", value: true},
                    {name: "No", value: false}
                ]
            }]);
            // 如需覆盖则开始执行删除原文件夹的操作
            if (isOverWrite) {
                const spinner = ora(chalk.blackBright('The project is Deleting, wait a moment...'));
                spinner.start();
                await fs.removeSync(targetDirectory);
                spinner.succeed();
                console.info(chalk.green("✨ Deleted Successfully, start init project..."));
                console.log();
                // 删除成功后，开始初始化项目
                // await create(projectName);
                console.log('init project overwrite');
                return;
            }
            console.error(chalk.green("You cancel to create project"));
            return;
        }
        // 如果当前路径中不存在同名文件夹，则直接初始化项目
        // await create(projectName);
        console.log('init project');
    });
```
我们再来查看现在的效果：
![initProject](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c11b161fc5e74268b1436a7122364847~tplv-k3u1fbpfcp-zoom-1.image)

- 创建create方法

  在上一步操作中，我们覆盖同名文件后，使用了`await create(projectName)`方法开始初始化项目，接下来我们开始开发create方法。在根目录新建一个文件夹叫`utils`，当然你可以随意叫lib或者`✨点赞`都行，在utils下面新建一个文件叫`create.js`，在这个文件中，我们将设置下载初始化项目中一些问题询问的执行。内容主要有以下：

  ```js
    const inquirer = require("inquirer");
    const chalk = require("chalk");
    const path = require("path");
    const fs = require("fs");
    const boxen = require("boxen");
    const renderTemplate = require("./renderTemplate");
    const downloadTemplate = require('./download');
    const install = require('./install');
    const setRegistry = require('./setRegistry');
    const {baseUrl, promptList} = require('./constants');  
     
    const go = (downloadPath, projectRoot) => {
        return downloadTemplate(downloadPath, projectRoot).then(target => {
        //下载模版
            return {
                downloadTemp: target
            }
        })
    }
    module.exports = async function create(projectName) {
        // 校验项目名称合法性，项目名称仅支持字符串、数字，因为后续这个名称会用到项目中的package.json以及其他很多地方，所以不能存在特殊字符
        const pattern = /^[a-zA-Z0-9]*$/;
        if (!pattern.test(projectName.trim())) {
            console.log(`\n${chalk.redBright('You need to provide a projectName, and projectName type must be string or number!\n')}`);
            return;
        }
        // 询问
        inquirer.prompt(promptList).then(async answers => {
            // 目标文件夹
            const destDir = path.join(process.cwd(), projectName);
            // 下载地址
            const downloadPath = `direct:${baseUrl}/${answers.type}-${answers.frame}-template.git#master`
            // 创建文件夹
            fs.mkdir(destDir, {recursive: true}, (err) => {
                if (err) throw err;
            });
    
            console.log(`\nYou select project template url is ${downloadPath} \n`);
            // 开始下载
            const data = await go(downloadPath, destDir);
            // 开始渲染
            await renderTemplate(data.downloadTemp, projectName);
            // 是否需要自动安装依赖，默认否
            const {isInstall, installTool} = await inquirer.prompt([
                {
                    name: "isInstall",
                    type: "confirm",
                    default: "No",
                    message: "Would you like to help you install dependencies?",
                    choices: [
                        {name: "Yes", value: true},
                        {name: "No", value: false}
                    ]
                },
                // 选择了安装依赖，则使用哪一个包管理工具
                {
                    name: "installTool",
                    type: "list",
                    default: "npm",
                    message: 'Which package manager you want to use for the project?',
                    choices: ["npm", "cnpm", "yarn"],
                    when: function (answers) {
                        return answers.isInstall;
                    }
                }
            ]);
            
            // 开始安装依赖
            if (isInstall) {
                await install({projectName, installTool});
            }
    
            // 是否设置了仓库地址
            if (answers.setRegistry) {
                setRegistry(projectName, answers.gitRemote);
            }

            // 项目下载成功
            downloadSuccessfully(projectName);
        });
    }
  ```
    - 在`create.js`文件中，我们首先判断了初始化的项目名称是否包含特殊字符，如果包含则给出错误提示，并终止项目初始化。如果项目名称合法，则开始询问用户需要的项目模板：
      ![askTpl](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71cc0d0e27364927b8b7f79c2a4a7066~tplv-k3u1fbpfcp-zoom-1.image)
      我们将这些询问的list抽离为常量，同时也将模板的地址抽离为常量，因此需要在utils文件夹下建立一个`constants.js`的文件，里面的内容如下：
  ```js
    /**
     * constants.js
     * @author kechen
     * @since 2022/3/25
     */

    const { version } = require('../package.json');

    const baseUrl = 'https://github.com/BoWangBlog';
    const promptList = [
        {
            name: 'type',
            message: 'Which build tool to use for the project?',
            type: 'list',
            default: 'webpack',
            choices: ['webpack', 'vite'],
        },
        {
            name: 'frame',
            message: 'Which framework to use for the project?',
            type: 'list',
            default: 'react',
            choices: ['react', 'vue'],
        },
        {
            name: 'setRegistry',
            message: "Would you like to help you set registry remote?",
            type: 'confirm',
            default: false,
            choices: [
                {name: "Yes", value: true},
                {name: "No", value: false}
            ]
        },
        {
            name: 'gitRemote',
            message: 'Input git registry for the project: ',
            type: 'input',
            when: (answers) => {
                return answers.setRegistry;
            },
            validate: function (input) {
                const done = this.async();
                setTimeout(function () {
                    // 校验是否为空，是否是字符串
                    if (!input.trim()) {
                        done('You should provide a git remote url');
                        return;
                    }
                    const pattern = /^(http(s)?:\/\/([^\/]+?\/){2}|git@[^:]+:[^\/]+?\/).*?.git$/;
                    if (!pattern.test(input.trim())) {
                        done(
                            'The git remote url is validate',
                        );
                        return;
                    }
                    done(null, true);
                }, 500);
            },
        }
    ];

    module.exports = {
        version,
        baseUrl,
        promptList
    }
  ```
其中*version*为我们的脚手架版本号，*baseUrl*为项目模板下载的基础地址，*promptList*为询问用户的问题列表，promptList的具体写法是根据`inquirer.prompt()`方法来写的，具体的怎么写后面我都会将官方文档地址附上，大家可以自己发挥。

- 通过`inquirer.prompt()`获取到用户反馈的结果以后，我们会拿到相关的字段值，然后去拼接出下载的项目模板地址，接下来就是开始下载项目模板了。这里我们写了*go*函数和*renderTemplate*俩个函数，一个用于下载项目模板一个用于渲染项目模板(因为涉及到变量的替换)。go函数中其实是使用了从外部引入的*downloadTemplate*方法，因此我们需要去关注*downloadTemplate*与*renderTemplate*方法，也就是接下来要讲的重点了。

- 创建download方法

  在`utils`文件夹下，新建一个名称为`download.js`的文件，文件内容如下：
    ```js
    /**
     * 下载
     * download.js
     * @author kechen
     * @since 2022/3/25
     */
    
    const download = require('download-git-repo')
    const path = require("path")
    const ora = require('ora')
    const chalk = require("chalk");
    const fs = require("fs-extra");
    
    module.exports = function (downloadPath, target) {
        target = path.join(target);
        return new Promise(function (resolve, reject) {
            const spinner = ora(chalk.greenBright('Downloading template, wait a moment...\r\n'));
            spinner.start();
    
            download(downloadPath, target, {clone: true}, async function (err) {
                if (err) {
                    spinner.fail();
                    reject(err);
                    console.error(chalk.red(`${err}download template failed, please check your network connection and try again`));
                    await fs.removeSync(target);
                    process.exit(1);
                } else {
                    spinner.succeed(chalk.greenBright('✨ Download template successfully, start to config it: \n'));
                    resolve(target);
                }
            })
        })
    }
    ```
该文件中，我们使用了`download-git-repo`这个第三方的工具库，用于下载项目模板，因为download-git-repo的返回结果是下载成功或者失败，我们在使用异步的方式的时候如果直接使用会存在问题，因此这里封装为promise，当err的时候给用户抛出异常提示，成功则将目标文件夹路径返回用于后续使用。在`create.js`中我们使用了go函数，在go函数执行成功后会返回一个data，里面拿到了项目要下载到具体的文件夹的路径，其实主要是为了获取在download中的promise的resolve结果，拿到目标文件夹的路径后，其实项目模板已经下载到了该文件夹中，就可以开始renderTemplate了。

- 创建renderTemplate方法

在`utils`文件夹下，新建一个文件叫`renderTemplate.js`，该函数的主要目的是为了将初始化的项目中设置的变量进行替换，主要使用了`metalSmith`和`consolidate`这两个第三方的包，通过遍历初始化项目中的文件，将其转换为ejs模板，并替换相关的变量。这个方法是参考了[vww-cli](https://github.com/we452366/vee-cli)的方式，通过读取项目模板中的`ask.ts`文件，获取项目模板中自定义的询问列表，然后再进行文件模板引擎渲染替换相关设置好的变量，主要内容如下：

 ```js
    /**
     * 渲染模板
     * renderTemplate.js
     * @author kechen
     * @since 2022/3/24
     */
    const MetalSmith = require('metalsmith'); 
    const {render} = require('consolidate').ejs;
    const {promisify} = require('util');
    const path = require("path");
    const inquirer = require('inquirer');
    const renderPro = promisify(render);
    const fs = require('fs-extra');
    
    module.exports = async function renderTemplate(result, projectName) {
        if (!result) {
            return Promise.reject(new Error(`无效的目录：${result}`))
        }
    
        await new Promise((resolve, reject) => {
            MetalSmith(__dirname)
                .clean(false)
                .source(result)
                .destination(path.resolve(projectName))
                .use(async (files, metal, done) => {
                    const a = require(path.join(result, 'ask.ts'));
                    // 读取ask.ts文件中设置好的询问列表
                    let r = await inquirer.prompt(a);
                    Object.keys(r).forEach(key => {
                        // 将输入内容前后空格清除，不然安装依赖时package.json读取会报错
                        r[key] = r[key]?.trim() || '';
                    })
                    const m = metal.metadata();
                    const tmp = {
                        ...r,
                        // 将使用到的name全部转换为小写字母
                        name: projectName.trim().toLocaleLowerCase()
                    }
                    Object.assign(m, tmp);
                    // 完成后删除模板中的文件
                    if (files['ask.ts']) {
                        delete files['ask.ts'];
                        await fs.removeSync(result);
                    }
                    done()
                })
                .use((files, metal, done) => {
                    const meta = metal.metadata();
                    // 需要替换的文件的后缀名集合
                    const fileTypeList = ['.ts', '.json', '.conf', '.xml', 'Dockerfile', '.json'];
                    Object.keys(files).forEach(async (file) => {
                        let c = files[file].contents.toString();
                        // 找到项目模板中设置好的变量进行替换
                        for (const type of fileTypeList) {
                            if (file.includes(type) && c.includes('<%')) {
                                c = await renderPro(c, meta);
                                files[file].contents = Buffer.from(c);
                            }
                        }
                    });
                    done()
                })
                .build((err) => {
                    err ? reject(err) : resolve({resolve, projectName});
                })
        });
    };    
 ```

通过*renderTemplate*方法，我们基本就完成我们脚手架的主要功能了。我们就可以实现使用init命令创建项目了。这里我遇到一个问题，就是在删除ask.ts文件的时候，如果后面不加`await fs.removeSync(result);`这个文件就无法删除，但是加上按理说又不合理，具体原因没有找到，有知道的朋友可以留言解释一下，十分感谢。至此，我们初始化项目的功能已经完成，接下来就是一些扩展了。

- 创建setRegistry方法

  在`utils`文件夹下，新建一个文件叫`setRegistry.js`，主要是为了帮助用户初始化项目的git地址，在用户创建是选择是否需要自动设置项目仓库地址，如果设置了项目地址，则这里会自动初始化git，并设置项目地址，具体内容如下：
  ```js
    /**
     * 设置仓库地址
     * setRegistry.js
     * @author kechen
     * @since 2022/3/28
     */
    
    const shell = require("shelljs");
    const chalk = require("chalk");
    
    module.exports = function setRegistry(projectName, gitRemote) {
        shell.cd(projectName);
        if (shell.exec('git init').code === 0) {
            if (shell.exec(`git remote add origin ${gitRemote}`).code === 0) {
                console.log(chalk.green(`✨ \n Set registry Successfully, now your local gitRemote is ${gitRemote} \n`));
                return;
            }
            console.log(chalk.red('Failed to set.'));
            shell.exit(1);
        }
    };  
  ```

- 创建install方法

  在`utils`文件夹下，新建一个文件叫`install.js`，主要是为了帮助用户自动安装依赖，主要内容如下：
  ```js
   /**
     * 安装依赖
     * install.js
     * @author kechen
     * @since 2022/3/22
     */
    const spawn = require("cross-spawn");
    
    module.exports = function install(options) {
        const cwd = options.projectName || process.cwd();
        return new Promise((resolve, reject) => {
            const command = options.installTool;
            const args = ["install", "--save", "--save-exact", "--loglevel", "error"];
            const child = spawn(command, args, {cwd, stdio: ["pipe", process.stdout, process.stderr]});
    
            child.once("close", code => {
                if (code !== 0) {
                    reject({
                        command: `${command} ${args.join(" ")}`
                    });
                    return;
                }
                resolve();
            });
            child.once("error", reject);
        });
    };
  ```

- 创建checkUpdate方法

  在`utils`文件夹下，新建一个文件叫`checkUpdate.js`，主要是为了帮助用户自动检测并进行脚手架更新，主要内容如下：
  ```js
    /**
     * 检查更新
     * checkUpdate.js
     * @author kechen
     * @since 2022/3/23
     */
    const pkg = require('../package.json');
    const shell = require('shelljs');
    const semver = require('semver');
    const chalk = require('chalk');
    const inquirer = require("inquirer");
    const ora = require("ora");
    
    const updateNewVersion = (remoteVersionStr) => {
        const spinner = ora(chalk.blackBright('The cli is updating, wait a moment...'));
        spinner.start();
        const shellScript = shell.exec("npm -g install new-cli");
        if (!shellScript.code) {
            spinner.succeed(chalk.green(`Update Successfully, now your local version is latestVersion: ${remoteVersionStr}`));
            return;
        }
        spinner.stop();
        console.log(chalk.red('\n\r Failed to install the cli latest version, Please check your network or vpn'));
    };
    
    module.exports = async function checkUpdate() {
        const localVersion = pkg.version;
        const pkgName = pkg.name;
        const remoteVersionStr = shell.exec(
            `npm info ${pkgName}@latest version`,
            {
                silent: true,
            }
        ).stdout;
    
        if (!remoteVersionStr) {
            console.log(chalk.red('Failed to get the cli version, Please check your network'));
            process.exit(1);
        }
        const remoteVersion = semver.clean(remoteVersionStr, null);
    
        if (remoteVersion !== localVersion) {
            // 检测本地安装版本是否是最新版本，如果不是则询问是否自动更新
            console.log(`Latest version is ${chalk.greenBright(remoteVersion)}, Local version is ${chalk.blackBright(localVersion)} \n\r`)
    
            const {isUpdate} = await inquirer.prompt([
                {
                    name: "isUpdate",
                    type: "confirm",
                    message: "Would you like to update it?",
                    choices: [
                        {name: "Yes", value: true},
                        {name: "No", value: false}
                    ]
                }
            ]);
            if (isUpdate) {
                updateNewVersion(remoteVersionStr);
            } else {
                console.log();
                console.log(`Ok, you can run ${chalk.greenBright('wb-cli update')} command to update latest version in the feature`);
            }
            return;
        }
        console.info(chalk.green("Great! Your local version is latest!"));
    };
  ```
  这里需要注意的是，因为脚手架是全局安装的，涉及到权限的问题，因此在mac下需要使用`sudo new-cli update`进行更新，而在windows中需要以管理员身份打开命令行工具执行`new-cli update`进行更新。到这里，我们的脚手架基本就完成啦。

#### 其他花里胡哨的东东
主要功能基本就是上面这些啦，另外我们需要加一个项目创建成功之后的提示，在上文的`create.js`中最后面有一个*downloadSuccessfully*的方法，其实就是创建成功后的提示，主要内容如下：
```js
const downloadSuccessfully = (projectName) => {
    const END_MSG = `${chalk.blue("🎉 created project " + chalk.greenBright(projectName) + " Successfully")}\n\n 🙏 Thanks for using wb-cli !`;
    const BOXEN_CONFIG = {
        padding: 1,
        margin: {top: 1, bottom: 1},
        borderColor: 'cyan',
        align: 'center',
        borderStyle: 'double',
        title: '🚀 Congratulations',
        titleAlignment: 'center'
    }

    const showEndMessage = () => process.stdout.write(boxen(END_MSG, BOXEN_CONFIG))
    showEndMessage();

    console.log('👉 Get started with the following commands:');
    console.log(`\n\r\r cd ${chalk.cyan(projectName)}`);
    console.log("\r\r npm install");
    console.log("\r\r npm run start \r\n");
}
```
具体的实现效果就是这样的，这里我是截了之前做好的图。
![createSuccess](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9195687aca8c482193fd025e21514491~tplv-k3u1fbpfcp-zoom-1.image)

### 项目模板
我们需要创建一个项目模板，里面需要在根目录下包含一个`ask.ts`文件，其他的就和正常项目一样就好了，aks.ts的文件内容示例如下，
```js
/**
 * demo
 * aks.ts
 * @author kechen
 * @since 2022/3/24
 */

module.exports = [
  {
    name: 'description',
    message: 'Please enter project description:',
  },
  {
    name: 'author',
    message: 'Please enter project author:',
  },
  {
    name: 'apiPrefix',
    message: 'Please enter project apiPrefix:',
    default: 'api/1.0',
    // @ts-ignore
    validate: function (input) {
      const done = this.async();
      setTimeout(function () {
        // 校验是否为空，是否是字符串
        if (!input.trim()) {
          done(
            'You can provide a apiPrefix, or not it will be default【api/1.0】',
          );
          return;
        }
        const pattern = /[a-zA-Z0-9]$/;
        if (!pattern.test(input.trim())) {
          done(
            'The apiPrefix is must end with letter or number, like default 【api/1.0】',
          );
          return;
        }
        done(null, true);
      }, 300);
    },
  },
  {
    name: 'proxy',
    message: 'Please enter project proxy:',
    default: 'https://www.test.com',
    // @ts-ignore
    validate: function (input) {
      const done = this.async();
      setTimeout(function () {
        // 校验是否为空，是否是字符串
        if (!input.trim()) {
          done(
            'You can provide a proxy, or not it will be default【https://www.test.com】',
          );
          return;
        }
        const pattern =
          /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/;
        if (!pattern.test(input.trim())) {
          done(
            'The proxy is must end with letter or number, like default 【https://www.test.com】',
          );
          return;
        }
        done(null, true);
      }, 300);
    },
  },
];
```
这里我设置了四个变量分别是description、author、apiPrefix、proxy，在使用时只需要通过`<%= var %>`这种方式就可以了，var可以是你在ask.ts中设置的任何变量，具体使用demo如下，**当然要替换的文件类型必须是在上面我们提到的*renderTemplate*函数中设置了后缀名的文件才可以。**使用这种方式，你就可以在项目模板中自由添加变量，且不需要更新脚手架工具。
```json
{
  "name": "xasrd-fe-mobile",
  "description": "<%= description %>",
  "private": true,
  "author": "<%= author %>"
}

```

至此，我们的脚手架就全部开发完成啦，接下来就是怎么发布到npm或者npm私服了。

### 发布
在上面我们讲过，如果需要发布的npm私服，则需要在`package.json`中配置publishConfig并指向npm私服的地址，发布的时候则需要通过以下命令进行发布：
- 私服npm发布
    - 登陆私服
      `npm login --registry=http://xxxxx` xxxxx为你的私服地址
    - 发布
      `npm publish`

- 官方npm发布
    - 直接`npm login`，再`npm publish`
    - 前提是你的npm源指向的官方npm

- 通过github action自动触发npm发布
    - 具体请参考：[详细记录开发一个npm包，封装前端常用的工具函数](https://juejin.cn/post/7081581923960619015#heading-7)

**当然需要注意的是，发布的时候，package.json中的version版本号不能重复哈！！！**

### 总结
到这里，我们就完整的开发了一个比较简单前端脚手架工具，并可以发布使用了。其实具体的做法并不是很难，有很多第三方的工具包可以用，当然因为这个工具的交互相对来说比较简单，各位也可以自己奇思妙想，做一些更加花里胡哨的功能进行扩展。示例的demo就不放啦，基本所有的内容都在上面提到了，大家可以自由发挥。当然基于这套我自己也写了一个地址是[https://www.npmjs.com/package/wb-fe-cli](https://www.npmjs.com/package/wb-fe-cli)，不过因为最近实在没时间，所以项目模板还没有，暂时还不能完整的跑起来，后续会慢慢更新的。

### 参考
- [inquirer](https://www.npmjs.com/package/inquirer)
- [boxen](https://www.npmjs.com/package/boxen)
- [vee-cli](https://github.com/we452366/vee-cli)
- [详细记录开发一个npm包，封装前端常用的工具函数](https://juejin.cn/post/7081581923960619015)

### 结语
最后希望看完本篇文章后，对你有所帮助，勤快的话可以自己动手手写一写啦。另外希望大家能够关注一下我的[Github](https://github.com/BoWang816)，哈哈哈哈，带你们看贪吃蛇！

也可以关注一下[GridManager](https://github.com/baukh789/GridManager)这个好用的表格插件，支持React、Vue，非常好用哦！

下期，我将会给大家带来一些我常用的Mac软件的介绍，能够帮助你在日常开发与工作中大大提升工作效率！！！可以先预览一下 [恪晨的Mac软件推荐](https://mac.wangboweb.site)。

### 感谢大家的阅读！！
