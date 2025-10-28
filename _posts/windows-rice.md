---
slug: windows-rice
title: RiceはLinuxだけの嗜みじゃない!! winで利用可能なウィンドウマネージャとタブバーを紹介したい[yasb, GlazeWM]
date: 2025-10-28
description: waylandのような美しいタイリングマネージャをwindowsで利用できる，GlazeWMというOSS．yasbというタブバーの導入とセットアップを紹介します．
tags:
  - GlazeWM
  - Yasb
  - r/desktop
thumbnail: /images/blog/20251029/thumb.png
---
# はじめに
この記事では下記のようなデスクトップ環境をwindows11で構築するために利用したOSSやセットアップ，カスタマイズ方法についてご紹介します！
![Preview](/images/blog/20251029/desktop_prev.png)

### 経緯
Unixの各種DEやi3/HyprlandなどのWMを触る中で，見た目を作り込む「[Rice](https://www.reddit.com/r/linuxquestions/comments/mb9q1r/what_is_ricing_in_linux/?tl=ja&utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)」に惹かれました．軽量で美しいタイリングとキーボード中心の操作性に魅力を感じ，ラップトップをネイティブArchで常用することを検討していました．

#### 事件(研究室配属)
しかし研究室ではPowerPoint投影や配布Wordテンプレの厳守が必須．結果としてWindowsをメインに据えつつ，Linuxライクなタイリング環境を求めることに．そこで辿り着いたのが「GlazeWM」と「Yasb Reborn」です．

# 環境構築
ここからは導入編に入ります．
## ウィンドウマネージャー: GlazeWM
![GlazeWM](/images/blog/20251029/glazewm_git.png)