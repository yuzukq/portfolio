// 自己紹介のデータを記述するファイル．フロント側は触らずともここを編集すればAboutセクションが更新されます

export interface AboutMe {
  icon: string;
  description: string;
}

export const aboutMe: AboutMe = {
  icon: "/img/icon-vr.png",
  description: `好きなキーボードは7sPro．技術を学ぶ学生です．
CSを専攻していて最近はVR酔い（VIMS）について調べています．
電子工作や身の回りのちょっとした不便を解消する開発が趣味です．
最近はインターンなどでややWeb方面より... 広く浅く興味を持ったものはいろいろやってます．
（Unity, Blender, Arduino, Rails, Next, Unix）

すべてのVRコンテンツとそれに付随する技術が好きです
たまにうどんをこねてます`,
};

