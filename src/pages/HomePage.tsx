import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * SHADCN/UI BOILERPLATE HOME PAGE
 * 
 * This demonstrates shadcn/ui components with Tailwind CSS styling.
 * Fast, accessible components with beautiful design out of the box!
 * 
 * Features:
 * - Responsive grid layout with Tailwind CSS
 * - Clean and modern design
 * - Professional landing page layout
 * - shadcn/ui components
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Welcome to Your shadcn/ui Application
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This boilerplate uses shadcn/ui components with Tailwind CSS for fast development and beautiful design.
              All components are accessible and styled with Tailwind utilities!
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ⚡ Blazing Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  shadcn/ui components built with Radix UI primitives and styled with Tailwind CSS
                  for optimal performance and developer experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎨 Beautiful Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modern, clean design system with consistent spacing, typography, and accessible
                  components that work perfectly together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🚀 Developer First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Full TypeScript support, copy-paste components, and customizable design tokens
                  for rapid development and easy maintenance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Call to Action */}
          <Card className="bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Get Started with shadcn/ui
              </CardTitle>
              <CardDescription className="text-base max-w-3xl mx-auto">
                This boilerplate includes shadcn/ui's complete component library with Tailwind CSS styling.
                All components are accessible, customizable, and ready to use in your projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Component Showcase */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Button
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                  Card
                </span>
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                  Dialog
                </span>
                <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10">
                  Table
                </span>
                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                  Form
                </span>
                <span className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-700/10">
                  Input
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="hover:-translate-y-0.5 transition-transform">
                  Primary Action
                </Button>
                <Button variant="outline" size="lg" className="hover:-translate-y-0.5 transition-transform">
                  Secondary Action
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}