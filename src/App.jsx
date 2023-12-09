// Importing necessary CSS files
import "./App.css";
import "./reset.css";

// Importing required functionalities from React
import { useEffect, useState } from "react";

// Importing custom components
import MyHeader from "./components/MyHeader";
import ImgBar from "./components/ImgBar";
import CardContainer from "./components/CardContainer";
import PageContent from "./PageContent";
import Footer from "./components/Footer";

// Importing Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Defining state using React Hooks - activePage will hold the current active page
  const [activePage, setActivePage] = useState("about");

  // Using useEffect hook to log the activePage whenever it changes
  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  // Rendering the main structure of the application
  return (
    <>
      <MyHeader activePage={activePage} setActivePage={setActivePage} />
      <ImgBar />
      <CardContainer />
      <PageContent activePage={activePage} />
      <Footer />
    </>
  );
}

// Exporting the App component as the default export
export default App;
