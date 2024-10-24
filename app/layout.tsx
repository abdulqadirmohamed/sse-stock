import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Somali Stock Exchange",
    template: "%s - Somali Stock Exchange"
  },
  description: "The Somali Stock Exchange (SSE), founded by the Somali Economic Forum (SEF), aims to attract Foreign Direct Investment (FDI) and promote private sector growth in Somalia's emerging economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />
        <div >
          {children}
          <div className="">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
