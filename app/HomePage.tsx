import { ChakraProvider } from "@chakra-ui/react";
import AppContainer from "./components/AppContainer";
import Main from "./components/main/Main";
import About from "./components/about/About";
import CalendlyForm from "./components/contact/CalendlyForm";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

const HomePage = () => {
    return (
        <>
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
        </>
    )
}

export default HomePage;