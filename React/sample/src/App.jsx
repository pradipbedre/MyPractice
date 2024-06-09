import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array for running effect only once

  return <div>Time: {time}</div>;
}

export default App;
