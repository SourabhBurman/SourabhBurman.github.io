import type { Metadata } from "next";
import { satoshiRegular } from "@/fonts/font";
import { Provider } from "@/components/Provider";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Scroll from "@/components/Scroll";
import { person } from "@/config/person";

const BASE_URL = "https://sourabhburman.github.io";

export const metadata: Metadata = {
  title: {
    default: `${person.firstName} ${person.lastName} — ${person.tagline}`,
    template: `%s — ${person.firstName} ${person.lastName}`,
  },
  description: `${person.firstName} ${person.lastName}'s portfolio — ${person.tagline}. ${person.heroBio}`,
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  keywords: [
    person.tagline,
    "portfolio",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "UI design",
    person.firstName,
    person.lastName,
  ],
  authors: [{ name: `${person.firstName} ${person.lastName}`, url: person.socials.github }],
  creator: `${person.firstName} ${person.lastName}`,
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: `${person.firstName} ${person.lastName} — ${person.tagline}`,
    description: `${person.firstName} ${person.lastName}'s portfolio — ${person.tagline}. ${person.heroBio}`,
    siteName: `${person.firstName} ${person.lastName}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.firstName} ${person.lastName} — ${person.tagline}`,
    description: person.heroBio,
    creator: `@${person.firstName.toLowerCase()}${person.lastName.toLowerCase()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshiRegular.className} scrollbar scrollLight dark:scrollDark duration-300 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText`}
        suppressHydrationWarning
      >
        <LenisScroll>
          {/* GSAP SCROLLTRIGGER */}
          <Scroll>
            {/* ENABLES DARK AND LIGHT MODE */}
            <Provider>
              <div>{children}</div>
            </Provider>
          </Scroll>
        </LenisScroll>
      </body>
    </html>
  );
}
