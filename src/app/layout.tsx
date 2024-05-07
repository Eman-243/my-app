"use client";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";
import Header from "../components/HeaderComponents/header";
import Footer from "../components/HeaderComponents/footer";
import Head from 'next/head' // Import the Head component
import { saveScrollPosition, loadScrollPosition } from '@/scripts/scrollPosition'; // Adjust the path based on your actual file structure
import '../styles/main.scss'; // Adjust the path based on your actual file structure

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if window is defined to ensure this runs only on the client-side
    if (typeof window !== 'undefined') {
      saveScrollPosition();
      loadScrollPosition();
    }
  }, []);

  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="mb-12">
            <Header />
          </div>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </body>

      </html>
    </>
  );

}
