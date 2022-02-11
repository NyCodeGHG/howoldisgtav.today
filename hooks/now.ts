import { useState, useEffect } from "react";

export function useNow(updateMillis: number = 1000): Date {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, updateMillis);
    return () => clearInterval(interval);
  });
  return now;
}
