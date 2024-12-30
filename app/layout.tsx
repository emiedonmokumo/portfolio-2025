import type { Metadata } from "next";
import { Kameron, Montserrat } from "next/font/google";
import "./globals.css";
import SocialMedia from "@/components/SocialMedia";

const kameron = Kameron({
  subsets: ['latin'],
  variable: '--font-kameron'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Emiedonmokumo Dick-Boro",
  description: "Full-stack developer specializing in building scalable web applications and seamless user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kameron.variable} ${montserrat.variable} antialiased relative h-screen flex flex-col justify-center sm:flex-col-reverse`}
      >
        <div className="lg:absolute lg:right-3 sm:px-5 sm:mt-3">
          <SocialMedia />
        </div>
        {children}
      </body>
    </html>
  );
}
