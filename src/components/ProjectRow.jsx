import React from "react";

function ProjectRow(props) {
  const { text, imgSrc, gitHub, deployed } = props;
  return (
    <div className="project-row">
      <img style={{ maxWidth: "250px" }} src={imgSrc} alt={text} />
      {gitHub ?  <a className="gitButton myBtn" href={gitHub}>GitHub</a> : null}
      {deployed ? <a className="depButton myBtn" href={deployed}>Deployed</a> : null}
      
    </div>
  );
}

export default ProjectRow;
