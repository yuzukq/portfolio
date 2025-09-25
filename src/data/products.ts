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
    id: "task-manager",
    title: "Task Management App",
    thumbnail: "/img/icon-vr.png", 
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description: "チーム向けのタスク管理アプリケーション。リアルタイム同期機能とカンバンボード形式でのタスク管理を実現。",
    features: [
      "リアルタイム同期",
      "カンバンボード",
      "チーム管理機能",
      "通知システム"
    ],
    challenges: [
      "WebSocketを使った リアルタイム通信の実装",
      "状態管理の複雑さへの対応",
      "スケーラブルなデータベース設計"
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
    techStack: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
    description: "天気情報ダッシュボード。複数の都市の天気予報を視覚的に表示し、グラフ機能で天気の推移を確認できます。",
    features: [
      "複数都市対応",
      "グラフ表示機能",
      "予報データの可視化",
      "位置情報連携"
    ],
    challenges: [
      "外部APIとの連携",
      "データの可視化処理",
      "エラーハンドリングの実装"
    ],
    screenshots: ["/img/icon-vr.png", "/img/icon-vr.png"],
    urls: {
      demo: "https://weather-dashboard.example.com",
      github: "https://github.com/yuzukq/weather-app"
    }
  }
];
