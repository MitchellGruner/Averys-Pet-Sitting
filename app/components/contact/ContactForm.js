"use client";

import {
    useToast,
} from "@chakra-ui/react";

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const toast = useToast();
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
                    toast({
                        title: "Message Sent!",
                        status: "success",
                        duration: 2000,
                        position: "top",
                    });

                    setName("");
                    setEmail("");
                    setMessage("");
                    setSendButton("Sent!");
                    setSendButtonColor("bg-green-500");

                    setTimeout(() => {
                        setSendButton("Submit");
                        setSendButtonColor("bg-navy");
                        document.querySelector('input[name="user_radio"]:checked').checked = false;
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        } else {
            if (!fullNameResult && emailResult) {
                toast({
                    title: "Please make sure the full name field is correct",
                    status: "warning",
                    duration: 5000,
                    position: "top",
                });
            } else if (fullNameResult && !emailResult) {
                toast({
                    title: "Please make sure the email field is correct",
                    status: "warning",
                    duration: 5000,
                    position: "top",
                });
            } else {
                toast({
                    title: "Please make sure the full name and email fields are correct",
                    status: "warning",
                    duration: 5000,
                    position: "top",
                });
            }
        }
    };

    const radioOptions = [
        { id: 'dog', value: 'Dog', label: 'Dog' },
        { id: 'cat', value: 'Cat', label: 'Cat' },
        { id: 'both', value: 'Dog and Cat', label: 'Both' },
    ];

    return (
        <>
            <div className="wrapper absolute w-full rounded">
                <div className="wave absolute mx-auto"></div>
            </div>

            <div id="contactForm"></div>

            <form ref={form} onSubmit={sendEmail} className="relative flex flex-col items-start w-full xs:w-4/5 sm:w-9/12 md:w-2/3 lg:w-3/4 xl:w-1/2 2xl:w-2/5 mt-8 xs:mt-12 sm:mt-16 md:mt-32 mx-auto">
                <label className="text-white text-lg xs:text-xl lg:text-2xl mb-2">Full Name*</label>
                <input
                    id="full-name-value"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="user_name"
                    className="w-full outline-none text-white bg-transparent py-4 px-4 mb-2 shadow-2xl"
                />

                <label className="text-white text-lg xs:text-xl lg:text-2xl mb-2">Email*</label>
                <input
                    id="email-value"
                    type="email"
                    placeholder="john.doe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="user_email"
                    className="w-full outline-none text-white bg-transparent py-4 px-4 mb-2 shadow-2xl"
                />

                <fieldset className="flex flex-col xs:flex-row items-baseline xs:items-center justify-between py-2 mt-4">
                    {radioOptions.map((option) => (
                        <div className="flex py-1" key={option.id}>
                            <input type="radio" id={option.id} name="user_radio" value={option.value} />
                            <label htmlFor={option.id} className="text-white text-base xs:text-lg lg:text-xl pl-3 pr-8">{option.label}</label>
                        </div>
                    ))}
                </fieldset>

                <label className="text-white text-lg xs:text-xl lg:text-2xl mb-2">Message</label>
                <textarea
                    placeholder="Your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    className="text-white outline-none bg-transparent py-4 px-4 mb-2 shadow-2xl rounded"
                />

                <input type="submit" value={sendButton} className={`w-full outline-none border border-white ${sendButtonColor} text-white cursor-pointer py-2 mt-8 hover:bg-white hover:text-navy hover:border-navy transition ease-in-out duration-500 shadow-2xl`} />
            </form>
        </>
    )
}

export default ContactForm;