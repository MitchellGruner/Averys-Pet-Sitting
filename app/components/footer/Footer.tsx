import Image from "next/image";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="bg-slate h-64 w-full mt-52 border-t border-white">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-evenly basis-2/3">
                    <div className="flex flex-col pt-6">
                        <h2 className="text-white text-2xl font-bold mb-4">Home</h2>
                        {/* <Link to="contactForm" spy={true} smooth={true} duration={500} className="text-white text-lg">About</Link> */}
                        <p className="text-white text-lg">Testimonials</p>
                        <p className="text-white text-lg">Services</p>
                        <p className="text-white text-lg">Contact</p>
                    </div>
                    <div className="flex flex-col pt-6">
                        <h2 className="text-white text-2xl font-bold mb-4">Dog Services</h2>
                        <p className="text-white text-lg">About</p>
                    </div>
                    <div className="flex flex-col pt-6">
                        <h2 className="text-white text-2xl font-bold mb-4">Cat Services</h2>
                        <p className="text-white text-lg">About</p>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly basis-1/3">
                    <div className="flex flex-col pt-6">
                        <a href="/" className="md:min-w-44 flex flex-row justify-center mt-2">
                            <Image
                                src="/averyspetsittinglogo1.png"
                                width={150}
                                height={150}
                                alt="Avery's Pet Sitting Logo"
                                className="max-w-16 md:max-w-full"
                            />
                        </a>

                        <p className="text-white text-base absolute bottom-6">©2024. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;