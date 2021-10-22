import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import TechList from "./components/techList/TechList";

const App = () => {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <TechList/>
      <Contact/>
    </div>
  );
}

export default App;
