// モバイルかPCかを判定する

"use client"

import { useBreakpointValue } from "@chakra-ui/react"

export const useIsMobile = () => {
  return useBreakpointValue({ base: true, md: false })
}
