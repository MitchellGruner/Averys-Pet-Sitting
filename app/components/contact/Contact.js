"use client";

import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import {useState} from "react";
import {sendContactForm} from "../../lib/api";

import Header from "../Header";

import Image from "next/image";

const initValues = {
    subject: "",
    name: "",
    email: "",
    organization: "",
    message: ""
  };
  
  const initState = {
    error: "",
    values: initValues
  };

const Contact = () => {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const {
        values,
        error
    } = state;

    const onBlur = (event) =>
        setTouched((prev) => ({ ...prev, [event.target.name]: true }));

    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onSubmit = async () => {
        var fullNameValue = document.getElementById("full-name-value")?.value;
        var fullNameRegex = /^([\w]{2,})+\s+([\w\s]{2,})+$/i;
        var fullNameResult = fullNameRegex.test(fullNameValue);

        var emailValue = document.getElementById("email-value")?.value;
        var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailResult = emailRegex.test(emailValue);

        setState((prev) => ({
            ...prev,
        }));
    
        if (fullNameResult && emailResult) {
            try {
                await sendContactForm(values);
                setTouched({});
                setState(initState);
                toast({
                    title: "Message Sent!",
                    status: "success",
                    duration: 2000,
                    position: "top",
                });
                } catch (error) {
                    setState((prev) => ({
                        ...prev,
                        error: error.message,
                    }));
                }
        } else {
            if (!fullNameResult && emailResult) {
                setState((prev) => ({
                    ...prev,
                    error: "Please make sure the full name field is correct",
                }));
            } else if (fullNameResult && !emailResult) {
                setState((prev) => ({
                    ...prev,
                    error: "Please make sure the email field is correct",
                }));
            } else {
                setState((prev) => ({
                    ...prev,
                    error: "Please make sure the full name and email fields are correct",
                }));
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

            <div className="contact-form-container">
                {error && (
                    <Text my={4} fontSize="xl">
                        {error}
                    </Text>
                )}
                <FormControl
                    mb={5}
                    isRequired
                    isInvalid={touched.subject && !values.subject}
                >
                    <FormLabel className="text-white">Subject</FormLabel>
                        <Input
                            type="text"
                            name="subject"
                            className="contact-form-input"
                            errorBorderColor=""
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
        
                <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                    <FormLabel className="text-white">Full Name</FormLabel>
                        <Input
                            id="full-name-value"
                            type="text"
                            name="name"
                            className="contact-form-input"
                            errorBorderColor=""
                            value={values.name}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
        
                <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                    <FormLabel className="text-white">Email</FormLabel>
                        <Input
                            id="email-value"
                            type="email"
                            name="email"
                            className="contact-form-input"
                            errorBorderColor=""
                            value={values.email}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={touched.organization && !values.organization} mb={5}>
                    <FormLabel className="text-white">Organization</FormLabel>
                        <Input
                            type="text"
                            name="organization"
                            className="contact-form-input"
                            errorBorderColor=""
                            value={values.organization}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
        
                <FormControl
                    isRequired
                    isInvalid={touched.message && !values.message}
                    mb={5}
                    >
                    <FormLabel className="text-white">Message</FormLabel>
                        <Textarea
                            type="text"
                            name="message"
                            className="contact-form-input"
                            rows={4}
                            errorBorderColor=""
                            value={values.message}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
        
                <a
                className="contact-form-submit flex justify-center items-center text-white font-bold bg-black rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md 2xl:text-lg"
                disabled={
                    !values.subject || !values.name || !values.email || !values.organization || !values.message
                }
                onClick={onSubmit}
                >
                    Submit!
                </a>
            </div>
        </div>
    )
}

export default Contact;