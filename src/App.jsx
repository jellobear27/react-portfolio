import "./App.css";
import "./reset.css";

import { useEffect, useState} from 'react'

import MyHeader from "./components/MyHeader";
import ImgBar from "./components/ImgBar";
import CardContainer from "./components/CardContainer";
import PageContent from "./PageContent";
import ContactForm from "./components/ContactForm";

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
    </>
  );
}



export default App;
