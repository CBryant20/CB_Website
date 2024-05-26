import GitHubImage from "../../images/github-mark-black.png";
import LinkedInImage from "../../images/LinkedIn4.png";

import { FloatButton } from "antd";

export default function AppFooter() {
  return (
    <div className='container-fluid'>
      <div className='footer'>
        <div>
          <a href='#'>Charles Bryant</a>
        </div>
        <ul className='socials'>
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
          <div className='goTop'>
            <i className='fas fa-arrow-circle-up'></i>
          </div>
        </FloatButton.BackTop>
      </div>
    </div>
  );
}
