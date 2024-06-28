"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";


const CatCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    <video src={"/cat.video.mp4"} style={{ width: "400px", height: "400px" }} autoPlay loop muted />
                </Slider>
            </div>
        </div>
    )
}

export default CatCarousel;