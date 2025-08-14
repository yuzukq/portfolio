"use client"

import { 
  Box, 
  HStack,
  Link, 
  useBreakpointValue
} from "@chakra-ui/react"


export default function Header() {

  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const menuItems = [
    { href: "#top", label: "Top" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#products", label: "Products" },
    { href: "#studies", label: "Studies" },
    { href: "#story", label: "Story" }
  ]

  return (
    <Box 
      as="header" 
      position="fixed" 
      top={0} 
      h={16}
      w="100%" 
      bg="rgba(0, 0, 0, 0.5)"
      backdropFilter="blur(10px)"
      zIndex={1000}
      transition="all 0.3s ease"
      _hover={{
        boxShadow: "lg"
      }}
    >

      {/* PC表示 */}
      <HStack gap={10} display={{ base: "none", md: "flex" }} justifyContent="center" py={2}>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            px={3}
            py={2}
            _hover={{
              bg: "gray.900",
              transform: "translateY(-2px)",
              transition: "all 0.2s ease"
            }}
            transition="all 0.2s ease"
          >
            {item.label}
          </Link>
        ))}
      </HStack>
    
    </Box>
  )
}