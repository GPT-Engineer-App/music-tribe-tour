import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          BLA
        </Heading>
        <Image src="https://images.unsplash.com/photo-1489602642804-64dea1e3ebc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMGxpdmV8ZW58MHx8fHwxNzE3MDc4NzMwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band performing live" borderRadius="md" boxShadow="lg" />
        <Text fontSize="lg" textAlign="center">
          Join us on our journey as we tour across the country, bringing our music to fans everywhere. Check out our tour dates and get your tickets now!
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Tickets
        </Button>
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg" as="a" href="/merchandise">
            Merchandise
          </Button>
          <Button colorScheme="teal" size="lg" as="a" href="/contact">
            Contact Us
          </Button>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" mb={4}>
            Upcoming Tour Dates
          </Heading>
          <VStack spacing={4} align="start">
            <Box>
              <Text fontWeight="bold">City, State</Text>
              <Text>Date - Venue</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">City, State</Text>
              <Text>Date - Venue</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">City, State</Text>
              <Text>Date - Venue</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
