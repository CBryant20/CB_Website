import WorkoutPic from "../../images/WelcomePage.png";
import ConnectHubPic from "../../images/ConnectHub.png";
import Books from "../../images/BookBuddy.png";
import SBBullies from "../../images/South-Bay-Bullies-Logo.png";
import Atheneum1 from "../../images/04 (Atheneum).png";

import DoYouEvenLiftBro from "../projects/DoYouEvenLiftBro";
import ConnectHub from "../projects/ConnectHub";
import BookBuddy from "../projects/BookBuddy";
import SouthBayBullies from "../projects/SouthBayBullies";
import Architecture from "../projects/Architecture";

import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;

export default function AppWork({ onSelectProject }) {
  const handleProjectClick = (project) => {
    onSelectProject(project);
  };

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h2>Work</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt='Do You Even Lift Bro' src={WorkoutPic} />}
              onClick={() => handleProjectClick(<DoYouEvenLiftBro />)}
            >
              <Meta title='Do You Even Lift Bro' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt='ConnectHub' src={ConnectHubPic} />}
              onClick={() => handleProjectClick(<ConnectHub />)}
            >
              <Meta title='Connect Hub' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt='Book Buddy' src={Books} />}
              onClick={() => handleProjectClick(<BookBuddy />)}
            >
              <Meta title='Book Buddy' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt='South Bay Bullies' src={SBBullies} />}
              onClick={() => handleProjectClick(<SouthBayBullies />)}
            >
              <Meta title='South Bay Bullies' />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt='Atheneum1' src={Atheneum1} />}
              onClick={() => handleProjectClick(<Architecture />)}
            >
              <Meta title='Atheneum' />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
