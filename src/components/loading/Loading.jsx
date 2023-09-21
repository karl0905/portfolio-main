import React, { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';   //scale loader fra npm.js
import './Loading.css';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFadeOut(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isFadeOut) {
      const fadeOutTimer = setTimeout(() => {
        setIsLoading(false);
      }, 900);
      
      return () => {
        clearTimeout(fadeOutTimer);
      };
    }
  }, [isFadeOut]);

  return (
    <>
      {isLoading ? (
        <div className={`loading-container ${isFadeOut ? 'fade-out' : ''}`}>
          <div className="loader">
            <ScaleLoader color="#00BFFF" height={100} width={15} radius={5} margin={5} />
          </div>
        </div>
      ) : null}
    </>
  );
}
