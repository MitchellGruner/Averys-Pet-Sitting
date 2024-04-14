import Image from "next/image";

import MainText from "./MainText";

const Main = () => {
    return (
        <div className="min-h-max max-w-[1600px]">
            <div className="main-container">
                <Image
                    id="mainBackground"
                    src="/avery.flowers.image.jpg"
                    width={1000}
                    height={400}
                    alt="Dog Park Background"
                    className="rounded-l-2xl shadow-2xl max-w-full"
                />

                <MainText />
            </div>
        </div>
    )
}

export default Main;