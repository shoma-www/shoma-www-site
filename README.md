# shoma-www-site
新自分用サイト
開発のリハビリで作成。
かんたんに自己紹介ページと前作でつくらなかったブログページを作成した。

## 使ってる技術とか
- deno
  - typescript
  - aleph.js
    - tailwind.css
    - github-markdown.css
    - [Google Fonts](https://fonts.google.com/icons?selected=Material+Icons)
- GCO
  - firebase hosting
  - cloudbuild

aleph.jsのSSGで生成したページをhostingしている。
markdownからページを生成するプラグインだけ公式のをいじって、ディスクリプションをはくようにしている。
コードハイライトとかもつけていく予定。（marked.jsの設定でしかないので、特に工夫もない）

あとは、記事一覧を出力するのにかんたんなスクリプトを書いてデータのtsファイルを吐き出している。
記事一覧を利用したいとこで読み込んで利用している。
context使ってやろうとしたけど、うまくいかずいつまでもできないので、使いたいとこで読み込むようにしてる。

開発は、docker上で`aleph dev`して動かすか、nginxでhostingしてssgで生成したファイルをサーブして確認できるようにしている。
使い勝手はあんまりよくない。というか開発モードと本番モードでエラーがでたりでなかったりで辛い。
