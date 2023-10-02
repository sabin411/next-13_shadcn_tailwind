import type { Metadata } from "next";

// packages
import { ClerkProvider } from "@clerk/nextjs";

// styles
import "./globals.css";

// fonts
import { Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme.provider";
import { cn } from "@/lib/utils";
const font = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next.js + Tailwind CSS + TypeScript Starter",
    template: "%s | Next.js + Tailwind CSS + TypeScript Starter",
  },
  description: "Next.js + Tailwind CSS + TypeScript Starter",
  keywords: ["next", "tailwindcss", "typescript"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-slate-700")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
