import { Link } from "react-router-dom";
import BookBuddyImage from "../../images/BookBuddy.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faCss3Alt,
  faSass,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

export default function BookBuddy() {
  return (
    <>
      <div className='main-project'>
        <header>
          <Link className='back-button' to='/work'>
            BACK
          </Link>
        </header>
        <main className='projects'>
          <section className='image-link'>
            <h1>Book Buddy</h1>
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
            </div>
            <a className='project-link' href='https://cbbookbuddy.netlify.app/'>
              <img
                src={BookBuddyImage}
                alt='book-buddy'
                style={{ width: "100%" }}
              />
              <span className='image-text'>Visit app</span>
            </a>
            <div className='project-title'>
              <p>
                Book Buddy aims to revolutionize the way users interact with
                digital books, offering a comprehensive platform where readers
                can explore, discover, and engage with a vast array of literary
                treasures. From classic novels to contemporary bestsellers, from
                fiction to non-fiction, Book Buddy promises to be a one-stop
                destination for bibliophiles of all tastes and interests.
              </p>
              <p>
                Our mission is clear: to develop a front end that not only
                showcases the richness of the library's content but also
                enhances the user journey from start to finish. With a focus on
                intuitive navigation, personalized recommendations, and
                interactive features, we're committed to creating a digital
                space where users can lose themselves in the world of
                literature.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
