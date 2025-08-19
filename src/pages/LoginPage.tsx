import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Flex,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { useNavigate, Link as RouterLink } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const cardBg = useColorModeValue('white', 'gray.800')
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    console.log("Login form submitted!")
    console.log("Email:", email, "Password:", password)

    if (!email || !password) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    try {
      // Log user in with form data
      console.log("Logging in user...")
      login({
        id: "1",
        name: "John Doe",
        email: email,
        avatar: "https://github.com/shadcn.png"
      })
      console.log("Login function called!")
      
      // Navigate to home page
      navigate("/")
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box minH="100vh" bg={bgColor} display="flex" alignItems="center" justifyContent="center" p={6}>
      <Box w="full" maxW="md">
        <VStack spacing={6}>
          <Card bg={cardBg} shadow="lg" borderRadius="lg" w="full">
            <CardHeader textAlign="center" pb={4}>
              <Heading size="lg" color="brand.500" mb={2}>Welcome back</Heading>
              <Text color="gray.600">Login with your account</Text>
            </CardHeader>
            <CardBody pt={0}>
              <form onSubmit={handleLogin}>
                <VStack spacing={6}>
                  <VStack spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        focusBorderColor="brand.500"
                      />
                    </FormControl>
                    
                    <FormControl isRequired>
                      <Flex justify="space-between" align="center" mb={2}>
                        <FormLabel htmlFor="password" mb={0}>Password</FormLabel>
                        <Link
                          as={RouterLink}
                          to="#"
                          fontSize="sm"
                          color="brand.500"
                          _hover={{ textDecoration: 'underline' }}
                        >
                          Forgot your password?
                        </Link>
                      </Flex>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        focusBorderColor="brand.500"
                      />
                    </FormControl>

                    {error && (
                      <Alert status="error" borderRadius="md">
                        <AlertIcon />
                        {error}
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      colorScheme="brand"
                      w="full"
                      size="lg"
                      isLoading={isLoading}
                      loadingText="Signing in..."
                      _hover={{ transform: 'translateY(-2px)' }}
                      transition="all 0.2s"
                    >
                      Login
                    </Button>
                  </VStack>

                  <Text textAlign="center" fontSize="sm" color="gray.600">
                    Don't have an account?{' '}
                    <Link
                      as={RouterLink}
                      to="/signup"
                      color="brand.500"
                      _hover={{ textDecoration: 'underline' }}
                    >
                      Sign up
                    </Link>
                  </Text>
                </VStack>
              </form>
            </CardBody>
          </Card>

          <Text fontSize="xs" color="gray.500" textAlign="center" lineHeight="tall">
            By clicking continue, you agree to our{' '}
            <Link href="#" color="brand.500" _hover={{ textDecoration: 'underline' }}>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" color="brand.500" _hover={{ textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            .
          </Text>
        </VStack>
      </Box>
    </Box>
  )
}