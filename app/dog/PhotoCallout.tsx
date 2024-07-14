"use client";

import Image from 'next/image';
import {useEffect} from 'react';

function PhotoSlide({
    backgroundImage,
    header,
    paragraph,
}: {
    backgroundImage: string;
    header: string;
    paragraph: string;
}) {
    return (
        <div
            className="slide relative xs:h-[20em] sm:h-[24em] md:h-[28em] xl:h-[32em] m-1 cursor-pointer bg-cover bg-center bg-no-repeat opacity-50 shadow-2xl max-w-[1600px]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="border-gradient absolute opacity-0 bottom-4 left-0 right-0 m-auto sm:max-w-[95%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] py-3 px-6 rounded-ss-3xl rounded-ee-3xl shadow-2xl border border-white text-center">
                <h1 className="text-yellow font-bold italic text-lg md:text-xl xl:text-2xl mb-2"><span>{header}</span></h1>
                <p className="text-white text-sm md:text-base xl:text-lg">{paragraph}</p>
            </div>
        </div>
    )
}

function PhotoContent({
    imageSrc,
    alt,
    header,
    paragraph,
}: {
    imageSrc: string;
    alt: string;
    header: string;
    paragraph: string;
}) {
    return (
        <div className="mt-16 mx-8">
            <Image
                src={imageSrc}
                width={300}
                height={300}
                className="m-auto"
                alt={alt}
            />
            <div className="border-gradient m-auto py-3 px-6 rounded-ss-3xl rounded-ee-3xl shadow-2xl text-center mt-10">
                <h1 className="text-yellow leading-4 font-bold italic text-lg md:text-xl xl:text-2xl mb-4"><span>{header}</span></h1>
                <p className="text-white text-base">{paragraph}</p>
            </div>
        </div>
    )
}

const PhotoCallout = () => {
    useEffect(() => {
        function sliderPluggin(activeslide = 0) {
            const slides = document.querySelectorAll(".slide");
        
            slides[activeslide].classList.add("active");
        
            function clearActiveClasses() {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
            }

            const slideArray = Array.from(slides);
        
            for (const slide of slideArray) {
                slide.addEventListener("click", () => {
                    clearActiveClasses();
                    slide.classList.add("active");
                });
            }
        }
        
        sliderPluggin(0);
    }, []);

    return (
        <div id="photoCallout">
            <div className="photo-callout-container">
				<div className="box-border">
					<div className="hidden sm:flex sm:w-[83%] md:w-[85%] lg:w-[75%] xl:w-[65%] 2xl:w-[60%] sm:mt-12 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-36 mx-auto">
                        <PhotoSlide
                            backgroundImage="/avery.with.cora.png"
                            header="Passionate about happy pups."
                            paragraph="I am deeply passionate about the well-being of the dogs I care for, striving to ensure they are not only happy but also physically and emotionally healthy during their time with me."
                        />
                        <PhotoSlide
                            backgroundImage="/avery.contact.image.png"
                            header="Always there, always caring"
                            paragraph="I take the time to understand each dog's individual needs and preferences, ensuring they receive the tailored care and attention they deserve.
                            "
                        />
						<PhotoSlide
                            backgroundImage="/avery.with.white.dog1.png"
                            header="Safety is my top priority."
                            paragraph="I maintain a vigilant watch over the dogs in my care, creating a secure environment where they can play and relax without worry."
                        />
					</div>

                    <div className="flex flex-col sm:hidden m-auto xs:mx-6">
                        <PhotoContent
                            imageSrc="/avery.with.cora.png"
                            alt="Avery with Squid"
                            header="Passionate about happy pups."
                            paragraph="I am deeply passionate about the well-being of the dogs I care for, striving to ensure they are not only happy but also physically and emotionally healthy during their time with me."
                        />
                        <PhotoContent
                            imageSrc="/avery.contact.image.png"
                            alt="Avery with Coraline"
                            header="Always there, always caring"
                            paragraph="I take the time to understand each dog's individual needs and preferences, ensuring they receive the tailored care and attention they deserve."
                        />
                        <PhotoContent
                            imageSrc="/avery.with.white.dog1.png"
                            alt="Avery with Summer"
                            header="Safety is my top priority."
                            paragraph="I maintain a vigilant watch over the dogs in my care, creating a secure environment where they can play and relax without worry."
                        />
                    </div>
				</div>
			</div>
        </div>
    )
}

export default PhotoCallout;