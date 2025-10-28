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
しかし私が配属された研究室ではPowerPoint投影や配布Wordテンプレの厳守が必須．結果としてWindowsをメインに据えつつ，Linuxライクなタイリング環境を求めることに．そこで辿り着いたのが「GlazeWM」と「Yasb Reborn」です．

# 環境構築
ここからは導入編に入ります．
## ウィンドウマネージャー: GlazeWM
![GlazeWM](/images/blog/20251029/glazewm_git.png)
 [GlazeWM](https://github.com/glzr-io/glazewm)は[i3](https://wiki.archlinux.jp/index.php/I3)から着想を得て作られたオープンソースのWindows用タイリングウィンドウマネージャです．キーボード操作によるコマンドでウィンドウを簡単に整理し，そのレイアウトをリアルタイムで調整することが出来ます．
他にもWindowsで利用可能なタイリングウィンドウマネージャとしてはHyprlandライクな[komorebi](https://github.com/LGUG2Z/komorebi)などがありますが，設定のわかりやすさとLinux経験者からの声でより安定性が高く評価されたGlazeWMを使用しています．

#### 導入
GlazeWMのインストールはwingetでの取得と，githubからダウンロードしたインストーラーを使用する二種類の方法で導入可能です．
wingetを利用する場合はpowershellを起動し，

```bash
winget install glazewm
```
を実行．インストーラーを利用する場合は[リリースページ](https://github.com/glzr-io/glazewm/releases)にアクセスし，最新のリリースからインストーラをダウンロード
![インストーラのダウンロード](/images/blog/20251029/installer_download.png)
ダウンロードが完了したらインストーラを実行します．実行すると下記のようなウィンドウが起動し，一緒にZebarと呼ばれるタブバーをインストールするかどうか問われます．今回は前述のとおり，Yasbというタブバーを使用するため，「Install Zebar (recommended)」のチェックを**外します**.
チェックを外して「install」をクリックして正常に実行されれば導入は完了です！
![インストール](/images/blog/20251029/installer_download.png)

#### コンフィグファイルの変更
コンフィグファイルの変更必須箇所と，主要パラメータを抜粋してご紹介します．また，これから行う変更を加えた私が使用しているコンフィグファイルは[こちら](https://github.com/yuzukq/dotfiles/blob/main/laptop-windows/.glzr/glazewm/config.yaml)から閲覧可能です．よろしければご活用ください．
