import { useEffect, useState } from "react";

function DayProgress() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const secondsPassed =
    currentTime.getHours() * 60 * 60 +
    currentTime.getMinutes() * 60 +
    currentTime.getSeconds();

  const totalSeconds = 24 * 60 * 60;

  const progress = (secondsPassed / totalSeconds) * 100;

  return (
    <section className="w-full max-w-md">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="opacity-60">TODAY</span>

        <span className="opacity-60">
          {progress.toFixed(0)}% completed
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-white transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}

export default DayProgress;

