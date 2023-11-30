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
      />
      <ProjectRow
        imgSrc={"./assets/weather.png"}
        text={"weather-App"}
        gitHub={"https://github.com/jellobear27/5-day-weather-api"}
        deployed={"https://jellobear27.github.io/5-day-weather-api/"}
      />
      <ProjectRow
        imgSrc={"./assets/Jate.png"}
        text={"PWA-App"}
        gitHub={"https://github.com/jellobear27/quiz-app"}
        deployed={"https://pwa-challenge-js-eae69d7576c3.herokuapp.com/"}
      />
      <ProjectRow
        imgSrc={"./assets/quizapp.jpg"}
        text={"Quiz-App"}
        gitHub={"https://github.com/jellobear27/quiz-app"}
        deployed={"https://quiz.com"}
      />
      <ProjectRow
        imgSrc={"./assets/weather.png"}
        text={"weather-App"}
        gitHub={"https://github.com/jellobear27/5-day-weather-api"}
        deployed={"https://jellobear27.github.io/5-day-weather-api/"}
      />
      <ProjectRow
        imgSrc={"./assets/Jate.png"}
        text={"PWA-App"}
        gitHub={"https://github.com/jellobear27/quiz-app"}
        deployed={"https://pwa-challenge-js-eae69d7576c3.herokuapp.com/"}
      />
    </>
  );
}

export default ProjectRows;
