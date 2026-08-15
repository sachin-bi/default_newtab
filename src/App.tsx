import Calendar from "./components/Calendar/Calendar";
import Clock from "./components/Clock/Clock";
import DayProgress from "./components/DayProgress/DayProgress";
import QuickLinks from "./components/QuickLinks/QuickLinks";

function App() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-6 py-12">
        <Clock />

        <DayProgress />

        <Calendar />

        <QuickLinks />
      </div>
    </main>
  );
}

export default App;