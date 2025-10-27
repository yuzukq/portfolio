import Footer from "@/components/layouts/Footer"
import BlogHeader from "@/components/blog/BlogHeader"
import { Box } from "@chakra-ui/react"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  // ブログ配下の共通レイアウト
  return (
    // dvh: UIを引いた分の実際の表示領域を指定する
    <Box minH="100dvh" display="flex" flexDirection="column">
      <BlogHeader />
      <Box as="main" flex="1">{children}</Box>
      <Footer />
    </Box>
  )
}
