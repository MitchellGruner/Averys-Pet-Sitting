import Header from "../Header";
import CalendlyForm from "./CalendlyForm";

const Contact = () => {
    return (
        <div id="contact" className="block w-full mx-auto 2xl:mt-16">
            <div className="max-w-[1200px] testimonials-container mx-auto xl:pt-10 xl:pb-4">
                <Header title={"Contact"} color={"text-white"} />
                <CalendlyForm url="https://calendly.com/mit-gruner" />
            </div>
        </div>
    )
}

export default Contact;