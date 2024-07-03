import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Transition from "./transition";

const ubuntu = Ubuntu({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Mateus - Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-[728px]">
            <div className="min-h-screen px-3 md:px-16 mx-auto flex flex-col bg-slate-200 dark:bg-slate-900">
              <Header />
              <Transition>{children}</Transition>
            </div>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
