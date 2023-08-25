import { useState, useEffect } from "react";

export const useClock = () => {
  let [hr, setHr] = useState(0);
  let [min, setMin] = useState(0);
  let [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const hr = currentTime.getHours();
      const min = currentTime.getMinutes();
      const sec = currentTime.getSeconds();

      setHr(hr.toString().padStart(2, "0"));
      setMin(min.toString().padStart(2, "0"));
      setSec(sec.toString().padStart(2, "0"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {hr, min, sec}
};
