import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./(Common)/_components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Footer from "./(Common)/_components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morshed - Portfolio",
  description: "Home page for morshed portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Navbar session={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
