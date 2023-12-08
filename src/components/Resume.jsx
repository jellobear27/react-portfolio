import React from "react";

const PDFViewer = () => {
  const handleClick = () => {
    // Handle click functionality here, e.g., open the resume link
    window.open("https://drive.google.com/file/d/1trb1KhlszHakq7PkrqSQeSixSmlkmfUd/view?usp=sharing");
  };

  return (
    <div>
      <button className="resumeButton" onClick={handleClick}>
        View Resume
      </button>
    </div>
  );
};

export default PDFViewer;
