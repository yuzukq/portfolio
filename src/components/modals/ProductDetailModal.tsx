"use client";

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  Button,
  Text,
  VStack,
  HStack,
  Badge,
  Image,
  Box,
  Link,
  Icon,
  Flex,
  Separator
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt, FaDesktop } from "react-icons/fa";
import { Product } from "@/data/products";

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  return (
    <DialogRoot open={isOpen} onInteractOutside={onClose}>
      <DialogContent maxW="4xl" maxH="90vh" overflow="auto">
        <DialogHeader>
          <DialogTitle fontSize="2xl" fontWeight="bold">
            {product.title}
          </DialogTitle>
          <DialogCloseTrigger onClick={onClose} />
        </DialogHeader>

        <DialogBody>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
          >
            {/* Left side - Screenshots */}
            <Box flex="1">
              <Text fontSize="lg" fontWeight="semibold" mb={3}>
                スクリーンショット
              </Text>
              <VStack gap={4}>
                {product.screenshots.map((screenshot, index) => (
                  <Image
                    key={index}
                    src={screenshot}
                    alt={`${product.title} スクリーンショット ${index + 1}`}
                    borderRadius="lg"
                    width="100%"
                  />
                ))}
              </VStack>
            </Box>

            {/* Right side - Details */}
            <Box flex="1">
              <VStack align="start" gap={4}>
                {/* Description */}
                <Box>
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    概要
                  </Text>
                  <Text color="gray.300" lineHeight="tall">
                    {product.description}
                  </Text>
                </Box>

                <Separator />

                {/* Features */}
                <Box>
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    主な機能
                  </Text>
                  <VStack align="start" gap={1}>
                    {product.features.map((feature, index) => (
                      <Text key={index} color="gray.300">
                        • {feature}
                      </Text>
                    ))}
                  </VStack>
                </Box>

                <Separator />

                {/* Tech Stack */}
                <Box>
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    技術スタック
                  </Text>
                  <HStack wrap="wrap" gap={2}>
                    {product.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        colorPalette="blue"
                        size="md"
                        variant="solid"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Box>

                <Separator />

                {/* Challenges */}
                <Box>
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    工夫点・課題
                  </Text>
                  <VStack align="start" gap={1}>
                    {product.challenges.map((challenge, index) => (
                      <Text key={index} color="gray.300">
                        • {challenge}
                      </Text>
                    ))}
                  </VStack>
                </Box>

                <Separator />

                {/* URLs */}
                <Box>
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    リンク
                  </Text>
                  <HStack gap={3} wrap="wrap">
                    {product.urls.demo && (
                      <Link href={product.urls.demo} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" colorPalette="blue">
                          <Icon><FaDesktop /></Icon>
                          デモ
                        </Button>
                      </Link>
                    )}
                    {product.urls.github && (
                      <Link href={product.urls.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" colorPalette="purple">
                          <Icon><FaGithub /></Icon>
                          GitHub
                        </Button>
                      </Link>
                    )}
                    {product.urls.website && (
                      <Link href={product.urls.website} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" colorPalette="green">
                          <Icon><FaExternalLinkAlt /></Icon>
                          Website
                        </Button>
                      </Link>
                    )}
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
