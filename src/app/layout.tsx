import theme from "@/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home page PriceMyPc",
  description: "Site to review the value of your pc",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" style={{ backgroundColor: "#c7ede8" }}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CssBaseline />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
