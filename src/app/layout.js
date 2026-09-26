import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/components/context/ContextProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Toast from "@/components/shared/Toast";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

export const metadata = {
  title: "SHAMSULALAMCODES",
  description: "SHAMSULALAMCODES",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme='dark'
      lang="en"
      className={`${inter.variable} ${oswald.variable} bg-black h-full antialiased`}
    >
      <body className="min-h-full max-w-7xl mx-auto flex flex-col">
        <ContextProvider>
          <Navbar />
          <main className="p-10">
            {children}
            <Toast />
          </main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
