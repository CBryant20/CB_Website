import WorkoutPic from "../../images/WelcomePage.png";
import ConnectHubPic from "../../images/ConnectHub.png";
import Books from "../../images/BookBuddy.png";
import SBBullies from "../../images/South-Bay-Bullies-Logo.png";
import Atheneum1 from "../../images/04 (Atheneum).png";

import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;

export default function AppWork() {
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
            >
              <Meta title='Do You Even Lift Bro' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt='ConnectHub' src={ConnectHubPic} />}
            >
              <Meta title='Connect Hub' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt='Book Buddy' src={Books} />}>
              <Meta title='Book Buddy' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt='South Bay Bullies' src={SBBullies} />}
            >
              <Meta title='South Bay Bullies' />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt='Atheneum1' src={Atheneum1} />}>
              <Meta title='Atheneum' />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
