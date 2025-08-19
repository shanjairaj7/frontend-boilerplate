import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Badge,
  Button,
  HStack,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiEdit2, FiMail, FiCalendar, FiMapPin } from 'react-icons/fi';

/**
 * CHAKRA UI BOILERPLATE PROFILE PAGE
 * 
 * This demonstrates profile components using Chakra UI.
 * All styling is handled by Chakra UI with beautiful design out of the box.
 */
export default function ProfilePage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const userStats = [
    { label: 'Projects', value: '12' },
    { label: 'Followers', value: '543' },
    { label: 'Following', value: '289' },
  ];

  const badges = [
    { label: 'React Expert', color: 'blue' },
    { label: 'TypeScript', color: 'purple' },
    { label: 'UI/UX Design', color: 'green' },
    { label: 'Full Stack', color: 'orange' },
  ];

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="6xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Page Header */}
          <Box textAlign="center">
            <Heading as="h1" size="2xl" color="brand.500" mb={4}>
              User Profile
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Manage your profile information and preferences with Chakra UI components.
            </Text>
          </Box>

          {/* Profile Information Card */}
          <Card bg={cardBg} shadow="lg" maxW="4xl" mx="auto" w="full">
            <CardBody p={8}>
              <VStack spacing={6}>
                {/* Avatar and Basic Info */}
                <VStack spacing={4}>
                  <Avatar
                    size="2xl"
                    name="John Doe"
                    src="https://github.com/shadcn.png"
                    border="4px solid"
                    borderColor="brand.500"
                  />
                  <VStack spacing={2} textAlign="center">
                    <Heading size="lg" color="brand.500">John Doe</Heading>
                    <Text color="gray.600" fontSize="lg">Full Stack Developer</Text>
                    <Text color="gray.500" maxW="md" textAlign="center">
                      Passionate developer who loves creating beautiful and functional user experiences 
                      with modern web technologies.
                    </Text>
                  </VStack>
                </VStack>

                {/* Contact Information */}
                <VStack spacing={3}>
                  <HStack spacing={2} color="gray.600">
                    <Box as={FiMail} />
                    <Text>john.doe@example.com</Text>
                  </HStack>
                  <HStack spacing={2} color="gray.600">
                    <Box as={FiMapPin} />
                    <Text>San Francisco, CA</Text>
                  </HStack>
                  <HStack spacing={2} color="gray.600">
                    <Box as={FiCalendar} />
                    <Text>Joined December 2023</Text>
                  </HStack>
                </VStack>

                {/* Action Buttons */}
                <HStack spacing={4}>
                  <Button
                    leftIcon={<FiEdit2 />}
                    colorScheme="brand"
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Edit Profile
                  </Button>
                  <Button
                    variant="outline"
                    colorScheme="brand"
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Share Profile
                  </Button>
                </HStack>
              </VStack>
            </CardBody>
          </Card>

          {/* Statistics */}
          <Card bg={cardBg} shadow="md" maxW="4xl" mx="auto" w="full">
            <CardHeader>
              <Heading size="lg" color="brand.500" textAlign="center">Profile Statistics</Heading>
            </CardHeader>
            <CardBody>
              <StatGroup justifyContent="center">
                {userStats.map((stat, index) => (
                  <Stat key={index} textAlign="center">
                    <StatNumber fontSize="3xl" color="brand.500">{stat.value}</StatNumber>
                    <StatLabel color="gray.600">{stat.label}</StatLabel>
                  </Stat>
                ))}
              </StatGroup>
            </CardBody>
          </Card>

          {/* Skills and Badges */}
          <Card bg={cardBg} shadow="md" maxW="4xl" mx="auto" w="full">
            <CardHeader>
              <Heading size="lg" color="brand.500" textAlign="center">Skills & Expertise</Heading>
            </CardHeader>
            <CardBody>
              <HStack spacing={3} justify="center" wrap="wrap">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    colorScheme={badge.color}
                    variant="solid"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                  >
                    {badge.label}
                  </Badge>
                ))}
              </HStack>
            </CardBody>
          </Card>

          {/* Recent Activity */}
          <Card bg={cardBg} shadow="md" maxW="4xl" mx="auto" w="full">
            <CardHeader>
              <Heading size="lg" color="brand.500" textAlign="center">Recent Activity</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Box p={4} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="md">
                  <HStack justify="space-between">
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="medium">Completed React Dashboard Project</Text>
                      <Text fontSize="sm" color="gray.600">Built a comprehensive admin dashboard</Text>
                    </VStack>
                    <Text fontSize="sm" color="gray.500">2 days ago</Text>
                  </HStack>
                </Box>
                
                <Box p={4} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="md">
                  <HStack justify="space-between">
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="medium">Updated Profile Settings</Text>
                      <Text fontSize="sm" color="gray.600">Added new skills and updated bio</Text>
                    </VStack>
                    <Text fontSize="sm" color="gray.500">1 week ago</Text>
                  </HStack>
                </Box>
                
                <Box p={4} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="md">
                  <HStack justify="space-between">
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="medium">Joined Development Team</Text>
                      <Text fontSize="sm" color="gray.600">Started working on new mobile app project</Text>
                    </VStack>
                    <Text fontSize="sm" color="gray.500">2 weeks ago</Text>
                  </HStack>
                </Box>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
}