"use client";

import Image from "next/image";
import {Link} from "react-scroll";

function FooterLink({
    title,
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
            <h2 className="text-white text-lg sm:text-xl xl:text-2xl font-bold mb-2 md:mb-4">{title}</h2>

            <Link to={linkFirst} spy={true} smooth={true} duration={500} offset={-130} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                {nameFirst}
            </Link>
            {linkSecond && nameSecond && (
                <Link to={linkSecond} spy={true} smooth={true} duration={500} offset={-100} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                    {nameSecond}
                </Link>
            )}
            {linkThird && nameThird && (
                <Link to={linkThird} spy={true} smooth={true} duration={500} offset={-100} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                    {nameThird}
                </Link>
            )}
            {linkFourth && nameFourth && (
                <Link to={linkFourth} spy={true} smooth={true} duration={500} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                    {nameFourth}
                </Link>
            )}
        </div>
    );
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
                            linkFirst="about"
                            nameFirst="About Me"
                            linkSecond="services"
                            nameSecond="Services"
                            linkThird="contact"
                            nameThird="Contact"
                            linkFourth="contactForm"
                            nameFourth="Get Connected"
                        />
                        <FooterLink
                            title="Dog Services"
                            linkFirst="dog"
                            nameFirst="About"
                        />
                        <FooterLink
                            title="Cat Services"
                            linkFirst="cat"
                            nameFirst="About"
                        />
                    </div>
                    <div className="flex flex-col md:hidden">
                        <FooterLink
                            title="Home"
                            linkFirst="about"
                            nameFirst="About Me"
                            linkSecond="services"
                            nameSecond="Services"
                            linkThird="contact"
                            nameThird="Contact"
                            linkFourth="contactForm"
                            nameFourth="Get Connected"
                        />
                        <FooterLink
                            title="Dog Services"
                            linkFirst="dog"
                            nameFirst="About"
                        />
                    </div>
                    <div className="flex flex-col md:hidden">
                        <FooterLink
                            title="Cat Services"
                            linkFirst="cat"
                            nameFirst="About"
                        />
                        <Link to="home" spy={true} smooth={true} duration={500} offset={-200} className="flex flex-row justify-center mt-2 cursor-pointer">
                            <Image
                                src="/averyspetsittinglogo1.png"
                                width={150}
                                height={150}
                                alt="Avery's Pet Sitting Logo"
                                className="max-w-20 xs:max-w-28 mt-14"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly md:basis-1/3 md:pt-2 lg:pt-6">
                    <div className="flex flex-col">
                        <Link to="home" spy={true} smooth={true} duration={500} offset={-200} className="md:min-w-44 hidden md:flex flex-row justify-center mt-2 cursor-pointer">
                            <Image
                                src="/averyspetsittinglogo1.png"
                                width={150}
                                height={150}
                                alt="Avery's Pet Sitting Logo"
                                className="max-w-16 md:max-w-full"
                            />
                        </Link>
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
                                link="https://www.linkedin.com/in/mitchell-gruner-12a4ab163/"
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