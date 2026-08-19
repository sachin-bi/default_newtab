import { useEffect, useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  });

  const date = currentTime.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="text-center">
      <h1 className="text-7xl font-semibold tracking-tight">
        {time}
      </h1>

      <p className="mt-2 text-lg opacity-60">
        {date}
      </p>
    </section>
  );
}

export default Clock;