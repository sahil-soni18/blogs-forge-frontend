import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProvider/ClientProvider";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogs Forge",
  description: "Professional blog platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* SSR-safe className */}
      <body className={`${geistSans.className} ${geistMono.className}`}>
        {/* All client-only logic wrapped */}
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
