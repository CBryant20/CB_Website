import WorkoutPic from "../../images/WelcomePage.png";
import SchemaDiagram from "../../images/SchemaDiagram.png";
import Postman from "../../images/Postman2.png";
import Express from "../../images/Express.png";
import Prisma from "../../images/Prisma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faCss3Alt,
  faSass,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Projects.scss";

export default function DoYouEvenLiftBro() {
  return (
    <div className='main-project'>
      <header>
        <Link className='back-button' to='/'>
          BACK
        </Link>
      </header>
      <main className='projects'>
        <section className='image-link'>
          <h1>Do You Even Lift Bro</h1>
          <h2>Created with:</h2>
          <div className='program-icons'>
            <div className='icon-wrapper'>
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#FFD43B" }}
                size='2xl'
                className='icon'
              />
              <span className='icon-text'>JavaScript</span>
            </div>
            <div className='icon-wrapper'>
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: "#74C0FC" }}
                size='2xl'
                className='icon'
              />
              <span className='icon-text'>React</span>
            </div>
            <div className='icon-wrapper'>
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{ color: "#008efa" }}
                size='2xl'
                className='icon'
              />
              <span className='icon-text'>CSS</span>
            </div>
            <div className='icon-wrapper'>
              <FontAwesomeIcon
                icon={faSass}
                style={{ color: "#c155c3" }}
                size='2xl'
                className='icon'
              />
              <span className='icon-text'>SCSS</span>
            </div>
            <div className='icon-wrapper'>
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ color: "#f75b18" }}
                size='2xl'
                className='icon'
              />
              <span className='icon-text'>HTML</span>
            </div>
            <div className='icon-wrapper'>
              <div className='extra-icon'>
                <img src={Express} alt='Express' />
              </div>
              <span className='icon-text'>Express</span>
            </div>
            <div className='icon-wrapper'>
              <div className='extra-icon'>
                <img src={Prisma} alt='Prisma' />
              </div>
              <span className='icon-text'>Prisma ORM</span>
            </div>
            <div className='icon-wrapper'>
              <div className='extra-icon'>
                <img src={Postman} alt='Postman' />
              </div>
              <span className='icon-text'>Postman</span>
            </div>
          </div>
          <a
            className='project-link'
            href='https://do-you-even-lift-bro.onrender.com/'
          >
            <img
              src={WorkoutPic}
              alt='Do You Even Lift Bro?'
              style={{ width: "100%" }}
            />
            <span className='image-text'>Visit app</span>
          </a>
          <div className='project-title'>
            <ul>
              <li>Fitness app</li>
              <li>
                This app was created to keep track of food journal entries and
                recommended workout programs based on difficulty level.
              </li>
              <li>
                A user registers and after logging in will be prompted to choose
                a workout based on the level of difficulty they would like to
                do.
              </li>
              <li>
                Each difficulty has a name, description, video associated with
                the workout, recommended sets and reps, and a prompt to enter
                the users reps per set.
              </li>
              <li>
                The users entered reps will be stored and shown at the bottom of
                the exercise pages for the user.
              </li>
              <li>
                Only the users entered exercises data will show for the user.
              </li>
              <li>
                The food journal has input fields for a food entry and
                timestamp.
              </li>
              <li>
                Food journal entries will display for the user at the bottom of
                the page and give an option to delete an entry.
              </li>
            </ul>
          </div>
        </section>
        <div className='bottom-images'>
          <img src={SchemaDiagram} alt='Schema Diagram' />
        </div>
      </main>
    </div>
  );
}
