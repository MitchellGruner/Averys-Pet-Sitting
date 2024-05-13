"use client";

import Image from "next/image";
import {Link} from "react-scroll";

function NavbarMenuItemsLink({
    href,
    offset,
    linkClassName,
    divClassName,
    firstImageSrc,
    firstImageAlt,
    secondImageSrc,
    secondImageAlt,
    title,
}: {
    href: string;
    offset: number;
    linkClassName: string;
    divClassName?: string;
    firstImageSrc: string;
    firstImageAlt: string;
    secondImageSrc?: string;
    secondImageAlt?: string;
    title: string;
}) {
    return (
        <Link to={href} spy={true} smooth={true} duration={500} offset={offset} className={`${linkClassName} outline inline-block transition ease-in-out duration-500 icon-container`}>
            <div className={`flex flex-row items-center justify-center relative py-1 cursor-pointer ${divClassName}`}>
                <Image
                    src={firstImageSrc}
                    width={24}
                    height={24}
                    alt={firstImageAlt}
                    className="unskew"
                />
                {secondImageSrc && secondImageAlt && (
                    <Image
                        src={secondImageSrc}
                        width={24}
                        height={24}
                        alt={secondImageAlt}
                        className="icon-hover unskew absolute object-contain opacity-0 transition ease-in-out duration-500"
                    />
                )}
                <span className="md:pl-2 lg:pl-4 font-bold unskew">{title}</span>
            </div>
        </Link>
    )
}

const NavbarMenuItems = () => {
    return (
        <div className="hidden md:flex md:flex-row mx-auto">
            <NavbarMenuItemsLink
                href="/dog"
                offset={-250}
                linkClassName="dog"
                divClassName="hover:text-navy"
                firstImageSrc="/dogiconwhite2.png"
                firstImageAlt="White Dog Icon"
                secondImageSrc="/dogiconnavy.png"
                secondImageAlt="Navy Dog Icon"
                title="Dog"
            />
            &nbsp;
            <NavbarMenuItemsLink
                href="contactForm"
                offset={-50}
                linkClassName="contact"
                firstImageSrc="/mailiconnavy.png"
                firstImageAlt="Navy Mail Icon"
                title="Contact Me"
            />&nbsp;
            <NavbarMenuItemsLink
                href="/cat"
                offset={-250}
                linkClassName="cat"
                divClassName="hover:text-navy"
                firstImageSrc="/caticonwhite.png"
                firstImageAlt="White Cat Icon"
                secondImageSrc="/caticonnavy.png"
                secondImageAlt="Navy Cat Icon"
                title="Cat"
            />
        </div>
    )
}

export default NavbarMenuItems;