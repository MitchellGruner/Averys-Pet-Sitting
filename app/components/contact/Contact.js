"use client";

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import Header from "../Header";

import Image from "next/image";

const Contact = () => {
    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendButton, setSendButton] = useState("Submit");
    const [sendButtonColor, setSendButtonColor] = useState("bg-navy");

    const sendEmail = async (e) => {
        e.preventDefault();

        const serviceId = "service_51z9btj";
        const templateId = "template_n1e643b";
        const publicKey = "_HGc4bvBHLirjPTOo";

        var fullNameValue = document.getElementById("full-name-value").value;
        var fullNameRegex = /^([\w]{2,})+\s+([\w\s]{2,})+$/i;
        var fullNameResult = fullNameRegex.test(fullNameValue);
    
        var emailValue = document.getElementById("email-value").value;
        var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailResult = emailRegex.test(emailValue);

        if (fullNameResult && emailResult) {
            emailjs
                .sendForm(serviceId, templateId, form.current, {
                    publicKey: publicKey,
                })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setName("");
                    setEmail("");
                    setMessage("");
                    setSendButton("Sent!");
                    setSendButtonColor("bg-green-500");

                    setTimeout(() => {
                        setSendButton("Submit");
                        setSendButtonColor("bg-navy");
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        } else {
            if (!fullNameResult && emailResult) {
                alert("Please make sure the full name field is correct");
            } else if (fullNameResult && !emailResult) {
                alert("Please make sure the email field is correct");
            } else {
                alert("Please make sure the full name and email fields are correct");
            }
        }
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

            <form ref={form} onSubmit={sendEmail} className="mt-20">
                <label className="text-white text-xl mb-2">Full Name*</label>
                <input
                    id="full-name-value"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="user_name"
                    className="text-white bg-transparent py-2 px-4 text-sm"
                />

                <label className="text-white text-xl mb-2">Email*</label>
                <input
                    id="email-value"
                    type="email"
                    placeholder="john.doe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="user_email"
                    className="text-white bg-transparent py-2 px-4 text-sm"
                />

                <label className="text-white text-xl mb-2">Message</label>
                <textarea
                    placeholder="Your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    className="text-white bg-transparent text-sm"
                />

                <input type="submit" value={sendButton} className={`border border-white ${sendButtonColor} text-white cursor-pointer text-md py-2 mt-8 hover:bg-white hover:text-navy hover:border-navy transition ease-in-out duration-500`} />
            </form>
        </div>
    )
}

export default Contact;