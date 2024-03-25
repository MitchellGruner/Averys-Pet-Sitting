import Link from "next/link";
import Image from "next/image";

const NavbarMenuItems = () => {
    return (
        <div className="hidden md:flex md:flex-row mx-auto">
            <Link href="/dog" className="dog outline inline-block transition ease-in-out duration-500 icon-container">
                <div className="flex flex-row items-center justify-center relative py-1 cursor-pointer hover:text-dark-teal">
                    <Image
                        src="/dogiconwhite2.png"
                        width={24}
                        height={24}
                        alt="Dog Icon"
                        className="unskew"
                    />
                    <Image
                        src="/dogiconteal1.png"
                        width={24}
                        height={24}
                        alt="Dog Icon"
                        className="icon-hover icon-hover-first unskew absolute object-contain opacity-0 transition ease-in-out duration-500"
                    />
                    <span className="md:pl-2 lg:pl-4 font-bold unskew">Dog</span>
                </div>
            </Link>&nbsp;
            <Link href="/contact" className="contact outline inline-block transition ease-in-out duration-500 icon-container">
                <div className="flex flex-row items-center justify-center relative py-1 cursor-pointer">
                    <Image
                        src="/mailiconteal.png"
                        width={24}
                        height={24}
                        alt="Mail Icon"
                        className="unskew"
                    />
                    <span className="md:pl-2 lg:pl-4 font-bold unskew">Contact Me</span>
                </div>
            </Link>&nbsp;
            <Link href="/cat" className="cat outline inline-block transition ease-in-out duration-500 icon-container">
                <div className="flex flex-row items-center justify-center relative py-1 cursor-pointer hover:text-dark-teal">
                    <Image
                        src="/caticonwhite.png"
                        width={24}
                        height={24}
                        alt="Cat Icon"
                        className="unskew"
                    />
                    <Image
                        src="/caticonteal.png"
                        width={24}
                        height={24}
                        alt="Cat Icon"
                        className="icon-hover icon-hover-third unskew absolute object-contain opacity-0 transition ease-in-out duration-500"
                    />
                    <span className="md:pl-2 lg:pl-4 font-bold unskew">Cat</span>
                </div>
            </Link>
        </div>
    )
}

export default NavbarMenuItems;