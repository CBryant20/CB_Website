import { useState } from "react";

import AppHero from "../home/Hero";
import AppAbout from "../home/About";
import AppWork from "../home/Work";
import AppContact from "../home/Contact";

export default function AppHome() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className='main'>
      {selectedProject ? (
        selectedProject
      ) : (
        <>
          <AppHero />
          <AppAbout />
          <AppWork onSelectProject={handleProjectSelect} />
          <AppContact />
        </>
      )}
    </div>
  );
}
