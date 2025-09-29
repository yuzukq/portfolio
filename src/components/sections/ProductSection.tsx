import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Heading, Flex, Text } from "@chakra-ui/react";
import ProductsGrid from "@/components/ui/ProductsGrid";

export default function ProductSection() {
  return (
    <SectionContainer backgroundColor="dark" id="products">
      <Flex direction="column" align="center" justify="center" py={20}>
        <Heading size="2xl" color="white" mb={4}>
          Products
        </Heading>
        <Text color="gray.300" mb={10} textAlign="center" maxW="600px">
          これまでに開発したプロダクトをご紹介します。各カードをクリックすると詳細情報をご確認いただけます。
        </Text>
        <ProductsGrid />
      </Flex>
    </SectionContainer>
  );
}
