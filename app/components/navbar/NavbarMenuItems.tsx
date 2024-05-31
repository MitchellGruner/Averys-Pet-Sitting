"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

function NavbarMenuItemsLink({
    href,
    linkClassName,
    firstImageSrc,
    firstImageAlt,
    secondImageSrc,
    secondImageAlt,
    title,
}: {
    href: string;
    linkClassName: string;
    firstImageSrc: string;
    firstImageAlt: string;
    secondImageSrc: string;
    secondImageAlt: string;
    title: string;
}) {
    return (
        <Link href={href} onClick={handleClick} className={`${linkClassName} outline inline-block transition ease-in-out duration-500 icon-container`}>
            <div className="flex flex-row items-center justify-center relative py-1 cursor-pointer hover:text-navy">
                <Image
                    src={firstImageSrc}
                    width={24}
                    height={24}
                    alt={firstImageAlt}
                    className={`unskew initial-image ${linkClassName}-initial-image opacity-full`}
                />
                <Image
                    src={secondImageSrc}
                    width={24}
                    height={24}
                    alt={secondImageAlt}
                    className={`icon-hover hover-image unskew absolute object-contain opacity-zero transition ease-in-out duration-500 ${linkClassName}-hover-image`}
                />
                <span className="md:pl-2 lg:pl-4 font-bold unskew">{title}</span>
            </div>
        </Link>
    )
}

const NavbarMenuItems = () => {
    useEffect(() => {
        handleClick();
    }, []);

    return (
        <div className="hidden md:flex md:flex-row mx-auto">
            <NavbarMenuItemsLink
                href="/dog"
                linkClassName="dog"
                firstImageSrc="/dogiconwhite2.png"
                firstImageAlt="White Dog Icon"
                secondImageSrc="/dogiconnavy.png"
                secondImageAlt="Navy Dog Icon"
                title="Dog"
            />
            &nbsp;
            <NavbarMenuItemsLink
                href="/#contactForm"
                linkClassName="contact"
                firstImageSrc="/mailiconwhite4.png"
                firstImageAlt="White Mail Icon"
                secondImageSrc="/mailiconnavy.png"
                secondImageAlt="Navy Mail Icon"
                title="Contact Me"
            />&nbsp;
            <NavbarMenuItemsLink
                href="/cat"
                linkClassName="cat"
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