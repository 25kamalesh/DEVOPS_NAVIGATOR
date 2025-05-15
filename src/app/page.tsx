import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { tools } from '@/config/tools';
import { ChevronRight, Compass, Lightbulb, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-cyan-400 animate-text-shine">
          Welcome to DevTools Navigator
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Discover powerful DevOps tools that streamline your development lifecycle, enhance collaboration, and automate your infrastructure.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/50">
            <Link href={`/${tools[0].slug}`}>
              Explore Tools <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Why Explore These Tools?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-card transition-all_">
            <div className="p-4 bg-primary/20 rounded-full mb-4">
              <Compass className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Navigate Complexity</h3>
            <p className="text-muted-foreground">
              Understand how each tool fits into the DevOps ecosystem and solves specific challenges.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-card transition-all_">
            <div className="p-4 bg-primary/20 rounded-full mb-4">
                <Lightbulb className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Unlock Potential</h3>
            <p className="text-muted-foreground">
              Learn about real-world use cases to inspire your own projects and improve workflows.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-card transition-all_">
            <div className="p-4 bg-primary/20 rounded-full mb-4">
              <Share2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Stay Current</h3>
            <p className="text-muted-foreground">
              Keep up-to-date with industry-standard tools and best practices in software development.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Featured Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {tools.map((tool) => (
            <Link key={tool.slug} href={`/${tool.slug}`} className="group">
              <div className="flex flex-col items-center p-4 border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:scale-105">
                <Image
                  src={tool.logoUrl}
                  alt={`${tool.name} Logo`}
                  width={64}
                  height={32}
                  className="h-8 w-auto object-contain mb-3 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  data-ai-hint={tool.logoAiHint}
                />
                <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// Add this to your globals.css or a style tag if preferred, for the text shine animation
// @keyframes text-shine {
//   0% { background-position: 0% 50%; }
//   100% { background-position: 100% 50%; }
// }
// .animate-text-shine {
//   background-size: 200% auto;
//   animation: text-shine 2s linear infinite alternate;
// }

// Add these keyframes and animation class to globals.css for the text shine effect
// @layer utilities {
//   @keyframes text-shine {
//     0% { background-position: 0% 50%; }
//     100% { background-position: 100% 50%; }
//   }
//   .animate-text-shine {
//     background-size: 200% auto;
//     animation: text-shine 2s linear infinite alternate;
//   }
// }
// Make sure to re-add these to globals.css under @layer utilities or similar.
// For the purpose of this diff, they are commented out.
// They are:
// @keyframes text-shine {
//  0% { background-position: 0% 50%; }
//  100% { background-position: 100% 50%; }
// }
// .animate-text-shine {
//  background-size: 200% auto;
//  animation: text-shine 2s linear infinite alternate;
// }
// In globals.css, add:
/*
@layer utilities {
  @keyframes text-shine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  .animate-text-shine {
    background-size: 200% auto;
    animation: text-shine 3s ease-in-out infinite alternate;
  }
}
*/
