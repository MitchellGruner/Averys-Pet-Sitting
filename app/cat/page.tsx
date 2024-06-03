import Image from "next/image";
import ScheduleAppointment from "../components/contact/ScheduleAppointment";
import ContactButton from "../components/ContactButton";

const Cat = () => {
    return (
        <div id="catPage">
            <div className="flex flex-col md:flex-row">
                <div className="relative basis-full md:basis-[45%] md:h-[47em] p-8 sm:p-12 md:p-28 m-auto">
                    <Image
                        src="/servicescatimage.png"
                        width={400}
                        height={400}
                        alt="Two Dogs Walking"
                        className="md:absolute md:left-[4em] lg:left-[10em] xl:left-[15em] 2xl:left-[18em] 3xl:left-[23em] 4xl:left-[29em] 5xl:left-[35em] 6xl:left-[43em] 7xl:left-[48em] 8xl:left-[52em] 9xl:left-[60em] right-0 shadow-2xl"
                    />
                </div>
                <div className="bg-cream basis-full md:basis-[55%] mt-[3em] xs:mt-[3.2em] sm:mt-[3.4em] md:mt-[-4px]">
                    <div className="max-w-[1400px]">
                        <span className="hidden sm:block absolute main-header text-brown sm:top-[18.6em] md:top-[3.5em] lg:top-[3.2em] xl:top-[2.4em] 2xl:top-[2.6em] left-[0.81em] xs:left-[1em] sm:left-[1.4em] md:left-[9em] lg:left-[11em] xl:left-[11em] 2xl:left-[12em] 3xl:left-[14em] 4xl:left-[16em] 5xl:left-[18em] 7xl:left-[22em] 8xl:left-[25em]">Meow We Are</span>
                        <span className="hidden sm:block absolute main-header main-header-secondary text-brown sm:top-[19.6em] md:top-[4.5em] lg:top-[4.2em] xl:top-[3.4em] left-[1.2em] xs:left-[1.7em] sm:left-[2em] md:left-[9.5em] lg:left-[11.7em] xl:left-[11.7em] 2xl:left-[12.8em] 3xl:left-[15em] 4xl:left-[17em] 5xl:left-[19em] 7xl:left-[23em] 8xl:left-[26em]">
                            Talking
                            <Image
                                src="/catfishicon2.png"
                                width={60}
                                height={60}
                                alt="Cat Fish Icon"
                                className="inline ml-4 md:ml-6"
                            />
                        </span>
                        
                        <div className="bg-brown py-8 px-4 ml-[2.8em] xs:ml-[3.2em] sm:ml-[4.2em] md:ml-[8em] lg:ml-[9em] xl:ml-[10em] 2xl:ml-[12em] w-4/6 3xl:w-3/5 4xl:w-3/6 8xl:w-1/3 mt-[3.8em] xs:mt-[4.4em] sm:mt-[15.2em] md:mt-[16em] lg:mt-[18em] xl:mt-[20em] 8xl:ml-[24em] border border-black shadow-2xl">
                            <p className="text-base sm:text-lg 2xl:text-xl pb-2 text-white pt-0 pl-0 lg:pl-4 italic">As a devoted cat sitter, <span className="text-black font-bold">my mission is simple:</span> to provide your furry friend with the utmost love, care, and attention while you're away. With a gentle touch and a heart full of affection for our feline friends, I ensure that each kitty under my care feels safe, happy, and cherished.</p>
                        </div>

                        <ContactButton text={"Contact Me"} class={"xs:mt-[2.2em] sm:mt-[2.6em] md:mt-[2em] mb-[3.2em] xs:mb-[2.9em] sm:mb-[3.2em] md:mb-[0em] xs:ml-[6.6em] sm:ml-[13.2em] md:ml-[10em] lg:ml-[13.2em] xl:ml-[18.2em] 4xl:ml-[22.2em] 7xl:ml-[31em]"} />
                    </div>
                </div>
            </div>
            <ScheduleAppointment />
        </div>
    )
}

export default Cat;