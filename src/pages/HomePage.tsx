import React from 'react'

/**
 * CLEAN CSS BOILERPLATE HOME PAGE
 * 
 * This demonstrates custom CSS components with Tailwind CSS styling.
 * Fast, accessible components with beautiful design using plain CSS!
 * 
 * Features:
 * - Responsive grid layout with Tailwind CSS
 * - Clean and modern design
 * - Professional landing page layout
 * - Custom CSS components
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to Your Clean CSS Application
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This boilerplate uses custom CSS components with Tailwind CSS for fast development and beautiful design.
              All components are accessible and styled with custom utilities!
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="card-header">
                <h3 className="card-title flex items-center gap-2">
                  ⚡ Blazing Fast
                </h3>
              </div>
              <div className="card-content">
                <p className="card-description">
                  Custom CSS components styled with Tailwind CSS
                  for optimal performance and developer experience.
                </p>
              </div>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="card-header">
                <h3 className="card-title flex items-center gap-2">
                  🎨 Beautiful Design
                </h3>
              </div>
              <div className="card-content">
                <p className="card-description">
                  Modern, clean design system with consistent spacing, typography, and accessible
                  components that work perfectly together.
                </p>
              </div>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="card-header">
                <h3 className="card-title flex items-center gap-2">
                  🚀 Developer First
                </h3>
              </div>
              <div className="card-content">
                <p className="card-description">
                  Full TypeScript support, copy-paste components, and customizable design tokens
                  for rapid development and easy maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Main Call to Action */}
          <div className="card">
            <div className="card-header text-center">
              <h2 className="card-title text-2xl">
                Get Started with Clean CSS
              </h2>
              <p className="card-description text-base max-w-3xl mx-auto">
                This boilerplate includes custom CSS components with Tailwind CSS styling.
                All components are accessible, customizable, and ready to use in your projects.
              </p>
            </div>
            <div className="card-content space-y-6">
              {/* Component Showcase */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="badge badge-blue">
                  Button
                </span>
                <span className="badge badge-green">
                  Card
                </span>
                <span className="badge badge-purple">
                  Dialog
                </span>
                <span className="badge badge-orange">
                  Table
                </span>
                <span className="badge badge-pink">
                  Form
                </span>
                <span className="badge badge-teal">
                  Input
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center pt-4">
                <button className="btn btn-primary btn-lg hover:-translate-y-0.5 transition-transform">
                  Primary Action
                </button>
                <button className="btn btn-outline btn-lg hover:-translate-y-0.5 transition-transform">
                  Secondary Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}