import Image from "next/image";
import Link from "next/link";

import $ from 'jquery';

function handleClick(closeState: any) {
    closeState(false);

    const dog = document.querySelector(".dog");
    const contact = document.querySelector(".contact");
    const cat = document.querySelector(".cat");

    $(".outline").each(function() {
        $(this).removeClass("bg-white");
    });

    $(".initial-image").each(function() {
        $(this).addClass("opacity-full");
        $(this).removeClass("opacity-zero");
    });

    $(".hover-image").each(function() {
        $(this).addClass("opacity-zero");
        $(this).removeClass("opacity-full");
    });

    setTimeout(() => {
        if ((window.location.href).includes("/dog") || (window.location.href).includes("/cat")) {
            if ((window.location.href).includes("/dog")) {
                if (dog) {
                    dog.classList.add("bg-white");

                    $(".dog-initial-image").addClass("opacity-zero");
                    $(".dog-initial-image").removeClass("opacity-full");

                    $(".dog-hover-image").addClass("opacity-full");
                    $(".dog-hover-image").removeClass("opacity-zero");
                }
            } else {
                if (cat) {
                    cat.classList.add("bg-white");
                    
                    $(".cat-initial-image").addClass("opacity-zero");
                    $(".cat-initial-image").removeClass("opacity-full");

                    $(".cat-hover-image").addClass("opacity-full");
                    $(".cat-hover-image").removeClass("opacity-zero");
                }
            }
        } else {
            if (contact) {
                contact.classList.add("bg-white");
                
                $(".contact-initial-image").addClass("opacity-zero");
                $(".contact-initial-image").removeClass("opacity-full");

                $(".contact-hover-image").addClass("opacity-full");
                $(".contact-hover-image").removeClass("opacity-zero");
            }
        }
    }, 500);
}

function HamburgerLink({
    href,
    closeState,
    title,
    titleSize,
    imageSrc,
    width,
    height,
    alt,
}: {
    href: string;
    closeState: any;
    title: string;
    titleSize: string;
    imageSrc?: string;
    width?: number;
    height?: number;
    alt?: string;
}) {
    return (
        <Link href={href} onClick={() => {`${handleClick(closeState)}`}} className={`flex flex-row cursor-pointer ${imageSrc ? 'justify-between items-center' : ''}`}>
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
    closeState,
    title,
    imageSrc,
    alt,
}: {
    href: string;
    closeState: any;
    title: string;
    imageSrc: string;
    alt: string;
}) {
    return (
        <Link href={href} onClick={() => {`${handleClick(closeState)}`}} className="flex flex-row cursor-pointer justify-normal items-center pl-4">
            <Image
                src={imageSrc}
                width={37}
                height={37}
                className="p-2 mr-2"
                alt={alt}
            />

            <span className="cursor-pointer text-navy text-base xs:text-lg hover:text-yellow transition ease-in-out duration-500">{title}</span>
        </Link>
    )
}

const OpenHamburgerMenu = ({closeState}: {closeState: any}) => {
    return (
        <div id="openHamburgerMenu" className="absolute top-[4.5em] lg:top-[5.5em] right-0 bg-white rounded-md p-1 2xs:w-60 xs:w-[19em] shadow-2xl border border-slate-600">
            <div className="p-2">
                <HamburgerLink
                    href="/#home"
                    closeState={closeState}
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
                        title="About Me"
                        titleSize="text-base xs:text-lg"
                    />
                    <HamburgerLink
                        href="/#testimonials"
                        closeState={closeState}
                        title="Testimonials"
                        titleSize="text-base xs:text-lg"
                    />
                    <HamburgerLink
                        href="/#services"
                        closeState={closeState}
                        title="Services"
                        titleSize="text-base xs:text-lg"
                    />
                    <HamburgerLink
                        href="/#parentContact"
                        closeState={closeState}
                        title="Contact"
                        titleSize="text-base xs:text-lg"
                    />
                    <HamburgerLink
                        href="/#contactForm"
                        closeState={closeState}
                        title="Get Connected"
                        titleSize="text-base xs:text-lg"
                    />

                    <hr className="block w-full mx-auto" />

                    <div className="block pb-1">
                        <HamburgerExternalLink
                            href="/dog"
                            closeState={closeState}
                            title="Dog Sitting"
                            imageSrc="/dogiconnavy.png"
                            alt="Dog Icon"
                        />
                        <HamburgerExternalLink
                            href="/cat"
                            closeState={closeState}
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