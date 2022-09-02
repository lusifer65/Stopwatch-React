import React, { useState, useEffect } from "react";
import "./Style.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <>
      <h1>Stopwatch</h1>
      <div className="mainBox">
        <div className="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="btnGroup">
          <button className="Btn" onClick={() => setRunning(true)}>
            Start
          </button>
          <button className="Btn reset" onClick={() => setRunning(false)}>
            Stop
          </button>
          <button className="Btn reset" onClick={() => setTime(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
export default Stopwatch;
