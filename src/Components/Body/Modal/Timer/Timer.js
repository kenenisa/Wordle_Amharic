import React, { useEffect, useState } from "react";
import parseTime from "../../../../Utils/parseTime";
import "./Timer.css";

function Timer() {
  const [t, setTime] = useState({ hour: 0, minute: 0, second: 0 });
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const midnight = new Date(tomorrow.toDateString()).getTime();
  useEffect(() => {
    const int = setInterval(() => {
      setTime(parseTime(midnight - new Date().getTime()));
    }, 1000);
    return () => clearInterval(int);
  }, []);
  return (
    <div className="timer">
      <span className="hour">{t.hour}</span>:
      <span className="minute">{t.minute}</span>:
      <span className="second">{t.second}</span>
    </div>
  );
}

export default Timer;
