import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Heading } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <SectionContainer backgroundColor="light" id="about">
      <Heading size="2xl" color="black" textAlign="center">About me</Heading>
    </SectionContainer>
  )
}
