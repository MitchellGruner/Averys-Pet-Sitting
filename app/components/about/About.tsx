import ContactButton from "../ContactButton";

import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="block max-w-[1600px]">
            <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="flex flex-row justify-center basis-full md:basis-1/2">
                    <Image
                        src="/averysaboutme.png"
                        width={330}
                        height={330}
                        alt="Avery's About Me Picture"
                        className="shadow-2xl"
                    />
                </div>
                <div className="flex flex-col justify-center basis-full md:basis-1/2 text-center mx-auto 2xs:mt-6 xs:mt-8 md:mt-0 2xs:mx-4 xs:mx-10 sm:mx-12 md:mx-0">
                    <h1 className="text-white"><span>Hey there!</span></h1>
                    <h3 className="text-black font-bold">I'm Avery Geiger</h3>
                
                    <hr className="text-white w-1/2 mx-auto my-4" />

                    <p className="text-white text-left 2xs:mb-2 sm:mb-3 xl:mb-4">
                        With years of experience and a genuine love for dogs, I understand the importance of trust and reliability when it comes to entrusting your beloved pets into someone else's care.
                    </p>
                    
                    <p className="text-white text-left">Whether it's a leisurely stroll in the park, interactive playtime, or simply cuddling up for some quality one-on-one attention, I strive to create a safe and nurturing environment where your dogs feel comfortable and happy.
                    </p>

                    <ContactButton text={"Contact Me"} />
                </div>
            </div>
        </div>
    )
}

export default About;