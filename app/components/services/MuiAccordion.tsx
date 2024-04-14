"use client";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Image from "next/image";

import { useState } from "react";

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false);
    }

    function AccordionItem({
        icon,
        title,
        order,
        content,
        expanded,
        handleChange,
        panel
    } : {
        icon: string,
        title: string,
        order: string,
        content: string,
        expanded: string | false,
        handleChange: (isExpanded: boolean, panel: string) => void,
        panel: string
    }) {
        return (
            <Accordion
                expanded={expanded === panel}
                onChange={(event, isExpanded) => handleChange(isExpanded, panel)}
                className={`${expanded === panel ? 'rounded-bl-2xl rounded-br-2xl' : ''} accordion-div-${order}`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                    className="shadow-2xl py-1 lg:pl-6 xl:pl-8"
                >
                    <Typography className="flex flex-row text-lg text-white font-bold">
                        <Image
                            src={icon}
                            width={25}
                            height={25}
                            alt="Dog Bone Icon"
                            className="lg:mr-4 xl:mr-4"
                        />
                        <h1 className="lg:pl-1 xl:pl-2"><span>{title}</span></h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="md:text-md lg:py-3 xl:py-4 px-1">
                        {content}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }

    return (
        <div id="muiAccordion">
            <AccordionItem
                icon="/services.dog.bone.icon.png"
                title="Spending quality time with your furry friends"
                order="first"
                content="Whether it's cuddling up on the couch, playing fetch in the backyard, or going for a walk around the neighborhood - I'm here to make sure your pets are happy and healthy while you're away."
                expanded={expanded}
                handleChange={handleChange}
                panel="panel1"
            />
            <AccordionItem
                icon="/services.home.icon.png"
                title="Drop-in visits for personalized care"
                order="second"
                content="I provide personalized drop-in visits for your furry companions, ensuring they receive the love, attention, and care they need while you're away. From feeding and playtime to cuddles and companionship, I'll make sure your pets feel safe and happy until your return."
                expanded={expanded}
                handleChange={handleChange}
                panel="panel5"
            />
            <AccordionItem
                icon="/services.pillow.icon.png"
                title="Overnight stays"
                order="third"
                content="Overnight stays as part of my dog sitting service provide your furry companions with the comfort of familiar surroundings and consistent care throughout the night, ensuring they feel secure and loved even when you're away."
                expanded={expanded}
                handleChange={handleChange}
                panel="panel2"
            />
            <AccordionItem
                icon="/services.dumbbell.icon.png"
                title="Playtime and exercise sessions"
                order="fourth"
                content="I prioritize regular exercise and play sessions tailored to your dog's needs, fostering physical health, mental stimulation, and a strong bond between us, ensuring they stay happy and healthy in your absence."
                expanded={expanded}
                handleChange={handleChange}
                panel="panel3"
            />
            <AccordionItem
                icon="/services.car.icon.png"
                title="Pet transportation services for appointments"
                order="fifth"
                content="I'll take the stress out of vet and grooming trips for your beloved pet with my personalized transportation service, ensuring they arrive safely and comfortably every time."
                expanded={expanded}
                handleChange={handleChange}
                panel="panel4"
            />
        </div>
    )
}

export default MuiAccordion;