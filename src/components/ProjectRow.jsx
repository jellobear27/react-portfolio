import React from "react";

function ProjectRow(props) {
  const { text, imgSrc, gitHub, deployed, videoLabel } = props;
  return (
    <div className="project-row">
      <div className="image-container">
      <img style={{ maxWidth: "250px" }} src={imgSrc} alt={text} className="project-image"/>
      <div className="overlay-text">{videoLabel}</div>
      </div>
      {gitHub ?  <a className="gitButton myBtn" href={gitHub}>GitHub</a> : null}
      {deployed ? <a className="depButton myBtn" href={deployed}>Deployed</a> : null}
      
    </div>
  );
}

export default ProjectRow;
