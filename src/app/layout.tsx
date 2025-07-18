import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import theme from '../theme';
import "./globals.css";
import Header from "@/components/navigation/header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DVCC Web App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans`}
      >
        <AppRouterCacheProvider
          options={{ key: 'css', enableCssLayer: true }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header/>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
