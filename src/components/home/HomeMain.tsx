import Banner from "./homeSections/Banner";
import LetThemBook from "./homeSections/LetThemBook";
import NoteFromFaisal from "./homeSections/NoteFromFaisal";
import OperationalFlow from "./homeSections/OperationalFlow";
import RealHumanFeedback from "./homeSections/RealHumanFeedback";
import TransparentAligned from "./homeSections/TransparentAligned";
import WhoNeedsHumanoid from "./homeSections/WhoNeedsHumanoid";
import WhyHumanoidOutreach from "./homeSections/WhyHumanoidOutreach";

const HomeMain = () => {
  return (
    <div>
      <Banner />
      <WhoNeedsHumanoid />
      <WhyHumanoidOutreach />
      <OperationalFlow />
      <TransparentAligned />
      <RealHumanFeedback />
      <NoteFromFaisal />
      <LetThemBook />
    </div>
  );
};

export default HomeMain;
