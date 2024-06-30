"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo";

import $ from 'jquery';

function handleClick() {
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

function FooterLink({
    title,
    linkTitle,
    linkFirst,
    nameFirst,
    linkSecond,
    nameSecond,
    linkThird,
    nameThird,
    linkFourth,
    nameFourth,
}: {
    title: string;
    linkTitle: string;
    linkFirst: string;
    nameFirst: string;
    linkSecond?: string;
    nameSecond?: string;
    linkThird?: string;
    nameThird?: string;
    linkFourth?: string;
    nameFourth?: string;
}) {
    return (
        <div className="flex flex-col pt-2 lg:pt-4 xl:pt-6">
            <Link href={linkTitle} onClick={handleClick} className="text-white text-lg sm:text-xl xl:text-2xl font-bold mb-2 md:mb-4 cursor-pointer hover:text-yellow transition ease-in-out duration-500">{title}</Link>

            <Link href={linkFirst} onClick={handleClick} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                {nameFirst}
            </Link>
            {linkSecond && nameSecond && (
                <Link href={linkSecond} onClick={handleClick} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                    {nameSecond}
                </Link>
            )}
            {linkThird && nameThird && (
                <Link href={linkThird} onClick={handleClick} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                    {nameThird}
                </Link>
            )}
            {linkFourth && nameFourth && (
                <Link href={linkFourth} onClick={handleClick} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                    {nameFourth}
                </Link>
            )}
        </div>
    );
}

function FooterLinkPet({
    href,
    title,
    linkFirst,
    nameFirst,
    linkSecond,
    nameSecond,
}: {
    href: string;
    title: string;
    linkFirst: string;
    nameFirst: string;
    linkSecond?: string;
    nameSecond?: string;
}) {
    return (
        <div className="flex flex-col pt-2 lg:pt-4 xl:pt-6">
            <Link href={href} onClick={handleClick} className="text-white text-lg sm:text-xl xl:text-2xl font-bold mb-2 md:mb-4 cursor-pointer hover:text-yellow transition ease-in-out duration-500">{title}</Link>

            <Link href={linkFirst} onClick={handleClick} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                {nameFirst}
            </Link>

            {linkSecond && nameSecond && (
                <Link href={linkSecond} onClick={handleClick} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                    {nameSecond}
                </Link>
            )}
        </div>
    )
}

function SocialLinks({
    link,
    image,
    className,
    alt,
}: {
    link: string;
    image: string;
    className: string;
    alt: string;
}) {
    return (
        <a href={link} className="rounded-full bg-white p-2 mx-2 cursor-pointer hover:bg-yellow transition ease-in-out duration-500">
            <Image
                src={image}
                width={35}
                height={35}
                alt={alt}
                className={`${className}`}
            />
        </a>
    );
}

const Footer = () => {
    return (
        <div id="footer" className="bg-slate w-full py-4 border-t border-white z-10">
            <div className="max-w-[1600px] mx-auto flex flex-row justify-between">
                <div className="flex flex-row justify-evenly basis-full md:basis-2/3">
                    <div className="hidden md:flex md:flex-row w-full justify-evenly">
                        <FooterLink
                            title="Home"
                            linkTitle="/#home"
                            linkFirst="/#about"
                            nameFirst="About Me"
                            linkSecond="/#services"
                            nameSecond="Services"
                            linkThird="/#parentContact"
                            nameThird="Contact"
                            linkFourth="/#contactForm"
                            nameFourth="Get Connected"
                        />
                        <FooterLinkPet
                            href="/dog"
                            title="Dog Services"
                            linkFirst="/dog#photoCallout"
                            nameFirst="Slideshow"
                            linkSecond="/dog#imageBlurbs"
                            nameSecond="Image Callouts"
                        />
                        <FooterLinkPet
                            href="/cat"
                            title="Cat Services"
                            linkFirst="/cat#catCarousel"
                            nameFirst="Highlights"
                        />
                    </div>
                    <div className="flex flex-col md:hidden">
                        <FooterLink
                            title="Home"
                            linkTitle="/#home"
                            linkFirst="/#about"
                            nameFirst="About Me"
                            linkSecond="/#services"
                            nameSecond="Services"
                            linkThird="/#parentContact"
                            nameThird="Contact"
                            linkFourth="/#contactForm"
                            nameFourth="Get Connected"
                        />
                        <FooterLinkPet
                            href="/dog"
                            title="Dog Services"
                            linkFirst="/dog#photoCallout"
                            nameFirst="Slideshow"
                            linkSecond="/dog#imageBlurbs"
                            nameSecond="Image Callouts"
                        />
                    </div>
                    <div className="flex flex-col md:hidden">
                        <FooterLinkPet
                            href="/cat"
                            title="Cat Services"
                            linkFirst="/cat#catCarousel"
                            nameFirst="Highlights"
                        />
                        <Logo className="max-w-20 xs:max-w-28 mt-14" width={150} height={150} />
                    </div>
                </div>
                <div className="hidden md:flex flex-row justify-evenly md:basis-1/3 md:pt-2 lg:pt-6">
                    <div className="flex flex-col">
                        <Logo className="max-w-16 md:max-w-full" width={150} height={150} />
                    </div>
                </div>
            </div>

            <hr className="max-w-[1300px] border-white mt-4 sm:mt-6 lg:mt-8 lg:mb-2 w-11/12 lg:w-5/6 mx-auto" />

            <div className="max-w-[1300px] w-5/6 mx-auto block md:flex md:flex-row justify-between pb-2 lg:pb-6 mt-6">
                <div className="flex flex-col mb-4 md:mb-0">
                    <p className="flex items-center text-white text-base xl:text-lg">©2024. All rights reserved.</p>

                    <div className="flex flex-row">
                        <p className="hidden xs:flex items-center text-white text-base xl:text-lg mr-2 lg:mr-4">Designed by&nbsp;<span className="text-yellow">Mitchell Gruner</span></p>
                        
                        <div className="flex flex-row items-center mt-4 xs:mt-0">
                            <p className="xs:hidden socials-link items-center text-white text-sm xl:text-lg mr-2 lg:mr-4"><span>Mitchell's Socials:</span></p>
                            <SocialLinks
                                link="https://www.linkedin.com/in/mitchell-gruner/"
                                image="/linkedin.logo.large.png"
                                className="max-w-6 xl:max-w-6"
                                alt="LinkedIn Logo"
                            />
                            <SocialLinks
                                link="https://github.com/MitchellGruner"
                                image="/github.logo.navy.png"
                                className="max-w-6 xl:max-w-6"
                                alt="GitHub Logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mt-2 xs:mt-0 items-center">
                    <p className="md:hidden socials-link xs:flex items-center text-white text-sm xl:text-lg mr-2 lg:mr-4"><span>Avery's Socials:</span></p>
                    <SocialLinks
                        link="https://www.linkedin.com/in/avery-geiger-2b0703198"
                        image="/linkedin.logo.large.png"
                        className="max-w-6 lg:max-w-8 xl:max-w-full"
                        alt="LinkedIn Logo"
                    />
                    <SocialLinks
                        link="https://www.instagram.com/averyjeans12/"
                        image="/instagram.logo.large.png"
                        className="max-w-6 lg:max-w-8 xl:max-w-full"
                        alt="Instagram Logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;