import AppHero from "../home/Hero";
import AppAbout from "../home/About";
import AppWork from "../home/Work";
import AppContact from "../home/Contact";

export default function AppHome() {
  return (
    <div className='main'>
      <AppHero />
      <AppAbout />
      <AppWork />
      <AppContact />
    </div>
  );
}
