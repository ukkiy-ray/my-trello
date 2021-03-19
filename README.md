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

### URL
- [heroku](https://vue-trello-like-31064.herokuapp.com/) : https://vue-trello-like-31064.herokuapp.com/

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
% npm i -S vuedraggable
```

### core-js系の「Module not found」が出た際の対策

```
% npm install --save-dev core-js@3
```


## heroku へデプロイする際のセットアップ
1. heroku アプリケーションの作成
```
% heroku login
% heroku create vue-trello-app-31064
```


2. 環境依存を防ぐため NODE_ENV の production を設定

```
% heroku config:set NODE_ENV=production --app vue-trello-app-31064
```


3. Express のインストール

```
% npm install express --save
```


4. プロジェクトのルートディレクトリに server.js を作成し編集

```server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
```


5. ビルドし sever.js を実行

```
% npm run build
% node server.js  // http://localhost:5000 でローカル確認ができる。
```

6. package.json の編集

```package.json
{
  "name": "my-trello",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "start": "node server.js"   // <--この一文を追加
  },

  ...

}
```


7. .gitignoreファイルから dist/ を削除(heroku で dist ディレクトリを保持するため)

8. gitにステージングとコミットをし、herokuにpush

```
% git push heroku master
```

### heroku へのpush時に ERRORが発生した時の対処

- 自分の場合のエラー文は Two different lockfiles found: package-lock.json and yarn.lock と確認。
- 依存モジュールのバージョンを固定するという同じ役割を持つファイルが2つ存在してしまい混乱していた。

- ヒントに従い yarn.lock のファイルを削除

```
% git rm yarn.lock
```

- 再度herokuへpushしたら無事デプロイが完了しました。