import { Card, Image, HStack, Badge } from "@chakra-ui/react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card.Root
      overflow="hidden"
      cursor="pointer"
      onClick={onClick}
      _hover={{ transform: "translateY(-4px)", transition: "all 0.3s ease" }}
      transition="all 0.3s ease"
      maxW="sm"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        height="200px"
        width="100%"
        fit="cover"
      />
      <Card.Body>
        <Card.Title fontSize="lg" fontWeight="bold" mb={2}>
          {product.title}
        </Card.Title>
        <HStack wrap="wrap" gap={1} mt={3}>
          {product.techStack.map((tech) => (
            <Badge
              key={tech}
              colorPalette="blue"
              size="sm"
              variant="solid"
            >
              {tech}
            </Badge>
          ))}
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}