import { useState, useEffect } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { useNavigate, Link as RouterLink } from 'react-router-dom'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [localError, setLocalError] = useState('')
  
  const { signup, loading, error, clearError } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    // Clear any existing errors when component mounts
    clearError()
  }, [clearError])

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLocalError('')
    clearError()

    if (!name || !email || !password || !confirmPassword) {
      setLocalError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setLocalError("Passwords don't match")
      return
    }

    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters")
      return
    }

    const success = await signup(email, password, name)
    if (success) {
      navigate("/")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <div className="card shadow-lg">
          <div className="card-header text-center">
            <h1 className="card-title text-2xl">Create an account</h1>
            <p className="card-description">Enter your details to get started</p>
          </div>
          <div className="card-content">
            <form onSubmit={handleSignup}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="label">Full Name</label>
                    <input className="input"
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="label">Email</label>
                    <input className="input"
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="password" className="label">Password</label>
                    <input className="input"
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                    <input className="input"
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  {(localError || error) && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                      {localError || error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-full hover:-translate-y-0.5 transition-transform"
                    disabled={loading}
                  >
                    {loading ? "Creating account..." : "Create account"}
                  </button>
                </div>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <RouterLink
                    to="/login"
                    className="text-blue-600 hover:underline"
                  >
                    Sign in
                  </RouterLink>
                </p>
              </div>
            </form>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center leading-relaxed">
          By clicking continue, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}