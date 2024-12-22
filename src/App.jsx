import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Roadmap from "./sections/Roadmap";
import Tokenomics from "./sections/Tokenomics";

const App = () => {
  return (
    <div>
      <Hero />
      <div className="">
        <Tokenomics />
        <Roadmap />
        <Footer />
      </div>
    </div>
  );
};

export default App;
