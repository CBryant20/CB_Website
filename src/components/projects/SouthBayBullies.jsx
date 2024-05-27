import SBBullies from "../../images/South-Bay-Bullies-Logo.png";

import Illustrator from "../../images/illustrator.png";
import Sketches from "../../images/South-Bay-Bullies-Sketches.png";

import { Link } from "react-router-dom";

import "./Projects.scss";

export default function SouthBayBullies() {
  return (
    <>
      <body className='main-project'>
        <header>
          <Link className='back-button' to='/'>
            BACK
          </Link>
        </header>
        <main className='projects'>
          <section className='image-link'>
            <h1>South Bay Bullies Logo</h1>
            <h2>Created with:</h2>
            <div className='program-icons'>
              <div className='icon-wrapper'>
                <div className='extra-icon'>
                  <img src={Illustrator} alt='Illustrator' />
                </div>
                <span className='icon-text'>Adobe Illustrator</span>
              </div>
            </div>
            <img src={SBBullies} alt='Bullies' />

            <div className='project-title'>
              <ul>
                <li>Logo</li>
                <li>
                  This logo was created for a hockey team that's tough on the
                  ice and does not let anyone push them around. Inspired by the
                  team captain's dog, Tucker, who looks like a tough dog but is
                  one of the nicest dog's you will ever meet, but the other
                  teams do not need to know that!
                </li>
              </ul>
            </div>
          </section>
          <div className='bottom-images'>
            <img src={Sketches} alt='Logo Sketches' />
          </div>
        </main>
      </body>
    </>
  );
}
