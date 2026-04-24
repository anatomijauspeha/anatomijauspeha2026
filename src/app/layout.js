import { Orbitron } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spacemono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Anatomija Uspeha 2026",
  description: "Anatomija Uspeha 2026 - Train Your Brain",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spacemono.variable}`}>
      <body className="min-h-full flex flex-col font-main">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
