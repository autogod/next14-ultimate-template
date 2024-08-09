import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/common/Provider";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "어나더 포토 | Another Photo",
  description: "스톡 이미지의 새로운 경험",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Providers>
        <body className={`${inter.className}`}>
          <main className="min-h-screen w-full flex flex-col items-center bg-slate-300">
            <Navbar />
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
