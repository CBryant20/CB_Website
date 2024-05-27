import GitHubImage from "../../images/github-mark-white.png";
import LinkedInImage from "../../images/LinkedIn4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { FloatButton } from "antd";

export default function AppFooter() {
  return (
    <div className='container'>
      <div className='footer'>
        <div className='logo'>
          <a href='#'>Charles Bryant</a>
        </div>
        <ul className='icons'>
          <li>
            <a href='https://www.linkedin.com/in/charleswbryant/'>
              <img src={LinkedInImage} alt='LinkedIn Icon' />
            </a>
          </li>
          <li>
            <a href='https://github.com/CBryant20'>
              <img src={GitHubImage} alt='GitHub Icon' />
            </a>
          </li>
          <li>
            <a href='https://connecthub-19gm.onrender.com/'>
              <span className='material-symbols-outlined'>add_comment</span>
            </a>
          </li>
        </ul>
        <div className='copyright'>Copyright &copy; 2024 CB</div>
        <FloatButton.BackTop>
          <div className='go-top'>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </FloatButton.BackTop>
      </div>
    </div>
  );
}
