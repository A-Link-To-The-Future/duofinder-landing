import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DuoFinder - Find Your Perfect League Duo",
  description: "Smart matchmaking for League of Legends players. Match with compatible duos based on role, rank, and champion synergy.",
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