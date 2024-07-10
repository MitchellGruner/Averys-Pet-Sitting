import Image from "next/image";
import ContactButton from "../ContactButton";

type Props = {
    imageSrc: string;
    alt: string;
    textOrientation: string;
    parentClassName?: string;
    divClassName?: string;
    header: string;
    paragraph: string;
    buttonClassName: string;
};

const ImageBlurbs = (props: Props) => {
    return (
        <div id="imageBlurbs" className="mx-8 sm:mx-0 md:mx-16 2xl:mx-24">
            <div className={`block md:flex md:flex-col lg:flex-row ${props.parentClassName} ${props.textOrientation}`}>
                <Image
                    src={props.imageSrc}
                    width={330}
                    height={330}
                    alt={props.alt}
                    className="shadow-2xl"
                />
                <div className="relative">
                    <div className={`relative bg-navy mt-12 xs:ml-14 sm:mt-12 md:mt-16 mb-2 md:mb-4 lg:mt-0 lg:mb-0 xs:w-[20em] sm:w-[26em] md:w-[36.3em] lg:w-[28em] xl:w-[40em] 2xl:w-[50em] ${props.divClassName} py-4 xl:py-6 px-6 xl:px-8 rounded-xl h-fit z-[1] shadow-2xl`}>
                        <h1 className="text-yellow text-xl md:text-2xl xl:text-3xl font-bold italic mb-4"><span>{props.header}</span></h1>
                        <p className="text-white text-base xl:text-xl">{props.paragraph}</p>
                    </div>
                    <div className={`hidden xs:block absolute bg-white rounded-xl z-0 shadow-2xl ${props.divClassName}`}></div>

                    <ContactButton text={"Contact Me"} class={`${props.buttonClassName} mt-[3em] lg:mt-0`} />
                </div>
            </div>
        </div>
    )
}

export default ImageBlurbs;