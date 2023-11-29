import React from 'react'

function Projects() {
  return (
    <section id="projects">
    <div className="project-section">
      <div className="project-container">
        <div className="main-img">
          <a href="https://quiz.com">
            <img src="assets/quiz.jpg" alt="quiz-img" />
          </a>
        </div>

        <div className="secondary-img">
          <a className="secondary-img-link" href="https://weather.com">
            <img className="" src="assets/weather.jpg" alt="workday app" />
          </a>
          <a
            className="secondary-img-link"
            href="https://www.countdown.com"
          >
            <img
              className=""
              src="assets/countdown.jpg"
              alt="password app"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects