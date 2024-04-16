import Main from "./components/main/Main";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <main className="flex mx-auto flex-col justify-between py-8 lg:py-10 xl:py-24">
      <Main />
      <About />
      <Testimonials />
      <Services />
    </main>
  );
}