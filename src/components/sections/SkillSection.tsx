"use client"

import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Heading, Flex, Text, SimpleGrid, Box, VStack } from "@chakra-ui/react";
import SkillRadarChart from "@/components/ui/SkillRadarChart";
import { skillCategories, skillLevels } from "@/data/skills";

export default function SkillSection() {
  return (
    <SectionContainer backgroundColor="dark" id="skills">
      <Flex direction="column" align="center" justify="center" py={20}>
        <Heading size="2xl" mb={4}>
          Skills
        </Heading>
        <Text color="gray.300" mb={10} textAlign="center" maxW="600px">
          これまでに習得したスキルや技術スタックを可視化しています。
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full" mb={12}>
          {skillCategories.map((category) => (
            <SkillRadarChart key={category.id} category={category} />
          ))}
        </SimpleGrid>

        {/* <Box 
          bg="gray.50" 
          p={6} 
          borderRadius="md" 
          maxW="800px" 
          w="full"
          border="1px solid"
          borderColor="gray.200"
        > */}
          <Heading size="md" mb={4} textAlign="center" color="gray.500">
            チャートの見方
          </Heading>
          <VStack align="stretch" gap={2}>
            {skillLevels.map((item) => (
              <Flex key={item.level} gap={3} align="center">
                <Box 
                  fontWeight="bold" 
                  minW="60px"
                  color="gray.500"
                >
                  レベル {item.level}:
                </Box>
                <Text color="gray.500">{item.description}</Text>
              </Flex>
            ))}
          </VStack>
        {/* </Box> */}
      </Flex>
    </SectionContainer>
  );
}