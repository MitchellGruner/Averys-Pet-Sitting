import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./styles/globals.css";
import "./styles/Navbar.scss";

import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avery's Pet Sitting",
  description: "Offering dog and cat sitting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        <div className="pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
