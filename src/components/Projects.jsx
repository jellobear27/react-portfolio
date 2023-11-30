import React from "react";

function Projects() {
  return (
    <section id="projects">
      <div className="project-section">
        <div className="project-container">
          <div className="main-img">
            <a href="https://quiz.com">
              <img src="./assets/quizapp.jpg" alt="quiz-img" />
            </a>
          </div>

          <div className="secondary-img">
            <a className="secondary-img-link" href="https://weather.com">
              <img className="" src="assets/weather.jpg" alt="weather app" />
            </a>
            <a className="secondary-img-link" href="https://www.countdown.com">
              <img className="" src="./assets/Jate.png" alt="password app" />
            </a>
          </div>
          <div className="secondary-img">
            <a className="secondary-img-link" href="https://weather.com">
              <img className="" src="assets/project-1.jpg" alt="weather app" />
            </a>
            <a className="secondary-img-link" href="https://www.countdown.com">
              <img className="" src="./assets/readme.png" alt="password app" />
            </a>
          </div>
          <div className="main-img">
            <a href="https://quiz.com">
              <img src="./assets/project-1.jpg" alt="quiz-img" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
