import React from "react";
import Projects from "./components/Projects";
import AboutMeText from "./components/AboutMeText";
import ContactForm from "./components/ContactForm";
import Resume from './components/Resume'

function PageContent(props) {
  const { activePage } = props;

  if (activePage === "about") {
    return <AboutMeText />;
  } else if (activePage === "portfolio") {
    return <Projects />;
  } else if (activePage === "contact") {
    return <ContactForm />;
  } else if (activePage === "resume") {
    return <Resume />;
  } else {
    return null;
  }
}

export default PageContent;
