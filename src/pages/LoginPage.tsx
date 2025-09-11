import { useState, useEffect } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { useNavigate, Link as RouterLink } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [localError, setLocalError] = useState('')
  
  const { login, loading, error, clearError } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    // Clear any existing errors when component mounts
    clearError()
  }, [clearError])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLocalError('')
    clearError()

    if (!email || !password) {
      setLocalError("Please fill in all fields")
      return
    }

    const success = await login(email, password)
    if (success) {
      navigate("/")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <div className="card shadow-lg">
          <div className="card-header text-center">
            <h1 className="card-title text-2xl">Welcome back</h1>
            <p className="card-description">Login with your account</p>
          </div>
          <div className="card-content">
            <form onSubmit={handleLogin}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="input"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="label">Password</label>
                      <RouterLink
                        to="#"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Forgot your password?
                      </RouterLink>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    {loading ? "Signing in..." : "Login"}
                  </button>
                </div>

                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <RouterLink
                    to="/signup"
                    className="text-blue-600 hover:underline"
                  >
                    Sign up
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