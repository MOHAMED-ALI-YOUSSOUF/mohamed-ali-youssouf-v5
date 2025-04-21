import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/sections/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          calistoga.variable,
          "relative bg-gray-900  text-white antialiased font-sans"
        )}
      >
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/10.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="fixed top-0 left-0 w-full h-full bg-black/60  -z-10" />


        {/* CONTENT */}
        <Header />
        {children}
      </body>
    </html>
  );
}
