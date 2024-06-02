"use client";

import Link from "next/link";
import Image from "next/image";

import $ from 'jquery';

type Props = {
    className: string;
    width: number;
    height: number;
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

const Logo = (props: Props) => {
    return (
        <Link href="/#home" onClick={handleClick} className="md:min-w-44 flex flex-row justify-center cursor-pointer">
            <Image
                src="/averyspetsittinglogo1.png"
                width={props.width}
                height={props.height}
                alt="Avery's Pet Sitting Logo"
                className={`${props.className}`}
            />
        </Link>
    )
}

export default Logo;