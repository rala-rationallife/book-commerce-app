import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ogMeta, siteMeta } from "@/_lib/constants";
import { Header } from "@/_components/header";
import { Footer } from "@/_components/footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

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
      <body className={notoSansJP.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
