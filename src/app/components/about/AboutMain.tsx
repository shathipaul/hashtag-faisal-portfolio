import BannerSection from "./aboutSections/Banner";
import BottomSection from "./aboutSections/Bottom";
import FounderSection from "./aboutSections/Founder";
import StorySection from "./aboutSections/Story";

const AboutMain = () => {
  return (
    <div>
      <BannerSection />
      <FounderSection />
      <StorySection />
      <BottomSection />
    </div>
  );
};

export default AboutMain;
