import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutPic from "../../images/Do_You_Lift.png";
import ConnectHubPic from "../../images/Connect.png";
import Books from "../../images/Book_Buddy.png";
import SBBullies from "../../images/South-Bay-Bullies-Logo.png";
import Atheneum1 from "../../images/04 (Atheneum).png";
import "../projects/Projects.scss";

export default function AppWork() {
  const navigate = useNavigate();

  useEffect(() => {
    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");
    const carouselDom = document.querySelector(".carousel");
    const listItemDom = document.querySelector(".carousel .list");
    const thumbnailDom = document.querySelector(".carousel .thumbnail");

    const timeRunning = 500;
    const timeAutoNext = 9000;
    let runTimeOut;
    let runAutoRun = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      const itemSlider = document.querySelectorAll(".carousel .list .item");
      const itemThumbnail = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        itemThumbnail[0].classList.add("hidden");
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        setTimeout(() => itemThumbnail[0].classList.remove("hidden"), 0);
        carouselDom.classList.add("next");
      } else {
        itemThumbnail[itemThumbnail.length - 1].classList.add("hidden");
        const positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        setTimeout(
          () =>
            itemThumbnail[itemThumbnail.length - 1].classList.remove("hidden"),
          0
        );
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runAutoRun);
      runAutoRun = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    if (nextDom && prevDom) {
      nextDom.onclick = () => showSlider("next");
      prevDom.onclick = () => showSlider("prev");
    }
  }, []);

  const handleProjectClick = (path) => {
    navigate(path, { state: { loading: true } });
  };

  const projects = [
    {
      img: WorkoutPic,
      title: "Do You Even Lift Bro",
      topic: "Fitness app",
      desc: "This app was created to keep track of food journal entries and recommended workout programs based on difficulty level.",
      path: "/DoYouEvenLiftBro",
      link: "https://do-you-even-lift-bro.onrender.com/",
    },
    {
      img: ConnectHubPic,
      title: "ConnectHub",
      topic: "Messaging app",
      desc: "Connect Hub is a web-based application designed for communication between users and admin. It serves as a platform where users can create accounts, log in, and send text messages.",
      path: "/ConnectHub",
      link: "https://connecthub-19gm.onrender.com/",
    },
    {
      img: Books,
      title: "Book Buddy",
      topic: "Book Reserving app",
      desc: "Book Buddy aims to revolutionize the way users interact with digital books, offering a comprehensive platform where readers can explore, discover, and engage with a vast array of literary treasures.",
      path: "/BookBuddy",
      link: "https://cbbookbuddy.netlify.app/",
    },
    {
      img: SBBullies,
      title: "South Bay Bullies",
      topic: "Hockey Team Logo",
      desc: "This logo was created for a hockey team that's tough on the ice and does not let anyone push them around.",
      path: "/SouthBayBullies",
    },
    {
      img: Atheneum1,
      title: "Atheneum",
      topic: "Architecture Case Study",
      desc: "Atheneum Independent Case Study using 3D StudioMAX The Atheneum represents Post Modern Architecture.",
      path: "/Architecture",
    },
  ];

  const rearrangedProjects = [...projects.slice(1), projects[0]];

  return (
    <div id='work' className='container'>
      <div className='carousel'>
        <div className='list'>
          {projects.map((project, index) => (
            <div key={index} className='item'>
              <img alt={project.title} src={project.img} />
              <div className='content'>
                <h1 className='title'>{project.title}</h1>
                <h3 className='topic'>{project.topic}</h3>
                <p className='desc'>{project.desc}</p>
                <div className='buttons'>
                  <button
                    className='button'
                    onClick={() => handleProjectClick(project.path)}
                  >
                    See More
                  </button>
                  {project.link && (
                    <button
                      className='button'
                      onClick={() => (window.location.href = project.link)}
                    >
                      Visit App
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='thumbnail'>
          {rearrangedProjects.map((project, index) => (
            <div key={index} className='item'>
              <img src={project.img} alt={project.title} />
              <div className='content'>
                <div className='title'>{project.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='arrows'>
          <button id='prev'>&lt;</button>
          <button id='next'>&gt;</button>
        </div>
        <div className='time'></div>
      </div>
    </div>
  );
}
