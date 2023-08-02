# koa2的通用项目

创建一个可以直接使用的koa2的通用项目，使用一些比较方便的库进行操作。

## 一、目录结构

```
📁 src
├── 📁 app
│   ├── 📁 extension // 存放新方法的文件夹
│   │   ├── 📄 logger.extension.js // 日志处理方式
│   │   └── 📄 ... 
│   ├── 📄 index.js // 处理koa2的依赖
│   └── 📄 ...
├── 📁 config
│   ├── 📄 dotenv.config.js // 基本config
│   └── 📄 ...
├── 📁 controller
│   ├── 📄 user.controller.js
│   ├── 📄 post.controller.js
│   └── 📄 ...
├── 📁 db
│   ├── 📄 mysql.db.js
│   └── 📄 ...
├── 📁 model
│   ├── 📄 user.model.js
│   ├── 📄 post.model.js
│   └── 📄 ...
├── 📁 router
│   ├── 📁 v1
│   │   ├── 📄 user.route.js
│   │   └── 📄 ... 
│   ├── 📄 index.js
│   └── 📄 ...
├── 📁 middleware
│   ├── 📄 auth.middleware.js
│   ├── 📄 app.middleware.js
│   └── 📄 ...
├── 📁 service
│   ├── 📄 user.service.js
│   ├── 📄 post.service.js
│   └── 📄 ...
├── 📁 utils
└── 📄 main.js
```

