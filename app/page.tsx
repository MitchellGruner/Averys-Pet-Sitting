import HomePage from "./HomePage";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex mx-auto flex-col justify-between pt-8 lg:pt-10 xl:pt-24">
      <HomePage />
      <Footer />
      <div id="__next"></div>
    </main>
  );
}