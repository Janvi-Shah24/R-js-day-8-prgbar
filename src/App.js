import React, { useState, useEffect } from 'react';
import ProgressBar from "./Components/ProgressBar";

function App() {
  const [progressPercentage, setProgressPercentage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 10;
        
        return newPercentage > 100 ? 100 : newPercentage;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <h1>Progress Bar Example</h1>
    <ProgressBar width={400} height={20} percentage={progressPercentage} />
  </div>
  );
}

export default App;