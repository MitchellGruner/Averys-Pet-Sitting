import Image from "next/image";

import MainText from "./MainText";

const Main = () => {
    return (
        <div className="main-container">
            <div className="fixed">
                <Image
                    src="/parkbackground.jpg"
                    width={1000}
                    height={1000}
                    alt="Dog Park Background"
                    className="rounded-l-2xl shadow-2xl"
                />

                <Image
                    src="/averysprofessionalphoto.jpg"
                    width={300}
                    height={300}
                    alt="Avery's Headshot"
                    className="absolute sm:max-w-56 sm:top-20 sm:left-[50%] md:max-w-64 md:top-32 lg:max-w-72 lg:top-36 md:left-[55%] lg:left-[65%] 3xl:top-36 4xl:left-12 3xl:max-w-72 rounded-full border-2 border-white shadow-2xl"
                />
            </div>

            <MainText />
        </div>
    )
}

export default Main;