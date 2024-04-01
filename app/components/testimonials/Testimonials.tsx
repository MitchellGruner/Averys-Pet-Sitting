"use client";

import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import Image from "next/image";

const Testimonials = () => {
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

    function TestimonialCard({
        imageSrc,
        imageAlt,
        text,
        name,
    }: {
        imageSrc: string;
        imageAlt: string;
        text: string;
        name: string;
    }) {
        return (
            <div className="sm:basis-[100%] md:basis-[47%] lg:basis-[32%] xl:basis-[30%] bg-navy rounded-2xl shadow-xl hover:shadow-2xl transition ease-in-out duration-500 p-6 mx-1 md:mx-2 xl:mx-3 2xl:mx-4 3xl:mx-5">
                <Image
                    src={imageSrc}
                    width={148}
                    height={148}
                    alt={imageAlt}
                    className="rounded-full mt-2 xl:mt-3 2xl:mt-4 mb-6 xl:mb-8 2xl:mb-10 mx-auto"
                />
                <hr className="text-white" />
                <p className="testimonial-paragraph block text-white pt-2 2xl:pt-3 lg:px-2 2xl:px-3">"{text}"</p>
                <span className="text-white italic text-sm text-right block pt-2 md:pt-2 pr-1 xl:pr-2 2xl:pr-4 sm:mt-2 xl:mt-4 2xl:mt-6 mb-1 xl:mb-2 2xl:mb-4">- {name}</span>
            </div>
        )
    };

    return (
        <div id="testimonials" className="relative bg-white block mt-[30em] sm:mt-[40em] lg:mt-[70em] w-full mx-auto">
            <div className="max-w-[1600px] testimonials-container mx-auto pt-20 sm:pt-36 md:pt-24 lg:pt-28 pb-28 sm:pb-40 md:pb-32">
                <h1 className="block text-navy text-center">Testimonials</h1>
                <div className="testimonials-flex flex flex-wrap justify-center sm:mt-2 md:mt-10 mx-10 sm:mx-28 lg:mx-10 xl:mx-28">
                    <TestimonialCard
                        imageSrc="/dogblue.png"
                        imageAlt="Blue Dog Profile"
                        text="Avery is the best pet sitter I've ever had. She's always on time and my dog loves her. I cannot recommend her highly enough for their exceptional dog sitting services. From the moment I entrusted them with the care of my beloved furry friend, I knew I had made the right choice."
                        name="Jane Doe"
                    />
                    <TestimonialCard
                        imageSrc="/catred.png"
                        imageAlt="Red Cat Profile"
                        text="Avery went above and beyond to ensure that my dog felt comfortable and loved in their care. Their genuine passion for animals shone through in every interaction, from the playful walks to the cozy cuddle sessions. Not only did they adhere to my dog's routine and dietary needs meticulously, but they also provided plenty of enrichment and attention, ensuring that my dog was happy and content throughout their stay."
                        name="Mike Jones"
                    />
                    <TestimonialCard
                        imageSrc="/dogyellow.png"
                        imageAlt="Yellow Dog Profile"
                        text="Their professionalism and reliability were evident from start to finish, providing me with peace of mind knowing that my dog was in the best possible hands. I returned to a happy and well-cared-for pup, thanks to Avery's dedication and commitment. I wouldn't hesitate to entrust them with my dog's care again in the future, and I wholeheartedly recommend their services to anyone in need of top-notch dog sitting."
                        name="Sarah Hope"
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;