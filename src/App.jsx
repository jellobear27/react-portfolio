import "./App.css";
import "./reset.css";

import { useEffect, useState} from 'react'

import MyHeader from "./components/MyHeader";
import ImgBar from "./components/ImgBar";
import CardContainer from "./components/CardContainer";
import PageContent from "./PageContent";
import ContactForm from "./components/ContactForm";
import Resume from "./components/resume";
import Footer from "./components/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState("about");

  useEffect(() => {
    console.log(activePage)
  }, [activePage])
  

  return (
    <>
      <MyHeader activePage={activePage} setActivePage={setActivePage}/>
      <ImgBar />
      <CardContainer />
      <PageContent activePage={activePage}/>
      <Footer />
    </>
  );
}



export default App;
