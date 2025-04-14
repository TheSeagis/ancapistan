import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ancapistan.org - Your Comprehensive Anarcho-Capitalism Resource',
  description: 'A comprehensive resource for understanding Anarcho-Capitalism: principles, theory, history, key figures, applications, and criticisms.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            background-color: #1A1A1A !important;
            color: white !important;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #FFD700 !important;
          }
          a {
            color: #FFD700 !important;
          }
          a:hover {
            text-decoration: underline !important;
          }
          .navbar {
            background-color: #1A1A1A !important;
            border-bottom: 1px solid #FFD700 !important;
          }
        `}} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
