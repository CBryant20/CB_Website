import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import AppHero from "../home/Hero";
import AppAbout from "../home/About";
import AppWork from "../home/Works";
import AppContact from "../home/Contact";

export default function AppHome() {
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();
  const blockRefs = useRef([]);

  useEffect(() => {
    if (location.state?.target) {
      document
        .querySelector(location.state.target)
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    blockRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className='main'>
      {selectedProject ? (
        selectedProject
      ) : (
        <>
          <div className='block' ref={(el) => (blockRefs.current[0] = el)}>
            <AppHero />
          </div>
          <div className='block' ref={(el) => (blockRefs.current[1] = el)}>
            <AppAbout />
          </div>
          <div className='block' ref={(el) => (blockRefs.current[2] = el)}>
            <AppWork onSelectProject={handleProjectSelect} />
          </div>
          <div className='block' ref={(el) => (blockRefs.current[3] = el)}>
            <AppContact />
          </div>
        </>
      )}
    </div>
  );
}
