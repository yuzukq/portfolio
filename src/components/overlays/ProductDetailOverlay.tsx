"use client";

import {
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
  Separator,
  Portal
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt, FaDesktop, FaTimes } from "react-icons/fa";
import { Product } from "@/data/products";
import { useEffect } from "react";

interface ProductDetailOverlayProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailOverlay({ product, isOpen, onClose }: ProductDetailOverlayProps) {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    let originalOverflow: string;

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // 元のoverflow値を記憶
      originalOverflow = document.body.style.overflow;
      // ボディのスクロール無効化
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // 元のoverflow値を復元
      if (isOpen) {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      {/* オーバーレイ背景 */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.700"
        zIndex="overlay"
        onClick={onClose}
      />
      
      {/* モーダルコンテンツ */}
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        maxW="4xl"
        maxH="90vh"
        w="90vw"
        overflow="auto"
        bg="gray.800"
        borderRadius="xl"
        boxShadow="2xl"
        zIndex="modal"
        p={6}
      >
        {/* ヘッダー */}
        <Flex justify="space-between" align="center" mb={6}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            {product.title}
          </Text>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            color="gray.300"
            _hover={{ color: "white", bg: "gray.700" }}
          >
            <Icon><FaTimes /></Icon>
          </Button>
        </Flex>

        {/* ボディ */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={6}
        >
          {/* Left side - Screenshots */}
          <Box flex="1">
            <Text fontSize="lg" fontWeight="semibold" mb={3} color="white">
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
                <Text fontSize="lg" fontWeight="semibold" mb={2} color="white">
                  概要
                </Text>
                <Text color="gray.300" lineHeight="tall">
                  {product.description}
                </Text>
              </Box>

              <Separator />

              {/* Features */}
              <Box>
                <Text fontSize="lg" fontWeight="semibold" mb={2} color="white">
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
                <Text fontSize="lg" fontWeight="semibold" mb={2} color="white">
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
                <Text fontSize="lg" fontWeight="semibold" mb={2} color="white">
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
                <Text fontSize="lg" fontWeight="semibold" mb={2} color="white">
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
      </Box>
    </Portal>
  );
}
