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
                <h1 className="2xs:text-lg xs:text-xl sm:text-2xl xl:text-3xl font-semibold pb-2 text-white"><span className="italic text-yellow pr-1">Pawsitively</span> the best care for your pet!</h1>

                <hr className="py-3 text-white" />
                
                <p className="2xs:text-sm sm:text-md xl:text-lg leading-6 text-white">
                    I offer a wide variety of pet services such as in-home/overnight sitting for both cats and dogs as well as drop-in visits for walks, playtime, feeding, medication administration, and more. I’m always happy to send photos and updates of all the fun we have, too. 
                </p>

                <p className="2xs:text-sm sm:text-md xl:text-lg 2xs:mt-2 xl:mt-4 leading-6 text-white">
                    I provide care for all furry friends - big and small - throughout the greater Franklin/Nashville area.
                </p>

                <ContactButton text={"Contact Now"} />
            </div>

            <div className="main-text-container-secondary bg-white absolute rounded-2xl shadow-2xl"></div>
        </div>
    )
}

export default MainText;