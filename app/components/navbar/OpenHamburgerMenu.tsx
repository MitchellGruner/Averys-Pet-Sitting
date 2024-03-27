import Link from "next/link";
import Image from "next/image";

const OpenHamburgerMenu = () => {
    return (
        <div id="openHamburgerMenu" className="test-class absolute top-[5.5em] right-0 bg-white rounded-md 2xs:w-60 xs:w-72 border border-slate-600">
            <div className="p-2">
                <div className="flex flex-row justify-around items-center">
                    <h1 className="text-xl font-medium">Hello, Justin</h1>

                    <Image
                        src="/defaultprofilepicture.jpg"
                        width={65}
                    height={0}
                        alt="Hamburger Menu Icon"
                        className="rounded-full p-2"
                    />
                </div>

                <hr className="w-[95%] mx-auto mt-1" />

                <div className="px-4 mt-4 space-y-0">
                    <Link href="/profile" className="inline-block text-left text-md font-medium hover:text-teal transition ease-in-out duration-500">View Profile</Link>
                    <Link href="/contact" className="flex flex-row items-center text-left text-md font-medium hover:text-teal transition ease-in-out duration-500">
                        <span className="pr-4">Contact Avery</span>

                        <Image
                            src="/professionalheadshot.jpg"
                            width={50}
                            height={50}
                            alt="Hamburger Menu Icon"
                            className="rounded-full p-2"
                        />
                    </Link>
                    <Link href="/dog" className="flex flex-row md:hidden pt-4 text-left text-md font-medium hover:text-teal transition ease-in-out duration-500">
                        <Image
                            src="/dogiconteal1.png"
                            width={24}
                            height={24}
                            alt="Dog Icon"
                        />
                        <span className="pl-2">Dog Sitting</span>
                    </Link>
                    <Link href="/cat" className="flex flex-row md:hidden pt-4 text-left text-md font-medium hover:text-teal transition ease-in-out duration-500">
                        <Image
                            src="/caticonteal.png"
                            width={24}
                            height={24}
                            alt="Cat Icon"
                        />
                        <span className="pl-2">Cat Sitting</span>
                    </Link>

                    <Link href="/logout" className="inline-block pt-10 pb-2 text-left text-md text-red font-medium hover:text-black transition ease-in-out duration-500">Log out</Link>
                </div>
            </div>
        </div>
    )
}

export default OpenHamburgerMenu;