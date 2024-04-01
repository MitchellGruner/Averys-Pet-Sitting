import Main from "./components/main/Main";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex mx-auto flex-col justify-between py-8 lg:py-10 xl:py-24">
      <Main />
      <Testimonials />
    </main>
  );
}