import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import ConnectHubPic from "../../images/ConnectHub.png";
import ChatImage from "../../images/ConnectHubPhone.png";
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

export default function ConnectHub() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.loading) {
      setTimeout(() => setLoading(false), 1500);
    } else {
      setLoading(false);
    }
  }, [location.state]);

  if (loading) {
    return (
      <div className='loading-overlay'>
        <div className='loading-box'>
          <Spin size='large' />
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className='main-project'>
      <header>
        <Link className='back-button' to='/'>
          BACK
        </Link>
      </header>
      <main className='projects'>
        <section className='image-link'>
          <h1>Connect Hub</h1>
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
            href='https://connecthub-19gm.onrender.com/'
          >
            <img
              src={ConnectHubPic}
              alt='Connect Hub'
              style={{ width: "100%" }}
            />
            <span className='image-text'>Visit app</span>
          </a>
          <div className='project-title'>
            <p>
              Connect Hub is a web-based application designed for communication
              between users and admin. It serves as a platform where users can
              create accounts, log in, and send text messages. The app combines
              design with secure communication, providing users with a way to
              interact with designated personnel.
            </p>
            <ul>
              <h3>Key Features</h3>
              <li>User Authentication</li>
              <li>Messaging System</li>
              <li>User-Friendly Interface</li>
              <li>Message History</li>
              <li>Admin Controls</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </section>
        <div className='bottom-images'>
          <img src={ChatImage} alt='Connect Hub on phone' />
        </div>
      </main>
    </div>
  );
}
