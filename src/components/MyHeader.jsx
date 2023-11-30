import React from "react";

function MyHeader(props) {
  const { setActivePage, activePage } = props;

  return (
    <header>
      <nav className="navigation-bar">
        <div className="info">
          <div
            onClick={() => { setActivePage("about") }}
            className={activePage === "about" ? "active-link" : ""}
          >
            About
          </div>
          <div
            onClick={() => { setActivePage("portfolio") }}
            className={activePage === "portfolio" ? "active-link" : ""}
          >
            Portfolio
          </div>
          <div
            onClick={() => { setActivePage("contact") }}
            className={activePage === "contact" ? "active-link" : ""}
          >
            Contact
          </div>
          <div
            onClick={() => { setActivePage("resume") }}
            className={activePage === "resume" ? "active-link" : ""}
          >
            Resume
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MyHeader;
