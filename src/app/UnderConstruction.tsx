import { Center, VStack, Heading, Text, Box, Container, Flex, IconButton, Link } from "@chakra-ui/react";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function UnderConstruction() {

  return (
    <Box 
      minH="100vh"
      bg="gray.900"
      backgroundImage="linear-gradient(to bottom, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.05) 30%, rgba(17, 24, 39, 0.9) 100%)"
      position="relative"
      overflow="hidden"
    >
      <Center minH="100vh" position="relative" zIndex={1}>
        <Container maxW="container.lg" textAlign="center">
          <VStack gap={8}>
            <Heading 
              size="2xl" 
              color="white"
              fontWeight="600"
              animation="slide-from-top-full 1.5s ease-in-out 0s forwards"
            >
              制作中
            </Heading>

            {/* ビルディングアニメーション */}
            <Box
              position="relative"
              borderRadius="16px"
              overflow="hidden"
              boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              border="1px solid"
              borderColor="gray.700"
              bg="black"
              animation="fade-in 1.5s ease-in-out 0s forwards"
              opacity={0}
            >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    maxWidth: '600px',
                    display: 'block'
                  }}
                >
                  <source src="/mov/mov_building.mp4" type="video/mp4" />
                </video>
              </Box>

            {/* 説明とボタンのブロック */}
            <VStack 
              gap={6}
              animation="slide-from-bottom-full 1.5s ease-in-out 0s forwards"
            >
                <Text 
                  fontSize="lg" 
                  color="gray.400"
                  maxW="600px"
                  lineHeight="tall"
                  fontWeight="400"
                >
                  誠意制作中です。しばらくお待ちください。
                </Text>

                {/* ソーシャルリンクボタン */}
                <Flex gap={6} justify="center" align="center" wrap="wrap">
                <Link
                    href="https://github.com/yuzukq"
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: "none" }}
                  >
                    <IconButton
                      aria-label="GitHub"
                      size="lg"
                      variant="outline"
                      colorPalette="purple"
                      rounded="full"
                      _hover={{
                        transform: "translateY(-2px)",
                        transition: "all 0.2s"
                      }}
                      _active={{
                        transform: "translateY(0px)"
                      }}
                      transition="all 0.2s"
                    >
                      <FaGithub />
                    </IconButton>
                  </Link>
                  <Link
                    href="https://discord.gg/8HPdqbZF"
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: "none" }}
                  >
                    <IconButton
                      aria-label="Discord"
                      size="lg"
                      variant="outline"
                      colorPalette="blue"
                      rounded="full"
                      _hover={{
                        transform: "translateY(-2px)",
                        transition: "all 0.2s"
                      }}
                      _active={{
                        transform: "translateY(0px)"
                      }}
                      transition="all 0.2s"
                    >
                      <FaDiscord />
                    </IconButton>
                  </Link> 
                </Flex>
              </VStack>
          </VStack>
        </Container>
      </Center>
    </Box>
  );
}