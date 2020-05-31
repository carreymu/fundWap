# fundWap-app

> A Vue.js and Sanic project

# Notice
```
# if you care about fontend only, please checkout static_data
git checkout static_data

```

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
pip install [requirements.txt](https://github.com/carreymu/fundWap/tree/master/src/backend/requirements.txt)

# start project
cd /src/backend
python main.py

```

## Pages
- [ ] 大目标 
- [x] 大目标 - 申购
- [x] 大目标 - 查看往期
- [x] 大目标 - 投资面对面
- [x] 大目标 - 了解大目标
- [x] 大目标 - 公司介绍
- [x] 大目标 - 支付
    
- [x] 鸡腿计划
- [x] 鸡腿计划 - 设置提醒
- [x] 鸡腿计划 - 鸡腿计划动态
- [x] 鸡腿计划 - 更多内容
    
- [ ] 优选
- [ ] 优选 - 测评
- [ ] 优选 - 活期理财(类)
- [ ] 优选 - 全明星计划(类)
    
- [ ] 我的
- [ ] 我的 - 个人设置
- [ ] 我的 - 消息列表
- [x] 我的 - 大目标服务卡
- [ ] 我的 - 新人指南
- [x] 我的 - 推荐给好友
- [ ] 我的 - 我的持仓
- [ ] 我的 - 我的大目标

- [ ] 监控

## Document Structure ##
```

|-- build                            // webpack
|-- config                           // 项目打包路径
|-- src                              // 源码目录
|   |-- assets                       // 资源文件
|   |-- components                   // 组件
|       |-- wap                      // 主要代码
|           |-- bestChoice           // 优选
|           |-- systemInfo           // 系统信息
|           |-- drumstick            // 鸡腿计划
|           |-- mine                 // 我的
|           |-- target               // 大目标
|   |-- router                       // 路由
|       |-- wapRouter.js
|   |-- utils                       // 工具类
|       |-- utdate.js
|       |-- utmap.js
|       |-- utrandom.js
|       |-- utstring.js
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

