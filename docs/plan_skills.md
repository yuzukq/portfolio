# スキルセクション実装計画書
## 目的
レーダーチャートを用いて私が持っているスキルや技術スタックのレベルを可視化して視覚的に分かりやすく伝えることを目的とする．

## 要件
- (Chakra UIのレーダーチャート)[https://www.chakra-ui.com/docs/charts/radar-chart]を活用すること
サンプル
```typescript
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const Demo = () => {
  const chart = useChart({
    data: [
      { windows: 110, month: "January" },
      { windows: 130, month: "February" },
      { windows: 110, month: "March" },
      { windows: 90, month: "May" },
      { windows: 75, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data}>
        <PolarGrid stroke={chart.color("border")} />
        <PolarAngleAxis dataKey={chart.key("month")} tickLine={false} />
        {chart.series.map((item) => (
          <Radar
            dot={{ fillOpacity: 1 }}
            isAnimationActive={true}
            key={item.name}
            name={item.name}
            label={{ fill: chart.color("fg") }}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}
```

- 既存の他セクションの実装を参考にすること．
- dataの格納場所はproductやstoryと同様`src/data`ディレクトリに記述する．
- レーダーチャートは3つ作成し，粒度は下記の通り

### BackEnd
Ruby on Rails:2
PostgreSQL :1
GraphQL:2
Nginx:1
CloudFlare:1
### FrontEnd
JS/TS:3
React:2
Next.js:2
HTML/CSS:3
Tailwind CSS:1
### DevOps
Docker:3 
UNIX:3
Git/Github:4
Unity:3
Arduino:3
Processing:1

## チャートの見方
チャートの見方としては「1: 授業や個人で軽く使用した程度」，「2: インターン等で使用したことがあるがもう少し習熟が必要」，「3: 個人でも長期的に使用している」、「4: 実務レベルで自由に駆使できる」，「5：チョットデキル」．
この見方についてもチャートを並べたものの下に記載して置く．