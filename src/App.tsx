import Clock from "./components/Clock/Clock";
import DayProgress from "./components/DayProgress/DayProgress";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-6">
        <Clock />

        <DayProgress />

        <Calendar />
      </div>
    </main>
  );
}

export default App;