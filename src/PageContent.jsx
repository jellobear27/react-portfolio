// Importing React and necessary custom components
import React from "react";
import Projects from "./components/Projects";
import AboutMeText from "./components/AboutMeText";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import ProjectRows from "./components/ProjectRows";

// PageContent component definition
function PageContent(props) {
  // Destructuring props to extract activePage
  const { activePage } = props;

  // Checking the activePage value to determine what content to render
  if (activePage === "about") {
    return <AboutMeText />;
  } else if (activePage === "portfolio") {
    return <ProjectRows />;
  } else if (activePage === "contact") {
    return <ContactForm />;
  } else if (activePage === "resume") {
    return <Resume />;
  } else {
    // If none of the above conditions match, return null (render nothing)
    return null;
  }
}
// Exporting PageContent as the default export
export default PageContent;
