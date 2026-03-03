import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Playfair_Display,
  Unbounded,
} from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});
export const bitcountGridDouble = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Get Qualified Sales Meetings | Done-For-You Cold Email",
  description:
    "Done-for-you cold email outreach that actually sounds human. We handle the tech setup, copywriting, and inbox management. You close the deals.",
  keywords:
    "B2B lead generation, done-for-you cold email, pay per meeting lead generation, B2B email marketing agency, humanoid email marketing, cold outreach for SaaS, cold email for financial advisors, sales meeting booking service, email deliverability setup, HashtagFaisal",
  alternates: {
    canonical: "https://www.hashtagfaisal.com/",
  },
  openGraph: {
    title: "Get Qualified Sales Meetings",
    description:
      "Done-for-you cold email outreach that actually sounds human. We handle the tech setup, copywriting, and inbox management. You close the deals.",
    url: "https://www.hashtagfaisal.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} bg-secondary text-primary leading-normal scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
