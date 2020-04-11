# fundWap-app

> A Vue.js project

## frontend Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for prod with minification
npm run build

# build for prod and view the bundle analyzer report
npm run build --report
```

## backend Build Setup
```bash
# path
./src/backend

# install dependencies
pip install requirements.txt(https://github.com/carreymu/fundWap/tree/master/src/backend/requirements.txt)

# start project
cd /src/backend
python main.py

```

## Pages
- [ ] 大目标 -- Doing
- [ ] 大目标 - Banner -- todo(python)
- [ ] 大目标 - 申购 -- todo
- [ ] 大目标 - 查看往期 -- todo
- [ ] 大目标 - 投资面对面 - List -- todo
- [ ] 大目标 - 投资面对面 - News -- todo(python)
- [ ] 大目标 - 公司介绍 -- todo(python)

- [ ] 鸡腿计划 -- Doing
- [ ] 鸡腿计划 - 设置提醒 -- todo
- [ ] 鸡腿计划 - List -- todo
- [ ] 鸡腿计划 - 投资面对面 - 更多内容 -- todo(python)

- [ ] 优选 -- Doing
- [ ] 优选 - 测评s -- todo
- [ ] 优选 - 活期理财 -- todo(python)

- [ ] 我的 -- todo(python)
- [ ] 我的 - Tabs -- todo

- [ ] 国际化 - todo

- [ ] 监控 - todo

## Document Structure ##
```

|-- build                            // webpack
|-- config                           // 项目打包路径
|-- src                              // 源码目录
|   |-- assets                       // 资源文件
|   |-- components                   // 组件
|       |-- wap                      // 主要代码
|           |-- bestChoice           // 优选
|           |-- bestChoice           // 优选
|           |-- drumstick            // 鸡腿计划
|           |-- mine                 // 我的
|           |-- target               // 大目标
|   |-- router                       // 路由
|       |-- wapRouter.js
|   |-- store                       // Vue 路由
|       |-- actions.js
|       |-- data.js
|       |-- mutations.js
|       |-- store.js
|   |-- App.vue                      // App入口文件
|   |-- main.js                      // 程序入口文件，加载Vuex,Vue-router等插件
|   |-- static                       // 临时静态文件
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .postcssrc.js                    // post css 配置文件
|-- README.md                        // README
|-- index.html                       // 入口html文件
|-- __package_____.json              // 备份配置文件
|-- package.json                     // 项目及工具的依赖配置文件

```

## Preview

![](https://github.com/carreymu/fundWap/raw/master/static/p1.png)
![](https://github.com/carreymu/fundWap/raw/master/static/p3.1.png)
![](https://github.com/carreymu/fundWap/raw/master/static/p2.png)
![](https://github.com/carreymu/fundWap/raw/master/static/p3.png)
![](https://github.com/carreymu/fundWap/raw/master/static/p4.png)

