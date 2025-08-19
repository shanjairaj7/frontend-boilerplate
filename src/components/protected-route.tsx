import { useAuthStore } from "@/stores/auth-store"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  
  console.log('ProtectedRoute - isAuthenticated:', isAuthenticated)
  
  if (!isAuthenticated) {
    console.log('ProtectedRoute - redirecting to login')
    return <Navigate to="/login" replace />
  }
  
  console.log('ProtectedRoute - showing protected content')
  return <>{children}</>
}