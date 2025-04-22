import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/sections/Header";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
 

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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          calistoga.variable,
          "relative bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <NextIntlClientProvider >
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
          <div className="fixed top-0 left-0 w-full h-full bg-black/60 -z-10" />

          {/* CONTENT */}
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}