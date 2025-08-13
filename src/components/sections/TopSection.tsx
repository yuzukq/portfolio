import { Box, Heading } from "@chakra-ui/react";
import { SectionContainer } from "@/components/layouts/SectionContainer";

export default function TopSection() {
  return (
    <SectionContainer backgroundColor="light" id="top">
        <Heading>トップページ</Heading>
    </SectionContainer>
  )
}