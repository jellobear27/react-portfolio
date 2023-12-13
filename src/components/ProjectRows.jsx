import React from "react";
import ProjectRow from "./ProjectRow";

function ProjectRows() {
  return (
    <>
      <ProjectRow
        imgSrc={"./assets/quizapp.jpg"}
        text={"Quiz-App"}
        gitHub={"https://github.com/jellobear27/quiz-app"}
        deployed={"https://quiz.com"}
        videoLabel={"Quiz-App"} // Add videoLabel prop for Quiz-App
      />
      <ProjectRow
        imgSrc={"./assets/weather.png"}
        text={"weather-App"}
        gitHub={"https://github.com/jellobear27/5-day-weather-api"}
        deployed={"https://jellobear27.github.io/5-day-weather-api/"}
        videoLabel={"weather-App"}
      />
      <ProjectRow
        imgSrc={"./assets/Jate.png"}
        text={"PWA-App"}
        gitHub={"https://github.com/jellobear27/quiz-app"}
        deployed={"https://pwa-challenge-js-eae69d7576c3.herokuapp.com/"}
        videoLabel={"PWA-App-JATE"}
      />
      <ProjectRow
        imgSrc={"./assets/wakeup.jpg"}
        text={"wake-up"}
        gitHub={"https://github.com/crissyg923/wake-up-and-dream"}
        deployed={"https://crissyg923.github.io/wake-up-and-dream/"}
        videoLabel={"First-Group-Project"}
      />
      <ProjectRow
        imgSrc={"./assets/svglogomaker.png"}
        text={"svg-logo-maker"}
        gitHub={"https://github.com/jellobear27/svg-logo-maker"}
        deployed={""}
        videoLabel={"SVG-logo-maker"}
      />

      <ProjectRow
        imgSrc={"./assets/readme.png"}
        text={"readme-generator"}
        gitHub={"https://github.com/jellobear27/readme-generator"}
        deployed={""}
        videoLabel={"README.md-Generator"}
      />
    </>
  );
}

export default ProjectRows;
