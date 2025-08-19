import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Button,
  HStack,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';

/**
 * CHAKRA UI BOILERPLATE SETTINGS PAGE
 * 
 * This demonstrates form components using Chakra UI.
 * All form validation and styling is handled by Chakra UI components with built-in theming.
 */
export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');
  const [visibility, setVisibility] = useState('public');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const handleSave = () => {
    console.log('Settings saved:', { 
      emailNotifications, 
      pushNotifications, 
      theme, 
      language, 
      visibility, 
      twoFactorAuth 
    });
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="4xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading as="h1" size="2xl" color="brand.500" mb={4}>
              Settings
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Configure your application preferences and account settings.
            </Text>
          </Box>

          {/* Profile Settings */}
          <Card bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="lg" color="brand.500">Profile Settings</Heading>
              <Text color="gray.600">Update your personal information</Text>
            </CardHeader>
            <CardBody>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Display Name</FormLabel>
                  <Input 
                    placeholder="Enter your display name" 
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Bio</FormLabel>
                  <Input 
                    placeholder="Tell us about yourself" 
                    focusBorderColor="brand.500"
                  />
                </FormControl>
              </VStack>
            </CardBody>
          </Card>

          {/* Notification Settings */}
          <Card bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="lg" color="brand.500">Notification Preferences</Heading>
              <Text color="gray.600">Manage how you receive updates</Text>
            </CardHeader>
            <CardBody>
              <VStack spacing={6}>
                <HStack justify="space-between" w="full">
                  <Box>
                    <Text fontWeight="medium">Email Notifications</Text>
                    <Text fontSize="sm" color="gray.600">
                      Receive email updates about your account activity
                    </Text>
                  </Box>
                  <Switch
                    isChecked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    colorScheme="brand"
                  />
                </HStack>
                
                <HStack justify="space-between" w="full">
                  <Box>
                    <Text fontWeight="medium">Push Notifications</Text>
                    <Text fontSize="sm" color="gray.600">
                      Get push notifications on your device
                    </Text>
                  </Box>
                  <Switch
                    isChecked={pushNotifications}
                    onChange={(e) => setPushNotifications(e.target.checked)}
                    colorScheme="brand"
                  />
                </HStack>
              </VStack>
            </CardBody>
          </Card>

          {/* Appearance Settings */}
          <Card bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="lg" color="brand.500">Appearance</Heading>
              <Text color="gray.600">Customize your visual preferences</Text>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <FormControl maxW="xs">
                  <FormLabel>Theme</FormLabel>
                  <Select 
                    value={theme} 
                    onChange={(e) => setTheme(e.target.value)}
                    focusBorderColor="brand.500"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </Select>
                </FormControl>
                
                <FormControl maxW="xs">
                  <FormLabel>Language</FormLabel>
                  <Select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    focusBorderColor="brand.500"
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                  </Select>
                </FormControl>
              </VStack>
            </CardBody>
          </Card>

          {/* Privacy Settings */}
          <Card bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="lg" color="brand.500">Privacy & Security</Heading>
              <Text color="gray.600">Control your account security settings</Text>
            </CardHeader>
            <CardBody>
              <VStack spacing={6}>
                <FormControl maxW="xs">
                  <FormLabel>Profile Visibility</FormLabel>
                  <Select 
                    value={visibility} 
                    onChange={(e) => setVisibility(e.target.value)}
                    focusBorderColor="brand.500"
                  >
                    <option value="public">Public</option>
                    <option value="friends">Friends Only</option>
                    <option value="private">Private</option>
                  </Select>
                </FormControl>
                
                <HStack justify="space-between" w="full">
                  <Box>
                    <Text fontWeight="medium">Two-Factor Authentication</Text>
                    <Text fontSize="sm" color="gray.600">
                      Add an extra layer of security to your account
                    </Text>
                  </Box>
                  <Switch
                    isChecked={twoFactorAuth}
                    onChange={(e) => setTwoFactorAuth(e.target.checked)}
                    colorScheme="brand"
                  />
                </HStack>
              </VStack>
            </CardBody>
          </Card>

          {/* Action Buttons */}
          <HStack justify="center" spacing={4} pt={6}>
            <Button 
              variant="outline" 
              size="lg" 
              colorScheme="brand"
              _hover={{ transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              Cancel
            </Button>
            <Button 
              size="lg" 
              colorScheme="brand" 
              onClick={handleSave}
              _hover={{ transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              Save Changes
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}