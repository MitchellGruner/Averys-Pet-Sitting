import Link from "next/link";
import Image from "next/image";

const MainText = () => {
    return (
        <div id="mainText" className="relative">
            <span className="absolute main-header block text-white 2xs:top-1 xs:top-6 sm:top-6 md:top-10 lg:top-0 md:left-0 lg:left-4">Avery's Pet</span>
            <span className="absolute main-header main-header-secondary block text-white 2xs:top-6 xs:top-14 sm:top-16 md:top-20 lg:top-12 2xl:top-16 2xs:left-6 xs:left-6 sm:left-10 lg:left-16">
                Sitting
                <Image
                    src="/dogpaw.png"
                    width={60}
                    height={60}
                    alt="Dog Paw Icon"
                    className="inline ml-4 md:ml-6"
                />
            </span>

            <div className="main-text-container bg-brown absolute rounded-2xl shadow-2xl">
                <h1 className="2xs:text-lg xs:text-xl sm:text-2xl xl:text-3xl font-semibold pb-2"><span className="text-white">Take the Quiz!</span> Discover Your Money Magnetism Archetype</h1>

                <hr className="py-3" />
                
                <p className="2xs:text-sm sm:text-md xl:text-lg leading-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <Link href="/contact" className="inline-block mb-6 2xs:py-1 xs:py-2 sm:py-2 md:py-3 lg:py-2 2xs:px-4 sm:px-6 md:px-10 lg:px-14 2xs:mt-4 md:mt-6 lg:mt-10 text-center text-black text-md font-bold bg-white shadow-2xl uppercase hover:bg-teal transition ease-in-out duration-500">
                    <div className="flex flex-row">
                        <span className="2xs:contents xs:block pr-10 2xs:text-xs xs:text-sm lg:text-md 2xl:text-lg">Contact Now</span>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                    </div>
                </Link>
            </div>

            <div className="main-text-container-secondary bg-white absolute rounded-2xl shadow-2xl"></div>
        </div>
    )
}

export default MainText;