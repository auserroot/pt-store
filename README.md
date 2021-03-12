# 电商购物移动端拼团直播 APP

## 一、创建项目

### 1. 在 gitee 上新建一个仓库

### 2. 在本地新建一个 create-react-app 项目，然后与远程仓库关联。

#### 创建项目

```bash
create-react-app  pt-store
```

#### 与远程仓库建立连接

```bash
git remote add origin https://gitee.com/auserroot/pt-store.git
git push -u origin master
```

### 3. 安装项目依赖包

#### 安装 dart-sass

```bash
// 因为node-sass 版本大更新 5.0.0
// 不兼容4.x版本 ，这里安装对应要使用的4.14.1版本
// npm install node-sass@4.14.1 --save
// yarn add node-sass@4.14.1
// 使用dart-sass
$ npm install node-sass@npm:dart-sass --save
$ yarn add node-sass@npm:dart-sass
```

#### 安装路由 react-router-dom

```bash
npm  install react-router-dom --save
yarn add react-router-dom
```

#### 安装 redux、react-redux、redux-thunk

```bash
// 用来做数据管理
$ npm install redux react-redux --save
$ yarn add redux react-redux
// 异步action
$ npm install redux-thunk --save
$ yarn add redux-thunk
```

#### 安装 axios 发送请求

```bash
npm install axios --save
yarn add axios
```

#### 安装 antd-mobile

```bash
 npm install antd-mobile --save
 yarn antd-mobile
```

## 二、项目分配

项目分配：

- auser : 商城、直播模块
- clz ：我的模块
- zjc ：首页模块
- yar ：购物车模块
- fxx ：登录模块

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---
