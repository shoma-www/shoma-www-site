#!/bin/bash
echo -n "ファイル名を入力："
read file_name

date=$(date '+%Y-%m-%d')
year=$(date -d "$date" '+%Y')
month=$(date -d "$date" '+%m')
path="pages/blog/articles/$year/$month/$file_name.md"
touch $path

echo -n "記事のタイトルを入力："
read title

echo "---" >> $path
echo "title: $title" >> $path
echo "url: /articles/$year/$month/$file_name" >> $path
echo "date: $date" >> $path
echo "id: $file_name" >> $path
echo "---" >> $path
echo "<!-- more -->" >> $path