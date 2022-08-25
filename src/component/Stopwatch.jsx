import React, { useState } from "react";
import Btn from "./Btn";
import Timer from "./Timer";
import "./Style.css";

const Stopwatch = () => {
  const [time, setTime] = useState({
    hh: 0,
    mm: 0,
    ss: 0,
    ms: 0,
  });
  const [btn, setBtn] = useState("Start");
  const [id, setId] = useState(null);
  var updateH = time.hh,
    updateM = time.mm,
    updateS = time.ss,
    updateMS = time.ms;
  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMS === 100) {
      updateS++;
      updateMS = 0;
    }
    updateMS++;
    setTime({ hh: updateH, mm: updateM, ss: updateS, ms: updateMS });
  };

  const start = () => {
    if (btn === "Start") {
      setBtn("Resume");
      run();
      setId(setInterval(run, 10));
    } else {
      clearInterval(id);
      setId(null);
      setBtn("Start");
    }
  };

  const reset = () => {
    setTime({ hh: 0, mm: 0, ss: 0, ms: 0 });
    clearInterval(id);
    setId(null);
    setBtn("Start");
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <div className="mainBox">
        <Timer time={time} />
        <Btn text={btn} start={start} reset={reset} />
      </div>
    </>
  );
};

export default Stopwatch;
