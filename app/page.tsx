import {ChakraProvider} from "@chakra-ui/react";
import AppContainer from "./components/AppContainer";

import Main from "./components/main/Main";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import CalendlyForm from "./components/contact/CalendlyForm";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex mx-auto flex-col justify-between pt-8 lg:pt-10 xl:pt-24">
      <Main />
      <About />
      <Testimonials />
      <Services />
      <ChakraProvider>
        <AppContainer>
          <Contact />
        </AppContainer>
      </ChakraProvider>
      <CalendlyForm />
      <Footer />
      <div id="__next"></div>
    </main>
  );
}