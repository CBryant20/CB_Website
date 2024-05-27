import Atheneum1 from "../../images/04 (Atheneum).png";
import Atheneum2 from "../../images/05 (Atheneum).png";
import Threedsmax from "../../images/Threeds-max.png";
import Illustrator from "../../images/illustrator.png";

import { Link } from "react-router-dom";

export default function Architecture() {
  return (
    <>
      <body className='main-project'>
        <header>
          <Link className='back-button' to='/work'>
            BACK
          </Link>
        </header>
        <main className='projects'>
          <section className='image-link'>
            <h1>Atheneum Case Study</h1>
            <h2>Created with:</h2>
            <div className='program-icons'>
              <div className='icon-wrapper'>
                <div className='extra-icon'>
                  <img src={Threedsmax} alt='Atheneum' />
                </div>
                <span className='icon-text'>3D StudioMAX</span>
              </div>
              <div className='icon-wrapper'>
                <div className='extra-icon'>
                  <img src={Illustrator} alt='Illustrator' />
                </div>
                <span className='icon-text'>Adobe Illustrator</span>
              </div>
            </div>
            <img src={Atheneum1} alt='Bullies' />

            <div className='project-title'>
              <ul>
                <li>Richard Meier's Atheneum</li>
                <li>Independent Case Study using 3D StudioMAX</li>
                <li>
                  The Atheneum represents Post Modern Architecture. Meier
                  designed the Atheneum to show the comparison of old style New
                  harmony architecture to the Postmodern era.
                </li>
              </ul>
            </div>
          </section>
          <div className='bottom-images'>
            <img src={Atheneum2} alt='Logo Sketches' />
          </div>
        </main>
      </body>
    </>
  );
}
