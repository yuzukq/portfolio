## 必要なコンポーネント群構想
・header/footer: ヘッダーとフッター．ヘッダーにはaboutやskillなどへ飛べる(スクロールできる)．フッターはコピーライトとコンタクトを記載
・top: 最初に表示される部分．thank you visit的な言葉とともに自分のアイコン画像と私の名前を添える
・about: topの次に表示する画面で所属や出身，趣味などを軽く記述する．
・product: 私が過去作成してきた成果物，参加してきたプロジェクトについてカード形式で示す．カードには簡単なサムネイルと使用した技術を示す．クリックすると該当プロダクトの詳細を説明するウィンドウが開く
　┗1.カードを並べるフォーマットコンポーネント, 2.サムネイルと使用技術を載せるカードのフォーマット,  3.詳細表示ウィンドウのフォーマット
・skill: 大学や個人開発で使用してきた技術スタックの習熟度をレーダーチャートで示す
　┗三つくらいの分類にしてチャートを三つ表示．Chakra UIのRadar Chartコンポーネントが使えそう
・study: 学習に使ってきた書籍，教材をカード形式で示す．書籍のサムネイルと学んだ技術について示す．読んで学んだことについてある程度の長さで自分の言葉を書いておける幅を設けておこうと思う．
　┗1.カードを並べるフォーマット, 2.カード一つ分のフォーマット
・story: エンジニアリング関連の経験してきた出来事を時系列で示す．Chakra UIのTimelineコンポーネントが使えそう．storyを配置する場所はaboutの後でもいい気がするが，先に定義してきたほしい要素をすべてコンポーネントかしておけば並び替えも用意なので一旦この位置で配置する予定

# ディレクトリ構造
```
src/
├── app/
│   ├── layout.tsx         # 全ページ共通のレイアウト（Providerのラップ）
│   ├── page.tsx           # メインページ。MainLayoutを呼び出すだけ
|   └── UnderConstruction.tsx       # 開発中であることを示す画面．完成までの間pageでよぶ
│   
│
├── components/
│   ├── layouts/
│   │   ├── MainLayout.tsx # ヘッダー・フッター・全セクションを並べる
│   │   ├── Header.tsx
|   |   ├── Footer.tsx
│   │   └── SectionContainer.tsx # 各セクションの大枠と背景
│   │
│   ├── sections/          # 大きな画面単位のコンポーネント群
│   │   ├── TopSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── SkillSection.tsx
│   │   ├── ProductSection.tsx
│   │   └── StudySection.tsx
│   │
│   ├── ui/                # 小規模UIパーツ（再利用可能）
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── StudyCard.tsx
│   │   ├── StudyGrid.tsx
│   │   ├── RadarChart.tsx  # Chakra UIのRadar Chartを包むラッパー
│   │   └── SectionHeading.tsx # 各セクションの見出し用共通UI
│   │
│   └── modals/
│       └── ProductDetailModal.tsx # 成果物詳細説明モーダル
│
├── data/                   # 表示用のデータ定義
│   ├── products.ts         # 成果物一覧データ
│   ├── studies.ts          # 学習教材データ
│   └── skills.ts           # スキル・レーダーチャート用データ
│
├── hooks/                  # カスタムフック
│   └── useWindowSize.ts    # レスポンシブ用など
│
├── styles/                 # Chakraテーマや追加スタイル
│   └── theme.ts
│
└── lib/                    # 共通処理・ユーティリティ
    └── formatDate.ts
```