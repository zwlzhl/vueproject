# 项目介绍
  使用VUE框架做的一个星巴克管理项目，主要是用来员工提交加班和休假并且领导审批
# 项目运行
  ```
  前端：npm start 
  后台：npm start
  ```
# 项目结构
 ```
 myApp
  ├── README.md            项目介绍
  ├── index.html           入口页面
  ├── build              构建脚本目录
  │  ├── build.js            生产环境构建脚本
  │  ├── utils.js            构建相关工具方法
  │  ├── webpack.base.conf.js      wabpack基础配置
  │  ├── webpack.dev.conf.js       wabpack开发环境配置
  │  └── webpack.prod.conf.js      wabpack生产环境配置
  ├── config             项目配置
  │  ├── dev.env.js           开发环境变量
  │  ├── index.js            项目配置文件
  │  └── prod.env.js           生产环境变量
  ├── package.json          npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
  ├── src               源码目录  
  │  ├── main.js             入口js文件
  │  ├── app.vue             根组件
  │  ├── components           公共组件目录
  │  │  ├── dialog          信息弹出框
  |  |  |   └── dialog.vue
  |  |  └── home           主页遮罩层
  |  |         └── dislog.vue
  │  ├── assets             资源目录，这里的资源会被wabpack构建
  │  │    └── logo.png
  │  ├── routes             前端路由
  │  │  └── index.js
  │  ├── api             配置前端路由
  │  │  └── index.js
  │  ├── plugin             插件
  │  │  └── index.js
  │  ├── uitls             放置工具
  |  |  ├── font_1221609_28lze41vpuq
  |  |  ├── font_dislog
  |  |  ├── font_login
  |  |  ├── font-tannav
  |  |  ├── scss
  |  |  ├── flexble.js
  │  │  └── request.js
  │  ├── store              应用级数据（state）
  |  |  ├── modules         封装的方法
  │  │  └── index.js
  │  ├── views              页面目录
  |  |  ├── approval          同意界面
  │  |  |  └── approval.vue
  │  |  ├── commit            提交界面
  │  |  |  └── commit.vue
  │  |  ├── component         封装方法
  │  |  |  └── index.vue
  │  |  ├── detial            详情界面
  │  |  |  └── detial.vue
  │  |  ├── history           历史界面
  │  |  |  └── history.vue
  │  |  ├── login             登录界面
  │  |  |  └── login.vue
  │  |  ├── order             排序界面
  │  |  |  └── order.vue
  │  |  ├── home              主界面
  │  |  |  ├── component      主页面组件
  │  |  |  |  ├── tabadie.vue
  │  |  |  |  ├── tabinner.vue
  │  |  |  |  └── tabanav.vue
  │  |  |  └── home.vue
  ├── static             纯静态资源，不会被wabpack构建。
  └── dist               打包文件
     ├── static            
     └── index.html     
  ```
