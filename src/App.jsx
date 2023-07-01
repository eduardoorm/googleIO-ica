import "./App.css";
import About from "./components/About/About";
import Benefit from "./components/Benefit/Benefit";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InformationBar from "./components/InformationBar/InformationBar";
import Organizer from "./components/Organizers/Organizer";
import { Place } from "./components/Place/Place";
import { Registration } from "./components/Registration/Registration";
import Schedule from "./components/Schedule/Schedule";
import Speaker from "./components/Speaker/Speaker";
import Sponsor from "./components/Sponsor/Sponsor";
import Theme from "./components/Theme/Theme";
import Tweet from "./components/Tweet/Tweet";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Carousel></Carousel>
      <Schedule />
      <Place />
      <InformationBar />

      <Benefit />
      <Tweet />
      <Registration />
      <Organizer />

      <Sponsor />
      <Footer />
    </div>
  );
}

export default App;
