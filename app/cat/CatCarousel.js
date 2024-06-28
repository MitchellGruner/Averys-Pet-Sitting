"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

import Video from "./Video";

const CatCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div></div>
    )
}

const data = [
    {
        name: `John Morgan`,
        img: `https://randomuser.me/api/port`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        name: `John Morgan`,
        img: `https://randomuser.me/api/port`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        name: `John Morgan`,
        img: `https://randomuser.me/api/port`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        name: `John Morgan`,
        img: `https://randomuser.me/api/port`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        name: `John Morgan`,
        img: `https://randomuser.me/api/port`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        name: `John Morgan`,
        img: `https://randomuser.me/api/port`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        name: `John Morgan`,
        img: `https://randomuser.me/api/port`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        name: `John Morgan`,
        img: `https://randomuser.me/api/port`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    }
]

export default CatCarousel;