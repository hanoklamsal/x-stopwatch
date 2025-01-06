import './App.css';
import { React, useState } from 'react';

function App() {
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStartStop = () => {
    if (play) {
      clearInterval(intervalId);
    } else {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
    setPlay(!play);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setPlay(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(1, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <h4>Stopwatch</h4>
      <p>Time: {formatTime()}</p>
      <button onClick={handleStartStop}>{play ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
