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
    thumbnail: "/img/icon-vr.png",
    techStack: ["Next.js", "TypeScript", "Chakra UI", "React"],
    description: "個人ポートフォリオサイトの開発。モダンなWebフレームワークを使用して、レスポンシブでアクセシブルなサイトを構築しました。",
    features: [
      "レスポンシブデザイン",
      "ダークモード対応", 
      "アニメーション効果",
      "モーダル表示機能"
    ],
    challenges: [
      "Chakra UI v3の最新機能の習得",
      "TypeScriptでの型安全な開発",
      "パフォーマンス最適化"
    ],
    screenshots: ["/img/icon-vr.png", "/img/icon-vr.png"],
    urls: {
      github: "https://github.com/yuzukq/portfolio",
      website: "https://yuzukq.github.io/portfolio"
    }
  },
  {
    id: "better-portal-extension",
    title: "Better Portal Extension",
    thumbnail: "/img/icon-vr.png", 
    techStack: ["HTML", "CSS", "JavaScript", "Chrome Extension API"],
    description: "大学で運用されているポータルサイトのUI/UXを改善するために開発したChrome拡張機能です．",
    features: [
      "リアルタイム同期",
      "ストアからインストールするだけで利用可能",
      "ポータルサイトのデザインをカスタマイズできる",
    ],
    challenges: [
      "Chrome Extension APIの習得",
      "非エンジニア層が利用できるようにGUIデザインを工夫",
    ],
    screenshots: ["/img/icon-vr.png"],
    urls: {
      github: "https://github.com/yuzukq/task-manager",
      demo: "https://task-manager-demo.example.com"
    }
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    thumbnail: "/img/icon-vr.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "天気情報ダッシュボード。複数の都市の天気予報を視覚的に表示し、グラフ機能で天気の推移を確認できます。",
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
