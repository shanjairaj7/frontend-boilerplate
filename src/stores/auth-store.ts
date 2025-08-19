import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: User) => {
        console.log('Zustand login called with user:', user)
        set({ user, isAuthenticated: true })
        console.log('Zustand state updated - isAuthenticated: true')
      },
      logout: () => {
        console.log('Zustand logout called')
        set({ user: null, isAuthenticated: false })
        console.log('Zustand state updated - isAuthenticated: false')
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)