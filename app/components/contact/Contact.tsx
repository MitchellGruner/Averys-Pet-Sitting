"use client";

import Header from "../Header";
import { PopupWidget } from "react-calendly";

const Contact = () => {
    return (
        <div id="contact" className="block w-full mx-auto 2xl:mt-16">
            <div className="max-w-[1200px] testimonials-container mx-auto xl:pt-10 xl:pb-4">
                <Header title={"Contact"} color={"text-white"} />

                <PopupWidget
                    url="https://calendly.com/your_scheduling_page"
                    /*
                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                    */
                    rootElement={document.getElementById("root") ?? document.body}
                    text="Click here to schedule!"
                    textColor="#ffffff"
                    color="#00a2ff"
                />
            </div>
        </div>
    )
}

export default Contact;