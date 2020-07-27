# fundWap-app

> A Vue.js and Sanic project

# Notice
```
# if you care about fontend only, please checkout branch static_data
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
- [-] 优选 - 测评
- [x] 优选 - 活期理财(类)
- [x] 优选 - 全明星计划(类)
    
- [ ] 我的
- [x] 我的 - 个人设置
- [x] 我的 - 消息列表
- [x] 我的 - 大目标服务卡
- [x] 我的 - 新人指南
- [x] 我的 - 推荐给好友
- [x] 我的 - 我的持仓
- [x] 我的 - 我的大目标

## Document Structure ##
```

|-- build                            // Webpack configurations
|-- config                           // Dev and prod environment
|-- src                              // Source code
|   |-- assets                       // Static files css/img/js for web. [BaseFun.js does not use any more.]
|   |-- components                   // Wap pages and framework page
|       |-- wap                      // Wap
|           |-- bestChoice           // Menu bestChoice
|           |-- systemInfo           // Menu systemInfo
|           |-- drumstick            // Menu drumstick
|           |-- mine                 // Menu mine
|           |-- target               // Menu target
|   |-- router                       // Router
|   |-- service                      // Fetch data services and axios config
|   |-- utils                        // Utils
|   |-- store                        // Global parameters
|   |-- App.vue                      // App
|   |-- main.js                      // Main，load Vuex,Vue-router,utils,components and so on.
|   |-- static                       // Static files for business
|-- .babelrc                         // ES6 compilation configurations
|-- .editorconfig                    // Code style
|-- README.md                        // README
|-- index.html                       // Main html
|-- __package_____.json              // Backup cofiguration files
|-- package.json                     // Dependencies and project configurations

```

## Preview

![](https://github.com/carreymu/fundWap/raw/master/static/p1.png)
![](https://github.com/carreymu/fundWap/raw/master/static/p3.1.png)
![](https://github.com/carreymu/fundWap/raw/master/static/p2.png)
![](https://github.com/carreymu/fundWap/raw/master/static/p3.png)
![](https://github.com/carreymu/fundWap/raw/master/static/p4.png)

