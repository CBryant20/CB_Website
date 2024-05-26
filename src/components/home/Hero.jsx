import HomePagePic from "../../images/HomePagePic.png";

export default function AppHero() {
  return (
    <>
      <section className='hero'>
        <aside className='hero-text'>
          <h2>Hello, I am Charles Bryant</h2>
          <p>
            I am a Full-Stack Developer with a passion for crafting beautiful
            and user friendly experiences in web development!
          </p>
          <p>
            My professional journey began in architecture, where I learned to
            blend creativity with structure.
          </p>
          <p>
            This background shapes my role as an artistic and structured web
            developer.
          </p>
        </aside>
        <aside className='hero-pic'>
          <img src={HomePagePic} alt='Error loading image' />
        </aside>
      </section>
    </>
  );
}
