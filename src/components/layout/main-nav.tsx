'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tools } from '@/config/tools';
import { cn } from '@/lib/utils';
import { Rocket } from 'lucide-react';

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Link href="/" className="flex items-center space-x-2 mr-6 group">
        <Rocket className="h-7 w-7 text-primary transition-transform group-hover:rotate-[15deg] group-hover:scale-110" />
        <span className="font-bold text-xl hover:text-primary transition-colors">
          DevTools Navigator
        </span>
      </Link>
      {tools.map((tool) => (
        <Link
          key={tool.slug}
          href={`/${tool.slug}`}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === `/${tool.slug}` ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {tool.name}
        </Link>
      ))}
    </nav>
  );
}
