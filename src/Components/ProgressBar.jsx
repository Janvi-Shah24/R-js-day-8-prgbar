import React, { useState, useEffect } from 'react';
import './ProgressBar.css';
const ProgressBar = ({ width, height, percentage }) => {
    const [barWidth, setBarWidth] = useState(0);

const [barColor, setbarColor] = useState('Red');
    useEffect(() => {
      setBarWidth(percentage);
      if(percentage == 100) setbarColor('#00cc00');
    }, [percentage]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${barWidth}%`, backgroundColor:`${barColor}` }}
      />
    </div>
  );
};

export default ProgressBar;