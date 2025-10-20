"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as RechartsRadarChart } from "recharts"
import { Box, Heading } from "@chakra-ui/react"
import type { SkillCategory } from "@/data/skills"

interface SkillRadarChartProps {
  category: SkillCategory;
}

export default function SkillRadarChart({ category }: SkillRadarChartProps) {
  // データを整形
  const formattedData = Object.entries(category.data).map(([skill, level]) => ({
    skill,
    level,
  }))

  const chart = useChart({
    data: formattedData,
    series: [{ name: "level", color: category.color }],
  })

  return (
    <Box>
      <Heading size="lg" mb={4} textAlign="center">
        {category.title}
      </Heading>
      <Chart.Root maxW="sm" chart={chart} mx="auto">
        <RechartsRadarChart data={chart.data}>
          <PolarGrid stroke={chart.color("border")} />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 5]} 
            tick={{ fill: chart.color("fg"), fontSize: 10 }}
          />
          <PolarAngleAxis 
            dataKey={chart.key("skill")} 
            tickLine={false}
            tick={{ fill: chart.color("fg"), fontSize: 12 }}
          />
          {chart.series.map((item) => (
            <Radar
              dot={{ fillOpacity: 1 }}
              isAnimationActive={true}
              key={item.name}
              name={item.name}
              //label={{ fill: chart.color("fg") }}
              dataKey={chart.key(item.name)}
              stroke={chart.color(item.color)}
              fill={chart.color(item.color)}
              fillOpacity={0.3}
            />
          ))}
        </RechartsRadarChart>
      </Chart.Root>
    </Box>
  )
}
