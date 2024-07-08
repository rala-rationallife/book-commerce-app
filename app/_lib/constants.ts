export const siteMeta = {
  siteTitle: "T-Commerce",
  siteDesc: "有料記事販売サイト",
  siteUrl: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  siteLocale: "ja_JP",
  siteIcon: "/favicon.png",
  siteImg: "/next.svg",
  sitePub: "2024-07-09T08:00:00+08:00",
};

const { siteTitle, siteDesc, siteUrl, siteLocale, siteImg } = siteMeta;

export const ogMeta = {
  title: siteTitle,
  description: siteDesc,
  url: siteUrl,
  siteName: siteTitle,
  type: "website",
  locale: siteLocale,
  images: [
    {
      url: `${siteUrl}${siteImg}`,
    },
  ],
};
