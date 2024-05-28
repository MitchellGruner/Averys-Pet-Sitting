import HomePage from "./HomePage";
import ScheduleAppointment from "./components/contact/ScheduleAppointment";

export default function Home() {
  return (
    <main className="flex mx-auto flex-col justify-between pt-8 lg:pt-10 xl:pt-24">
      <HomePage />
      <ScheduleAppointment />
    </main>
  );
}