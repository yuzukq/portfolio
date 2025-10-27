import { VStack, Link, Drawer, Button } from "@chakra-ui/react"
import { FiMenu, FiX } from "react-icons/fi"

export default function HeaderMobile({ items }: { items: { href: string; label: string; }[] }) {
  return (
    <Drawer.Root placement="start">
    <Drawer.Backdrop />
    <Drawer.Trigger asChild>
        <Button variant="ghost" size="lg" colorScheme="gray" borderRadius="full" px={4} py={8}>
            <FiMenu />
        </Button>
    </Drawer.Trigger>
    <Drawer.Positioner>
      <Drawer.Content>
        <Drawer.CloseTrigger asChild>
            <Button variant="ghost" size="lg" colorScheme="gray" borderRadius="full" px={4} py={8}>
                <FiX />
            </Button>
        </Drawer.CloseTrigger>
        <Drawer.Header>
          <Drawer.Title>Page index</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
            <VStack align="start" gap={4} mt={4}>
                {items.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href}
                      fontSize="lg"
                      fontWeight="medium"
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
            </VStack>
        </Drawer.Body>
        <Drawer.Footer />
      </Drawer.Content>
    </Drawer.Positioner>
  </Drawer.Root>
  )
}