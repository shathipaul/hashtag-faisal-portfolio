import HowItWorks from "@/components/howItWorks/HowItWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 10-Step Cold Email Machine | Hashtag Faisal",
  description:
    "Stop working for your leads and make them work for you. See the exact 10-step humanoid email machine we use to put qualified meetings on your calendar.",
  keywords:
    "cold email strategy, 10-step lead gen system, B2B email outreach machine, outbound infrastructure, domain warm-up, ICP targeting, inbox management, predictable sales pipeline, humanoid copywriting, B2B lead generation process",
  alternates: {
    canonical: "https://www.hashtagfaisal.com/how-it-works/",
  },
  openGraph: {
    title: "The 10-Step Cold Email Machine",
    description:
      "cold email strategy, 10-step lead gen system, B2B email outreach machine, outbound infrastructure, domain warm-up, ICP targeting, inbox management, predictable sales pipeline, humanoid copywriting, B2B lead generation process",
    url: "https://www.hashtagfaisal.com/how-it-works/",
    type: "website",
  },
};

const howItWorks = () => {
  return <HowItWorks />;
};

export default howItWorks;
