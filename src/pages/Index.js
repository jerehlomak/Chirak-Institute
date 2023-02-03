import {Navbar, Main} from "../components";
import { Courses,
  Recommended,
  InDemand,
  Professional,
  ExploreSkills,
  Program,
  Community,
  Footer,
  NextLevel,
} from "../components";

const Index = () => {
  return (
    <>
      <div>
        <Navbar />
        <Main />
      </div>

      <Courses />
      <Recommended />
      <InDemand />
      <Professional />
      <ExploreSkills />
      <Program />
      <NextLevel />
      <Community />
      <Footer />
    </>
  );
};

export default Index;
