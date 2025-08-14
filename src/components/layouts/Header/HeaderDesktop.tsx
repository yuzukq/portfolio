import { HStack, Link } from "@chakra-ui/react"


export default function HeaderDesktop({ items }: { items: { href: string; label: string; }[] }) {
  return (
    <HStack gap={10} display={{ base: "none", md: "flex" }} justifyContent="center" py={2}>
    {items.map((item) => (
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
  )
}