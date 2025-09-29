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
    screenshots: ["/img/icon-vr.png"],
    urls: {
      github: "https://github.com/yuzukq/Better-Portal-Extension",
      demo: "https://chromewebstore.google.com/detail/eioioildkjhlbeoaikbhhajncblbmnmh?utm_source=item-share-cb"
    }
  },
  {
    id: "AttendanceReminder",
    title: "AttendanceReminder-forCIT",
    thumbnail: "/img/icon-vr.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "da",
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
      demo: "https://github.com/yuzukq/AttendanceReminder-forCIT",
      github: "https://github.com/yuzukq/AttendanceReminder-forCIT"
    }
  },
  {
    id: "test",
    title: "Test",
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
  }
];
