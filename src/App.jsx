import React, { useState, useEffect, lazy, Suspense } from "react";
import "./reset.css";
import Loading from "./components/loading/Loading";
import Menu from "./components/menu/Menu";
import Section from "./components/section/Section";
import ScrollToTop from "react-scroll-to-top";
import Skills from "./components/content/Skills";
import Projects from "./components/content/Projects";
import Contact from "./components/content/Contact";

// Bruger lazy to at importere forside komponentet
const Forside = lazy(() => import("./components/content/Forside"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // En timer til loading componentet
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Menu />
          <Section number="one">
            <Suspense fallback={<Loading />}> {/* Loader forside komponentet mens der vises en loading skærm */}
              <Forside />                     {/* Nødvendigt fordi forside komponentet indeholder en REST API, der skal loades */}
            </Suspense>                       {/* inden siden vises */}
          </Section>
          <ScrollToTop className="ScrollToTop" />
          <Section number="two">
            <Skills />
          </Section>
          <Section number="three">
            <Projects />
          </Section>
          <Section number="four">
            <Contact />
          </Section>
        </>
      )}
    </div>
  );
}

export default App;