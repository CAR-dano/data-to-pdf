import type { Metadata } from "next";
import { Inter, Pacifico, Poppins, Rubik } from "next/font/google";
import "./globals.css";

// Assuming Providers component exists in data-to-pdf/src/app/providers.tsx
// If not, this will cause an error and needs to be created or adjusted.
// For now, I will assume it exists or is not critical for the immediate font issue.
// If it causes an error, I will remove it or create a placeholder.

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PDF Generator",
  description: "Generate PDFs with ease using our Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rubik.variable} ${pacifico.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
