import {
  Box,
  Container,
  Heading,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SimpleHomePage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="6xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" color="brand.500" mb={4}>
              Dashboard
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {Array.from({ length: 24 }).map((_, index) => (
              <Box
                key={index}
                h="12"
                bg={cardBg}
                borderRadius="lg"
                aspectRatio="video"
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
