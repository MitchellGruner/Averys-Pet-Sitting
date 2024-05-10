import Image from "next/image";
import { Link } from "react-scroll";

const OpenHamburgerMenu = ({closeState}: {closeState: any}) => {
    return (
        <div id="openHamburgerMenu" className="test-class absolute top-[5.5em] right-0 bg-white rounded-md 2xs:w-60 xs:w-72 border border-slate-600">
            <div className="p-2">
                <div className="flex flex-row justify-around items-center">
                    <h1 className="text-xl font-medium">Hello, Justin</h1>

                    <Image
                        src="/defaultprofilepicture.jpg"
                        width={65}
                        height={0}
                        alt="Profile Icon"
                        className="rounded-full p-2"
                    />
                </div>

                <hr className="w-[95%] mx-auto mt-1" />

                <div className="px-4 mt-4 space-y-0">
                    <a href="/profile" className="inline-block text-left text-lg text-navy hover:text-black transition ease-in-out duration-500">View Profile</a>

                    <Link to="contactForm" spy={true} smooth={true} duration={500} offset={-80} className="flex flex-row items-center text-left text-md font-medium hover:text-navy transition ease-in-out duration-500">
                        <span className="pr-4 cursor-pointer text-lg text-navy hover:text-black transition ease-in-out duration-500" onClick={() => closeState(false)}>Contact Avery</span>

                        <Image
                            src="/averysprofessionalphoto.jpg"
                            width={50}
                            height={50}
                            alt="Avery's Headshot"
                            className="rounded-full p-2"
                        />
                    </Link>
                    <a href="/dog" className="flex flex-row md:hidden pt-4 text-left text-md font-medium hover:text-navy transition ease-in-out duration-500">
                        <Image
                            src="/dogiconnavy.png"
                            width={24}
                            height={24}
                            alt="Dog Icon"
                        />
                        <span className="pl-2">Dog Sitting</span>
                    </a>
                    <a href="/cat" className="flex flex-row md:hidden pt-4 text-left text-md font-medium hover:text-navy transition ease-in-out duration-500">
                        <Image
                            src="/caticonnavy.png"
                            width={24}
                            height={24}
                            alt="Cat Icon"
                        />
                        <span className="pl-2">Cat Sitting</span>
                    </a>

                    <a href="/logout" className="inline-block pt-10 pb-2 text-left text-lg text-red font-medium hover:text-black transition ease-in-out duration-500">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default OpenHamburgerMenu;