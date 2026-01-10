import { useEffect, useState } from "react";

export const useLiveDateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const weekDay = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return { time, weekDay };
};
