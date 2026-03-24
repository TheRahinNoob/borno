import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamjid Borno | Portfolio",
  description:
    "Modern web developer building premium, high-performance digital experiences.",
};

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