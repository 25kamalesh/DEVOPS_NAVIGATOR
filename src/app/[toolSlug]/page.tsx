import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { tools, type Tool } from '@/config/tools';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  return tools.map((tool) => ({
    toolSlug: tool.slug,
  }));
}

function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export default async function ToolPage({ params }: { params: { toolSlug: string } }) {
  const tool = getToolBySlug(params.toolSlug);

  if (!tool) {
    notFound();
  }

  const { name, logoUrl, logoAiHint, tagline, description, useCases, website } = tool;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-16 md:mb-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-background p-4 rounded-lg shadow-md inline-block transform transition-all duration-500 hover:scale-105">
             <Image
                src={logoUrl}
                alt={`${name} Logo`}
                width={200}
                height={100}
                className="h-20 w-auto object-contain"
                data-ai-hint={logoAiHint}
                priority
              />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">{name}</h1>
        <p className="text-xl md:text-2xl text-primary mb-8">{tagline}</p>
        <Button asChild variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={website} target="_blank" rel="noopener noreferrer">
            Visit Official Website <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </section>

      {/* Description Section */}
      <section className="mb-12 md:mb-16">
         <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-primary text-center">About {name}</h2>
            <p className="text-lg text-card-foreground leading-relaxed whitespace-pre-line text-center">
            {description}
            </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">Real-World Use Cases</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                {useCase.icon && (
                  <div className="p-3 bg-primary/20 rounded-full mr-4">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-primary">{useCase.title}</h3>
              </div>
              <p className="text-card-foreground leading-relaxed flex-grow">{useCase.description}</p>
            </div>
          ))}
        </div>
         {useCases.length === 0 && (
            <p className="text-center text-muted-foreground text-lg">No use cases listed for this tool yet.</p>
        )}
      </section>

      <section className="mt-16 md:mt-24 text-center">
        <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/50">
          <Link href="/">
            <ArrowRight className="mr-2 h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to All Tools
          </Link>
        </Button>
      </section>
    </div>
  );
}
