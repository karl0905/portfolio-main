import React, { useEffect, useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [activeLinkId, setActiveLinkId] = useState('link_1');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Definer positionerne fra hver section
      const sectionPositions = [0, 1, 2, 3].map((index) => {
        return {
          id: `link_${index + 1}`,
          position: index * window.innerHeight, // hver section har 100vh undtaget den sidste
        };
      });

      // et threshold der bestemmer hvornår menuen skiftes
      const threshold = 0.5; 

      // finder active menu position efter threshhold og hvor langt der er scrollet
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
    <div className="menu fade-in babas">
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
