import React, { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';
import './Loading.css';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading completion after 2 seconds (replace with your actual loading logic)
    const timeout = setTimeout(() => {
      setIsFadeOut(true); // Trigger the fade-out animation
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Remove the loading container from the DOM after the fade-out animation
  useEffect(() => {
    if (isFadeOut) {
      const fadeOutTimer = setTimeout(() => {
        setIsLoading(false);
      }, 900); // Adjust the timing to match the CSS transition duration (0.9s)
      
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
