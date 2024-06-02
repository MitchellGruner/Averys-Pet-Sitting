import Image from "next/image";
import ScheduleAppointment from "../components/contact/ScheduleAppointment";
import ContactButton from "../components/ContactButton";

const Cat = () => {
    return (
        <div id="catPage">
            <div className="flex flex-row">
                <div className="relative basis-[45%] h-[47em] p-28 shadow-2xl">
                    <Image
                        src="/servicescatimage.png"
                        width={400}
                        height={400}
                        alt="Two Dogs Walking"
                        className="absolute 2xl:left-[18em] 3xl:left-[23em] 4xl:left-[29em] 5xl:left-[35em] 6xl:left-[43em] 7xl:left-[48em] 8xl:left-[52em] 9xl:left-[60em] right-0 shadow-2xl"
                    />
                </div>
                <div className="basis-[55%] bg-cream">
                    <div className="max-w-[1400px]">
                        <span className="hidden sm:block absolute main-header text-brown 2xs:top-1 xs:top-[12em] sm:top-[13.2em] md:top-[3em] 2xl:top-[2.6em] md:left-0 lg:left-[1.2em] xl:left-[2em] 2xl:left-[12em] 3xl:left-[14em] 4xl:left-[16em] 5xl:left-[18em] 7xl:left-[22em] 8xl:left-[25em]">Meow We Are</span>
                        <span className="hidden sm:block absolute main-header main-header-secondary text-brown 2xs:top-6 xs:top-[13em] sm:top-[14.2em] md:top-14 lg:top-12 xl:top-[3.4em] 2xs:left-6 xs:left-6 sm:left-24 md:left-10 lg:left-[2.4em] xl:left-[3em] 2xl:left-[12.8em] 3xl:left-[15em] 4xl:left-[17em] 5xl:left-[19em] 7xl:left-[23em] 8xl:left-[26em]">
                            Talking
                            <Image
                                src="/catfishicon2.png"
                                width={60}
                                height={60}
                                alt="Cat Fish Icon"
                                className="inline ml-4 md:ml-6"
                            />
                        </span>
                        
                        <div className="bg-brown py-8 px-4 w-4/6 3xl:w-3/5 4xl:w-3/6 8xl:w-1/3 mt-[20em] ml-[12em] 8xl:ml-[24em] border border-black shadow-2xl">
                            <p className="text-lg md:text-xl pb-2 text-white pt-6 md:pt-10 lg:pt-0 md:pl-0 lg:pl-4 italic">As a devoted cat sitter, <span className="text-black font-bold">my mission is simple</span>: to provide your furry friend with the utmost love, care, and attention while you're away. With a gentle touch and a heart full of affection for our feline friends, I ensure that each kitty under my care feels safe, happy, and cherished.</p>
                        </div>

                        <ContactButton text={"Contact Me"} class={"xl:ml-[24.2em] 4xl:ml-[22.2em] 7xl:ml-[31em]"} />
                    </div>
                </div>
            </div>
            <ScheduleAppointment />
        </div>
    )
}

export default Cat;