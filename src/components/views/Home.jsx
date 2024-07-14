import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import AppHero from "../home/Hero";
import AppAbout from "../home/About";
import AppWork from "../home/Works";
import AppContact from "../home/Contact";

export default function AppHome() {
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.target) {
      document
        .querySelector(location.state.target)
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className='main'>
      {selectedProject ? (
        selectedProject
      ) : (
        <>
          <div className='block'>
            <AppHero />
          </div>
          <div className='block'>
            <AppAbout />
          </div>
          <div className='block'>
            <AppWork onSelectProject={handleProjectSelect} />
          </div>
          <div className='block'>
            <AppContact />
          </div>
        </>
      )}
    </div>
  );
}
