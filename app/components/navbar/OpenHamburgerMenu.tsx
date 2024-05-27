import Image from "next/image";
import Link from "next/link";

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
        <Link href={href} onClick={() => {`${closeState(false)}`}} className={`flex flex-row cursor-pointer ${imageSrc ? 'justify-between items-center' : ''}`}>
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

function HamburgerExternalLink({
    href,
    title,
    imageSrc,
    alt,
}: {
    href: string;
    title: string;
    imageSrc: string;
    alt?: string;
}) {
    return (
        <a href={href} className="flex flex-row cursor-pointer justify-normal items-center pl-4">
            <Image
                src={imageSrc}
                width={37}
                height={37}
                className="p-2 mr-2"
                alt={alt || ""}
            />

            <span className="cursor-pointer text-navy text-base xs:text-lg hover:text-yellow transition ease-in-out duration-500">{title}</span>
        </a>
    )
}

const OpenHamburgerMenu = ({closeState}: {closeState: any}) => {
    return (
        <div id="openHamburgerMenu" className="absolute top-[4.5em] lg:top-[5.5em] right-0 bg-white rounded-md p-1 2xs:w-60 xs:w-[19em] shadow-2xl border border-slate-600">
            <div className="p-2">
                <HamburgerLink
                    href="/#home"
                    closeState={closeState}
                    offset={-250}
                    title="Avery's Pet Sitting"
                    titleSize="hidden xs:block xs:text-xl"
                    imageSrc="/averysprofessionalphoto.jpg"
                    width={65}
                    height={0}
                    alt="Avery's Headshot"
                />

                <hr className="w-[95%] mx-auto mt-1" />

                <div className="px-4 mt-4 space-y-0">
                    <HamburgerLink
                        href="/#about"
                        closeState={closeState}
                        offset={-150}
                        title="About Me"
                        titleSize="text-base xs:text-lg"
                    />
                    <HamburgerLink
                        href="/#testimonials"
                        closeState={closeState}
                        offset={-25}
                        title="Testimonials"
                        titleSize="text-base xs:text-lg"
                    />
                    <HamburgerLink
                        href="/#services"
                        closeState={closeState}
                        offset={-100}
                        title="Services"
                        titleSize="text-base xs:text-lg"
                    />
                    <HamburgerLink
                        href="/#parentContact"
                        closeState={closeState}
                        offset={-100}
                        title="Contact"
                        titleSize="text-base xs:text-lg"
                    />
                    <HamburgerLink
                        href="/#contactForm"
                        closeState={closeState}
                        offset={-80}
                        title="Get Connected"
                        titleSize="text-base xs:text-lg"
                    />

                    <hr className="block w-full mx-auto" />

                    <div className="block pb-1">
                        <HamburgerExternalLink
                            href="/dog"
                            title="Dog Sitting"
                            imageSrc="/dogiconnavy.png"
                            alt="Dog Icon"
                        />
                        <HamburgerExternalLink
                            href="/cat"
                            title="Cat Sitting"
                            imageSrc="/caticonnavy.png"
                            alt="Cat Icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenHamburgerMenu;