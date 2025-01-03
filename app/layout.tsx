import type { Metadata } from "next";
import { Kameron, Montserrat } from "next/font/google";
import "./globals.css";
import SocialMedia from "@/components/SocialMedia";
import NavBar from "@/components/NavBar";

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
  openGraph: {
    title: "Emiedonmokumo Dick-Boro",
    description: "Full-stack developer specializing in building scalable web applications and seamless user experiences.",
    url: `${process.env.BASE_URL}`, // Add the URL of your site
    images: [
      {
        url: `${process.env.BASE_URL}/localhost_3000_.png`, // Add the URL of the image you want to use
        alt: "Emiedonmokumo Dick-Boro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emiedonmokumo Dick-Boro",
    description: "Full-stack developer specializing in building scalable web applications and seamless user experiences.",
    images: `${process.env.BASE_URL}/localhost_3000_.png`, // Add the same URL of the image here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kameron.variable} ${montserrat.variable} antialiased h-screen lg:px-16 sm:px-5`}
      >
        <header className="mb-32">
          <NavBar />
        </header>
        <div className="relative flex flex-col justify-center sm:flex-col-reverse">
          <div className="lg:absolute lg:right-3 sm:px-5 sm:mt-3">
            <SocialMedia />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
