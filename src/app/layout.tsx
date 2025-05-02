import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script'; // ✅ Importar Script

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MyGym Palermo',
  description: 'ifts21',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* 💬 Chatbot de Tidio */}
        <Script
          src="//code.tidio.co/o9ja9zvfv5m7ehfmm4nmca4xww8ozb1n.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

