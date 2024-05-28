import Image from "next/image";
import ContactButton from "../components/ContactButton";

function PhotoText({
    imageSrc,
    alt,
    divClassName,
    header,
    paragraph
}: {
    imageSrc: string;
    alt: string;
    divClassName: string;
    header: string;
    paragraph: string;
}) {
    return (
        <div className="flex flex-row mt-52">
            <Image
                src={imageSrc}
                width={330}
                height={330}
                alt={alt}
                className="shadow-2xl"
            />
            <div className="relative">
                <div className={`relative bg-navy ${divClassName} py-6 px-8 rounded-xl h-fit z-[1] shadow-2xl`}>
                    <h1 className="text-yellow text-3xl font-bold italic mb-4"><span>{header}</span></h1>
                    <p className="text-white text-xl">{paragraph}</p>
                </div>
                <div className={`absolute bg-white rounded-xl z-0 shadow-2xl ${divClassName}`}></div>

                <ContactButton text={"Contact Me"} class="2xl:ml-[35em]" />
            </div>
        </div>
    )
};

const ImageBlurbs = () => {
    return (
        <div id="imageBlurbs">
            <PhotoText 
                imageSrc="/two.dogs.looking.at.camera.png"
                alt="Two Dogs Looking at the Camera"
                divClassName="ml-24 mr-72"
                header="Your Dog's New Best Friend"
                paragraph="As a passionate and experienced dog lover, I bring a unique blend of reliability, enthusiasm, and genuine care to dog sitting. With years of experience in handling dogs of various breeds and temperaments,I understand the nuances of canine behavior and needs. I ensure that your furry friend receives personalized attention, regular exercise, and plenty of affection. My commitment to providing a safe, fun, and nurturing environment means you can have peace of mind knowing that your dog is in loving hands while you're away."
            />
            <PhotoText
                imageSrc="/avery.with.summer.png"
                alt="Avery with Summer"
                divClassName="mr-24 ml-72"
                header="Your Dog's New Best Friend"
                paragraph="As a passionate and experienced dog lover, I bring a unique blend of reliability, enthusiasm, and genuine care to dog sitting. With years of experience in handling dogs of various breeds and temperaments,I understand the nuances of canine behavior and needs. I ensure that your furry friend receives personalized attention, regular exercise, and plenty of affection. My commitment to providing a safe, fun, and nurturing environment means you can have peace of mind knowing that your dog is in loving hands while you're away."
            />
        </div>
    )
}

export default ImageBlurbs;