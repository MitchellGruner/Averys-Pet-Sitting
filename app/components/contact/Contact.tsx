import Header from "../Header";
import ContactForm from "./ContactForm";

import Image from "next/image";

const Contact = () => {
    return (
        <div id="contact" className="relative block w-full mx-auto mt-2 sm:mt-4 lg:mt-6 2xl:mt-8">
            <div className="max-w-[1200px] testimonials-container mx-auto pt-0 xs:pt-4 md:pt-6 xl:pt-10 xl:pb-4">
                <Header title={"Contact"} color={"text-white"} />
                <div className="flex flex-col md:flex-row items-center justify-center mt-6 xs:mt-8 sm:mt-12 md:mt-20">
                    <div className="flex justify-end basis-full md:basis-1/2 md:pl-4 md:pr-8 lg:pr-12 px-2 xs:px-4 pb-6 xs:pb-8 md:pb-0 border-b-4 md:border-b-0 md:border-r-4 border-white">
                        <Image
                            src="/avery.flowers.image.jpg"
                            width={400}
                            height={400}
                            alt="Avery with Flowers"
                            className="shadow-2xl rounded-md"
                        />
                    </div>
                    <div className="basis-full md:basis-1/2 pt-4 xs:pt-6 md:pt-0 md:pl-6 lg:pr-20 xl:pr-36 2xl:pr-56">
                        <p className="text-white text-center md:text-left text-base sm:text-lg xl:text-xl">
                            Looking for trustworthy care for your beloved pets? Look no further! With years of experience and a genuine love for animals, <span className="text-yellow">I provide top-notch dog and cat sitting services tailored to meet your pets' needs</span>. Whether it's daily walks, feeding, or simply providing companionship while you're away, your furry friends will be in safe and loving hands. Contact me today to discuss how I can help care for your pets!
                        </p>
                    </div>
                </div>
            </div>
            
            <ContactForm />
        </div>
    )
}

export default Contact;