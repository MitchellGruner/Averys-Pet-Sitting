import MuiAccordion from "./MuiAccordion";
import Header from "../Header";

import Image from "next/image";

const Services = () => {
    return (
        <section id="services" className="block w-full mx-auto">
            <div className="max-w-[1200px] testimonials-container mx-auto xl:pt-10 xl:pb-4">
                <Header title={"Services"} color={"text-white"} />
                <article className="mx-auto flex flex-row flex-wrap justify-center items-center">
                    <div className="flex flex-col justify-center order-2 md:order-1 basis-full md:basis-2/3 md:pl-6 lg:pl-8 xl:pl-8 2xl:pl-0 xl:pr-10 2xl:pr-14">
                        <MuiAccordion />
                    </div>
                    <figure className="flex flex-row justify-center order-1 md:order-2 basis-full md:basis-1/3 md:pr-8 xl:pr-12 2xl:pr-0 py-6 xs:py-8 md:py-0">
                        <Image
                            src="/servicescatimage.png"
                            width={400}
                            height={400}
                            alt="Two Cats Services Image"
                            className="shadow-2xl"
                        />
                    </figure>
                </article>
            </div>
        </section>
    )
}

export default Services;