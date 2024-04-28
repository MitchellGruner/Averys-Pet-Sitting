"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Header from "../Header";

import Image from "next/image";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_51z9btj', 'template_n1e643b', form.current, {
            publicKey: '_HGc4bvBHLirjPTOo',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div id="contact" className="relative block w-full mx-auto 2xl:mt-16">
            <div className="wrapper">
                <div className="wave"></div>
            </div>
            <div className="max-w-[1200px] testimonials-container mx-auto xl:pt-10 xl:pb-4">
                <Header title={"Contact"} color={"text-white"} />
                <div className="flex flex-row items-center justify-center mt-20">
                    <div className="flex justify-end basis-1/2 pr-12 border-r-4 border-white">
                        <Image
                            src="/avery.flowers.image.jpg"
                            width={400}
                            height={400}
                            alt="Avery with Flowers"
                            className="shadow-2xl rounded-md"
                        />
                    </div>
                    <div className="basis-1/2 pl-6 2xl:pr-56">
                        <p className="text-white text-left text-lg xl:text-xl">
                            Looking for trustworthy care for your beloved pets? Look no further! With years of experience and a genuine love for animals, <span className="text-yellow">I provide top-notch dog and cat sitting services tailored to meet your pets' needs</span>. Whether it's daily walks, feeding, or simply providing companionship while you're away, your furry friends will be in safe and loving hands. Contact me today to discuss how I can help care for your pets!
                        </p>
                    </div>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="radio" id="dog" name="user_radio" value="dog" />
                <label for="dog">Dog</label>
                <input type="radio" id="cat" name="user_radio" value="cat" />
                <label for="cat">Cat</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact;