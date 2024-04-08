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

    return (
        <div id="muiAccordion">
            <Accordion
                expanded={expanded === "panel1"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
                className={`${expanded === 'panel1' ? 'rounded-bl-2xl rounded-br-2xl' : ''}`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography className="flex flex-row text-lg">
                        <Image
                            src="/services.panel1.image.png"
                            width={25}
                            height={25}
                            alt="Dog Bone Icon"
                            className="mr-4"
                        />
                        Spending quality time with your furry friends
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-md">
                        Whether it's cuddling up on the couch, playing fetch in the backyard, or going for a walk around the neighborhood - I'm here to make sure your pets are happy and healthy while you're away.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
                className={`${expanded === 'panel2' ? 'rounded-bl-2xl rounded-br-2xl' : ''}`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className="flex flex-row text-lg">
                        <Image
                            src="/services.panel2.image.png"
                            width={25}
                            height={25}
                            alt="Pillow Icon"
                            className="mr-4"
                        />
                        Overnight stays
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-md">
                        Overnight stays as part of my dog sitting service provide your furry companions with the comfort of familiar surroundings and consistent care throughout the night, ensuring they feel secure and loved even when you're away.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
                className={`${expanded === 'panel3' ? 'rounded-bl-2xl rounded-br-2xl' : ''}`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography className="flex flex-row text-lg">
                        <Image
                            src="/services.panel3.image1.png"
                            width={25}
                            height={25}
                            alt="Weights Icon"
                            className="mr-4"
                        />
                        Playtime and exercise sessions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-md">
                        I prioritize regular exercise and play sessions tailored to your dog's needs, fostering physical health, mental stimulation, and a strong bond between us, ensuring they stay happy and healthy in your absence.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel4"}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
                className={`${expanded === 'panel4' ? 'rounded-bl-2xl rounded-br-2xl' : ''}`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <Typography className="flex flex-row text-lg">
                        <Image
                            src="/services.panel3.image.png"
                            width={25}
                            height={25}
                            alt="Weights Icon"
                            className="mr-4"
                        />
                        Pet transportation services for vet visits or grooming appointments
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="text-md">
                        I prioritize regular exercise and play sessions tailored to your dog's needs, fostering physical health, mental stimulation, and a strong bond between us, ensuring they stay happy and healthy in your absence.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MuiAccordion;