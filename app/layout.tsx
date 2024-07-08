import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ogMeta, siteMeta } from "@/_lib/constants";

const inter = Inter({ subsets: ["latin"] });

const { siteTitle, siteDesc, siteUrl, siteIcon } = siteMeta;

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDesc,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...ogMeta,
    title: {
      template: `%s | ${siteTitle}`,
      default: siteTitle,
    },
  },
  icons: {
    icon: siteIcon,
    apple: siteIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
