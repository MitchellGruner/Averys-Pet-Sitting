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
                        I can’t remember a time when I wasn’t covered in pet fur. From working at an animal hospital to manufacturing pet food - <span className="italic text-yellow font-bold">I’ve always dedicated my life to pets</span>. I have years of experience working in kennels and as a veterinary technician assistant. I know first-hand how important it is to know your pet is getting the best care while you’re away from your fur babies.
                    </p>
                    
                    <p className="text-white text-left">
                        In 2023, I received a B.S. in Food Science from Penn State University. Combining my love for food science with my passion for animals, I accepted my dream job working for Mars Petcare in Franklin, Tennessee where I work full-time as a Product Developer. Without a pet of my own (yet!), I get my animal fix by pet-sitting for coworkers, neighbors, family, and friends.
                    </p>

                    <ContactButton text={"Contact Me"} />
                </div>
            </div>
        </div>
    )
}

export default About;