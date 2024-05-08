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
                <Link to={linkFourth} spy={true} smooth={true} duration={500} offset={-75} className="text-off-white text-base xl:text-lg cursor-pointer pb-1 hover:text-white transition ease-in-out duration-500">
                    {nameFourth}
                </Link>
            )}
        </div>
    );
}

function SocialLinks({
    link,
    image,
    alt,
}: {
    link: string;
    image: string;
    alt: string;
}) {
    return (
        <a href={link} className="rounded-full bg-white p-2 mx-2 cursor-pointer hover:bg-yellow transition ease-in-out duration-500">
            <Image
                src={image}
                width={35}
                height={35}
                alt={alt}
                className="max-w-6 lg:max-w-8 xl:max-w-full"
            />
        </a>
    );
}

const Footer = () => {
    return (
        <div className="bg-slate w-full md:mt-40 lg:mt-48 xl:mt-52 py-4 border-t border-white z-10">
            <div className="max-w-[1600px] mx-auto flex flex-row justify-between">
                <div className="flex flex-row justify-evenly basis-full md:basis-2/3">
                    <div className="flex flex-col md:flex-row">
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
                    <div className="flex flex-col md:flex-row">
                        <FooterLink
                            title="Cat Services"
                            linkFirst="cat"
                            nameFirst="About"
                        />
                        <a href="/" className="md:hidden md:min-w-44 flex flex-row justify-center mt-2">
                            <Image
                                src="/averyspetsittinglogo1.png"
                                width={150}
                                height={150}
                                alt="Avery's Pet Sitting Logo"
                                className="max-w-20 xs:max-w-28 mt-14"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly md:basis-1/3 md:pt-2 lg:pt-6">
                    <div className="flex flex-col">
                        <a href="/" className="md:min-w-44 hidden md:flex flex-row justify-center mt-2">
                            <Image
                                src="/averyspetsittinglogo1.png"
                                width={150}
                                height={150}
                                alt="Avery's Pet Sitting Logo"
                                className="max-w-16 md:max-w-full"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="max-w-[1600px] border-white mt-4 sm:mt-6 lg:mt-8 lg:mb-2 w-11/12 lg:w-5/6 mx-auto" />

            <div className="max-w-[1600px] w-5/6 mx-auto block xs:flex xs:flex-row justify-between pb-2 lg:pb-6 mt-6">
                <div className="flex flex-row">
                    <p className="flex items-center text-white text-base xl:text-lg">© 2024. All rights reserved.</p>
                </div>

                <div className="flex flex-row mt-2 xs:mt-0">
                    <SocialLinks
                        link="https://www.linkedin.com/in/avery-geiger-2b0703198"
                        image="/linkedin.logo.large.png"
                        alt="LinkedIn Logo"
                    />
                    <SocialLinks
                        link="https://www.instagram.com/averyjeans12/"
                        image="/instagram.logo.large.png"
                        alt="Instagram Logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;