import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Heading, Flex } from "@chakra-ui/react";
import StoryTimeline from "@/components/ui/storyTimeline";

export default function StorySection() {
  return (
    <SectionContainer backgroundColor="light" id="story">
      <Flex direction="column" align="center" justify="center" h={20}>
        <Heading size="2xl" color="black">My Story</Heading>
      </Flex>
      <StoryTimeline />
    </SectionContainer>
  )
}
