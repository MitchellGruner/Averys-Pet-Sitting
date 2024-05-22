"use client";

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
            className="slide relative h-[32em] m-1 cursor-pointer bg-cover bg-center bg-no-repeat opacity-50"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className="absolute opacity-0 bottom-10 left-0 right-0 m-auto max-w-[50%] bg-navy rounded-2xl shadow-2xl text-center">
                <h1 className="text-yellow font-bold italic xl:text-xl">{header}</h1>
                <p className="text-white xl:text-lg">{paragraph}</p>
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
					<div className="flex w-[50%] mt-36 mx-auto">
                        <PhotoSlide
                            backgroundImage="/avery.contact.image.png"
                            header="Caring, Fun, Approachable"
                            paragraph="No pressure on deadline, easy to contact, blah blah blah"
                        />
						<PhotoSlide
                            backgroundImage="/avery.with.white.dog1.png"
                            header="Caring, Fun, Approachable"
                            paragraph="No pressure on deadline, easy to contact, blah blah blah"
                        />
                        <PhotoSlide
                            backgroundImage="/avery.with.cora.png"
                            header="Caring, Fun, Approachable"
                            paragraph="No pressure on deadline, easy to contact, blah blah blah"
                        />
					</div>
				</div>
			</div>
        </div>
    )
}

export default PhotoCallout;