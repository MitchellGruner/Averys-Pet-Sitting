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
        <div className="m-4 border-2 border-white">
            {videoSrc && (
                <video src={videoSrc} autoPlay loop muted playsInline />
            )}

            {imageSrc && (
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
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 399,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const carouselItems = [
        { videoSrc: "/cat.video.mp4" },
        { imageSrc: "/cat-page-carousel-image-first2.png", alt: "Cat with Paw in Air" },
        { imageSrc: "/cat-page-carousel-image-second1.jpg", alt: "Avery with Cat on Couch" },
        { videoSrc: "/cat.video.couch.mp4" },
        { imageSrc: "/cat-page-carousel-image-third1.jpg", alt: "Cat with Yellow Eyes in Kennel" },
        { imageSrc: "/cat-page-carousel-image-fourth7.png", alt: "Cat Perched by Bookshelf" },
    ];

    return (
        <section id="catCarousel">
            <div className="mt-16 xs:mt-20 xs:mb-8 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 w-[80%] sm:w-[90%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[70%] 4xl:w-[60%] 6xl:w-[50%] 9xl:w-[40%] mx-auto">
                <h1 className="text-center text-white leading-[0.9em]">Here are some<br /><span className="text-yellow">highlights</span></h1>
                <div className="mx-auto pt-6 xs:pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-6 xs:pb-8 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20">
                    <Slider {...settings} className="cursor-grab">
                        {carouselItems.map((item, index) => (
                            <figure key={index}>
                                <CarouselItem
                                    videoSrc={item.videoSrc}
                                    imageSrc={item.imageSrc}
                                    alt={item.alt}
                                />
                            </figure>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default CatCarousel;