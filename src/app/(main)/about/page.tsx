import AboutMain from "@/components/about/AboutMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Anti-Spam Email Marketer | About Hashtag Faisal",
  description:
    "Our methods are boring, but they print money. See how I help B2B founders and agencies book qualified sales meetings without sounding like a robot.",
  keywords:
    "Faisal Ahmed, HashtagFaisal, B2B email marketer, humanoid email marketing, cold email expert, lead generation specialist, B2B sales meetings, outbound marketing expert, anti-spam email outreach",
  alternates: {
    canonical: "https://www.hashtagfaisal.com/about/",
  },
  openGraph: {
    title: "About Hashtag Faisal",
    description:
      "Faisal Ahmed, HashtagFaisal, B2B email marketer, humanoid email marketing, cold email expert, lead generation specialist, B2B sales meetings, outbound marketing expert, anti-spam email outreach",
    url: "https://www.hashtagfaisal.com/about/",
    type: "website",
  },
};

const AboutPage = () => {
  return <AboutMain />;
};

export default AboutPage;
