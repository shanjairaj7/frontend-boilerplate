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
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { useNavigate, Link as RouterLink } from 'react-router-dom'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const cardBg = useColorModeValue('white', 'gray.800')
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    console.log("Signup form submitted!")
    console.log("Name:", name, "Email:", email, "Password:", password, "Confirm:", confirmPassword)

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      // Create new user account (simulate signup)
      console.log("Creating new user account...")
      login({
        id: "1",
        name: name,
        email: email,
        avatar: "https://github.com/shadcn.png"
      })
      console.log("Signup function called!")
      
      // Navigate to home page
      navigate("/")
    } catch (err) {
      setError("Signup failed. Please try again.")
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
              <Heading size="lg" color="brand.500" mb={2}>Create your account</Heading>
              <Text color="gray.600">Get started with your new account</Text>
            </CardHeader>
            <CardBody pt={0}>
              <form onSubmit={handleSignup}>
                <VStack spacing={6}>
                  <VStack spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel htmlFor="name">Full Name</FormLabel>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        focusBorderColor="brand.500"
                      />
                    </FormControl>

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
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        focusBorderColor="brand.500"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                      loadingText="Creating account..."
                      _hover={{ transform: 'translateY(-2px)' }}
                      transition="all 0.2s"
                    >
                      Create Account
                    </Button>
                  </VStack>

                  <Text textAlign="center" fontSize="sm" color="gray.600">
                    Already have an account?{' '}
                    <Link
                      as={RouterLink}
                      to="/login"
                      color="brand.500"
                      _hover={{ textDecoration: 'underline' }}
                    >
                      Sign in
                    </Link>
                  </Text>
                </VStack>
              </form>
            </CardBody>
          </Card>

          <Text fontSize="xs" color="gray.500" textAlign="center" lineHeight="tall">
            By creating an account, you agree to our{' '}
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