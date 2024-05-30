import Image from "next/image";
import ContactButton from "../components/ContactButton";

function PhotoText({
    imageSrc,
    alt,
    textOrientation,
    divClassName,
    header,
    paragraph,
    buttonClassName,
}: {
    imageSrc: string;
    alt: string;
    textOrientation: string;
    divClassName: string;
    header: string;
    paragraph: string;
    buttonClassName: string;
}) {
    return (
        <div className={`flex flex-col lg:flex-row md:mt-28 lg:mt-32 xl:mt-40 2xl:mt-52 ${textOrientation}`}>
            <Image
                src={imageSrc}
                width={330}
                height={330}
                alt={alt}
                className="shadow-2xl"
            />
            <div className="relative">
                <div className={`relative bg-navy md:mt-16 md:mb-4 lg:mt-0 lg:mb-0 md:w-[36.3em] lg:w-[28em] xl:w-[40em] 2xl:w-[50em] ${divClassName} md:py-4 xl:py-6 md:px-6 xl:px-8 rounded-xl h-fit z-[1] shadow-2xl`}>
                    <h1 className="text-yellow md:text-2xl xl:text-3xl font-bold italic mb-4"><span>{header}</span></h1>
                    <p className="text-white md:text-base xl:text-xl">{paragraph}</p>
                </div>
                <div className={`absolute bg-white rounded-xl z-0 shadow-2xl ${divClassName}`}></div>

                <ContactButton text={"Contact Me"} class={`${buttonClassName}`} />
            </div>
        </div>
    )
};

const ImageBlurbs = () => {
    return (
        <div id="imageBlurbs" className="md:mx-16 2xl:mx-24">
            <PhotoText 
                imageSrc="/two.dogs.looking.at.camera.png"
                alt="Two Dogs Looking at the Camera"
                textOrientation="text-left"
                divClassName="ml-14"
                header="Your Dog's New Best Friend"
                paragraph="As a passionate and experienced dog lover, I bring a unique blend of reliability, enthusiasm, and genuine care to dog sitting. With years of experience in handling dogs of various breeds and temperaments, I understand the nuances of canine behavior and needs. I ensure that your furry friend receives personalized attention, regular exercise, and plenty of affection. My commitment to providing a safe, fun, and nurturing environment means you can have peace of mind knowing that your dog is in loving hands while you're away."
                buttonClassName="md:ml-[20em] lg:ml-[14em] xl:ml-[23em] 2xl:ml-[35em]"
            />
            <PhotoText
                imageSrc="/avery.with.summer.png"
                alt="Avery with Summer"
                textOrientation="text-right"
                divClassName="mr-14"
                header="Tail-Wagging Care Guaranteed"
                paragraph="Picture this: a lifelong dog lover with a heart as big as their enthusiasm for canine companionship. That's me in a nutshell! Growing up surrounded by wagging tails and wet noses, I learned the language of dogs – from playful barks to soulful gazes. I pride myself on being a keen observer of their needs and quirks, ensuring every tail gets the wag it deserves. With me, your pup isn't just a job; they're family. So, let's embark on this adventure together, where every pawprint leads to cherished memories and endless tail wags."
                buttonClassName="lg:mr-[14em] xl:mr-[23em] 2xl:mr-[35em]"
            />
        </div>
    )
}

export default ImageBlurbs;