import { Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import WorkoutPic from "../../images/WelcomePage.png";
import ConnectHubPic from "../../images/ConnectHub.png";
import Books from "../../images/BookBuddy.png";
import SBBullies from "../../images/South-Bay-Bullies-Logo.png";
import Atheneum1 from "../../images/04 (Atheneum).png";
import "../projects/Projects.scss";

const { Meta } = Card;

export default function AppWork() {
  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path, { state: { loading: true } });
  };

  const cardStyle = {
    height: "335px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    padding: "1.1rem",
    overflow: "hidden",
  };

  const imgStyle = {
    objectFit: "cover",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div id='work' className='container'>
      <div className='titleHolder'>
        <h2>Some of My Work</h2>
      </div>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card hoverable style={cardStyle}>
            <Meta title='Auction Site...' />
            <Meta title='Coming Soon' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable
            cover={
              <img
                alt='Do You Even Lift Bro'
                src={WorkoutPic}
                style={imgStyle}
              />
            }
            onClick={() => handleProjectClick("/DoYouEvenLiftBro")}
            style={cardStyle}
          >
            <Meta title='Do You Even Lift Bro' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable
            cover={
              <img alt='ConnectHub' src={ConnectHubPic} style={imgStyle} />
            }
            onClick={() => handleProjectClick("/ConnectHub")}
            style={cardStyle}
          >
            <Meta title='Connect Hub' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable
            cover={<img alt='Book Buddy' src={Books} style={imgStyle} />}
            onClick={() => handleProjectClick("/BookBuddy")}
            style={cardStyle}
          >
            <Meta title='Book Buddy' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable
            cover={
              <img alt='South Bay Bullies' src={SBBullies} style={imgStyle} />
            }
            onClick={() => handleProjectClick("/SouthBayBullies")}
            style={cardStyle}
          >
            <Meta title='South Bay Bullies' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable
            cover={<img alt='Atheneum1' src={Atheneum1} style={imgStyle} />}
            onClick={() => handleProjectClick("/Architecture")}
            style={cardStyle}
          >
            <Meta title='Atheneum' />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
