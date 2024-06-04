"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CatCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div id="catCarousel" className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
                            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                                <img src={d.img} alt={d.name} className="h-40" />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-4 p-4">
                                {d.paragraph}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
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