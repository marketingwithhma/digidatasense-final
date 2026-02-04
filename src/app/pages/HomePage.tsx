import { NewHero } from "../components/NewHero";
import { RealProblem } from "../components/RealProblem";
import { MarTechServices } from "../components/MarTechServices";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { OurProcess } from "../components/OurProcess";
import { ResultsShowcase } from "../components/ResultsShowcase";
import { CompetitiveContext } from "../components/CompetitiveContext";
import { WhereDDSFits } from "../components/WhereDDSFits";
import { Differentiators } from "../components/Differentiators";
import { PositioningClarity } from "../components/PositioningClarity";
import { WhyNotBigSIs } from "../components/WhyNotBigSIs";
import { WhenBigSIsWork } from "../components/WhenBigSIsWork";
import { IdealClientFit } from "../components/IdealClientFit";
import { AboutMe } from "../components/AboutMe";
import { BottomPositioning } from "../components/BottomPositioning";
import { NewFinalCTA } from "../components/NewFinalCTA";

export function HomePage() {
  return (
    <>
      <NewHero />
      <RealProblem />
      <MarTechServices />
      <WhyChooseUs />
      <OurProcess />
      <ResultsShowcase />
      <CompetitiveContext />
      <WhereDDSFits />
      <Differentiators />
      <PositioningClarity />
      <WhyNotBigSIs />
      <WhenBigSIsWork />
      <IdealClientFit />
      <AboutMe />
      <BottomPositioning />
      <NewFinalCTA />
    </>
  );
}