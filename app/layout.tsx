import type { Metadata } from "next";
import { Raleway, Mr_Dafoe } from "next/font/google";

import "./styles/globals.css";
import "./styles/navbar/NavbarMenuItems.scss";
import "./styles/navbar/OpenHamburgerMenu.scss";
import "./styles/main/MainText.scss";

import Navbar from "./components/navbar/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway',
  weight: "400"
});

const mr_dafoe = Mr_Dafoe({
  subsets: ["latin"],
  variable: '--font-mr-dafoe',
  weight: "400"
});

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
      <body className={`${raleway.variable} ${mr_dafoe.variable}`}>
        <Navbar />
        
        <div className="pt-28 bg-darkened-teal">
          {children}
        </div>
      </body>
    </html>
  );
}
