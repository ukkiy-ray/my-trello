# my-trello

# Overview

```
% vue --version
4.5.12
% node --version
v14.16.0
% npm --version
6.14.11
% yarn --version
1.22.5
```

### 開発の経緯
- Vue.jsとVuexについてより詳しく学習するために開発しました。

- ただの To Do アプリケーションではなく、Trello のようにリストやタスクをドラッグ&ドロップで移動できるよう Vue.Draggable を導入し自走しました。


## 挙動確認

[![Image from Gyazo](https://i.gyazo.com/a325d19fea4986a9bfbbaf320465cc6f.gif)](https://gyazo.com/a325d19fea4986a9bfbbaf320465cc6f)




# 以下個人用メモ

## 本アプリの環境構築手順

```
% vue create my-trello

Vue CLI v4.5.12
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Vuex, L
inter
? Choose a version of Vue.js that you want to start the project with 2.x
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated confi
g files
? Save this as a preset for future projects? No
? Pick the package manager to use when installing dependencies: Yarn
```

## Vue.Draggable のインストール

```
npm i -S vuedraggable
```

### core-js系の「Module not found」が出た際の対策

```
npm install --save-dev core-js@3
```