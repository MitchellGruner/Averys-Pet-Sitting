"use client";

import Image from "next/image";

import MainText from "./MainText";
import { useState, useEffect } from "react";
import $ from 'jquery';

const Main = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (position > 330) {
            $("#mainBackground").css("position", "absolute");
            $("#mainBackground").css("top", "540px");
        } else {
            $("#mainBackground").css("position", "fixed");
            $("#mainBackground").css("top", "208px");
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div id="home" className="min-h-max max-w-[1600px]">
            <div className="main-container">
                <Image
                    id="mainBackground"
                    src="/avery.banner.image.png"
                    width={1000}
                    height={1000}
                    alt="Avery with Raisin in Green Hills, TN"
                    className="rounded-l-2xl shadow-2xl max-w-full"
                />

                <MainText />
            </div>
        </div>
    )
}

export default Main;