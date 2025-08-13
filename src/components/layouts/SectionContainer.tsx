import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface SectionContainerProps {
  backgroundColor: "light" | "dark"
  id: string
  children: ReactNode
}

export const SectionContainer = ({backgroundColor, id, children}: SectionContainerProps) => {
  return (
    <Box
      minH="100vh"
      id={id}
      as="section"
      backgroundImage={backgroundColor === "light" ? "linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.78) 30%, rgba(255, 255, 255, 0.56) 100%)" : "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(82, 93, 122, 0.66) 30%, rgba(0, 0, 0, 0.9) 100%)"}
      position="relative"
      overflow="hidden">
      {children}
    </Box>
  )
}