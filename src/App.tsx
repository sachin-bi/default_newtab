import Calendar from "./components/Calendar/Calendar";
import Clock from "./components/Clock/Clock";
import DayProgress from "./components/DayProgress/DayProgress";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import RecentLinks from "./components/RecentLinks/RecentLinks";

function App() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10">
        {/* Header */}
        <header className="flex flex-col items-center gap-6">
          <Clock />
          <DayProgress />
        </header>

        {/* Dashboard */}
        <section className="mt-12 grid flex-1 gap-6 lg:grid-cols-2">
          {/* Calendar */}
          <div className="flex">
            <Calendar />
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-6">
            <QuickLinks />
            <RecentLinks />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;