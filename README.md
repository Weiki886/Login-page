# React Login Page Demo

一个使用 React + Vite 构建的简洁登录页面演示项目。

## 功能特点

- 🎨 现代简约的用户界面设计
- 🔐 基础的登录验证功能
- 📱 响应式布局，支持各种设备
- ⚡ 基于 Vite 的快速开发体验
- 🛣 使用 React Router 进行路由管理

## 技术栈

- React 19
- React Router DOM 7
- Vite 6
- CSS3

## 快速开始

### 环境要求

- Node.js 16.0 或更高版本
- npm 7.0 或更高版本

### 安装

1. 克隆仓库
```bash
git clone [你的仓库地址]
cd login1
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 使用说明

预设的登录凭据：
- 用户名：admin
- 密码：123456

## 项目结构

```plaintext
login1/
├── src/
│   ├── components/
│   │   ├── Login.jsx    # 登录组件
│   │   ├── Login.css    # 登录样式
│   │   └── Home.jsx     # 主页组件
│   ├── App.jsx          # 应用主组件
│   └── main.jsx         # 入口文件
├── public/
│   └── images/          # 静态资源
└── package.json
```

## 开发

- 使用 `npm run dev` 启动开发服务器
- 使用 `npm run build` 构建生产版本
- 使用 `npm run preview` 预览生产构建
- 使用 `npm run lint` 运行代码检查

## 页面截图

![登录页面](./public/images/screenshots/login.png)
![主页面](./public/images/screenshots/home.png)


## 贡献

欢迎提交 Pull Request 或 Issue，共同改进项目。

## 许可证

本项目采用 MIT 许可证。
