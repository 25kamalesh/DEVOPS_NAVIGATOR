import Link from "next/link";
import { tools } from "@/config/tools";
import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Rocket className="h-7 w-7 text-primary transition-transform group-hover:rotate-[15deg] group-hover:scale-110" />
              <span className="font-bold text-xl hover:text-primary transition-colors">
                DevTools Navigator
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your guide to essential DevOps tools.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Tools</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">About</h3>
             <p className="text-sm text-muted-foreground">
              This website provides information about popular DevOps tools, their uses, and official resources.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevTools Navigator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
