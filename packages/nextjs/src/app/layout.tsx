import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavMenu } from "@/components/nav-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js app with navigation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto py-4">
            <NavMenu />
          </div>
        </header>
        <main className="container mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
