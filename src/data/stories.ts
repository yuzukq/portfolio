// ストーリーのデータを記述するファイル．フロント側は触らずともここに追加すればタイムラインが増えます

export interface Story {
  id: string;
  date: string;
  title: string;
  description: string;
}

export const stories: Story[] = [
  {
    id: "enrollment",
    date: "2023年4月",
    title: "情報工学科(CS)に入学",
    description: "ソフトとハードの両面からコンピュータについて学べるということ．これまで利用してきたアプリケーションやコンピュータの基礎となる技術を構築する技術を学べるという点に魅力を感じ，現在の大学に入学しました．",
  },
  {
    id: "joined_the_cycling_club",
    date: "2023年4月",
    title: "サイクリング部に入部",
    description: "中学時代から好きだったロードバイクを大学でも続けるためにサイクリング部に入部．学業や開発の息抜きとして，月例ランや合宿など，仲間たちと自転車を楽しんでいます．",
  },
  {
    id: "start_vr",
    date: "2023年10月",
    title: "VRとの出会い",
    description: "Meta Quest3の発売に合わせてVRの世界に脚を踏み込む．数か月後には自宅にライトハウスを構築するまでに...Unity上での簡単な改変をきっかけに，後のワールド制作やBSモデリングを始めることになる．",
  },
  {
    id: "joined_the_softmedia_club",
    date: "2024年4月",
    title: "ソフトメディア研究会に入部",
    description: `ともにVRを始めた学科の友人の影響で．技術系サークルに入部．P(プログラム),D(DTM),M(マルチメディア)の三班にわかれ，主にゲーム制作を行っています．
    ProductセクションにあるようなVR上での実装や，4DCと呼ばれる4日間でゲームを開発する行事に参加しています．`,
  },
  {
    id: "unix",
    date: "2024年6月",
    title: "Unixとの出会い",
    description: `大学のサーバ管理の実験で様々なLinuxディストリビューション,BSDに触れることに．BSD御三家の歴史的開発背景を知り，OSSに興味を持つ．
    VM上でNginxやApacheなどのWebサーバを導入して，限られたリソースの中で最大のRPSを目指すという課題に対してFreeBSDを選定．コミュニティで議論されていたカーネルパラメータを参考に，人生初のカーネル再コンパイル．
    環境構築を再現させる仕様書作成のタスクでは，個人的にRed Hat系，Debian系，BSD系の様々なOSを導入しました．
    現在はこれらの経験からArchとWinの二台メインで運用．それぞれHyprlandやGlazeWMといったOSSを導入して飼っています．`,
  },
  {
    id: "entry_web",
    date: "2024年9月",
    title: "Rubyとの出会い",
    description: `学部二年の後期に「プログラミング言語」という授業がありました．`,
  },
  {
    id: "hack1",
    date: "2025年5月",
    title: "はじめてのハッカソン",
    description: ``,
  },
  {
    id: "sky",
    date: "2025年8月",
    title: "Sky株式会社でのフロントエンド長期インターン",
    description: ``,
  },
  {
    id: "gmo_pb",
    date: "2024年9月",
    title: "GMOペパボ-SUZURI事業部での長期開発インターン",
    description: ``,
  },
];
