import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]"> {/* Adjust min-h based on header/footer */}
      <AlertTriangle className="h-24 w-24 text-primary mb-8 animate-pulse" />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">404 - Page Not Found</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
        Oops! The page you're looking for doesn't seem to exist. It might have been moved or deleted.
      </p>
      <Button asChild size="lg" className="hover:shadow-lg hover:shadow-primary/50">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}
