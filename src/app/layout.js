import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/components/context/ContextProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

export const metadata = {
  title: "B14A6",
  description: "SHAMSULALAMCODES",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme='dark'
      lang="en"
      className={`${inter.variable} ${oswald.variable} bg-black h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContextProvider>
          <Navbar />
          {children}
        </ContextProvider>
        <Footer />
      </body>
    </html>
  );
}
