export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Dashboard
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className="h-12 bg-muted rounded-lg aspect-video"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}