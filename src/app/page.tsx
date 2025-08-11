// "use client"

import { Heading, VStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading size = "6xl">ヘッドコンポーネントテスト</Heading>
      <Heading>テスト</Heading>    
      <VStack gap='100px' >
      <Text>テスト</Text>
      <Text>テスト</Text>
      </VStack>
    </>
  );
}
