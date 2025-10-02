// ストーリーのデータを記述するファイル．フロント側は触らずともここに追加すればタイムラインが増えます

export interface Story {
  id: string;
  date: string;
  title: string;
  description: string;
}

export const stories: Story[] = [
  {
    id: "dmyan1",
    date: "2020年10月",
    title: "テストタイトル",
    description: "テスト説明",
  },
  {
    id: "dammy2",
    date: "長い長い長い長い日付",
    title: "長い長い長い長い長い長いタイトル",
    description: "長い長い長い長い長い長い長い説明",
  },
  {
    id: "dammy3",
    date: "長い長い長い長い長い長い長い長い長い長い長い日付",
    title: "長い長い長い長い長い長い長い長い長い長い長いタイトル",
    description: "長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い説明",
  },
  {
    id: "dammy4",
    date: "ダミー日付",
    title: "ダミータイトル",
    description: "ダミー説明",
  },
  {
    id: "dammy5",
    date: "ダミー日付",
    title: "ダミータイトル",
    description: "ダミー説明",
  }
];
