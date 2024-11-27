import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Status } from "@/components/status";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Better Demo - Supercharge Your Development",
  description:
    "Better Demo provides cutting-edge tools and infrastructure to help you build, deploy, and scale your applications faster.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b">
              <Link className="flex items-center justify-center" href="#">
                <Zap className="h-6 w-6" />
                <span className="sr-only">Better Demo</span>
              </Link>
              <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  Features
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  Pricing
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  About
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  Contact
                </Link>
              </nav>
              <ThemeToggle />
            </header>
            <main className="flex-1">{children}</main>
            <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
              <p className="text-xs text-muted-foreground">
                © 2024 Better Demo.
              </p>
              <Status />
              <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link
                  className="text-xs hover:underline underline-offset-4"
                  href="#"
                >
                  Terms of Service
                </Link>
                <Link
                  className="text-xs hover:underline underline-offset-4"
                  href="#"
                >
                  Privacy
                </Link>
              </nav>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
