
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });









export default async function RootLayout({
  params: {locale},
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {




  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
       
          
         
     
            <main className="flex-1">{children}</main>
       
        
        
        
      </body>
    </html>
  );
}