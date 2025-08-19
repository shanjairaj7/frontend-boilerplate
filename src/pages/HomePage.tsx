import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Button,
  useColorModeValue,
  HStack,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react'
import { FiUsers, FiTrendingUp, FiDollarSign, FiActivity } from 'react-icons/fi'

/**
 * CHAKRA UI BOILERPLATE HOME PAGE
 * 
 * This demonstrates Chakra UI components for instant performance.
 * All styling is handled by Chakra UI - no external CSS needed!
 * 
 * Features:
 * - Responsive grid layout
 * - Color mode support (light/dark)
 * - Professional dashboard design
 * - Statistical cards
 * - Action buttons
 */

export default function HomePage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  const stats = [
    {
      label: 'Total Users',
      value: '1,234',
      change: 12.5,
      icon: FiUsers,
      color: 'blue',
    },
    {
      label: 'Revenue',
      value: '$45,678',
      change: 8.2,
      icon: FiDollarSign,
      color: 'green',
    },
    {
      label: 'Growth',
      value: '23%',
      change: -2.1,
      icon: FiTrendingUp,
      color: 'purple',
    },
    {
      label: 'Activity',
      value: '89%',
      change: 4.7,
      icon: FiActivity,
      color: 'orange',
    },
  ]

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="7xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading as="h1" size="2xl" color="brand.500" mb={4}>
              Welcome to Your Chakra UI Application
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              This boilerplate uses Chakra UI components for instant performance and beautiful design.
              No external CSS needed - everything is styled through component props!
            </Text>
          </Box>

          {/* Statistics Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {stats.map((stat, index) => (
              <Card key={index} bg={cardBg} shadow="md" _hover={{ shadow: 'lg' }} transition="all 0.2s">
                <CardBody>
                  <Stat>
                    <HStack justify="space-between" mb={2}>
                      <StatLabel color="gray.600">{stat.label}</StatLabel>
                      <Box as={stat.icon} color={`${stat.color}.500`} size="20px" />
                    </HStack>
                    <StatNumber fontSize="2xl" color={`${stat.color}.500`}>
                      {stat.value}
                    </StatNumber>
                    <StatHelpText>
                      <StatArrow type={stat.change > 0 ? 'increase' : 'decrease'} />
                      {Math.abs(stat.change)}%
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          {/* Feature Cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Card bg={cardBg} shadow="md" _hover={{ shadow: 'lg' }} transition="all 0.2s">
              <CardHeader>
                <Heading size="lg" color="brand.500">⚡ Instant Performance</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Text color="gray.600">
                  Chakra UI components render instantly with zero lag.
                  Emotion-based CSS-in-JS with optimized performance and built-in theming.
                </Text>
              </CardBody>
            </Card>

            <Card bg={cardBg} shadow="md" _hover={{ shadow: 'lg' }} transition="all 0.2s">
              <CardHeader>
                <Heading size="lg" color="brand.500">🎨 Beautiful Design</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Text color="gray.600">
                  Modern, professional design system out of the box.
                  Responsive layouts, consistent spacing, and accessible components included.
                </Text>
              </CardBody>
            </Card>

            <Card bg={cardBg} shadow="md" _hover={{ shadow: 'lg' }} transition="all 0.2s">
              <CardHeader>
                <Heading size="lg" color="brand.500">🚀 Developer Experience</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Text color="gray.600">
                  Excellent TypeScript support, composable components, and
                  powerful theming system for rapid development.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* Call to Action */}
          <Card bg={cardBg} shadow="md">
            <CardBody p={8}>
              <VStack spacing={6}>
                <Heading size="xl" textAlign="center" color="brand.500">
                  Get Started with Chakra UI
                </Heading>
                <Text color="gray.600" textAlign="center" maxW="3xl">
                  This boilerplate includes Chakra UI's complete component library with instant performance,
                  beautiful design, and excellent developer experience. All components are accessible by default
                  and work seamlessly together.
                </Text>
                
                <HStack spacing={4} wrap="wrap" justify="center">
                  <Badge colorScheme="blue" p={2} borderRadius="md">Button</Badge>
                  <Badge colorScheme="green" p={2} borderRadius="md">Card</Badge>
                  <Badge colorScheme="purple" p={2} borderRadius="md">Modal</Badge>
                  <Badge colorScheme="orange" p={2} borderRadius="md">Table</Badge>
                  <Badge colorScheme="pink" p={2} borderRadius="md">Form</Badge>
                  <Badge colorScheme="teal" p={2} borderRadius="md">Grid</Badge>
                  <Badge colorScheme="red" p={2} borderRadius="md">Toast</Badge>
                  <Badge colorScheme="yellow" p={2} borderRadius="md">Menu</Badge>
                </HStack>

                <HStack spacing={4} pt={4}>
                  <Button 
                    colorScheme="brand" 
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Primary Action
                  </Button>
                  <Button 
                    variant="outline" 
                    colorScheme="brand" 
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Secondary Action
                  </Button>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  )
}