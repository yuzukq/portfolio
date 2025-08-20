import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Heading } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <SectionContainer backgroundColor="light" id="about">
      <Heading>About me</Heading>
    </SectionContainer>
  )
}