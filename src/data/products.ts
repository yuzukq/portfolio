// プロダクトのデータを記述するファイル．フロント側は触らずともここに追加すればカードが増えます

export interface Product {
  id: string;
  title: string;
  thumbnail: string;
  techStack: string[];
  description: string;
  features: string[];
  challenges: string[];
  screenshots: string[];
  urls: {
    demo?: string;
    github?: string;
    website?: string;
  };
}

export const products: Product[] = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    thumbnail: "/img/thumb_portfolio.png",
    techStack: ["Next.js", "TypeScript", "Chakra UI", "Vercel"],
    description: "Sky株式会社の長期インターンではNext.jsを用いたフロントエンド開発を行いました．モダンなフレームワークを利用する中で，コンポーネント分割の粒度，保守・拡張性を考慮した設計思想，OSSデザインシステムの効率的な活用方法について学びました．これらの知見を活かした振り返りもかね，これまでの大学生活の活動を可視化することを目的に，当プロダクトの開発を行いました．",
    features: [
      "レスポンシブデザイン", 
      "アニメーション効果"
    ],
    challenges: [
      "モダンフレームワークを利用した開発",
      "パフォーマンス最適化",
      "コンポーネント分割のベストプラクティスの模索",
      "OSSデザインシステム(Chakra UI v3)の活用",
    ],
    screenshots: ["/img/thumb_portfolio.png", "/img/thumb_portfolio.png"],
    urls: {
      github: "https://github.com/yuzukq/portfolio",
      website: "https://yuzuportfolio.vercel.app/"
    }
  },
  {
    id: "better-portal-extension",
    title: "Better Portal Extension",
    thumbnail: "/img/thumb_betterPortalExtension.png", 
    techStack: ["HTML", "CSS", "JavaScript", "Chrome Extension API"],
    description: "大学で運用されているポータルサイトのUI/UXを改善するために開発したChrome拡張機能です．所属大学で運用されているポータルサイトは，ウィンドウ操作のUXに関する不満や，大学側から提供されているコンテンツに対する導線の悪さが教員，学生から声が揚げられていました．これらの課題を解決するためにChrome拡張機能という形でクライアントサイドで動的にUIの変更を実現しました．google web storeにて公開中のページからインストールするのみでこの機能を利用することが出来ます．",
    features: [
      "アイコンサイズ変更時のリアルタイムフィードバック",
      "ストアからインストールするだけで利用可能",
      "大学から提供されている複数コンテンツへのショートカットを提供",
    ],
    challenges: [
      "Chrome Extension APIの習得",
      "非エンジニア層が利用できるようにGUIデザインを工夫",
      "ページ実装時に今後の拡張性を重視してステートマシンによるページ管理を実現",
    ],
    screenshots: ["/img/prev_betterPortalExtension_1.png","/img/prev_betterPortalExtension_2.png"],
    urls: {
      github: "https://github.com/yuzukq/Better-Portal-Extension",
      demo: "https://chromewebstore.google.com/detail/eioioildkjhlbeoaikbhhajncblbmnmh?utm_source=item-share-cb"
    }
  },
  {
    id: "AttendanceReminder",
    title: "AttendanceReminder-forCIT",
    thumbnail: "/img/thumb_attendanceReminder.png",
    techStack: ["Google App Script", "Discord webhook"],
    description: "大学で運用されている出席管理システムへの登録を支援するツールです．私が所属している大学では，令和7年度から教室に掲示されたQRコードを個人所有のスマートフォンで読み取ることで，Webを経由して出席登録を行う仕組みが導入されました．この出席支援ツールは，ユーザーがGoogleスプレッドシート状の時間割表テンプレートにあらかじめ時間割を登録しておくことで，講義開講時間の30分前に自動で通知と各講義に応じた主出席登録用のリンクを任意のDiscordチャンネルに送信するツールとなっています．このツールにより，所属している大学のコミュニティ内全体で，各ユーザーの履修状況に応じた出席登録の失念防止に貢献しただけでなく，カメラを起動することなく，個人所有の端末やPCからの出席も可能になりました．また，このツールではドキュメントの整備も徹底し，非エンジニア領域の学生がこのツールを取り入れやすくするような工夫を施しました．",
    features: [
      "Discordからの容易な出席登録",
      "googleスプレッドシートと連携した自動通知",
      "google app scriptによるサーバレス通知の実現"
    ],
    challenges: [
      "ユーザーのツール導入の敷居を下げるためにテンプレートとドキュメントの整備を行いました．",
      "通知対象として，コミュニティで広く利用されているDiscordを選定したことで利便性が向上したと感じています"
    ],
    screenshots: ["/img/prev_attendanceReminder_1.png", "/img/thumb_attendanceReminder.png","/img/prev_attendanceReminder_2.png"],
    urls: {
      demo: "https://github.com/yuzukq/AttendanceReminder-forCIT",
      github: "https://github.com/yuzukq/AttendanceReminder-forCIT"
    }
  },
  {
    id: "HeadFlickIME",
    title: "非接触型文字入力デバイス",
    thumbnail: "/img/thumb_HeadFlickIME.jpg",
    techStack: ["Arduino","Processing" ,"六軸加速度センサ", "フォトリフレクタ"],
    description: "瞼の開閉動作と頭部の動作を組み合わせて文字入力を実現するデバイスです．Arduinoを用いた電子工作において，フォトリフレクタと加速度センサを固定したハードウェアを3Dプリンタで設計したことで，外部カメラやソフトウェア画像処理を利用することなく簡易的なアイトラッキングとフェイシャルトラッキングを実現しました．また，入力補助を兼ねるインタフェースとしてはProcessingによるフリック入力盤をリアルタイムに描画することで，良好なユーザービリティのUI/UXを実現しました．また，この文字入力デバイスは，福祉的な領域での活用だけでなく，参考画像にて掲載したような3Dモデルをリアルタイムに操作する娯楽的な領域での活用も期待できます．",
    features: [
      "外部カメラ不要のウェアラブル端末",
      "頭部の動作のみでフリック入力を実現"
    ],
    challenges: [
      "既存のアイトラッキングデバイスが抱える高コストという課題を安価なマイコンとセンサの組み合わせで解消しました．",
      "六軸加速度センサの特性でるドリフトを抑制するための地磁気とのセンサヒュージョンの必要性など課題が明らかになりました．"
    ],
    screenshots: ["/img/prev_HeadFlickIME_1.png", "/img/prev_HeadFlickIME_2.png","/img/prev_HeadFlickIME_3.png"],
    urls: {
      demo: "https://youtu.be/X3LBFIodq7U",
      github: "https://github.com/yuzukq/HeadFlickIME"
    }
  },
  {
    id: "Recolle",
    title: "Recolle",
    thumbnail: "/img/icon-vr.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "Test",
    features: [
      "Test",
      "Test",
      "Test"
    ],
    challenges: [
      "Test",
      "Test",
      "Test"
    ],
    screenshots: ["/img/icon-vr.png", "/img/icon-vr.png"],
    urls: {
      demo: "https://test.example.com",
      github: "https://github.com/yuzukq/test"
    }
  },
  {
    id: "hoge",
    title: "hoge",
    thumbnail: "/img/icon-vr.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "hoge",
    features: [
      "hoge",
      "hoge",
      "hoge"
    ],
    challenges: [
      "hoge",
      "hoge",
      "hoge"
    ],
    screenshots: ["/img/icon-vr.png", "/img/icon-vr.png"],
    urls: {
      demo: "https://test.example.com",
      github: "https://github.com/yuzukq/test"
    }
  }
  
];
