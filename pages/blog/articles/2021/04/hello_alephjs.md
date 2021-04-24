---
title: DenoのAleph.jsをつかってみる
url: /articles/2021/04/hello_alephjs
date: 2021-04-21
id: hello_aleph
---


かわいい恐竜のマスコットでおなじみの[Deno](https://deno.land/)。
このDenoで動作するReactベースのフレームワークである[Alph.js](https://alephjs.org/)を使って、放置していた自分のサイトをリニューアルしてみました。
Githubのリポジトリは[こちら](https://github.com/shoma-www/shoma-www-site)。

<img width=200 src="/images/blog/hello_alephjs/deno.png" />

<!-- more -->

## Aleph.jsについて

`The React Framework in Deno.`

SSRやSSGにも対応し、標準でホットリロードが搭載されおり、スムーズな反映でストレスなく開発を行えます。
DenoのTypeScriptを使った開発体験。
また、node_modulesで管理する必要がなく、依存関係はすべてESMのURLでimportできます。esm.shとか使いがち。
ちなみにAleph.js作ってるijeさんは、[esm.sh](https://github.com/postui/esm.sh)も作ってる。

だいたいNext.jsのDeno版のような内容になってます。
まだα版のため、ドキュメントに記載されている機能があったりなかったり、
密かに実装されてたり、まだまだ開発段階で不安定なことも多いです。

## Aleph.jsを動かす

Aleph.jsを導入してみます！

まずDenoを導入。
bashだと下記でインストール。

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh

# .bash_profileに設定かいとく
echo 'export DENO_INSTALL="/home/shoma/.deno"' >> $HOME/.bash_profile
echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> $HOME/.bash_profile
```

※公式にかいてあるまんまなので、環境別は[こちら](https://github.com/denoland/deno_install)参照
[dvm](https://github.com/justjavac/dvm)っていうnvmライクなDenoのバージョン管理ツールがあるので、自分はこっち使ってます。


いよいよAleph.jsをインストールする。
ドキュメントだと`0.2.28`とやらのバージョンを入れてねってとのこと。

```bash
$ deno upgrade --version 1.6.3
$ deno install -A -f -n aleph https://deno.land/x/aleph@v0.2.28/cli.ts

# これでalephのコマンドがうてる
$ aleph --version
Check https://deno.land/x/aleph@v0.2.28/cli.ts
aleph.js 0.2.28
deno 1.6.3
v8 8.8.294
typescript 4.1.3

# プロジェクト作成！コマンドひとつで便利！
$ aleph init shoma-www-site
```

さて、プロジェクトが作成できたので、ためしに動かしてみる。
開発モードで動作させるのは、 `aleph dev`でできる。
はやい！やすい！うまい！

さて。。。

![image.png](/images/blog/hello_alephjs/6067c29bb13ef200475c4903.png)

動かない。これが全く動かない。
Denoのバージョンをさげてもだめ。
ファイル消したりしてもだめ。
というかそもそもimport_map.jsonとかもおかしかったり。

でも、男の子は悲しみを乗り越えていかないといけないのよ。

絶賛開発中のalpha版を利用することを決意

```bash
$ deno install --unstable -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.24/cli.ts
# 今は0.3.0-alpha.29使ってる。そのうち31にあげるよ
$ aleph init shoma-www-site
$ cd shoma-www-site && aleph dev
```

![image.png](/images/blog/hello_alephjs/6067d111b13ef200475c4906.png)

そして時は動き出すっ！
とういうことで動かすときはalpha版を使ったほうがいいかも。
ただ、開発状況によっては、突如動かなくなったりするので注意が必要。


## サイト作成

構成としては、SSGで生成したファイルをfirebas hostingにdeployしてます。
deployはcloudbuild使ってmain branchにpushするたびによしなにリリースしてくれるようにしてるので、pushしたらお茶飲んで待つだけ。
（関係ないけど、未だにmainブランチなれない。）

サイトのスタイルは、基本tailwind CSSつかっていて、一部cssを自分で書いてます。
以前作ったサイトは、スマホでみるとぶっ壊れてたので、スマホでもみれるようにだけ気にしてます。
ただ、こだわり続けると無限大なんで、一旦完成を目標に。

サイトのコンポーネントの作りとかは粛々とJSX書いてるだけなので、割愛。


## ブログについて

この記事はマークダウンファイルから生成してます。
Aleph.jsにはplugin機構があって、ビルド時にこのプラグインをかまして、ファイルによって処理を変えるとかできるので、それを使ってます。

pluginの利用自体は、Aleph.jsの設定ファイル`aleph.config.js`で設定できます。
こんな感じ。

```ts
import markdown from "./plugins/markdown.ts";
import type { Config } from "https://deno.land/x/aleph@v0.3.0-alpha.29/types.ts";

export default (): Config => ({
  plugins: [
    markdown(),
  ],
  ssr: false,
});
```

markdownプラグインは公式であるんだけど、設定とかできなくて使いづらいので、[丸コピしてほしい設定を追記していく感じにしてます。](https://github.com/shoma-www/shoma-www-site/blob/947a1b472d3b62a2cceb87cba9d4ba28502377bc/plugins/markdown.ts)
他にもmetaデータで仕込むディスクリプションを作るようにしてたり。
コードのハイライト適用したりしたいけど、そこは気が向いたら。

サーバーの起動時にもServerPluginっていう型でプラグインかませるみたいだけど、今回はSSGにしたのでまた今度。

ちなみに、ブログの記事一覧や、[トップページの記事一覧](https://shoma-www.dev/#blog)は、プラグイン使ってないです。
Aleph.jsのビルド前に記事のディレクトリ内にあるマークダウンファイルを確認してインデクスを作る[スクリプト](https://github.com/shoma-www/shoma-www-site/blob/7eeb0a15fa15db13b8e2d3fa03bf10535476e9d9/scripts/createArticleData.ts)をつくってファイル生成してます。
このスクリプトが動くと `articleData.ts`っていう、記事名とか、ディスクリプションとかの配列が書かれたファイルが出力されます。

```ts
const Articles = [{
  "html":
    '<p>かわいい恐竜のマスコットでおなじみの<a href="https://deno.land/">Deno</a>。<br/>このDenoで動作するReactベースのフレームワークである<a href="https://alephjs.org/">Alph.js</a>を使って、放置していた自分のサイトをリニューアルしてみました。</p>\n<img width=200 src="/images/blog/hello_alephjs/deno.png" />\n\n',
  "metaData": {
    "title": "初めてのAleph.js",
    "url": "/articles/2021/04/hello_alephjs",
    "date": "2021-04-19T00:00:00.000Z",
    "id": "hello_aleph",
  },
}];
export default Articles;
```

こいつを読み込んで記事一覧を出すようにしてます。

最初はプラグインで一覧ページを作るようにしようかと思ったけど、
ファイルに出したほうが使い回しやすいので愚直にこちらを採用。
（というか最初はプラグインを実装してました。）

## まとめ

まだまだ発展途上なので、使えない機能や不具合があったりしますが、大雑把に使える感じではあります。
Denoだからなのか、ホットリロードのスピードが早い感じがします。
Deno触る勉強にもなるので、Aleph.jsのコンパイラやesm.shのコンパイル処理のコードも追ってみたいですね。

サイト作成も記事にインデクスつけたり、URL貼ったときの展開とか、コードハイライトとか、レイアウトの修正とかいろいろやってないことあるので、おいおいやっていきたいと思ってます。

開発のリハビリがてら始めたけど、Aleph.js楽しいので、なんか別の何かを作りたい気持ち。
