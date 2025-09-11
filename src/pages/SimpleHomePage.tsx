export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Dashboard
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className="h-12 bg-gray-200 rounded-lg aspect-video"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}