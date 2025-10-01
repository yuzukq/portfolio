// ストーリーのデータを記述するファイル．フロント側は触らずともここに追加すればタイムラインが増えます

export interface Story {
  id: string;
  date: string;
  title: string;
  description: string;
}

export const stories: Story[] = [
  {
    id: "birth",
    date: "2004年10月",
    title: "オレ，誕生",
    description: "それで俺が生まれたってわけ",
  },
  {
    id: "kindergarten-graduation",
    date: "2023年3月",
    title: "幼稚園を卒園",
    description: "19年間の幼稚園生活に終わりを告げる",
  },
  {
    id: "mountain-entry",
    date: "2023年4月",
    title: "隣町の裏山に入山",
    description: "自分探しのために山に入る．",
  },
];
