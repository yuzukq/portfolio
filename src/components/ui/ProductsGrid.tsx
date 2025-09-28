"use client";

import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetailOverlay from "../overlays/ProductDetailOverlay";
import { products, Product } from "@/data/products";

export default function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        gap={6}
        p={4}
        maxW="1200px"
        mx="auto"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </Grid>
      
      {selectedProduct && (
        <ProductDetailOverlay
          product={selectedProduct}
          isOpen={isOverlayOpen}
          onClose={handleCloseOverlay}
        />
      )}
    </>
  );
}
