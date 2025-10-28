import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Heading, Flex, Text } from "@chakra-ui/react";
import StoryTimeline from "@/components/ui/storyTimeline";

export default function StorySection() {
  return (
    <SectionContainer backgroundColor="light" id="story">
      <Flex direction="column" align="center" justify="center" py={10}>
        <Heading size="2xl" color="black">My Story</Heading>
          <Text color="gray.800" mb={10} textAlign="center" maxW="600px">
            現在に至るまでの振り返り．
          </Text>
      </Flex>
      <StoryTimeline />
    </SectionContainer>
  )
}
