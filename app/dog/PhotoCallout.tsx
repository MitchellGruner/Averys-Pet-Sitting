"use client";

import Image from "next/image";

import {useRef, useEffect} from 'react';

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
        
            // Convert slides to an array
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
        <div id="photoCallout" className="">
            {/* <div className="photo-callout-container">
                <div className="basis-full md:basis-2/6">
                    <Image
                        src="/avery.contact.image.png"
                        width={330}
                        height={330}
                        alt="Avery with Dog"
                    />
                    <hr className="text-white" />
                    <h1 className="text-yellow xl:text-xl font-bold">Free Consultation</h1>
                    <p className="text-white xl:text-lg">
                        I love connecting with both dogs and their owners, which is why I offer a friendly and free consultation through Calendly for dog sitting. It's like scheduling a coffee date but with your pup in mind! This gives us a chance to chat about everything from your dog's favorite toys to their special dietary needs.
                    </p>
                </div>
            </div> */}
            <div className="entire-top10">
				<span className="top10-header-text">Top Selling Items</span>
				<div id="top10">
					<div className="container top10-container">
						<div
							className="slide"
							style={{
                                backgroundImage: "url('/parkbackground.jpg')"
                            }}
						>
							<a href="#trimo" className="top10-text">Trimö</a>
						</div>
						<div
							className="slide"
							style={{
                                backgroundImage: "url('/parkbackground.jpg')"
                            }}
						>
							<a href="#rino" className="top10-text">Rinö</a>
						</div>
						<div
							className="slide"
							style={{
                                backgroundImage: "url('/parkbackground.jpg')"
                            }}
						>
							<a href="#sonik" className="top10-text">Sönik</a>
						</div>
						<div
							className="slide"
							style={{
                                backgroundImage: "url('/parkbackground.jpg')"
                            }}
						>
							<a href="#cam" className="top10-text">Cäm</a>
						</div>
						
					</div>
				</div>
			</div>
        </div>
    )
}

export default PhotoCallout;