import Image from "next/image";
import ContactButton from "../components/ContactButton";

const DogHeader = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 mx-6 xs:mx-8 sm:mx-12 md:mx-20 lg:mx-28 xl:mx-40 2xl:mx-72">
            <div className="basis-full order-2 md:order-1 md:basis-1/2 pt-4 xs:pt-6 md:pt-0 md:pr-6">
                <span className="hidden sm:block absolute main-header text-white 2xs:top-1 xs:top-[12em] sm:top-[13.2em] md:top-0 md:left-0 lg:left-[1.2em] xl:left-[2em] 2xl:left-[4em]">Paws and Play</span>
                <span className="hidden sm:block absolute main-header main-header-secondary text-white 2xs:top-6 xs:top-[13em] sm:top-[14.2em] md:top-14 lg:top-12 xl:top-16 2xs:left-6 xs:left-6 sm:left-24 md:left-10 lg:left-[2.4em] xl:left-[3em] 2xl:left-[5.2em]">
                    Haven
                </span>

                <p className="sm:mt-32 md:mt-36 lg:mt-40 xl:mt-52 text-base xl:text-lg leading-6 text-white italic">
                    Hey there! I'm Avery Geiger, and let me tell you, dog sitting isn't just a job for me — <span className="text-yellow font-bold">it's a passion</span>. Whether it's a weekend getaway or an extended trip, I understand how tough it can be to leave your four-legged family member behind.
                </p>

                <p className="mt-4 lg:mt-8 text-base xl:text-lg leading-6 text-white italic">
                    That's why I've made it my mission to provide a <span className="text-yellow font-bold">safe, loving, and fun-filled environment</span> where your pup can thrive while you're away.
                </p>

                <ContactButton text={"Get Started"} />
            </div>
            <div className="flex justify-start basis-full order-1 md:order-2 md:basis-1/2 md:pr-4 md:pl-8 lg:pl-12 px-2 xs:px-4 pb-6 xs:pb-8 md:pb-0 border-b-4 md:border-b-0 md:border-l-4 border-white">
                <Image
                    src="/dog.sitting.main.image.jpg"
                    width={400}
                    height={400}
                    alt="Two Dogs Walking"
                    className="shadow-2xl rounded-md"
                />
            </div>
        </div>
    )
}

export default DogHeader;