import { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const spinnerArrow = ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"];
  const spinnerElements = spinnerArrow;
  const [spinnerIndex, setSpinnerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next spinner index
      const nextIndex = (spinnerIndex + 1) % spinnerElements.length;
      setSpinnerIndex(nextIndex);
    }, 75);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [spinnerIndex, spinnerElements.length]);

  return (
    <div className="loading">
      {spinnerElements[spinnerIndex]}
    </div>
  );
};

export default Loading;