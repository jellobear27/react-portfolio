import React from "react";

function ProjectRow(props) {
  const { text, imgSrc, gitHub, deployed } = props;
  return (
    <div className="project-row">
      <img style={{ maxWidth: "250px" }} src={imgSrc} alt={text} />
      <a className="gitButton myBtn" href={gitHub}>GitHub</a>
      <a className="depButton myBtn" href={deployed}>Deployed</a>
    </div>
  );
}

export default ProjectRow;
