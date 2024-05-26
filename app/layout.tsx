import type { Metadata } from "next";
import { Raleway, Mr_Dafoe } from "next/font/google";

import "./styles/globals.css";
import "./styles/navbar/NavbarMenuItems.scss";
import "./styles/navbar/OpenHamburgerMenu.scss";
import "./styles/main/MainText.scss";
import "./styles/about/About.scss";
import "./styles/testimonials/Testimonials.scss";
import "./styles/services/Services.scss";
import "./styles/contact/Contact.scss";
import "./styles/footer/Footer.scss";
import "./styles/Header.scss";
import "./styles/dog/Dog.scss";
import "./styles/dog/PhotoCallout.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${raleway.variable} ${mr_dafoe.variable}`}>
        <Navbar />
        
        <div id="main" className="pt-24">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
