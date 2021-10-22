import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import TechList from "./components/techList/TechList";

const App = () => {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <TechList/>
    </div>
  );
}

export default App;
