import { useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const today = new Date();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = currentDate.toLocaleDateString([], {
    month: "long",
    year: "numeric",
  });

  const days = Array.from(
    { length: firstDayOfMonth + daysInMonth },
    (_, index) => {
      if (index < firstDayOfMonth) {
        return null;
      }

      return index - firstDayOfMonth + 1;
    },
  );

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <section className="w-full rounded-2xl border border-white/10 bg-white/5 p-5">
   
      <div className="mb-5 flex items-center justify-between">
        <button
          onClick={goToPreviousMonth}
          className="rounded-lg px-3 py-1 text-white/50 transition hover:bg-white/10 hover:text-white"
        >
          ←
        </button>

        <h2 className="text-lg font-medium">
          {monthName}
        </h2>

        <button
          onClick={goToNextMonth}
          className="rounded-lg px-3 py-1 text-white/50 transition hover:bg-white/10 hover:text-white"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/40">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          (day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ),
        )}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex h-10 items-center justify-center"
          >
            {day && (
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm ${
                  isToday(day)
                    ? "bg-white text-black"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                {day}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Calendar;