import { useState } from "react";
import dayjs from "dayjs";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

const statuses = ["hành chính 1", "hành chính 2", "vào trực", "ra trực"];

const App = () => {
  const [referenceDate] = useState(() => dayjs().startOf("day"));
  const [selectedDate, setSelectedDate] = useState(referenceDate);
  const [referenceStatusIndex, setReferenceStatusIndex] = useState(null);
  const daysFromReference = selectedDate.startOf("day").diff(referenceDate, "day");
  const statusIndex = referenceStatusIndex === null
    ? null
    : ((daysFromReference + referenceStatusIndex) % statuses.length + statuses.length) % statuses.length;

  return (
    <div className="flex h-dvh justify-center overflow-hidden">
      <div className="flex h-full w-full max-w-xl flex-col overflow-hidden">
        <Header
          date={selectedDate}
          status={statusIndex === null ? "" : statuses[statusIndex]}
          onTodayClick={() => setSelectedDate(dayjs().startOf("day"))}
        />

        <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </div>

      {referenceStatusIndex === null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A3040]/40 p-4">
          <section
            aria-labelledby="daily-status-title"
            aria-modal="true"
            className="w-full max-w-sm rounded-2xl bg-[#FFF8FA] p-6 shadow-xl"
            role="dialog"
          >
            <h1 id="daily-status-title" className="mb-5 text-2xl font-medium text-(--title)">
              Hôm nay bạn làm gì?
            </h1>
            <div className="grid gap-3">
              {statuses.map((status, index) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setReferenceStatusIndex(index)}
                  className="rounded-xl border border-[#E8B8C9] px-4 py-3 text-left text-(--title) transition-colors hover:bg-[#FCE4EC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D66B91]"
                >
                  {status}
                </button>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default App;