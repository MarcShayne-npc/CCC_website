import "./components/FontawesomeIcons"
import Nav from './components/Navigation';
import Slogan from './components/Slogan';
import Awareness from './components/Awareness';
import Description from "./components/Description";
import SevenR from "./components/SevenR";
import Posters from "./components/Posters"
import SingleUse from "./components/SingleUse";
import { Events } from "./components/Events";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Nav />
      <Slogan />
      <Awareness />
      <Description />
      <SevenR />
      <Posters />
      <SingleUse />
      <Events />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
