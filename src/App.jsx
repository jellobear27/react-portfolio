import "./App.css";
import "./reset.css";
import MyHeader from "./components/MyHeader";
import AboutMeText from "./components/AboutMeText";
import ImgBar from "./components/ImgBar";
import CardContainer from "./components/CardContainer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <MyHeader />

      <ImgBar />

      <CardContainer />

      <AboutMeText />

      <Projects />

      <Contact />
    </>
  );
}

export default App;
