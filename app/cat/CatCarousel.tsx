"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

function CarouselItem({
    videoSrc,
    imageSrc,
    alt,
}: {
    videoSrc?: string;
    imageSrc?: string;
    alt?: string;
}) {
    return (
        <div className="m-4 border-2 border-white shadow-2xl">
            {videoSrc ? (
                <video src={videoSrc} autoPlay loop muted />
            ) : (
                <Image src={imageSrc} width={400} height={800} alt={alt} />
            )}
        </div>
    );
}

const CatCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
    };

    return (
        <div id="catCarousel" className="mt-36">
            <h1 className="text-center text-white leading-[0.9em]">Here are some<br /><span className="text-yellow">highlights</span></h1>
            <div className="w-3/4 mx-auto pt-16 pb-20">
                <Slider {...settings} className="pointer-events-none">
                    <CarouselItem
                        videoSrc={"/cat.video.mp4"}
                    />
                    <CarouselItem
                        imageSrc={"/cat-page-carousel-image-first1.jpg"}
                        alt="Cat with Paw in Air"
                    />
                    <CarouselItem
                        imageSrc={"/cat-page-carousel-image-second1.jpg"}
                        alt="Avery with Cat on Couch"
                    />
                    <CarouselItem
                        videoSrc={"/cat.video.couch.mp4"}
                    />
                    <CarouselItem
                        imageSrc={"/cat-page-carousel-image-third1.jpg"}
                        alt="Cat with Yellow Eyes in Kennel"
                    />
                    <CarouselItem
                        imageSrc={"/cat-page-carousel-image-fourth6.jpg"}
                        alt="Cat Perched by Bookshelf"
                    />
                </Slider>
            </div>
        </div>
    )
}

export default CatCarousel;