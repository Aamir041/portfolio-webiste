import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aamir Saudagar - Backend Engineer",
  description: "",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false, // This sets user-scalable=no
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
