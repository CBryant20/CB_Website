import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import Atheneum1 from "../../images/04 (Atheneum).png";
import Atheneum2 from "../../images/05 (Atheneum).png";
import Threedsmax from "../../images/Threeds-max.png";
import Illustrator from "../../images/illustrator.png";

import { Link } from "react-router-dom";

import "./Projects.scss";

export default function Architecture() {
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
          <h1>Atheneum Case Study</h1>
          <h2>Created with:</h2>
          <div className='program-icons'>
            <div className='icon-wrapper'>
              <div className='extra-icon'>
                <img src={Threedsmax} alt='3D StudioMAX' />
              </div>
              <span className='icon-text'>3D StudioMAX</span>
            </div>
            <div className='icon-wrapper'>
              <div className='extra-icon'>
                <img src={Illustrator} alt='Adobe Illustrator' />
              </div>
              <span className='icon-text'>Adobe Illustrator</span>
            </div>
          </div>
          <img src={Atheneum1} alt='Atheneum' style={{ width: "100%" }} />

          <div className='project-title'>
            <ul>
              <li>Richard Meier's Atheneum</li>
              <li>Independent Case Study using 3D StudioMAX</li>
              <li>
                The Atheneum represents Post Modern Architecture. Meier designed
                the Atheneum to show the comparison of old style New harmony
                architecture to the Postmodern era.
              </li>
            </ul>
          </div>
        </section>
        <div className='bottom-images'>
          <img src={Atheneum2} alt='Atheneum' style={{ width: "50%" }} />
        </div>
      </main>
    </div>
  );
}
