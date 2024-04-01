"use client";

import React, { useState, useEffect } from 'react';
import $ from 'jquery';

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

    return (
        <div className="block mt-[60em] mx-auto">
            
        </div>
    )
}

export default Testimonials;