import "./App.css";
import "./reset.css";
import MyHeader from "./components/MyHeader";
import AboutMeText from "./components/AboutMeText";
import ImgBar from "./components/ImgBar";
import CardContainer from "./components/CardContainer";


function App() {
  return (
    <>
      <MyHeader />

     <ImgBar />

     <CardContainer />

     <AboutMeText />

      <section id="work">
        <div className="work-section">
          <div className="work-container">
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

      <section id="contact">
        <footer>
          <a href="tel:1234567899">Phone</a>
          <a href="mailto:test@test.com">E-Mail</a>
          <a href="http://instagram.com/beyonce">Instagram</a>
        </footer>
      </section>
    </>
  );
}

export default App;
