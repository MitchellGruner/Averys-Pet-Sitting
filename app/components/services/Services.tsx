import MuiAccordion from "./MuiAccordion";
import Header from "../Header";

import Image from "next/image";

const Services = () => {
    return (
        <div id="services" className="block w-full mx-auto">
            <div className="max-w-[1200px] testimonials-container mx-auto pt-10 pb-4">
                <Header title={"Services"} color={"text-white"} />
                <div className="mx-auto flex flex-row flex-wrap justify-center items-center">
                    <div className="flex flex-col justify-center basis-full md:basis-2/3 pr-14">
                        <MuiAccordion />
                    </div>
                    <div className="flex flex-row justify-center basis-full md:basis-1/3">
                        <Image
                            src="/servicescatimage.png"
                            width={400}
                            height={400}
                            alt="Two Cats Services Image"
                            className="shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;