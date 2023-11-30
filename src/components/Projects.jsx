import React from "react";

function Projects() {
  return (
    <section id="projects">
      <div className="project-section">
        <div className="project-container">
         
          

          <div className="secondary-img">
            
            <a className="secondary-img-link" href="https://pwa-challenge-js-eae69d7576c3.herokuapp.com/">
              <img className="" src="./assets/Jate.png" alt="jate" />
            </a>
          </div>
          <div className="secondary-img">
            <a className="secondary-img-link" href="https://github.com/jellobear27/svg-logo-maker">
              <img className="" src="assets/svglogomaker.jpg" alt="logoMaker" />
            </a>
            <a className="secondary-img-link" href="https://www.countdown.com">
              <img className="" src="./assets/readme.png" alt="password app" />
            </a>
          </div>
          <div className="main-img">
            <a href="https://jellobear27.github.io/quiz-app/">
              <img src="./assets/project-1.jpg" alt="quiz-img" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
