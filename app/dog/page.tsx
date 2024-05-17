import Image from "next/image";
import ContactButton from "../components/ContactButton";

const Dog = () => {
    return (
        <div id="dogPage" className="relative block w-full mx-auto mt-2 sm:mt-4 lg:mt-6 2xl:mt-8 pb-16 md:pb-40 lg:pb-48 xl:pb-52">
            <div className="flex flex-col md:flex-row items-center justify-center mt-6 xs:mt-8 sm:mt-12 md:mt-20">
                <div className="basis-full md:basis-1/2 pt-4 xs:pt-6 md:pt-0 md:pr-6 lg:pl-20 xl:pl-36 2xl:pl-56">
                    <span className="absolute main-header block text-white 2xs:top-1 xs:top-6 sm:top-6 md:top-10 lg:top-0 md:left-0 lg:left-4">Paws and Play</span>
                    <span className="absolute main-header main-header-secondary block text-white 2xs:top-6 xs:top-14 sm:top-16 md:top-20 lg:top-12 2xl:top-16 2xs:left-6 xs:left-6 sm:left-10 lg:left-24">
                        Haven
                    </span>

                    <p className="mt-32 2xs:text-sm sm:text-md xl:text-lg leading-6 text-white italic">
                        Hey there! I'm Avery Geiger, and let me tell you, dog sitting isn't just a job for me — it's a passion. Whether it's a weekend getaway or an extended trip, I understand how tough it can be to leave your four-legged family member behind.
                    </p>

                    <p className="mt-8 2xs:text-sm sm:text-md xl:text-lg leading-6 text-white italic">
                        That's why I've made it my mission to provide a safe, loving, and fun-filled environment where your pup can thrive while you're away.
                    </p>

                    <ContactButton text={"Get Started"} />
                </div>
                <div className="flex justify-start basis-full md:basis-1/2 md:pr-4 md:pl-8 lg:pl-12 px-2 xs:px-4 pb-6 xs:pb-8 md:pb-0 border-b-4 md:border-b-0 md:border-l-4 border-white">
                    <Image
                        src="/dog.sitting.main.image.jpg"
                        width={400}
                        height={400}
                        alt="Two Dogs Walking"
                        className="shadow-2xl rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Dog;