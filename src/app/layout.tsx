import type { Metadata } from 'next';
import { Geist, Geist_Mono, Mulish, Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: 'Car Dealer Website',
  description: 'A sick car dealer website with AI.',
};

const mulish = Mulish({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased overscroll-none bg-background',
          roboto.variable,
          mulish.variable
        )}
      >
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Toaster />
      </body>
    </html>
  );
}

/* @import 'tailwindcss';
/*
  ---break---
*/
/* @custom-variant dark (&:is(.dark *));

@theme {
  --font-heading:
    var(--font-heading), ui-serif, Georgia, Cambria, 'Times New Roman', Times,
    serif;
  --font-body:
    var(--font-body), ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));

  --color-primary-800: #081a2b;
  --color-primary-900: #040f19;
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));

  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));

  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));

  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));

  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));

  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));

  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));

  --radius-xl: calc(var(--radius) + 4px);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
  --animate-slide-out: slideOut 0.5s forwards;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
  @keyframes keyframes {
    slide-out {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-10px);
      }
      100% {
        transform: translateX(100vw);
      }
    }
  }
}


@layer base {
  :root {
    --destructive-foreground: 0 0% 100%;
    --secondary-foreground: 210 20% 10%;
    --popover-foreground: 210 20% 10%;
    --primary-foreground: 0 0% 100%;
    --accent-foreground: 0 0% 100%;
    --muted-foreground: 210 20% 10%;
    --card-foreground: 210 20% 10%;
    --destructive: 0 80% 60%;
    --background: 210 20% 96%;
    --foreground: 210 20% 10%;
    --secondary: 40 90% 60%;
    --popover: 210 10% 86%;
    --primary: 210 70% 50%;
    --border: 210 10% 59%;
    --accent: 0 70% 50%;
    --muted: 210 10% 86%;
    --input: 210 10% 63%;
    --card: 210 20% 96%;
    --ring: 210 70% 50%;
    --radius: 0.5rem;
  }

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }

  body {
    @apply bg-background text-foreground font-body;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading;
  }
}

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

.custom-select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='gray'><path d='m7 10l5 5 5-5z' /> </svg>")
    no-repeat;
  background-position: right 0px center;
}

/*
  ---break---
*/

/* @layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}  */
