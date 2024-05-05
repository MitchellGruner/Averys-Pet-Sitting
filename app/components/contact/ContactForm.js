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

    return (
        <>
            <div className="wrapper">
                <div className="wave"></div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="mt-56 mx-auto">
                <label className="text-white text-2xl mb-2">Full Name*</label>
                <input
                    id="full-name-value"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="user_name"
                    className="text-white bg-transparent py-4 px-4 mb-2 shadow-2xl"
                />

                <label className="text-white text-2xl mb-2">Email*</label>
                <input
                    id="email-value"
                    type="email"
                    placeholder="john.doe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="user_email"
                    className="text-white bg-transparent py-4 px-4 mb-2 shadow-2xl"
                />

                <label className="text-white text-2xl mb-2">Message</label>
                <textarea
                    placeholder="Your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    className="text-white bg-transparent py-4 px-4 mb-2 shadow-2xl"
                />

                <input type="submit" value={sendButton} className={`border border-white ${sendButtonColor} text-white cursor-pointer py-2 mt-8 hover:bg-white hover:text-navy hover:border-navy transition ease-in-out duration-500 shadow-2xl`} />
            </form>
        </>
    )
}

export default ContactForm;