import { clear } from "@testing-library/user-event/dist/clear";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const timerId = useRef(0);


  const handleStart = () => {
    setTimerOn((prevValue) => !prevValue);
  };

  const handleReset = () => {
    setTime(0);
    setTimerOn(false);
  }


  useEffect(() => {
    if (timerOn === true) {
      timerId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerId.current);
    }

    return () => {
      clearInterval(timerId.current);
    }

  }, [timerOn]);

  const timeFormatter = (time) => {
    let minute = Math.floor(time / 60);
    let second = (time % 60);
    if(second < 10){
      second = "0"+second;
    }
    return `${minute}:${second}`
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>Time: {timeFormatter(time)}</p>
      <button onClick={handleStart}>{timerOn ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
