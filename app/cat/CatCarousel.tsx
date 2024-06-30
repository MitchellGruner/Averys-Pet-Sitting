"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

function CarouselItem({
    videoSrc,
    imageSrc,
    alt = "",
}: {
    videoSrc?: string;
    imageSrc?: string;
    alt?: string;
}) {
    return (
        <div className="m-4 border-2 border-white shadow-2xl">
            {videoSrc && (
                <video src={videoSrc} autoPlay loop muted />
            )}

            {imageSrc && (
                <Image src={imageSrc} width={400} height={800} alt={alt} />
            )}
        </div>
    );
}

const CatCarousel = () => {
    let slidesToShow = 1;

    if (window.matchMedia ("(min-width: 400px) and (max-width: 767px)").matches) {
        slidesToShow = 2;
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        slidesToShow = 3;
    }

    const settings = {
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
    };

    return (
        <div id="catCarousel">
            <div className="mt-16 xs:mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 w-[80%] sm:w-[90%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[70%] 4xl:w-[60%] 6xl:w-[50%] 9xl:w-[40%] mx-auto">
                <h1 className="text-center text-white leading-[0.9em]">Here are some<br /><span className="text-yellow">highlights</span></h1>
                <div className="mx-auto pt-6 xs:pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-6 xs:pb-8 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20">
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
        </div>
    )
}

export default CatCarousel;