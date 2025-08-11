"use client"

import { Center, VStack, Heading, Text, Spinner} from "@chakra-ui/react";

export default function UnderConstruction() {
  return (
    <Center minH="100vh" bg="gray.50">
      <VStack gap={6}>
        <Spinner size="xl" color="teal.500" />
        <Heading size="xl" color="teal.700">
          制作中
        </Heading>
        <Text fontSize="lg" color="gray.600">
          誠意制作です。しばらくお待ちください。
        </Text>
      </VStack>
    </Center>
    
  );
}
