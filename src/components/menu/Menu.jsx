import React, { useEffect, useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [activeLinkId, setActiveLinkId] = useState('link_1');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Define the positions of each section based on their indices
      const sectionPositions = [0, 1, 2, 3].map((index) => {
        return {
          id: `link_${index + 1}`,
          position: index * window.innerHeight, // Each section has 100vh
        };
      });

      // Define a threshold value to trigger the change midway through the sections
      const threshold = 0.4; 

      // Find the active link based on scroll position and threshold
      let activeId = 'link_1';

      for (const section of sectionPositions) {
        if (scrollPosition + window.innerHeight * threshold >= section.position) {
          activeId = section.id;
        } else {
          break;
        }
      }

      setActiveLinkId(activeId);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="menu fade-in">
      <a
        id="link_1"
        className={`link ${activeLinkId === 'link_1' ? 'link__selected' : ''}`}
        href="#one"
      >
        Landing
      </a>
      <a
        id="link_2"
        className={`link ${activeLinkId === 'link_2' ? 'link__selected' : ''}`}
        href="#two"
      >
        Skills
      </a>
      <a
        id="link_3"
        className={`link ${activeLinkId === 'link_3' ? 'link__selected' : ''}`}
        href="#three"
      >
        Projects
      </a>
      <a
        id="link_4"
        className={`link ${activeLinkId === 'link_4' ? 'link__selected' : ''}`}
        href="#four"
      >
        Contact
      </a>
    </div>
  );
}
