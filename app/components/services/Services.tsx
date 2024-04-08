import MuiAccordion from "./MuiAccordion";
import Header from "../Header";

import Image from "next/image";

const Services = () => {
    return (
        <div id="services" className="block w-full mx-auto">
            <div className="max-w-[1600px] testimonials-container mx-auto pt-10 pb-4">
                <Header title={"Services"} color={"text-white"} />
                <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="flex flex-col justify-center md:basis-1/2 pl-40">
                        <MuiAccordion />
                    </div>
                    <div className="flex flex-row justify-center basis-full md:basis-1/2">
                        <Image
                            src="/averysaboutme.png"
                            width={330}
                            height={330}
                            alt="Avery's About Me Picture"
                            className="shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;