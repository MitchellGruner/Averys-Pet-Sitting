"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RaisedText = ({ lineContent1, lineContent2 }) => {
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(() => {
        gsap.from([line1, line2], 0.8, {
            delay: 0.8,
            ease: "power3.out",
            y: 64,
            stagger: {
                amount: 0.15
            }
        });
    }, [line1, line2]);

    return (
        <>
            <p ref={el => (line1 = el)} className="mt-8 2xs:text-sm sm:text-md xl:text-lg leading-6 text-white italic">
                {lineContent1}
            </p>

            <p ref={el => (line2 = el)} className="mt-8 2xs:text-sm sm:text-md xl:text-lg leading-6 text-white italic">
                {lineContent2}
            </p>
        </>
    )
}

export default RaisedText;