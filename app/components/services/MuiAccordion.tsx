"use client";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Image from "next/image";

import { useState } from "react";
import React from "react";

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div id="muiAccordion" className="px-4 xs:px-6 sm:px-10">
            <Accordion
                expanded={expanded === "panel1"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
                className={`${expanded === "panel1" ? 'rounded-bl-2xl rounded-br-2xl' : ''} accordion-div-first`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="shadow-2xl py-1 md:pl-4 lg:pl-6 xl:pl-8"
                >
                    <Typography className="flex flex-row text-white font-bold">
                        <Image
                            src="/services.dog.bone.icon.png"
                            width={25}
                            height={25}
                            alt="Dog Bone Icon"
                            className="mr-3 lg:mr-4 xl:mr-4"
                        />
                        <span className="flex items-center pl-0 lg:pl-1 xl:pl-2 text-xs xs:text-sm sm:text-lg md:text-sm lg:text-lg">Spending quality time</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-xs xs:text-sm sm:text-md md:text-sm lg:text-md 2xl:text-lg py-2 sm:py-3 md:py-2 lg:py-3 xl:py-4 px-1">
                        Whether it's cuddling up on the couch, playing fetch in the backyard, or going for a walk around the neighborhood - I'm here to make sure your pets are happy and healthy while you're away.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
                className={`${expanded === "panel2" ? 'rounded-bl-2xl rounded-br-2xl' : ''} accordion-div-second`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className="shadow-2xl py-1 md:pl-4 lg:pl-6 xl:pl-8"
                >
                    <Typography className="flex flex-row text-white font-bold">
                        <Image
                            src="/services.home.icon.png"
                            width={25}
                            height={25}
                            alt="Home Icon"
                            className="mr-3 lg:mr-4 xl:mr-4"
                        />
                        <span className="flex items-center pl-0 lg:pl-1 xl:pl-2 text-xs xs:text-sm sm:text-lg md:text-sm lg:text-lg">Drop-in visits</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-xs xs:text-sm sm:text-md md:text-sm lg:text-md 2xl:text-lg py-2 sm:py-3 md:py-2 lg:py-3 xl:py-4 px-1">
                        I provide personalized drop-in visits for your furry companions, ensuring they receive the love, attention, and care they need while you're away. From feeding and playtime to cuddles and companionship, I'll make sure your pets feel safe and happy until your return.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
                className={`${expanded === "panel3" ? 'rounded-bl-2xl rounded-br-2xl' : ''} accordion-div-third`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className="shadow-2xl py-1 md:pl-4 lg:pl-6 xl:pl-8"
                >
                    <Typography className="flex flex-row text-white font-bold">
                        <Image
                            src="/services.pillow.icon.png"
                            width={25}
                            height={25}
                            alt="Pillow Icon"
                            className="mr-3 lg:mr-4 xl:mr-4"
                        />
                        <span className="flex items-center pl-0 lg:pl-1 xl:pl-2 text-xs xs:text-sm sm:text-lg md:text-sm lg:text-lg">Overnight stays</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-xs xs:text-sm sm:text-md md:text-sm lg:text-md 2xl:text-lg py-2 sm:py-3 md:py-2 lg:py-3 xl:py-4 px-1">
                        Overnight stays as part of my dog sitting service provide your furry companions with the comfort of familiar surroundings and consistent care throughout the night, ensuring they feel secure and loved even when you're away.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel4"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
                className={`${expanded === "panel4" ? 'rounded-bl-2xl rounded-br-2xl' : ''} accordion-div-fourth`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                    className="shadow-2xl py-1 md:pl-4 lg:pl-6 xl:pl-8"
                >
                    <Typography className="flex flex-row text-white font-bold">
                        <Image
                            src="/services.dumbbell.icon.png"
                            width={25}
                            height={25}
                            alt="Weights Icon"
                            className="mr-3 lg:mr-4 xl:mr-4"
                        />
                        <span className="flex items-center pl-0 lg:pl-1 xl:pl-2 text-xs xs:text-sm sm:text-lg md:text-sm lg:text-lg">Exercise and play sessions</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-xs xs:text-sm sm:text-md md:text-sm lg:text-md 2xl:text-lg py-2 sm:py-3 md:py-2 lg:py-3 xl:py-4 px-1">
                        I prioritize regular exercise and play sessions tailored to your dog's needs, fostering physical health, mental stimulation, and a strong bond between us, ensuring they stay happy and healthy in your absence.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel5"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
                className={`${expanded === "panel5" ? 'rounded-bl-2xl rounded-br-2xl' : ''} accordion-div-fifth`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                    className="shadow-2xl py-1 md:pl-4 lg:pl-6 xl:pl-8"
                >
                    <Typography className="flex flex-row text-white font-bold">
                        <Image
                            src="/services.car.icon.png"
                            width={25}
                            height={25}
                            alt="Weights Icon"
                            className="mr-3 lg:mr-4 xl:mr-4"
                        />
                        <span className="flex items-center pl-0 lg:pl-1 xl:pl-2 text-xs xs:text-sm sm:text-lg md:text-sm lg:text-lg">Pet transportation services</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-xs xs:text-sm sm:text-md md:text-sm lg:text-md 2xl:text-lg py-2 sm:py-3 md:py-2 lg:py-3 xl:py-4 px-1">
                    I'll take the stress out of vet and grooming trips for your beloved pet with my personalized transportation service, ensuring they arrive safely and comfortably every time.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MuiAccordion;