import React from "react";

// This functional component represents the header section of the webpage
function MyHeader(props) {
  // Destructuring props to extract setActivePage and activePage from props
  const { setActivePage, activePage } = props;

  // Rendering the header with navigation links
  return (
    <header>
      <nav className="navigation-bar">
        <div className="info">
          <div
            onClick={() => {
              setActivePage("about");
            }}
            className={activePage === "about" ? "active-link" : ""}
          >
            About
          </div>
          <div
            onClick={() => {
              setActivePage("portfolio");
            }}
            className={activePage === "portfolio" ? "active-link" : ""}
          >
            Portfolio
          </div>
          <div
            onClick={() => {
              setActivePage("contact");
            }}
            className={activePage === "contact" ? "active-link" : ""}
          >
            Contact
          </div>
          <div
            onClick={() => {
              setActivePage("resume");
            }}
            className={activePage === "resume" ? "active-link" : ""}
          >
            Resume
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MyHeader; // Exporting the MyHeader component for use in other parts of the application
