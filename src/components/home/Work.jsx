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
    <div id='work' className='carousel'>
      <div className='titleHolder'>
        <h2>Some of My Work</h2>
      </div>
      <Row className='list' gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card className='item' hoverable style={cardStyle}>
            <Meta title='Auction Site...' />
            <Meta title='Coming Soon' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            className='item'
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
            <div className='content'>
              <h1 className='title'>Title</h1>
              <h3 className='topic'>This app is made of</h3>
            </div>
            <div className='buttons'>
              <button>Learn More</button>
            </div>
            <Meta title='Do You Even Lift Bro' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            className='item'
            hoverable
            cover={
              <img alt='ConnectHub' src={ConnectHubPic} style={imgStyle} />
            }
            onClick={() => handleProjectClick("/ConnectHub")}
            style={cardStyle}
          >
            <div className='content'>
              <h1 className='title'>Title</h1>
              <h3 className='topic'>This app is made of</h3>
            </div>
            <div className='buttons'>
              <button>Learn More</button>
            </div>
            <Meta title='Connect Hub' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            className='item'
            hoverable
            cover={<img alt='Book Buddy' src={Books} style={imgStyle} />}
            onClick={() => handleProjectClick("/BookBuddy")}
            style={cardStyle}
          >
            <div className='content'>
              <h1 className='title'>Title</h1>
              <h3 className='topic'>This app is made of</h3>
            </div>
            <div className='buttons'>
              <button>Learn More</button>
            </div>
            <Meta title='Book Buddy' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            className='item'
            hoverable
            cover={
              <img alt='South Bay Bullies' src={SBBullies} style={imgStyle} />
            }
            onClick={() => handleProjectClick("/SouthBayBullies")}
            style={cardStyle}
          >
            <div className='content'>
              <h1 className='title'>Title</h1>
              <h3 className='topic'>This app is made of</h3>
            </div>
            <div className='buttons'>
              <button>Learn More</button>
            </div>
            <Meta title='South Bay Bullies' />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            className='item'
            hoverable
            cover={<img alt='Atheneum1' src={Atheneum1} style={imgStyle} />}
            onClick={() => handleProjectClick("/Architecture")}
            style={cardStyle}
          >
            <div className='content'>
              <h1 className='title'>Title</h1>
              <h3 className='topic'>This app is made of</h3>
            </div>
            <div className='buttons'>
              <button>Learn More</button>
            </div>
            <Meta title='Atheneum' />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
