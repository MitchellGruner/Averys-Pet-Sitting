import Image from "next/image";
import { Link } from "react-scroll";

function HamburgerLink({
    href,
    closeState,
    offset,
    title,
    titleSize,
    imageSrc,
    width,
    height,
    alt,
}: {
    href: string;
    closeState: any;
    offset: number;
    title: string;
    titleSize: string;
    imageSrc?: string;
    width?: number;
    height?: number;
    alt?: string;
}) {
    return (
        <Link to={href} spy={true} smooth={true} duration={500} offset={offset} onClick={() => {`${closeState(false)}`}} className={`flex flex-row cursor-pointer ${imageSrc ? 'justify-between items-center' : ''}`}>
            <span className={`pr-4 cursor-pointer text-navy ${titleSize} hover:text-yellow transition ease-in-out duration-500`}>{title}</span>
            
            {imageSrc && (
                <Image
                    src={imageSrc}
                    width={width}
                    height={height}
                    className="rounded-full p-2"
                    alt={alt || ""}
                />
            )}
        </Link>
    )
}

const OpenHamburgerMenu = ({closeState}: {closeState: any}) => {
    return (
        <div id="openHamburgerMenu" className="test-class absolute top-[5.5em] right-0 bg-white rounded-md 2xs:w-60 xs:w-72 border border-slate-600">
            <div className="p-2">
                <HamburgerLink
                    href="home"
                    closeState={closeState}
                    offset={-250}
                    title="Avery's Pet Sitting"
                    titleSize="text-xl"
                    imageSrc="/defaultprofilepicture.jpg"
                    width={65}
                    height={0}
                    alt="Profile Icon"
                />

                <hr className="w-[95%] mx-auto mt-1" />

                <div className="px-4 mt-4 space-y-0">
                    <HamburgerLink
                        href="about"
                        closeState={closeState}
                        offset={-80}
                        title="About Me"
                        titleSize="text-lg"
                    />
                    <HamburgerLink
                        href="testimonials"
                        closeState={closeState}
                        offset={-80}
                        title="Testimonials"
                        titleSize="text-lg"
                    />
                    <HamburgerLink
                        href="services"
                        closeState={closeState}
                        offset={-80}
                        title="Services"
                        titleSize="text-lg"
                    />
                    <HamburgerLink
                        href="contact"
                        closeState={closeState}
                        offset={-80}
                        title="Contact"
                        titleSize="text-lg"
                        imageSrc="/averysprofessionalphoto.jpg"
                        width={50}
                        height={50}
                        alt="Avery's Headshot"
                    />
                    <HamburgerLink
                        href="contactForm"
                        closeState={closeState}
                        offset={-80}
                        title="Get Connected"
                        titleSize="text-lg"
                    />
                    <HamburgerLink
                        href="dog"
                        closeState={closeState}
                        offset={-80}
                        title="Dog Sitting"
                        titleSize="text-lg"
                        imageSrc="/dogiconnavy.png"
                        width={40}
                        height={40}
                        alt="Dog Icon"
                    />
                    <HamburgerLink
                        href="cat"
                        closeState={closeState}
                        offset={-80}
                        title="Cat Sitting"
                        titleSize="text-lg"
                        imageSrc="/caticonnavy.png"
                        width={40}
                        height={40}
                        alt="Cat Icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default OpenHamburgerMenu;