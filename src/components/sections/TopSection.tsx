import { Box, Center, Heading, Image, Text, VStack, Icon, Link } from "@chakra-ui/react";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function TopSection() {
  return (
    <SectionContainer backgroundColor="dark" id="top">
      <Center minH="100vh" position="relative" zIndex={1}>
        <VStack gap={4}>
          <Box 
            opacity={0}
            animation="fade-in 1.0s ease-in-out 0s forwards"
          >
            <Heading size="4xl" color="white" fontWeight="600">
              Thank you for your visit !
            </Heading>
          </Box>
          <Box 
            opacity={0}
            animation="fade-in 1.0s ease-in-out 1.0s forwards"
          >
            <Text>Student engineer Yuzu</Text>
          </Box>
          <Image
            src="/img/icon-vr.png"
            alt="icon-vr"
            borderRadius="full"
            fit="cover"
            opacity={0}
            animation="fade-in 1.0s ease-in-out 1.0s forwards"
          />
          <Link 
            opacity={0}
            mt={4}
            animation="fade-in 1.0s ease-in-out 2.0s forwards"
            href="#about"
          >
            <Icon animation="bounce 1.0s ease-in-out 2.0s forwards infinite">
              <FaAngleDoubleDown size={40} color="white" />
            </Icon>
          </Link>
        </VStack>
      </Center>
    </SectionContainer>
  );
}