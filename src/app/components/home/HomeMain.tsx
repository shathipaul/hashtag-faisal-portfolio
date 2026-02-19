import Banner from "./homeSections/Banner";
import FirstLinesLibrary from "./homeSections/FirstLinesLibrary";
import LetThemBook from "./homeSections/LetThemBook";
import NoteFromFaisal from "./homeSections/NoteFromFaisal";
import OperationalFlow from "./homeSections/OperationalFlow";
import RealHumanFeedback from "./homeSections/RealHumanFeedback";
import TransparentAligned from "./homeSections/TransparentAligned";
import VocabularyShift from "./homeSections/VocabularyShift";
import WhoNeedsHumanoid from "./homeSections/WhoNeedsHumanoid";
import WhyHumanoidOutreach from "./homeSections/WhyHumanoidOutreach";
import WhyServiceFree from "./homeSections/WhyServiceFree";

const HomeMain = () => {
  return (
    <div>
      <Banner />
      <WhyHumanoidOutreach />
      <OperationalFlow />
      <TransparentAligned />
      <FirstLinesLibrary />
      <WhyServiceFree />
      <VocabularyShift />
      <RealHumanFeedback />
      <WhoNeedsHumanoid />
      <NoteFromFaisal />
      <LetThemBook />
    </div>
  );
};

export default HomeMain;
