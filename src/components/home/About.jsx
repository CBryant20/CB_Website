import { Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "Blending Creative Design with Dynamic Development",
    content:
      "Hey there! I'm Charles Bryant, a creative professional deeply passionate about both design and development. My journey into the digital realm began in architecture, where I learned to blend creativity with structure to craft innovative  designs. Transitioning into animation, I refined my skills to bring those designs to life with fluid movement and compelling visual narratives.",
  },
  {
    key: "2",
    title:
      "Long Beach State Animation Graduate Skilled in CAD, Adobe Creative Suite, 3D Modeling, and 4D Design",
    content:
      "Graduating from Long Beach State with a Bachelor of Arts degree in animation, I've cultivated a diverse skill set. Proficient in tools like CAD, Adobe Creative Suite (Illustrator, Photoshop, After Effects), and 3D modeling software such as 3D Stu dioMAX and MAYA, I've explored various mediums to express my creativity. I've even ventured into building 4-dimensional models, pushing the boundaries of traditional design.",
  },
  {
    key: "3",
    title:
      "Web Dev Pro: JavaScript, CSS, HTML, React, Node, Express, & Flutter!",
    content:
      "In the realm of web development, I excel in JavaScript, CSS, HTML, React, Node, Express, and Flutter. I thrive on the dynamic nature of web technologies, constantly expanding my knowledge and skill set to stay ahead of the curve.",
  },
];

export default function AppAbout() {
  return (
    <>
      <div>
        <Carousel>
          {items.map((item) => {
            return (
              <div key={item.key}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
