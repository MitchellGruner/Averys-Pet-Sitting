import Header from "../Header";
import ContactForm from "./ContactForm";

import Image from "next/image";

const Contact = () => {
    return (
        <div id="contact" className="relative block w-full mx-auto mt-2 sm:mt-4 lg:mt-6 2xl:mt-8 mb-16 md:mb-40 lg:mb-48 xl:mb-52">
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
                            Pets are family, too! So it’s important that your furry companions get the attention and care they deserve while you’re gone. Whether it’s just for a night or an entire week, I’m here to make your pets feel so happy and loved they won’t even realize you’re away!
                        </p>
                        <p className="text-white text-center md:text-left text-base mt-2 sm:text-lg xl:text-xl">
                            Allow me to take the worry of leaving your pets behind while you travel by <span className="text-yellow italic font-semibold">knowing your fur babies are in safe and loving hands</span>. Contact me today to discuss how I can help care for your pets!
                        </p>
                    </div>
                </div>
            </div>
            
            <ContactForm />
        </div>
    )
}

export default Contact;