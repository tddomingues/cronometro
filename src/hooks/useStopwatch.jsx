import { useEffect, useState } from "react";

export const useStopwatch = () => {
  let [count, setCount] = useState(0);
  let [hr, setHr] = useState(0);
  let [min, setMin] = useState(0);
  let [sec, setSec] = useState(0);
  let [incrementing, setIncrementing] = useState();
  const [startMarked, setStartMarked] = useState(false);
  const [timeSaver, setTimeSaver] = useState([]);

  const start = () => {
    setStartMarked(!startMarked);
    setIncrementing(
      setInterval(() => {
        count++;
        setCount(count);
        configTime();
      }, 1000)
    );
  };

  const configTime = () => {
    hr = Math.floor(count / 3600);
    min = Math.floor(count / 60);
    sec = count;

    min >= 60 ? (min = min % 60) : min;
    sec >= 60 ? (sec = sec % 60) : sec;

    setHr(hr.toString().padStart(2, "0"));
    setSec(sec.toString().padStart(2, "0"));
    setMin(min.toString().padStart(2, "0"));
  };

  const reset = () => {
    clearInterval(incrementing);
    setStartMarked(false);
    setTimeSaver([]);
    setCount(0);
    setHr(0);
    setMin(0);
    setSec(0);
  };

  const stop = () => {
    clearInterval(incrementing);
    setStartMarked(false);
  };

  const toAdd = () => {
    setTimeSaver((prev) => {
      return [...prev, [`${hr}:${min}:${sec}`]];
    });
  };

  console.log(toAdd);

  return { toAdd, start, stop, reset, timeSaver, hr, min, sec, startMarked };
};
