import ContactButton from "../ContactButton";

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

            <div className="main-text-container bg-navy absolute rounded-2xl shadow-2xl">
                <h1 className="2xs:text-lg xs:text-xl sm:text-2xl xl:text-3xl font-semibold pb-2 text-white">Take the Quiz! Discover Your Money Magnetism Archetype</h1>

                <hr className="py-3 text-white" />
                
                <p className="2xs:text-sm sm:text-md xl:text-lg leading-6 text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <ContactButton text={"Contact Now"} />
            </div>

            <div className="main-text-container-secondary bg-white absolute rounded-2xl shadow-2xl"></div>
        </div>
    )
}

export default MainText;