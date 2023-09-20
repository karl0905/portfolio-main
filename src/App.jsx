import React, { useState, useEffect } from 'react';
import './reset.css';
import Loading from './components/loading/Loading';
import Menu from './components/menu/Menu';
import Section from './components/section/Section';
import Forside from './components/content/Forside';
import Skills from './components/content/Skills';
import Projects from './components/content/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start the loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Menu />
          <Section number="one">
            <Forside />
          </Section>
          <Section number="two">
            <Skills />  
          </Section>
          <Section number="three">
            <Projects/>
          </Section>
          <Section number="four" />
        </>
      )}
    </div>
  );
}

export default App;
