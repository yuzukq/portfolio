import { Box, Text, Link, HStack } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      py={4}
      px={8}
      bg="gray.800"
      textAlign="center"
    >
      <Text mb={2}>© 2025 Yuzuki Tsuchiya</Text>
      <HStack justify="center" gap={4}>
        <Link href="mailto:c1.101@gmail.com">Contact</Link>
        <Link href="https://github.com/yuzukq">GitHub</Link>
        <Link href="https://discord.gg/8HPdqbZF">Discord</Link>
      </HStack>
    </Box>
  )
}
