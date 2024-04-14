import MuiAccordion from "./MuiAccordion";
import Header from "../Header";

import Image from "next/image";

const Services = () => {
    return (
        <div id="services" className="block w-full mx-auto">
            <div className="max-w-[1200px] testimonials-container mx-auto xl:pt-10 xl:pb-4">
                <Header title={"Services"} color={"text-white"} />
                <div className="mx-auto flex flex-row flex-wrap justify-center items-center">
                    <div className="flex flex-col justify-center basis-full md:basis-2/3 lg:pl-8 xl:pl-8 2xl:pl-0 xl:pr-10 2xl:pr-14">
                        <MuiAccordion />
                    </div>
                    <div className="flex flex-row justify-center basis-full md:basis-1/3 lg:pr-8 xl:pr-12 2xl:pr-0">
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