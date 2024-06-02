"use client";

import Link from "next/link";

import $ from 'jquery';

type Props = {
    text: string;
    class?: string;
};

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

const ContactButton = (props: Props) => {
    return (
        <Link href="/#contactForm" onClick={handleClick} className={`inline-block mb-6 2xs:py-1 xs:py-2 sm:py-2 md:py-3 lg:py-2 2xs:px-4 sm:px-6 md:px-10 lg:px-14 2xs:mt-4 md:mt-6 lg:mt-10 text-center text-black text-md font-bold bg-white shadow-2xl uppercase hover:bg-brown transition ease-in-out duration-500 italic cursor-pointer ${props.class}`}>
            <div className="flex flex-row items-center justify-center">
                <span className="2xs:contents xs:block pr-10 2xs:text-xs xs:text-sm lg:text-md 2xl:text-lg">{props.text}</span>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
            </div>
        </Link>
    )
}

export default ContactButton;