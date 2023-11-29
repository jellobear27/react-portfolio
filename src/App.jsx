import './App.css'
import './reset.css'
import MyHeader from './components/MyHeader'
function App() {

  return (
    <>
    <MyHeader />

    <section className="img-bar">
      <img src="assets/gradient.jpg" alt="funky background" />
    </section>

    <section className="card-container">
      <article className="profile-card">
        <div className="avatar-img">
          <img src="assets/avatar.JPG" alt="profile pic" />
        </div>
        <div className="title">
          <h1><strong>Janell Smith-Full Stack Developer</strong></h1>
        </div>
      </article>
    </section>

    <section id="about">
<div className="bio-container">
      <p>
        ABOUT ME: My name is Janell Smith and I am currently a student taking a bootcamp course through
        Rutgers University. I started coding 9 months ago using a free online platform. I'm inspired to 
        learn this new skill set as it will allow me to be a better asset to the companies I am currently
        a part of and I'm excited to see what new doors will open. I hope to build apps in the future that bring 
        people together and help solve the pandemic of lonleyness.
      </p>
    </div>
    </section>

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
          <a className="secondary-img-link" href="https://www.countdown.com">
            <img className="" src="assets/countdown.jpg" alt="password app" />
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
  )
}

export default App
